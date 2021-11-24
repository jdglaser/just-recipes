import React from "react";
import logo from "./logo.svg";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import "./PageShell.css";
import { Link } from "./Link";

export { PageShell };

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
          <Header />
          <Content>{children}</Content>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Header({ children }: { children?: React.ReactNode }) {
  return (
    <div className="content">
      <div className="header">
        <h1 className="title">Just Recipes</h1>
        <h2 className="subtitle">Just the recipes. No BS.</h2>
      </div>
      {children}
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="content">
      {children}
    </div>
  );
}