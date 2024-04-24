"use client"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation";
import React from "react"
import { useFormContext } from "react-hook-form"



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
         <h1 className="text-2xl lg:text-[34px] font-bold text-marine-blue">{heading}</h1>
         <p className="text-cool-gray mt-1">{description}</p>
         {children}
      </section>
   )
}

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
         <input className="text-gray-900" {...register("test")} />

         {/* <FormActions> */}
            {/* <button>Prev</button> */}
            <button type="button" onClick={ () => router.push('/success')}>Next</button>
        {/* </FormActions> */}
      </FormWrapper>
   )
}

// const FormContext = React.createContext()




