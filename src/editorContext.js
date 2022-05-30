import React from "react";

const defaultContext = {
  markdownText: "# Hello and welcome",
  setMarkdownText: () => {}
};

export default React.createContext(defaultContext);