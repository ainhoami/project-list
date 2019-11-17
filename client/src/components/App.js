import React from "react"
import { useList } from "../hooks"
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Main from "./Main"
// import Left from "./Left"
// import Right from "./Right"
import Posts from "./Posts"
function App() {
  const { titles } = useList()


  return (
     <Router> 
        {/* <Left /> */}
        {/* <Main /> */}
        {/* <Right/> */}
        <Route path ="/" exact component={Main}/>

      <Route path="/posts/:catitle/:catname" component={Posts}/>
    </Router>

  )
}

export default App
