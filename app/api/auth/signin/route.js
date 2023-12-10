import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import validator from "validator";
import * as jose from 'jose'
import bcrypt from 'bcrypt'

export async function GET() {
    return NextResponse.json({
        "id": "hanzala"
    })
}

export async function POST(request) {
    const res = await request.json();

    const errors = []
    const validatorSchema = [
        {
            valid: validator.isEmail(res.email),
            errorMessage: "Email is enter is not vailid"
        },
        {
            valid: validator.isStrongPassword(res.password),
            errorMessage: "password entered is not strong"
        }
    ]

    validatorSchema.forEach((check) => {
        if (!check.valid) {
            errors.push(check.errorMessage)
        }
    })

    if (errors.length) {
        return NextResponse.json({ errorMessage: errors[0] })
    }

    await connectMongoDB();

    const usersWithEmail = await User.findOne({ email: res.email })

    if (!usersWithEmail) {
        return NextResponse.json({ message: "No user found Create an Account" })
    }


    const isMatch = await bcrypt.compare(res.password,usersWithEmail.password)
    if(!isMatch){
        return NextResponse.json({errorMessage:"password Entered is incorrect"})
    }

    const alg = "HS256"
    const signature = new TextEncoder().encode(process.env.JWT_SECRET)
    const token = await new jose.SignJWT({ email: res.email })
    .setProtectedHeader({ alg })
    .setExpirationTime("24h")
    .sign(signature)

    return NextResponse.json({ token})
}