"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(collection_1, collection_2) {
    var mergedCollection = collection_1.concat(collection_2);
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < mergedCollection.length; i += 1) {
            if (mergedCollection[i - 1] > mergedCollection[i]) {
                done = false;
                var tmp = mergedCollection[i - 1];
                mergedCollection[i - 1] = mergedCollection[i];
                mergedCollection[i] = tmp;
            }
        }
    }
    return mergedCollection;
}
exports.merge = merge;
