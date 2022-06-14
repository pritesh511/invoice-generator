var moment = require("moment");
module.exports = ({
  companyName,
  companyAdd,
  companyLogo,
  items,
  toAdd,
  invoiceDate,
  dueDate,
  poNumber,
  invoice_number,
  notes,
  subTotal,
  discount,
  cgst,
  sgst,
  payAmount,
}) => {
  const data = `${items.map(
    (item) => `${
      item.item &&
      `<tr>
          <td>${item.item}</td>
          <td>${item.qty}</td>
          <td>${item.rate}</td>
          <td>${item.amount}</td>
        </tr>`
    }
  `
  )}`;
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>PDF Result</title>
      <style>
        .row {
          padding: 40px 0;
          display: flex;
          display: -webkit-box;
          -webkit-box-pack: justify;
          -webkit-box-align: center;
          align-items: center;
        }
        .column-left {
          max-width: 50%;
          width: 100%;
          display: flex;
          flex-direction: column;
          -webkit-align-items: flex-start;
          align-items: flex-start;
        }
        .column-right {
          max-width: 50%;
          width: 100%;
          display: flex;
          flex-direction: column;
          -webkit-align-items: flex-end;
          align-items: flex-end;
        }
        .company-name {
          font-size: 32px;
          line-height: 40px;
          text-transform: uppercase;
          margin: 0 0 12px 0;
        }
        .company-address {
          font-size: 16px;
          line-height: 24px;
          margin: 0;
        }
        .company-logo {
          height: 150px;
          width: 150px;
          display: flex;
          display: -webkit-box;
          align-items: center;
          justify-content: center;
          -webkit-align-items: center;
          -webkit-justify-content: center;
        }
        .company-logo img {
          max-width: 100%;
        }
        .label {
          font-size: 16px;
          line-height: 24px;
        }
        .value {
          font-size: 16px;
          line-height: 24px;
        }
        .invoice-table {
          width: 100%;
          margin: 40px 0;
        }
        thead th {
          font-size: 16px;
          line-height: 24px;
          font-weight: bold;
          text-transform: uppercase;
          text-align: left;
          width: 25%;
          padding: 8px;
          border: 1px solid black;
        }
        tbody tr td {
          font-size: 16px;
          line-height: 24px;
          padding: 8px;
          border: 1px solid black;
        }
      </style>
    </head>
    <body>
      <div class="row">
        <div class="column-left">
          <div class="company-logo">
            <img
              src=${companyLogo}
            />
          </div>
        </div>
        <div class="column-right">
          <h1 class="company-name">${companyName}</h1>
          <p class="company-address">
            ${companyAdd}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="column-left">
          <div class="flex">
            <span class="label"> Invoice Number: </span>
            <spna class="value">${invoice_number}</spna>
          </div>
          <div class="flex">
            <span class="label"> Invoice Date: </span>
            <spna class="value">${moment(invoiceDate).format(
              "DD/MM/YYYY"
            )}</spna>
          </div>
          <div class="flex">
            <span class="label"> Due Date: </span>
            <spna class="value">${moment(dueDate).format("DD/MM/YYYY")}</spna>
          </div>
          <div class="flex">
            <span class="label"> Po Number: </span>
            <spna class="value">${poNumber}</spna>
          </div>
        </div>
        <div class="column-right">
          <p class="company-address">
            ${toAdd}
          </p>
        </div>
      </div>
      <table class="invoice-table">
        <thead>
          <th>item</th>
          <th>qty</th>
          <th>rate</th>
          <th>amount</th>
        </thead>
        <tbody>
          ${data}
        </tbody>
      </table>
      <div class="row">
        <div class="column-left">
          <p class="company-address">
            ${notes}
          </p>
        </div>
        <div class="column-right">
          <div class="flex">
            <span class="label"> Sub Total: </span>
            <spna class="value">${subTotal}</spna>
          </div>
          <div class="flex">
            <span class="label"> Discount(%): </span>
            <spna class="value">${discount}</spna>
          </div>
          <div class="flex">
            <span class="label"> CGST(%) : </span>
            <spna class="value">${cgst}</spna>
          </div>
          <div class="flex">
            <span class="label"> SGST(%): </span>
            <spna class="value">${sgst}</spna>
          </div>
          <div class="flex">
            <span class="label"> Total Amount: </span>
            <spna class="value">${payAmount}</spna>
          </div>
        </div>
      </div>
    </body>
  </html>
    
    `;
};
