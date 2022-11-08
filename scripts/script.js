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

const courseLists = [course1,course2,course3]

// let userInput = "";
do{
    userInput = prompt("Enter 4-digit number")

}while(userInput.length != 4 || isNaN(Number(userInput)))

