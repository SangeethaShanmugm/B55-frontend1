const animals = {
    animalName: "🐯",
    type: "Wild animal",
    count: 200
}

const {
    animalName,
    type,
    count,
    country = ["india", "africa"]
} = {
    animalName: "🐯",
    type: "Wild animal",
    count: 200
}
console.log(animalName, type, country)
//🐯 Wild animal (2) ['india', 'africa']

const avenger = {
    name: "Tony Stark",
    house: "🏠",
    networth: "💰💰💰",
    power: "🤖"
};

const {
    name,
    house,
    networth,
    power = "💿",
    skill = ["genius", "billionaire", "philanthropist"]
} = {
    name: "Tony Stark",
    house: "🏠",
    networth: "💰💰💰",
    power: "🤖"
};

console.log(name, networth, power, skill)
//Tony Stark 💰💰💰 🤖 (3) ['genius', 'billionaire', 'philanthropist']



const avg = {
    name: "Tony Stark",
    house: "🏠",
    networth: "💰💰💰",
    power: "🤖",
    phrase: "He love himself"
};

const avg1 = { ...avg, nation: "IN", power: "💿" }
console.log(avg1)



const avg2 = { nation: "IN", power: "💿", ...avg }
console.log(avg2)