import React from "react";
import { Document, Page } from "@react-pdf/renderer";
import InvoiceItemsTable from "./components/invoice-form/InvoiceTable/InvoiceItemsTable";
import InvoicePdfHeader from "./components/invoice-form/InvoicePdfHeader";
import InvoicePdfMiddle from "./components/invoice-form/InvoicePdfMiddle";
import InvoiceTableFooter from "./components/invoice-form/InvoiceTable/InvoiceTableFooter";

// Create Document Component
const MyDocument = ({ invoice }) => {
  return (
    <Document>
      <Page size="A4">
        <InvoicePdfHeader invoice={invoice} />
        <InvoicePdfMiddle invoice={invoice} />
        <InvoiceItemsTable invoice={invoice} />
        <InvoiceTableFooter invoice={invoice} />
      </Page>
    </Document>
  );
};

export default MyDocument;
