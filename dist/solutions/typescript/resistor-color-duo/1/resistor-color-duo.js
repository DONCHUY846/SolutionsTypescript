"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colors = void 0;
exports.decodedValue = decodedValue;
function decodedValue(values) {
    let accumulator = '';
    values.forEach((item) => accumulator += exports.colors.indexOf(item).toString());
    return parseInt(accumulator.slice(0, 2));
}
exports.colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
//# sourceMappingURL=resistor-color-duo.js.map