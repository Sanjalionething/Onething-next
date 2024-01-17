import "./curated-projects-small.scss";
// import whiteArrow from "../../../assets/img/global/white-arrow.png";
// import podcastBackgroundTwo from "/assets/img/podcast/podcast-bg2.webp";
// import flipkartLogo from "/assets/img/podcast/flipkart.webp";
// import podcastImg2 from "/assets/img/podcast/small-pod-2img.webp";

const CuratedProjectsSmall = ({ title }) => {
  return (
    <>
      <div className="curated-small-wrapper">
        <section className="curated-content d-md-block d-none">
          <div className="container">
            <h3 className="anim_h3 section-heading">
              <span className="brdr_tp"></span>
              <span className="fadeup_txt">{title}</span>
            </h3>
            <div className="curated-cards">
              <a href="https://www.onething.design/blogs/types-of-research-in-ux-design/">
                 <div className="card bg-sky-blue custom_cards podcast_sm_cards position-relative">
                   <div className="card-body">
                     <div className="d-flex">
                       <span className="badge trans-badge">Blogs</span>
                     </div>
                     <div className="podcast_mx-wdth">
                       <h5>Types of Research in UX Design</h5>
                       <div className="d-flex justify-content-between">
                         <a
                           className="border_none_cta"
                         >
                           <span>Read More</span>
                           <img loading="lazy"
                             src="/assets/img/global/white-arrow.png"
                             className="icon icon-share"
                             alt=""
                             layout="fill"
          objectFit="contain"
                           />
                         </a>
                         <span className="read-minutes">9 mins read</span>
                       </div>
                     </div>
                   </div>
                 </div>
              </a>
              <a href="/podcast/e-commerce-for-the-next-billion-with-bharath-ram-flipkart/">
                 <div
                   className="card bg-violet img_grayscale custom_cards podcast_sm_cards position-relative"
                   style={{ backgroundImage: `url('/assets/img/podcast/podcast-bg2.webp')` }}
                 >
                   <figure>
                     <img loading="lazy" src='/assets/img/podcast/small-pod-2img.png' className="podcast-img2" alt="" 
         />
                   </figure>
                   <div className="card-body">
                     <div className="d-flex jc-sb">
                       <span className="badge trans-badge">Podcast</span>
                       <img loading="lazy"
                         src='/assets/img/podcast/flipkart.webp'
                         className="icon icon-share"
                         alt=""
      
                       
                       />
                     </div>
                     <div className="podcast_mx-wdth fs-26">
                       <h5>
                         <span className="txt-DtC-grad">E-Commerce</span> <br />
                         for the <br />
                         Next Billion
                       </h5>
                       <div className="d-flex justify-content-between">
                         <a
                           className="border_none_cta"
                         >
                           Explore{" "}
                           <img loading="lazy"
                             src='/assets/img/global/white-arrow.png'
                             className="icon icon-share"
                             alt=""
                             layout="fill"
          objectFit="contain"
                           />
                         </a>
                       </div>
                     </div>
                   </div>
                 </div>
              </a>
               <a href="/static/media/EdTech-Whitepaper.a3c7e9c7b917c9584743.pdf"> 
                 <div className="card bg-red custom_cards podcast_sm_cards position-relative">
                   <div className="card-body">
                     <div className="d-flex">
                       <span className="badge trans-badge txt-grey">
                         Whitepaper
                       </span>
                     </div>
                     <div className="podcast_mx-wdth txt-grey">
                       <h5>Designing for Connected Mobility</h5>
                       <div className="d-flex justify-content-between">
                         <a className="border_none_cta">
                           Download
                           <img loading="lazy"
                             src='/assets/img/global/white-arrow.png'
                             className="icon icon-share"
                             alt=""
                             layout="fill"
          objectFit="contain"
                           />
                         </a>
                         <span className="read-minutes txt-grey">9 mins read</span>
                       </div>
                     </div>
                   </div>
                 </div>
               </a> 
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CuratedProjectsSmall;
