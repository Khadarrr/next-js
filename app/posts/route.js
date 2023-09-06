import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json({posts: "successsss"}, {status: 300});
}

const data = {
    message: 'Hello, this is your custom API!',
    timestamp: new Date().toISOString(),
  };
  
  export default function handler(req, res) {
    res.status(200).json(data);
  }