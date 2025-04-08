import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import Header from "./components/Header";
import Body from "./components/Body";
import Cart from "./pages/Cart";
// import About from "./pages/About";
// import Grocery from "./components/Grocery";

import ContactPage from "./pages/ContactPage";
import RestaurantMenuPage from "./pages/RestaurantMenuPage";
import ErrorPage from "./pages/ErrorPage";

//Lazy loading
const GroceryComponent = lazy(() => import("./components/Grocery"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const LoginComponent = lazy(() => import("./pages/Login")); 

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Body />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<h2>Loading About Page</h2>}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/grocery"
          element={
            <Suspense fallback={<h1>Grocery Loading...</h1>}>
              <GroceryComponent />
            </Suspense>
          }
        />

        <Route path="/restaurants/:resId" element={<RestaurantMenuPage />} />
        <Route
          path="/login"
          element={
            <Suspense fallback={<h1>Login page is Loading...</h1>}>
              <LoginComponent />
            </Suspense>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
