'use client';

import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 1500, suffix: '+', label: 'Jobs Completed' },
  { value: 13, suffix: '', label: 'Five-Star Reviews' },
  { value: 10, suffix: '+', label: 'Years of Experience' },
  { value: 100, suffix: '%', label: 'Satisfaction Rate' },
];

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center p-4">
      <p className="text-4xl md:text-5xl font-bold text-white">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-grey-medium text-sm uppercase tracking-wider mt-2">
        {label}
      </p>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="bg-dark py-14 px-5">
      <div className="max-w-wide mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
