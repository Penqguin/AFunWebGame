import { Link } from 'react-router-dom';

const Home = () => {
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
                        <Link to="/create" className="btn btn-primary">Create a Lobby</Link>
                        <Link to="/join"   className="btn btn-secondary">Join a Game</Link>
                    </div>
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
