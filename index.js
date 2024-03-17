// const { Web3 } = require("web3");

// Crea una instancia de Web3 y conecta al proveedor (por ejemplo, una red Ethereum local o Infura)
// const web3 = new Web3("https://rpc-load-balancer.noves.fi/eth_trace-geth/"); // Cambia la URL al nodo Ethereum al que quieras conectarte
// const transactionHash =
//   "0x37a622f2b2df76e5ba13facf886e02b0b9b1f151c76cee657ba9d69209defeea";
// web3.eth
//   .getBlockNumber()
//   .then((blockNumber) => {
//     console.log("Número de bloque más reciente:", blockNumber);
//   })
//   .catch((error) => {
//     console.error("Error getting block number", error);
//   });

// web3.eth
//   .getTransaction(transactionHash)
//   .then((res) => {
//     console.log("transaction: ", res);
//   })
//   .catch((error) => {
//     console.error("Error getting transaction:", error);
//   });

// web3.eth
//   .getTransactionReceipt(transactionHash)
//   .then((res) => {
//     console.log("transaction receipt: ", res);
//   })
//   .catch((error) => {
//     console.error("Error getting transaction:", error);
//   });

// const sdk = require("api")("@chainstack/v1.0#3oi4l3olf17gk1k");

// sdk
//   .traceTransaction({
//     id: 1,
//     jsonrpc: "2.0",
//     method: "debug_traceTransaction",
//     params: [transactionHash, { tracer: "unigramTracer" }],
//   })
//   .then(({ data }) => {
//     console.log("debug trace transaction: ", data);
//   })
//   .catch((err) => console.error(err));

// Importa la biblioteca Express
const express = require("express");
const app = express();

// Importar los endpoints desde el archivo endpoints.js
const endpoints = require("./endpoints");

// Usar los endpoints
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", endpoints);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor API iniciado en el puerto ${port}`);
});
