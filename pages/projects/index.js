import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
// import { connect } from "react-redux";
import { getAllProjects, getProjectByCategory } from "../api/Projects";
import "../../styles/pages/projects.scss";
import Testimonials from "../../components/partials/testimonials/testimonials";
import {
  addPageMetas,
  convertToWebPURL,
} from "../../essentials/utils/global_fun";
import { PAGE_METAS } from "../../essentials/data/data";
import { Helmet } from "react-helmet";

const Projects = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const [y, setY] = useState(window.scrollY);
  const [isStikyMenu, handleStickyMenu] = useState(true);
  const [isAllProjects, setAllProjectTab] = useState(true);
  const [projectTab, setProjectTab] = useState(0);
  // var { filteredProjects, undoneProjects } = data;
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [undoneProjects, setUndoneProjects] = useState([]);

  const [filteredSingleProjects, setFilteredSingleProjects] = useState([]);
  const [undoneSingleProjects, setUndoneSingleProjects] = useState([]);

  useEffect(() => {
    if (data) {
      setLoading(false);
      setFilteredProjects(data.filteredProjects);
      setUndoneProjects(data.undoneProjects);
    }
  }, [data]);

  const getProjects = async () => {
    const response = await getAllProjects();
    setFilteredSingleProjects(response.filteredProjects);
    setUndoneSingleProjects(response.undoneProjects);
  };

  const fetchProjectsByCat = async (catId, tabId) => {
    let tabLoading = true;
    const response = await getProjectByCategory(catId);
    setFilteredSingleProjects(response.filteredProjects);
    setUndoneSingleProjects(response.undoneProjects);

    if (!loading) {
      tabLoading = false;
    }

    if (!tabLoading) {
      if (catId != null) {
        setAllProjectTab(false);
      } else {
        setAllProjectTab(true);
      }
      setProjectTab(tabId);
    }
    // if (catId != null) {
    //   setAllProjectTab(false);
    // } else {
    //   setAllProjectTab(true);
    // }

    // setProjectTab(tabId);
  };

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y < 100) {
        handleStickyMenu(true);
      } else {
        if (y > window.scrollY) {
          handleStickyMenu(true);
        } else if (y < window.scrollY) {
          handleStickyMenu(false);
        }
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    addPageMetas(PAGE_METAS.projects.title, PAGE_METAS.projects.desc);
    setY(window.scrollY);
    // fetchBlogs();
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(() => {
    document.body.classList.add("projects-main-page");
    document.querySelector(".mf-cursor-media").style.width = "150px";
    document.querySelector(".mf-cursor-media").style.height = "150px";
    document.querySelector(".mf-cursor-media").style.margin = "-70px 0 0 -70px";
  }, []);

  return (
    <>
      <Helmet>
        <link
          rel="preload dns-prefetch canonical"
          href="https://www.onething.design/projects"
        ></link>
      </Helmet>

      <div className="projects-page-wrapper page-wrapper">
        <section
          className={`projects-category-wrapper blur-overlay ${
            isStikyMenu ? "" : "sticky"
          }`}
        >
          <div className="sub-header">
            <nav className="navbar navbar-expand-lg navbar-light bg-white nav-slider">
              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarNav"
              >
                <ul className="navbar-nav tabs-main">
                  <li className="nav-item">
                    <button
                      className={
                        "nav-link" + (projectTab == 0 ? " active" : "")
                      }
                      onClick={() => getProjects()}
                    >
                      All work
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={
                        "nav-link" + (projectTab == 1 ? " active" : "")
                      }
                      onClick={() => fetchProjectsByCat(40, 1)}
                    >
                      BFSI
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={
                        "nav-link" + (projectTab == 6 ? " active" : "")
                      }
                      onClick={() => fetchProjectsByCat(1144, 6)}
                    >
                      Retail
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={
                        "nav-link" + (projectTab == 2 ? " active" : "")
                      }
                      onClick={() => fetchProjectsByCat(1142, 2)}
                    >
                      Gaming
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={
                        "nav-link" + (projectTab == 3 ? " active" : "")
                      }
                      onClick={() => fetchProjectsByCat(39, 3)}
                    >
                      Health Technology
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={
                        "nav-link" + (projectTab == 4 ? " active" : "")
                      }
                      onClick={() => fetchProjectsByCat(1143, 4)}
                    >
                      IOT
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={
                        "nav-link" + (projectTab == 5 ? " active" : "")
                      }
                      onClick={() => fetchProjectsByCat(38, 5)}
                    >
                      Enterprise
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={
                        "nav-link" + (projectTab == 7 ? " active" : "")
                      }
                      onClick={() => fetchProjectsByCat(1145, 7)}
                    >
                      Education
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={
                        "nav-link" + (projectTab == 8 ? " active" : "")
                      }
                      onClick={() => fetchProjectsByCat(1146, 8)}
                    >
                      Media
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={
                        "nav-link" + (projectTab == 9 ? " active" : "")
                      }
                      onClick={() => fetchProjectsByCat(36, 9)}
                    >
                      Automotive &amp; Mobility
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={
                        "nav-link" + (projectTab == 10 ? " active" : "")
                      }
                      onClick={() => fetchProjectsByCat(1156, 10)}
                    >
                      Energy
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          {loading && <div className="tab-loader"></div>}
        </section>

        {(filteredProjects?.length > 0 || undoneProjects?.length > 0) &&
        !loading ? (
          <>
            <section className="page-heading blur-overlay">
              <div className="container">
                <div className="heading-wrapper">
                  {projectTab == 0 && <h1>Designing for measurable success</h1>}

                  <div
                    id="second_grad"
                    className="grad type-2 small gr-box1"
                  ></div>
                  <div
                    id="first_grad"
                    className="grad type-2 mesh-gradient medium gr-box2"
                  ></div>
                </div>
              </div>
            </section>
            {isAllProjects && filteredProjects.length > 0 && (
              <>
                <section className="projects-listing-wrap blur-overlay">
                  <div className="container">
                    {filteredProjects.length > 0 && (
                      <>
                        {filteredProjects[0] != undefined && (
                          <>
                            <div className="row no-gutter">
                              <div className="col-md-7">
                                <a
                                  href={
                                    "/projects/" +
                                    filteredProjects[0].category__slug +
                                    "/" +
                                    filteredProjects[0].slug +
                                    "/"
                                  }
                                  className="card img_card"
                                  data-cursor-img="/assets/img/case-study.svg"
                                >
                                  <div className="tile tile-fns">
                                    <div
                                      className="tileImage tile-fts"
                                      style={{
                                        backgroundImage: `url(${convertToWebPURL(
                                          filteredProjects[0]
                                            .jetpack_featured_media_url
                                        )})`,
                                      }}
                                    ></div>
                                  </div>
                                  <div className="card-body">
                                    <h6>
                                      {filteredProjects[0].title.rendered}
                                      <small>
                                        {filteredProjects[0].category__title}
                                      </small>
                                    </h6>
                                    <p>
                                      {filteredProjects[0].acf.client_motto}
                                    </p>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </>
                        )}
                        {filteredProjects[1] != undefined && (
                          <div className="row no-gutter mt_18em flex-row-reverse">
                            <div className="col-md-4 cust_col ryt_card">
                              <a
                                href={
                                  "/projects/" +
                                  filteredProjects[1].category__slug +
                                  "/" +
                                  filteredProjects[1].slug +
                                  "/"
                                }
                                className="card img_card"
                                data-cursor-img="/assets/img/case-study.svg"
                              >
                                <div
                                  className="tile"
                                  style={{ maxWidth: "320px" }}
                                >
                                  <div
                                    className="tileImage tile-tns"
                                    style={{
                                      backgroundImage: `url(${convertToWebPURL(
                                        filteredProjects[1]
                                          .jetpack_featured_media_url
                                      )})`,
                                    }}
                                  ></div>
                                </div>
                                <div className="card-body">
                                  <h6>
                                    {filteredProjects[1].title.rendered}
                                    <small>
                                      {filteredProjects[1].category__title}
                                    </small>
                                  </h6>
                                  <p>{filteredProjects[1].acf.client_motto}</p>
                                </div>
                              </a>
                            </div>
                          </div>
                        )}
                        {filteredProjects[2] != undefined && (
                          <div className="row no-gutter">
                            <div className="col-md-7 col-10">
                              <a
                                href={
                                  "/projects/" +
                                  filteredProjects[2].category__slug +
                                  "/" +
                                  filteredProjects[2].slug +
                                  "/"
                                }
                                className="card img_card"
                                data-cursor-img="/assets/img/case-study.svg"
                              >
                                <div
                                  className="tile"
                                  style={{ maxWidth: "588px" }}
                                >
                                  <div
                                    className="tileImage tile-tns"
                                    style={{
                                      backgroundImage: `url(${convertToWebPURL(
                                        filteredProjects[2]
                                          .jetpack_featured_media_url
                                      )})`,
                                    }}
                                  ></div>
                                </div>
                                <div className="card-body">
                                  <h6>
                                    {filteredProjects[2].title.rendered}
                                    <small>
                                      {filteredProjects[2].category__title}
                                    </small>
                                  </h6>
                                  <p>{filteredProjects[2].acf.client_motto}</p>
                                </div>
                              </a>
                            </div>
                          </div>
                        )}
                        {filteredProjects[3] != undefined && (
                          <div className="row no-gutter flex-row-reverse">
                            <div className="col-md-10">
                              <a
                                href={
                                  "/projects/" +
                                  filteredProjects[3].category__slug +
                                  "/" +
                                  filteredProjects[3].slug +
                                  "/"
                                }
                                className="card img_card"
                                data-cursor-img="/assets/img/case-study.svg"
                              >
                                <div
                                  className="tile"
                                  style={{ maxWidth: "902px" }}
                                >
                                  <div
                                    className="tileImage tile-ffs"
                                    style={{
                                      backgroundImage: `url(${convertToWebPURL(
                                        filteredProjects[3]
                                          .jetpack_featured_media_url
                                      )})`,
                                    }}
                                  ></div>
                                </div>
                                <div className="card-body">
                                  <h6>
                                    {filteredProjects[3].title.rendered}
                                    <small>
                                      {filteredProjects[3].category__title}
                                    </small>
                                  </h6>
                                  <p>{filteredProjects[3].acf.client_motto}</p>
                                </div>
                              </a>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </section>
                <section className="solutions-we-provide-wrap blur-overlay">
                  <div className="container position-relative">
                    <div className="overall-services">
                      <h2 className="section-heading">Pixels for people</h2>
                      <p className="p-sec">
                        We are an established UI Company, creating functional,
                        data informed, intuitive and interactive user
                        experiences, connecting brands to people.
                      </p>
                      <div
                        id="third_grad"
                        className="grad mesh-gradient small gr-box1"
                      ></div>
                      <div
                        id="fourth_grad"
                        className="grad type-1 medium gr-box2"
                      ></div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="project-listing-continued">
                      <>
                        {filteredProjects[4] != undefined && (
                          <div className="row no-gutter flex-row-reverse">
                            <div className="col-md-5">
                              <a
                                href={
                                  "/projects/" +
                                  filteredProjects[4].category__slug +
                                  "/" +
                                  filteredProjects[4].slug +
                                  "/"
                                }
                                className="card img_card"
                                data-cursor-img="/assets/img/case-study.svg"
                              >
                                <div
                                  className="tile"
                                  style={{ maxWidth: "480px" }}
                                >
                                  <div
                                    className="tileImage tile-fns"
                                    style={{
                                      backgroundImage: `url(${convertToWebPURL(
                                        filteredProjects[4]
                                          .jetpack_featured_media_url
                                      )})`,
                                    }}
                                  ></div>
                                </div>
                                <div className="card-body">
                                  <h6>
                                    {filteredProjects[4].title.rendered}
                                    <small>
                                      {filteredProjects[4].category__title}
                                    </small>
                                  </h6>
                                  <p>{filteredProjects[4].acf.client_motto}</p>
                                </div>
                              </a>
                            </div>
                          </div>
                        )}
                        {undoneProjects[0] != undefined && (
                          <div className="row no-gutter no-gutter mt_18em">
                            <div className="col-md-4 cust_col6-8">
                              <div
                                className="card img_card"
                                data-cursor-img="/assets/img/coming-soon.svg"
                              >
                                <div
                                  className="tile"
                                  style={{ maxWidth: "362px" }}
                                >
                                  <div
                                    className="tileImage tile-fff"
                                    style={{
                                      backgroundImage: `url(${convertToWebPURL(
                                        undoneProjects[0]
                                          .jetpack_featured_media_url
                                      )})`,
                                    }}
                                  ></div>
                                </div>
                                <div className="card-body">
                                  <h6>
                                    {undoneProjects[0].title.rendered}
                                    <small>
                                      {undoneProjects[0].category__title}
                                    </small>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {/* Second Coming Soon Project */}
                        {undoneProjects[1] != undefined && (
                          <div className="row no-gutter mt_18em flex-row-reverse">
                            <div className="col-md-4">
                              <div
                                className="card img_card"
                                data-cursor-img="/assets/img/coming-soon.svg"
                              >
                                <div className="tile">
                                  <div
                                    className="tileImage tile-tns"
                                    style={{
                                      backgroundImage: `url(${convertToWebPURL(
                                        undoneProjects[1]
                                          .jetpack_featured_media_url
                                      )})`,
                                    }}
                                  ></div>
                                </div>
                                <div className="card-body">
                                  <h6>
                                    {undoneProjects[1].title.rendered}
                                    <small>
                                      {undoneProjects[1].category__title}
                                    </small>
                                  </h6>
                                  <p>{undoneProjects[1].acf.client_motto}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    </div>
                  </div>
                </section>
                <Testimonials />
                <section className="our-clients-company-wrap blur-overlay">
                  <div className="container">
                    <>
                      {filteredProjects[5] != undefined && (
                        <div className="row no-gutter">
                          <div className="col-md-7">
                            <a
                              href={
                                "/projects/" +
                                filteredProjects[5].category__slug +
                                "/" +
                                filteredProjects[5].slug +
                                "/"
                              }
                              className="card img_card"
                              data-cursor-img="/assets/img/case-study.svg"
                            >
                              <div className="tile tile-fns">
                                <div
                                  className="tileImage tile-fts"
                                  style={{
                                    backgroundImage: `url(${convertToWebPURL(
                                      filteredProjects[5]
                                        .jetpack_featured_media_url
                                    )})`,
                                  }}
                                ></div>
                              </div>
                              <div className="card-body">
                                <h6>
                                  {filteredProjects[5].title.rendered}
                                  <small>
                                    {filteredProjects[5].category__title}
                                  </small>
                                </h6>
                                <p>{filteredProjects[5].acf.client_motto}</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      )}
                      {filteredProjects[6] != undefined && (
                        <div className="row no-gutter mt_18em flex-row-reverse">
                          <div className="col-md-4 cust_col ryt_card">
                            <a
                              href={
                                "/projects/" +
                                filteredProjects[6].category__slug +
                                "/" +
                                filteredProjects[6].slug +
                                "/"
                              }
                              className="card img_card"
                              data-cursor-img="/assets/img/case-study.svg"
                            >
                              <div
                                className="tile"
                                style={{ maxWidth: "320px" }}
                              >
                                <div
                                  className="tileImage tile-tns"
                                  style={{
                                    backgroundImage: `url(${convertToWebPURL(
                                      filteredProjects[6]
                                        .jetpack_featured_media_url
                                    )})`,
                                  }}
                                ></div>
                              </div>
                              <div className="card-body">
                                <h6>
                                  {filteredProjects[6].title.rendered}
                                  <small>
                                    {filteredProjects[6].category__title}
                                  </small>
                                </h6>
                                <p>{filteredProjects[6].acf.client_motto}</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      )}
                      {filteredProjects[7] != undefined && (
                        <div className="row no-gutter">
                          <div className="col-md-7 col-10">
                            <a
                              href={
                                "/projects/" +
                                filteredProjects[7].category__slug +
                                "/" +
                                filteredProjects[7].slug +
                                "/"
                              }
                              className="card img_card"
                              data-cursor-img="/assets/img/case-study.svg"
                            >
                              <div
                                className="tile"
                                style={{ maxWidth: "588px" }}
                              >
                                <div
                                  className="tileImage tile-tns"
                                  style={{
                                    backgroundImage: `url(${convertToWebPURL(
                                      filteredProjects[7]
                                        .jetpack_featured_media_url
                                    )})`,
                                  }}
                                ></div>
                              </div>
                              <div className="card-body">
                                <h6>
                                  {filteredProjects[7].title.rendered}
                                  <small>
                                    {filteredProjects[7].category__title}
                                  </small>
                                </h6>
                                <p>{filteredProjects[7].acf.client_motto}</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      )}
                      {filteredProjects[8] != undefined && (
                        <div className="row no-gutter flex-row-reverse">
                          <div className="col-md-10">
                            <a
                              href={
                                "/projects/" +
                                filteredProjects[8].category__slug +
                                "/" +
                                filteredProjects[8].slug +
                                "/"
                              }
                              className="card img_card"
                              data-cursor-img="/assets/img/case-study.svg"
                            >
                              <div
                                className="tile"
                                style={{ maxWidth: "902px" }}
                              >
                                <div
                                  className="tileImage tile-ffs"
                                  style={{
                                    backgroundImage: `url(${convertToWebPURL(
                                      filteredProjects[8]
                                        .jetpack_featured_media_url
                                    )})`,
                                  }}
                                ></div>
                              </div>
                              <div className="card-body">
                                <h6>
                                  {filteredProjects[8].title.rendered}
                                  <small>
                                    {filteredProjects[8].category__title}
                                  </small>
                                </h6>
                                <p>{filteredProjects[8].acf.client_motto}</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      )}
                    </>
                  </div>
                </section>
              </>
            )}
            {!isAllProjects && (
              <>
                <section className="projects-listing-wrap blur-overlay">
                  <div className="container">
                    {filteredSingleProjects?.length > 0 && (
                      <>
                        {filteredSingleProjects.map((project, i) => {
                          return (
                            <React.Fragment key={i}>
                              {i % 4 == 0 && (
                                <div className="row no-gutter">
                                  <div className="col-md-7">
                                    <a
                                      href={
                                        "/projects/" +
                                        project.category__slug +
                                        "/" +
                                        project.slug +
                                        "/"
                                      }
                                      className="card img_card"
                                      data-cursor-img="/assets/img/case-study.svg"
                                    >
                                      <div className="tile tile-fns">
                                        <div
                                          className="tileImage tile-fts"
                                          style={{
                                            backgroundImage: `url(${convertToWebPURL(
                                              project.jetpack_featured_media_url
                                            )})`,
                                          }}
                                        ></div>
                                      </div>
                                      <div className="card-body">
                                        <h6>
                                          {project.title.rendered}
                                          <small>
                                            {project.category__title}
                                          </small>
                                        </h6>
                                        <p>{project.acf.client_motto}</p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              )}
                              {(i % 4) - 1 == 0 && (
                                <div className="row no-gutter mt_18em flex-row-reverse">
                                  <div className="col-md-4 cust_col ryt_card">
                                    <a
                                      href={
                                        "/projects/" +
                                        project.category__slug +
                                        "/" +
                                        project.slug +
                                        "/"
                                      }
                                      className="card img_card"
                                      data-cursor-img="/assets/img/case-study.svg"
                                    >
                                      <div
                                        className="tile"
                                        style={{ maxWidth: "320px" }}
                                      >
                                        <div
                                          className="tileImage tile-tns"
                                          style={{
                                            backgroundImage: `url(${convertToWebPURL(
                                              project.jetpack_featured_media_url
                                            )})`,
                                          }}
                                        ></div>
                                      </div>
                                      <div className="card-body">
                                        <h6>
                                          {project.title.rendered}
                                          <small>
                                            {project.category__title}
                                          </small>
                                        </h6>
                                        <p>{project.acf.client_motto}</p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              )}
                              {(i % 4) - 2 == 0 && (
                                <div className="row no-gutter">
                                  <div className="col-md-7 col-10">
                                    <a
                                      href={
                                        "/projects/" +
                                        project.category__slug +
                                        "/" +
                                        project.slug +
                                        "/"
                                      }
                                      className="card img_card"
                                      data-cursor-img="/assets/img/case-study.svg"
                                    >
                                      <div
                                        className="tile"
                                        style={{ maxWidth: "588px" }}
                                      >
                                        <div
                                          className="tileImage tile-tns"
                                          style={{
                                            backgroundImage: `url(${convertToWebPURL(
                                              project.jetpack_featured_media_url
                                            )})`,
                                          }}
                                        ></div>
                                      </div>
                                      <div className="card-body">
                                        <h6>
                                          {project.title.rendered}
                                          <small>
                                            {project.category__title}
                                          </small>
                                        </h6>
                                        <p>{project.acf.client_motto}</p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              )}
                              {(i % 4) - 3 == 0 && (
                                <div className="row no-gutter flex-row-reverse">
                                  <div className="col-md-10">
                                    <a
                                      href={
                                        "/projects/" +
                                        project.category__slug +
                                        "/" +
                                        project.slug +
                                        "/"
                                      }
                                      className="card img_card"
                                      data-cursor-img="/assets/img/case-study.svg"
                                    >
                                      <div
                                        className="tile"
                                        style={{ maxWidth: "902px" }}
                                      >
                                        <div
                                          className="tileImage tile-ffs"
                                          style={{
                                            backgroundImage: `url(${convertToWebPURL(
                                              project.jetpack_featured_media_url
                                            )})`,
                                          }}
                                        ></div>
                                      </div>
                                      <div className="card-body">
                                        <h6>
                                          {project.title.rendered}
                                          <small>
                                            {project.category__title}
                                          </small>
                                        </h6>
                                        <p>{project.acf.client_motto}</p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              )}
                            </React.Fragment>
                          );
                        })}
                      </>
                    )}
                    {undoneSingleProjects.length > 0 && (
                      <>
                        {undoneSingleProjects.map((project, i) => {
                          // let projectLength = filteredProjects.length > 10 ? 10 : filteredProjects.length;
                          let comming_soon_index =
                            filteredSingleProjects.length + i;
                          return (
                            <React.Fragment key={i}>
                              {comming_soon_index % 4 == 0 && (
                                <div className="row no-gutter">
                                  <div className="col-md-7">
                                    <div
                                      className="card img_card"
                                      data-cursor-img="/assets/img/coming-soon.svg"
                                    >
                                      <div className="tile tile-fns">
                                        <div
                                          className="tileImage tile-fts"
                                          style={{
                                            backgroundImage: `url(${convertToWebPURL(
                                              project.jetpack_featured_media_url
                                            )})`,
                                          }}
                                        ></div>
                                      </div>
                                      <div className="card-body">
                                        <h6>
                                          {project.title.rendered}
                                          <small>
                                            {project.category__title}
                                          </small>
                                        </h6>
                                        <p>
                                          Coming Soon
                                          {/* {project.acf.client_motto} */}
                                          {/* <NavLink
                                            to=""
                                            className="nav-link active always-active"
                                          >
                                            View Case Study
                                          </NavLink> */}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {(comming_soon_index % 4) - 1 == 0 && (
                                <div className="row no-gutter mt_18em flex-row-reverse">
                                  <div className="col-md-4 cust_col ryt_card">
                                    <div
                                      className="card img_card"
                                      data-cursor-img="/assets/img/coming-soon.svg"
                                    >
                                      <div
                                        className="tile"
                                        style={{ maxWidth: "320px" }}
                                      >
                                        <div
                                          className="tileImage tile-tns"
                                          style={{
                                            backgroundImage: `url(${convertToWebPURL(
                                              project.jetpack_featured_media_url
                                            )})`,
                                          }}
                                        ></div>
                                      </div>
                                      <div className="card-body">
                                        <h6>
                                          {project.title.rendered}
                                          <small>
                                            {project.category__title}
                                          </small>
                                        </h6>
                                        <p>Coming Soon</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {(comming_soon_index % 4) - 2 == 0 && (
                                <div className="row no-gutter">
                                  <div className="col-md-7 col-10">
                                    <div
                                      className="card img_card"
                                      data-cursor-img="/assets/img/coming-soon.svg"
                                    >
                                      <div
                                        className="tile"
                                        style={{ maxWidth: "588px" }}
                                      >
                                        <div
                                          className="tileImage tile-tns"
                                          style={{
                                            backgroundImage: `url(${convertToWebPURL(
                                              project.jetpack_featured_media_url
                                            )})`,
                                          }}
                                        ></div>
                                      </div>
                                      <div className="card-body">
                                        <h6>
                                          {project.title.rendered}
                                          <small>
                                            {project.category__title}
                                          </small>
                                        </h6>
                                        <p>Coming Soon</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {(comming_soon_index % 4) - 3 == 0 && (
                                <div className="row no-gutter flex-row-reverse">
                                  <div className="col-md-10">
                                    <div
                                      className="card img_card"
                                      data-cursor-img="/assets/img/coming-soon.svg"
                                    >
                                      <div
                                        className="tile"
                                        style={{ maxWidth: "902px" }}
                                      >
                                        <div
                                          className="tileImage tile-ffs"
                                          style={{
                                            backgroundImage: `url(${convertToWebPURL(
                                              project.jetpack_featured_media_url
                                            )})`,
                                          }}
                                        ></div>
                                      </div>
                                      <div className="card-body">
                                        <h6>
                                          {project.title.rendered}
                                          <small>
                                            {project.category__title}
                                          </small>
                                        </h6>
                                        <p>Coming Soon</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </React.Fragment>
                          );
                        })}
                      </>
                    )}
                  </div>
                </section>
              </>
            )}
            {filteredProjects.length > 9 && isAllProjects && (
              <section className="more-projects-wrapper blur-overlay">
                <div className="container">
                  <h3 className="section-heading">More projects</h3>
                  <ul className="list-unstyled other-projects-list">
                    {filteredProjects.slice(9).map((project, i) => {
                      return (
                        <li key={i}>
                          <a
                            href={
                              "/projects/" +
                              project.category__slug +
                              "/" +
                              project.slug +
                              "/"
                            }
                          >
                            <p className="fs-20">
                              <span>{project.title.rendered}</span>
                            </p>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </section>
            )}
            {filteredProjects.length > 10 && !isAllProjects && (
              <section className="more-projects-wrapper blur-overlay">
                <div className="container">
                  <h3 className="section-heading">More projects</h3>
                  <ul className="list-unstyled other-projects-list">
                    {filteredProjects.slice(10).map((project, i) => {
                      return (
                        <li key={i}>
                          <a
                            href={
                              "/projects/" +
                              project.category__slug +
                              "/" +
                              project.slug +
                              "/"
                            }
                          >
                            <p className="fs-20">
                              <span>{project.title.rendered}</span>
                            </p>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </section>
            )}
          </>
        ) : (
          <>
            <section className="page-heading blur-overlay">
              <div className="container">
                <div className="heading-wrapper">
                  <h1>Designing for measurable success</h1>

                  <div
                    id="second_grad"
                    className="grad type-2 small gr-box1"
                  ></div>
                  <div
                    id="first_grad"
                    className="grad type-2 mesh-gradient medium gr-box2"
                  ></div>
                </div>
              </div>
            </section>

            <section className="projects-listing-wrap blur-overlay">
              <div className="container">
                <div className="row no-gutter">
                  <div className="col-md-7">
                    <a
                      href={"/projects/"}
                      className="card img_card"
                      data-cursor-img="/assets/img/case-study.svg"
                    >
                      <div className="tile tile-fns">
                        <div
                          className="tileImage tile-fts shimmer-effect"
                          style={{ backgroundColor: "#eaeaea" }}
                        ></div>
                      </div>
                      <div className="card-body">
                        <h6>
                          Nuego
                          <small>AUTOMOTIVE AND MOBILITY</small>
                        </h6>
                        <p>
                          Crafting a premium, sustainable, and seamless bus
                          booking experience for intercity commute.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="row no-gutter mt_18em flex-row-reverse">
                  <div className="col-md-4 cust_col ryt_card">
                    <a
                      href={"/projects/"}
                      className="card img_card"
                      data-cursor-img="/assets/img/case-study.svg"
                    >
                      <div className="tile" style={{ maxWidth: "320px" }}>
                        <div
                          className="tileImage tile-tns"
                          style={{ backgroundColor: "#eaeaea" }}
                        ></div>
                      </div>
                      <div className="card-body">
                        <h6>
                          Healthkart
                          <small>RETAIL</small>
                        </h6>
                        <p>
                          Refining a health-focused ecommerce platform, catering
                          to various personas, and making fitness fun through
                          gamification.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="row no-gutter">
                  <div className="col-md-7 col-10">
                    <a
                      href={"/projects/"}
                      className="card img_card"
                      data-cursor-img="/assets/img/case-study.svg"
                    >
                      <div className="tile" style={{ maxWidth: "588px" }}>
                        <div
                          className="tileImage tile-tns"
                          style={{ backgroundColor: "#eaeaea" }}
                        ></div>
                      </div>
                      <div className="card-body">
                        <h6>
                          Prescinto
                          <small>ENERGY</small>
                        </h6>
                        <p>
                          Simplifying the complex user flows of a solar energy
                          monitoring platform.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="row no-gutter flex-row-reverse">
                  <div className="col-md-10">
                    <a
                      href={"/projects/"}
                      className="card img_card"
                      data-cursor-img="/assets/img/case-study.svg"
                    >
                      <div className="tile" style={{ maxWidth: "902px" }}>
                        <div
                          className="tileImage tile-ffs"
                          style={{ backgroundColor: "#eaeaea" }}
                        ></div>
                      </div>
                      <div className="card-body">
                        <h6>
                          Airtel
                          <small>ENTERPRISE</small>
                        </h6>
                        <p>
                          An enterprise grade solution, designed to streamline
                          communications between businesses, and customers.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className="solutions-we-provide-wrap blur-overlay">
              <div className="container position-relative">
                <div className="overall-services">
                  <h2 className="section-heading">Pixels for people</h2>
                  <p className="p-sec">
                    We are an established UI Company, creating functional, data
                    informed, intuitive and interactive user experiences,
                    connecting brands to people.
                  </p>
                  <div
                    id="third_grad"
                    className="grad mesh-gradient small gr-box1"
                  ></div>
                  <div
                    id="fourth_grad"
                    className="grad type-1 medium gr-box2"
                  ></div>
                </div>
              </div>
              <div className="container">
                <div className="project-listing-continued">
                  <>
                    {filteredProjects[4] != undefined && (
                      <div className="row no-gutter flex-row-reverse">
                        <div className="col-md-5">
                          <a
                            href={
                              "/projects/" +
                              filteredProjects[4].category__slug +
                              "/" +
                              filteredProjects[4].slug +
                              "/"
                            }
                            className="card img_card"
                            data-cursor-img="/assets/img/case-study.svg"
                          >
                            <div className="tile" style={{ maxWidth: "480px" }}>
                              <div
                                className="tileImage tile-fns"
                                style={{
                                  backgroundImage: `url(${convertToWebPURL(
                                    filteredProjects[4]
                                      .jetpack_featured_media_url
                                  )})`,
                                }}
                              ></div>
                            </div>
                            <div className="card-body">
                              <h6>
                                {filteredProjects[4].title.rendered}
                                <small>
                                  {filteredProjects[4].category__title}
                                </small>
                              </h6>
                              <p>{filteredProjects[4].acf.client_motto}</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    )}
                    {undoneProjects[0] != undefined && (
                      <div className="row no-gutter no-gutter mt_18em">
                        <div className="col-md-4 cust_col6-8">
                          <div
                            className="card img_card"
                            data-cursor-img="/assets/img/coming-soon.svg"
                          >
                            <div className="tile" style={{ maxWidth: "362px" }}>
                              <div
                                className="tileImage tile-fff"
                                style={{
                                  backgroundImage: `url(${convertToWebPURL(
                                    undoneProjects[0].jetpack_featured_media_url
                                  )})`,
                                }}
                              ></div>
                            </div>
                            <div className="card-body">
                              <h6>
                                {undoneProjects[0].title.rendered}
                                <small>
                                  {undoneProjects[0].category__title}
                                </small>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {undoneProjects[1] != undefined && (
                      <div className="row no-gutter mt_18em flex-row-reverse">
                        <div className="col-md-4">
                          <div
                            className="card img_card"
                            data-cursor-img="/assets/img/coming-soon.svg"
                          >
                            <div className="tile">
                              <div
                                className="tileImage tile-tns"
                                style={{
                                  backgroundImage: `url(${convertToWebPURL(
                                    undoneProjects[1].jetpack_featured_media_url
                                  )})`,
                                }}
                              ></div>
                            </div>
                            <div className="card-body">
                              <h6>
                                {undoneProjects[1].title.rendered}
                                <small>
                                  {undoneProjects[1].category__title}
                                </small>
                              </h6>
                              <p>{undoneProjects[1].acf.client_motto}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                </div>
              </div>
            </section>
            <Testimonials />
            <section className="our-clients-company-wrap blur-overlay">
              <div className="container">
                <>
                  {filteredProjects[5] != undefined && (
                    <div className="row no-gutter">
                      <div className="col-md-7">
                        <a
                          href={
                            "/projects/" +
                            filteredProjects[5].category__slug +
                            "/" +
                            filteredProjects[5].slug +
                            "/"
                          }
                          className="card img_card"
                          data-cursor-img="/assets/img/case-study.svg"
                        >
                          <div className="tile tile-fns">
                            <div
                              className="tileImage tile-fts"
                              style={{
                                backgroundImage: `url(${convertToWebPURL(
                                  filteredProjects[5].jetpack_featured_media_url
                                )})`,
                              }}
                            ></div>
                          </div>
                          <div className="card-body">
                            <h6>
                              {filteredProjects[5].title.rendered}
                              <small>
                                {filteredProjects[5].category__title}
                              </small>
                            </h6>
                            <p>{filteredProjects[5].acf.client_motto}</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  )}
                  {filteredProjects[6] != undefined && (
                    <div className="row no-gutter mt_18em flex-row-reverse">
                      <div className="col-md-4 cust_col ryt_card">
                        <a
                          href={
                            "/projects/" +
                            filteredProjects[6].category__slug +
                            "/" +
                            filteredProjects[6].slug +
                            "/"
                          }
                          className="card img_card"
                          data-cursor-img="/assets/img/case-study.svg"
                        >
                          <div className="tile" style={{ maxWidth: "320px" }}>
                            <div
                              className="tileImage tile-tns"
                              style={{
                                backgroundImage: `url(${convertToWebPURL(
                                  filteredProjects[6].jetpack_featured_media_url
                                )})`,
                              }}
                            ></div>
                          </div>
                          <div className="card-body">
                            <h6>
                              {filteredProjects[6].title.rendered}
                              <small>
                                {filteredProjects[6].category__title}
                              </small>
                            </h6>
                            <p>{filteredProjects[6].acf.client_motto}</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  )}
                  {filteredProjects[7] != undefined && (
                    <div className="row no-gutter">
                      <div className="col-md-7 col-10">
                        <a
                          href={
                            "/projects/" +
                            filteredProjects[7].category__slug +
                            "/" +
                            filteredProjects[7].slug +
                            "/"
                          }
                          className="card img_card"
                          data-cursor-img="/assets/img/case-study.svg"
                        >
                          <div className="tile" style={{ maxWidth: "588px" }}>
                            <div
                              className="tileImage tile-tns"
                              style={{
                                backgroundImage: `url(${convertToWebPURL(
                                  filteredProjects[7].jetpack_featured_media_url
                                )})`,
                              }}
                            ></div>
                          </div>
                          <div className="card-body">
                            <h6>
                              {filteredProjects[7].title.rendered}
                              <small>
                                {filteredProjects[7].category__title}
                              </small>
                            </h6>
                            <p>{filteredProjects[7].acf.client_motto}</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  )}
                  {filteredProjects[8] != undefined && (
                    <div className="row no-gutter flex-row-reverse">
                      <div className="col-md-10">
                        <a
                          href={
                            "/projects/" +
                            filteredProjects[8].category__slug +
                            "/" +
                            filteredProjects[8].slug +
                            "/"
                          }
                          className="card img_card"
                          data-cursor-img="/assets/img/case-study.svg"
                        >
                          <div className="tile" style={{ maxWidth: "902px" }}>
                            <div
                              className="tileImage tile-ffs"
                              style={{
                                backgroundImage: `url(${convertToWebPURL(
                                  filteredProjects[8].jetpack_featured_media_url
                                )})`,
                              }}
                            ></div>
                          </div>
                          <div className="card-body">
                            <h6>
                              {filteredProjects[8].title.rendered}
                              <small>
                                {filteredProjects[8].category__title}
                              </small>
                            </h6>
                            <p>{filteredProjects[8].acf.client_motto}</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  )}
                </>
              </div>
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default Projects;

export const getServerSideProps = async () => {
  let data = await getAllProjects();

  return { props: { data } };
};
