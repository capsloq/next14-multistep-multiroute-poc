"use client"

import { useFormContext } from "react-hook-form"
import { FormWrapper } from "../info/page"
import { useRouter } from "next/navigation"
import React from "react"
import { cn } from "@/lib/utils"
import { Step, StepActions, useStep } from "@/components/stepper/stepper"

export default function SuccessPage() {
   const router = useRouter()

   const { register, watch } = useFormContext()
   const { setCurrentStep } = useStep()

   return (
      <FormWrapper
         heading="One Pager Form"
         description="All Steps in one Page."
      >
        
            {/* Add Form Fields (...register) */}
            <Step value="info">
               <div className="text-5xl"> Info Page </div>
               <input
                  className="text-gray-900"
                  {...register("testinfo")}
               />
               <StepActions>
                  <button
                     type="button"
                     onClick={() => setCurrentStep("success")}
                  >
                     Next
                  </button>
               </StepActions>
            </Step>

            <Step value="success">
               <div className="text-5xl"> SUCCESS Page </div>
               <input
                  className="text-gray-900"
                  {...register("testsuccess")}
               />
            <StepActions>
               <button
                  type="button"
                  onClick={() => setCurrentStep("info")}
               >
                  Prev
               </button>
               <button type="submit">Submit</button>
            </StepActions>
            </Step>

        
      </FormWrapper>
   )
}