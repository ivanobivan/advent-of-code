(async () => {
    const res = await fetch("https://adventofcode.com/2022/day/2/input")
    const text = await res.text();
    const list = text.split('\n');
    const me = {
        0: {'A': 3, 'B': 1, 'C': 2},
        3: {'A': 1, 'B': 2, 'C': 3},
        6: {'A': 2, 'B': 3, 'C': 1}
    };
    const meY = {
    	'X': 0,
        'Y': 3,
        'Z': 6	
    }
    const m = list.reduce((res, pair) => {
        if (pair) {
            const [a, b] = pair.split(' ');
            res += meY[b] + me[meY[b]][a];
        }
        return res;
    }, 0);
    console.log(m);
})();
