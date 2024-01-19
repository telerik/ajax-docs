---
title: Access the Spreadsheet workbook on the server
description: Access the Spreadsheet workbook on the server. Check it now!
type: how-to
page_title: Access the Spreadsheet workbook on the server
slug: spreadsheet-access-the-spreadsheet-workbook-on-the-server
res_type: kb
---

## HOW TO

 Access the Spreadsheet workbook on the server.   
  
## SOLUTION  

When pressing the Save button in the Spreadsheet or calling programmatically the `.save()` client-side method, you can access the Spreadsheet workbook on the server by using one of the following approaches:

- Use a [Custom Provider]({%slug spreadsheet/data-binding/providers/custom-database-provider%}) and the Workbook will be available in the `SaveWorkbook` method.
- Parse the `Request.Params["__CALLBACKPARAM"]` property value by using the `.FromJson()` method of the static `Telerik.Web.Spreadsheet.Workbook` class. For example:

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (IsCallback && Request.Params["__CALLBACKID"] == RadSpreadsheet1.UniqueID)
    {
        Workbook workbook = Telerik.Web.Spreadsheet.Workbook.FromJson(Request.Params["__CALLBACKPARAM"]);
    }
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
    If IsCallback AndAlso Request.Params("__CALLBACKID") = RadSpreadsheet1.UniqueID Then
        Dim workbook As Workbook = Telerik.Web.Spreadsheet.Workbook.FromJson(Request.Params("__CALLBACKPARAM"))
    End If
End Sub
````




