"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(collection_1, collection_2) {
    var mergedCollection = collection_1.concat(collection_2);
    var sortedMergedCollection = mergedCollection.sort(function (a, b) { return a - b; });
    // let i = 0;
    // let j = 0;
    // while (i < collection_1.length && j < collection_2.length) {
    //   if (collection_1[i] < collection_2[j]) {
    //     mergedCollection.push(collection_1[i]);
    //     i++;
    //   } else {
    //     mergedCollection.push(collection_2[j]);
    //     j++;
    //   }
    // }
    // while (i < collection_1.length) {
    //   mergedCollection.push(collection_1[i]);
    //   i++;
    // }
    // while (j < collection_2.length) {
    //   mergedCollection.push(collection_2[j]);
    //   j++;
    // }
    return sortedMergedCollection;
}
exports.merge = merge;
