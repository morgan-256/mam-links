import React from "react";
import Moment from "moment";
import { Anchor, Text, TableRow, TableCell } from "grommet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import setCategoryQuerystring from "../CategoryHelper"
import CONSTANTS from "../CONSTANTS"


export default function MamCategory(props) {

  const label = props.label.replace("Ebooks - ", "").replace("Audiobooks - ", "");
  const category = props.category;

  const formatLink = (days, category) => {
    let now = new Date();
    let past = new Date();
    past.setDate(past.getDate() - days);

    let start = Moment(past).format(CONSTANTS.DATEFORMAT);
    let end = Moment(now).format(CONSTANTS.DATEFORMAT);
    category = category.replace("c", "").replace("m", "");
    let result = CONSTANTS.LINKTEMPLATE.replace(CONSTANTS.QS_KEYS.STARTDATE, start).replace(CONSTANTS.QS_KEYS.ENDDATE, end).replace(CONSTANTS.QS_KEYS.SORTTYPE, CONSTANTS.QS_VALUES.SORT);

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
