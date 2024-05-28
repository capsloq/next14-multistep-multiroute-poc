"use client"

import { useFormContext } from "react-hook-form"
import { FormWrapper } from "../info/page"
import React from "react"
import { Step, StepActions, useStep } from "@/components/stepper/stepper"

export default function SuccessPage() {
   const { register, formState, trigger } = useFormContext()
   const { setCurrentStep, setOnSubmit } = useStep()

   const { errors } = formState


   // UseEffect to set the onSubmit function
   React.useEffect(() => {      
      setOnSubmit(() => {
         return (data: any) => {
            console.log("FROM CHILD!!!!:", data)
         }
      })
   }, [setOnSubmit])

   const validateStepOne = async () => {      
      const isValid = await trigger(["testinfo"])

      if (isValid) {
         setCurrentStep("success")
      }
   }

   return (
      <FormWrapper
         heading="Multi Step Multi Route Form"
         description="Every step is a different route."
      >
         {/* Add Form Fields (...register) */}
         <Step value="info">
            <div className="text-5xl"> Info Page </div>
            <input
               className="text-gray-900"
               {...register("testinfo", { required: "This field is required." })}
            />
            {errors.testinfo && (
               <span className="text-xs lg:text-sm font-medium lg:font-bold tracking-wide text-red-400">{errors.testinfo.message?.toString()}</span>
            )}
            <StepActions>
               <button
                  type="button"
                  onClick={validateStepOne}
               >
                  Next
               </button>
            </StepActions>
         </Step>

         <Step value="success">
            <div className="text-5xl"> SUCCESS Page </div>
            <input
               className="text-gray-900"
               {...register("testsuccess", { required: "Test Succes field is required." })}
            />
            {errors.testsuccess && (
               <span className="text-xs lg:text-sm font-medium lg:font-bold tracking-wide text-red-400">{errors.testsuccess.message?.toString()}</span>
            )}
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
