import { cn } from "@/lib/utils"
import React from "react"

type StepperContextType = {
   currentStep: string
   setCurrentStep: (step: string) => void
}

interface StepperProps extends React.HTMLAttributes<HTMLElement> {
   children: React.ReactNode
   defaultValue?: string
}

const StepperContext = React.createContext<undefined | StepperContextType>(undefined)

export function Stepper({ children, className, defaultValue }: StepperProps) {
   const [currentStep, setCurrentStep] = React.useState(defaultValue ?? "")

   return (
      <StepperContext.Provider value={{ currentStep, setCurrentStep }}>
         <div className={cn("bg-gray-700 p-4", className)}>{children}</div>
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
