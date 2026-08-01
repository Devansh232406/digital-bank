import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBell,
  FaChartLine,
  FaPlus,
  FaRegEye,
  FaShieldHalved,
} from "react-icons/fa6";
import "./Home.css";

function Nav() {
  return (
    <nav className="nav container">
      <Link className="brand" to="/">
        <span>●</span> Digital Bank
      </Link>
      <div className="nav-links">
        <Link to="/services">Services</Link>
        <Link to="/about">About us</Link>
        <Link to="/about">Contact</Link>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <main className="hero-page">
      <Nav />
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Banking that grows with you
          </p>
          <h1>
            Your Financial
            <br />
            Future, <em>Simplified.</em>
          </h1>
          <p className="hero-text">
            Everything you need to save, spend and grow your money—built around
            your life, not the other way around.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/contact">
              Open an account <FaArrowRight />
            </Link>
            <Link className="button button-outline" to="/services">
              Explore features
            </Link>
          </div>
          <div className="trusted">
            <div className="avatars">
              <b>J</b>
              <b>M</b>
              <b>A</b>
              <b>+</b>
            </div>
            <span>
              Trusted by <strong>1M+ members</strong>
              <small>★★★★★</small>
            </span>
          </div>
        </div>
        <div className="phone-scene">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="float-tag growth">
            <FaChartLine />{" "}
            <span>
              Portfolio growth<strong>+18.4%</strong>
            </span>
          </div>
          <div className="float-tag secure">
            <FaShieldHalved /> Your money is protected
          </div>
          <div className="phone">
            <div className="notch" />
            <div className="phone-top">
              <span>9:41</span>
              <FaBell />
            </div>
            <p className="welcome">Good morning, Cristiano</p>
            <p className="available">AVAILABLE BALANCE</p>
            <h2>
              ₹24,860<span>.00</span>
              <FaRegEye />
            </h2>
            <div className="account-card">
              <span>DIGITAL BANK</span>
              <b>•••• 4289</b>
              <small>Platinum account</small>
            </div>
            <div className="quick">
              <p>Quick actions</p>
              <div>
                <button>
                  <FaPlus />
                  Add money
                </button>
                <button>
                  <FaArrowRight />
                  Transfer
                </button>
              </div>
            </div>
            <div className="activity">
              <p>Recent activity</p>
              <span>
                <i></i>Tech Mahindra<b>− ₹4.80</b>
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="hero-bottom container">
        <span>↓ Scroll to explore</span>
        <p>
          YOUR MONEY, <i>YOUR MOMENTUM.</i>
        </p>
      </div>
    </main>
  );
}
