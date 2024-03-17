const jsonData = require("./bundle.json");
const { Web3 } = require("web3");
const sdk = require("api")("@chainstack/v1.0#3oi4l3olf17gk1k");
const { getRelationatedBundleValuesByKeys } = require("./utils");
const web3 = new Web3("https://rpc-load-balancer.noves.fi/eth_trace-geth/");

async function getTransaction(transactionHash) {
  console.log("transaction hash: ", transactionHash);
  try {
    const res = await web3.eth.getTransaction(transactionHash);
    console.log("transact results: ", res);
    const finalValues = getRelationatedBundleValuesByKeys(
      res,
      jsonData,
      "getTransaction"
    );
    return finalValues;
  } catch (error) {
    console.error("Error getting transaction:", error);
    throw error;
  }
}

async function getTransactionReceipt(transactionHash) {
  try {
    const res = await web3.eth.getTransactionReceipt(transactionHash);
    console.log("transact receipt results: ", res);
    const finalValues = getRelationatedBundleValuesByKeys(
      res,
      jsonData,
      "getTransactionReceipt"
    );
    console.log("final values", finalValues);
    return finalValues;
  } catch (error) {
    console.error("Error getting transaction receipt:", error);
    throw error;
  }
}

async function traceTransaction(transactionHash) {
  try {
    const { data } = await sdk.traceTransaction({
      id: 1,
      jsonrpc: "2.0",
      method: "debug_traceTransaction",
      params: [transactionHash, { tracer: "callTracer" }],
    });
    const finalValues = getRelationatedBundleValuesByKeys(
      data.result,
      jsonData,
      "getTraceTransaction"
    );
    console.log(finalValues);
    return finalValues;
  } catch (error) {
    console.error("Error tracing transaction:", error);
    throw error;
  }
}

module.exports = {
  getTransaction,
  getTransactionReceipt,
  traceTransaction,
};
