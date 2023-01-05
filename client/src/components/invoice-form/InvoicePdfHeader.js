import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  Container: {
    padding: 20,
    backgroundColor: "#ff9100",
  },
  Row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  LeftWrap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 30,
    height: 30,
    margin: "0 10px 0 0",
  },
  reportTitle: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "left",
  },
  RightWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContentL: "flex-end",
  },
  ComponyAdd: {
    width: "30%",
    fontSize: 12,
    textAlign: "right",
    color: "#ffffff",
  },
});

const InvoicePdfHeader = ({ invoice }) => {
  return (
    <View style={styles.Container}>
      <View style={styles.Row}>
        <View style={styles.LeftWrap}>
          {invoice.companyLogo && (
            <Image style={styles.logo} src={invoice.companyLogo} />
          )}
          <View>
            <Text style={styles.reportTitle}>{invoice?.fromCompanyName}</Text>
          </View>
        </View>
        <View style={styles.RightWrap}>
          <Text style={styles.ComponyAdd}>{invoice?.companyAdd}</Text>
        </View>
      </View>
    </View>
  );
};

export default InvoicePdfHeader;
