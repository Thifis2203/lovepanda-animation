import { useEffect, useState } from "react";

export default function Counter() {
  const startDate = new Date("2024-06-12T00:00:00");
  const [timeTogether, setTimeTogether] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCounter = () => {
      const difference = Math.max(0, new Date() - startDate);

      setTimeTogether({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateCounter();
    const intervalId = setInterval(updateCounter, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const units = [
    ["dias", timeTogether.days],
    ["horas", timeTogether.hours],
    ["min", timeTogether.minutes],
    ["seg", timeTogether.seconds],
  ];

  return (
    <section className="section counter-section" id="contador">
      <span className="eyebrow">Desde 12/06/2024</span>
      <h2>Nosso tempo juntos</h2>
      <div className="counter-grid">
        {units.map(([label, value]) => (
          <div className="counter-card" key={label}>
            <strong>{String(value).padStart(2, "0")}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
