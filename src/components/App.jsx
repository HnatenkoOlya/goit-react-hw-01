import { useState } from 'react'
/*import reactLogo from './'
import viteLogo from '/vite.svg'*/
import './App.css'
import Profile from './profile/Profile.jsx';
import FriendList from './friendlist/FriendList.jsx';
import TransactionHistory from './transactionhistory/TransactionHistory.jsx'
import userData from '../userData.json'
import friends from '../friends.json'
import transactions from '../transactions.json'
/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/
  
export default function App () {
    return (
      <>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
        <FriendList friends={friends} /> 
        <TransactionHistory items={transactions} />
      </>
    );
  };
  