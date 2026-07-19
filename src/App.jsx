import { jsx } from "react/jsx-runtime";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { Layout } from "./components/layout/Layout";
import { AppRoutes } from "./routes/AppRoutes";
function App() {
  return /* @__PURE__ */ jsx(BrowserRouter, { children: /* @__PURE__ */ jsx(AppProvider, { children: /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx(AppRoutes, {}) }) }) });
}
export default App;
