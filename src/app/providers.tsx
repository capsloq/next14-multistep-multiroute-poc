"use client"

import { Stepper, useStep } from "@/components/stepper/stepper"
import { on } from "events"
import React, { ReactNode } from "react"
import { FieldValues, FormProvider as ReactHookFormProvider, SubmitHandler, useForm } from "react-hook-form"

type ProviderProps = {
   children: ReactNode
}

export function StepperProvider({ children }: ProviderProps) {
   return <Stepper defaultValue="info">{children}</Stepper>
}

export function FormProvider({ children }: ProviderProps) {
   const methods = useForm()

   const { onSubmit } = useStep()
   // const onSubmit = (data: FieldValues) => {
   //    console.log("Default onSubmit, data:", data)
   // }

   // const { onSubmit, setOnSubmit } = useFormOnSubmit()

   // onSubmit muss auch aus Context kommen
   // So können Child-Komponenten die Funktion festlegen

   return (
      <ReactHookFormProvider {...methods}>
         <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
      </ReactHookFormProvider>
   )
}
