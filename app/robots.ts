import {userAgent} from "next/server";

export default function robots() {
    return {
        rules: [
            {
                userAgent: "",
                allow: "/",
                disallow: ["/admin", "/result"],
            }
        ],
        sitemap: "https://bucurieindar.org/sitemap.xml"
    }
}