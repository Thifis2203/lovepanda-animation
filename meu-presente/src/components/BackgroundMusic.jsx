import { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div className="music-control">
      <audio ref={audioRef} src="/musica.mp3" loop preload="none" />
      <button type="button" onClick={toggleMusic} aria-label="Tocar musica">
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <span>Nossa musica</span>
    </div>
  )
}
