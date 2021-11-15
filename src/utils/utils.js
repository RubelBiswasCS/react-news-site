
const shortenStr = (str, n) => {
    var cut = str.indexOf(' ', n);
    if (cut === -1){
        return str;
        }
    return str.substring(0, cut)
}

export default shortenStr;