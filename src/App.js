import './App.scss';
import querystring from 'query-string'
// import TodoList from './Components/TodoList';
import React, {useEffect, useState} from 'react'
// import TodoForm from './Components/TodoForm';
import PostList from './Components/PostList';
import axios from 'axios'
import Pagination from './Components/Pagination';
import PostFilterForm from './Components/PostFilerForm';
import Clock from './Components/Clock';
function App() {
  const [todos , setTodos] = useState([
    {id: 1, title: 'I Love Tung Dep zai Boi 🙂😀 '},
    {id: 2, title: 'I Love Tung Dep zai Boi 🙂😀🤢🤢 '},
    {id: 3, title: 'I Love Tung Dep zai Boi 😶😑😑😑 '}
  ])
  const [postList, setPostList] = useState([])
  const [pagination , setPagination] = useState({
    _page : 1,
    _limit : 10,
    _totalRows : 1
  })
  const [filter, setFilter] = useState({
    _limit : 10,
    _page : 1,
  })  

  useEffect(()=>{
     const paramString = querystring.stringify(filter)
     const url = `https://js-post-api.herokuapp.com/api/posts?${paramString}`
     const  getData = async (url) =>{
        const res = await axios.get(url)
        setPostList(res.data.data)
        setPagination(res.data.pagination)
      }
     getData(url)
  },[filter])
  const handleChangePage = (newPage)=>{
    console.log({"newPgae" : newPage})
    setFilter({
      ...filter,
      _page : newPage
    })
  }
  function handleTodoClick(todo){
      const index = todos.findIndex(x => x.id === todo.id)
      console.log(index)
      if (index<0) return

      const newTodos = [...todos]
      newTodos.splice(index, 1)
      setTodos(newTodos)
  }
  function handleOnSubmid(todoForm){
      const newTodo = {
        id : todos.length +1, 
        ...todoForm
      }
      console.log(newTodo)
      const newTodoList = [...todos,newTodo]
      console.log(newTodoList)
      setTodos(newTodoList)
  }
  const onChangeSearch = (searchItem) =>{
    setFilter({
      ...filter,
      _page: 1,
      title_like : searchItem.serchTerm
    })
  }
  return (
    <div className="app">
      <h1>Welcome to React Hooks </h1>
      {/* <TodoForm onTodoForm = {handleOnSubmid}/>
      <TodoList todos = {todos} todoClick ={handleTodoClick}/> */}
      <Clock />
      <PostFilterForm onSubmit={onChangeSearch} />
      <PostList postList= {postList}/>
      <Pagination pagination = {pagination} onPageChange = {handleChangePage}/>
      
    </div>
  );
}

export default App;
