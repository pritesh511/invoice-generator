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
  const [itemName, setItemName] = useState("");
  const [qty, setQty] = useState(Number);
  const [rate, setRate] = useState(Number);
  // const [amount, setAmount] = useState(Number);
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
  const removeRow = useCallback((index) => {
    console.log(typeof setItems);
    setItems([...items.splice(index)]);
  }, []);
  console.log("items", items);
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
                                value={itemName}
                                onChange={(e) => {
                                  setItemName(e.target.value);
                                }}
                              />
                            </Td>
                            <Td>
                              <Input
                                type="text"
                                placeholder="Qty"
                                value={qty}
                                onChange={(e) => {
                                  setQty(e.target.value);
                                }}
                              />
                            </Td>
                            <Td>
                              <Input
                                type="text"
                                placeholder="Rate"
                                value={rate}
                                onChange={(e) => {
                                  setRate(e.target.value);
                                }}
                              />
                            </Td>
                            <Td>
                              <Input
                                type="text"
                                placeholder="Amount"
                                readonly
                                // value={amount}
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
                  <InputText type="text" placeholder="Sub Total"></InputText>
                </InputBlock>
                <InputBlock className="flex-end">
                  <Label>GST</Label>
                  <InputText type="text" placeholder="GST"></InputText>
                </InputBlock>
                <InputBlock className="flex-end">
                  <Label>CGST</Label>
                  <InputText type="text" placeholder="CGST"></InputText>
                </InputBlock>
                <TotalAmount>
                  <Label>Total Amount</Label>
                  <span>25620356</span>
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
