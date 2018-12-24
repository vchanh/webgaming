function numHandler(numFormat, num) {
	switch(numFormat) {
	case 'scientific': 
		num = convertNumToScientific(num)
		break;
  case 'engineering': 
  	num = convertNumToEngineering(num)	
    break;
  case 'standard': 
  	num = convertNumToStandard(num)	
    break;
  }
}

function convertNumToScientific(num) {
	let n = Math.floor(Math.log10(Math.floor(num)));
  let m = '';
  m += num / Math.pow(10,n);
  return m.slice(0,5) + 'e' + n;
}

function convertNumToEngineering(num) {
  //if (num < 1000) return num.toString();
	let n = 3 * (Math.floor(Math.log10(Math.floor(num)) / 3));
  let m = ''
  m += numRound(num / Math.pow(10,n),2);
  return m + 'e' + n;
}

function convertNumToRoman(num) {
  const roman = {
    M: 1000, CM: 900,
    D: 500,  CD: 400,
    C: 100,  XC: 90,
    L: 50,   XL: 40,
    X: 10,   IX: 9,
    V: 5,    IV: 4,
    I: 1,
  }
  
  let str = '';
  let diff = num;
  for (const i of Object.keys(roman)) {
    const q = Math.floor(diff / roman[i])
    diff -= q * roman[i]
    str += i.repeat(q)
    }
    
  return str;
}

function convertNumToStandard(num) {
  const suff = [
  '',  'K',  'M',  'B',  'T',  'Qa',  'Qi',  'Sx',  'Sp',  'Oc', 
  'No', 'Dc', 'Ud', 'Dd', 'Td', 'Qad', 'Qid', 'Sxd', 'Spd', 'Od', 
  'Nd', 'V', 'Uv', 'Dv', 'Tv', 'Qav', 'Qiv', 'Sxv', 'Spv', 'Ov', 
  'Nv', 'Tt'
  ];

	let n = Math.floor(Math.log(num) / Math.log(1000));
  let m = ''
  m += numRound(num / Math.pow(1000, n),2);
  if (num < 1000) {
  	n = 1
  	m = '' + num
  }
  
  return m + suff[n-1];
}

function numRound(num, numDec) {
	numDec = Math.pow(10,numDec); 
  return Math.round(num * numDec) / numDec;
}

function idleLogout() {
	let t;
  window.onload = resetTimer;
  window.onmousemove = resetTimer;
  window.onmousedown = resetTimer;
  window.ontouchstart = resetTimer;
  window.onclick = resetTimer;
  window.onkeypress = resetTimer;
  window.addEventListener('scroll', resetTimer, true);
  
  function yourFunction() {
    //alert("Idle.")
  }
    
  function resetTimer() {
    clearTimeout(t);
    t = setTimeout(yourFunction, 10000);  // 10ms
  }
}
