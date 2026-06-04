const hearts = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 17) % 100}%`,
  delay: `${(index % 6) * 1.4}s`,
  duration: `${9 + (index % 5)}s`,
  size: `${12 + (index % 4) * 5}px`,
}));

export default function FloatingHearts() {
  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            width: heart.size,
            height: heart.size,
          }}
        />
      ))}
    </div>
  )
}
