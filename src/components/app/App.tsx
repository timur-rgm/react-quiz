import {useState} from 'react';
import Game from '../game/Game';
import {questions} from '../../mocks/questions';

function App(): JSX.Element {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const currentQuestion = questions[step];

  const onVariantClick = (index: number) => {
    setStep(step + 1);

    if (index === currentQuestion.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      <Game
        currentStep={step}
        currentQuestion={currentQuestion}
        onVariantClick={onVariantClick}
      />
    </div>
  );
};

export default App;
