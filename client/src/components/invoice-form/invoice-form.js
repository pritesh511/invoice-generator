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
  TotalSpan,
  ToCompanyAddress,
  CompanyNameInput,
  ToAddBottom,
} from "./styles";
import DateTimePicker from "react-datetime-picker";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import { saveAs } from "file-saver";
import calenderSvgIcon from "../../assets/images/calendar.svg";
import closeIcon from "../../assets/images/red-close.svg";

const InvoiceForm = () => {
  const [invoice, setInvoice] = useState({
    invoiceName: "Invoice",
    fromCompanyName: "Abc company Pvt Ltd",
    toCompanyName: "xyz company Pvt Ltd",
    companyLogo: "",
    companyAdd: "304, krishn Twonship, dabholi road, katargam, surat, 395004",
    toAdd: "304, krishn Twonship, dabholi road, katargam, surat, 395004",
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
    invoiceName,
    companyLogo,
    fromCompanyName,
    toCompanyName,
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
      const newInvoice = JSON.parse(JSON.stringify(invoice));
      const { subTotal, discount } = newInvoice;
      const discount_value = (Number(subTotal) * Number(discount)) / 100;
      const temp_total = Number(subTotal) - discount_value;
      newInvoice.amountTotal = temp_total;
      newInvoice.tempAmountTotal = temp_total;
      newInvoice.payAmount = temp_total;
      setInvoice(newInvoice);
      cgstTaxCount(newInvoice);
    },
    [invoice]
  );

  const cgstTaxCount = useCallback(
    (invoice) => {
      const newInvoice = JSON.parse(JSON.stringify(invoice));
      const { tempAmountTotal, cgst } = newInvoice;
      const cgst_value = (Number(tempAmountTotal) * Number(cgst)) / 100;
      const temp_total = tempAmountTotal + cgst_value;
      newInvoice.amountTotal = temp_total;
      newInvoice.payAmount = temp_total;
      setInvoice(newInvoice);
      sgstTaxCount(newInvoice);
    },
    [invoice]
  );

  const sgstTaxCount = useCallback(
    (invoice) => {
      const newInvoice = JSON.parse(JSON.stringify(invoice));
      const { amountTotal, tempAmountTotal, sgst } = newInvoice;
      const sgst_value = (Number(tempAmountTotal) * Number(sgst)) / 100;
      const temp_total = amountTotal + sgst_value;
      newInvoice.payAmount = temp_total;

      setInvoice(newInvoice);
    },
    [invoice]
  );

  console.log("invoice", invoice);

  const onChangeLogo = useCallback(
    (e) => {
      const value = e.target.files[0];
      resizeFile(value);
    },
    [invoice]
  );

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        "PNG",
        100,
        0,
        (uri) => {
          console.log("uri", uri);
          resolve(uri);
          handleInputData("companyLogo", uri);
        },
        "base64"
      );
    });

  // const HOST = "http://localhost:4000";

  const submitInvoice = (e) => {
    e.preventDefault();
    axios
      .post(`/create-pdf`, invoice)
      .then((res) => {
        console.warn(res);
      })
      .then(() => axios.get(`/fetch-pdf`, { responseType: "blob" }))
      .then((res) => {
        const pdfBolb = new Blob([res?.data], { type: "application/pdf" });
        saveAs(pdfBolb, "newInvoice.pdf");
      });
  };

  return (
    <>
      <InvoiceContainer>
        <Form onSubmit={submitInvoice}>
          <InvoiceUpperForm>
            <InvoiceFlex>
              <InvoiceTopLeft>
                <CompanyName>
                  <input
                    type="text"
                    value={invoiceName}
                    onChange={(e) => {
                      handleInputData("invoiceName", e.target.value);
                    }}
                  />
                </CompanyName>
                <CompanyAddress>
                  <CompanyNameInput
                    type="text"
                    value={fromCompanyName}
                    onChange={(e) => {
                      handleInputData("fromCompanyName", e.target.value);
                    }}
                  ></CompanyNameInput>
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
                  <label htmlFor="upload-file">Company Logo Upload</label>
                  <input
                    type="file"
                    id="upload-file"
                    onChange={(e) => {
                      onChangeLogo(e);
                    }}
                    accept="image/png, image/svg, image/jpeg"
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
                    placeholder="INV-01"
                    value={invoice_number}
                    onChange={(e) => {
                      handleInputData("invoice_number", e.target.value);
                    }}
                  ></InputText>
                </InputBlock>
                <InputBlock>
                  <Label>Invoice Date</Label>
                  <DateTimePicker
                    clearIcon={null}
                    format={"MM/dd/y"}
                    value={new Date(invoiceDate)}
                    calendarIcon={<img src={calenderSvgIcon}></img>}
                    onChange={(date) => {
                      handleInputData("invoiceDate", date);
                    }}
                  />
                </InputBlock>
                <InputBlock>
                  <Label>Due Date</Label>
                  <DateTimePicker
                    clearIcon={null}
                    format={"MM/dd/y"}
                    calendarIcon={<img src={calenderSvgIcon}></img>}
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
                <ToCompanyAddress>
                  <span>Bill To</span>
                  <ToAddBottom>
                    <CompanyNameInput
                      type="text"
                      value={toCompanyName}
                      onChange={(e) => {
                        handleInputData("toCompanyName", e.target.value);
                      }}
                    ></CompanyNameInput>
                    <textarea
                      value={toAdd}
                      onChange={(e) => {
                        handleInputData("toAdd", e.target.value);
                      }}
                    ></textarea>
                  </ToAddBottom>
                </ToCompanyAddress>
              </InvoiceTopRight>
            </InvoiceFlex>
            <InvoiceFlex className="invoice-table">
              <InvoiceTableBlock>
                <InvoiceTable>
                  <Thead>
                    <Tr>
                      <Th className="first">No</Th>
                      <Th>Item Name</Th>
                      <Th>Qty</Th>
                      <Th>Rate</Th>
                      <Th>Amount</Th>
                      <Th className="Closeicon"></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {items?.map((item, index) => {
                      return (
                        <Tr key={`Items_Index_${index}`}>
                          <Td className="first">{index + 1}</Td>
                          <Td>
                            <Input
                              type="text"
                              placeholder="Item Name"
                              value={items[index]?.item}
                              onChange={(e) => {
                                handleChaneInput("item", index, e.target.value);
                              }}
                            />
                          </Td>
                          <Td>
                            <Input
                              type="number"
                              placeholder="Qty"
                              value={items[index]?.qty}
                              onChange={(e) => {
                                handleChaneInput("qty", index, e.target.value);
                              }}
                            />
                          </Td>
                          <Td>
                            <Input
                              type="number"
                              placeholder="Rate"
                              value={items[index]?.rate}
                              onChange={(e) => {
                                handleChaneInput("rate", index, e.target.value);
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
                          <Td>
                            <img
                              src={closeIcon}
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                removeRow(index);
                              }}
                            />
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </InvoiceTable>
                <AddRowBtn type="button" onClick={addNewRow}>
                  Add New Row
                </AddRowBtn>
              </InvoiceTableBlock>
            </InvoiceFlex>
            <InvoiceFlex className="border">
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
                  <TotalSpan>{payAmount ? payAmount : "0000"}</TotalSpan>
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
