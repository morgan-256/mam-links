import React from "react";
import MamCategory from "./Mam-Category";
import { Box, Header, Heading, Tabs, Tab, Table, TableBody } from "grommet";
import categoryData from "../mam-categories";
import MamBuilder from "./Mam-Builder";

function MamLinks() {

  return (
    <React.Fragment>
      <Header background="brand" round="small" pad="small">
        <Heading level="1" size="1"  >
          MAM Links
      </Heading>
      </Header>
      <Box pad="medium" align="center">
        Categories with links to most popular downloads by timespan
      </Box>
      <Box pad="medium" align="center">
        <Tabs pad="small" margin="small" alignControls="start" alignSelf="start" justify="start" >


          <Tab title="Ebooks" >
            <Table>
              <TableBody>
                {categoryData.categories
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
                {categoryData.categories
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
                {categoryData.categories
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
          <Tab title="Builder (Beta)">
            <MamBuilder></MamBuilder>
          </Tab>
        </Tabs>
      </Box>
    </React.Fragment >
  );
}

export default MamLinks;
