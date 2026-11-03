import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import { THEME } from "@/data/site";
import { logoSvg } from "@/lib/logo";

// The portfolio uses WebGL and browser APIs, so it renders on the client only.
const PortfolioApp = lazy(() => import("@/components/portfolio-app"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dev-designer — Webmaster, designer & développeur front-end" },
      {
        name: "description",
        content:
          "Portfolio de Dev-designer : création de sites WordPress, webdesign et développement front-end sur mesure.",
      },
      { property: "og:title", content: "Dev-designer — Webmaster & designer" },
      {
        property: "og:description",
        content: "Sites WordPress, webdesign et développement front-end sur mesure.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function applyTheme() {
  const icon =
    document.querySelector<HTMLLinkElement>('link[rel="icon"]') ??
    document.head.appendChild(document.createElement("link"));
  icon.rel = "icon";
  icon.type = "image/svg+xml";
  icon.href =
    "data:image/svg+xml," + encodeURIComponent(logoSvg("#0e0e0e", "#f2f2f2", THEME.accent ?? "#f2f2f2"));
  if (!THEME.accent) return;
  const root = document.documentElement.style;
  root.setProperty("--color-accent", THEME.accent);
  root.setProperty("--color-accent-ink", THEME.accentInk);
  root.setProperty("--color-label", THEME.accent);
}

function Index() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    applyTheme();
    setReady(true);
  }, []);
  if (!ready) return <div className="min-h-screen bg-ink" />;
  return (
    <Suspense fallback={<div className="min-h-screen bg-ink" />}>
      <PortfolioApp />
    </Suspense>
  );
}
