const merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const out = [intervals.shift()];
    intervals.forEach((range) => {
        const next = out[out.length - 1];
        if ((range[0] >= next[0] && range[0] <= next[1])
            || (range[1] >= next[0] && range[1] <= next[1])) {
            next[0] = Math.min(next[0], range[0]);
            next[1] = Math.max(next[1], range[1]);
        } else {
            out.push(range);
        }
    });
    return out;
};
