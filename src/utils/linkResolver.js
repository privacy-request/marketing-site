exports.linkResolver = (doc) => {
  if (doc.type === "homepage" || doc.type === "testimonials") {
    return `/`;
  }

  if (
    doc.type === "product_page" ||
    doc.type === "legal_page" ||
    doc.type === "opt_in_page"
  ) {
    return `/${doc.uid}`;
  }
  if (doc.type === "blog_post") {
    return `/blog/${doc.uid}`;
  }
  if (doc.type === "book-a-demo-page") {
    return `/book-a-demo`;
  }

  if (doc.type === "about_page") {
    return `/about`;
  }

  return "/";
};
