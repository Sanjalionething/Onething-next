import "../../../styles/pages/case-study.scss";

import { useState, useEffect } from "react";
import { convertToWebPURL } from "../../../essentials/utils/global_fun";
import { fetchSingleProject } from "@/pages/api/Projects";
import RelatedCaseStudies from "../../../components/partials/related-casestudies/related-case-studies";
import PageLoader from "../../../components/partials/loaders/page-loader";
import { addPageMetas } from "../../../essentials/utils/global_fun";
import { Helmet } from "react-helmet";
import { useRouter } from "next/router";

const CaseStudy = ({ data }) => {
  const [awardSlider, setAwardSlider] = useState();
  const [loading, setLoading] = useState(true);

  //   const { project, relatedProjects, loading, loaded } = projectState;
  const [project, setProject] = useState([]);
  const [relatedProjects, setRelatedProjects] = useState([]);

  const sliderNext = () => {
    awardSlider.slickNext();
  };

  const sliderPrev = () => {
    awardSlider.slickPrev();
  };

  useEffect(() => {
    document.body.classList.add("case-study-single-page");
    // fetchProject(caseStudy);
    // fetchBlogs();
  }, []);

  useEffect(() => {
    if (project != null) {
      addPageMetas(
        project?.yoast_head_json?.title,
        project?.yoast_head_json?.description
      );
    }
  }, [project]);
  useEffect(() => {
    if (data) {
      setLoading(false);
      setProject(data.project);
      setRelatedProjects(data.relatedProjects);
    }
  }, [data]);

  // New Project 2022 Tag Id = 1140

  //   let location = useLocation();
  const router = useRouter();

  return (
    <>
      <Helmet>
        <link
          rel="preload dns-prefetch canonical"
          href={`https://www.onething.design${router.pathname}`}
        ></link>
      </Helmet>
      {project == null && <PageLoader />}
      {project != null && project?.categories?.includes(1140) && (
        <div className="case-study-page-wrapper page-wrapper">
          {
            <>
              <section className="case-study-hero blur-overlay">
                <div className="div-wrap">
                  <div className="container">
                    <div className="left_container">
                      <div className="case-study-title">
                        <span className="fs-18 gradient-text">
                          {project.title.rendered}
                        </span>
                      </div>
                      <div className="main-title right_container">
                        <h3>{project?.acf.project_intro_line}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="right_container banner-wrap">
                    <figure>
                      <img
                        loading="lazy"
                        src={convertToWebPURL(project.acf.poster.url)}
                        className="img-fluid desktop-banner"
                        alt={project.acf.project_intro_line}
                      />
                      <img
                        loading="lazy"
                        src={convertToWebPURL(project.acf.mobile_banner.url)}
                        className="img-fluid mobile-banner"
                        alt={project.acf.project_intro_line}
                      />
                    </figure>
                  </div>
                </div>
              </section>

              <div
                id="html-content"
                className="content-div blur-overlay"
                dangerouslySetInnerHTML={{
                  __html: project.content.rendered,
                }}
              ></div>
            </>
          }
          {relatedProjects.length > 0 && (
            <RelatedCaseStudies relatedProjects={relatedProjects} />
          )}
        </div>
      )}

      {project != null && !project?.categories?.includes(1140) && (
        <div className="old-project--style blur-overlay">
          <div className="case-studies-wordpress-dashboard">
            <figure className="cs-wd-banner">
              <img
                loading="lazy"
                src={convertToWebPURL(project.jetpack_featured_media_url)}
                className="img-fluid"
                alt="case-study-banner"
              />
            </figure>
            <div className="container">
              <h1 className="cs-wd-title">{project?.title?.rendered}</h1>
            </div>
            <div
              className="content-div container"
              dangerouslySetInnerHTML={{ __html: project?.content?.rendered }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
};

export default CaseStudy;

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  let data = await fetchSingleProject(slug);
  return { props: { data } };
};
