import "./instagram-feed.scss";

import React from 'react'
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

function Instagramfeed() {
    return (
        <>
        <div className="instagram-feed-wrapper">
            <section className="instagram-feed-wrapper">
            <div className="div-wrap">
            <InstagramFeed
        token="IGQWRQWEx2TGVIS05PM2ZAlVnAyWVN4bThKTy1YN0I1OTNGZAFZA1MlhHQlhvZAjhZAVnNpUWF6RFJYSDRpU25zUVVmeFM3SnR3dV94QVpjY2xxNjRFTmJsMFZAuYTZAHN0VDa3pvWkNoYkRMWFBJWlVmMDc0T1NsNFRjc2sZD"
        counter="5"
      />
            </div>
            </section>
        </div>
        </>
    );
}

export default Instagramfeed;