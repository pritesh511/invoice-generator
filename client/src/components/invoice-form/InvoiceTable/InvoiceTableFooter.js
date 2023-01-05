import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

// const borderColor = "#ff9100";
const styles = StyleSheet.create({
  FooterContainer: {
    padding: 20,
  },
  Row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  LeftCol: {
    width: "40%",
  },
  RightCol: {
    width: "30%",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  Notes: {
    fontSize: 10,
    fontWeight: "extrabold",
    color: "rgb(148, 156, 172)",
  },
  InnerCol: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  LastCol: {
    paddingTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopColor: "#ff9100",
    borderTopWidth: 1,
  },
  LeftText: {
    fontSize: 12,
    color: "rgb(148, 156, 172)",
    marginRight: 5,
  },
  RightText: {
    fontSize: 12,
    color: "#000000",
  },
  NotesHead: {
    fontSize: 12,
    marginBottom: 6,
    color: "#333333",
  },
});

const InvoiceTableFooter = ({ invoice }) => {
  return (
    <Fragment>
      <View style={styles.FooterContainer}>
        <View style={styles.Row}>
          <View style={styles.LeftCol}>
            <Text style={styles.NotesHead}>Notes:</Text>
            <Text style={styles.Notes}>{invoice?.notes}</Text>
          </View>
          <View style={styles.RightCol}>
            <View style={styles.InnerCol}>
              <Text style={styles.LeftText}>Sub Total:</Text>
              <Text style={styles.RightText}>
                {invoice?.subTotal ? invoice?.subTotal : 0}
              </Text>
            </View>
            <View style={styles.InnerCol}>
              <Text style={styles.LeftText}>Discount(%):</Text>
              <Text style={styles.RightText}>
                {invoice?.discount ? invoice?.discount : 0}
              </Text>
            </View>
            <View style={styles.InnerCol}>
              <Text style={styles.LeftText}>CGST(%):</Text>
              <Text style={styles.RightText}>
                {invoice?.cgst ? invoice?.cgst : 0}
              </Text>
            </View>
            <View style={styles.InnerCol}>
              <Text style={styles.LeftText}>SGST(%):</Text>
              <Text style={styles.RightText}>
                {invoice?.sgst ? invoice?.sgst : 0}
              </Text>
            </View>
            <View style={styles.LastCol}>
              <Text style={styles.LeftText}>Total(Rs):</Text>
              <Text style={styles.RightText}>{invoice?.payAmount}</Text>
            </View>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default InvoiceTableFooter;
