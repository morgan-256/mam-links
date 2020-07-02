import React from "react";
import categoryData from "../mam-categories";
import { Select, Button } from "grommet";
import CONSTANTS from "../CONSTANTS"
import setCategoryQuerystring from "../CategoryHelper";

function MamBuilder() {
    const [startYear, setStartYear] = React.useState(2008);
    const [startMonth, setStartMonth] = React.useState(1);
    const [endYear, setEndYear] = React.useState(2020);
    const [endMonth, setEndMonth] = React.useState(12);
    const [selectedCategory, setSelectedCategory] = React.useState();
    // const FIRSTUPLOADDATE = "2008-12-01";
    const YEARS = Array.from(Array(2020 - 2007), (_, x) => 2020 - x);
    const MONTHS = Array.from(Array(12), (_, x) => x + 1);

    const onNavigateClick = () => {

        debugger;
        const category = selectedCategory.key.replace("c", "").replace("m", "");
        const start = `${startYear}-${startMonth}-01`;
        const end = `${endYear}-${endMonth}-01`;
        let result = CONSTANTS.LINKTEMPLATE.replace(CONSTANTS.QS_KEYS.STARTDATE, start).replace(CONSTANTS.QS_KEYS.ENDDATE, end).replace(CONSTANTS.QS_KEYS.SORTTYPE, CONSTANTS.QS_VALUES.SORT);
        result = setCategoryQuerystring(result, category);

        document.location.href = encodeURI(result);

    }

    return (
        <React.Fragment>
            <Select options={categoryData.categories} labelKey="label" valueKey="key" value={selectedCategory} onChange={({ value: nextValue }) => setSelectedCategory(nextValue)} >
            </Select>
            <div>start Year</div>
            {
                YEARS.map(x => {
                    return (
                        <Button key={x} primary size="small" margin="small" label={x} onClick={() => setStartYear(x)} />
                    )
                })
            }
            <div>Month</div>
            {
                MONTHS.map(x => {
                    return (
                        <Button key={x} primary size="small" margin="small" label={x} onClick={() => setStartMonth(x)} />
                    )
                })
            }
            <div>Start date: {startYear}-{startMonth}</div>
            <div>End Year</div>
            {
                YEARS.map(x => {
                    return (
                        <Button key={x} primary size="small" margin="small" label={x} onClick={() => setEndYear(x)} />
                    )
                })
            }
            <div>Month</div>
            {
                MONTHS.map(x => {
                    return (
                        <Button key={x} primary size="small" margin="small" label={x} onClick={() => setEndMonth(x)} />
                    )
                })
            }
            <div>End date: {endYear}-{endMonth}</div>

            <div>
                <Button onClick={onNavigateClick} label="Go"></Button>
            </div>
        </React.Fragment>
    )
}

export default MamBuilder;