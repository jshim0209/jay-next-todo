import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

const prisma = new PrismaClient();

export async function GET() {
  const todos = await prisma.todo.findMany();
  return NextResponse.json(todos);
}

export async function POST(request: NextRequest) {
  const body = await await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 422 });

  const todoCreated = await prisma.todo.create({
    data: {
      title: body.title,
      description: body.description,
      isDone: false,
      dateCreated: new Date(),
    },
  });
  return NextResponse.json(todoCreated, { status: 201 });
}
