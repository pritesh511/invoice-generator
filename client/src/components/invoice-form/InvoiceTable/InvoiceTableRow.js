import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

// const borderColor = "#ff9100";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#ff9100",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 26,
    fontStyle: "bold",
  },
  description: {
    fontSize: 10,
    padding: 6,
    width: "60%",
    textAlign: "left",
  },
  qty: {
    fontSize: 10,
    width: "10%",
    padding: 6,
    textAlign: "left",
  },
  rate: {
    fontSize: 10,
    width: "15%",
    padding: 6,
    textAlign: "left",
  },
  amount: {
    fontSize: 10,
    width: "15%",
    padding: 6,
    textAlign: "left",
  },
});

const InvoiceTableRow = ({ items }) => {
  const rows = items.map((item, index) => (
    <View style={styles.row} key={index}>
      <Text style={styles.description}>{item.item}</Text>
      <Text style={styles.qty}>{item.qty}</Text>
      <Text style={styles.rate}>{item.rate}</Text>
      <Text style={styles.amount}>{item.amount}</Text>
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default InvoiceTableRow;
