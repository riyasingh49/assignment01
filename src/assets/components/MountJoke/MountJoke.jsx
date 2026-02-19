import React, { useState } from 'react'
import { useEffect } from 'react';


const MountJoke = () => {
    const[joke, setJoke] = useState("");
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState("");

    useEffect(()=> {
        fetchJoke();
    },[]);

    const fetchJoke = async () => {
        setLoading(true);
        setError("");

       try{
        const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=twopart");
        const data = await response.json();
        setJoke({setup: data.setup, punchline: data.delivery});
       } catch(error){
        setError("Failed to fetch joke. Please try again.");
       } finally{
        setLoading(false);
       }
    }
  return (
    <div>
      <h1>Random joke every time you load!</h1>
      <div>
        {loading? "fetching joke..." : error}

        {joke && !loading && (
            <><p>{joke.setup}</p>
            <p>{joke.punchline}</p>
            </>
        )}
      </div>
      <button onClick={fetchJoke}>Get Another Joke</button>
      
    </div>
  )
}

export default MountJoke
