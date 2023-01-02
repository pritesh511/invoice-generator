import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  headContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  invoiceNoContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  billTo: {
    marginTop: 0,
    paddingBottom: 3,
    fontFamily: "Helvetica-Oblique",
  },
  companyAdd: {
    maxWidth: "150px",
  },
});

const InvoiceNo = ({ invoice }) => (
  <Fragment>
    <View style={styles.headContainer}>
      <View style={styles.invoiceNoContainer}>
        <Text style={styles.billTo}>Bill From:</Text>
        <Text>{invoice.fromCompanyName}</Text>
        <Text style={styles.companyAdd}>{invoice.companyAdd}</Text>
        <Text>{invoice.invoice_number}</Text>
      </View>
    </View>
  </Fragment>
);

export default InvoiceNo;
