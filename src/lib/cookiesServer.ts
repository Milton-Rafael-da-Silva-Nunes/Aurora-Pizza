import { cookies } from "next/headers";

export async function getCookieServer() {
    const tokenStorage = await cookies();
    const token = tokenStorage.get("token")?.value;
    
    return token || null;
}