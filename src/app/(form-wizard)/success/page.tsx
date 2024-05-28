"use client"

import { useFormContext } from "react-hook-form"
import { FormWrapper } from "../info/page"
import { useRouter } from "next/navigation"

export default function SuccessPage() {
   const router = useRouter()

   const { register, watch } = useFormContext()

   return (
      <FormWrapper
         heading="Success"
         description="Thank you! You have successfully completed the form. You can now rest in peace."
      >
         {/* Add Form Fields (...register) */}

         <div className="flex gap-4 mt-4">
            <label htmlFor="test">TestSuccess Input</label>
            <input
               className="text-gray-900"
               {...register("testsuccess")}
            />
         </div>
         <div className="flex gap-4 mt-4">
            <button
               type="button"
               className="bg-blue-500 p-2 rounded"
               onClick={() => router.push("/info")}
            >
               Prev
            </button>
            <button
               className="bg-green-500 p-2 rounded"
               type="submit"
            >
               Submit
            </button>
         </div>
      </FormWrapper>
   )
}
