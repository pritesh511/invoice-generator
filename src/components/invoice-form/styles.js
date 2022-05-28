import styled from "styled-components";

const InvoiceContainer = styled.div`
  max-width: 1270px;
  /* width: 100%; */
  padding: 0 16px;
  margin: auto;
`;
const Form = styled.form``;
const InvoiceUpperForm = styled.div`
  padding: 0 20px;
  margin: 30px 0;
  background: #fff;
  border: 1px solid #ccc;
`;
const InvoiceBottomBtn = styled.div``;
const InvoiceFlex = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
  :last-child {
    border: none;
  }
  &.invoice-table {
    width: 100%;
  }
`;
const InvoiceTopLeft = styled.div`
  width: 100%;
  text-align: left;
`;
const AddLogo = styled.div`
  height: 70px;
  max-width: 250px;
  width: 100%;
  padding: 16px;
  margin-left: auto;
  border: 1px solid #ccc;
  input {
    cursor: pointer;
  }
`;
const InvoiceTopRight = styled.div`
  width: 100%;
  text-align: right;
`;
const ComponyInfo = styled.div``;
const CompanyName = styled.div`
  input {
    border: 1px solid transparent;
    font-size: 28px;
    line-height: 1em;
    padding: 0 15px;
    color: #232e38;
    text-align: left;
    height: auto;
    border-radius: 4px;
    width: 100%;
    text-transform: uppercase;
    :focus {
      border: 1px solid #ccc;
    }
  }
`;
const CompanyAddress = styled.div`
  textarea {
    padding: 8px 15px;
    border: 1px solid transparent;
    resize: none;
    font-size: 12px;
    color: #000;
    display: inline-block;
  }
`;
const InputBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 0 8px 0;
  appearance: none;
  -webkit-appearance: none;
  &.flex-end {
    justify-content: flex-end;
  }
  .date-picker {
    padding: 8px 12px;
    border: 1px solid #ccc;
    width: auto;
  }
  .react-datepicker-wrapper {
    width: auto;
  }
`;
const Label = styled.span`
  width: 20%;
  margin: 0 12px 0 0;
`;
const InputText = styled.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
`;
const Input = styled.input`
  width: -webkit-fill-available;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const InvoiceTableBlock = styled.div`
  width: 100%;
`;
const InvoiceTable = styled.table`
  width: 100%;
`;
const Thead = styled.thead`
  width: 100%;
`;
const Tbody = styled.tbody`
  width: 100%;
`;
const Th = styled.th`
  padding: 9px 5px;
  border-top: 1px solid rgb(228, 228, 229);
  border-bottom: 1px solid rgb(228, 228, 229);
  background-color: rgb(249, 251, 255);
  text-align: left;
`;
const Td = styled.td`
  padding: 9px 5px;
  border-bottom: 1px solid rgb(228, 228, 229);
`;
const Tr = styled.tr`
  width: 100%;
`;
const AddRowBtn = styled.button`
  font-size: 14px;
  line-height: 18px;
  color: #fff;
  cursor: pointer;
  padding: 8px;
  margin: 12px 0 0 0;
  border-radius: 4px;
  background-color: #009e74;
  border: 1px solid #10806f;
  box-shadow: 0 1px 0 0 rgb(22 29 37 / 10%),
    inset 0 1px 0 1px rgb(255 255 255 / 6%);
  transition: all 300ms;
  :hover {
    background-color: #10806f;
  }
`;
const TextArea = styled.textarea`
  padding: 8px 12px;
  font-size: 14px;
  line-height: 18px;
  resize: none;
  border: 1px solid #ccc;
  width: -webkit-fill-available;
  height: 129px;
`;
const TotalAmount = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  span {
    width: 32%;
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
};
