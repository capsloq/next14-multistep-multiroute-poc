// user search
"use client"

import { useSearchParams, useRouter } from "next/navigation"


export default function Search() {
    const searchParams = useSearchParams() 
    const {replace} = useRouter()

    const handleChange = (value: string) => {
        const params = new URLSearchParams(searchParams)
        params.set("search", value)
        replace(`?${params.toString()}`)
    }

    return (
        <div>
            <h1>Search</h1>
            <input type="text" placeholder="Search..." onChange={(e)=>handleChange(e.target.value)} />
        </div>
    )
}