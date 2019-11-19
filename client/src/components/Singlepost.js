import React from 'react'
import { useList } from "../hooks"
import { Link} from 'react-router-dom'



export default props => {
    const { post, subcateg, singlepost } = useList()
let onepost = post.filter(pf=>pf.id==props.match.params.id)
   return (
    <div className="onePostContainer">
     <h1><Link to={"/"}>&larr;</Link></h1>
{onepost.map(p=>(
    <div key={"p" + p.id} className="postPage">
    <p> {p.date} - <span className="titleonpost">{p.title}</span></p>
    

    <p className="postdesc"> description: </p>
     <p>{p.description}</p>
</div>
))}
        



</div>

 )   
 
}
