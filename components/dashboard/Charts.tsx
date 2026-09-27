export function LineChart({ data, labels, valueLabel = "" }: { data: number[]; labels: string[]; valueLabel?: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const span = Math.max(max - min, 1);
  const points = data.map((value, index) => {
    const x = (index / Math.max(data.length - 1, 1)) * 100;
    const y = 88 - ((value - min) / span) * 66;
    return `${x},${y}`;
  }).join(" ");
  return (
    <div className="w-full">
      <svg viewBox="0 0 100 100" className="h-52 w-full overflow-visible" role="img" aria-label={valueLabel} preserveAspectRatio="none">
        {[22,44,66,88].map((y) => <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="rgba(50,32,31,.08)" strokeWidth=".4" vectorEffect="non-scaling-stroke" />)}
        <polyline points={points} fill="none" stroke="#FF7700" strokeWidth="2.1" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        {data.map((value, index) => {
          const x = (index / Math.max(data.length - 1, 1)) * 100;
          const y = 88 - ((value - min) / span) * 66;
          return <circle key={index} cx={x} cy={y} r="1.2" fill="#FFF8F3" stroke="#FF7700" strokeWidth=".9" vectorEffect="non-scaling-stroke"><title>{labels[index]} · {value}</title></circle>;
        })}
      </svg>
      <div className="mt-2 grid text-[9px] font-semibold uppercase tracking-[.08em] text-brand-950/35" style={{ gridTemplateColumns: `repeat(${labels.length},minmax(0,1fr))` }}>{labels.map((label) => <span key={label} className="text-center">{label}</span>)}</div>
    </div>
  );
}

export function BarChart({ data, labels }: { data: number[]; labels: string[] }) {
  const max = Math.max(...data, 1);
  return (
    <div>
      <div className="flex h-52 items-end gap-2 border-b border-brand-950/10 px-1">
        {data.map((value, index) => <div key={index} className="group relative flex h-full flex-1 items-end"><div className="w-full rounded-t-lg bg-gradient-to-t from-brand-500 to-brand-300 transition group-hover:opacity-80" style={{ height: `${Math.max((value/max)*92, 8)}%` }} title={`${labels[index]} · ${value}`} /></div>)}
      </div>
      <div className="mt-2 grid text-[9px] font-semibold uppercase tracking-[.08em] text-brand-950/35" style={{ gridTemplateColumns: `repeat(${labels.length},minmax(0,1fr))` }}>{labels.map((label) => <span key={label} className="text-center">{label}</span>)}</div>
    </div>
  );
}

export function Donut({ value, label }: { value: number; label: string }) {
  const safe = Math.min(Math.max(value, 0), 100);
  return (
    <div className="relative grid h-36 w-36 place-items-center rounded-full" style={{ background: `conic-gradient(#FF7700 ${safe * 3.6}deg, rgba(50,32,31,.08) 0deg)` }}>
      <div className="grid h-24 w-24 place-items-center rounded-full bg-white text-center"><div><strong className="block text-2xl">{safe}%</strong><span className="text-[9px] font-bold uppercase tracking-[.12em] text-brand-950/40">{label}</span></div></div>
    </div>
  );
}
