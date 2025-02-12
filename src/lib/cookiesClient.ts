import { getCookie } from "cookies-next";

export function getCookiesClient() {
    const token = getCookie("token");
    return token;
}