import CONSTANTS from "./CONSTANTS"
import categoryData from "./mam-categories";

function setMetaCategory(label, staticCategories) {
    let result = "";

    if (label !== null) {
        categoryData.categories.forEach((c) => {
            if (c.key.substring(0, 1) === "c" && c.label.toLowerCase().indexOf(label) > -1)
                result += CONSTANTS.QS_VALUES.CATEGORY + c.key.replace("c", "");
        });
    } else {
        staticCategories.forEach((c) => {
            result += CONSTANTS.QS_VALUES.CATEGORY + c.replace("c", "");
        });
    }
    result += `${CONSTANTS.QS_VALUES.CATEGORY}0`;

    return result;
}

export default function setCategoryQuerystring(url, category) {
    //handles meta categories, either with keyword or static list
    let catList = "";
    switch (category) {
        case CONSTANTS.CATEGORIES.EBOOKS.ID:
            catList = setMetaCategory(CONSTANTS.CATEGORIES.EBOOKS.KEYWORD);
            break;
        case CONSTANTS.CATEGORIES.AUDIOBOOKS.ID:
            catList = setMetaCategory(CONSTANTS.CATEGORIES.AUDIOBOOKS.KEYWORD);
            break;
        case CONSTANTS.CATEGORIES.RADIO.ID:
            catList = setMetaCategory(CONSTANTS.CATEGORIES.RADIO.KEYWORD);
            break;
        case CONSTANTS.CATEGORIES.MUSIC.ID:
            //music must use specific list of category ids
            catList = setMetaCategory(null, CONSTANTS.CATEGORIES.MUSIC.CATEGORIES);
            break;
        default:
            catList = `${CONSTANTS.QS_VALUES.CATEGORY}${category}`;
            break;
    }
    url = url.replace("CATEGORY", catList);
    return url;
}
