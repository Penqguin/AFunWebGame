import React from 'react';

const Chat: React.FC = () => {

return (
    <aside className="lobby-chat lobby-sidebar">
        <h3>Chat</h3>
        <div className="chat-messages">
            <p className="chat-welcome">Welcome to the chat!</p>
        </div>
        <form className="chat-form" onSubmit={(e) => e.preventDefault()}>
            <input 
                type="text" 
                className="chat-input"
                placeholder="Type a guess..." 
            />
            <button type="submit" className="chat-submit">
                Send
            </button>
        </form>
    </aside>
);
};

export default Chat;