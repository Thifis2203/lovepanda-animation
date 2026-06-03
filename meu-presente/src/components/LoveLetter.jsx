import { TypeAnimation } from 'react-type-animation';

export default function LoveLetter() {

  return (
    <section
      style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        padding:"40px"
      }}
    >
      <TypeAnimation
        sequence={[
          "Meu amor ❤️",
          1000,
          "Obrigado por fazer meus dias mais felizes ❤️",
          1000,
          "Eu te amo infinitamente ❤️"
        ]}
        speed={50}
        repeat={0}
      />
    </section>
  );
}