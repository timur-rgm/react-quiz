import {QuestionType} from '../../types/questions';

type GameType = {
  currentQuestion: QuestionType,
};

function Game({currentQuestion}: GameType): JSX.Element {
  const {title, variants} = currentQuestion;

  return (
    <>
      <div className="progress">
        <div style={{ width: '50%' }} className="progress__inner"></div>
      </div>
      <h1>{title}</h1>
      <ul>
        {variants.map((variant) => 
          <li key={variant}>{variant}</li>
        )}
      </ul>
    </>
  );
};

export default Game;
