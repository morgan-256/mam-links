import React from "react";
import moment from "moment";
import categoryData from "../mam-categories";
import { Box, Heading, Select, Anchor, Button } from "grommet";
import CONSTANTS from "../CONSTANTS"
import setCategoryQuerystring from "../CategoryHelper";

function MamBuilder() {
    const currentYear = moment().year();
    const [startYear, setStartYear] = React.useState(CONSTANTS.MAMSTARTYEAR);
    const [startMonth, setStartMonth] = React.useState(1);
    const [endYear, setEndYear] = React.useState(currentYear);
    const [endMonth, setEndMonth] = React.useState(12);
    const [options, setOptions] = React.useState(categoryData.categories);
    const [selectedCategory, setSelectedCategory] = React.useState(categoryData.categories[0]);
    const yearsList = Array.from(Array(currentYear - 2007), (_, x) => CONSTANTS.MAMSTARTYEAR + x);
    const monthsList = Array.from(Array(12), (_, x) => x + 1);

    const onStartYearChanged = (x) => setStartYear(x);

    const onNavigateClick = () => {
        const category = selectedCategory.key.replace("c", "").replace("m", "");
        const start = moment([startYear, startMonth - 1, 1]).format(CONSTANTS.DATEFORMAT);
        const end = moment([endYear, endMonth - 1, 1]).endOf('month').format(CONSTANTS.DATEFORMAT);
        let result = CONSTANTS.LINKTEMPLATE.replace(CONSTANTS.QS_KEYS.STARTDATE, start).replace(CONSTANTS.QS_KEYS.ENDDATE, end).replace(CONSTANTS.QS_KEYS.SORTTYPE, CONSTANTS.QS_VALUES.SORT);
        result = setCategoryQuerystring(result, category);
        window.open(encodeURI(result));
    }

    return (
        <React.Fragment>
            <Heading level="4">Category</Heading>
            <Select pad="small" labelKey="label"
                options={options}
                valueKey="key"
                value={selectedCategory}
                onChange={({ value: nextValue }) => setSelectedCategory(nextValue)}
                onSearch={text => {
                    // The line below escapes regular expression special characters:
                    // [ \ ^ $ . | ? * + ( )
                    const escapedText = text.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");

                    // Create the regular expression with modified value which
                    // handles escaping special characters. Without escaping special
                    // characters, errors will appear in the console
                    const exp = new RegExp(escapedText, "i");
                    setOptions(categoryData.categories.filter(o => exp.test(o.label)));
                }}>
            </Select>
            <Heading level="4">Start Year &amp; Month</Heading>
            {
                yearsList.map(x => {
                    return (
                        <Anchor color={x === startYear ? "text-strong" : "brand"} key={x} primary size="small" margin="small" label={x} onClick={() => onStartYearChanged(x)} />
                    )
                })
            }
            <div></div>
            {
                monthsList.map(x => {
                    return (
                        <Anchor color={x === startMonth ? "text-strong" : "brand"} key={x} primary size="small" margin="small" label={moment('2020-' + x + '-1').format('MMM')} onClick={() => setStartMonth(x)} />
                    )
                })
            }
            <Heading level="4">End Year &amp; Month</Heading>
            {
                yearsList.map(x => {
                    return (
                        <Anchor color={x === endYear ? "text-strong" : "brand"} key={x} primary size="small" margin="small" label={x} onClick={() => setEndYear(x)} />
                    )
                })
            }
            <div></div>
            {
                monthsList.map(x => {
                    return (
                        <Anchor color={x === endMonth ? "text-strong" : "brand"} key={x} primary size="small" margin="small" label={moment('2020-' + x + '-1').format('MMM')} onClick={() => setEndMonth(x)} />
                    )
                })
            }
            <Box pad="medium">
                Chosen Range: {moment([startYear, startMonth - 1, 1]).format(CONSTANTS.DATEFORMAT)} to  {moment([endYear, endMonth - 1, 1]).endOf('month').format(CONSTANTS.DATEFORMAT)}
                <Button margin="medium" onClick={onNavigateClick} label="Go" disabled={moment([startYear, startMonth - 1, 1]).isAfter(moment([endYear, endMonth - 1, 1]).endOf('month').format(CONSTANTS.DATEFORMAT))} />
            </Box>
        </React.Fragment >
    )
}

export default MamBuilder;