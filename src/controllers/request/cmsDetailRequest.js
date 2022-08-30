import fetchRequest from "../lib/fetchRequest";

const cmsDetailRequest = {};

cmsDetailRequest.getCmsDetail = async (data) => {
  const request = JSON.stringify({
    query: `{
        cmsPage(identifier: "${data.relative_url}") {
          identifier
          url_key
          title
          content
          content_heading
          page_layout
          meta_title
          meta_description
          meta_keywords
        }
      }
    `,
  });
  const res = await fetchRequest.executePostFetch(request);
  let cmsData = false;
  if (res?.data?.cmsPage?.identifier?.length > 0) {
    cmsData = res.data.cmsPage;
  }
  return cmsData;
};

export default cmsDetailRequest;
