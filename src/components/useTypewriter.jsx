import { useState, useEffect } from 'react';

function useTypewriter(words, period = 2000) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[loopNum % words.length];
      setText(isDeleting ? currentWord.substring(0, text.length - 1) : currentWord.substring(0, text.length + 1));

      if (!isDeleting && text === currentWord) {
        setTypingSpeed(period);
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(300);
      } else {
        setTypingSpeed(isDeleting ? 100 : 200);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, words, loopNum, period]);

  return <span className="wrap">{text}</span>;
}

export default useTypewriter;

