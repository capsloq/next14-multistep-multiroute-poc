import Link from "next/link"

export default function Home() {
   return (
      <main className="flex min-h-screen p-24">
         <p>Multi Step Multi Route Form.</p>
         <p> 2 Steps to illustrate the concept.</p>
         <div>
            Step one is{" "}
            <Link
               href="/info"
               className="text-blue-500"
            >
               /info
            </Link>{" "}
            and Step two is{" "}
            <Link
               href="/success"
               className="text-blue-500"
            >
               /success
            </Link>
         </div>
      </main>
   )
}
