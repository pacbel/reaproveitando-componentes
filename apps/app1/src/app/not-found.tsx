"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8fafc",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "#1e293b",
          margin: "0 0 1rem 0",
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "1.5rem",
          color: "#64748b",
          margin: "0 0 2rem 0",
        }}
      >
        Página não encontrada
      </h2>
      <Link
        href="/"
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#2563eb",
          color: "white",
          textDecoration: "none",
          borderRadius: "0.5rem",
          fontWeight: "500",
          transition: "background-color 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1d4ed8")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
      >
        Voltar ao início
      </Link>
    </div>
  );
}
