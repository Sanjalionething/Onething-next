import "./all_industries.scss";
import "../../styles/_atoms/global-section.scss";
import "../../styles/_atoms/_typography.scss";
import "../../styles/_atoms/_spacing.scss";
import "slick-carousel/slick/slick.css";
import "../../components/partials/testimonials/testimonials.scss";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet";
import { INDUSTRY_DATA } from "@/essentials/data/industryData";
// import Newsletter from "../../components/partials/newsletter/newsletter";
import "../../components/partials/curated-large/curated-projects-large.scss";
import { addPageMetas } from "@/essentials/utils/global_fun";

const Industries = ({ title, data }) => {
  const router = useRouter();
  const Data = data[title];

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  var testimonialsTest = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderPrev = () => {
    navRight.slickPrev();
  };

  const sliderNext = () => {
    navRight.slickNext();
  };
  useEffect(() => {
    addPageMetas(
      Data?.metaTitle ? Data?.metaTitle : "generic",
      Data?.metaDesc ? Data?.metaDesc : "generic"
    );
    document.body.classList.add("industry-page");
    document.body.classList.add("bfsi-page");
  }, []);

  const [navLeft, setNavLeft] = useState();
  const [navRight, setNavRight] = useState();

  return (
    <>
      <Helmet>
        <link
          rel="preload dns-prefetch canonical"
          href={`https://www.onething.design${router?.pathname}`}
        ></link>
      </Helmet>
      <div className="industry-page-wrapper page-wrapper">
        <section className="industry_banner blur-overlay">
          <div className="left_container position-relative">
            <h2 className="wrap_">
              <span className="industry-tag gradient-text">{Data?.title}</span>
              <span dangerouslySetInnerHTML={{ __html: Data?.heading }} />
            </h2>
            <div
              id="first_grad"
              className="grad-img ab_grad grad type-2 medium"
            ></div>
            <div
              id="second_grad"
              className="grad-img ab_grad grad mesh w medium"
            ></div>
            <figure className="industry-banner left_container">
              <img
                loading="lazy"
                src={Data?.mainImg}
                className="banner-img"
                alt=""
              />
            </figure>
          </div>
        </section>
        <section className="industry-intro-wrapper blur-overlay">
          <div className="wrapp_">
            <div className="container">
              <div
                id="third_grad"
                className="grad-img ab_grad grad type-2 small"
              ></div>
              <div className="content left_container">
                <p className="intro-text">
                  {Data?.desc1}
                  <span> &nbsp;{Data?.keyword}&nbsp;</span>
                  {Data?.desc2}
                </p>
                <div className="stats-container">
                  <h3
                    class="section-heading"
                    dangerouslySetInnerHTML={{ __html: Data?.statsHead }}
                  ></h3>
                  <div class="stats-flex colm-1">
                    <div class="stat-div">
                      <h5>{Data?.stats1}</h5>
                      <p>{Data?.stats1_desc}</p>
                    </div>
                    <div class="stat-div">
                      <h5>{Data?.stats2}</h5>
                      <p>{Data?.stats2_desc}</p>
                    </div>
                  </div>
                  <div class="stats-flex colm-2">
                    <div class="stat-div">
                      <h5>{Data?.stats3}</h5>
                      <p>{Data?.stats3_desc}</p>
                    </div>
                    <div class="stat-div">
                      <h5>{Data?.stats4}</h5>
                      <p>{Data?.stats4_desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="related-industries-posts blur-overlay">
          <div className="container">
            <div className="heading-wrapper">
              <h3 class="section-heading">{Data?.component_heading}</h3>
            </div>
            <div className="post-listing">
              <div className="project-industry type--1">
                <a href={Data?.components[0].link}>
                  <figure>
                    <img
                      loading="lazy"
                      src={Data?.components[0].img}
                      className="project-thumbnail"
                      alt=""
                    />
                    <figcaption>
                      <h6 className="var-bold">
                        {Data?.components[0].heading}
                      </h6>
                      <p>{Data?.components[0].desc}</p>
                    </figcaption>
                  </figure>
                </a>
              </div>

              <div className="project-industry type--2">
                <a href={Data?.components[1].link}>
                  <figure>
                    <img
                      loading="lazy"
                      src={Data?.components[1].img}
                      className="project-thumbnail"
                      alt=""
                    />
                    <figcaption>
                      <h6 className="var-bold">
                        {Data?.components[1].heading}
                      </h6>
                      <p>{Data?.components[1].desc}</p>
                    </figcaption>
                  </figure>
                </a>
              </div>
              {Data?.components[2] ? (
                <div className="project-industry type--3">
                  <a href={Data?.components[2].link}>
                    <figure>
                      <img
                        loading="lazy"
                        src={Data?.components[2].img}
                        className="project-thumbnail"
                        alt=""
                      />
                      <figcaption>
                        <h6 className="var-bold">
                          {Data?.components[2].heading}
                        </h6>
                        <p>{Data?.components[2].desc}</p>
                      </figcaption>
                    </figure>
                  </a>
                </div>
              ) : (
                ""
              )}
              {Data?.components[3] ? (
                <div className="project-industry type--4">
                  <a href={Data?.components[3].link}>
                    <figure>
                      <img
                        loading="lazy"
                        src={Data?.components[3].img}
                        className="project-thumbnail"
                        alt=""
                      />
                      <figcaption>
                        <h6 className="var-bold">
                          {Data?.components[3].heading}
                        </h6>
                        <p>{Data?.components[3].desc}</p>
                      </figcaption>
                    </figure>
                  </a>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </section>

        <div className="testimonials-section-wrapper">
          <section className="testimonials-section">
            <div className="container">
              <div className="row m-0">
                <div className="col-md-4">
                  <Slider
                    className="testimonials-img-slider"
                    {...settings}
                    asNavFor={navRight}
                    ref={(sliderLeft) => setNavLeft(sliderLeft)}
                  >
                    {Data?.testimonials.map((item) => (
                      <div key={item.id}>
                        <figure>
                          <img
                            loading="lazy"
                            src={item.img}
                            className="img-fluid"
                            alt="Testimonial Onething"
                          />
                        </figure>
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="col-md-8">
                  <Slider
                    className="testimonials-text-slider"
                    {...testimonialsTest}
                    asNavFor={navLeft}
                    ref={(sliderRight) => setNavRight(sliderRight)}
                  >
                    {Data?.testimonials.map((item) => (
                      <div key={item.id}>
                        <p>{item.desc}</p>
                        <p className="fs-20 testifier-details">
                          {item.name}
                          <br />
                          <span>{item.position}</span>
                        </p>
                      </div>
                    ))}
                  </Slider>
                  <ul className="list-unstyled d-flex custom_arrows">
                    <li className="prev" onClick={sliderPrev}>
                      <img
                        loading="lazy"
                        src="/assets/img/svg/left-arrow.svg"
                        className="img-fluid"
                        alt="Left Arrow"
                      />
                    </li>
                    <li className="next" onClick={sliderNext}>
                      <img
                        loading="lazy"
                        src="/assets/img/svg/right-arrow.svg"
                        className="img-fluid"
                        alt="Right Arrow"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="curated-large-wrapper">
          <section className="curated-content d-md-block d-none">
            <div className="container">
              <div className="curated-cards">
                <div
                  className="card bg-violet custom-card podcast_lg_cards position-relative"
                  style={{
                    backgroundImage: `url(
                      "/assets/img/podcast/large-podcast-bg1.webp"
                    )`,
                  }}
                >
                  <figure>
                    <img
                      loading="lazy"
                      src="/assets/img/podcast/large-podcast-img1.webp"
                      className="podcast-img2"
                      alt=""
                    />
                  </figure>
                  <a className="z-indx" href={Data?.curated_large[0].link}>
                    <div className="card-body">
                      <div className="d-flex jc-sb">
                        <span className="badge trans-badge">
                          {Data?.curated_large[0].heading}
                        </span>
                        <img
                          loading="lazy"
                          src="/assets/img/podcast/flipkart.webp"
                          className="icon icon-share"
                          alt=""
                          height="auto"
                          width="100%"
                        />
                      </div>
                      <div className="podcast_mx-wdth large-ban">
                        <div className="text">
                          {Data?.curated_large[0].text1}
                          <span className="txt-an-grad">
                            &nbsp;{Data?.curated_large[0].grad_text}
                          </span>{" "}
                          {Data?.curated_large[0].text2}
                        </div>
                        <div className="d-flex justify-content-between">
                          <span className="bttn bttn-secondary bttn-secondary-white">
                            <span>{Data?.curated_large[0].span_text}</span>
                            <img
                              loading="lazy"
                              src="/assets/img/global/white-arrow.svg"
                              className="icon icon-share"
                              alt=""
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="card bg-red custom-card podcast_sm_cards position-relative">
                  <a href={Data?.curated_large[1].link}>
                    <div className="card-body">
                      <div className="d-flex">
                        <span className="badge trans-badge">
                          {Data?.curated_large[1].heading}
                        </span>
                      </div>
                      <div className="podcast_mx-wdth">
                        <div className="text">
                          {Data?.curated_large[1].text1}
                        </div>
                        <div className="d-flex justify-content-between">
                          <span className="bttn bttn-secondary bttn-secondary-white">
                            <span>{Data?.curated_large[1].span_text}</span>
                            <img
                              loading="lazy"
                              src="/assets/img/global/white-arrow.svg"
                              className="icon icon-share"
                              alt=""
                            />
                          </span>
                          <span className="read-minutes">
                            {Data?.curated_large[1].time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="card bg-sky-blue custom-card podcast_sm_cards position-relative">
                  <a href={Data?.curated_large[2].link}>
                    <div className="card-body">
                      <div className="d-flex">
                        <span className="badge trans-badge">
                          {Data?.curated_large[2].heading}
                        </span>
                      </div>
                      <div className="podcast_mx-wdth">
                        <div className="text" style={{ width: "90%" }}>
                          {Data?.curated_large[2].text1}
                        </div>
                        <div className="d-flex justify-content-between">
                          <span className="bttn bttn-secondary bttn-secondary-white">
                            <span>{Data?.curated_large[2].span_text}</span>
                            <img
                              loading="lazy"
                              src="/assets/img/global/white-arrow.svg"
                              className="icon icon-share"
                              alt=""
                            />
                          </span>
                          <span className="read-minutes">
                            {Data?.curated_large[2].time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="card bg-violet custom-card podcast_sm_cards position-relative"
                  style={{
                    backgroundImage: `url(
                      "/assets/img/podcast/large-podcast-bg5.webp"
                    )`,
                  }}
                >
                  <figure>
                    <img
                      loading="lazy"
                      src="/assets/img/podcast/large-podcast-img5.webp"
                      className="podcast-img2"
                      alt=""
                    />
                  </figure>
                  <a href={Data?.curated_large[3].link} className="z-indx">
                    <div className="card-body">
                      <div className="d-flex jc-sb">
                        <span className="badge trans-badge">
                          {Data?.curated_large[3].heading}
                        </span>
                        <img
                          loading="lazy"
                          src="/assets/img/podcast/schbang-logo.webp"
                          className="icon icon-share"
                          alt=""
                        />
                      </div>
                      <div className="podcast_mx-wdth fs-26">
                        <div className="text">
                          {Data?.curated_large[3].text1}
                        </div>
                        <div className="d-flex justify-content-between">
                          <span className="bttn bttn-secondary bttn-secondary-white">
                            <span>{Data?.curated_large[3].span_text}</span>
                            <img
                              loading="lazy"
                              src="/assets/img/global/white-arrow.svg"
                              className="icon icon-share"
                              alt=""
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="card custom-card podcast_email bg-white">
                  {/* <Newsletter heading={"Subscribe to our newsletter"} /> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default Industries;

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  const data = INDUSTRY_DATA;
  return { props: { title: slug, data } };
};