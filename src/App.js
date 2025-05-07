import React from "react";
import { useEffect } from "react";

//  ac550aaf




const API_URL = "https://www.omdbapi.com/?apikey=ac550aaf";
const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data);

    }
    useEffect(() => 
    {


    }, []);
    return (
        <h1>App</h1>


    );

}


export default App;