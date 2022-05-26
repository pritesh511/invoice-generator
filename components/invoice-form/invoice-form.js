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
                    type="number"
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
              </InvoiceTopLeft>
              <InvoiceTopRight></InvoiceTopRight>
            </InvoiceFlex>
          </InvoiceUpperForm>
          <InvoiceBottomBtn></InvoiceBottomBtn>
        </Form>
      </InvoiceContainer>
    </>
  );
};

export default InvoiceForm;
