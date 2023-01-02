import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#ff9100";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    // borderBottomColor: "#ff9100",
    // borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontSize: 12,
    fontStyle: "bold",
  },
  description: {
    width: "85%",
    textAlign: "right",
    // borderRightColor: borderColor,
    // borderRightWidth: 1,
    paddingRight: 8,
  },
  total: {
    width: "15%",
    textAlign: "right",
    paddingRight: 8,
  },
  bottomFooter: {
    marginTop: "20px",
  },
});

const InvoiceTableFooter = ({ invoice }) => {
  return (
    <Fragment>
      <View style={styles.bottomFooter}>
        <View style={styles.row}>
          <Text style={styles.description}>Sub Total:</Text>
          <Text style={styles.total}>
            {Number.parseFloat(invoice?.subTotal).toFixed(2)}
          </Text>
        </View>
        {invoice?.discount && (
          <View style={styles.row}>
            <Text style={styles.description}>Discount(%):</Text>
            <Text style={styles.total}>{invoice?.discount}</Text>
          </View>
        )}
        {invoice?.cgst && (
          <View style={styles.row}>
            <Text style={styles.description}>CGST(%):</Text>
            <Text style={styles.total}>{invoice?.cgst}</Text>
          </View>
        )}
        {invoice?.sgst && (
          <View style={styles.row}>
            <Text style={styles.description}>SGST(%):</Text>
            <Text style={styles.total}>{invoice?.sgst}</Text>
          </View>
        )}
        <View style={styles.row}>
          <Text style={styles.description}>Total:</Text>
          <Text style={styles.total}>
            {Number.parseFloat(invoice?.payAmount).toFixed(2)}
          </Text>
        </View>
      </View>
    </Fragment>
  );
};

export default InvoiceTableFooter;
