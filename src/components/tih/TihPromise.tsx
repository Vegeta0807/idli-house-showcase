const cells = [
  { icon: "💧", t: "RO Water", b: "Every drop, every batch." },
  { icon: "🌾", t: "No Soda", b: "Just natural fermentation." },
  { icon: "🧤", t: "Gloved Handling", b: "Hygienic, careful, always." },
  { icon: "✓", t: "Checked Daily", b: "If it's off, it stays back." },
];

const TihPromise = () => (
  <section className="promise">
    <div className="promise-inner">
      <div className="promise-hd">
        <div className="promise-tag">★ The Promise ★</div>
        <h2 className="promise-h">
          Four things we'll <em>never</em> compromise on.
        </h2>
      </div>
      <div className="promise-grid">
        {cells.map((c) => (
          <div className="promise-cell" key={c.t}>
            <div className="pc-icon">{c.icon}</div>
            <div className="pc-t">{c.t}</div>
            <div className="pc-b">{c.b}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TihPromise;
