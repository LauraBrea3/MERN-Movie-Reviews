import './App.css';
import { useState, useEffect } from 'react'
import Review from './components/Review';
import Header from './components/Header';
import MovieList from './components/MovieList';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <MovieList/>
    </div>
  );
}

export default App;
