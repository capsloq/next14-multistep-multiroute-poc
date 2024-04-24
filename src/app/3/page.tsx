"use client"

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"


export default function Page() {
    const pathname = usePathname()
    const {replace} = useRouter()
    const searchParams = useSearchParams()

    const selectedRegeion = searchParams.get("region") ?? ""

    function removeRegionParam() {
        const params = new URLSearchParams(searchParams)
        params.delete("region")
        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div>
            <h1>Pathname: {pathname}</h1>
            <h2>Selected Region: {selectedRegeion}</h2>
            <Link href="?region=us">US</Link>
            <Link href="?region=eu">EU</Link>
            {/* Delete Regions */}
            <Link href="?">All</Link>
            {/* With a Remove Button */}
            <button onClick={removeRegionParam}>Remove</button>
        </div>
    )

}


