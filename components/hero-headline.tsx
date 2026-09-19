export function HeroHeadline() {
  const line1 = [
    { text: "Study", isHighlight: false, delay: 0 },
    { text: "in", isHighlight: false, delay: 100 },
    { text: "Europe", isHighlight: true, delay: 200 },
  ];

  const line2 = [
    { text: "with", isHighlight: false, delay: 320 },
    { text: "Expert", isHighlight: false, delay: 420 },
    { text: "Support", isHighlight: false, delay: 520 },
  ];

  return (
    <h1
      className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.14] text-white tracking-tight"
      aria-label="Study in Europe with Expert Support"
    >
      <span className="block" aria-hidden="true">
        {line1.map((item) => (
          <span
            key={item.text}
            className="hero-word-stagger mr-3 sm:mr-4"
            style={{ animationDelay: `${item.delay}ms` }}
          >
            {item.isHighlight ? (
              <span className="shimmer-text font-serif">Europe</span>
            ) : (
              item.text
            )}
          </span>
        ))}
      </span>
      <span className="block mt-1 sm:mt-2" aria-hidden="true">
        {line2.map((item) => (
          <span
            key={item.text}
            className="hero-word-stagger mr-3 sm:mr-4"
            style={{ animationDelay: `${item.delay}ms` }}
          >
            {item.text}
          </span>
        ))}
      </span>
    </h1>
  );
}
