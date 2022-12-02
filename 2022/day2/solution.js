(async () => {
    const res = await fetch("https://adventofcode.com/2022/day/2/input")
    const text = await res.text();
    const list = text.split('\n');
    const me = {
        'X': 1,
        'Y': 2,
        'Z': 3
    };
    const meT = {
        'X': 'A',
        'Y': 'B',
        'Z': 'C'
    };
    const m = list.reduce((res, pair) => {
        if (pair) {
            const [a, b] = pair.split(' ');
            const p = a + meT[b];
            if (a === meT[b]) {
                res += 3 + me[b];
            } else if (p === 'AB' || p === 'BC' || p === 'CA') {
                res += 6 + me[b];
            } else {
                res += me[b];
            }
        }

        return res;
    }, 0);
    console.log(m);
})();
