// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import BrandLayout from 'src/layouts/BrandLayout'
import AppLayout from 'src/layouts/AppLayout'

function BrandRoutes() {
  return (
    <Router>
      <Set wrap={BrandLayout}>
        <Route path="/foo" page={BrandFooPage} name="foo" />
        <Route path="/hello" page={BrandHelloPage} name="hello" />
        <Route path="/" page={BrandBrandHomePage} name="brandHome" />
      </Set>
      <Route notfound page={AppNotFoundPage} />
    </Router>
  )
}

function AppRoutes() {
  return (
    <Router>
      <Set wrap={AppLayout}>
        <Route path="/bar" page={AppBarPage} name="bar" />
        <Route path="/" page={AppHomePage} name="home" />
      </Set>
      <Route notfound page={AppNotFoundPage} />
    </Router>
  )
}

export default function Routes() {
  const { hostname } = window.location
  const isApp = hostname === 'app.localhost'
  return isApp ? <AppRoutes /> : <BrandRoutes />
}
