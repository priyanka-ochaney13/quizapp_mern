import axios from "axios";
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch ,Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './componebts/Header';
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Results from "./pages/Result/Result";
import { fetchQuestions } from "./Services/TriviaConfig";



function App() {
  const[name,setName]=useState("");
  const[questions,setQuestions]=useState();
  const[score,setScore]=useState(0);

  const fetchQuestions=async(category="",difficulty="")=>{

    const{data}=await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&&difficulty=${difficulty}&&type=multiple`);
  setQuestions(data.results)
    };
  

  return (
    <BrowserRouter>
    <div className="app" > 
      <Header/>
      <Routes>
          <Route
            path="/"
            element={
              <Home name={name} 
              setName={setName}
              fetchQuestions={fetchQuestions}/>
            }
          />

      <Route
            path="/quiz"
            element={
              <Quiz
               ></Quiz>
            }
          />
      <Route 
            path="/result" 
            element={
            <Results />
            } />

      </Routes>
      </div>
      </BrowserRouter>
      
      
    
    
    
  );
}

export default App;
