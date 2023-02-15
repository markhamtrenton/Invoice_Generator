$(document).ready(function () {
    // Handle form submission
    $('#invoiceForm').submit(function (event) {
        event.preventDefault();

        // Get form values
        var yourCompanyName = $('#yourCompanyName').val();
        var clientName = $('#clientName').val();
        var invoiceNumber = $('#invoiceNumber').val();
        var invoiceDate = $('#invoiceDate').val();
        var description = $('#description').val();
        var amount = $('#amount').val();
        var photoOne = $('#photoOne')[0].files[0];
        var photoTwo = $('#photoTwo')[0].files[0];
        var photoThree = $('#photoThree')[0].files[0];
        var photoFour = $('#photoFour')[0].files[0];

        // Build invoice HTML
        var invoiceHtml = `
      <div class="container">
        <div class="row">
        <div class="col-6">
  <h4>${yourCompanyName}</h4>
</div>

          <div class="col-6 text-right">
            <h4>Invoice</h4>
            <p>Number: ${invoiceNumber}</p>
            <p>Date: ${invoiceDate}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-6">
            <h4>Billed to:</h4>
            <p>${clientName}</p>
          </div>
          <div class="col-6 text-right">
            <h4>Amount due:</h4>
            <p>$${amount}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col">
            <h4>Description:</h4>
            <p>${description}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col">
            <h4>Job Photo:</h4>
            <img src="${photoOne ? URL.createObjectURL(photoOne) : ''}" width="200px" />
        <img src="${photoTwo ? URL.createObjectURL(photoTwo) : ''}" width="200px" />
        <img src="${photoThree ? URL.createObjectURL(photoThree) : ''}" width="200px" />
        <img src="${photoFour ? URL.createObjectURL(photoFour) : ''}" width="200px" />
          </div>
        </div>
      </div>







    `;

        // Open new window with invoice
        var invoiceWindow = window.open('', 'Invoice', 'width=800,height=600');
        invoiceWindow.document.write(`
  <html>
    <head>
      <title>Invoice</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="invoice-styles.css">
    </head>
    <body>
      <div class="invoice">
        ${invoiceHtml}
      </div>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    </body>
  </html>
`);
    });
});