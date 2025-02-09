import { deleteSession } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        await deleteSession();

        // Force the cache to revalidate
        return NextResponse.redirect(new URL("/", req.nextUrl), {
            headers: {
                "Cache-Control": "no-store", // Prevents caching
            },
        });
    } catch (error) {
        return NextResponse.json({ message: "Failed to delete session", error }, { status: 500 });
    }
}
