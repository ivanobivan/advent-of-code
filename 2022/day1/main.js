(async () => {
	const res = await fetch("https://adventofcode.com/2022/day/1/input")
	const text = await res.text();
	const list = text.split('\n\n');
	return Math.max(...list.map(e => eval(e.split('\n').filter(e => e).join('+'))));
})(); 
