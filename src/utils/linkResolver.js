export const linkResolver = (doc) => {
  if (doc.type === "homepage" || doc.type === "testimonials") {
    return `/`;
  }

  if (doc.type === "product_page" || doc.type === "legal_page") {
    return `/${doc.uid}`;
  }

  return "/";
};

module.exports = linkResolver;
