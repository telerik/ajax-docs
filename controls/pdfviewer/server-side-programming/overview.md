---
title: Overview
page_title: Overview | v for ASP.NET AJAX Documentation
description: Overview
slug: pdfviewer-server-side-programming-overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview

You can configure the settings of **RadPDFViewer** and create its elements in the code-behind via the Server-Side API of the control.

## RadPDFViewer Public Properties and Methods

For a list with the server-side properties and methods of the control, see the [Server-Side API of the RadPDFViewer class](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadPDFViewer). You can also find it in the intellisense in Visual Studio.

## Get File Name and Selected Page Number

**RadPDFViewer** exposes infromation regarding the loaded **File** name and currently **SelectedPage**, which can be accessed on the server-side like demonstrated in the following sample.

>caption Example 1: Get the name and the current page of the documentloaded in RadPDFViewer

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
    var currentPage = RadPdfViewer1.SelectedPage;

    string result = string.Format("Opened file with name: <strong>{0}</strong> on page: <strong>{1}</strong><br />", fileName, currentPage);
    Label1.Text = result;
}
````
````VB
Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
    Dim fileName = RadPdfViewer1.PdfjsProcessingSettings.File
    Dim currentPage = RadPdfViewer1.SelectedPage
    Dim result As String = String.Format("Opened file with name: <strong>{0}</strong> on page: <strong>{1}</strong><br />", fileName, currentPage)
    Label1.Text = result
End Sub
````



