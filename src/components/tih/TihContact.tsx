import SentButton from "./SentButton";

const details = [
  {
    lbl: "WhatsApp · Phone",
    val: (
      <a href="https://wa.me/918850660527">+91 88506 60527</a>
    ),
  },
  {
    lbl: "Email",
    val: (
      <a href="mailto:theidlihouse.foods@gmail.com">
        theidlihouse.foods@gmail.com
      </a>
    ),
  },
  {
    lbl: "Instagram",
    val: (
      <a href="https://instagram.com/the.idli.house" target="_blank" rel="noreferrer">
        @the.idli.house
      </a>
    ),
  },
  { lbl: "We Deliver To", val: "Mumbai & Navi Mumbai" },
];

const TihContact = () => (
  <section id="contact" className="contact">
    <div className="contact-inner">
      <div className="rv">
        <div className="ct-tag">Get In Touch</div>
        <h2 className="ct-h">
          Let's bring
          <br />
          <em>amma's idli</em>
          <br />
          to your kitchen.
        </h2>
        <p className="ct-sub">
          No formal process. Tell us your volume, your delivery area, and we'll
          get back to you directly, usually within the day.
        </p>
        {details.map((d) => (
          <div className="ct-d" key={d.lbl}>
            <div className="ct-d-bar" />
            <div>
              <div className="ct-d-lbl">{d.lbl}</div>
              <div className="ct-d-val">{d.val}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="rv rv2">
        <div className="ct-form">
          <h3>Quick Enquiry</h3>
          <div className="form-s">
            For kitchens, homes, or anything in between.
          </div>
          <div className="f2">
            <div className="fg">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="fg">
              <label>Phone</label>
              <input type="tel" placeholder="+91" />
            </div>
          </div>
          <div className="fg">
            <label>I'm Ordering For</label>
            <select defaultValue="">
              <option value="" disabled>
                Select
              </option>
              <option>My Kitchen / Business</option>
              <option>My Home</option>
              <option>Catering / Event</option>
              <option>Something Else</option>
            </select>
          </div>
          <div className="fg">
            <label>Volume &amp; Area</label>
            <input type="text" placeholder="e.g. 300 idlis/day, Belapur" />
          </div>
          <div className="fg">
            <label>Message</label>
            <textarea placeholder="Anything we should know..." />
          </div>
          <SentButton label="Send Message" />
        </div>
      </div>
    </div>
  </section>
);

export default TihContact;
