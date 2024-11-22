import { NextRequest } from "next/server";

export default async function parseBody(request: NextRequest) {
    const contentType = request.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
        return await request.json();
    }
    throw new Error("Unsupported content type: " + contentType);
}
