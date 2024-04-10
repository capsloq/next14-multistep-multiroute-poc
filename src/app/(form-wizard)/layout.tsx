import { ReactNode } from "react"
import { FormProvider } from "../providers"

type LayoutProps = {
   children: ReactNode
}

export default function FormWizardLayout({ children }: LayoutProps) {
   return (
      <div className="flex">
         {/* Form SideBar */}
         <div className="w-60 h-60 bg-gray-100 border-2 border-gray-300 text-gray-900 flex justify-center items-center">Sidebar</div>
         <div className="flex-grow">
            <FormProvider>{children}</FormProvider>
         </div>
      </div>
   )
}
