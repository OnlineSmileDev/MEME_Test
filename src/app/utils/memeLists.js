
export const CreateOptionList = (listObj) => {
    const values = Object.values(listObj);
    let arr = [];
    for (var i = 0; i < values.length; ++i) {
        arr.push({
            label: values[i].name,
            value: values[i].value
        });
    }
    return arr;
}

export const CreateDisplayList = (refList, values) => {
    let arr = [];
    for (var i = 0; i < values.length; ++i) {
        arr.push(refList[values[i]].name);
    }
    return arr;
}
export const CreateHeightOptionList = () => {
    let arr = [];
    for (var i = 4; i < 7; ++i) {
        for (var j = 0; j < 12; ++j) {
            arr.push({
                label: `${i}' ${j}"`,
                value: `${i}'${j}"`
            });
        }
    }
    return arr;
}
