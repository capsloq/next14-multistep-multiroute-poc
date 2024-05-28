"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarLink({href, children}) {
    const path = usePathname()
    const linkIsActive = path === href  


    return (
        <Link href={href} className={cn("px-4 py-2", linkIsActive ? "bg-blue-300 text-bold" : "bg-blue-100")}> {children} </Link>
    )
}