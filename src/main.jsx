import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Uzb from "./language/uz/global.json";
import Ru from "./language/ru/global.json";
import Eng from "./language/eng/global.json";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      uz: {
        translation: Uzb
      },
      ru: {
        translation: Ru
      },
      eng: {
        translation:Eng
      },
    },
    lng: "uz",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <App  />
    </StrictMode>
  </BrowserRouter>
);
