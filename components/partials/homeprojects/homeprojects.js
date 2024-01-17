import "./homeprojects.scss";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Slider from "react-slick";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import airtelHomethumbnail from "/assets/img/home/new-thumbnails/airtel-th.webp";
// import cokeHomethumbnail from "/assets/img/home/new-thumbnails/coke-th.webp";
// import healthkartHomethumbnail from "/assets/img/home/new-thumbnails/healthkart-th.webp";
// import noiseHomethumbnail from "/assets/img/home/new-thumbnails/noise-th.webp";
// import nuegoHomethumbnail from "/assets/img/home/new-thumbnails/nuego-th.webp";
// import statiqHomethumbnail from "/assets/img/home/new-thumbnails/statiq-th.webp";

const Homeprojects = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [windowWidth, setWindowWidth] = useState(1366);
  // const animWords = ["strategy", "innovation"];
  // const animTextRef = useRef();

  useEffect(() => {
    // Scroll Animation
    // let masterTl = gsap.timeline({ repeat: -1 });
    // animWords.forEach((word) => {
    //   let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
    //   tl.to(animTextRef.current, { duration: 1, text: word });
    //   masterTl.add(tl);
    // });
    if (typeof window !== undefined) {
      const slider = {
        boxes: gsap.utils.toArray(".project-thumbnail"),
        mainTl: gsap.timeline({
          defaults: {
            duration: 1,
            ease: "none",
          },
          scrollTrigger: {
            trigger: "#textColumn",
            start: "top top",
            end: "bottom 100%",
            pin: ".images",
            pinSpacing: true,
            scrub: 1,
          },
        }),
        setNextPics: function () {
          slider.boxes.forEach((box, i) => {
            if (i > 0) {
              gsap.set(box.firstElementChild, { scale: 1.5 });
            }
          });
        },
        setTl: function () {
          slider.mainTl
            .to(".project-thumbnail.one", { yPercent: -100 })
            .to(".project-thumbnail.one > .slide", { yPercent: 100 }, ">-1")
            .to(".project-thumbnail.two > .slide", { scale: 1 }, ">-1")
            .to(".project-thumbnail.two", { yPercent: -100 })
            .to(".project-thumbnail.two > .slide", { yPercent: 100 }, ">-1")
            .to(".project-thumbnail.three > .slide", { scale: 1 }, ">-1")
            .to(".project-thumbnail.three", { yPercent: -100 })
            .to(".project-thumbnail.three > .slide", { yPercent: 100 }, ">-1")
            .to(".project-thumbnail.four > .slide", { scale: 1 }, ">-1")
            .to(".project-thumbnail.four", { yPercent: -100 })
            .to(".project-thumbnail.four > .slide", { yPercent: 100 }, ">-1")
            .to(".project-thumbnail.five > .slide", { scale: 1 }, ">-1");
          // .to(".project-thumbnail.five", { yPercent: -100 })
          // .to(".project-thumbnail.five > .slide", { yPercent: 100 }, ">-1")
          // .to(".project-thumbnail.six > .slide", { scale: 1 }, ">-1");
        },
      };

      slider.setNextPics();
      slider.setTl();

      setWindowWidth(window.innerWidth);
    }
  }, []);

  return (
    <>
      {windowWidth > 900 && (
        <section className="our-projects-wrapper blur-overlay">
          <div className="container">
            <div className="custom-heading-wrapper">
              <h3 className="section-heading home-heading">Our Projects</h3>
              <h2>
                Acing UI UX design for many organisations across
                <br /> industries, from new age startups to global players.
              </h2>
            </div>
            <div className="projects-wrap position-relative">
              <div id="stick" className="images-card">
                <div className="images">
                  <div className="project-thumbnail one">
                    <a href="/projects/retail/coca-cola/">
                      <span
                        className="slide tileImage"
                        style={{
                          backgroundImage: `url('/assets/img/home/new-thumbnails/coke-th.webp')`,
                        }}
                      ></span>
                    </a>
                  </div>
                  <div className="project-thumbnail two">
                    <a href="/projects/energy/statiq/">
                      <div
                        className="slide tileImage"
                        style={{
                          backgroundImage: `url('/assets/img/home/new-thumbnails/statiq-th.webp')`,
                        }}
                      ></div>
                    </a>
                  </div>
                  <div className="project-thumbnail three">
                    <a href="/projects/iot/noise/">
                      <div
                        className="slide tileImage"
                        style={{
                          backgroundImage: `url('/assets/img/home/new-thumbnails/noise-th.webp')`,
                        }}
                      ></div>
                    </a>
                  </div>
                  <div className="project-thumbnail four">
                    <a href="/projects/retail/healthkart/">
                      <div
                        className="slide tileImage"
                        style={{
                          backgroundImage: `url('/assets/img/home/new-thumbnails/healthkart-th.webp')`,
                        }}
                      ></div>
                    </a>
                  </div>

                  <div className="project-thumbnail five">
                    <a href="/projects/enterprise/airtel/">
                      <div
                        className="slide tileImage"
                        style={{
                          backgroundImage: `url('/assets/img/home/new-thumbnails/airtel-th.webp')`,
                        }}
                      ></div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-text">
                <div id="textColumn">
                  <div className="text-intro one">
                    <a href="/projects/retail/coca-cola/">
                      <h5>
                        <small>RETAIL</small>
                        <span>Coca Cola</span>
                        <div className="projectstags_">
                          <ul>
                            <li>User Research</li>
                            <li>UX UI Design</li>
                            <li>App design</li>
                          </ul>
                        </div>
                      </h5>
                      <p>
                        Building a D2C ecommerce platform for Coca-Cola in the
                        Maldives region.
                      </p>
                      <span
                        className="bttn bttn-primary"
                        href="/projects/retail/coca-cola"
                      >
                        Read More About Coca-cola
                        <div className="arrow-dot">
                          <img
                            loading="lazy"
                            src="/assets/img/global/primary-arrow.svg"
                            className="icon icon-submit"
                            alt=""
                          />
                        </div>
                      </span>
                    </a>
                  </div>
                  <div className="text-intro two">
                    <a href="/projects/energy/statiq/">
                      <h5>
                        <small>ENERGY</small>
                        <span>Statiq</span>
                        <div className="projectstags_">
                          <ul>
                            <li>User Research</li>
                            <li>UX UI Design</li>
                            <li>Responsive Design</li>
                          </ul>
                        </div>
                      </h5>
                      <p>
                        Bringing convenient and lightning quick EV charging to
                        India with interactive and intuitive design.
                      </p>
                      <span
                        className="bttn bttn-primary"
                        href="/projects/energy/statiq/"
                      >
                        Read More About Statiq
                        <div className="arrow-dot">
                          <img
                            loading="lazy"
                            src="/assets/img/global/primary-arrow.svg"
                            className="icon icon-submit"
                            alt=""
                          />
                        </div>
                      </span>
                    </a>
                  </div>

                  <div className="text-intro three">
                    <a href="/projects/iot/noise/">
                      <h5>
                        <small>IOT</small>
                        <span>Noise</span>
                        <div className="projectstags_">
                          <ul>
                            <li>User Research</li>
                            <li>UX UI Design</li>
                            <li>Motion Design</li>
                          </ul>
                        </div>
                      </h5>
                      <p>
                        Designing a wearable user experience, for young users
                        taking their first steps to digital.
                      </p>
                      <span
                        className="bttn bttn-primary"
                        href="/projects/iot/noise/"
                      >
                        Read More About Noise
                        <div className="arrow-dot">
                          <img
                            loading="lazy"
                            src="/assets/img/global/primary-arrow.svg"
                            className="icon icon-submit"
                            alt=""
                          />
                        </div>
                      </span>
                    </a>
                  </div>

                  <div className="text-intro four">
                    <a href="/projects/retail/healthkart/">
                      <h5>
                        <small>Retail</small>
                        <span>Healthkart</span>
                        <div className="projectstags_">
                          <ul>
                            <li>User Research</li>
                            <li>UI UX Design</li>
                            <li>Ecommerce Design</li>
                          </ul>
                        </div>
                      </h5>
                      <p>
                        Refining a health-focused e-commerce platform, catering
                        to various personas, and making fitness fun through
                        gamification.
                      </p>
                      <span
                        className="bttn bttn-primary"
                        href="/projects/retail/healthkart/"
                      >
                        Read More About Healthkart
                        <div className="arrow-dot">
                          <img
                            loading="lazy"
                            src="/assets/img/global/primary-arrow.svg"
                            className="icon icon-submit"
                            alt=""
                          />
                        </div>
                      </span>
                    </a>
                  </div>

                  <div className="text-intro five">
                    <a href="/projects/enterprise/airtel/">
                      <h5>
                        <small>Enterprise</small>
                        <span>Airtel</span>
                        <div className="projectstags_">
                          <ul>
                            <li>User Research</li>
                            <li>UI UX Design</li>
                            <li>Dashboard Design</li>
                          </ul>
                        </div>
                      </h5>
                      <p>
                        An enterprise grade solution, designed to streamline
                        communications between businesses, and customers.
                      </p>
                      <span
                        className="bttn bttn-primary"
                        href="/projects/enterprise/airtel/"
                      >
                        Read More About airtel
                        <div className="arrow-dot">
                          <img
                            loading="lazy"
                            src="/assets/img/global/primary-arrow.svg"
                            className="icon icon-submit"
                            alt=""
                          />
                        </div>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grad type-2 small gr-box project-bar"></div>
          </div>
        </section>
      )}
      {windowWidth <= 900 && (
        <>
          <div className="project-for-mobile blur-overlay">
            <div className="project-heading container">
              <div className="custom-heading-wrapper">
                <h3 className="section-heading">Our Projects</h3>
                <h2>
                  Acing UI UX design for many organisations across industries,
                  from new age startups to global players.
                </h2>
              </div>
            </div>
            <div className="container">
              <div className="projects-wrap position-relative">
                <Slider {...settings}>
                  <div>
                    <figure className="project-thumbnail-phone">
                      <img
                        loading="lazy"
                        src="/assets/img/home/new-thumbnails/coke-th.webp"
                        alt=""
                      />
                      <div className="text-intro one">
                        <h5>
                          <small>RETAIL</small>
                          <span>Coca Cola</span>
                          <div className="projectstags_">
                            <ul>
                              <li>User Research</li>
                              <li>UX UI Design</li>
                              <li>App design</li>
                            </ul>
                          </div>
                        </h5>
                        <p>
                          Building a D2C ecommerce platform for Coca-Cola in the
                          Maldives region.
                        </p>
                        <a
                          className="bttn bttn-primary"
                          href="/projects/retail/coca-cola/"
                        >
                          {" "}
                          Read More About Coca-cola
                          <div className="arrow-dot">
                            <img
                              loading="lazy"
                              src="/assets/img/global/primary-arrow.svg"
                              className="icon icon-submit"
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                    </figure>
                  </div>
                  <div>
                    <figure className="project-thumbnail-phone">
                      <img
                        loading="lazy"
                        src="/assets/img/home/new-thumbnails/statiq-th.webp"
                        alt=""
                      />
                      <div className="text-intro two">
                        <h5>
                          <small>ENERGY</small>
                          <span>Statiq</span>
                          <div className="projectstags_">
                            <ul>
                              <li>User Research</li>
                              <li>UX UI Design</li>
                              <li>Responsive Design</li>
                            </ul>
                          </div>
                        </h5>
                        <p>
                          Bringing convenient and lightning quick EV charging to
                          India with interactive and intuitive design.
                        </p>
                        <a
                          className="bttn bttn-primary"
                          href="/projects/energy/statiq/"
                        >
                          {" "}
                          Read More About statiq
                          <div className="arrow-dot">
                            <img
                              loading="lazy"
                              src="/assets/img/global/primary-arrow.svg"
                              className="icon icon-submit"
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                    </figure>
                  </div>
                  <div>
                    <figure className="project-thumbnail-phone">
                      <img
                        loading="lazy"
                        src="/assets/img/home/new-thumbnails/noise-th.webp"
                        alt=""
                      />
                      <div className="text-intro three">
                        <h5>
                          <small>IOT</small>
                          <span>Noise</span>
                          <div className="projectstags_">
                            <ul>
                              <li>User Research</li>
                              <li>UX UI Design</li>
                              <li>Motion Design</li>
                            </ul>
                          </div>
                        </h5>
                        <p>
                          Designing a wearable user experience, for young users
                          taking their first steps to digital.
                        </p>
                        <a
                          className="bttn bttn-primary"
                          href="/projects/iot/noise/"
                        >
                          {" "}
                          Read More About Noise
                          <div className="arrow-dot">
                            <img
                              loading="lazy"
                              src="/assets/img/global/primary-arrow.svg"
                              className="icon icon-submit"
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                    </figure>
                  </div>
                  <div>
                    <figure className="project-thumbnail-phone">
                      <img
                        loading="lazy"
                        src="/assets/img/home/new-thumbnails/healthkart-th.webp"
                        alt=""
                      />
                      <div className="text-intro four">
                        <h5>
                          <small>Retail</small>
                          <span>Healthkart</span>
                          <div className="projectstags_">
                            <ul>
                              <li>User Research</li>
                              <li>UI UX Design</li>
                              <li>Ecommerce Design</li>
                            </ul>
                          </div>
                        </h5>
                        <p>
                          Refining a health-focused e-commerce platform,
                          catering to various personas, and making fitness fun
                          through gamification.
                        </p>
                        <a
                          className="bttn bttn-primary"
                          href="/projects/retail/healthkart/"
                        >
                          {" "}
                          Read More about Healthkart
                          <div className="arrow-dot">
                            <img
                              loading="lazy"
                              src="/assets/img/global/primary-arrow.svg"
                              className="icon icon-submit"
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                    </figure>
                  </div>
                  <div>
                    <figure className="project-thumbnail-phone">
                      <img
                        loading="lazy"
                        src="/assets/img/home/new-thumbnails/airtel-th.webp"
                        alt=""
                      />
                      <div className="text-intro five">
                        <h5>
                          <small>Enterprise</small>
                          <span>Airtel</span>
                          <div className="projectstags_">
                            <ul>
                              <li>User Research</li>
                              <li>UI UX Design</li>
                              <li>Dashboard Design</li>
                            </ul>
                          </div>
                        </h5>
                        <p>
                          An enterprise grade solution, designed to streamline
                          communications between businesses, and customers.
                        </p>
                        <a
                          className="bttn bttn-primary"
                          href="/projects/enterprise/airtel/"
                        >
                          {" "}
                          Read More About Airtel
                          <div className="arrow-dot">
                            <img
                              loading="lazy"
                              src="/assets/img/global/primary-arrow.svg"
                              className="icon icon-submit"
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                    </figure>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Homeprojects;
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
