import React, {useState} from 'react'
import { useList } from "../hooks"
import { useForm } from "../hooks"
import { getTime } from 'date-fns'
import { Link} from 'react-router-dom'



export default props => {
    const { titles, categ, post, subcateg } = useList()
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [nameError, setNameError] = useState('')

    const [description, setDescription] = useState('')
    const [parentId, setParentId] = useState('1')

    const {getDataToPost}=useForm()
    let datet=new Date()


    function handleSubmit(e)
    
     {
        e.preventDefault()


if (title=="" || category=="" || description=="")
{
    setNameError("All fields required")
    

}else {



        getDataToPost({
            title,
            // img,
            category,
            date: datet.getMonth()+ "/"+ datet.getDate() + "/" + datet.getFullYear(),
            description
        })
        setTitle('')
        // setImg('')
        setCategory('')
        // setDate('')
        setDescription('')
        setNameError('')
        setParentId('1')
    }
    
 }
   return (
    <div className={ nameError=="" ? "createPostContainer" : "createPostContainer fieldreq"}>
        <h1><Link to={"/"}>&larr;</Link></h1>
        <div className="dropdownCat">
        <select onChange={e=>setParentId(e.target.value)}>
            {titles.map(t=>(
                <option key={"k" + t.id} value={t.id} >{t.name}</option>
            ))}
        </select>
        <div className="subcatOpt">
        {categ.filter(s => parentId==s.parent_id).map(c=>(
        <label key={"lb" + c.id}> {c.name}
            <input type="radio" name="radio" value={c.id} onChange={e=>setCategory(e.target.value)}/>
        </label>
))}
        </div>

</div>

        <form className="creapost" onSubmit={handleSubmit}>
            
                <label labelfor="title">Title</label>
                <input value={title} type="text" name="title" onChange={e=>setTitle(e.target.value)} tabIndex="1" placeholder="Title" id="title"/>
                <label labelfor="description">description</label>
                <textarea value={description} type="text" tabIndex="55" onChange={e=>setDescription(e.target.value)} id="description" name="description"></textarea>
                <button className="btn" type="submit">submit</button>

            
        </form>

        { nameError!="" ? 
        <p className="createPostContainer fieldreq"> *All fields are required</p>
        :""}


</div>

   
  )
}
