import storyImg from "@/assets/tih/story-spread.jpg";
import founderImg from "@/assets/tih/founder-mom.jpg";

const TihStory = () => (
  <section id="story" className="story">
    <div className="story-inner">
      <div className="story-img-wrap rv">
        <div
          className="story-img"
          style={{ backgroundImage: `url(${storyImg})` }}
        />
        {/* Founder polaroid */}
        <div className="founder-card">
          <div className="founder-photo">
            <img src={founderImg} alt="Dharshini Naidu with her mother" />
          </div>
          <div className="founder-cap">"Mom &amp; me, 2024"</div>
        </div>
      </div>

      <div className="story-txt rv rv1">
        <div className="s-tag">Our Story</div>
        <h2 className="s-h">
          Made the way
          <br />
          <em>amma makes it.</em>
        </h2>
        <blockquote className="s-quote">
          "Good food shouldn't be hard to find, and what you eat should actually
          nourish you."
        </blockquote>
        <p className="s-body">
          My mom and I started The Idli House on that one belief. Because the
          idlis we grew up eating, soft, warm, never bouncy from soda, were the
          kind that made you feel safe. Comforted. Held.
        </p>
        <p className="s-body">
          That's the idli we still make. Every batch, in our fully equipped
          production unit, with RO purified water and food safety standards we
          genuinely stand behind. So whether it lands in a tiffin box or your
          customer's plate, it brings that same feeling home.
        </p>
        <div className="s-sig">
          <div className="s-sig-mark">D</div>
          <div>
            <div className="s-sig-name">Dharshini Naidu</div>
            <div className="s-sig-role">Founder, The Idli House</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TihStory;
