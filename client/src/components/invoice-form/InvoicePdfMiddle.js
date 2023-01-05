import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  row: {
    borderBottomColor: "#ff9100",
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    width: "28%",
  },
  Middlecolumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "28%",
  },
  HeadText: {
    fontSize: 12,
    fontWeight: "extrabold",
    color: "rgb(148, 156, 172)",
    marginBottom: 5,
  },
  MainHeadText: {
    fontSize: 12,
    fontWeight: "extrabold",
    color: "rgb(148, 156, 172)",
    marginBottom: 5,
  },
  Value: {
    fontSize: 12,
    color: "#000000",
    marginBottom: 5,
  },
  MainValue: {
    fontSize: 20,
    fontWeight: "extrabold",
    color: "#ff9100",
  },
  Address: {
    fontSize: 12,
    color: "rgb(148, 156, 172)",
  },
  InnerCol: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 8,
  },
});

const InvoicePdfMiddle = ({ invoice }) => {
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
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.HeadText}>Bill To:</Text>
          <Text style={styles.Value}>{invoice?.toCompanyName}</Text>
          <Text style={styles.Address}>{invoice?.toAdd}</Text>
        </View>
        <View style={styles.Middlecolumn}>
          <View style={styles.InnerCol}>
            <Text style={styles.HeadText}>Invoice Number:</Text>
            <Text style={styles.Value}>
              {invoice?.invoice_number
                ? `INV-${invoice?.invoice_number}`
                : "INV-0"}
            </Text>
          </View>
          <View style={styles.InnerCol}>
            <Text style={styles.HeadText}>Po Number:</Text>
            <Text style={styles.Value}>
              {invoice?.poNumber ? `${invoice?.poNumber}` : "00"}
            </Text>
          </View>
          <View style={styles.InnerCol}>
            <Text style={styles.HeadText}>Invoice Date:</Text>
            <Text style={styles.Value}>{invoiceDate}</Text>
          </View>
        </View>
        <View style={styles.Middlecolumn}>
          <View style={styles.InnerCol}>
            <Text style={styles.MainHeadText}>Amount(In Rupees):</Text>
            <Text style={styles.MainValue}>Rs. {invoice?.payAmount}</Text>
          </View>
          <View style={styles.InnerCol}>
            <Text style={styles.HeadText}>Due Date:</Text>
            <Text style={styles.Value}>{invoiceDueDate}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InvoicePdfMiddle;
