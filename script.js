var dateDiffInDays = function (date1, date2) {
  let y1=new Date(date1).getFullYear();
    let m1=new Date(date1).getMonth();
    let d1=new Date(date1).getDate();
    //console.log(y1,m1,d1);
  let ms1=Date.UTC(y1, m1+1, d1);
    //console.log(ms1);
    
    let y2=new Date(date2).getFullYear();
    let m2=new Date(date2).getMonth();
    let d2=new Date(date2).getDate();
    //console.log(y2,m2,d2);
  let ms2=Date.UTC(y2, m2+1, d2);
    //console.log(ms2);
    
	let diff=ms2-ms1;
    //console.log(diff);

	let days= diff/86400000;

	return days;
	
	
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
