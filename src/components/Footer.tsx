const team = [
  { name: "B C H Benjamin", role: "Team Lead · CSE" },
  { name: "Saniya J", role: "CSE" },
  { name: "Chetan S", role: "ECE" },
  { name: "Aydin Hasan K S", role: "ECE" },
  { name: "Chandan B D", role: "ECE" },
];

export function Footer() {
  return (
    <footer className="mt-32 border-t border-iron bg-void">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-steel">
              &gt; project
            </p>
            <p className="mt-3 text-paper">AI-Powered Street Safety Device Network</p>
            <p className="mt-1 text-xs text-ash">
              ASIP_127 / 24EDAI127 · Group O · TechXAtria 2026
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-steel">
              &gt; institution
            </p>
            <p className="mt-3 text-paper">Atria Institute of Technology</p>
            <p className="mt-1 text-xs text-ash">
              An Autonomous Institution, Bengaluru — 560024
            </p>
            <p className="mt-3 text-xs text-ash">
              Faculty Guide: Dr. Raghunandan G H · Associate Dean, CDC
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-steel">
              &gt; team
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              {team.map((m) => (
                <li key={m.name} className="flex justify-between gap-4">
                  <span className="text-paper">{m.name}</span>
                  <span className="text-ash">{m.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-iron pt-6 text-xs text-steel sm:flex-row">
          <span>© 2026 · Group O · All rights reserved.</span>
          <span>
            <span className="text-ember">●</span> system_status: prototype_phase_2
          </span>
        </div>
      </div>
    </footer>
  );
}
