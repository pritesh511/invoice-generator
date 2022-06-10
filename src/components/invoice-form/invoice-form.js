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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InvoiceForm = () => {
  const [companyName, setCompanyName] = useState("invoice");
  const [companyLogo, setCompanyLogo] = useState("");
  const [companyAdd, setCompanyAdd] = useState("company_address");
  const [toAdd, setToAdd] = useState("company_address");
  const [invoiceDate, setInvoicetDate] = useState(new Date());
  const [dueDate, setDuetDate] = useState(new Date());
  const [poNumber, setPoNumber] = useState("");
  const [subTotal, setSubTotal] = useState(Number);
  const [gstSubTotal, gstSetSubTotal] = useState(Number);
  const [amountTotal, setAmountTotal] = useState(Number);
  const [notes, setNotes] = useState("");
  const [items, setItems] = useState([
    { item: "", qty: "", rate: "", amount: "" },
    { item: "", qty: "", rate: "", amount: "" },
    { item: "", qty: "", rate: "", amount: "" },
  ]);
  const addNewRow = useCallback(() => {
    const item = { item: "", qty: "", rate: "", amount: "" };
    setItems([...items, item]);
  }, [items]);

  const calculaAmount = useCallback(
    (index, newItems) => {
      const item = newItems?.[index] || {};
      const qty = Number(item?.qty);
      const rate = Number(item?.rate);
      const amount = qty * rate;
      item.amount = amount;
      setItems(newItems);
      calculateSubTotal(newItems);
    },
    [items]
  );

  const calculateSubTotal = useCallback((newItems) => {
    const sub_total = newItems?.reduce(function (a, b) {
      return a + Number(b?.amount);
    }, 0);
    setSubTotal(sub_total);
    setAmountTotal(sub_total);
  }, []);

  const removeRow = useCallback(
    (index) => {
      const newItems = JSON.parse(JSON.stringify(items));
      if (index !== -1) {
        newItems?.splice(index, 1);
      }
      calculaAmount(index, newItems);
    },
    [items]
  );

  const handleChaneInput = useCallback(
    (name, index, value) => {
      const newItems = JSON.parse(JSON.stringify(items));
      newItems[index][name] = value;
      setItems(newItems);
      if (name !== "item") calculaAmount(index, newItems);
    },
    [items]
  );

  const calclateGst = useCallback((tem_total, value) => {
    const gst_percentage = value;
    const gst = (tem_total * Number(gst_percentage)) / 100;
    const total = tem_total + gst;
    gstSetSubTotal(total);
    setAmountTotal(total);
  }, []);

  const calculateCgst = useCallback((tem_total, value) => {
    const gst = (tem_total * Number(value)) / 100;
    const total = tem_total + gst;
    setAmountTotal(total);
  }, []);

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
                      setCompanyName(e.target.value);
                    }}
                  />
                </CompanyName>
                <br />
                <CompanyAddress>
                  <textarea
                    value={companyAdd}
                    onChange={(e) => {
                      setCompanyAdd(e.target.value);
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
                      setCompanyLogo(e.target.value);
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
                  ></InputText>
                </InputBlock>
                <InputBlock>
                  <Label>Invoice Date</Label>
                  <DatePicker
                    className="date-picker"
                    selected={invoiceDate}
                    onChange={(e) => {
                      setInvoicetDate(e);
                    }}
                  />
                </InputBlock>
                <InputBlock>
                  <Label>Due Date</Label>
                  <DatePicker
                    className="date-picker"
                    selected={dueDate}
                    onChange={(e) => setDuetDate(e)}
                  />
                </InputBlock>
                <InputBlock>
                  <Label>Po Number</Label>
                  <InputText
                    type="text"
                    placeholder="Po Number"
                    value={poNumber}
                    onChange={(e) => setPoNumber(e.target.value)}
                  ></InputText>
                </InputBlock>
              </InvoiceTopLeft>
              <InvoiceTopRight>
                <CompanyAddress>
                  <textarea
                    value={toAdd}
                    onChange={(e) => {
                      setToAdd(e.target.value);
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
                    setNotes(e.target.value);
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
                  <Label>GST</Label>
                  <InputText
                    type="text"
                    placeholder="GST"
                    onChange={(e) => {
                      calclateGst(subTotal, e.target.value);
                    }}
                  ></InputText>
                </InputBlock>
                <InputBlock className="flex-end">
                  <Label>CGST</Label>
                  <InputText
                    type="text"
                    placeholder="CGST"
                    onChange={(e) => {
                      calculateCgst(gstSubTotal, e.target.value);
                    }}
                  ></InputText>
                </InputBlock>
                <TotalAmount>
                  <Label>Total Amount</Label>
                  <span>{amountTotal}</span>
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
