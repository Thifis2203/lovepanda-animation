import { useEffect, useState } from "react";

export default function Counter() {

  const startDate = new Date("2024-06-12");

  const [days,setDays] = useState(0);

  useEffect(() => {

    const updateCounter = () => {

      const now = new Date();

      const difference =
      Math.floor(
        (now - startDate) /
        (1000 * 60 * 60 * 24)
      );

      setDays(difference);
    };

    updateCounter();

  }, []);

  return (
    <section
      style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
      }}
    >
      <h1>❤️ {days} dias juntos ❤️</h1>
    </section>
  );
}