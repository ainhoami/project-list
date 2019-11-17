import React from 'react'
import { useList } from "../hooks"


export default props => {
    const { post, subcateg } = useList()
   return (
    <div className="catpage">
      {post.filter(subc=>subcateg==subc.category_id).map(p => (
          <div>
          
        <p key={p.id}>{p.title}</p>
        <p> {p.id}</p>
        <p>{p.description}</p>
        <p></p>
        </div>
      ))}
    </div>
  )
}
