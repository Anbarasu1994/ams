// useTypewriter.js
import { useState, useEffect } from "react";

const UseTypewriter = (messages, speed) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message.length < messages[currentMessageIndex].length) {
      const timeout = setTimeout(() => {
        setMessage(messages[currentMessageIndex].slice(0, message.length + 1));
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      // Move to the next message if available
      if (currentMessageIndex + 1 < messages.length) {
        setCurrentMessageIndex((prevIndex) => prevIndex + 1);
      }
    }
  }, [message, currentMessageIndex, messages, speed]);

  return message;
};


export default UseTypewriter;
