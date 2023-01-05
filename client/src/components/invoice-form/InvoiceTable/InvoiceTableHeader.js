import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

// const borderColor = "#ff9100";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ff9100",
    alignItems: "center",
    height: 30,
    fontStyle: "bold",
  },
  description: {
    width: "60%",
    padding: 6,
    fontSize: 12,
    textAlign: "left",
  },
  qty: {
    width: "10%",
    padding: 6,
    fontSize: 12,
    textAlign: "left",
  },
  rate: {
    width: "15%",
    padding: 6,
    fontSize: 12,
    textAlign: "left",
  },
  amount: {
    width: "15%",
    padding: 6,
    fontSize: 12,
    textAlign: "left",
  },
});

const InvoiceTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.description}>Item Description</Text>
    <Text style={styles.qty}>Qty</Text>
    <Text style={styles.rate}>Rate</Text>
    <Text style={styles.amount}>Amount</Text>
  </View>
);

export default InvoiceTableHeader;
