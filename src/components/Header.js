import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Quiz from "../pages/Quiz/Quiz";

import { Link } from "react-router-dom";



const Header =()=>{
    return(
        <div>  
            <center>
                <h1>
                    Quiz
                </h1>
            </center>  
        </div>
    )
}
export default Header;