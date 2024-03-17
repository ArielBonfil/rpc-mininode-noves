const { Router } = require("express");
const router = Router();
const {
  getTransaction,
  getTransactionReceipt,
  traceTransaction,
} = require("./controllers");

// Definir los endpoints
router.post("/api/transactions", async (req, res) => {
  const { method, transactionHash } = req.body;
  try {
    let result;
    if (method === "getTransaction") {
      result = await getTransaction(transactionHash);
    } else if (method === "getTransactionReceipt") {
      result = await getTransactionReceipt(transactionHash);
    } else if (method === "getTraceTransaction") {
      result = await traceTransaction(transactionHash);
    } else {
      return res.status(400).json({ error: "Not valid method" });
    }
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

module.exports = router;
