import React from 'react'
import { useList } from "../hooks"
import { Link} from 'react-router-dom'


export default props => {
    const { whatCity, selectedCity } = useList()

    function setcity(city)
    {
    
      whatCity(city)

    }

return (
    <div className="right">

          <ul className="cities">
            <p>Cities</p>
            <li onClick={e=>setcity("atlanta")}> <Link to="/atlanta" className="citylink" >atlanta</Link></li>
            <li onClick={e=>setcity("austin")}> <Link to="/austin" className="citylink" >austin</Link></li>
            <li onClick={e=>setcity("boston")}> <Link to="/boston" className="citylink" >boston</Link></li>
            <li onClick={e=>setcity("chicago")}> <Link to="/chicago" className="citylink" >chicago</Link></li>
            <li onClick={e=>setcity("dallas")}> <Link to="/dallas" className="citylink" >dallas</Link></li>
            <li onClick={e=>setcity("denver")}> <Link to="/denver" className="citylink" >denver</Link></li><
              li onClick={e=>setcity("detroit")}> <Link to="/detroit" className="citylink" >detroit</Link></li>
            <li onClick={e=>setcity("houston")}> <Link to="/houston" className="citylink" >houston</Link></li>
            <li onClick={e=>setcity("las vegas")}> <Link to="/las-vegas" className="citylink" >las vegas</Link></li>
            <li onClick={e=>setcity("los angeles")}> <Link to="/los-angeles" className="citylink" >los angeles</Link></li>
            <li onClick={e=>setcity("miami")}> <Link to="/miami" className="citylink" >miami</Link></li>
            <li onClick={e=>setcity("minneapolis")}> <Link to="/minneapolis" className="citylink" >minneapolis</Link></li>
            <li onClick={e=>setcity("new york")}> <Link to="/new-york" className="citylink" >new york</Link></li>
            <li onClick={e=>setcity("orange co")}> <Link to="/orange-co" className="citylink" >orange co</Link></li>
            <li onClick={e=>setcity("philadelphia")}> <Link to="/philadelphia" className="citylink" >philadelphia</Link></li>
            <li onClick={e=>setcity("phoenix")}> <Link to="/phoenix" className="citylink" >phoenix</Link></li>
            <li onClick={e=>setcity("portland")}> <Link to="/portland" className="citylink" >portland</Link></li>
            <li onClick={e=>setcity("raleigh")}> <Link to="/raleigh" className="citylink" >raleigh</Link></li>
            <li onClick={e=>setcity("sacramento")}> <Link to="/sacramento" className="citylink" >sacramento</Link></li>
            <li onClick={e=>setcity("san diego")}> <Link to="/san-diego" className="citylink" >san diego</Link></li>
            <li onClick={e=>setcity("seattle")}> <Link to="/seattle" className="citylink" >seattle</Link></li>
            <li onClick={e=>setcity("sf bayarea")}> <Link to="/sf-bayarea" className="citylink" >sf area</Link></li>
            <li onClick={e=>setcity("washington dc")}> <Link to="/washington-dc" className="citylink" >washington dc</Link></li>
            
</ul>
    </div>
  )
}
