(async () => {
	const res = await fetch("https://adventofcode.com/2022/day/1/input")
	const text = await res.text();
	const list = text.split('\n\n');
	const sList = list.map(e => eval(e.split('\n').filter(e => e).join('+')));
	const s1 = Math.max(...sList);
	sList.splice(sList.indexOf(s1), 1);
	const s2 = Math.max(...sList);
	sList.splice(sList.indexOf(s2), 1);
	const s3 = Math.max(...sList);
	console.log(s1 + s2 + s3);
})(); 
