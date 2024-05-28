import SidebarLink from "@/app/sidebar/sidebar-link"

const fakeMdxPaths = [
   {
      id: 1,
      path: "/apple",
   },
   {
      id: 2,
      path: "/banana",
   },
   {
      id: 3,
      path: "/cherry",
   },
]

// Server
export default function SidebarLoader() {
   // Load path from mdx file
   const mdxPath = fakeMdxPaths[0]

   let SidebarComponent = DefaultSidebar

   if (mdxPath.path.startsWith("/a")) {
      SidebarComponent = AppleSidebar
   } else if (mdxPath.path.startsWith("/b")) {
      SidebarComponent = BananaSidebar
   }

   return <SidebarComponent />
}

export function DefaultSidebar() {
   return (
      <div className="bg-gray-300">
         <SidebarLink href="/apple">Apple</SidebarLink>
         <SidebarLink href="/banana">Banana</SidebarLink>
         <SidebarLink href="/cherry">Cherry</SidebarLink>
      </div>
   )
}

export function AppleSidebar() {
   return (
      <div className="bg-red-500">
         <SidebarLink href="/apple">Apple</SidebarLink>
         <SidebarLink href="/sidebar">Sidebar</SidebarLink>
         <SidebarLink href="/cherry">Cherry</SidebarLink>
      </div>
   )
}

export function BananaSidebar() {
   return (
      <div className="bg-yellow-300">
         <SidebarLink href="/apple">Apple</SidebarLink>
      </div>
   )
}
