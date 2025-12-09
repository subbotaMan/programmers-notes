import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AboutLayout } from "./pages/AboutLayout/AboutLayout";
import { AboutJs } from "./pages/AboutJs/AboutJs";
import { AboutReact } from "./pages/AboutReact/AboutReact";
import { AboutTypescript } from "./pages/AboutTypescript/AboutTypescript";
import { Another } from "./pages/Another/Another";
import { AboutGit } from "./pages/AboutGit/AboutGit";
import { HowToRepairThePrefrontalCortex } from "./pages/AboutBrainMotivation/HowToRepairThePrefrontalCortex";
import { LayoutPageWithBackground } from "./components/LayoutPageWithBackground";

import smallBg from "./assets/motivationBgSmall.jpg";
import bigBg from "./assets/motivationBgBig.jpg";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/layout",
        element: <AboutLayout />,
      },
      {
        path: "/javascript",
        element: <AboutJs />,
      },
      {
        path: "/react",
        element: <AboutReact />,
      },
      {
        path: "/typescript",
        element: <AboutTypescript />,
      },
      {
        path: "/another",
        element: <Another />,
      },
      {
        path: "/git",
        element: <AboutGit />,
      },
      {
        path: "/motivation",
        element: (
          <LayoutPageWithBackground smallBg={smallBg} bigBg={bigBg}>
            <HowToRepairThePrefrontalCortex />
          </LayoutPageWithBackground>
        ),
      },
    ],
  },
]);
