"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error?: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fef2f2",
        fontFamily: "system-ui, sans-serif",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "#dc2626",
          margin: "0 0 1rem 0",
        }}
      >
        500
      </h1>
      <h2
        style={{
          fontSize: "1.5rem",
          color: "#991b1b",
          margin: "0 0 1rem 0",
          textAlign: "center",
        }}
      >
        Algo deu errado
      </h2>
      <p
        style={{
          color: "#7f1d1d",
          margin: "0 0 2rem 0",
          textAlign: "center",
          maxWidth: "500px",
        }}
      >
        Ocorreu um erro inesperado. Tente recarregar a página ou entre em
        contato com o suporte.
      </p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          onClick={reset}
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#dc2626",
            color: "white",
            border: "none",
            borderRadius: "0.5rem",
            fontWeight: "500",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#b91c1c")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#dc2626")
          }
        >
          Tentar novamente
        </button>
        <Link
          href="/"
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#6b7280",
            color: "white",
            textDecoration: "none",
            borderRadius: "0.5rem",
            fontWeight: "500",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#4b5563")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#6b7280")
          }
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
