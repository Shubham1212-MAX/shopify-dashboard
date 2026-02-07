export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0f172a",
        color: "white",
        fontFamily: "Arial"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          Order Sync Server Live 🚀
        </h1>

        <p style={{ fontSize: "18px", opacity: 0.8 }}>
          Shiprocket + Google Sheet automation is running on Vercel
        </p>

        <div
          style={{
            marginTop: "25px",
            padding: "12px 20px",
            background: "#22c55e",
            borderRadius: "8px",
            display: "inline-block",
            fontWeight: "bold"
          }}
        >
          STATUS: ONLINE
        </div>
      </div>
    </main>
  );
}
