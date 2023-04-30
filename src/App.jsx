import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {

  const [image, setImage] = useState('');


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Dream Machine</h1>
      <div id="result">
        Image will appear here
      </div>
      <form>
        <label for="prompt">Prompt</label>
        <textarea name="prompt" maxlength="160"></textarea>

        <button type="submit">Dream</button>
      </form>
    </>
  )
}

export default App
