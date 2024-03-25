import { connectionStr } from "@/app/lib/db";
import { foodsSchema } from "@/app/lib/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    let payload = await request.json();
    let success = false;
    await mongoose.connect(connectionStr, {});
    const food = new foodsSchema(payload)
    let result = await food.save()
    if(result){
        success = true;
    }
    return NextResponse.json({ result, success })
}