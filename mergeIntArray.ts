export function merge(collection_1: number[], collection_2: number[]): number[] {
  const mergedCollection: number[] = collection_1.concat(collection_2);
  let done = false;
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
