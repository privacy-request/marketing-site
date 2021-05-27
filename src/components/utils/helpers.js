export const createKeyFromStr = (str) => str.replace(/\s+/g, "-").toLowerCase();

export const formatPages = (pages) =>
  pages.map((page) => {
    const url = page.route.text;
    const title = page.text.text;
    return { url, title };
  });
