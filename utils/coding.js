const coding = (input) => {
    
    input = input.toLowerCase();
    let result = "";
    for (let i = 0; i < input.length; i++)
    {
        let item = input.charAt(i);
        let haveRepeats = (input.split(item,3).length - 1) > 1;
        result += haveRepeats ? ")" : "(";
    }
    return result;
}

module.exports = {coding};