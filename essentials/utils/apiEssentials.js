export const contactURL =
  "https://dashboard.onething.design/wp-json/contact-form-7/v1/contact-forms/3167/feedback";

export const fetchProjectUrl =
  "https://dashboard.onething.design/wp-json/wp/v2/posts?categories=430,1140&per_page=100&orderBy=date&status=publish&_embed=1";

export const fetchRelatedProjectsUrl =
  "https://dashboard.onething.design" +
  "/wp-json/wp/v2" +
  "/posts?categories=430,1140&per_page=3&status=publish&orderBy=date&_embed=1&acf_format=standard";

export const fetchSingleProjectUrl = (projectSlug) => {
  return (
    "https://dashboard.onething.design" +
    "/wp-json/wp/v2" +
    "/posts" +
    "?slug=" +
    projectSlug +
    "&_embed=1&acf_format=standard"
  );
};
export const fetchProjectBycatUrl = (catId) => {
  return `https://dashboard.onething.design/wp-json/wp/v2/posts?categories=${catId}&per_page=100&status=publish&_embed=1`;
};

export const jobUrl =
  "https://dashboard.onething.design/wp-json/wp/v2/jobs?status=publish";

export const singleJobUrl = (jobSlug) => {
  return `https://dashboard.onething.design/wp-json/wp/v2/jobs?slug=${jobSlug}`;
};
export const sendJobUrl =
  "https://dashboard.onething.design/wp-json/contact-form-7/v1/contact-forms/3166/feedback";
