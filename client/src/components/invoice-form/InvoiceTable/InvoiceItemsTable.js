import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import InvoiceTableHeader from "./InvoiceTableHeader";
import InvoiceTableRow from "./InvoiceTableRow";

const styles = StyleSheet.create({
  tableContainer: {
    padding: 20,
  },
});

const InvoiceItemsTable = ({ invoice }) => {
  return (
    <View style={styles.tableContainer}>
      <InvoiceTableHeader />
      <InvoiceTableRow items={invoice.items} />
    </View>
  );
};

export default InvoiceItemsTable;
