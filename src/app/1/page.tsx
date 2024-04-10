"use client"
import { cn } from "@/lib/utils"
import React, { ReactNode } from "react"

export default function Page() {
   return (
      <Tabs defaultValue="tab2">
         <div className="flex gap-2 items-stretch">
            <TabHeader value="tab1">
               <span className="text-blue-800">Tab1</span>
            </TabHeader>
            <TabHeader value="tab2">
               <span className="font-bold">Tab2</span>
            </TabHeader>
            <TabHeader value="tab3">
               <a className="text-blue-800 block">Tab3</a>
               <span className="text-xs">(* disclaimer)</span>
            </TabHeader>
         </div>
         <Tab
            className="bg-blue-400"
            value="tab1"
         >
            <div>Tab 1 Content</div>
         </Tab>
         <Tab
            className="bg-orange-400"
            value="tab2"
         >
            <div>Tab 2 Content</div>
         </Tab>
         <Tab value="tab3">
            <h1 className="text-3xl text-black leading-loose">Tab 3 Content</h1>
            <div className="p-4">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis in sunt expedita culpa? Officia aut esse doloribus assumenda aperiam, vitae
               aspernatur magni obcaecati consequatur veniam expedita facilis. Adipisci, animi tempore.{" "}
            </div>
         </Tab>
      </Tabs>
   )
}

type TabsContextType = {
   currentTabValue: string
   setTabValue: (tabValue: string) => void
}

const TabsContext = React.createContext<TabsContextType | undefined>(undefined)

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
   children: ReactNode
   defaultValue: string
}

export function Tabs({ children, className, defaultValue, ...props }: TabsProps) {
   const [currentTabValue, setTabValue] = React.useState(defaultValue)

   return (
      <TabsContext.Provider
         value={{
            currentTabValue,
            setTabValue,
         }}
      >
         <div
            className={cn("font-bold", className)}
            {...props}
         >
            {children}
         </div>
      </TabsContext.Provider>
   )
}

// Custom hook to retrieve and guard the Context
function useTabs() {
   const context = React.useContext(TabsContext)
   if (context === undefined) {
      throw new Error("Context must be in a wrapping <Tabs>...</Tabs>")
   }
   return context
}

interface TabHeaderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   children: ReactNode
   value: string
}

export function TabHeader({ children, className, value, ...props }: TabHeaderProps) {
   const { setTabValue } = useTabs()

   const handleTabClick = () => {
      setTabValue(value)
   }

   return (
      <button
         className={cn("bg-gray-100 text-gray-900 px-3 py-1.5", className)}
         onClick={handleTabClick}
         aria-label={value}
         {...props}
      >
         {children}
      </button>
   )
}

interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
   children: ReactNode
   value: string
}

export function Tab({ children, className, value, ...props }: TabProps) {
   const { currentTabValue } = useTabs()

   return value === currentTabValue ? (
      <div
         className={cn("bg-gray-100 text-gray-900 p-4", className)}
         {...props}
      >
         {children}
      </div>
   ) : null
}
