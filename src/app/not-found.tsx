import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-wrap" style={{ textAlign: "center", paddingTop: "80px" }}>
      <h1 className="page-title">404</h1>
      <p style={{ fontSize: "18px", color: "var(--c-text-dim)", marginBottom: "8px" }}>
        Not found. Как и обещания альтсезона в 2025...
      </p>
      <Link href="/" className="more-cta-btn" style={{ display: "inline-flex", marginTop: "16px" }}>
        На главную
      </Link>
    </div>
  );
}
