import './App.css';
import nodeEmoji from 'node-emoji';
import { useState } from 'react';

// Completely random emoji
// Choosing an emoji by name
// Showing error if invalid emoji name entered

export default function App() {
  const [emoji, setEmoji] = useState(nodeEmoji.random().emoji);
  const [emojiName, setEmojiName] = useState('');

  return (
    <div className="App">
      <div>Emoji: {emoji}</div>
      {/* Completely random emoji */}
      <button onClick={() => setEmoji(nodeEmoji.random().emoji)}>Random</button>

      <h2>Choose an emoji</h2>

      <input
        value={emojiName}
        onChange={(event) => setEmojiName(event.currentTarget.value)}
      />
      <br />
      {
        // Ternary is a short "if" in JavaScript, which
        // returns a value if something is true and a
        // different value if something is false
        nodeEmoji.hasEmoji(emojiName)
          ? // After the question mark, this is the value
            // returned if the condition is true
            nodeEmoji.get(emojiName)
          : // After the colon, this is the value returned
            // if the condition is false
            'Emoji not found'
      }
    </div>
  );
}
