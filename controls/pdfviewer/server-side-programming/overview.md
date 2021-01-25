---
title: Overview
page_title: Overview | RadPdfViewer for ASP.NET AJAX Documentation
description: Overview
slug: pdfviewer/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview

You can configure the settings of **RadPdfViewer** and create its elements in the code-behind via the Server-Side API of the control.

## RadPdfViewer Public Properties and Methods

For a list with the server-side properties and methods of the control, see the [Server-Side API of the RadPdfViewer class](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadPdfViewer). You can also find it in the intellisense in Visual Studio.

## Get File Name and Selected Page Number

**RadPdfViewer** exposes infromation regarding the loaded **File** name and currently **SelectedPage**, which can be accessed on the server-side like demonstrated in the following sample.

>caption Example 1: Get the name and the current page of the documentloaded in RadPdfViewer

````ASP.NET
<telerik:RadAjaxPanel runat="server">
    <asp:Button ID="Button1" runat="server" Text="Get File Name" OnClick="Button1_Click" />
    <asp:Label ID="Label1" runat="server"></asp:Label>
    <telerik:RadPdfViewer runat="server" ID="RadPdfViewer1" Height="450px" Width="1000px"
        Skin="Default" RenderMode="Lightweight">
        <PdfjsProcessingSettings File="Document1.pdf">
        </PdfjsProcessingSettings>
    </telerik:RadPdfViewer>
</telerik:RadAjaxPanel>
````

````C#
protected void Button1_Click(object sender, EventArgs e)
{
    var fileName = RadPdfViewer1.PdfjsProcessingSettings.File;
    var currentPage = RadPdfViewer1.ActivePage;
    string result = string.Format("Opened file with name: <strong>{0}</strong> on page: <strong>{1}</strong><br />", fileName, currentPage);
    Label1.Text = result;
}
````
````VB
Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
    Dim fileName = RadPdfViewer1.PdfjsProcessingSettings.File
    Dim currentPage = RadPdfViewer1.ActivePage
    Dim result As String = String.Format("Opened file with name: <strong>{0}</strong> on page: <strong>{1}</strong><br />", fileName, currentPage)
    Label1.Text = result
End Sub
````

## Creating a PdfViewer in the Code-Behind

RadPdfViewer can be created and configured entirely in the code-behind, as demonstrated in the sample below:

````ASPX
<head runat="server">
    <title></title>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.js"></script>
    <script type="text/javascript">
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.worker.js';
    </script>
</head>
<body>
    <form id="form1" runat="server">
        <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>

        <asp:Panel ID="Panel1" runat="server"></asp:Panel>
    </form>
````

````C#
protected void Page_Init(object sender, EventArgs e)
{
    GeneratePdfViewer();
}

private void GeneratePdfViewer()
{
    var pdfViewer = new RadPdfViewer();

    pdfViewer.ID = "RadPdfViewer1";
    pdfViewer.Height = Unit.Pixel(550);
    pdfViewer.Width = Unit.Pixel(800);
    pdfViewer.Scale = new Telerik.Web.UI.PdfViewer.Scale(0.9);

    pdfViewer.ToolBar = true;
    pdfViewer.ToolBarSettings.Items = new string[] { "pager", "spacer", "zoom", "toggleSelection", "spacer", "search", "download", "print" };

    pdfViewer.PdfjsProcessingSettings.File = "Document.pdf";

    Panel1.Controls.Add(pdfViewer);
}
````
````VB
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Init
    GeneratePdfViewer()
End Sub

Private Sub GeneratePdfViewer()
    Dim pdfViewer = New RadPdfViewer()
    pdfViewer.ID = "RadPdfViewer1"
    pdfViewer.Height = Unit.Pixel(550)
    pdfViewer.Width = Unit.Pixel(800)
    pdfViewer.Scale = New PdfViewer.Scale(0.9)
    pdfViewer.ToolBar = True
    pdfViewer.ToolBarSettings.Items = New String() {"pager", "spacer", "zoom", "toggleSelection", "spacer", "search", "download", "print"}
    pdfViewer.PdfjsProcessingSettings.File = "sample.pdf"
    Panel1.Controls.Add(pdfViewer)
End Sub
````

 