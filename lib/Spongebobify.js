function spongebobify(a) {
    
    let output = "";
    let i = true;

    for (char in a) {
        
        if (i) {
            output += a[char].toUpperCase()
        } else {
            output += a[char].toLowerCase()
        }
            
        if (char != ' ') {
            i = !i
        }
    }

    return output;
    
};

module.exports = {
  spongebobify
};