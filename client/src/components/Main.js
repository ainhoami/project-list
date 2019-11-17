import React from 'react'
import { useList } from "../hooks"
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Left from "./Left"
import Right from "./Right"


export default props => {
    const { titles, categ, subCat, selectedCity } = useList()
    
return (

    <div className="container">
    <Left/>
    <div className="mainContainer">
        <div className="cityHeader">
            <p>{selectedCity}</p>
        </div>
    <div className="main" >
      {titles.map(t => (
          <div key={"k" + t.id} className="categContainer">
                <p className="catTitle">{t.name}</p>
                
                    
                    {categ.filter(c=>c.parent_id==t.id).map(c =>(
                        <div className="catList">
                       <Link to={`/posts/${t.name}/${c.slug}`}  className="catlink" onClick={e=>subCat(c.id)}> <p key={"kc" + c.id} className="catname">{c.name}</p></Link>
                        </div>
 
                 ))}
            </div>
      ))}



    </div>
    </div>
    <Right/>

    </div>

  )
  
}
