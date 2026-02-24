import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ref, get, set, child, DataSnapshot } from "firebase/database";
import { db } from '../firebaseConfig';

const Home: React.FC = () => {
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
        <div className="home-page">
            <section className="home">
                <div className="home-content">
                    <p className="home-eyebrow">🎮 Multiplayer Web Game</p>
                    <h1 className="home-title">Welcome to A Fun Web Game!</h1>
                    <hr className="home-divider" />
                    <p className="home-description">
                        Get ready to have fun with your friends. Create a lobby,
                        invite everyone, and enjoy the game together!
                    </p>
                    <div className="home-cta">
                        <button onClick={handleCreateLobby} className="btn btn-primary">
                            Create a Lobby
                        </button>
                        <Link to="/join" className="btn btn-secondary">Join a Game</Link>
                    </div>
                    <hr className="home-divider-large" />
                    <div className="home-demo-container">
                        <img src="/home-demo.gif" alt="Game Demo" className="home-demo" />
                        <p className="home-demo-caption">Choose your packs, and try to guess first!</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
