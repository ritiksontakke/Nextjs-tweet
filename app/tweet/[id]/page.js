import { Tweet } from "react-tweet"

export default function Page({ params }) {
    return <div> <Tweet id= {params.id}/> </div>
  }