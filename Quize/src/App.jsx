import React, { useState } from 'react'
import { answer } from './Types/Questions';

const App = () => {
  const [done,setDone] = useState(false);
  const [score,setScore] = useState(0);
 const [currentQuestion,setCurrentQuestion] = useState(0);
 const [answer,setAnswer] = useState<answerT[]>([]);
  return (
    <div className='text-red-700'>App</div>
  )
}

export default App