import EmptyComponent from "@components/empty-component";

const themeConfig = {
  logo: (
    <span className="logo">
      Fusillo<span className="text-description"> - Design System Boilerplate</span>
    </span>
  ),
  project: {
    link: "https://github.com/kkratterf/fusillo",
  },
  useNextSeoProps() {
    return {
      titleTemplate: `Fusillo – %s`,
    };
  },
  head: (
    <>
      <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
    </>
  ),
  footer: {
    text: (
      <span>
        © {new Date().getFullYear()}{" "}
        <a href="https://www.fusillo.design" target="_blank">
          Fusillo
        </a>
      </span>
    ),
  },
  search: {
    loading: "Loading...",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
    autoCollapse: true,
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    component: EmptyComponent,
  },
  feedback: {
    content: null,
  },
  gitTimestamp: null,
};

export default themeConfig;
