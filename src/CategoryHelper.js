import Constants from "./Constants"
import categoryData from "./mam-categories";

function setMetaCategory(label, staticCategories) {
    let result = "";

    if (label !== null) {
        categoryData.categories.forEach((c) => {
            if (c.key.substring(0, 1) === "c" && c.label.toLowerCase().indexOf(label) > -1)
                result += Constants.QS_Values.CATEGORY + c.key.replace("c", "");
        });
    } else {
        staticCategories.forEach((c) => {
            result += Constants.QS_Values.CATEGORY + c.replace("c", "");
        });
    }
    result += `${Constants.QS_Values.CATEGORY}0`;

    return result;
}

export const cleanCategoryLabel = (category) => {
    return category.replace("Ebooks - ", "").replace("Audiobooks - ", "");
}

export const setCategoryQuerystring = (url, category) => {
    //handles meta categories, either with keyword or static list
    let catList = "";
    switch (category) {
        case Constants.Categories.Ebooks.ID:
            catList = setMetaCategory(Constants.Categories.Ebooks.KEYWORD);
            break;
        case Constants.Categories.AudioBooks.ID:
            catList = setMetaCategory(Constants.Categories.AudioBooks.KEYWORD);
            break;
        case Constants.Categories.Radio.ID:
            catList = setMetaCategory(Constants.Categories.Radio.KEYWORD);
            break;
        case Constants.Categories.Music.ID:
            //music must use specific list of category ids
            catList = setMetaCategory(null, Constants.Categories.Music.CATEGORIES);
            break;
        default:
            catList = `${Constants.QS_Values.CATEGORY}${category}`;
            break;
    }
    url = url.replace("CATEGORY", catList);
    return url;
}
