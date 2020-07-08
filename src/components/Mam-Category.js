import React from "react";
import Moment from "moment";
import { Anchor, Text, TableRow, TableCell } from "grommet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setCategoryQuerystring } from "../CategoryHelper"
import Constants from "../Constants"


export default function MamCategory(props) {

  const label = props.label.replace("Ebooks - ", "").replace("Audiobooks - ", "");
  const category = props.category;

  const formatLink = (days, category) => {
    let now = new Date();
    let past = new Date();
    past.setDate(past.getDate() - days);

    let start = Moment(past).format(Constants.DateFormat);
    let end = Moment(now).format(Constants.DateFormat);
    category = category.replace("c", "").replace("m", "");
    let result = Constants.LinkTemplate.replace(Constants.QS_Keys.STARTDATE, start).replace(Constants.QS_Keys.ENDDATE, end).replace(Constants.QS_Keys.SORTTYPE, Constants.QS_Values.SORT);

    result = setCategoryQuerystring(result, category);
    return encodeURI(result);
  };

  return (
    <TableRow>
      <TableCell scope="row">
        <Text>
          <FontAwesomeIcon icon={props.icon} /> {label}
        </Text>
      </TableCell>
      <TableCell>
        <Anchor target="_new" href={formatLink(7, category)}>
          week
        </Anchor>
      </TableCell>
      <TableCell>
        <Anchor target="_new" href={formatLink(30, category)}>
          month
        </Anchor>
      </TableCell>
      <TableCell>
        <Anchor target="_new" href={formatLink(90, category)}>
          3 months
        </Anchor>
      </TableCell>
      <TableCell>
        <Anchor target="_new" href={formatLink(180, category)}>
          6 months
        </Anchor>
      </TableCell>
      <TableCell>
        <Anchor target="_new" href={formatLink(365, category)}>
          1 year
        </Anchor>
      </TableCell>
      <TableCell>
        <Anchor target="_new" href={formatLink(9999, category)}>
          all time
        </Anchor>
      </TableCell>
    </TableRow>
  );
}
