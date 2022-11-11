let course1 = {
    code: "ACIT 1620" , 
    name: "Web Fundamental Technologies",
}
let course2 = {
    code: "ACIT 1640" , 
    name: "Introduction to Systems Administration",
}
let course3 = {
    code: "ACIT 1630" , 
    name: "Database Systems",
}

//make an array
const courseLists = [course1,course2,course3]

let userInput = ""
do{
    userInput = prompt("Enter 4-digit number");
    if((isNaN(Number(userInput))) || (userInput.length != 4))
        {
            alert("Please enter a valid course number");
        }

}
while((isNaN(Number(userInput))) || (userInput.length != 4));

//write a loop to check my array
let courseLength = 0
for(let myCourse of courseLists){
    // myCourse.code = prompt("Enter your course code: ")
    if(myCourse.code.includes(userInput))
    {
        console.log(`Yes I am taking the course ${myCourse.code} - ${myCourse.name} `)
        break
    }
    else{
        courseLength++;
        if(courseLength === courseLists.length){
            courseLists.push({code: userInput, name:null});
            console.log("New Course Added Successfully")
            break
        }
        else{
            continue
        }
    }
}


// if(i == false){
//     console.log("I will add as new course");
//     courseLists.push({code:userInput, name: null});
// }

// console.log("Success")
console.log(courseLists)