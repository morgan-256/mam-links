import React from "react";
import moment from "moment";
import categoryData from "../mam-categories";
import { Box, Heading, Select, Anchor, Button } from "grommet";
import CONSTANTS from "../CONSTANTS"
import setCategoryQuerystring from "../CategoryHelper";

function MamBuilder() {
    const [startYear, setStartYear] = React.useState(2008);
    const [startMonth, setStartMonth] = React.useState(1);
    const [endYear, setEndYear] = React.useState(2020);
    const [endMonth, setEndMonth] = React.useState(12);
    const [selectedCategory, setSelectedCategory] = React.useState();
    // const FIRSTUPLOADDATE = "2008-12-01";
    const YEARS = Array.from(Array(2020 - 2007), (_, x) => 2008 + x);
    const MONTHS = Array.from(Array(12), (_, x) => x + 1);

    const onStartYearChanged = (x) => {
        setStartYear(x);
    }

    const onNavigateClick = () => {

        const category = selectedCategory.key.replace("c", "").replace("m", "");
        // const start = startYear + startMonth.padStart(1, 0) + "-01";
        const start = moment([startYear, startMonth - 1, 1]).format(CONSTANTS.DATEFORMAT);
        const end = moment([endYear, endMonth - 1, 1]).format(CONSTANTS.DATEFORMAT);

        // const end = `${endYear}-${endMonth}-01`;
        let result = CONSTANTS.LINKTEMPLATE.replace(CONSTANTS.QS_KEYS.STARTDATE, start).replace(CONSTANTS.QS_KEYS.ENDDATE, end).replace(CONSTANTS.QS_KEYS.SORTTYPE, CONSTANTS.QS_VALUES.SORT);
        result = setCategoryQuerystring(result, category);

        document.location.href = encodeURI(result);

    }

    return (
        <React.Fragment>
            <Heading level="4">Category</Heading>
            <Select pad="small" options={categoryData.categories} labelKey="label" valueKey="key" value={selectedCategory} onChange={({ value: nextValue }) => setSelectedCategory(nextValue)} >
            </Select>
            <Heading level="4">Start Year & Month</Heading>
            {
                YEARS.map(x => {
                    return (
                        <Anchor color={x === startYear ? "text-strong" : "brand"} key={x} primary size="small" margin="small" label={x} onClick={() => onStartYearChanged(x)} />
                    )
                })
            }
            <div></div>
            {
                MONTHS.map(x => {
                    return (
                        <Anchor color={x === startMonth ? "text-strong" : "brand"} key={x} primary size="small" margin="small" label={moment('2020-' + x + '-1').format('MMM')} onClick={() => setStartMonth(x)} />
                    )
                })
            }
            <Heading level="4">End Year & Month</Heading>
            {
                YEARS.map(x => {
                    return (
                        <Anchor color={x === endYear ? "text-strong" : "brand"} key={x} primary size="small" margin="small" label={x} onClick={() => setEndYear(x)} />
                    )
                })
            }
            <div></div>
            {
                MONTHS.map(x => {
                    return (
                        <Anchor color={x === endMonth ? "text-strong" : "brand"} key={x} primary size="small" margin="small" label={moment('2020-' + x + '-1').format('MMM')} onClick={() => setEndMonth(x)} />
                    )
                })
            }
            <Box pad="medium">
                Chosen Range: {startYear}-{startMonth} to  {endYear}-{endMonth}
                <Button margin="medium" onClick={onNavigateClick} label="Go" />
            </Box>
        </React.Fragment >
    )
}

export default MamBuilder;