import './App.css'
import { useState, useEffect } from 'react';

function App() {
  const [ darkMode, setDarkMode ] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? 'black' : 'white';
    document.body.style.color = darkMode ? 'white' : 'black';

  }, [darkMode]);

  return(
    <main>
      <h1>TODO LIST</h1>

      <button onClick={() => {setDarkMode(!darkMode)}} style={ {marginBottom: 10} }>Dark Mode</button>


      <div style={{ display: 'flex', flexDirection: 'column', gap: 5, backgroundColor: 'gray' }}>
        <div className='task'>
          <h4>Washing laundry</h4>
          <p>Wash</p>
          <span>tomorrow</span>
        </div>
        <div className='task'>
          <h4>Washing laundry</h4>
          <p>Wash</p>
          <span>tomorrow</span>
        </div>
        <div className='task'>
          <h4>Washing laundry</h4>
          <p>Wash</p>
          <span>tomorrow</span>
        </div>
        <div className='task'>
          <h4>Washing laundry</h4>
          <p>Wash</p>
          <span>tomorrow</span>
        </div>
      </div>
    </main>
  );
}

export default App
