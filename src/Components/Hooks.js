import React, {useState, useEffect} from 'react';



export default props => {
    let [username, setUsername] =useState('');
     let [count, setCount] =useState(0);

     useEffect(() => {
         setUsername('Gabi')
    },[])

    useEffect(()=>{
        console.log('Count Changed')
},[count])


    return (
        <div>
            <h1>Hello, {username}, your count is {count}</h1>
            <input value={username} onChange={e => setUsername(e.target.value)}/>
            <button onClick={()=>setCount(count-1)}>Count Down</button>
            <button onClick={()=>setCount(count+1)}>Count Up</button>
        </div>
    )
}