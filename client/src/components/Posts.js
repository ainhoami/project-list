import React from 'react'
import { useList } from "../hooks"
import { Link} from 'react-router-dom'



export default props => {
    const { post, subcateg } = useList()
    let msg=""
    let noposts=false
    // console.log(props)
   return (
    <div className="postpageContainer">
     <h1><Link to={"/"}>&larr;</Link></h1>


{post.filter(pf=>pf.category_id==subcateg).length >0? 

post.filter(pf=>pf.category_id==subcateg).map(p => {
    return (
      <div key={"p" + p.id} className="postPage">
        <p> {p.date} - <Link to={`/posts/${props.match.params.catitle}/${props.match.params.catname}/${p.id}`}> {p.title}</Link></p>
       
    </div>
)})
 : props.match.params.catname + " category has no posts"}


</div>

 )   
 
}

