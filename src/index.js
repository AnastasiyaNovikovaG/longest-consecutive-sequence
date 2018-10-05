module.exports = function longestConsecutiveLength(array) {
    if (array.length <= 1) {
        return array.length
    }
    let count = 1;
    let len = 0;
    let set = [...new Set(array.sort((a, b) => a - b))];
    set.reduce((prev, current) => {
        if (current - prev === 1) {
            ++count;
        } else {
            if (count > len) {
                len = count;
            }
            count = 1;
        }
        return current;

    });

    return len;
}
