class Thermostat {
    constructor(tempF) {
        this.tempF = tempF;
    }

    get temperature() {
        return (5/9) * (this.tempF  - 32);
    }

    set temperature(newTemp) {
        this.tempF = (newTemp * 9.0) / 5 + 32
    };
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius