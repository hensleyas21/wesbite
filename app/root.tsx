import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
// Supports weights 100-900
import "@fontsource-variable/inter";
import "./tailwind.css";
import Header from "./components/Header";

export const links: LinksFunction = () => [];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <main className="flex flex-col min-h-screen">
          <div className="max-w-screen-lg md:divide-x md:space-x-10 flex md:flex-row flex-col mx-auto flex-grow md:border-r">
            <div className="md:w-1/3 mt-7">
              <Header />
            </div>
            <div className="md:w-2/3">{children}</div>
          </div>
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
