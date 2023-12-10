import { NextResponse } from "next/server";
import {headers} from 'next/headers'
import * as jose from 'jose'
import jwt from "jsonwebtoken";
import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
export async function GET(request){
    const headersInstance = headers()
    const barearToken =  headersInstance.get("Authorization")

    if(!barearToken){
        return NextResponse.json({
            errorMessage:"Barear token not define"
        })
    }

    const Token = barearToken.split(" ")[1]

    if(!Token){
        return NextResponse.json({
            errorMessage:"token Not define"
        })
    }
    const signature = new TextEncoder().encode(process.env.JWT_SECRET)
    try {
        jose.jwtVerify(Token, signature)
    } catch (error) {
        return NextResponse.json({
            errorMessage:"Unauthorized request"
        })
    }

    const payload = jwt.decode(Token)
    await connectMongoDB();
    const userWithEmail = await User.findOne({email:payload.email}).select("first_name email")
    
    return NextResponse.json({
        id:userWithEmail
    })
}