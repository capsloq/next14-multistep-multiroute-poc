"use client"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import React from "react"
import { useFormContext } from "react-hook-form"

// Wrapper should be in it's own file *************************************************
type FormWrapperProps = React.HTMLAttributes<HTMLElement> & {
   children: React.ReactNode
   heading: string
   description: string
}

export function FormWrapper({ children, className, heading, description, ...props }: FormWrapperProps) {
   return (
      <section
         className={cn(
            "flex flex-col w-full h-full",
            "px-6 lg:px-[100px] pt-7 lg:pt-12 pb-8 lg:pb-4",
            "bg-white lg:bg-transparent rounded-lg lg:rounded-none shadow-lg lg:shadow-none",
            className
         )}
      >
         <h1 className="text-2xl lg:text-[34px] font-bold">{heading}</h1>
         <p className="mt-1">{description}</p>
         {children}
      </section>
   )
}
// *************************************************************************************

export default function InfoPage() {
   const router = useRouter()
   const { register, watch } = useFormContext()
   console.log("🚀 ~ getValues:", watch())

   return (
      <FormWrapper
         heading="Information"
         description="Provide your basic information so we can hunt you down more easily."
      >
         {/* Add Form Fields (...register) */}
         <div> Info Page </div>
         <div className="flex gap-4 mt-4">
            <label htmlFor="test">Test Input</label>
            <input
               className="text-gray-900"
               {...register("test")}
            />
         </div>
         <div className="flex gap-4 mt-4">
            <button
               type="button"
               className="bg-blue-500 p-2 rounded"
               onClick={() => router.push("/success")}
            >
               Next
            </button>
         </div>
      </FormWrapper>
   )
}
