import React, { useMemo, useState } from 'react'

const ALL_ITEMS = Array.from({length: 1000}, (_, i) => ({
    id: i + 1,
    name: ["Apple", "Mango", "Banana", "Orange", "Grapes", "Guava", "Pineapple", "Strawberry", "Watermelon", "Peach"][i % 10] + "#" + (i+1),
}));

let totalRenders = 0;
let memoRuns = 0;
let normalRuns = 0;

const UseMemo = () => {
    const[search, setSearch] = useState("");
    const[darkMode, setDarkMode] = useState(false);
    const[logs, setLogs] = useState([]);

    totalRenders++; 

    // without useMemo
    normalRuns++;
    const withoutMemo =ALL_ITEMS.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

    // with useMemo
    const withMemo = useMemo(() => {
        memoRuns++;
        const start = performance.now();
        const result = ALL_ITEMS.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        const ms = (performance.now() - start).toFixed(2);

        setLogs(prev => [{
            id: Date.now(),
            msg: `useMemo run #${memoRuns} - Filtered ${result.length} items in ${ms} ms`,
            type: 'memo',
        },...prev].slice(0,8));
        return result;
    },[search]);
  return (
    <div>
        <h2>UseMemo - 10000 Items</h2>
        <button onClick={() => {
            setDarkMode(d => !d);
            setLogs(prev => [{id: Date.now(), msg:"Dark mode toggle — render hua, lekin useMemo nahi chala!", type:"toggle"},...prev].slice(0,8));
        }}>
            {darkMode ? "Light" : "Dark"} Mode
        </button>

        <p>Total Renders: <b>{totalRenders}</b></p>
    <p>Without useMemo runs: <b>{normalRuns}</b></p>
    <p>With useMemo runs: <b>{memoRuns}</b></p>

        <hr/>

        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Fruits...'/>

        <hr/>

        <h4>Results: {withMemo.length}items</h4>
        {withMemo.slice(0, 20).map(item => 
            <p key= {item.id}>{item.id}. {item.name}</p>
        )}

    </div>
  )
}

export default UseMemo
