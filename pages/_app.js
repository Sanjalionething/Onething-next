import "../styles/main.scss";
import "../styles/global.scss";
// import "../styles/_atoms/_spacing.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store, persistor } from "../essentials/redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import LinesBehindLayout from "../components/partials/lines-behind-layout/LinesBehindLayout";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import MouseFollower from "mouse-follower";
import ScrollToTop from "../components/partials/scroll-to-top/scroll-to-top";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Cursor from "../essentials/widgets/cursor/cursor";
import "aos/dist/aos.css";
import gsap from "gsap";
// import store from "../essentials/redux/store";
// import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  const boxRef = useRef();
  const router = useRouter();

  var containerRef = useRef(null);
  useEffect(() => {
    if (window !== undefined) {
      window.scroll({ behavior: "smooth" });
    }
  }, []);
  useEffect(() => {
    if (window !== undefined) {
      MouseFollower.registerGSAP(gsap);
      const cursor = new MouseFollower();
    }
  });

  return (
    <>
      <Head>
        <title>Onething - Leading Global UI UX Design Agency</title>
        <meta
          name="description"
          content="We are Onething, a global UI UX design agency building immersive experiences to improve the way humans interact with the digital world."
        />
        <meta
          charset="utf-8"
          content="ui ux agency, ui ux design agency, design agency, ux agency, design agency , ui ux design studio, design company, design consultant, ui ux agency, ux ui design agency in use, ui design company, ux design consultancy, ui company, ux design company, ui ux design firm, ui design agency, user interface design company, ui ux company, ui ux design agency, ui design firm, best ui ux design companies in India, ui studio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div ref={containerRef} data-scroll-container className="">
        {router.pathname === "/ui-ux-design-agency" ? "" : <Header />}
        <Cursor />
        <ScrollToTop />
        <LinesBehindLayout />

        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
        {/* <Component {...pageProps} /> */}

        {router.pathname === "/ui-ux-design-agency" ? "" : <Footer />}
      </div>
    </>
  );
}

export default MyApp;
