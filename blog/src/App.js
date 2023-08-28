import { useState } from 'react'

function App() {
  const [names, setName] = useState(['홍길동', '김민수']);
  const [input, setInput] = useState('')

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setName((prevState) => {
      return ([input, ...prevState])
    })
  };

  console.log(input);

  return (
    <div>
      <input type='text' value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Update</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>
      })}
    </div>

  );
}

export default App;