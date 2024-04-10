import { Metadata, ResolvingMetadata } from 'next'



type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}


export async function generateStaticParams() {
   
   
    return [{
      slug: "test",
    }]
  
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id
 
  console.log('meta data executed')
  // fetch data
  //   const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: "title",
    
  }
}
 
export default function Page({ params, searchParams }: Props) {
    return(
        <div>hello</div>
    )
}