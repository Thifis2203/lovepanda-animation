import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const pages = [
  { id: "inicio", duration: 9000 },
  { id: "contador", duration: 8000 },
  { id: "wrapped", duration: 11000 },
  { id: "fotos", duration: 13000 },
  { id: "quiz", duration: 22000 },
  { id: "historia", duration: 14000 },
  { id: "carta", duration: 15000 },
  { id: "final", duration: 10000 },
];

export default function AutoPager() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const timeoutRef = useRef(null);
  const pauseUntilRef = useRef(0);

  useEffect(() => {
    const updateCurrentPage = () => {
      const midpoint = window.innerHeight * 0.45;
      const activeIndex = pages.findIndex(({ id }) => {
        const element = document.getElementById(id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= midpoint && rect.bottom >= midpoint;
      });

      if (activeIndex >= 0) {
        setCurrentPage(activeIndex);
      }
    };

    const pauseForInteraction = () => {
      pauseUntilRef.current = Date.now() + 7000;
      updateCurrentPage();
    };

    window.addEventListener("scroll", updateCurrentPage, { passive: true });
    window.addEventListener("wheel", pauseForInteraction, { passive: true });
    window.addEventListener("touchstart", pauseForInteraction, { passive: true });
    window.addEventListener("pointerdown", pauseForInteraction, { passive: true });
    window.addEventListener("keydown", pauseForInteraction);
    updateCurrentPage();

    return () => {
      window.removeEventListener("scroll", updateCurrentPage);
      window.removeEventListener("wheel", pauseForInteraction);
      window.removeEventListener("touchstart", pauseForInteraction);
      window.removeEventListener("pointerdown", pauseForInteraction);
      window.removeEventListener("keydown", pauseForInteraction);
    };
  }, []);

  useEffect(() => {
    window.clearTimeout(timeoutRef.current);

    if (!isPlaying) return undefined;

    const scheduleNextPage = () => {
      const waitForManualReading = pauseUntilRef.current - Date.now();

      if (waitForManualReading > 0) {
        timeoutRef.current = window.setTimeout(scheduleNextPage, waitForManualReading);
        return;
      }

      const nextPage = Math.min(currentPage + 1, pages.length - 1);
      if (nextPage === currentPage) {
        setIsPlaying(false);
        return;
      }

      document.getElementById(pages[nextPage].id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setCurrentPage(nextPage);
    };

    timeoutRef.current = window.setTimeout(scheduleNextPage, pages[currentPage].duration);
    return () => window.clearTimeout(timeoutRef.current);
  }, [currentPage, isPlaying]);

  const toggleAutoPager = () => {
    pauseUntilRef.current = 0;
    setIsPlaying((playing) => !playing);
  };

  const jumpToPage = (index) => {
    pauseUntilRef.current = Date.now() + 9000;
    setCurrentPage(index);
    document.getElementById(pages[index].id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="auto-pager" aria-label="Passagem automatica das secoes">
      <button
        className="auto-pager-toggle"
        type="button"
        onClick={toggleAutoPager}
        aria-label={isPlaying ? "Pausar passagem automatica" : "Continuar passagem automatica"}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      <div className="auto-pager-dots">
        {pages.map((page, index) => (
          <button
            key={page.id}
            type="button"
            className={index === currentPage ? "active" : ""}
            onClick={() => jumpToPage(index)}
            aria-label={`Ir para secao ${index + 1}`}
          />
        ))}
      </div>
    </nav>
  );
}
