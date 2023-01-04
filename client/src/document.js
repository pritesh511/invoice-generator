import React from "react";
import { Document, Page, StyleSheet, Image } from "@react-pdf/renderer";
import InvoiceTitle from "./components/invoice-form/InvoiceTitle";
import InvoiceNo from "./components/invoice-form/InvoiceNo";
import BillTo from "./components/invoice-form/BillTo";
import InvoiceItemsTable from "./components/invoice-form/InvoiceTable/InvoiceItemsTable";
import InvoiceThankYouMsg from "./components/invoice-form/InvoiceThankYouMsg";
import InvoceNote from "./components/invoice-form/InvoiceNote";
import InvoiceTopHeader from "./components/invoice-form/InvoiceTable/InvoiceTopHeader";

// Create styles
const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  logo: {
    width: 60,
    height: 60,
  },
});

// Create Document Component
const MyDocument = ({ invoice }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {invoice.companyLogo && (
          <Image style={styles.logo} src={invoice.companyLogo} />
        )}
        <InvoiceTitle title={invoice.invoiceName} />
        <InvoiceTopHeader invoice={invoice} />
        <InvoiceNo invoice={invoice} />
        <BillTo invoice={invoice} />
        <InvoiceItemsTable invoice={invoice} />
        {invoice?.notes && <InvoceNote invoice={invoice} />}
        <InvoiceThankYouMsg />
      </Page>
    </Document>
  );
};

export default MyDocument;
