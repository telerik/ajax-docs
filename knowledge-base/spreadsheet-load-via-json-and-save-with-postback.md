---
title: Load and Save Spreadsheet via JSON
description: Save and Load RadSpreadsheet provider with JSON string, improve loading performance and access changes on postback.
type: how-to
page_title: Improve performance and save and load RadSpreadsheet via JSON
slug: spreadsheet-load-via-json-and-save-with-postback
position: 
tags: 
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2019.3.1023</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadSpreadsheet for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

The Spreadsheet is designed to save to its provider via Callbacks. That means in postback the updated workbook will not be available. 

The Spreadsheet providers can be converted to a JSON string and can be populated from the same. 

This can also help improving the performance by skipping all the framework related work in various stages of the page lifecycle as explained in the [Improve performance of slowly loading Spreadsheet](https://www.telerik.com/support/kb/aspnet-ajax/spreadsheet/details/improve-performance-of-slowly-loading-spreadsheet) KB article.

## Solution

The JSON string can be saved in a HiddenField and transfered to the server as any other string. Then, the JSON string can be easily converted to a Workbook object and processed.

````ASPNET
<script>
    function pageLoadHandler() {
        var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
        var value = $get("<%= HiddenField1.ClientID %>").value;
        var valueAsJSON = JSON.parse(value);

        spreadsheet.get_kendoWidget().fromJSON(valueAsJSON);
    }

    Sys.Application.add_load(pageLoadHandler);

    function OnClientClicked(sender, args) {
        var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
        var jsonstring = JSON.stringify(spreadsheet.get_kendoWidget().toJSON());
        $get("<%= HiddenField1.ClientID %>").value = jsonstring;
    }
</script>

<asp:HiddenField ID="HiddenField1" runat="server" />

<telerik:RadButton runat="server" ID="RadButton1" Text="Postack to save Spreadsheet" AutoPostBack="true" OnClick="RadButton1_Click" OnClientClicked="OnClientClicked" />

<telerik:RadSpreadsheet runat="server" ID="RadSpreadsheet1"></telerik:RadSpreadsheet>
````

````C#
public SpreadsheetDocumentProvider SpreadsheetProvider { get; set; }

protected void Page_Init(object sender, EventArgs e)
{
    var path = Server.MapPath("~/App_Data/spreadsheet.xlsx");
    SpreadsheetProvider = new SpreadsheetDocumentProvider(path);

    var workbook = new Telerik.Web.Spreadsheet.Workbook();
    workbook.Sheets = SpreadsheetProvider.GetSheets();

    var json = workbook.ToJson();
    HiddenField1.Value = json;
    
    // do not set the provider to the Spreadsheet
    // it will be loaded client-side via the HiddenField's JSON 
    //RadSpreadsheet1.Provider = provider;
}

protected void RadButton1_Click(object sender, EventArgs e)
{
    var workbook = Telerik.Web.Spreadsheet.Workbook.FromJson(HiddenField1.Value);

    // calling the SaveWorkbook method of our provider
    // the same as pressing the 'save' toolbar button of the Spreadsheet
    SpreadsheetProvider.SaveWorkbook(workbook);

    // convert to Document Processing Library workbook if needed
    //var dplWorkbook = workbook.ToDocument();
}
````

## See Also

* [Understanding Telerik AJAX and Document Processing Library Spreadsheet Workbook and Worksheets](https://www.telerik.com/support/kb/aspnet-ajax/spreadsheet/details/understanding-telerik-ajax-and-document-processing-library-spreadsheet-workbook-and-worksheets)

* [Improve performance of slowly loading Spreadsheet](https://www.telerik.com/support/kb/aspnet-ajax/spreadsheet/details/improve-performance-of-slowly-loading-spreadsheet)

 
