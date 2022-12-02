import {useState} from 'react';
import Game from '../game/Game';
import {questions} from '../../mocks/questions';

function App(): JSX.Element {
  const [step, setStep] = useState(0);
  const currentQuestion = questions[step];

  return (
    <div className="App">
      <Game currentQuestion={currentQuestion} />
    </div>
  );
}

export default App;
