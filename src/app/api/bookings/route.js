import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const bookings = await prisma.booking.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(bookings);
}

export async function POST(req) {
  const body = await req.json();

  const booking = await prisma.booking.create({
    data: {
      guestName: body.guestName,
      roomNumber: Number(body.roomNumber),
    },
  });

  return NextResponse.json(booking);
}