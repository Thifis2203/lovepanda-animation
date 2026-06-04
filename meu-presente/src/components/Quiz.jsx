import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FaHeart, FaRotateRight } from "react-icons/fa6";
import quizData from "../data/quizData";

export default function Quiz({ onQuizComplete }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = quizData[questionIndex];
  const progress = useMemo(
    () => ((questionIndex + (selectedOption !== null ? 1 : 0)) / quizData.length) * 100,
    [questionIndex, selectedOption],
  );

  const chooseOption = (optionIndex) => {
    if (selectedOption !== null) return;

    setSelectedOption(optionIndex);
    if (currentQuestion.options[optionIndex].isCorrect) {
      setScore((currentScore) => currentScore + 1);
    }
  };

  const goNext = () => {
    if (questionIndex === quizData.length - 1) {
      setIsComplete(true);
      onQuizComplete?.();
      return;
    }

    setQuestionIndex((index) => index + 1);
    setSelectedOption(null);
  };

  const restartQuiz = () => {
    setQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsComplete(false);
  };

  return (
    <section className="section quiz-section" id="quiz">
      <span className="eyebrow">Quiz do meu coracao</span>
      <h2>O quanto voce sabe sobre o que eu amo em voce?</h2>

      <div className="quiz-shell">
        <div className="quiz-progress" aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </div>

        <AnimatePresence mode="wait">
          {isComplete ? (
            <motion.div
              className="quiz-result"
              key="result"
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -28, scale: 0.96 }}
              transition={{ duration: 0.45 }}
            >
              <div className="quiz-heart">
                <FaHeart />
              </div>
              <strong>{score}/{quizData.length}</strong>
              <p>
                Independente da pontuacao, a verdade e simples: eu amo o seu
                jeito, admiro quem voce e e escolheria voce de novo.
              </p>
              <button className="quiz-next" type="button" onClick={restartQuiz}>
                <FaRotateRight />
                Responder de novo
              </button>
            </motion.div>
          ) : (
            <motion.div
              className="quiz-card"
              key={currentQuestion.question}
              initial={{ opacity: 0, x: 44 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -44 }}
              transition={{ duration: 0.45 }}
            >
              <div className="quiz-meta">
                <span>{String(questionIndex + 1).padStart(2, "0")}</span>
                <span>{String(quizData.length).padStart(2, "0")}</span>
              </div>

              <h3>{currentQuestion.question}</h3>

              <div className="quiz-options">
                {currentQuestion.options.map((option, optionIndex) => {
                  const wasSelected = selectedOption === optionIndex;
                  const showCorrect = selectedOption !== null && option.isCorrect;

                  return (
                    <button
                      type="button"
                      key={option.text}
                      className={[
                        "quiz-option",
                        wasSelected ? "selected" : "",
                        showCorrect ? "correct" : "",
                      ].join(" ")}
                      onClick={() => chooseOption(optionIndex)}
                    >
                      <span>{option.text}</span>
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {selectedOption !== null && (
                  <motion.div
                    className="quiz-feedback"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                  >
                    <FaHeart />
                    <p>{currentQuestion.options[selectedOption].feedback}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                className="quiz-next"
                type="button"
                onClick={goNext}
                disabled={selectedOption === null}
              >
                {questionIndex === quizData.length - 1 ? "Ver resultado" : "Proxima"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
