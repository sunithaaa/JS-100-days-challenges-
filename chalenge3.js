// Classify the temperature using these rules:
// Temperature	Message
// Below 0°C	Freezing
// 0°C to 15°C	Cold
// 16°C to 25°C	Moderate
// 26°C to 35°C	Hot
// Above 35°C	Extreme heat

const temperature = -10

if(temperature<0){
    console.log("Freezing")
}
else if(temperature <= 15){
    console.log("Cold")
}
else if( temperature <= 25){
    console.log("Moderate")
}
else if(temperature <= 35){
    console.log("Hot")
}
else {
    console.log("Extreme heat")
}