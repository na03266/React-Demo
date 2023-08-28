import {useState} from 'react'

function App() {
  const [names, setName] = useState(['홍길동', '김민수']);
  const [input, setInput] = useState('')

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  

  console.log('업데이트!!');

  return (
    <div>
      <input type='text' value={input} onChange={handleInputChange}></input>
            <button onClick={handleInputChange}>Update</button>
            {names.map((name, idx) =>{
              return <p key={idx}>{name}</p>
            })}
    </div>

  );
}

export default App;