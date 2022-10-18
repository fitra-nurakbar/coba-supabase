import {useRouter} from "next/router"

export default function Handle() {
     const router =useRouter()
     const { id } = router.query

     const test = `id: ${id}`
     console.log(test)
     return (
          <section>
               <h1>id: {id}</h1>
          </section>
     )
}