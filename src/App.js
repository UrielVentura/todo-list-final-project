import React from 'react'
import ToDoApp from './components/ToDoApp'
import "./styles/styles.scss"

const App = () => (
<>
    <div className='topnav'>
      <h2> To Do App <span>🗓</span></h2>
    </div>

    <div className="App">
      <ToDoApp />
    </div>

    <div className='footer'>
      <p> Copyright &copy; Uriel Ventura with love ❤️  from D.R 🇩🇴</p>
    </div>
</>
  )

export default App
