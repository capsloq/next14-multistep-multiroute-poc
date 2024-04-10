import { cache } from "react";


const calculateNorm = cache((vector) => {
    
    console.log("🚀 ~ calculateNorm")
  });


function MapMarker(props) {
    // ✅ Good: Pass the same `vector` object
    const length = calculateNorm(props.vector);
    // ...
  }


  function MapMarker2(props) {
    // ✅ Good: Pass the same `vector` object
    const length = calculateNorm(props.vector);
    // ...
  }


export default function ReactCachePage() {

    const vector = [10,10,10]
    const length = calculateNorm(vector);
    const length2 = calculateNorm(vector);
    const length3 = calculateNorm(vector);


    return (
        <>
        <div className="flex flex-col">
            <div>5 === 5 is {JSON.stringify(Object.is(5,5))}</div>       
            <div>&#123;&#125; === &#123;&#125; is {JSON.stringify(Object.is({},{}))}</div>  
            <div>[10,10,10] === [10,10,10] is {JSON.stringify(Object.is([10,10,10],[10,10,10]))}</div>       
            <div>vector === vector is {JSON.stringify(Object.is(vector,vector))}</div>       

        </div>
        
        </>

    )
}