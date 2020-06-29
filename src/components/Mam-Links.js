import React from "react";
import categories from "../mam-categories";
import MamCategory from "./Mam-Category";
// import { Header } from "grommet";

// import Heading from "rebass";

function MamLinks() {
  return (
    <div>
      <h1>Categories with links to most popular downloads by timespan</h1>
      {categories.categories
        // .filter((c) => c.label.toLowerCase().indexOf("ebook") >= 0)
        .map((c) => (
          <MamCategory
            key={c.key}
            category={c.key}
            label={c.label}
          ></MamCategory>
        ))}
    </div>
  );
}

export default MamLinks;
