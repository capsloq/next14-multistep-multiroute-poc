import Link from "next/link"

export default function GridLayout({ children }: { children: React.ReactNode }) {
   return (
      <>
         <div className="flex flex-col border-8 border-blue-300 min-h-dvh h-dvh">
            {/* // Navbar */}
            <div className="flex bg-orange-300 h-24 items-center px-4 space-x-8">
               <Link href="/">Home</Link>
               <Link href="/grid">Grid 1</Link>
               <Link href="/grid2">Grid 2</Link>
               <Link href="/grid3">Grid 3</Link>
            </div>
            {/* // Main content */}
            <div className="flex-grow flex bg-yellow-400 p-8 overflow-y-auto">{children}</div>
         </div>

         {/* // Footer */}
         <div className="bg-green-300 h-[600px] flex items-center justify-center">
            <h1>Footer</h1>
         </div>
      </>
   )
}
