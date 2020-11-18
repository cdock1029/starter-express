import * as React from 'react'
import { Meta, Scripts, Styles, Routes, useGlobalData } from '@remix-run/react'
import { NavLink as Link } from 'react-router-dom'

export default function App() {
  let data = useGlobalData()

  return (
    <html lang="en" className="dark-theme">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Styles />
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"
        /> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@geist-ui/typography@latest/umd.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@geist-ui/style@latest/dist/style.css"
        />
      </head>
      <body className="max-w-screen-lg p-4 mx-auto">
        <header>
          <nav className="flex items-center">
            <Link className="mr-6" to="/" activeClassName="active-link" end>
              Home
            </Link>
            <Link className="mr-6" to="about" activeClassName="active-link">
              About
            </Link>
          </nav>
        </header>
        <main className="p-4">
          <Routes />
        </main>
        <Scripts />
        <footer>
          <p>This page was rendered at {data.date.toLocaleString()}</p>
        </footer>
      </body>
    </html>
  )
}
