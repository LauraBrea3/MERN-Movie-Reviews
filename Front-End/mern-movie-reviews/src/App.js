import './App.css';
import { useState, useEffect } from 'react'
import Review from './components/Review';
import Header from './components/Header';
import Home from './components/Home';
import MovieList from './components/MovieList';
import Search from './components/Search';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      Hello World
      <Review/>
      <MovieList />
    </div>
  );
}

export default App;
