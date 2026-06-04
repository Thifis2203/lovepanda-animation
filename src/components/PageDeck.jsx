import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa";

const transition = {
  duration: 0.78,
  ease: [0.22, 1, 0.36, 1],
};

const pageVariants = {
  enter: (direction) => ({
    opacity: 0,
    y: direction > 0 ? 90 : -90,
    scale: 0.92,
    rotate: direction > 0 ? 2.5 : -2.5,
    filter: "blur(16px)",
  }),
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
  },
  exit: (direction) => ({
    opacity: 0,
    y: direction > 0 ? -90 : 90,
    scale: 1.04,
    rotate: direction > 0 ? -2 : 2,
    filter: "blur(14px)",
  }),
};

export default function PageDeck({ pages }) {
  const [[pageIndex, direction], setPage] = useState([0, 1]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [quizComplete, setQuizComplete] = useState(false);
  const timeoutRef = useRef(null);
  const activePage = pages[pageIndex];
  const ActiveComponent = activePage.Component;

  const canAdvance = useMemo(() => {
    if (!activePage.waitsForInteraction) return true;
    return quizComplete;
  }, [activePage.waitsForInteraction, quizComplete]);

  const goToPage = (nextIndex) => {
    const clampedIndex = Math.max(0, Math.min(nextIndex, pages.length - 1));
    if (clampedIndex === pageIndex) return;

    setPage([clampedIndex, clampedIndex > pageIndex ? 1 : -1]);
  };

  const goNext = () => goToPage(pageIndex + 1);
  const goPrevious = () => goToPage(pageIndex - 1);

  useEffect(() => {
    window.clearTimeout(timeoutRef.current);

    if (!isPlaying || pageIndex === pages.length - 1 || !canAdvance) {
      return undefined;
    }

    timeoutRef.current = window.setTimeout(goNext, activePage.duration);
    return () => window.clearTimeout(timeoutRef.current);
  }, [activePage.duration, canAdvance, isPlaying, pageIndex, pages.length]);

  useEffect(() => {
    if (activePage.id !== "quiz") {
      setQuizComplete(false);
    }
  }, [activePage.id]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight" || event.key === "PageDown") goNext();
      if (event.key === "ArrowLeft" || event.key === "PageUp") goPrevious();
      if (event.key === " ") {
        event.preventDefault();
        setIsPlaying((playing) => !playing);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const componentProps = {
    onNext: goNext,
    onRestart: () => goToPage(0),
    onQuizComplete: () => setQuizComplete(true),
  };

  return (
    <div className="page-deck">
      <div className="story-progress" aria-hidden="true">
        {pages.map((page, index) => (
          <button
            key={page.id}
            type="button"
            className={index === pageIndex ? "active" : index < pageIndex ? "seen" : ""}
            onClick={() => goToPage(index)}
            aria-label={`Ir para ${page.label}`}
          >
            <span />
          </button>
        ))}
      </div>

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={activePage.id}
          className="page-frame"
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
        >
          <ActiveComponent {...componentProps} />
        </motion.div>
      </AnimatePresence>

      <div className="deck-actions">
        <button type="button" onClick={goPrevious} disabled={pageIndex === 0} aria-label="Pagina anterior">
          <FaChevronLeft />
        </button>
        <button type="button" onClick={() => setIsPlaying((playing) => !playing)} aria-label="Pausar ou continuar">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button type="button" onClick={goNext} disabled={pageIndex === pages.length - 1} aria-label="Proxima pagina">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
