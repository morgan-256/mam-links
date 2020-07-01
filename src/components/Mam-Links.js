import React from "react";
import categories from "../mam-categories";
import MamCategory from "./Mam-Category";
import { Box, Header, Tabs, Tab, Table, TableBody } from "grommet";

// import Heading from "rebass";

function MamLinks() {
  return (
    <React.Fragment>
      <Header background="brand" round="small" pad="medium">
        MAM Links
      </Header>
      <Box pad="medium">
        Categories with links to most popular downloads by timespan
      </Box>
      <Tabs
        pad="small"
        margin="small"
        alignControls="start"
        alignSelf="start"
        justify="start"
      >
        <Tab title="Ebooks">
          <Table>
            <TableBody>
              {categories.categories
                .filter((c) => c.label.toLowerCase().indexOf("ebook") >= 0)
                .map((c) => (
                  <MamCategory
                    key={c.key}
                    category={c.key}
                    label={c.label}
                    icon={c.faIcon}
                  ></MamCategory>
                ))}
            </TableBody>
          </Table>
        </Tab>
        <Tab title="Audiobooks">
          <Table>
            <TableBody>
              {categories.categories
                .filter((c) => c.label.toLowerCase().indexOf("audiobook") >= 0)
                .map((c) => (
                  <MamCategory
                    key={c.key}
                    category={c.key}
                    label={c.label}
                    icon={c.faIcon}
                  ></MamCategory>
                ))}
            </TableBody>
          </Table>
        </Tab>
        <Tab title="Other">
          <Table>
            <TableBody>
              {categories.categories
                .filter(
                  (c) =>
                    c.label.toLowerCase().indexOf("audiobook") < 0 &&
                    c.label.toLowerCase().indexOf("ebook") < 0
                )
                .map((c) => (
                  <MamCategory
                    key={c.key}
                    category={c.key}
                    label={c.label}
                    icon={c.faIcon}
                  ></MamCategory>
                ))}
            </TableBody>
          </Table>
        </Tab>
      </Tabs>
    </React.Fragment>
  );
}

export default MamLinks;
