import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  item: {
    fontSize: 10,
    marginRight: 4,
  },
  itemValue: {
    fontSize: 10,
  },
});

const InvoiceTopHeader = ({ invoice }) => {
  let invoice_date = new Date(invoice?.invoiceDate);
  let day = invoice_date.getDate();
  let month = invoice_date.getMonth() + 1;
  let year = invoice_date.getFullYear();
  let invoiceDate = day + "/" + month + "/" + year;

  let invoice_dueDate = new Date(invoice?.dueDate);
  let due_day = invoice_dueDate.getDate();
  let due_month = invoice_dueDate.getMonth() + 1;
  let due_year = invoice_dueDate.getFullYear();
  let invoiceDueDate = due_day + "/" + due_month + "/" + due_year;

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Text style={styles.item}>Invoice Number:</Text>
        <Text style={styles.itemValue}>{invoice?.invoice_number}</Text>
      </View>
      <View style={styles.flex}>
        <Text style={styles.item}>Invoice Date:</Text>
        <Text style={styles.itemValue}>{invoiceDate}</Text>
      </View>
      <View style={styles.flex}>
        <Text style={styles.item}>Due Date:</Text>
        <Text style={styles.itemValue}>{invoiceDueDate}</Text>
      </View>
      <View style={styles.flex}>
        <Text style={styles.item}>Po Number:</Text>
        <Text style={styles.itemValue}>{invoice?.poNumber}</Text>
      </View>
    </View>
  );
};

export default InvoiceTopHeader;
