const linkResolver = (doc) => {
  if (doc.type === "homepage" || doc.type === "testimonials") {
    return `/`;
  }

  if (doc.type === "product_page" || doc.type === "legal_page") {
    return `/${doc.uid}`;
  }
  if (doc.type === "blog_post") {
    return `/blog/${doc.uid}`;
  }
  if (doc.type === "calendar_page") {
    return `/apply`;
  }

  if (doc.type === "about_page") {
    return `/about`;
  }

  return "/";
};

module.exports = linkResolver;
