import "./curated-projects-large.scss";

import Newsletter from "../newsletter/newsletter";

import { NavLink } from "react-router-dom";
const CuratedProjectsLarge = ({ title }) => {
  return (
    <>
      <div className="curated-large-wrapper">
        <section className="curated-content d-md-block d-none">
          <div className="container">
            <h3 className="section-heading home-heading">{title}</h3>
            <div className="curated-cards">
              <div
                className="card bg-violet custom-card podcast_lg_cards position-relative"
                style={{
                  backgroundImage: `url("/assets/img/podcast/large-podcast-bg1.webp")`,
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
                <a
                  className="z-indx"
                  href="/podcast/e-commerce-for-the-next-billion-with-bharath-ram-flipkart/"
                >
                  <div className="card-body">
                    <div className="d-flex jc-sb">
                      <span className="badge trans-badge">Latest Podcast</span>
                      <img
                        loading="lazy"
                        src="/assets/img/podcast/flipkart.webp"
                        className="icon icon-share"
                        alt=""
                      />
                    </div>
                    <div className="podcast_mx-wdth large-ban">
                      <div className="text">
                        <span className="txt-an-grad">E-Commerce</span> for the{" "}
                        <br />
                        Next Billion
                      </div>
                      <div className="in-flx">
                        <span>
                          <img
                            loading="lazy"
                            src="/assets/img/podcast/play-dark.svg"
                            className="icon icon-share"
                            alt=""
                            height="auto"
                            width="100%"
                          />
                        </span>
                        <p className="vd_ply">
                          <b>Bharath Ram</b> (SVP Growth, Flipkart) <b>&amp;</b>{" "}
                          <br />
                          <b>Divanshu</b> (Co-Founder, Onething)
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="card bg-red custom-card podcast_sm_cards position-relative">
                <a href="https://www.onething.design/blogs/pagination-vs-infinite-scroll-which-is-better/">
                  <div className="card-body">
                    <div className="d-flex">
                      <span className="badge trans-badge">Blogs</span>
                    </div>
                    <div className="podcast_mx-wdth">
                      <div className="text">Pagination vs Infinite Scroll</div>
                      <div className="d-flex justify-content-between">
                        <span className="bttn bttn-secondary bttn-secondary-white">
                          <span>Read More</span>

                          <img
                            loading="lazy"
                            src="/assets/img/global/white-arrow.svg"
                            className="icon icon-share"
                            alt=""
                          />
                        </span>
                        <span className="read-minutes">9 mins read</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="card bg-sky-blue custom-card podcast_sm_cards position-relative">
                <a href="/static/media/EdTech-Whitepaper.a3c7e9c7b917c9584743.pdf">
                  <div className="card-body">
                    <div className="d-flex">
                      <span className="badge trans-badge">Whitepaper</span>
                    </div>
                    <div className="podcast_mx-wdth">
                      <div className="text" style={{ width: "90%" }}>
                        Designing for Edtech
                        <br /> Platforms
                      </div>
                      <div className="d-flex justify-content-between">
                        <span className="bttn bttn-secondary bttn-secondary-white">
                          <span>Download</span>
                          <img
                            loading="lazy"
                            src="/assets/img/podcast/play-dark.svg"
                            className="icon icon-share"
                            alt=""
                          />
                        </span>
                        <span className="read-minutes">9 mins read</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="card bg-violet custom-card podcast_sm_cards position-relative"
                style={{
                  backgroundImage: `url("/assets/img/podcast/large-podcast-bg5.webp")`,
                }}
              >
                <figure>
                  <img
                    loading="lazy"
                    src={"/assets/img/podcast/large-podcast-img5r.webp"}
                    className="podcast-img2"
                    alt=""
                  />
                </figure>
                <a
                  href="/podcast/future-of-brands-in-web-3-0-with-akshay-schbang%EF%BF%BC/"
                  className="z-indx"
                  aria-hidden="true"
                  tabIndex="-1"
                >
                  <div className="card-body">
                    <div className="d-flex jc-sb">
                      <span className="badge trans-badge">Podcast</span>
                      <img
                        loading="lazy"
                        src="/assets/img/podcast/schbang-logo.webp"
                        className="icon icon-share"
                        alt=""
                      />
                    </div>
                    <div className="podcast_mx-wdth fs-26">
                      <div className="text">
                        Future of <br />
                        Brands <br />
                        in <span className="txt-entUX-grad">Web 3.0</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span className="bttn bttn-secondary bttn-secondary-white">
                          <span>Explore</span>
                          <img
                            loading="lazy"
                            src="/assets/img/podcast/play-dark.svg"
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
    </>
  );
};

export default CuratedProjectsLarge;
