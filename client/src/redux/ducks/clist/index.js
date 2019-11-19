import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const GET_PARENTS = "clist/GET_PARENTS"
const GET_CATEGORIES = "clist/GET_CATEGORIES"
const GET_POSTS = "clist/GET_POSTS"
const SET_SUBCAT = "clist/SET_SUBCAT"
const GET_CITY="clst/GET_CITY"
const SET_POST="clst/SET_POST"
const GET_ONEPOST="clist/GET_ONEPOST"



// initial state
const initialState = {
  parents: [],
  categories: [],
  posts:[],
  subcatg:"",
  city:"las-vegas",
  createpost:{},
  singlepost:{}
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PARENTS:
      return { ...state, parents: action.payload }
    case GET_CATEGORIES:
      return { ...state, categories: action.payload }
    case GET_POSTS:
      return { ...state, posts: action.payload }
    case SET_SUBCAT:
      return { ...state, subcatg: action.payload }
    case GET_CITY:
        return { ...state, city: action.payload }
        
    default:
      return state
  }
}

// action creators
const getParents = () => {
  return dispatch => {
    axios.get("/clist/parents").then(resp => {
      dispatch({
        type: GET_PARENTS,
        payload: resp.data
      })
    })
  }
}

const getCategories = () => {
  return dispatch => {
    axios.get("/clist/categories").then(resp => {
      dispatch({
        type: GET_CATEGORIES,
        payload: resp.data
      })
    })
  }
}

const getPosts = () => {
  return dispatch => {
    axios.get("/clist/posts").then(resp => {
      dispatch({
        type: GET_POSTS,
        payload: resp.data
      })
    })
  }
}


function setSub(val) {
  return dispatch =>{
    dispatch ({
    type: SET_SUBCAT,
    payload: val
  })
  }
}

function getCity(val) {
  return dispatch =>{
    dispatch ({
    type: GET_CITY,
    payload: val
  })
  }
}




function dataToPost(formdata){

  return dispatch => {
    axios.post("/clist/createpost", formdata).then(resp => {
      //don't need to dispatch here, we're sending formdate
      
    })
  }
  
}




// custom hooks
export function useList() {
  const dispatch = useDispatch()
  const titles = useSelector(appState => appState.listState.parents)
  const categ =   useSelector(appState => appState.listState.categories)
  const post =   useSelector(appState => appState.listState.posts)
  const subcateg = useSelector(appState=>appState.listState.subcatg)
  const selectedCity = useSelector(appState=>appState.listState.city)
  
  const subCat= val => dispatch(setSub(val))
  const whatCity = val => dispatch(getCity(val))

  useEffect(() => {
    dispatch(getParents())
    dispatch(getCategories())
    dispatch(getPosts())
  }, [])

  

  return { titles, categ, post, subCat, subcateg, selectedCity, whatCity }
}


export function useForm(){
  const dispatch = useDispatch()
  const creapost = useSelector(appState=>appState.listState.createpost)

  const getDataToPost = formdata => dispatch(dataToPost(formdata))


  return { getDataToPost, creapost }
 
}