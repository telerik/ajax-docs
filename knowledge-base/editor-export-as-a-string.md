---
title: Prevent the rtf, pdf and docx file download and convert the exported content to a string
description: By default RadEditor downloads the exported content on the client. See how to obtain it as a string on the server-side - Telerik UI for ASP.NET AJAX
type: how-to
page_title: Convert the exported content to a string and prevent it from being send to the client
slug: editor-export-as-a-string
position: 
tags: 
ticketid: 1583492
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadEditor for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
By design, the RadEditor ExportToPdf, ExportToRtf and ExportToDocx methods automatically convert and download the exported HTML content on the client as a file. See the solution below to learn how to obtain the converted content as a string on the server-side so that you can, for example, save it in another location as a physical file or in your database.

## Solution
Here is an example of how to save the ExportOutput to a file on the server and prevent it from being sent to the client:

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1" OnExportContent="RadEditor1_ExportContent" ContentFilters="DefaultFilters, PdfExportFilter">
</telerik:RadEditor>
<asp:Button runat="server" ID="Button1" Text="Export to PDF" OnClick="Button1_Click" />
````
````C#
using System;
using System.IO;
using Telerik.Web.UI;

public partial class DefaultCS : System.Web.UI.Page
{
    protected void RadEditor1_ExportContent(object sender, EditorExportingArgs e)
    {
        string url = String.Format("~/{0}.pdf", RadEditor1.ExportSettings.FileName);
        string path = Server.MapPath(url);

        if (File.Exists(path))
        {
            File.Delete(path);
        }

        using (FileStream fs = File.Create(path))
        {
            Byte[] info = System.Text.Encoding.Default.GetBytes(e.ExportOutput);
            fs.Write(info, 0, info.Length);
        }

        e.Cancel = true;
    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        RadEditor1.ExportToPdf();
    }
}
````
````VB
Imports System.IO
Imports Telerik.Web.UI

Partial Class DefaultVB
    Inherits System.Web.UI.Page

    Protected Sub RadEditor1_ExportContent(sender As Object, e As EditorExportingArgs)
        Dim url As String = String.Format("~/{0}.pdf", RadEditor1.ExportSettings.FileName)
        Dim path As String = Server.MapPath(url)

        If File.Exists(path) Then
            File.Delete(path)
        End If

        Using fs As FileStream = File.Create(path)
            Dim info As [Byte]() = System.Text.Encoding.[Default].GetBytes(e.ExportOutput)
            fs.Write(info, 0, info.Length)
        End Using

        e.Cancel = True
    End Sub

    Protected Sub Button1_Click(sender As Object, e As EventArgs)
        RadEditor1.ExportToPdf()
    End Sub
End Class
````

## See Also
* [OnExportContent]({%slug editor/server-side-programming/events/onexportcontent%})
  
 * [Import and Export to Word]({%slug editor/functionality/import-and-export/import-and-export-to-word%})

 * [Export to DOCX and RTF]({%slug editor/functionality/import-and-export/export-to-docx-and-rtf%})

 * [Export to PDF]({%slug editor/functionality/import-and-export/export-to-pdf%})
 
 * [Telerik Document Processing - RadWordsProcessing](https://docs.telerik.com/devtools/document-processing/libraries/radwordsprocessing/overview)
 
 * [RadFlowDocument](https://docs.telerik.com/devtools/document-processing/libraries/radwordsprocessing/model/radflowdocument)
    
   