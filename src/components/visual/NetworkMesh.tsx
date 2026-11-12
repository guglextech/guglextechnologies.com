import { cn } from '@/lib/utils';

const CENTER = { x: 240, y: 200 };

const NODES = [
  { id: 'payments', label: 'Payments', x: 84, y: 86 },
  { id: 'identity', label: 'Identity', x: 396, y: 70 },
  { id: 'automation', label: 'Automation', x: 432, y: 226 },
  { id: 'cloud', label: 'Cloud', x: 330, y: 344 },
  { id: 'data', label: 'Data & AI', x: 112, y: 322 },
  { id: 'apis', label: 'APIs', x: 44, y: 204 },
] as const;

const SATELLITES = [
  { x: 170, y: 40 },
  { x: 300, y: 128 },
  { x: 180, y: 262 },
  { x: 452, y: 330 },
  { x: 226, y: 372 },
  { x: 28, y: 100 },
] as const;

const LINKS: Array<[number, number]> = [
  [0, 5],
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
];

export default function NetworkMesh({ className }: { className?: string }) {
  return (
    <div className={cn('relative aspect-[6/5] w-full', className)}>
      <svg viewBox="0 0 480 400" className="absolute inset-0 h-full w-full" aria-hidden>
        <circle cx={CENTER.x} cy={CENTER.y} r="120" fill="none" stroke="var(--border)" strokeDasharray="2 6" />
        <circle cx={CENTER.x} cy={CENTER.y} r="182" fill="none" stroke="var(--border)" />

        {LINKS.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={NODES[a].x}
            y1={NODES[a].y}
            x2={NODES[b].x}
            y2={NODES[b].y}
            stroke="var(--border)"
            strokeWidth="1"
          />
        ))}

        {SATELLITES.map((s, i) => (
          <line
            key={`sat-${i}`}
            x1={s.x}
            y1={s.y}
            x2={NODES[i].x}
            y2={NODES[i].y}
            stroke="var(--border)"
            strokeWidth="1"
          />
        ))}

        {NODES.map((node) => (
          <line
            key={`spoke-${node.id}`}
            x1={CENTER.x}
            y1={CENTER.y}
            x2={node.x}
            y2={node.y}
            stroke="var(--foreground)"
            strokeOpacity="0.28"
            strokeWidth="1"
          />
        ))}

        {SATELLITES.map((s, i) => (
          <circle key={`dot-${i}`} cx={s.x} cy={s.y} r="2.5" fill="var(--muted-foreground)" opacity="0.5" />
        ))}

        {NODES.map((node) => (
          <circle
            key={`node-${node.id}`}
            cx={node.x}
            cy={node.y}
            r="4.5"
            fill="var(--background)"
            stroke="var(--foreground)"
            strokeWidth="1.5"
          />
        ))}
      </svg>

      <div
        className="absolute flex size-[22%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border bg-card shadow-sm"
        style={{ left: '50%', top: '50%' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-mark.svg" alt="" className="size-1/2" />
      </div>

      {NODES.map((node) => (
        <span
          key={`label-${node.id}`}
          className="absolute -translate-x-1/2 translate-y-3 rounded-full border bg-card px-2 py-0.5 text-[10px] font-medium whitespace-nowrap text-muted-foreground sm:text-[11px]"
          style={{
            left: `${(node.x / 480) * 100}%`,
            top: `${(node.y / 400) * 100}%`,
          }}
        >
          {node.label}
        </span>
      ))}
    </div>
  );
}
