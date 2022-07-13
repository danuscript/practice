function addWaldo(obj) {
    obj["Waldo"] = "unknown"
    return obj;
}

const siliconValley = {'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle'}
console.log(addWaldo(siliconValley))