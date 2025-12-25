"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodedResistorValue = decodedResistorValue;
function decodedResistorValue(values) {
    let valuesAccumulator = '';
    valuesAccumulator += COLORS.indexOf(values[0]);
    valuesAccumulator += COLORS.indexOf(values[1]);
    let zeros = "0".repeat(COLORS.indexOf(values[2]));
    valuesAccumulator += zeros;
    const numericValue = Number(valuesAccumulator);
    if (numericValue >= 1e9) {
        return (numericValue / 1e9) + " gigaohms";
    }
    else if (numericValue >= 1e6) {
        return (numericValue / 1e6) + " megaohms";
    }
    else if (numericValue >= 1000) {
        return (numericValue / 1000) + " kiloohms";
    }
    else {
        return (numericValue) + " ohms";
    }
}
const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
//# sourceMappingURL=resistor-color-trio.js.map