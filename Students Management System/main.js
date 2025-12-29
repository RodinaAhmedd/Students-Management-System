let student_Name = prompt("Name:");
let studentsNames = ["Ahmed","Asmaa","Remas","Rodina","Ali","Omar","Mohamed","Osama"];
let grades = [40,60,20,50,90,100,75,52];

let sum =0;
let max = -100000;
let min = 100000;

for(let i =0; i<studentsNames.length;i++){
    console.log("The grade of " + studentsNames[i] + " is " + grades[i])

    sum+=grades[i];
}
console.log("Sum: " + sum);

let avg = sum / (studentsNames.length);
console.log("Average: " + avg);

for(let i =0; i<studentsNames.length;i++){
    if(grades[i] >= 50){
        console.log(studentsNames[i] + " passed");
    }
    else{
        console.log(studentsNames[i] + " failed");
    }
  if(grades[i]>max){
        max  = grades[i];
    }
   if(grades[i]<min){
        min  = grades[i];
    }
}

console.log("Highest Grade: " + max);
console.log("Lowest Grade:" + min);


let index = studentsNames.indexOf(student_Name);

if (index !== -1) {
  alert(student_Name + " " + grades[index]);
} else {
  alert(student_Name + " Not Found");
}
