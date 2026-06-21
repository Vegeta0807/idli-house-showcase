import { scrollToId } from "./effects";

const links = [
  { label: "Story", id: "story" },
  { label: "Products", id: "products" },
  { label: "Who We Serve", id: "serve" },
  { label: "Distribute", id: "dist" },
  { label: "Contact", id: "contact" },
];

const TihFooter = () => (
  <footer>
    <div className="ft">
      <div className="ft-top">
        <div className="ft-brand">
          <div className="ft-n">THE IDLI HOUSE</div>
          <div className="ft-t">For kitchens that care.</div>
        </div>
        <div className="ft-links">
          {links.map((l) => (
            <a key={l.id} onClick={() => scrollToId(l.id)}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="ft-bot">
        <div className="ft-copy">© 2025 The Idli House · Nerul, Navi Mumbai</div>
        <div className="ft-soc">
          <a
            href="https://instagram.com/the.idli.house"
            className="ft-s"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/918850660527"
            className="ft-s"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a href="mailto:theidlihouse.foods@gmail.com" className="ft-s">
            Email
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default TihFooter;
