import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    marginTop: 14,
  },
  reportTitle: {
    color: "#ff9100",
    letterSpacing: 2,
    fontSize: 25,
    textAlign: "left",
    textTransform: "uppercase",
  },
});

const InvoiceTitle = ({ title }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>{title}</Text>
  </View>
);

export default InvoiceTitle;
