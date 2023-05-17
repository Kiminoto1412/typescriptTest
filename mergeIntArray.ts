export function merge(
  collection_1: number[],
  collection_2: number[]
): number[] {
  let mergedCollection: number[] = collection_1.concat(collection_2);
  let sortedMergedCollection: number[] = mergedCollection.sort((a, b) => a - b);
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
