import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    margin: "12px 0",
  },
  notes: {
    fontSize: 11,
    fontWeight: "bold",
  },
  reportTitle: {
    width: "92%",
    fontSize: 10,
    marginLeft: 4,
  },
});

const InvoceNote = ({ invoice }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.notes}>Notes:</Text>
    <Text style={styles.reportTitle}>{invoice?.notes}</Text>
  </View>
);

export default InvoceNote;
