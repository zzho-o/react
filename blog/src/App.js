import { useState } from 'react';
import './App.css';


function App() {
  const [title,setTitle] = useState(['남자 코트 추천','강남 우동 맛집']);

  return (
    <div className="App">
      <div  className="black-nav" style={{color:'blue'}}>
        개발 Blog
      </div>
      <div className="list">
        <h3>{title[0]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
