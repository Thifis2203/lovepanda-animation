import Confetti from 'react-confetti';

export default function FinalScreen() {

  return (
    <section
      style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      <Confetti />

      <h1>
        ❤️ Eu Te Amo ❤️
      </h1>

      <p>
        Obrigado por fazer parte da minha vida.
      </p>
    </section>
  );
}