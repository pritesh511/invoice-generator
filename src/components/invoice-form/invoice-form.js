import { useState } from "react";
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
} from "./styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InvoiceForm = () => {
  const [companyName, setCompanyName] = useState("invoice");
  const [companyLogo, setCompanyLogo] = useState();
  const [companyAdd, setCompanyAdd] = useState("company_address");
  const [startDate, setStartDate] = useState(new Date());
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
                    selected={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </InputBlock>
                <InputBlock>
                  <Label>Due Date</Label>
                  <DatePicker
                    className="date-picker"
                    selected={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </InputBlock>
                <InputBlock>
                  <Label>Po Number</Label>
                  <InputText type="text" placeholder="Po Number"></InputText>
                </InputBlock>
              </InvoiceTopLeft>
              <InvoiceTopRight>
                <CompanyAddress>
                  <textarea
                    value={companyAdd}
                    onChange={(e) => {
                      setCompanyAdd(e.target.value);
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
                    <Tr>
                      <Td>1</Td>
                      <Td>
                        <Input type="text" placeholder="Item Name" />
                      </Td>
                      <Td>
                        <Input type="text" placeholder="Qty" />
                      </Td>
                      <Td>
                        <Input type="text" placeholder="Rate" />
                      </Td>
                      <Td>
                        <Input type="text" placeholder="Amount" readonly />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>2</Td>
                      <Td>
                        <Input type="text" placeholder="Item Name" />
                      </Td>
                      <Td>
                        <Input type="text" placeholder="Qty" />
                      </Td>
                      <Td>
                        <Input type="text" placeholder="Rate" />
                      </Td>
                      <Td>
                        <Input type="text" placeholder="Amount" readonly />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>3</Td>
                      <Td>
                        <Input type="text" placeholder="Item Name" />
                      </Td>
                      <Td>
                        <Input type="text" placeholder="Qty" />
                      </Td>
                      <Td>
                        <Input type="text" placeholder="Rate" />
                      </Td>
                      <Td>
                        <Input
                          readOnly={true}
                          type="text"
                          placeholder="Amount"
                        />
                      </Td>
                    </Tr>
                  </Tbody>
                </InvoiceTable>
                <AddRowBtn type="button">Add New Row</AddRowBtn>
              </InvoiceTableBlock>
            </InvoiceFlex>
            <InvoiceFlex>
              <InvoiceTopLeft>
                <TextArea placeholder="Notes/Memo" />
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
