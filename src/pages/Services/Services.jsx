import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBuildingColumns,
  FaHeadset,
  FaLock,
  FaPaperPlane,
  FaPiggyBank,
  FaShieldHalved,
} from "react-icons/fa6";
import "./Services.css";
const items = [
  {
    title: "Instant transfers",
    text: "Send money in seconds, wherever life takes you.",
    icon: FaPaperPlane,
    tag: "Payments",
  },
  {
    title: "High-yield savings",
    text: "Put your money to work with up to 4.50% APY.",
    icon: FaPiggyBank,
    tag: "Savings",
  },
  {
    title: "24/7 human support",
    text: "A real person is always ready to help you out.",
    icon: FaHeadset,
    tag: "Support",
  },
  {
    title: "Secure accounts",
    text: "Bank with bank-grade protection and total confidence.",
    icon: FaLock,
    tag: "Security",
  },
];
export default function Services() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Payments", "Savings", "Support", "Security"];
  return (
    <main className="services-page">
      <header className="simple-nav container">
        <Link className="brand" to="/">
          <span>●</span> Digital Bank
        </Link>
        <Link to="/">← Back home</Link>
      </header>
      <section className="services container">
        <p className="section-kicker">Our services</p>
        <h1>
          More ways to move
          <br />
          <em>forward.</em>
        </h1>
        <p className="intro">
          Powerful, simple tools that give you more control over every dollar.
        </p>
        <div className="filters">
          {filters.map((x) => (
            <button
              onClick={() => setFilter(x)}
              className={filter === x ? "active" : ""}
              key={x}
            >
              {x}
            </button>
          ))}
        </div>
        <div className="feature-grid">
          {items
            .filter((x) => filter === "All" || filter === x.tag)
            .map(({ title, text, icon: Icon }, i) => (
              <article
                className={`feature-card ${i === 0 ? "featured" : ""}`}
                key={title}
              >
                <span className="feature-icon">
                  <Icon />
                </span>
                <p className="card-number">0{i + 1}</p>
                <h2>{title}</h2>
                <p>{text}</p>
                <a href="#learn">
                  Discover more <FaArrowRight />
                </a>
              </article>
            ))}
        </div>
        <div className="service-banner">
          <div>
            <span className="banner-icon">
              <FaBuildingColumns />
            </span>
            <p className="section-kicker">Built for your peace of mind</p>
            <h2>
              Banking that feels
              <br />
              as safe as it is simple.
            </h2>
          </div>
          <div className="banner-list">
            <p>
              <FaShieldHalved /> Your deposits are protected
            </p>
            <p>
              <FaShieldHalved /> Biometric security on every device
            </p>
            <Link to="/contact">
              Talk to our team <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
