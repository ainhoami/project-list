import React from 'react'
import { useList } from "../hooks"
import { Link} from 'react-router-dom'


export default props => {
    const { titles } = useList()

return (
    <div className="left">
        <h3> Projectlist </h3>
        <p><Link to={"/posts/createpost"}>Create a posting</Link></p>
        <p>My account</p>

        <input placeholder="search craiglist" className="searchp" type="text"></input>
        <div className="linktopages">
        <p>help, faq, abuse, legal</p>
        <p>avoid scams fraud</p>
        <p>personal safety tips</p>
        <p>terms of use</p>
        <p>privacy policy</p>
        <p>system status</p>
     </div>

       
      </div>

    
        
    
  )
}
