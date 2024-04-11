"use client"

import { Stepper } from "@/components/stepper/stepper"
import { ReactNode } from "react"
import { FormProvider as ReactHookFormProvider, useForm } from "react-hook-form"

type ProviderProps = {
   children: ReactNode
}

export function FormProvider({ children }: ProviderProps) {
   const methods = useForm()

   const onSubmit = (data: any) => console.log("SUBMITTED!: ", data)

   // onSubmit muss auch aus Context kommen
   // So können Child-Komponenten die Funktion festlegen

   return (
      <Stepper defaultValue="info">
         <ReactHookFormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
         </ReactHookFormProvider>
      </Stepper>
   )
}
