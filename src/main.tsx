import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import App from "./App.tsx";

import ErrorBoundary from "./components/UI/ErrorBoundary/ErrorBoundary.tsx";
import {
  BrowserRouter,
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import { ErrorComponent } from "./components/UI/ErrorComponent/ErrorComponent.tsx";
import { Menu } from "./components/page/Menu/Menu.tsx";
import home from "../src/assets/home.svg";
const router = createBrowserRouter([
  {
    path: "/admin",
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "menu",
        element: <Menu />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <App></App>
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
