import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const todo = await prisma.todo.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!todo) {
    return NextResponse.json({ error: "Todo not found!" }, { status: 404 });
  }
  return NextResponse.json(todo);
}
