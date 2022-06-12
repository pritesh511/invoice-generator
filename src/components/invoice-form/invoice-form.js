import { useCallback, useState } from "react";
import {
  InvoiceContainer,
  Form,
  InvoiceBottomBtn,
  InvoiceUpperForm,
  InvoiceFlex,
  InvoiceTopLeft,
  InvoiceTopRight,
  CompanyName,
  AddLogo,
  CompanyAddress,
  InputBlock,
  InputText,
  Label,
  InvoiceTableBlock,
  InvoiceTable,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
  Input,
  AddRowBtn,
  TextArea,
  TotalAmount,
  DownLoadButton,
  CrossIcon,
} from "./styles";
import DateTimePicker from "react-datetime-picker";

const InvoiceForm = () => {
  const [invoice, setInvoice] = useState({
    companyName: "invoice",
    companyLogo: "",
    companyAdd: "company_address",
    toAdd: "company_address",
    invoiceDate: new Date(),
    dueDate: new Date(),
    poNumber: "",
    invoice_number: "",
    subTotal: "",
    cgst: "",
    sgst: "",
    discount: "",
    tempAmountTotal: "",
    payAmount: "",
    amountTotal: "",
    notes: "",
    items: [
      { item: "", qty: "", rate: "", amount: "" },
      { item: "", qty: "", rate: "", amount: "" },
      { item: "", qty: "", rate: "", amount: "" },
    ],
  });

  const {
    companyName,
    companyLogo,
    companyAdd,
    toAdd,
    invoiceDate,
    dueDate,
    poNumber,
    invoice_number,
    notes,
    subTotal,
    payAmount,
    discount,
    cgst,
    sgst,
    items,
  } = invoice;

  const handleInputData = useCallback(
    (name, value) => {
      const newInvoice = JSON.parse(JSON.stringify(invoice));
      newInvoice[name] = value;
      setInvoice(newInvoice);
      if (name === "discount") handleDicount(newInvoice);
      if (name === "cgst") cgstTaxCount(newInvoice);
      if (name === "sgst") sgstTaxCount(newInvoice);
    },
    [invoice]
  );

  const addNewRow = useCallback(() => {
    const newInvoice = JSON.parse(JSON.stringify(invoice));
    const item = { item: "", qty: "", rate: "", amount: "" };
    newInvoice?.items?.push(item);
    setInvoice(newInvoice);
  }, [invoice]);

  const calculaAmount = useCallback(
    (index, invoice) => {
      const newInvoice = JSON.parse(JSON.stringify(invoice));
      const { items } = newInvoice;
      const item = items?.[index] || {};
      const qty = Number(item?.qty);
      const rate = Number(item?.rate);
      const amount = qty * rate;
      item.amount = amount;
      setInvoice(newInvoice);
      calculateSubTotal(newInvoice);
    },
    [invoice]
  );

  const calculateSubTotal = useCallback(
    (newInvoice) => {
      const { items } = newInvoice;
      const sub_total = items?.reduce(function (a, b) {
        return a + Number(b?.amount);
      }, 0);
      newInvoice.subTotal = sub_total;
      setInvoice(newInvoice);
      handleDicount(newInvoice);
    },
    [invoice]
  );

  const removeRow = useCallback(
    (index) => {
      const newInvoice = JSON.parse(JSON.stringify(invoice));
      const { items } = newInvoice;
      if (index !== -1) {
        items?.splice(index, 1);
      }
      console.log("newInvoice----", newInvoice);
      calculaAmount(index, newInvoice);
      calculateSubTotal(newInvoice);
    },
    [invoice]
  );

  const handleChaneInput = useCallback(
    (name, index, value) => {
      const newInvoice = JSON.parse(JSON.stringify(invoice));
      newInvoice.items[index][name] = value;
      setInvoice(newInvoice);
      if (name !== "item") calculaAmount(index, newInvoice);
    },
    [invoice]
  );

  const handleDicount = useCallback(
    (invoice) => {
      console.log("dicountcall");
      const newInvoice = JSON.parse(JSON.stringify(invoice));
      const { subTotal, discount } = newInvoice;
      const discount_value = (Number(subTotal) * Number(discount)) / 100;
      const temp_total = Number(subTotal) - discount_value;
      newInvoice.amountTotal = temp_total;
      newInvoice.tempAmountTotal = temp_total;
      newInvoice.payAmount = temp_total;
      console.log("newInvoice1", newInvoice);
      setInvoice(newInvoice);
      cgstTaxCount(newInvoice);
    },
    [invoice]
  );

  const cgstTaxCount = useCallback(
    (invoice) => {
      console.log("cgstcall");
      const newInvoice = JSON.parse(JSON.stringify(invoice));
      const { tempAmountTotal, cgst } = newInvoice;
      const cgst_value = (Number(tempAmountTotal) * Number(cgst)) / 100;
      const temp_total = tempAmountTotal + cgst_value;
      newInvoice.amountTotal = temp_total;
      newInvoice.payAmount = temp_total;
      console.log("newInvoice2", newInvoice);
      setInvoice(newInvoice);
      sgstTaxCount(newInvoice);
    },
    [invoice]
  );

  const sgstTaxCount = useCallback(
    (invoice) => {
      console.log("sgstcall");
      const newInvoice = JSON.parse(JSON.stringify(invoice));
      const { amountTotal, tempAmountTotal, sgst } = newInvoice;
      const sgst_value = (Number(tempAmountTotal) * Number(sgst)) / 100;
      const temp_total = amountTotal + sgst_value;
      newInvoice.payAmount = temp_total;
      console.log("newInvoice3", newInvoice);
      setInvoice(newInvoice);
    },
    [invoice]
  );

  console.log("invoice", invoice);

  return (
    <>
      <InvoiceContainer>
        <Form>
          <InvoiceUpperForm>
            <InvoiceFlex>
              <InvoiceTopLeft>
                <CompanyName>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => {
                      handleInputData("companyName", e.target.value);
                    }}
                  />
                </CompanyName>
                <br />
                <CompanyAddress>
                  <textarea
                    value={companyAdd}
                    onChange={(e) => {
                      handleInputData("companyAdd", e.target.value);
                    }}
                  ></textarea>
                </CompanyAddress>
              </InvoiceTopLeft>
              <InvoiceTopRight>
                <AddLogo>
                  <input
                    type="file"
                    value={companyLogo}
                    onChange={(e) => {
                      handleInputData("companyLogo", e.target.value);
                    }}
                    accept="image/png, image/gif, image/jpeg"
                  />
                </AddLogo>
              </InvoiceTopRight>
            </InvoiceFlex>
            <InvoiceFlex>
              <InvoiceTopLeft>
                <InputBlock>
                  <Label>Invoice Number</Label>
                  <InputText
                    type="text"
                    placeholder="invoice-number"
                    value={invoice_number}
                    onChange={(e) => {
                      handleInputData("invoice_number", e.target.value);
                    }}
                  ></InputText>
                </InputBlock>
                <InputBlock>
                  <Label>Invoice Date</Label>
                  <DateTimePicker
                    // className="date-picker"
                    clearIcon={null}
                    format={"MM/dd/y"}
                    value={new Date(invoiceDate)}
                    onChange={(date) => {
                      handleInputData("invoiceDate", date);
                    }}
                  />
                </InputBlock>
                <InputBlock>
                  <Label>Due Date</Label>
                  <DateTimePicker
                    // className="date-picker"
                    clearIcon={null}
                    format={"MM/dd/y"}
                    value={new Date(dueDate)}
                    onChange={(date) => {
                      handleInputData("dueDate", date);
                    }}
                  />
                </InputBlock>
                <InputBlock>
                  <Label>Po Number</Label>
                  <InputText
                    type="text"
                    placeholder="Po Number"
                    value={poNumber}
                    onChange={(e) =>
                      handleInputData("poNumber", e.target.value)
                    }
                  ></InputText>
                </InputBlock>
              </InvoiceTopLeft>
              <InvoiceTopRight>
                <CompanyAddress>
                  <textarea
                    value={toAdd}
                    onChange={(e) => {
                      handleInputData("toAdd", e.target.value);
                    }}
                  ></textarea>
                </CompanyAddress>
              </InvoiceTopRight>
            </InvoiceFlex>
            <InvoiceFlex className="invoice-table">
              <InvoiceTableBlock>
                <InvoiceTable>
                  <Thead>
                    <Tr>
                      <Th>No</Th>
                      <Th>Item Name</Th>
                      <Th>Qty</Th>
                      <Th>Rate</Th>
                      <Th>Amount</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {items?.map((item, index) => {
                      return (
                        <>
                          <Tr key={`Items_Index_${index}`}>
                            <Td>{index + 1}</Td>
                            <Td>
                              <Input
                                type="text"
                                placeholder="Item Name"
                                value={items[index]?.item}
                                onChange={(e) => {
                                  handleChaneInput(
                                    "item",
                                    index,
                                    e.target.value
                                  );
                                }}
                              />
                            </Td>
                            <Td>
                              <Input
                                type="number"
                                placeholder="Qty"
                                value={items[index]?.qty}
                                onChange={(e) => {
                                  handleChaneInput(
                                    "qty",
                                    index,
                                    e.target.value
                                  );
                                }}
                              />
                            </Td>
                            <Td>
                              <Input
                                type="number"
                                placeholder="Rate"
                                value={items[index]?.rate}
                                onChange={(e) => {
                                  handleChaneInput(
                                    "rate",
                                    index,
                                    e.target.value
                                  );
                                }}
                              />
                            </Td>
                            <Td>
                              <Input
                                type="number"
                                placeholder="Amount"
                                readOnly={true}
                                value={items[index]?.amount}
                              />
                            </Td>
                            <CrossIcon
                              onClick={() => {
                                removeRow(index);
                              }}
                            >
                              {/* <img src="/images/close.svg" alt="icon" /> */}
                              <span>-</span>
                            </CrossIcon>
                          </Tr>
                        </>
                      );
                    })}
                  </Tbody>
                </InvoiceTable>
                <AddRowBtn type="button" onClick={addNewRow}>
                  Add New Row
                </AddRowBtn>
              </InvoiceTableBlock>
            </InvoiceFlex>
            <InvoiceFlex>
              <InvoiceTopLeft>
                <TextArea
                  placeholder="Notes/Memo"
                  value={notes}
                  onChange={(e) => {
                    handleInputData("notes", e.target.value);
                  }}
                />
              </InvoiceTopLeft>
              <InvoiceTopRight>
                <InputBlock className="flex-end">
                  <Label>Sub Total</Label>
                  <InputText
                    type="text"
                    placeholder="Sub Total"
                    readOnly={true}
                    value={subTotal}
                  ></InputText>
                </InputBlock>
                <InputBlock className="flex-end">
                  <Label>Discount(%)</Label>
                  <InputText
                    type="text"
                    placeholder="Discount"
                    value={discount}
                    onChange={(e) => {
                      handleInputData("discount", e.target.value);
                    }}
                  ></InputText>
                </InputBlock>
                <InputBlock className="flex-end">
                  <Label>CGST(%)</Label>
                  <InputText
                    type="text"
                    placeholder="CGST"
                    value={cgst}
                    onChange={(e) => {
                      handleInputData("cgst", e.target.value);
                    }}
                  ></InputText>
                </InputBlock>
                <InputBlock className="flex-end">
                  <Label>SGST(%)</Label>
                  <InputText
                    type="text"
                    placeholder="SGST"
                    value={sgst}
                    onChange={(e) => {
                      handleInputData("sgst", e.target.value);
                    }}
                  ></InputText>
                </InputBlock>
                <TotalAmount>
                  <Label>Total Amount</Label>
                  <span>{payAmount}</span>
                </TotalAmount>
              </InvoiceTopRight>
            </InvoiceFlex>
          </InvoiceUpperForm>
          <InvoiceBottomBtn>
            <DownLoadButton>Download</DownLoadButton>
          </InvoiceBottomBtn>
        </Form>
      </InvoiceContainer>
    </>
  );
};

export default InvoiceForm;
