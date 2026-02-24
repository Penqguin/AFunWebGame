import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ref, get, set, child, DataSnapshot } from "firebase/database";
import { db } from '../firebaseConfig';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateLobby = async (): Promise<void> => {
      let isUnique: boolean = false;
      let lobbyCode: string = "";
      const dbRef = ref(db);

      while (!isUnique) {
          lobbyCode = Math.floor(1000 + Math.random() * 9000).toString();
          
          try {
              const snapshot: DataSnapshot = await get(child(dbRef, `lobbies/${lobbyCode}`));
              
              if (!snapshot.exists()) {
                  await set(ref(db, `lobbies/${lobbyCode}`), {
                      createdAt: Date.now(),
                      status: "waiting"
                  });
                  isUnique = true;
              }
          } catch (error) {
              console.error(error);
              break;
          }
      }

      if (isUnique) {
          navigate(`/${lobbyCode}`);
      }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/afunwebgame.svg" alt="Logo" className="navbar-logo" />
        <h1 className="navbar-title">A Fun Web Game</h1>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li>
          <button 
            onClick={handleCreateLobby} 
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit', color: 'inherit' }}
          >
            Create a Lobby
          </button>
        </li>
        <li><Link to="/join">Join</Link></li>
      </ul>

      <div className="navbar-right" aria-hidden="true" />
    </nav>
  )
}

export default Navbar;
