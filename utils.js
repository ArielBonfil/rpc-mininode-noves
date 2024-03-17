function getRelationatedBundleValuesByKeys(json1, json2, method) {
  const keysJson1 = Object.keys(json1);

  const similarities = {};

  keysJson1.forEach((key) => {
    if (json2.hasOwnProperty(key)) {
      similarities[key] = json2[key];
    } else if (method === "getTransaction" && json2.hasOwnProperty("rawTx")) {
      const rawTxObject = json2["rawTx"];
      if (rawTxObject.hasOwnProperty(key)) {
        similarities[key] = rawTxObject[key];
      }
    } else if (
      method === "getTransactionReceipt" &&
      json2.hasOwnProperty("txReceipt")
    ) {
      const txReceiptObject = json2["txReceipt"];
      if (txReceiptObject.hasOwnProperty(key)) {
        similarities[key] = txReceiptObject[key];
      }
    } else if (
      method === "getTraceTransaction" &&
      json2.hasOwnProperty("rawTraces")
    ) {
      const rawTracesObject = json2["rawTraces"];
      if (rawTracesObject.hasOwnProperty(key)) {
        similarities[key] = rawTracesObject[key];
      }
    }
  });

  return similarities;
}

module.exports = { getRelationatedBundleValuesByKeys };
