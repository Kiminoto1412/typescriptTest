"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mergeIntArray_1 = require("./mergeIntArray");
// Example usage
var collection1 = [3, 5, 1];
var collection2 = [2, 4, 6];
var mergedCollection = (0, mergeIntArray_1.merge)(collection1, collection2);
console.log("Merged Collection:", mergedCollection);
