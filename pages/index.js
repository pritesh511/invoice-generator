import { NextSeo } from "next-seo";
import styled from "styled-components";
import InvoiceForm from "../components/invoice-form/invoice-form";

const InvoiceWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Home = () => {
  return (
    <>
      <NextSeo title="Invoice Generator" description="Invoice-Generator" />
      <InvoiceWrapper>
        <InvoiceForm />
      </InvoiceWrapper>
    </>
  );
};

export default Home;
