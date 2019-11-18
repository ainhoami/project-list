import React from 'react'
import { useList } from "../hooks"


export default props => {
    const { post, subcateg } = useList()
    let msg=""
    let noposts=false
   return (
    <div className="postpageContainer">
    {post.map(p => {
      if(p.category_id==subcateg){
        return (
          <div key={"p" + p.id} className="postPage">
            <p>Post title: {p.title}</p>
            <p> post id: {p.id}</p>
            <p> post img: {p.url}</p>
          <p>post category_id: {p.category_id}</p>
          <p>post date: {p.date}</p>

            <p>Post description: </p>
             <p>{p.description}</p>
        </div>
        )
      }
     

    }

    )}

</div>


    




    
  )
}
