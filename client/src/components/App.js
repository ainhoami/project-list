import React from "react"
import { useList } from "../hooks"
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Main from "./Main"
import Createpost from "./Createpost"
import Singlepost from "./Singlepost"
import Posts from "./Posts"

function App() {
  const { selectedCity } = useList()

  return (
     <Router> 
        <Switch>
        <Route path ={`/`} exact component={Main}/>

        <Route path ={`/:city`}  exact component={Main}/>

      <Route path="/posts/:catitle/:catname"  exact component={Posts}/>
      <Route path="/posts/:catitle/:catname/:id"  exact component={Singlepost}/>


      <Route path="/posts/:createpost" exact component={Createpost}/>
      </Switch>
    </Router>

  )
}

export default App
