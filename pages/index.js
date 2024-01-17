import "../styles/pages/home.scss";
import "../styles/pages/faq.scss";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
// import { connect } from "react-redux";
// import { fetchBlogs } from "../../redux/actions";
import { gsap } from "gsap";
import { TextPlugin } from "gsap";
import { ScrollTrigger } from "gsap";
import { ScrollToPlugin } from "gsap";

// Seo
import PageLoader from "../components/partials/loaders/page-loader";
import { addPageMetas } from "../essentials/utils/global_fun";
import { PAGE_METAS } from "../essentials/data/data";
import { Helmet } from "react-helmet";

import CuratedProjectsLarge from "../components/partials/curated-large/CuratedProjectsLarge";
import ClientGrid from "../components/partials/clients/ClientGrid";
import Hero from "../components/partials/hero/hero";
import WhyOneThing from "../components/partials/whyonething/whyonething";
import Awards from "../components/partials/awards/awards";
import HomeFaq from "../components/partials/homefaq/homefaq";
import Homeprojects from "../components/partials/homeprojects/homeprojects";
import { useRouter } from "next/router";
import TurningIdeasToOutcome from "../components/partials/turning-ideas-to-outcome/turning-ideas-to-outcome";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function Home({ cursor }) {
  const [tabKey, setTabKey] = useState("automotive");
  const [windowWidth, setWindowWidth] = useState(1366);
  const [loading, setLoading] = useState(true);
  const animTextRef = useRef();
  const homeRef = useRef();
  const animWords = ["strategy", "innovation"];
  const router = useRouter();
  const pathname = router.pathname;

  useLayoutEffect(() => {
    // if (typeof window !== undefined) {
    //   addPageMetas(
    //     PAGE_METAS.home.title,
    //     PAGE_METAS.home.desc,
    //     PAGE_METAS.home.keywords
    //   );
    //   gsap.to(window, {
    //     scrollTo: { y: 0, autoKill: false },
    //     duration: 1,
    //     overwrite: true,
    //   });
    // }
  }, [pathname]);

  useEffect(() => {
    document.body.classList.add("home-page");
    let masterTl = gsap.timeline({ repeat: -1 });
    animWords.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tl.to(animTextRef.current, { duration: 1, text: word });
      masterTl.add(tl);
    });

    //  const slider = {
    //   boxes: gsap.utils.toArray(".project-thumbnail"),
    //   mainTl: gsap.timeline({
    //     defaults: {
    //       duration: 1,
    //       ease: "none",
    //     },
    //     scrollTrigger: {
    //       trigger: "#textColumn",
    //       start: "top top",
    //       end: "bottom 100%",
    //       pin: ".images",
    //       pinSpacing: true,
    //       scrub: 1,
    //     },
    //   }),
    //   setNextPics: function () {
    //     slider.boxes.forEach((box, i) => {
    //       if (i > 0) {
    //         gsap.set(box.firstElementChild, { scale: 1.5 });
    //       }
    //     });
    //   },
    //   setTl: function () {
    //     slider.mainTl
    //     .to(".project-thumbnail.one", { yPercent: -100 })
    //     .to(".project-thumbnail.one > .slide", { yPercent: 100 }, ">-1")
    //     .to(".project-thumbnail.two > .slide", { scale: 1 }, ">-1")
    //     .to(".project-thumbnail.two", { yPercent: -100 })
    //     .to(".project-thumbnail.two > .slide", { yPercent: 100 }, ">-1")
    //     .to(".project-thumbnail.three > .slide", { scale: 1 }, ">-1")
    //     .to(".project-thumbnail.three", { yPercent: -100 })
    //     .to(".project-thumbnail.three > .slide", { yPercent: 100 }, ">-1")
    //     .to(".project-thumbnail.four > .slide", { scale: 1 }, ">-1");
    //   },
    // };

    // slider.setNextPics();
    // slider.setTl();

    setWindowWidth(window.innerWidth);
    var isInViewport = function (elem) {
      var bounding = elem?.getBoundingClientRect();
      return (
        bounding?.top >= 0 &&
        bounding?.left >= 0 &&
        bounding?.bottom <=
          (window?.innerHeight || document?.documentElement?.clientHeight) &&
        bounding?.right <=
          (window?.innerWidth || document?.documentElement?.clientWidth)
      );
    };

    let grad = document.getElementById("testGrad");
    let grad2 = document.getElementById("grad2");
    let thirdLastGrad = document.getElementById("thirdLast");
    let homeLeftGrad = document.getElementById("homeLeft");
    let homeRightGrad = document.getElementById("homeRight");
    let footerLeftGrad = document.getElementById("firstGrad");
    let footerRightGrad = document.getElementById("secondGrad");
    let footerGrad = document.getElementById("footerGrad");

    // window.addEventListener("scroll", function () {
    //   let projectWrapper = document.querySelector(".our-projects-wrapper");
    //   let projectBar = document.querySelector(".project-bar");
    //   let mainWrapper = document.querySelector(".home-banner");

    //   if (isInViewport(thirdLastGrad)) {
    //     thirdLastGrad?.classList.replace("type-2-reverse", "type-3");
    //   } else {
    //     thirdLastGrad?.classList.replace("type-3", "type-2-reverse");
    //   }

    //   if (isInViewport(footerLeftGrad)) {
    //     footerLeftGrad?.classList.replace("type-2", "type-3");
    //   } else {
    //     footerLeftGrad?.classList.replace("type-3", "type-2");
    //   }

    //   if (isInViewport(footerRightGrad)) {
    //     footerRightGrad?.classList.replace("type-2", "type-3");
    //   } else {
    //     footerRightGrad?.classList.replace("type-3", "type-2");
    //   }

    //   if (isInViewport(footerGrad)) {
    //     footerGrad?.classList.replace("type-2", "type-3");
    //   } else {
    //     footerGrad?.classList.replace("type-3", "type-2");
    //   }

    //   if (isInViewport(grad)) {
    //     grad?.classList.replace("type-2", "type-3");
    //   } else {
    //     grad?.classList.replace("type-3", "type-2");
    //   }

    //   if (isInViewport(grad2)) {
    //     grad2?.classList.replace("type-2", "type-3");
    //   } else {
    //     grad2?.classList.replace("type-3", "type-2");
    //   }

    //   if (window.scrollY >= 150) {
    //     document?.querySelector(".home-right")?.classList.add("anime-scroll");
    //   } else {
    //     document.querySelector(".home-right")?.classList.remove("anime-scroll");
    //   }
    //   if (window.scrollY >= 850) {
    //     this.document
    //       .querySelector(".home-right")
    //       ?.classList.add("anime-scroll-2");
    //   } else {
    //     this.document
    //       .querySelector(".home-right")
    //       ?.classList.remove("anime-scroll-2");
    //   }
    //   if (window.scrollY >= 1350) {
    //     this.document
    //       .querySelector(".home-right")
    //       ?.classList.add("anime-scroll-3");
    //   } else {
    //     this.document
    //       .querySelector(".home-right")
    //       ?.classList.remove("anime-scroll-3");
    //   }
    //   if (window.scrollY >= 1800) {
    //     this.document
    //       .querySelector(".home-right")
    //       ?.classList.add("anime-scroll-4");
    //   } else {
    //     this.document
    //       .querySelector(".home-right")
    //       ?.classList.remove("anime-scroll-4");
    //   }
    //   if (window.scrollY >= 2200) {
    //     this.document
    //       .querySelector(".home-right")
    //       ?.classList.add("anime-scroll-5");
    //   } else {
    //     this.document
    //       .querySelector(".home-right")
    //       ?.classList.remove("anime-scroll-5");
    //   }
    //   if (window.scrollY >= 2650) {
    //     this.document
    //       ?.querySelector(".home-right")
    //       .classList.add("anime-scroll-6");
    //   } else {
    //     this.document
    //       .querySelector(".home-right")
    //       ?.classList.remove("anime-scroll-6");
    //   }

    //   // if (this.window.scrollY > 7955) {
    //   //   this.document.getElementById("thirdLast").style.transform =
    //   //   "translateY(275px)";
    //   //   this.document.getElementById("thirdLast").style.transitionDuration =
    //   //   "1500ms";
    //   // }

    //   if (window.scrollY > 8882) {
    //     document.getElementById("firstGrad").style.transform =
    //       "translateY(227px)";
    //     document.getElementById("firstGrad").style.transitionDuration =
    //       "1500ms";
    //     document.getElementById("firstGrad").style.visibility = "visible";

    //     document.getElementById("secondGrad").style.transform =
    //       "translateY(-183px)";
    //     document.getElementById("secondGrad").style.transitionDuration =
    //       "1500ms";
    //     document.getElementById("secondGrad").style.visibility = "visible";
    //   }
    //   if (window.scrollY > 9474) {
    //     document.getElementById("firstGrad").style.transform =
    //       "translateY(590px)";
    //     document.getElementById("firstGrad").style.transitionDuration =
    //       "1500ms";
    //     document.getElementById("firstGrad").style.visibility = "visible";

    //     document.getElementById("secondGrad").style.transform =
    //       "translateY(-310px)";
    //     document.getElementById("secondGrad").style.transitionDuration =
    //       "1500ms";
    //     document.getElementById("secondGrad").style.visibility = "visible";

    //     document.getElementById("footerGrad").style.transform =
    //       "translateY(2px)";
    //     document.getElementById("footerGrad").style.transitionDuration =
    //       "1500ms";
    //     document.getElementById("footerGrad").style.visibility = "visible";
    //   }
    // });

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    cursor.removeImg();
    setShow(false);
  };
  const handleShow = () => {
    cursor.setImg(closeIcon);
    setShow(true);
  };

  const mobilehandleClose = () => setShow(false);
  const mobilehandleShow = () => setShow(true);

  return (
    <>
      {loading && <PageLoader />}
      <Helmet>
        <link
          rel="preload dns-prefetch canonical"
          href="https://www.onething.design/"
        ></link>
      </Helmet>
      <div data-scroll-container className="homepage-wrapper" ref={homeRef}>
        <Hero />
        <section className="marquee-effect blur-overlay homepage-marquee">
          <div className="div-wrap">
            <span className="track">
              Strategy - Research - Design - Branding - Development - Strategy -
              Research - Design - Branding - Development
            </span>
          </div>
        </section>
        <ClientGrid partnerHeading={"Driving impact for the leading Ones"} />
        <Homeprojects />
        {/*<Industries />*/}
        <Awards title="home" />
        <TurningIdeasToOutcome />
        {/*<CultivatingCulture />*/}
        <WhyOneThing />
        <CuratedProjectsLarge title={"The design circle"} />
        <HomeFaq />
      </div>
    </>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     blogs: state.blogs.blogList,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchBlogs: () => dispatch(fetchBlogs()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
var settings = {
  dots: true,
  arrow: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
        arrow: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        arrow: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false,
      },
    },
  ],
};