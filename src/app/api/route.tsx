import { NextResponse } from "next/server"

export const GET = async () =>{
return NextResponse.json({message: "Hello From next js server"})
}
export const POST = async (Request:Request) =>{
return NextResponse.json({message: "Hello From next js server"})
}
export const PUT = async () =>{
return NextResponse.json({message: "Hello From next js server"})
}
export const PATCH = async () =>{
return NextResponse.json({message: "Hello From next js server"})
}
export const DELETE = async () =>{
return NextResponse.json({message: "Hello From next js server"})
}