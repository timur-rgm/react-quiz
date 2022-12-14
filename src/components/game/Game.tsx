import {questions} from '../../mocks/questions';
import {QuestionType} from '../../types/questions';

type GameType = {
  currentStep: number,
  currentQuestion: QuestionType,
  onVariantClick: (index: number) => void,
};

function Game({currentStep, currentQuestion, onVariantClick}: GameType): JSX.Element {
  const {title, variants} = currentQuestion;
  const persentage = currentStep / questions.length * 100;

  return (
    <>
      <div className="progress">
        <div style={{ width: `${persentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{title}</h1>
      <ul>
        {variants.map((variant, index) => 
          <li
            key={variant}
            onClick={() => onVariantClick(index)}
          >
            {variant}
          </li>
        )}
      </ul>
    </>
  );
};

export default Game;
