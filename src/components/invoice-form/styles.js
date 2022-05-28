import styled from "styled-components";

const InvoiceContainer = styled.div`
  max-width: 1270px;
  width: 100%;
  padding: 0 16px;
  margin: auto;
`;
const Form = styled.form``;
const InvoiceUpperForm = styled.div`
  padding: 0 20px;
  margin: 30px 0;
  border: 1px solid black;
  background: #fff;
  border: 1px solid #ccc;
`;
const InvoiceBottomBtn = styled.div``;
const InvoiceFlex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
  :last-child {
    border: none;
  }
`;
const InvoiceTopLeft = styled.div`
  width: 100%;
  text-align: left;
`;
const AddLogo = styled.div`
  height: 100%;
  max-width: 250px;
  width: 100%;
  margin-left: auto;
  border: 1px solid #ccc;
  input {
    height: 100%;
    width: 100%;
    padding: 20px;
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
  .date-picker {
    padding: 8px 12px;
    border: 1px solid #ccc;
    width: auto;
  }
`;
const Label = styled.div`
  margin: 0 12px 0 0;
`;
const InputText = styled.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
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
};
