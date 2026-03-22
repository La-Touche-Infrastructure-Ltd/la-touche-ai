import logoImage from "@/assets/la-touche-logo-nosquare.png";

const Hero = () => {
  return (
    <section
      style={{
        padding: "120px 24px 100px",
        textAlign: "center",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* LOGO */}
      <div style={{ marginBottom: "40px" }}>
        <img
          alt="La Touche"
          src={logoImage}
          style={{
            width: "72px",
            height: "72px",
            opacity: 0.95,
          }}
        />
      </div>

      {/* MICRO LABEL */}
      <div
        style={{
          display: "inline-block",
          marginBottom: "28px",
          padding: "8px 14px",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "999px",
          fontSize: "12px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.6)",
        }}
      >
        Responsibility Infrastructure
      </div>

      {/* TITLE */}
      <h1
        style={{
          margin: 0,
          fontSize: "clamp(42px, 6vw, 72px)",
          lineHeight: 1.05,
          letterSpacing: "-0.04em",
          fontWeight: 600,
        }}
      >
        Simply the touch that brings order.
      </h1>

      {/* CATEGORY */}
      <p
        style={{
          marginTop: "28px",
          fontSize: "clamp(20px, 2.5vw, 28px)",
          lineHeight: 1.25,
          letterSpacing: "-0.02em",
          color: "rgba(255,255,255,0.92)",
        }}
      >
        La Touche is Responsibility Infrastructure.
      </p>

      {/* EXPLANATION */}
      <p
        style={{
          marginTop: "18px",
          maxWidth: "680px",
          marginInline: "auto",
          fontSize: "17px",
          lineHeight: 1.7,
          color: "rgba(255,255,255,0.65)",
        }}
      >
        A digital rail that records when responsibility moves between people,
        systems, and organisations — creating a clear, verifiable record of
        ownership, action, and outcome.
      </p>
    </section>
  );
};

export default Hero;
