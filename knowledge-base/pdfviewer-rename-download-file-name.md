---
title: Changing the default file name and download the file after setting its content through the fromFile method
description: Learn how to update the default file name and download the pdf file after setting its content in RadPdfViewer through the fromFile method
type: troubleshooting
page_title: Changing the default file name and download the file after setting its content through the fromFile method
slug: pdfviewer-rename-download-file-name
position: 
tags: 
ticketid: 1575749
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadPdfViewer for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
Learn below how to update the default file name and download the pdf file after setting its content in RadPdfViewer through the fromFile method.

## Solution
Here is an example that shows how to change the default file name and download the file after setting its content through the fromFile method:

 
````ASPX
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.js"></script>
            <script type="text/javascript">
                window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.worker.js';
            </script>
            <div id="main">
                <input type="text" placeholder="Type your name" value="John" />
                <input type="text" placeholder="Type your comment" value="Smith" />
                <telerik:RadPushButton OnClientClicked="exportPDF" runat="server" Text="Export page to PDF" ID="Export1" AutoPostBack="false"></telerik:RadPushButton>
            </div>
            <telerik:RadClientExportManager runat="server" ID="RadClientExportManager1" OnClientPdfExporting="OnClientPdfExporting">
            </telerik:RadClientExportManager>
            <telerik:RadPdfViewer runat="server" ID="RadPdfViewer1" Height="550px" Width="100%" Scale="0.9">
                
            </telerik:RadPdfViewer>
            <script>
                var $ = $telerik.$;
                function exportPDF() {
                    $find('<%=RadClientExportManager1.ClientID%>').exportPDF($("#main"));
                }
                function OnClientPdfExporting(sender, args) {
                    var data = args.get_dataURI().split(',')[1];
                    setData(data);
                    args.set_cancel(true);
                }
                function setData(data) {
                    var RadPdfViewerObject = $find("<%=RadPdfViewer1.ClientID %>");
                    RadPdfViewerObject.get_kendoWidget().options.messages.defaultFileName = "Put here the desired download file name";
                    RadPdfViewerObject.fromFile({ data: data });
                    setTimeout(function () {
                        RadPdfViewerObject.get_kendoWidget().execute({ command: "DownloadCommand" });
                    }, 1000);
                    return false;
                }
            </script>
````
   
Here is another example with a slightly different approach: https://dojo.telerik.com/oVIxUsIr/3. 
   
  