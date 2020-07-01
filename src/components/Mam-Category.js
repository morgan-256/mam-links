import React from "react";
import Moment from "moment";
import { Anchor, Text, TableRow, TableCell } from "grommet";
import categories from "../mam-categories";

/*
ORIGINAL
https://www.myanonamouse.net/tor/browse.php?&tor[srchIn][title]=true&tor[srchIn][author]=true&tor[srchIn][narrator]=true&tor[searchType]=all&tor[searchIn]=torrents&tor[cat][]=60&tor[cat][]=71&tor[cat][]=72&tor[cat][]=90&tor[cat][]=61&tor[cat][]=73&tor[cat][]=101&tor[cat][]=62&tor[cat][]=63&tor[cat][]=107&tor[cat][]=64&tor[cat][]=74&tor[cat][]=102&tor[cat][]=76&tor[cat][]=77&tor[cat][]=65&tor[cat][]=103&tor[cat][]=115&tor[cat][]=91&tor[cat][]=66&tor[cat][]=78&tor[cat][]=67&tor[cat][]=79&tor[cat][]=80&tor[cat][]=92&tor[cat][]=118&tor[cat][]=94&tor[cat][]=120&tor[cat][]=95&tor[cat][]=81&tor[cat][]=82&tor[cat][]=68&tor[cat][]=69&tor[cat][]=75&tor[cat][]=96&tor[cat][]=104&tor[cat][]=109&tor[cat][]=70&tor[cat][]=112&tor[cat][]=0&tor[browseFlagsHideVsShow]=0&tor[startDate]=2020-06-24&tor[endDate]=2020-07-01&&tor[sortType]=snatchedDesc&tor[startNumber]=0&thumbnail=true

TEST
*/

export default function MamCategory(props) {
  let category = props.category;
  let linkTemplate =
    "https://www.myanonamouse.net/tor/browse.php?&tor[srchIn][title]=true&tor[srchIn][author]=true&tor[srchIn][narrator]=true&tor[searchType]=all&tor[searchIn]=torrentsCATEGORY&tor[browse_lang][]=1&tor[browseFlagsHideVsShow]=0&tor[startDate]=STARTDATE&tor[endDate]=ENDDATE&tor[sortType]=SORTTYPE&tor[startNumber]=0&thumbnail=true";

  let sort = "snatchedDesc";
  let now = new Date();
  let thisWeek = new Date();
  thisWeek.setDate(thisWeek.getDate() - 7);
  let thisMonth = new Date();
  thisMonth.setDate(thisMonth.getDate() - 30);
  let threeMonths = new Date();
  threeMonths.setDate(threeMonths.getDate() - 90);
  let sixMonths = new Date();
  sixMonths.setDate(sixMonths.getDate() - 180);
  let oneYear = new Date();
  oneYear.setDate(oneYear.getDate() - 365);
  let allTime = new Date(1990, 1);

  let formatLink = (start, end, category) => {
    start = Moment(start).format("YYYY-MM-DD");
    end = Moment(end).format("YYYY-MM-DD");
    category = category.replace("c", "").replace("m", "");
    let result = linkTemplate
      .replace("STARTDATE", start)
      .replace("ENDDATE", end)
      .replace("SORTTYPE", sort);

    result = setCategoryQuerystring(result, category);
    return encodeURI(result);
  };

  let setCategoryQuerystring = (url, category) => {
    let catList = "";
    if (category === "14") catList = setMetaCategory("ebook");
    if (category === "13") catList = setMetaCategory("audiobook");

    url = url.replace("CATEGORY", catList);
    console.log("url " + url);
    return url;
  };

  let setMetaCategory = (label) => {
    let result = "";
    categories.categories.forEach((c) => {
      if (
        c.key.substring(0, 1) === "c" &&
        c.label.toLowerCase().indexOf(label) > -1
      )
        result += "&tor[cat][]=" + c.key.replace("c", "");
    });
    result += "&tor[cat][]=0";
    return result;
  };

  return (
    <TableRow>
      <TableCell scope="row">
        <Text>{props.label}</Text>
      </TableCell>
      <TableCell>
        <Anchor target="_new" href={formatLink(thisWeek, now, category)}>
          week
        </Anchor>
      </TableCell>
      <TableCell>
        <Anchor target="_new" href={formatLink(thisMonth, now, category)}>
          month
        </Anchor>
      </TableCell>
      <TableCell>
        <Anchor target="_new" href={formatLink(threeMonths, now, category)}>
          3 months
        </Anchor>
      </TableCell>
      <TableCell>
        <Anchor target="_new" href={formatLink(sixMonths, now, category)}>
          6 months
        </Anchor>
      </TableCell>
      <TableCell>
        <Anchor target="_new" href={formatLink(oneYear, now, category)}>
          1 year
        </Anchor>
      </TableCell>
      <TableCell>
        <Anchor target="_new" href={formatLink(allTime, now, category)}>
          all time
        </Anchor>
      </TableCell>
    </TableRow>
  );
}
