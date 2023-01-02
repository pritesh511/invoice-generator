import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  headerContainer: {},
  billTo: {
    paddingBottom: 3,
    fontFamily: "Helvetica-Oblique",
  },
  companyAdd: {
    maxWidth: "150px",
  },
});

const BillTo = ({ invoice }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.billTo}>Bill To:</Text>
    <Text>{invoice.toCompanyName}</Text>
    <Text style={styles.companyAdd}>{invoice.toAdd}</Text>
  </View>
);

export default BillTo;
