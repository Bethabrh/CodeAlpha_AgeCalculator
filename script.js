document.getElementById("calculateBtn").addEventListener("click", calculateAge)

function calculateAge(){

const dobInput = document.getElementById("dob").value
const error = document.getElementById("error")

error.textContent = ""

if(!dobInput){
error.textContent = "Please select your date of birth"
return
}

const birthDate = new Date(dobInput)
const today = new Date()

if(birthDate > today){
error.textContent = "Birth date cannot be in the future"
return
}

let years = today.getFullYear() - birthDate.getFullYear()
let months = today.getMonth() - birthDate.getMonth()
let days = today.getDate() - birthDate.getDate()

if(days < 0){
months--
const lastMonth = new Date(
today.getFullYear(),
today.getMonth(),
0
).getDate()

days += lastMonth
}

if(months < 0){
years--
months += 12
}

document.getElementById("years").textContent = years
document.getElementById("months").textContent = months
document.getElementById("days").textContent = days

calculateExtras(birthDate)

}

function calculateExtras(birthDate){

const today = new Date()

/* Total days lived */

const diff = today - birthDate
const totalDays = Math.floor(diff / (1000*60*60*24))

document.getElementById("totalDays").textContent =
"You have lived approximately " + totalDays + " days."

/* Next birthday */

let nextBirthday = new Date(
today.getFullYear(),
birthDate.getMonth(),
birthDate.getDate()
)

if(nextBirthday < today){
nextBirthday.setFullYear(today.getFullYear()+1)
}

const daysLeft = Math.ceil(
(nextBirthday - today)/(1000*60*60*24)
)

document.getElementById("nextBirthday").textContent =
daysLeft + " days until your next birthday 🎉"

}