const HoldingStatement = () => {
  return (
    <section
      style={{
        padding: "100px 24px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* SECTION LABEL */}
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

      {/* CORE STATEMENT */}
      <h2
        style={{
          margin: "0 0 24px",
          fontSize: "clamp(28px, 4vw, 44px)",
          lineHeight: 1.2,
          letterSpacing: "-0.04em",
          fontWeight: 600,
          color: "#fff",
        }}
      >
        Responsibility Infrastructure is the system of record for human
        responsibility.
      </h2>

      {/* EXPLANATION */}
      <p
        style={{
          margin: "0 0 24px",
          fontSize: "18px",
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.7)",
          maxWidth: "720px",
        }}
      >
        It records when responsibility moves between people, systems, and
        organisations, creating a continuous and verifiable record of ownership,
        action, and outcome.
      </p>

      {/* STRUCTURED LINE */}
      <div
        style={{
          marginTop: "30px",
          padding: "24px 28px",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.03)",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "18px",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          Capture → Assign → Accept → Complete → Evidence → Verify → Receipt
        </p>
      </div>

      {/* AUTHORITY LINE */}
      <p
        style={{
          marginTop: "40px",
          fontSize: "14px",
          color: "rgba(255,255,255,0.5)",
        }}
      >
        This standard is defined and stewarded by La Touche.
      </p>
    </section>
  );
};

export default HoldingStatement;
