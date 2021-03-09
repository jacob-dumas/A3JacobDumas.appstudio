let cities = []
let i = 0
let doneWithCities = false

while(doneWithCities == false) {
    cities[i] = prompt("Enter the next city")
    i++
    doneWithCities = confirm("Are you done listing cities?")
}

let j = 0
while (j < cities.length) {
    console.log(cities[j].toLowerCase())
    j++
}