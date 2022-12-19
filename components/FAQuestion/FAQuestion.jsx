import styles from "./FAQuestion.module.scss";
import { useState } from "react";

const FAQuestion = ({ questionTitle, questionAnswer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className={styles.questionContainer}>
      <img src={"/img/line.svg"} className={styles.line}/>
      <div className={styles.questionDiv}>
        <div className={styles.questionContent}>
          <div className={styles.questionTitle}>{questionTitle}</div>
          <div className={styles.plusIconDiv}>
            {showAnswer ? (
              <img
                className={styles.crossIcon}
                src={"/img/crossIcon.svg"}
                onClick={() => setShowAnswer(!showAnswer)}
              />
            ) : (
              <img
                className={styles.plusIcon}
                src={"/img/plusIcon.svg"}
                onClick={() => setShowAnswer(!showAnswer)}
              />
            )}
          </div>
        </div>
        {showAnswer ? (
          <div className={styles.questionAnswer}>{questionAnswer}</div>
        ) : (
          <div className={styles.questionAnswer}>{""}</div>
        )}
      </div>
    </div>
  );
};

export default FAQuestion;
