"use client"

import { createInvoice } from "@/server-actions/actions"

export default function Page() {


   return (
      <form className="flex flex-col text-black" action={createInvoice}>
         <input name="customerId" />
         <input name="amount" />
         <input name="status" />
         <button type="submit">Submit</button>
      </form>
   )
}
