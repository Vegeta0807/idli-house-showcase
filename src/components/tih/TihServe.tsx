import b2bImg from "@/assets/tih/product-thatte-idli.jpg";
import b2cImg from "@/assets/tih/product-mini-idli.jpg";
import { scrollToId } from "./effects";

const TihServe = () => (
  <section id="serve" className="serve">
    <div
      className="serve-half serve-b2b"
      style={{ backgroundImage: `url(${b2bImg})` }}
    >
      <div className="serve-half-inner rv">
        <div className="serve-tag">For Kitchens</div>
        <h2 className="serve-h">
          Make idli
          <br />
          your <em>easiest</em>
          <br />
          thing on the menu.
        </h2>
        <p className="serve-sub">
          Tiffin services. Canteens. Cafes. Caterers. Your customers will taste
          the difference, and so will your reviews.
        </p>
        <div className="serve-list">
          {[
            "Tiffin services & home kitchens",
            "Corporate canteens & institutions",
            "Cafes & South Indian restaurants",
            "Cloud kitchens & caterers",
            "Hotels & guest houses",
          ].map((t) => (
            <div className="sl-item" key={t}>
              <div className="sl-dot" />
              {t}
            </div>
          ))}
        </div>
        <button className="serve-cta" onClick={() => scrollToId("contact")}>
          Bulk Orders
        </button>
      </div>
    </div>

    <div
      className="serve-half serve-b2c"
      style={{ backgroundImage: `url(${b2cImg})` }}
    >
      <div className="serve-half-inner rv rv2">
        <div className="serve-tag">For Your Home</div>
        <h2 className="serve-h">
          Batter that
          <br />
          tastes like <em>amma's</em>
          <br />
          handed it to you.
        </h2>
        <p className="serve-sub">
          Our idli batter, in retail packs. Naturally fermented, no soda, no
          additives, the way it's meant to be. Just steam and serve.
        </p>
        <div className="serve-list">
          {[
            "1kg retail packs",
            "Stays fresh in the fridge",
            "Perfect idli & soft dosa",
            "Available across Mumbai & Navi Mumbai",
          ].map((t) => (
            <div className="sl-item" key={t}>
              <div className="sl-dot" />
              {t}
            </div>
          ))}
        </div>
        <button className="serve-cta" onClick={() => scrollToId("contact")}>
          Order for Home
        </button>
      </div>
    </div>
  </section>
);

export default TihServe;
