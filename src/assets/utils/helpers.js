export const removeDuplicatedCategories = (a) => {
    var seen = {};
    return a.filter(function (item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
};

export const convertStrToUrl = (str) => {
    return str.toLowerCase().split(" ").join("-");
};