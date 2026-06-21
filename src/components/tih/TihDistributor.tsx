import SentButton from "./SentButton";

const points = [
  {
    n: "01",
    t: "Demand that's already there",
    d: "Kitchens in your area are looking. You bring the relationships.",
  },
  {
    n: "02",
    t: "Straight to the founders",
    d: "No sales layers, just a real conversation.",
  },
  {
    n: "03",
    t: "Idli is everyday demand",
    d: "Not seasonal, not trend-led. Breakfast, every day.",
  },
];

const TihDistributor = () => (
  <section id="dist" className="dist">
    <div className="dist-inner">
      <div>
        <div className="rv">
          <div className="dist-tag">Grow With Us</div>
          <h2 className="dist-h">
            Carry something
            <br />
            worth <em>carrying.</em>
          </h2>
          <p className="dist-sub">
            If you have kitchen connections, a delivery network, or just believe
            in food made the honest way, let's talk.
          </p>
        </div>
        <div className="rv rv1">
          {points.map((p) => (
            <div className="dp" key={p.n}>
              <div className="dp-n">{p.n}</div>
              <div>
                <div className="dp-t">{p.t}</div>
                <div className="dp-d">{p.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rv rv2">
        <div className="form-card">
          <div className="form-h">Tell us about yourself</div>
          <div className="form-s">
            We'll follow up personally, no automated emails.
          </div>
          <div className="f2">
            <div className="fg">
              <label>Your Name</label>
              <input type="text" placeholder="Full name" />
            </div>
            <div className="fg">
              <label>Phone</label>
              <input type="tel" placeholder="+91 XXXXX XXXXX" />
            </div>
          </div>
          <div className="fg">
            <label>Area You'd Cover</label>
            <input type="text" placeholder="e.g. Thane, Andheri, Belapur..." />
          </div>
          <div className="fg">
            <label>Your Situation</label>
            <select defaultValue="">
              <option value="" disabled>
                Select
              </option>
              <option>I have a delivery network</option>
              <option>I have local kitchen connections</option>
              <option>Starting fresh</option>
            </select>
          </div>
          <div className="fg">
            <label>Anything Else</label>
            <textarea placeholder="Whatever feels relevant, we'll read it." />
          </div>
          <SentButton label="Send" />
        </div>
      </div>
    </div>
  </section>
);

export default TihDistributor;
