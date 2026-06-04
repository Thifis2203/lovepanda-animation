import { TypeAnimation } from 'react-type-animation';

export default function LoveLetter() {
  return (
    <section className="section letter-section" id="carta">
      <div className="letter-card">
        <span className="eyebrow">Carta aberta</span>
        <TypeAnimation
          className="letter-text"
          sequence={[
            "Meu amor...",
            1000,
            "Obrigado por fazer meus dias mais felizes.",
            1200,
            "Cada detalhe seu virou uma parte bonita da minha vida.",
            1200,
            "Eu te amo infinitamente.",
          ]}
          speed={45}
          repeat={0}
        />
      </div>
    </section>
  );
}
