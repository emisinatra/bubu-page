export const pageview = (url: string) => {
  window.gtag("config", "G-F8JJLKTZKK", {
    page_path: url,
  });
};
