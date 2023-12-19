---
title: Resizing a Signature in PDF
description: Learn how to resize a signature before appending it to a PDF document.
type: how-to
page_title: Resize a Signature in PDF | RadSignature for ASP.NET AJAX | Telerik
slug: signature-resize-signature-pdf
tags: pdf, signature, resize, RadSignature, ASP.NET AJAX
res_type: kb
---
# Environment
| Product   | RadSignature for ASP.NET AJAX |
|-----------|------------------------------|
| Version   | all                 |

# Description
I want to resize a signature in a PDF document using RadSignature for ASP.NET AJAX. I have code that places the signature in the PDF, but I'm not able to resize it to a smaller size to fit it in the form.

# Solution
The solution is based on the [Signing Pdf Documents demo](https://demos.telerik.com/aspnet-ajax/signature/applicationscenarios/signingpdfdocuments/defaultcs.aspx). To resize the signature in the PDF document, you can modify the code as follows:

Before translating the position of the `foregroundContentOwner`, apply a scaling transformation to resize it. Choose the scaling factors (width and height) based on your requirements.

````CS
using (pageWriter.SaveContentPosition())
{
    // Scale the signature
    double scaleX = 0.3; // Example scaling factor for width
    double scaleY = 0.3; // Example scaling factor for height
    pageWriter.ContentPosition.Scale(scaleX, scaleY);

    // Adjust the translation values
    double xCenteringTranslation = ((pageSource.Size.Width - (foregroundContentOwner.Size.Width * scaleX)) - 120) / 2;
    double yCenteringTranslation = ((pageSource.Size.Height - (foregroundContentOwner.Size.Height * scaleY)) - 110);

    pageWriter.ContentPosition.Translate(xCenteringTranslation, yCenteringTranslation);
    pageWriter.WriteContent(foregroundContentOwner);
}
````
This modified code will scale the signature and adjust its position to fit it within the PDF document. The example scaling factors used are `0.3` for both width and height. Adjust these values according to your requirements.

````CS
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Web.UI;
using System.Windows;
using Telerik.Web.UI;
using Telerik.Windows.Documents.Fixed;
using Telerik.Windows.Documents.Fixed.FormatProviders.Pdf;
using Telerik.Windows.Documents.Fixed.FormatProviders.Pdf.Streaming;
using Telerik.Windows.Documents.Fixed.Model;
using Telerik.Windows.Documents.Fixed.Model.Data;
using Telerik.Windows.Documents.Fixed.Model.Editing;

namespace Telerik.Web.Examples.Signature.SigningPdfDocuments
{
    public partial class DefaultCS : System.Web.UI.Page
    {
        protected void RadAjaxManager1_AjaxRequest(object sender, Telerik.Web.UI.AjaxRequestEventArgs e)
        {
            var fileName = e.Argument.Split(';')[0];
            var base64 = e.Argument.Split(',')[1];

            RadPdfViewer1.PdfjsProcessingSettings.FileSettings.Data = PreparePdf(base64);
        }


        public string PreparePdf(string pdfData)
        {
            byte[] resultingBytes = null;
            byte[] finalBytes = null;

            PdfFormatProvider provider = new PdfFormatProvider();
            byte[] renderedBytes = Convert.FromBase64String(pdfData);

            RadFixedDocument document1 = null;
            RadFixedDocument document2 = provider.Import(renderedBytes);

            string filePath = Server.MapPath("Documents/Document.pdf");

            using (FileStream input = new FileStream(filePath, FileMode.Open, FileAccess.Read))
            {
                document1 = provider.Import(input);
            }

            using (MemoryStream ms = new MemoryStream())
            {
                provider.Export(document1, ms);
                resultingBytes = ms.ToArray();
            }

            finalBytes = AppendContent(resultingBytes, document2);
            string result = Convert.ToBase64String(finalBytes);

            return result;
        }
        private byte[] AppendContent(byte[] resultingBytes, RadFixedDocument document2)
        {
            RadFixedPage foregroundContentOwner = document2.Pages[0];

            MemoryStream ms = new MemoryStream();
            byte[] renderedBytes = null;
            using (MemoryStream stream = new MemoryStream(resultingBytes))
            {
                using (PdfFileSource fileSource = new PdfFileSource(stream))
                {
                    using (PdfStreamWriter fileWriter = new PdfStreamWriter(ms, true))
                    {
                        foreach (PdfPageSource pageSource in fileSource.Pages)
                        {
                            using (PdfPageStreamWriter pageWriter = fileWriter.BeginPage(pageSource.Size, pageSource.Rotation))
                            {
                                pageWriter.WriteContent(pageSource);

                                using (pageWriter.SaveContentPosition())
                                {
                                    // Scale the signature
                                    double scaleX = 0.3; // Example scaling factor for width
                                    double scaleY = 0.3; // Example scaling factor for height
                                    pageWriter.ContentPosition.Scale(scaleX, scaleY);

                                    // Adjust the translation values
                                    double xCenteringTranslation = ((pageSource.Size.Width - (foregroundContentOwner.Size.Width * scaleX)) - 120) / 2;
                                    double yCenteringTranslation = ((pageSource.Size.Height - (foregroundContentOwner.Size.Height * scaleY)) - 110);

                                    pageWriter.ContentPosition.Translate(xCenteringTranslation, yCenteringTranslation);
                                    pageWriter.WriteContent(foregroundContentOwner);
                                }
                            }
                        }
                    }
                }
            }
            renderedBytes = ms.ToArray();
            return renderedBytes;
        }

        protected void Page_PreRender(object sender, EventArgs e)
        {
            RadSkinManager.GetCurrent(Page).Skin = "Silk";
        }
    }
}
````

# Notes
- Ensure that you have the latest version of RadSignature for ASP.NET AJAX.
- Adjust the scaling factors (`scaleX` and `scaleY`) according to your requirements to resize the signature.
- Modify the translation values (`xCenteringTranslation` and `yCenteringTranslation`) to adjust the position of the signature after scaling.
- This solution is based on the Signing PDF Documents demo and may require additional modifications to fit your implementation.

# See Also
- [RadSignature for ASP.NET AJAX Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/signature/overview)
- [Signing PDF Documents Demo](https://demos.telerik.com/aspnet-ajax/signature/examples/signingpdfdocuments/defaultcs.aspx)
