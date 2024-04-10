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
        <div className="text-5xl"> SUCCESS Page </div>
        <input className="text-gray-900" {...register("testsuccess")} />
        <button type="button" onClick={ () => router.push('/info')}>Prev</button>
        <button type="submit">Submit</button>

        {/* <FormActions>
           <button>Next</button>
       </FormActions> */}
     </FormWrapper>
    )
}