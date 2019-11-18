import React from 'react'
import { useList } from "../hooks"
import { useForm } from "../hooks"


export default props => {
    const { titles, categ, post, subcateg } = useList()
    const {getDataToPost, creapost}=useForm()
    function handleSubmit(e)
    {

        e.preventDefault()
        getDataToPost(creapost)
        console.log(creapost)
    }

   return (
    <div className="createPostContainer">
        <select>
            {titles.map(t=>(
                <option key={"k" + t.id} value={t.id}>{t.name}</option>
            ))}
        </select>
    
        <form className="creapost" onSubmit={handleSubmit}>
            
                <label labelfor="title">Title</label>
                <input type="text" name="title" onChange={e=>creapost.title =e.target.value} tabIndex="1" placeholder="Title" id="title"/>
                <label labelfor="picurl">IMG</label>
                <input type="text" name="picurl" onChange={e=>creapost.picurl =e.target.value} tabIndex="2" placeholder="pic" id="lname"/>
                <label labelfor="category">Category</label>
                <input type="text" name="category" onChange={e=>creapost.category_id =e.target.value} tabIndex="3" placeholder="" id="category"/>
                <label labelfor="date">date</label>
                <input type="text" name="date" onChange={e=>creapost.date =e.target.value} tabIndex="4" placeholder="" id="date"/>
                <label labelfor="description">description</label>
                <textarea type="text" tabIndex="55" onChange={e=>creapost.description =e.target.value} id="description" name="description"></textarea>
                <button className="btn" type="submit">submit</button>

            
        </form>


</div>

   
  )
}
