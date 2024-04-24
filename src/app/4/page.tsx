
import Search from "./search"

export default function Page({searchParams}) {
 
    const userSearchTerm = searchParams.search ?? ""  

    // Connect to Redis or fetch or whatever here

    return (
        <div>            
            <h2>Current Search Term: {userSearchTerm}</h2>        
            <Search />
        </div>
    )
}