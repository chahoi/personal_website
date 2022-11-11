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
    userInput = prompt("Enter 4-digit number")
    if((userInput.length !== 4) || (isNaN(Number(userInput)))):
        {
            alert("Please enter a valid course number")
        }

}

//write a loop to check my array
for(let myCourse of courseLists){
    // myCourse.code = prompt("Enter your course code: ")
    if(myCourse.code.includes(userInput))
    {
        console.log(`Yes I am taking the course ${myCourse.code} - ${myCourse.name} `)
        let i = true
    }else{
        i == false
    }
}
if(i == false){
    console.log("I will add as new course");
    courseLists.push({code:userInput, name: null});
}

console.log("Success")
console.log(courseLists)