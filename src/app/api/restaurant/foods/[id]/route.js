import { connectionStr } from "@/app/lib/db";
import { foodsSchema } from "@/app/lib/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request,content){
    const id = content.params.id
    let success = false;
    console.log(id)
    await mongoose.connect(connectionStr, {});
    const result = await foodsSchema.find({resto_id:id})
    if(result){
        success = true
    }
    return NextResponse.json({result,success})
}

export async function DELETE(request,content){
    const id = content.params.id
    let success = false;
    await mongoose.connect(connectionStr, {});
    const result = await foodsSchema.deleteOne({_id:id})
    if(result.deletedCount > 0){
        success = true
    }
    return NextResponse.json({result,success})
}