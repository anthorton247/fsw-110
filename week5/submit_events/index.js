let person = {
    name: "",
    age: 0,
    gender: "",
    location: "",
    diet: []
}

document.passanger.addEventListener("submit", function(e) {
    e.preventDefault()
    person.name = document.passanger.firstName.value + " " + document.passanger.lastName.value
    person.age = document.passanger.age.value
    person.gender = document.passanger.gender.value
    person.location = document.passanger.location.value
    for(var i = 0; i < passanger.diet.length; i++){
        if(passanger.diet[i].checked){
            person.diet.push(passanger.diet[i].value)
        }
    }
    let diet = person.diet.join(", ")
    alert("Hello " + person.name + " here is your flight info\nName: " + person.name + "\nAge: " + person.age + "\nGender: " + person.gender + "\nDestination: " + person.location + "\nDiet Restraints: " + diet)
    document.passanger.reset()
})

