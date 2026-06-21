const items = [
  "No soda",
  "RO purified water",
  "No additives",
  "Naturally fermented",
  "Gloved handling",
  "Food safety certified",
  "Bulk & retail supply",
  "Mumbai & Navi Mumbai",
];

const TihTicker = () => (
  <div className="ticker">
    <div className="ticker-t">
      {[...items, ...items].map((text, i) => (
        <div className="ti" key={i}>
          {text}
        </div>
      ))}
    </div>
  </div>
);

export default TihTicker;
