import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AlbumCard from './components/albumCard/AlbumCard';
import Header from './components/header/Header';
import PostsCard from './components/postsCard/PostsCard';
import TodosCard from './components/todosCard/TodosCard';


function App() {
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<PostsCard />}/>
        <Route path='/album' element={<AlbumCard />}/>
        <Route path='/todo' element={<TodosCard/>}/>
      </Routes>
    </>
  );
}

export default App;
