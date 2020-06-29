import React from "react";
import Moment from "moment";
import { Box } from "grommet";
import "../App.css";

/*
ORIGINAL
https://www.myanonamouse.net/tor/js/loadSearch2.php?&tor[srchIn][title]=true&tor[srchIn][author]=true&tor[srchIn][narrator]=true&tor[searchType]=all&tor[searchIn]=torrents&tor[cat][]=107&tor[cat][]=0&tor[browse_lang][]=1&tor[browseFlagsHideVsShow]=0&tor[startDate]=2020-06-01&tor[endDate]=2020-06-29&&tor[sortType]=default&tor[startNumber]=0&thumbnail=true

TEST
https://www.myanonamouse.net/tor/browse.php?&tor[srchIn][title]=true&tor[srchIn][author]=true&tor[srchIn][narrator]=true&tor[searchType]=all&tor[searchIn]=torrents&tor[cat][]=82&tor[browse_lang][]=1&tor[browseFlagsHideVsShow]=0&tor[startDate]=2020-06-29&tor[endDate]=2020-06-22&&tor[sortType]=snatchedDesc&tor[startNumber]=0&thumbnail=true
https://www.myanonamouse.net/tor/browse.php?&tor%5BsrchIn%5D%5Btitle%5D=true&tor%5BsrchIn%5D%5Bauthor%5D=true&tor%5BsrchIn%5D%5Bnarrator%5D=true&tor%5BsearchType%5D=all&tor%5BsearchIn%5D=torrents&tor%5Bcat%5D%5B%5D=71&tor%5Bcat%5D%5B%5D=0&tor%5Bbrowse_lang%5D%5B%5D=1&tor%5BbrowseFlagsHideVsShow%5D=0&tor%5BstartDate%5D=2020-06-29&tor%5BendDate%5D=2020-06-22&&tor%5BsortType%5D=snatchedDesc&tor%5BstartNumber%5D=0&thumbnail=true
https://www.myanonamouse.net/tor/browse.php?&tor%5BsrchIn%5D%5Btitle%5D=true&tor%5BsrchIn%5D%5Bauthor%5D=true&tor%5BsrchIn%5D%5Bnarrator%5D=true&tor%5BsearchType%5D=all&tor%5BsearchIn%5D=torrents&tor%5Bcat%5D%5B%5D=71&tor%5Bcat%5D%5B%5D=0&tor%5Bbrowse_lang%5D%5B%5D=1&tor%5BbrowseFlagsHideVsShow%5D=0&tor%5BstartDate%5D=2020-06-01&tor%5BendDate%5D=2020-06-29&&tor%5BsortType%5D=default&tor%5BstartNumber%5D=0&thumbnail=true
*/

export default function MamCategory(props) {
  let category = props.category;
  let linkTemplate =
    "https://www.myanonamouse.net/tor/browse.php?&tor[srchIn][title]=true&tor[srchIn][author]=true&tor[srchIn][narrator]=true&tor[searchType]=all&tor[searchIn]=torrents&tor[cat][]=CATEGORY&tor[browse_lang][]=1&tor[browseFlagsHideVsShow]=0&tor[startDate]=STARTDATE&tor[endDate]=ENDDATE&&tor[sortType]=SORTTYPE&tor[startNumber]=0&thumbnail=true";

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

  let formatLink = function (start, end, category) {
    start = Moment(start).format("YYYY-MM-DD");
    end = Moment(end).format("YYYY-MM-DD");
    category = category.replace("c", "").replace("m", "");
    let result = linkTemplate
      .replace("STARTDATE", start)
      .replace("ENDDATE", end)
      .replace("CATEGORY", category)
      .replace("SORTTYPE", sort);

    return encodeURI(result);
  };

  return (
    <div className="mam-link">
      <span className="category">{props.label} &nbsp;</span>
      <a href={formatLink(thisWeek, now, category)}>week</a>
      <a href={formatLink(thisMonth, now, category)}>month</a>
      <a href={formatLink(threeMonths, now, category)}>3 months</a>
      <a href={formatLink(sixMonths, now, category)}>6 months</a>
      <a href={formatLink(oneYear, now, category)}>1 year</a>
      <a href={formatLink(allTime, now, category)}>all time</a>
    </div>
  );
}
