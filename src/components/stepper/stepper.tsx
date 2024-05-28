import { cn } from "@/lib/utils"
import React from "react"
import { FieldValues, SubmitHandler } from "react-hook-form"

type StepperContextType = {
   currentStep: string
   setCurrentStep: (step: string) => void
   onSubmit: SubmitHandler<FieldValues>
   setOnSubmit: (onSubmit: SubmitHandler<FieldValues>) => void

}

interface StepperProps extends React.HTMLAttributes<HTMLElement> {
   children: React.ReactNode
   defaultValue?: string
}

const StepperContext = React.createContext<undefined | StepperContextType>(undefined)

export function Stepper({ children, className, defaultValue }: StepperProps) {
   const [currentStep, setCurrentStep] = React.useState(defaultValue ?? "")
   const [onSubmit, setOnSubmit] = React.useState<SubmitHandler<FieldValues>>(() => {
      return (data: FieldValues) => {
         console.log("Default onSubmit, data:", data)
      }
   })

   return (
      <StepperContext.Provider value={{ currentStep, setCurrentStep, onSubmit, setOnSubmit }}>
         <div className={cn("bg-gray-900 p-4 text-white", className)}>{children}</div>
      </StepperContext.Provider>
   )
}

// Custom Hook to retrieve the current Step
export function useStep() {
   const context = React.useContext(StepperContext)
   if (context === undefined) {
      throw new Error("useStep must be used within a Step")
   }
   return context
}

interface StepProps extends React.HTMLAttributes<HTMLElement> {
   children: React.ReactNode
   value: string
}
export function Step({ children, className, value }: StepProps) {
   const { currentStep } = useStep()

   return (
      <div className={cn("transition-opacity duration-300", { "opacity-100": currentStep === value, "opacity-0": currentStep !== value }, className)}>
         {children}
      </div>
   )
}

export function StepActions({ children }: { children: React.ReactNode }) {
   return <div className="flex justify-between">{children}</div>
}
