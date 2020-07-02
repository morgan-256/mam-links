const CONSTANTS = {
    LINKTEMPLATE: "https://www.myanonamouse.net/tor/browse.php?&tor[srchIn][title]=true&tor[srchIn][author]=true&tor[srchIn][narrator]=true&tor[searchType]=all&tor[searchIn]=torrentsCATEGORY&tor[browse_lang][]=1&tor[browseFlagsHideVsShow]=0&tor[startDate]=STARTDATE&tor[endDate]=ENDDATE&tor[sortType]=SORTTYPE&tor[startNumber]=0&thumbnail=true",
    QS_KEYS: { STARTDATE: "STARTDATE", ENDDATE: "ENDDATE", SORTTYPE: "SORTTYPE" },
    QS_VALUES: { CATEGORY: "&tor[cat][]=", SORT: "snatchedDesc" },
    DATEFORMAT: "YYYY-MM-DD",
    CATEGORIES: {
        AUDIOBOOKS: { ID: "13", KEYWORD: "audiobook" }, EBOOKS: { ID: "14", KEYWORD: "ebook" },
        MUSIC: { ID: "15", CATEGORIES: ["c19", "c20", "c24", "c126", "c22", "c113", "c114", "c17", "c26", "c27", "c30", "c31"] },
        RADIO: { ID: "16", KEYWORD: "radio" }
    }
};

export default CONSTANTS;