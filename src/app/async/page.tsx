async function wait(ms: number) {
  
    console.log("waiting...")
   await new Promise((resolve) => setTimeout(resolve, ms))
}

export default function AsyncPage() {
  
   console.log("done waiting")
   return (
      <div>
         <h1>Async Page</h1>
      </div>
   )
}
