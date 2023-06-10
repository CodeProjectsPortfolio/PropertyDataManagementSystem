import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';


import propManageLogo from "./../../assets/propManageLogo.png";
// Define your styles
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    padding: 40,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 10,
  },
  content: {
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    marginBottom: 10,
  },
  table: {
    marginBottom: 10,
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 24,
  },
  tableCell: {
    flex: 1,
    padding: 4,
  },
  footer: {
    borderTop: '1pt solid black',
    paddingTop: 10,
  },
  footerText: {
    fontSize: 10,
  },
});

type RentReceiptProps = {
  propertyDetails: string;
  billNumber: string;
  generatedOn: string;
  rentDetails: string;
  tenantDetails: string;
  paymentOptions: string[];
};

const RentReceipt: React.FC<RentReceiptProps> = ({
  propertyDetails,
  billNumber,
  generatedOn,
  rentDetails,
  tenantDetails,
  paymentOptions,
}: RentReceiptProps) => (
  <Document
    title={billNumber}
    author="Rent Receipt Generator"
    subject="Rent Receipt"
    keywords="rent receipt, rent receipt generator, rent receipt pdf"
    creator="Rent Receipt Generator"
    producer="Rent Receipt Generator"
  >
    <Page style={styles.page}>
      <View style={styles.header}>
        <View>
        <Image src={propManageLogo} style={{ height: 100, width: 100 }}/>
          <Text style={styles.headerText}>Adarsa Nibasa</Text>
          <Text style={styles.headerText}>Address</Text>
          <Text style={styles.headerText}>Contact Number</Text>
          <Text style={styles.headerText}>Email</Text>
          <Text style={styles.headerText}>Owner Name</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Rent Receipt</Text>
        <View style={styles.section}>
          <View style={styles.tableRow}>
            <Text style={[styles.label, { marginRight: 10 }]}>Bill No:</Text>
            <Text style={styles.value}>216</Text>
            <Text style={styles.title}>Rent Receipt</Text>
            <Text style={styles.value}>Generated On:</Text>
            <Text style={styles.value}>May, 2023</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.label, { marginRight: 10 }]}>Room Number:</Text>
            <Text style={styles.value}>101</Text>
            <Text style={[styles.label, { marginRight: 10 }]}>Tenant Name:</Text>
            <Text style={styles.value}>John Doe</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.label}>Electricity Details</Text>
          </View>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Meter No:</Text>
              <Text style={styles.tableCell}>12345</Text>
              <Text style={styles.tableCell}>Per Unit Cost:</Text>
              <Text style={styles.tableCell}>$0.10</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Old Reading:</Text>
              <Text style={styles.tableCell}>1000</Text>
              <Text style={styles.tableCell}>New Reading:</Text>
              <Text style={styles.tableCell}>1050</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Units Consumed:</Text>
              <Text style={styles.tableCell}>50</Text>
              <Text style={styles.tableCell}>Total Elec. Cost:</Text>
              <Text style={styles.tableCell}>$5.00</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Payment Details</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Rent[From Date- To Date]</Text>
              <Text style={styles.tableCell}>+5100</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Electricity</Text>
              <Text style={styles.tableCell}>+396</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Old Balance</Text>
              <Text style={styles.tableCell}>+0</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Expense Added</Text>
              <Text style={styles.tableCell}>+0</Text>
            </View>
            <View style={[styles.tableRow, { backgroundColor: 'black', color: 'white' }]}>
              <Text style={[styles.tableCell, { fontWeight: 'bold' }]}>Total Due Amount</Text>
              <Text style={[styles.tableCell, { fontWeight: 'bold' }]}>5496</Text>
            </View>
            <View style={[styles.tableRow, { border: '1pt solid black' }]}>
              <Text style={[styles.tableCell, { borderRight: '1pt solid black' }]}>Total Amount Paid</Text>
              <Text style={styles.tableCell}>----</Text>
            </View>
            <View style={[styles.tableRow, { border: '1pt solid black' }]}>
              <Text style={[styles.tableCell, { borderRight: '1pt solid black' }]}>Balance Due</Text>
              <Text style={styles.tableCell}>----</Text>
            </View>
          </View>
          <Text style={{ textAlign: 'right' }}>Signature</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Payment Options</Text>
        <Text style={styles.footerText}>[Net Banking Logo] Bank Name:</Text>
        <Text style={styles.footerText}>Address | Account Number:</Text>
        <Text style={styles.footerText}>IFSC Code:</Text>
        <Text style={styles.footerText}>Account Holder Name:</Text>
        <Text style={styles.footerText}>UPI QR:</Text>
        <Text style={styles.footerText}>UPI ID:</Text>
        <Text style={styles.footerText}>Made By Property Data Management System</Text>
      </View>
    </Page>
  </Document>
);

export default RentReceipt;
