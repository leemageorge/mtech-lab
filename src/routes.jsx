import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
    {
        path: "/",
        element:<App />,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:"services",
                element:<ServicePage />
            },
            {
                path:"portfolio",
                element:<PortfolioPage />

            },
             {
                path:"about",
                element:<AboutPage />

            },
               {
                path:"contact",
                element:<ContactPage />
            },
        ]
    }
])
export default router