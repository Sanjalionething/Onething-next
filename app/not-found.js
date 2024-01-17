import "../styles/pages/error.scss";

import Link from 'next/link'
export default function PageNotFound() {

  return (
    <div className="page-not-found-wrapper page-wrapper">
      <section className="page-heading page-heading-404">
         <div className="container">
            <div className="heading-wrapper">
               <figure>
                  <img loading="lazy" src="/assets/img/global/404.svg" className="error-image" alt="" />
                  <figcaption>
                     <h5>Oops! The page you're browsing for no longer exists or has been moved.</h5>
                   <Link href="/" className="bttn bttn-primary">
                   Back to Home
                    <div className="arrow-dot">
                         <img loading="lazy" src="/assets/img/global/primary-arrow.svg" className="icon icon-submit" alt="" />
                      </div>
                   </Link>
                </figcaption>
             </figure>
          </div>
       </div>
    </section>
 </div>
  )
}