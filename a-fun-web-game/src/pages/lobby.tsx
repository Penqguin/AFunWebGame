import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ref, onValue, off, DataSnapshot } from 'firebase/database';
import { db } from '../firebaseConfig';
import Chat from '../components/chat';
interface LobbyData {
    createdAt: number;
    status: string;
}

const Lobby: React.FC = () => {
    const { lobbyCode } = useParams<{ lobbyCode: string }>();
    const navigate = useNavigate();
    const [lobbyData, setLobbyData] = useState<LobbyData | null>(null);

    useEffect(() => {
        if (!lobbyCode) return;

        const lobbyRef = ref(db, `lobbies/${lobbyCode}`);

        const unsubscribe = onValue(lobbyRef, (snapshot: DataSnapshot) => {
            if (snapshot.exists()) {
                setLobbyData(snapshot.val());
            } else {
                navigate('/');
            }
        });

        return () => {
            off(lobbyRef, 'value', unsubscribe);
        };
    }, [lobbyCode, navigate]);

    if (!lobbyData) {
        return (
            <div className="lobby-loading">
                <h2>Loading Room...</h2>
            </div>
        );
    }

    return (
        <div className="lobby-page">
            <header className="lobby-header">
                <h2>Room Code: {lobbyCode}</h2>
                <button onClick={() => navigate('/')} className="btn btn-secondary">Leave Game</button>
            </header>

            <div className="lobby-container">
                <aside className="lobby-players lobby-sidebar">
                    <h3>Players</h3>
                    <ul className="players-list">
                        <li className="player-item">Player 1 (Host)</li>
                    </ul>
                </aside>

                <main className="lobby-game-area">
                    <h3>Waiting for players...</h3>
                    <p>Status: {lobbyData.status}</p>
                    <button className="btn btn-primary btn-start">
                        Start Game
                    </button>
                </main>
                <Chat />

                
            </div>
        </div>
    );
};

export default Lobby;
