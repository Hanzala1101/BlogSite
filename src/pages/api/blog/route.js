import connectMongoDB from "@/lib/mongodb";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Blog.create({ title, description });
  return NextResponse.json({ message: "Blog Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const Blogs = await Blog.find();
  return NextResponse.json({ Blogs })}