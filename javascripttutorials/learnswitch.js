const color = "red"

switch(color){
    case "red":
        console.log("Color is red")
    case "blue":
        console.log("Color is blue")
    case "green":
        console.log("Color is green")
    default:
        console.log("Color is nor red, blue or green")
}

// Switch Scores
let score = 0

switch(score) {
    case 90:
        console.log('Excellence')
        break;
    case 80:
        console.log('Very Good')
        break;
    case 50:
        console.log('Average')
        break;
    case 30:
        console.log('Failed')
        break;

    default:
        console.log('You did not write the test')
}

// Switch Grades 

const grade = 10

switch (true) {
    case grade > 100:
        console.log("Score not recognized")
        break;
    case grade >= 70:
        console.log("Distinction")
        break;
    case grade >= 60:
        console.log("Very Good")
        break;
    case grade >= 50:
        console.log("Credit")
        break;
    case grade >= 40:
        console.log("Pass")
        break;
    
    default:
        console.log("Failed")
}
