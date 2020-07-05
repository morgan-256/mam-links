const Constants = {
    MAMStartYear: 2008,
    LinkTemplate: "https://www.myanonamouse.net/tor/browse.php?&tor[srchIn][title]=true&tor[srchIn][author]=true&tor[srchIn][narrator]=true&tor[searchType]=all&tor[searchIn]=torrentsCATEGORY&tor[browse_lang][]=1&tor[browseFlagsHideVsShow]=0&tor[startDate]=STARTDATE&tor[endDate]=ENDDATE&tor[sortType]=SORTTYPE&tor[startNumber]=0&thumbnail=true",
    QS_Keys: { STARTDATE: "STARTDATE", ENDDATE: "ENDDATE", SORTTYPE: "SORTTYPE" },
    QS_Values: { CATEGORY: "&tor[cat][]=", SORT: "snatchedDesc" },
    DateFormat: "YYYY-MM-DD",
    Categories: {
        AudioBooks: { ID: "13", KEYWORD: "audiobook" }, Ebooks: { ID: "14", KEYWORD: "ebook" },
        Music: { ID: "15", CATEGORIES: ["c19", "c20", "c24", "c126", "c22", "c113", "c114", "c17", "c26", "c27", "c30", "c31"] },
        Radio: { ID: "16", KEYWORD: "radio" }
    }
};

export default Constants;
