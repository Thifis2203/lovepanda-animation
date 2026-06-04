import Confetti from 'react-confetti';

export default function FinalScreen({ onRestart }) {
  return (
    <section className="section final-section" id="final">
      <Confetti recycle={false} numberOfPieces={260} />
      <span className="eyebrow">Final feliz</span>
      <h2>Eu te amo</h2>
      <p>Obrigado por fazer parte da minha vida e por ser meu lugar favorito.</p>
      <button className="secondary-action" type="button" onClick={onRestart}>Ver de novo</button>
    </section>
  );
}
