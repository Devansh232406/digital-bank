import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBolt,
  FaFingerprint,
  FaGlobe,
  FaLock,
  FaShieldHalved,
} from "react-icons/fa6";
import "./About.css";
export default function About() {
  return (
    <main className="about-page">
      <header className="simple-nav container">
        <Link className="brand" to="/">
          <span>●</span> Digital Bank
        </Link>
        <div>
          <Link to="/services">Services</Link>
        </div>
      </header>
      <section className="about container">
        <div className="about-copy">
          <p className="section-kicker">About verdant</p>
          <h1>
            Money should feel
            <br />
            <em>more human.</em>
          </h1>
          <p>
            We started Digital Bank to make banking feel less like a chore and more
            like a source of possibility. Simple tools, honest guidance, and a
            team that is always with you.
          </p>
          <Link className="about-link" to="/contact">
            Meet the people behind it <FaArrowRight />
          </Link>
          <div className="metrics">
            <div>
              <strong>
                1M<span>+</span>
              </strong>
              <p>active members</p>
            </div>
            <div>
              <strong>
                99.9<span>%</span>
              </strong>
              <p>platform uptime</p>
            </div>
            <div>
              <strong>
                24<span>/7</span>
              </strong>
              <p>here to support you</p>
            </div>
          </div>
        </div>
        <div className="network-art">
          <div className="network-label label-one">
            <FaLock /> Encrypted transfer
          </div>
          <div className="network-label label-two">
            <FaFingerprint /> Face ID verified
          </div>
          <div className="globe">
            <div className="globe-ring r1" />
            <div className="globe-ring r2" />
            <div className="globe-ring r3" />
            <FaGlobe />
            <i className="node n1" />
            <i className="node n2" />
            <i className="node n3" />
            <i className="node n4" />
          </div>
          <div className="network-card">
            <span>
              <FaShieldHalved />
            </span>
            <p>Protected by design</p>
            <strong>Every transaction is watched over.</strong>
          </div>
        </div>
      </section>
      <section className="values">
        <div className="container">
          <p className="section-kicker">What guides us</p>
          <div className="value-grid">
            <article>
              <FaBolt />
              <h2>Clarity over complexity</h2>
              <p>We make the important things easy to understand.</p>
            </article>
            <article>
              <FaShieldHalved />
              <h2>Security without compromise</h2>
              <p>Protection is never an add-on. It is the foundation.</p>
            </article>
            <article>
              <FaGlobe />
              <h2>Progress for everyone</h2>
              <p>Better financial tools should be within everyone's reach.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
