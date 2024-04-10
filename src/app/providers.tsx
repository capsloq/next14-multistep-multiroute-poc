"use client"

import { ReactNode } from "react"
import { FormProvider as ReactHookFormProvider, useForm } from "react-hook-form"

type ProviderProps = {
   children: ReactNode
}

export function FormProvider({ children }: ProviderProps) {
   const methods = useForm()

   const onSubmit = (data) => console.log("SUBMITTED!: ", data)

   return (
      <ReactHookFormProvider {...methods}>
         <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
      </ReactHookFormProvider>
   )
}
