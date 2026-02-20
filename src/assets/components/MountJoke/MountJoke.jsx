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
        const randomId = Math.floor(Math.random()*200) +1;
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${randomId}`);
        const data = await response.json();
        setJoke({
          userId: data.userId,
          id: data.id,
          title: data.title,
          completed: data.completed,
        });
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
            <><p>{joke.id}</p>
            <p>{joke.title}</p>
            </>
        )}
      </div>
      <button onClick={fetchJoke}>Get Another Joke</button>
      
    </div>
  )
}

export default MountJoke
