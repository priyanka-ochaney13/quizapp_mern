import { Route, useNavigate } from "react-router-dom";
import "./Home.css";
import { Button, MenuItem, TextField } from "@mui/material";
import Categories from "../../Data/Categories";
import { useState } from "react";



const Home =({name,setName,fetchQuestions})=>{

    
    const[category,setCategory]=useState("");
    const[difficulty,setDifficulty]=useState("");
    const[error,setError]=useState(false);
    const navigate =useNavigate(); 


    const handleSubmit=()=>{
        if(!category || !difficulty ||!name){
            alert("Please enter all details");
            return;
        }else{
            setError(false)
            fetchQuestions(category,difficulty)
            navigate("/quiz"); //if there is no error and all details are filled..it will direct you to the quiz page
        }
    };


    return(
        <div className="content">
        <div className="settings">
           <span style={{fontSize:30}}>Fill the following details: </span>

           <div className=" settings_select">
           
            
            <TextField 
            //textfield for entering name
            
            style={{marginBottom:25}} 
            label="Enter your name" 
            variant="outlined"
            onChange={(e)=>setName(e.target.value)}
            />
            

            <TextField
            //textfield for selecting the categories

            select
            label="Select Subject" variant="outlined"
            style={{marginBottom:30}}
            onChange={(e)=>setCategory(e.target.value)}
            value={category}
            
            >
            {Categories.map((cat)=>(
                <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
                </MenuItem>
            ))}
            </TextField>

            <TextField
            //selecting difficulty level

            select
            label="Difficulty level"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e)=>setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
            <MenuItem key="Any difficulty" value="any">
            Any difficulty
            </MenuItem>
          </TextField>
          <p style={{ color: "black" }}>Note: All questions must be attempted.</p>
          <Button onClick={handleSubmit} variant="contained"  size="large">
            Start
          </Button>

           </div>
          
        </div>
        </div>

        
    )
}
export default Home;