import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json({posts: "success"}, {status: 200});
}