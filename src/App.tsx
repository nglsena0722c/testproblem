import React, { useState } from 'react';
import logo2 from './testimg.png';
import './App.css';

function App() {
  const [seehint, setseehint]=  useState(false);
  return (
    <div className="App">
      <header className="App-header">
     문제1 
        
        <img src={logo2} />
        <br/>
문제 2<br/>

<code>https://github.com/xpladev/xpla/blob/main/app/app.go#L260</code>
<br/>
<button onClick={() => setseehint(!seehint)}>힌트 보기</button>
<br/>
{
  seehint && "정답은 xpla address(testnet)임."
}
      </header>
    </div>
  );
}

export default App;
