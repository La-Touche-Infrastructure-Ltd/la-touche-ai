import logoImage from "@/assets/la-touche-logo-nosquare.png";

const Index = () => {
  return (
    <main
      style={{
        backgroundColor: "#0A0A0A",
        color: "#FFFFFF",
        minHeight: "100vh",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          padding: "120px 24px 80px",
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <img
          src={logoImage}
          alt="La Touche"
          style={{
            width: "64px",
            marginBottom: "30px",
            opacity: 0.9,
          }}
        />

        <h1
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            fontWeight: 600,
            marginBottom: "20px",
          }}
        >
          Responsibility Infrastructure
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "rgba(255,255,255,0.7)",
            marginBottom: "30px",
          }}
        >
          The system of record for human responsibility
        </p>

        <a
          href="https://www.responsibilityinfrastructure.com"
          style={{
            display: "inline-block",
            padding: "14px 28px",
            borderRadius: "999px",
            background: "#FFFFFF",
            color: "#000",
            fontSize: "14px",
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          Explore the Standard
        </a>
      </section>

      {/* DEFINITION */}
      <section
        style={{
          padding: "80px 24px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            marginBottom: "20px",
          }}
        >
          Definition
        </div>

        <h2
          style={{
            fontSize: "clamp(26px, 4vw, 40px)",
            lineHeight: 1.2,
            letterSpacing: "-0.03em",
            marginBottom: "24px",
          }}
        >
          A governance layer that records, verifies, and preserves the movement
          of responsibility.
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          It creates a continuous, verifiable record of who owns something, what
          was done, and when it happened across people, systems, and
          organisations.
        </p>
      </section>

      {/* STRUCTURED FLOW */}
      <section
        style={{
          padding: "60px 24px 100px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "24px",
            background: "rgba(255,255,255,0.03)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "18px",
              letterSpacing: "-0.01em",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Capture → Assign → Accept → Complete → Evidence → Verify → Receipt
          </p>
        </div>

        <p
          style={{
            marginTop: "40px",
            fontSize: "14px",
            color: "rgba(255,255,255,0.5)",
            textAlign: "center",
          }}
        >
          Defined and stewarded by La Touche
        </p>
      </section>
    </main>
  );
};

export default Index;
