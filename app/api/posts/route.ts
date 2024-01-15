import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const postCreated = await prisma.post.create({
    data: {
      description: body.description,
      dateCreated: new Date(),
    },
  });
  return NextResponse.json(postCreated, { status: 200 });
}
