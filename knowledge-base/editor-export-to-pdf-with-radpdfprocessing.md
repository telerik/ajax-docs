---
title: Load HTML file in RadEditor and Export it to PDF with RadPdfProcessing
description: Export HTML to PDF with HtmlFormatProvider and PdfFormatProvider part of the Progress RadPdfProcessing library
type: how-to
page_title: How to export from RadEditor via RadPdfProcessing library
slug: editor-export-to-pdf-with-radpdfprocessing
position: 
tags: 
ticketid: 1585347
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
The article shows how to automatically import on Page_Load HTML content in RadEditor from an external HTML file and export it to PDF with the help of HtmlFormatProvider and PdfFormatProvider providers part of the Progress RadPdfProcessing library.

## Solution
Here is the solution:

````ASPX
<telerik:RadEditor ID="RadEditor1" runat="server"></telerik:RadEditor>
````
````C#
using Telerik.Windows.Documents.Flow.Model;

public partial class Default2 : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        RadEditor1.Content = File.ReadAllText(Server.MapPath("~/HTML_content_for_RadEditor.html"));
        string htmlContent = RadEditor1.Content;
        string path = Server.MapPath("~/Converted_to_PDF_content.pdf");
        string filename = Path.GetTempFileName();
        Telerik.Windows.Documents.Flow.FormatProviders.Html.HtmlFormatProvider htmlProvider = new Telerik.Windows.Documents.Flow.FormatProviders.Html.HtmlFormatProvider();
        // Create a document instance from the content. 
        RadFlowDocument document = htmlProvider.Import(htmlContent);

        Telerik.Windows.Documents.Flow.FormatProviders.Pdf.PdfFormatProvider pdfProvider = new Telerik.Windows.Documents.Flow.FormatProviders.Pdf.PdfFormatProvider();
        using (Stream output = File.OpenWrite(path))
        {
            // Export the document. The different overloads enables you to export to a byte[] or to a Stream. 
            pdfProvider.Export(document, output);
        }
    }
}
````
````VB
Imports Telerik.Windows.Documents.Flow.Model

Public Partial Class Default2
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
        RadEditor1.Content = File.ReadAllText(Server.MapPath("~/HTML_content_for_RadEditor.html"))
        Dim htmlContent As String = RadEditor1.Content
        Dim path As String = Server.MapPath("~/Converted_to_PDF_content.pdf")
        Dim filename As String = Path.GetTempFileName()
        Dim htmlProvider As Telerik.Windows.Documents.Flow.FormatProviders.Html.HtmlFormatProvider = New Telerik.Windows.Documents.Flow.FormatProviders.Html.HtmlFormatProvider()
        Dim document As RadFlowDocument = htmlProvider.Import(htmlContent)
        Dim pdfProvider As Telerik.Windows.Documents.Flow.FormatProviders.Pdf.PdfFormatProvider = New Telerik.Windows.Documents.Flow.FormatProviders.Pdf.PdfFormatProvider()

        Using output As Stream = File.OpenWrite(path)
            pdfProvider.Export(document, output)
        End Using
    End Sub
````
   


## See Also
* [RadPdfProcessing](https://docs.telerik.com/devtools/document-processing/libraries/radpdfprocessing/overview)
* [Using HtmlFormatProvider](https://docs.telerik.com/devtools/document-processing/libraries/radwordsprocessing/formats-and-conversion/html/htmlformatprovider)
* [Exporting to PDF](https://docs.telerik.com/devtools/document-processing/libraries/radpdfprocessing/getting-started#exporting-to-pdf)

  
   