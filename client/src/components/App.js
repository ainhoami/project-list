import React from "react"
import { useList } from "../hooks"
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Main from "./Main"
import Createpost from "./Createpost"

// import Left from "./Left"
// import Right from "./Right"
import Posts from "./Posts"
function App() {
  const { selectedCity } = useList()

  return (
     <Router> 
        {/* <Left /> */}
        {/* <Main /> */}
        {/* <Right/> */}
        <Route path ={`/`} exact component={Main}/>

        <Route path ={`/:city`}  exact component={Main}/>

      <Route path="/posts/:catitle/:catname"  exact component={Posts}/>
      <Route path="/posts/:createpost" exact component={Createpost}/>


    </Router>

  )
}

export default App
