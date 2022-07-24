import styled from "styled-components";

const InvoiceContainer = styled.div`
  width: 100%;
`;
const Form = styled.form`
  padding: 30px;

  @media only screen and (max-width: 768px) {
    padding: 15px;
  }
`;
const InvoiceUpperForm = styled.div``;
const InvoiceBottomBtn = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: left;
  }
  @media only screen and (max-width: 479px) {
    width: 100%;
  }
`;
const InvoiceFlex = styled.div`
  padding: 24px 0;
  display: flex;
  align-items: center;
  &.invoice-table {
    width: 100%;
  }
  &.border {
    border-top: 2px solid var(--yellow);
    border-bottom: 2px solid var(--yellow);
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 12px 0px;
  }
`;
const InvoiceTopLeft = styled.div`
  width: 100%;
  text-align: left;

  @media only screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
const AddLogo = styled.div`
  /* width: 267px; */
  height: 133px;
  background-color: #ffffff;
  border: 1px solid #9f9a9a;
  padding: 8px;
  margin-left: auto;
  position: relative;
  label {
    position: absolute;
    top: 8px;
    bottom: 8px;
    left: 8px;
    right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px dotted var(--border);
    font-size: 16px;
    line-height: 24px;
    color: var(--yellow);
  }
  input {
    position: absolute;
    z-index: -1;
    display: none;
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
const InvoiceTopRight = styled.div`
  width: 100%;
  text-align: right;
  margin-top: 10px;
  @media only screen and (max-width: 768px) {
    text-align: inherit;
  }
`;
const ComponyInfo = styled.div``;
const CompanyName = styled.div`
  width: 100%;
  display: flex;
  margin: 0 0 16px 0;
  input {
    border: 1px solid transparent;
    font-size: 32px;
    line-height: 34px;
    font-weight: 500;
    color: var(--dark);
    padding: 0 8px;
    text-align: left;
    height: auto;
    width: 100%;
    text-transform: capitalize;

    :focus {
      outline: none;
      box-shadow: none;
      border: 1px solid var(--yellow);
    }
  }
`;
const CompanyNameInput = styled.input`
  border: 1px solid transparent;
  font-size: 26px;
  line-height: 28px;
  font-weight: 500;
  color: var(--yellow);
  padding: 0 8px;
  text-align: left;
  height: auto;
  width: -webkit-fill-available;
  text-transform: uppercase;
  :focus {
    outline: none;
    box-shadow: none;
    border: 1px solid var(--yellow);
  }
`;
const CompanyAddress = styled.div`
  display: flex;
  flex-direction: column;
  textarea {
    padding: 8px;
    border: 1px solid transparent;
    resize: none;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: var(--dark);
    display: inline-block;
    width: 50%;
    font-family: "Poppins", sans-serif;
    :focus {
      outline: none;
      box-shadow: none;
      border: 1px solid var(--yellow);
    }
    @media only screen and (max-width: 768px) {
      width: auto;
    }
  }
`;
const ToCompanyAddress = styled.div`
  width: 55%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  span {
    margin: 0 0 14px 8px;
    font-size: 18px;
    color: var(--gray);
    font-weight: 600;
    font-family: "Poppins";
  }
  textarea {
    padding: 8px;
    border: 1px solid transparent;
    resize: none;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: var(--dark);
    display: inline-block;
    width: 100%;
    font-family: "Poppins", sans-serif;
    :focus {
      outline: none;
      box-shadow: none;
      border: 1px solid var(--yellow);
    }
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    span {
      margin: 0px 0px 14px 0px;
    }
  }
`;
const InputBlock = styled.div`
  width: 100%;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  appearance: none;
  -webkit-appearance: none;
  &.flex-end {
    justify-content: flex-end;
  }
  .react-datetime-picker {
    width: 188px;
    height: 34px;
    font-size: 14px;
  }
  .react-datetime-picker__calendar-button {
    padding: 0;
    display: flex;
    img {
      width: 18px;
      height: 18px;
    }
  }
  .date-picker {
    padding: 8px 12px;
    border: 1px solid #ccc;
    width: auto;
  }
  .react-datetime-picker__wrapper {
    padding: 8px;
    align-items: center;
    border: 1px solid var(--border);
  }
  .react-datepicker-wrapper {
    width: auto;
  }
  @media only screen and (max-width: 768px) {
    &.flex-end {
      justify-content: flex-start;
    }
  }
`;
const TotalSpan = styled.div`
  width: 30%;
  text-align: left;
  padding: 0 0 0 8px;
  font-size: 16px;
  line-height: 24px;
  display: block;
  color: var(--dark);
`;
const Label = styled.span`
  font-size: 16px;
  line-height: 24px;
  display: block;
  color: var(--dark);
  width: 22%;
  margin: 0 12px 0 0;
`;
const InputText = styled.input`
  padding: 8px;
  border: 1px solid var(--border);
  border-radius: 3px;
  font-size: 14px;
  color: var(--dark);
  ::placeholder {
    font-size: 14px;
    font-weight: 500;
    color: var(--border);
  }
  :focus {
    outline: none;
    box-shadow: none;
    border: 1px solid var(--yellow);
  }
`;
const Input = styled.input`
  display: flex;
  flex-direction: row;
  flex: 1 1 0;
  font-size: 14px;
  line-height: 22px;
  width: 100%;
  padding: 6px;
  border-radius: 3px;
  border: 1px solid transparent;
  :focus {
    box-shadow: none;
    outline: none;
    border: 1px solid var(--yellow);
  }
`;
const InvoiceTableBlock = styled.div`
  width: 100%;

  @media only screen and (max-width: 768px) {
    overflow: auto;
  }
`;
const InvoiceTable = styled.table`
  width: 100%;
  border-spacing: 0;
`;
const Thead = styled.thead`
  width: 100%;
  background-color: #e8e8e8;
`;
const Tbody = styled.tbody`
  width: 100%;
`;
const Th = styled.th`
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  color: var(--dark);
  border-top: 1px solid rgb(228, 228, 229);
  border-bottom: 2px solid var(--yellow);
  text-align: left;
  &.first {
    text-align: center;
    min-width: 10px;
  }
  @media only screen and (max-width: 991px) {
    min-width: 200px;
  }
`;
const Td = styled.td`
  padding: 10px;
  &.first {
    text-align: center;
  }
`;
const Tr = styled.tr`
  width: 100%;
  position: relative;
`;
const AddRowBtn = styled.button`
  font-size: 14px;
  line-height: 22px;
  color: #fff;
  cursor: pointer;
  padding: 8px 10px;
  margin: 12px 0 0 0;
  border-radius: 4px;
  background-color: var(--yellow);
  border: none;
  box-shadow: none;
  outline: none;
`;
const TextArea = styled.textarea`
  padding: 12px;
  border-radius: 3px;
  font-size: 16px;
  line-height: 18px;
  resize: none;
  border: 1px solid #9f9a9a;
  width: -webkit-fill-available;
  height: 129px;
  font-family: "Poppins", sans-serif;
  :focus {
    border: 1px solid var(--yellow);
    box-shadow: none;
    outline: none;
  }
`;
const TotalAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    justify-content: left;
  }
`;
const DownLoadButton = styled.button`
  font-size: 15px;
  line-height: 22px;
  color: #fff;
  cursor: pointer;
  padding: 8px 10px;
  border-radius: 4px;
  background-color: var(--yellow);
  border: none;
  box-shadow: none;
  outline: none;

  @media only screen and (max-width: 768px) {
    width: inherit;
  }
`;
const CrossIcon = styled.td`
  width: 12px;
  height: 12px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    display: block;
  }
`;
const ToAddBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  textarea {
    width: -webkit-fill-available;
  }
`;

export {
  InvoiceContainer,
  Form,
  InvoiceUpperForm,
  InvoiceBottomBtn,
  InvoiceFlex,
  InvoiceTopLeft,
  InvoiceTopRight,
  ComponyInfo,
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
  Td,
  Tbody,
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
};
