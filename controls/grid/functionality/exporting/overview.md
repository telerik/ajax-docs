---
title: Overview
page_title: Exporting Overview - RadGrid
description: Exporting Overview
slug: grid/functionality/exporting/overview
tags: overview,exporting
published: True
position: 0
---

# Exporting Overview

The built-in export functionality of Telerik RadGrid can export your data to **PDF**, **CSV**, **Excel** and **Word** documents.

> - We strongly recommend that you use either [Programmatic Data Binding Using the NeedDataSource Event]({%slug grid/data-binding/server-side-binding/programmatic-databinding-using-needdatasource-event%}) or [Declarative DataSource]({%slug grid/data-binding/server-side-binding/declarative-datasource%}) when exporting the **RadGrid**.
> - The exporting works only when the **ViewState** is set to **True** (`default`). In case you are using an alternative way to persist the **ViewState**, such as storing it in a database or a session, you will receive an exception.

## Table of Contents

- [Supported Formats](#supported-formats)
- [Enable the Export Buttons](#enable-the-export-buttons)
  - [Displaying the built-in Export buttons](#displaying-the-built-in-export-buttons)
  - [Adding custom Export buttons to CommandItemTemplate](#adding-custom-export-buttons-to-commanditemtemplate)
- [ExportSettings](#exportsettings)
- [Export using the Grid's APIs](#export-using-the-grids-apis)
  - [Client-Side API](#client-side-api)
  - [Server-Side API](#server-side-api)
- [Application Scenarios](#application-scenarios)
  - [Export Large Amount of Data](#export-large-amount-of-data)
  - [Export with Custom Paging](#export-with-custom-paging)
  - [Export from AJAX-enabled RadGrid](#export-from-ajax-enabled-radgrid)
  - [Exporting Multiple RadGrids into a single Document](#exporting-multiple-radgrids-into-a-single-document)
  - [IgnorePaging for DetailTables](#ignorepaging-for-detailtables)
  - [Export Template Columns](#export-template-columns)
  - [Export in Web Farm](#export-in-web-farm)
- [Troubleshooting](#troubleshooting)
  - [Controls are not functional after exporting in SharePoint](#controls-are-not-functional-after-exporting-in-sharepoint)
  - [Internet Explorer cannot download 'file' from 'server'](#internet-explorer-cannot-download-file-from-server)
- [Limitations](#limitations)
- [Obsolete Methods](#obsolete-methods)

## Supported Formats

- **CSV** -  File format is a delimited text file that uses a comma to separate values. It is widely used to display simple tabular data [[Read more]({%slug grid/functionality/exporting/csv%})]
- **PDF** - Is a file format developed by Adobe to present documents, including text formatting and images, in a manner independent of application software, hardware, and operating systems. [[Read more]({%slug grid/functionality/exporting/pdf%})]
- **Excel**
  - **ExcelML** - XMLSS compliant XML-Based Format (.xls) [[Read more]({%slug grid/functionality/exporting/excel-export/excel-excelml%})]
  - **Biff** - Binary Excel Format (.xls) [[Read more]({%slug grid/functionality/exporting/excel-export/excel-biff%})]
  - **Html** `(default)` - HTML-Based Excel Format (.xls) [[Read more]({%slug grid/functionality/exporting/excel-export/excel-html%})]
  - **Xlsx** - Office Open XML (OOXML) Format (.xlsx) [[Read more]({%slug grid/functionality/exporting/excel-export/excel-xlsx%})]
- **Word**
  - **Html** `(default)` - HTML-Based Format (.doc) [[Read more]({%slug grid/functionality/exporting/word-export/word-html%})]
  - **Docx** - Office Open XML (OOXML) + Binary Format (.docx) [[Read more]({%slug grid/functionality/exporting/word-export/word-docx%})]

Since **Excel** and **Word** documents can be exported into multiple formats, to switch between the formats you can change the `Excel-Format` and `Word-Format` properties inside the `<ExportSettings>` element of RadGrid.

>caption Example

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server">
    <ExportSettings>
        <%-- Change the Excel Format to Xlsx --%>
        <Excel Format="Xlsx" />
        <%-- Change the Word Format to Docx --%>
        <Word Format="Docx" />
    </ExportSettings>
</telerik:RadGrid>
````

## Enable the Export Buttons

To enable the Export buttons, you will need to display the [CommandItem]({%slug grid/data-editing/commanditem/command-item-template%}#commanditem-overview) and there you can choose to display the built-in buttons or create/add custom buttons to the [CommandItemTemplate]({%slug grid/data-editing/commanditem/command-item-template%}).

### Displaying the built-in Export buttons

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server">
    <MasterTableView CommandItemDisplay="Top">
		<CommandItemSettings 
            ShowExportToCsvButton="true" 
            ShowExportToPdfButton="true" 
            ShowExportToExcelButton="true" 
            ShowExportToWordButton="true" />
    </MasterTableView>
</telerik:RadGrid>
````

### Adding custom Export buttons to CommandItemTemplate

Add a few buttons to the [CommandItemTemplate]({%slug grid/data-editing/commanditem/command-item-template%}) that will rely on the [Grid Commands]({%slug grid/control-lifecycle/how-to-fire-command-events%}) to trigger the Export

>caption Export Command Names

| **Export type** | **CommandName** | **Usage**                   |
|-----------------|-----------------|-----------------------------|
| Csv	    	  | ExportToCsv     | CommandName="ExportToCsv"   |
| Pdf 	    	  | ExportToPdf     | CommandName="ExportToPdf"   |
| Excel     	  | ExportToExcel   | CommandName="ExportToExcel" |
| Word 		      | ExportToWord    | CommandName="ExportToWord"  |

>caption Example CommandItemTemplate with Export Buttons

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server">
    <MasterTableView>
        <CommandItemTemplate>
            <telerik:RadButton runat="server" ID="RadButton1" Text="Export To CSV" AutoPostBack="true" CommandName="ExportToCsv" />
            <telerik:RadButton runat="server" ID="RadButton2" Text="Export To PDF" AutoPostBack="true" CommandName="ExportToPdf" />
            <telerik:RadButton runat="server" ID="RadButton3" Text="Export To Excel" AutoPostBack="true" CommandName="ExportToExcel" />
            <telerik:RadButton runat="server" ID="RadButton4" Text="Export To Word" AutoPostBack="true" CommandName="ExportToWord" />
        </CommandItemTemplate>
    </MasterTableView>
</telerik:RadGrid>
````

>note Buttons in the CommandItemTemplate can also use the Grid's APIs to Trigger the export, check out the [Export using the Grid's APIs](#export-using-the-grids-apis) section.


## ExportSettings

The **ExportSettings** group exposes several common properties that allows you to apply additional settings to the Export Behavior and Exported Documents.

### Properties

- **ExportOnlyData** — As the name says, this property is helpful when you want to export only the data - e.g. to exclude the controls from the exported file.
- **IgnorePaging** — When you enable *IgnorePaging*, *RadGrid* will rebind before export in order to fetch all the data from your data source.
- **OpenInNewWindow** — By default, the exported file will be handled by the program associated with the appropriate file type. If you prefer to give the user the option to choose whether to save, open (inline) or cancel you should enable this property.
	- The way the exported file will be displayed inline depends on the `Operating System`/`Browser` settings, therefore setting the **OpenInNewWindow** to `false` doesn't guarantee that the file will be opened inside the browser window. The end-user could manage the file extensions with programs like [NirSoft's FileTypesMan](http://www.nirsoft.net/utils/file_types_manager.html). For browsers, other than `Internet Explorer`, you should use the built-in settings.
- **FileName** — This is helpful when you want to give a predefined name for your file. 
  - the file name can't be longer than 256 symbols, otherwise it will throw the exception `<filename>.<extension> could not be found. Check the spelling of the file name, and verify that the file location is correct.`
  - `Unicode` names are not supported out-of-the-box for `Internet Explorer 6` and `7`. Of course, you can manually encode the file name (e.g. `HttpUtility.UrlEncode("unicode string", System.Text.Encoding.UTF8);`) and it will be shown properly in the `Save` dialog while the **OpenInNewWindow** is set to `true`
  - `Internet Explorer` ignores the **FileName** property when **OpenInNewWindow** is set to `false`
- **WorksheetName** — As of R1 2021, the Worksheet can be named using this property. This is helpful when you want to give a predefined name for the Excel sheet where the Grid's data will be populated. If empty, the **FileName** property's value will be used as a worksheet name. The restrictions for the name are the same as the one applicable to the Excel sheets. 
  - This property is only applicable for `Biff`, `ExcelML` and `Xlsx` Formats.
- **HideStructureColumns** — Removes the [GridRowIndicatorColumn]({%slug grid/columns/column-types%}#gridrowindicatorcolumn), [GridExpandColumn]({%slug grid/columns/column-types%}#gridexpandcolumn) as well as the first [GridGroupSplitterColumn]({%slug grid/columns/column-types%}#gridgroupsplittercolumn) columns that represent the Grid's structure. 
  - This property will affect only the first level in hierarchical *RadGrids*.
- **SuppressColumnDataFormatStrings** — This property will help avoid exporting already formatted values which would cause Microsoft Excel to treat them as string values.Enabling this functionality will result in rebinding the control before exporting. Note that even if both **IgnorePaging** and **SuppressColumnDataFormatStrings** are enabled, RadGrid will rebind only once.
- **UseItemStyles** — As the name says, this property gives you the ability to apply the item styles to the exported file.

## Export using the Grid's APIs

In addition to the built-in Export buttons, you can also instruct the Grid to export its content using either the Client-Side or the Server-Side APIs.

### Client-Side API

**Option 1**: Using the export functions

The MasterTableView Object, has its own functions for exporting the Grid.

>caption Export Functions

| **Export type** | **JavaScript Function** | **Usage**                   |
|-----------------|-------------------------|-----------------------------|
| Csv		      | exportToCsv()           | masterTable.exportToCsv()   | 
| Pdf 		      | exportToPdf()           | masterTable.exportToPdf()   |
| Excel 	      | exportToExcel()         | masterTable.exportToExcel() |
| Word 		      | exportToWord()          | masterTable.exportToWord()  |


>caption Example Export Buttons

````ASP.NET
<telerik:RadButton runat="server" ID="RadButton1" Text="Export To CSV" AutoPostBack="false" OnClientClicked="exportToCsv" />
<telerik:RadButton runat="server" ID="RadButton2" Text="Export To PDF" AutoPostBack="false" OnClientClicked="exportToPdf" />
<telerik:RadButton runat="server" ID="RadButton3" Text="Export To Excel" AutoPostBack="false" OnClientClicked="exportToExcel" />
<telerik:RadButton runat="server" ID="RadButton4" Text="Export To Word" AutoPostBack="false" OnClientClicked="exportToWord" />
````

>caption Example JavaScript

````JavaScript
<script>
    // Export to CSV
    function exportToCsv(sender, args) {
        var masterTable = $find('<%= RadGrid1.ClientID %>').get_masterTableView();
        masterTable.exportToCsv();
    }
    // Export to PDF
    function exportToPdf(sender, args) {
        var masterTable = $find('<%= RadGrid1.ClientID %>').get_masterTableView();
        masterTable.exportToPdf();
    }
    // Export to Excel
    function exportToExcel(sender, args) {
        var masterTable = $find('<%= RadGrid1.ClientID %>').get_masterTableView();
        masterTable.exportToExcel();
    }
    // Export to Word
    function exportToWord(sender, args) {
        var masterTable = $find('<%= RadGrid1.ClientID %>').get_masterTableView();
        masterTable.exportToWord();
    }
</script>
````

**Option 2**: Firing a Grid command

As you might already know, almost every action is performed by a command. Instead of calling the Export Functions, you can also instruct the Grid to export its content by calling the [fireCommand()]({%slug grid/client-side-programming/gridtableview-object/methods/firecommand%}) function with the respective command name as argument.

>caption Export Command Names

| **Export type** | **CommandName** | **Usage**                                     |
|-----------------|-----------------|-----------------------------------------------|
| Csv		      | ExportToCsv     | masterTable.fireCommand("ExportToCsv", "");   |
| Pdf 		      | ExportToPdf     | masterTable.fireCommand("ExportToPdf", "");   |
| Excel 	      | ExportToExcel   | masterTable.fireCommand("ExportToExcel", ""); |
| Word 		      | ExportToWord    | masterTable.fireCommand("ExportToWord", "");  |

This is useful especially if you'd like to use a single function to export the Grid instead of multiple functions.

>caption Example Buttons

````ASP.NET
<%-- Notice the CommandName of each Button --%>
<telerik:RadButton runat="server" ID="RadButton1" Text="Export To CSV" AutoPostBack="false" OnClientClicked="Export" CommandName="ExportToCsv" />
<telerik:RadButton runat="server" ID="RadButton2" Text="Export To PDF" AutoPostBack="false" OnClientClicked="Export" CommandName="ExportToPdf" />
<telerik:RadButton runat="server" ID="RadButton3" Text="Export To Excel" AutoPostBack="false" OnClientClicked="Export" CommandName="ExportToExcel" />
<telerik:RadButton runat="server" ID="RadButton4" Text="Export To Word" AutoPostBack="false" OnClientClicked="Export" CommandName="ExportToWord" />
````

>caption Example JavaScript function

````JavaScript
function Export(sender, args) {
    // The Clicked button
    var clickedButton = sender;
    // Get the Button's CommandName
    var commandName = clickedButton.get_commandName();
    // MasterTableView Object
    var masterTable = $find('<%= RadGrid1.ClientID %>').get_masterTableView();
    // call the fireCommand() function and pass the command name as argument
    masterTable.fireCommand(commandName, '');
}
````


### Server-Side API

Similar to the Client-Side APIs, the Server-Side APIs also have the options to instruct the Grid to export its content either by calling the Export functions or by Firing a Command.

**Option 1**: Using the Export Functions

The Export functions are part of the RadGrid object.

>caption Export Functions

| **Export type** | **C#/VB Function** | **Usage (assuming the Grid ID="RadGrid1")** |
|-----------------|--------------------|---------------------------------------------|
| Csv		      | ExportToCsv()      | RadGrid1.ExportToCsv()                      | 
| Pdf 		      | ExportToPdf()      | RadGrid1.ExportToPdf()                      |
| Excel 	      | ExportToExcel()    | RadGrid1.ExportToExcel()                    |
| Word 		      | ExportToWord()     | RadGrid1.ExportToWord()                     |

C# developers be sure to add a semi colon "**;**" to the end of the function :)

>caption Example Export Buttons

````ASP.NET
<telerik:RadButton runat="server" ID="RadButton1" Text="Export To CSV" AutoPostBack="true" OnClick="RadButton1_Click" />
<telerik:RadButton runat="server" ID="RadButton2" Text="Export To PDF" AutoPostBack="true" OnClick="RadButton2_Click"  />
<telerik:RadButton runat="server" ID="RadButton3" Text="Export To Excel" AutoPostBack="true"  OnClick="RadButton3_Click" />
<telerik:RadButton runat="server" ID="RadButton4" Text="Export To Word" AutoPostBack="true" OnClick="RadButton4_Click"  />
````

>caption Example C#/VB Functions

````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    RadGrid1.ExportToCsv();
}

protected void RadButton2_Click(object sender, EventArgs e)
{
    RadGrid1.ExportToPdf();
}

protected void RadButton3_Click(object sender, EventArgs e)
{
    RadGrid1.ExportToExcel();
}

protected void RadButton4_Click(object sender, EventArgs e)
{
    RadGrid1.ExportToWord();
}
````
````VB#
Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
	RadGrid1.ExportToCsv()
End Sub

Protected Sub RadButton2_Click(ByVal sender As Object, ByVal e As EventArgs)
	RadGrid1.ExportToPdf()
End Sub

Protected Sub RadButton3_Click(ByVal sender As Object, ByVal e As EventArgs)
	RadGrid1.ExportToExcel()
End Sub

Protected Sub RadButton4_Click(ByVal sender As Object, ByVal e As EventArgs)
	RadGrid1.ExportToWord()
End Sub
````

**Options 2**: Firing a Grid command

The server equivalent for firing commands is the [FireCommandEvent()]({%slug grid/control-lifecycle/how-to-fire-command-events%}) function which is in fact part of the GridItem Class. With that in mind, you will need to access at least one of the Grid's item to call this method.

>caption Export Command Names

| **Export type** | **CommandName** | **Usage (assuming the Grid ID="RadGrid1")**      |
|-----------------|-----------------|--------------------------------------------------|
| Csv		      | ExportToCsv     | myGridItem.FireCommandEvent("ExportToCsv", "")   |
| Pdf 		      | ExportToPdf     | myGridItem.FireCommandEvent("ExportToPdf", "")   |
| Excel 	      | ExportToExcel   | myGridItem.FireCommandEvent("ExportToExcel", "") |
| Word 		      | ExportToWord    | myGridItem.FireCommandEvent("ExportToWord", "")  |

C# developers be sure to add a semi colon "**;**" to the end of the function :)

This is useful especially if you'd like to use a single function to export the Grid instead of multiple functions.

>caption Example Buttons

````ASP.NET
<%-- Notice the OnClick and CommandName of each Button --%>
<telerik:RadButton runat="server" ID="RadButton1" Text="Export To CSV" AutoPostBack="true" OnClick="Export" CommandName="ExportToCsv" />
<telerik:RadButton runat="server" ID="RadButton2" Text="Export To PDF" AutoPostBack="true" OnClick="Export" CommandName="ExportToPdf" />
<telerik:RadButton runat="server" ID="RadButton3" Text="Export To Excel" AutoPostBack="true" OnClick="Export" CommandName="ExportToExcel" />
<telerik:RadButton runat="server" ID="RadButton4" Text="Export To Word" AutoPostBack="true" OnClick="Export" CommandName="ExportToWord" />
````

>caption Example C#/VB function

````C#
protected void Export(object sender, EventArgs e)
{
    var button = (RadButton)sender;

    var commandName = button.CommandName;

    GridItem myGridItem = null;

    if (RadGrid1.MasterTableView.CommandItemDisplay != GridCommandItemDisplay.None)
        myGridItem = RadGrid1.MasterTableView.GetItems(GridItemType.CommandItem).FirstOrDefault();
    else if(RadGrid1.ShowHeader)
        myGridItem = RadGrid1.MasterTableView.GetItems(GridItemType.Header).FirstOrDefault();
    else if (RadGrid1.ShowFooter)
        myGridItem = RadGrid1.MasterTableView.GetItems(GridItemType.Footer).FirstOrDefault();
    else if (RadGrid1.Items.Count > 0)
        myGridItem = RadGrid1.Items[0];

    myGridItem.FireCommandEvent(commandName, "");
}
````
````VB
Protected Sub Export(ByVal sender As Object, ByVal e As EventArgs)
    Dim button = CType(sender, RadButton)
    Dim commandName = button.CommandName
    Dim myGridItem As GridItem = Nothing

    If RadGrid1.MasterTableView.CommandItemDisplay <> GridCommandItemDisplay.None Then
        myGridItem = RadGrid1.MasterTableView.GetItems(GridItemType.CommandItem).FirstOrDefault()
    ElseIf RadGrid1.ShowHeader Then
        myGridItem = RadGrid1.MasterTableView.GetItems(GridItemType.Header).FirstOrDefault()
    ElseIf RadGrid1.ShowFooter Then
        myGridItem = RadGrid1.MasterTableView.GetItems(GridItemType.Footer).FirstOrDefault()
    ElseIf RadGrid1.Items.Count > 0 Then
        myGridItem = RadGrid1.Items(0)
    End If

    myGridItem.FireCommandEvent(commandName, "")
End Sub
````

## Application Scenarios 

This section lists solutions for a few commonly used scenarios

- [Export Large Amount of Data](#export-large-amount-of-data)
- [Export with Custom Paging](#export-with-custom-paging)
- [Export from AJAX-enabled RadGrid](#export-from-ajax-enabled-radgrid)
- [Exporting Multiple RadGrids into a single Document](#exporting-multiple-radgrids-into-a-single-document)
- [IgnorePaging for DetailTables](#ignorepaging-for-detailtables)
- [Export Template Columns](#export-template-columns)
- [Export in Web Farm](#export-in-web-farm)


### Export Large Amount of Data


>important As RadGrid being a sophisticated control, it runs large amount of code for taking care of everything, therefore, we strongly recommend that you do not to use RadGrid to export large amounts of data as it will result in exceptions such as **Timeout** or **OutOfMemory**.

This behavior is common when more than one user tries to export the same data simultaneously. 

**RadGrid** is not suitable for such scenarios and therefore we suggest that you limit the number of columns and rows that will be exported. 

Also it is important to note that the hierarchy and the nested controls have a considerable effect on the performance in this scenario.

>caption Workaround
- Export the large amount of data using a Library, see [Export large amount of data to PDF, XLSX and CSV using the Telerik Document Processing libraries]({%slug common-export-large-amount-of-data-to-pdf-xlsx-and-csv-using-the-telerik-document-processing-libraries%})


### Export with Custom Paging

When you have custom paging enabled for your grid, you need to set the *PageSize* property of the grid to be equal to the *VirtualItemCount* in order to export all records successfully with *IgnorePaging* set to *true*. 

>caption Example

````C#
protected void Button1_Click(object sender, EventArgs e)
{
    RadGrid1.PageSize = RadGrid1.MasterTableView.VirtualItemCount;
    RadGrid1.ExportSettings.IgnorePaging = true;
    RadGrid1.ExportSettings.OpenInNewWindow = true;
    RadGrid1.MasterTableView.ExportToExcel();
}
````
````VB
Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
    RadGrid1.PageSize = RadGrid1.MasterTableView.VirtualItemCount
    RadGrid1.ExportSettings.IgnorePaging = True
    RadGrid1.ExportSettings.OpenInNewWindow = True
    RadGrid1.MasterTableView.ExportToExcel()
End Sub
````

### Export from AJAX-enabled RadGrid

The exporting feature works only with regular PostBack. This means, that the asynchronous PostBack should be canceled when performing an export. As of Q1 2016, the default built-in export buttons perform full PostBacks, so it is not needed to manually exclude them from AJAX, even the RadGrid control is AJAX-enabled, in order to perform export with them.

More details on manually canceling the Asynchronous PostBack can be found in following articles: 

- [Export from ajaxified grid]({%slug grid/how-to/exporting/what-you-should-have-in-mind/export-from-ajaxified-grid%})
- [Exclude controls from ajaxifying]({%slug ajaxmanager/how-to/exclude-controls-from-ajaxifying%})
- [Export RadGrid content to Excel/Word/CSV/PDF with Ajax enabled](https://www.telerik.com/community/code-library/aspnet-ajax/general/export-radgrid-content-to-excel-word-csv-pdf-with-ajax-enabled.aspx)

### Exporting Multiple RadGrids into a single Document

As this functionality is not included out of the box, additional implementation is required.

The following code-library project demonstrates how to export multiple RadGrids into a single **PDF**/**HTML-Based (xls) Excel** document: [Export multiple RadGrids in single PDF/Excel file](https://www.telerik.com/support/code-library/export-multiple-radgrids-in-single-pdf-excel-file)

### IgnorePaging for DetailTables

`<ExportSettings IgnorePaging="true">` will only apply for the Main table (MasterTable) in a Hierarchical RadGrid. To export all data from the child tables (DetailTables), you will need to access the DetailTables and disable their Paging manually. 

You can do this in the [ItemCommand event]({%slug grid/server-side-programming/events/itemcommand%}) of the Grid.

>caption Example

````C#
protected void RadGrid1_ItemCommand(object sender, GridCommandEventArgs e)
{
	if (e.CommandName.Contains("Export"))
	{
		//disable paging on the main grid for the export operation
		RadGrid1.ExportSettings.IgnorePaging = false;
		//expand detail tables
		RadGrid1.MasterTableView.HierarchyDefaultExpanded = true;
		RadGrid1.MasterTableView.DetailTables[0].HierarchyDefaultExpanded = true;
		foreach (GridTableView tbl in RadGrid1.MasterTableView.DetailTables)
		{
			tbl.HierarchyDefaultExpanded = true;
			//disable paging for the detail grids for the export operation
			tbl.AllowPaging = false;
		}
	}
}
````
````VB
Protected Sub RadGrid1_ItemCommand(sender As Object, e As GridCommandEventArgs) Handles RadGrid1.ItemCommand
	If e.CommandName.Contains("Export") Then
		'disable paging on the main grid for the export operation
		RadGrid1.ExportSettings.IgnorePaging = False
		'expand detail tables
		RadGrid1.MasterTableView.HierarchyDefaultExpanded = True
		RadGrid1.MasterTableView.DetailTables(0).HierarchyDefaultExpanded = True
		For Each tbl As GridTableView In RadGrid1.MasterTableView.DetailTables
			tbl.HierarchyDefaultExpanded = True
			'disable paging for the detail grids for the export operation
			tbl.AllowPaging = False
		Next
	End If
End Sub
````

### Export Template Columns

Exporting usually contains only data. This applies mostly to Excel/CSV export. Template columns can contain arbitrary HTML and controls, and may not get exported as expected. In such case, the developer must set ExportOnlyData="false" inside the ExportSettings inner tag as well as provide `Text` for the cell when exporting the grid. For example:

````C#
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
	//generate text for the template columns for the export
	
	if (RadGrid1.IsExporting) { //check if grid is exporting
		foreach (GridDataItem item in RadGrid1.Items) { //loop through the grid items
			GenerateText(ref item); //generate text for each template column
		}
	}
}

protected void GenerateText(GridDataItem gridItem)
{
    // you can use gridItem["columnUniqueName"].FindControl() to access child controls if needed, however, 
    // controls will only be available if ExportOnlyData property is set to false. (`ExportOnlyData="False"`)

    // Get the data from the DataItem instead
    // DataItem object is DataRow is binding data using DataTables
    gridItem["myTemplateColumn"].Text = ((gridItem.DataItem as DataRowView).Row as DataRow)["DataSourceField"].ToString();

    // When binding to custom Object, DataItem object will be the Object type that is bound to Grid
    gridItem["myTemplateColumn"].Text = gridItem.DataItem.ObjectProperty;

    //generate a string for Excel here, according to the concrete business logic
    //and according to the Excel rules (e.g., special new line characters, simple strings without HTML, etc.)
}
````
````VB
Protected Sub RadGrid1_PreRender(sender As Object, e As EventArgs) Handles RadGrid1.PreRender
	'generate text for the template columns for the export

	If RadGrid1.IsExporting Then 'check if grid is exporting
		For Each item As GridDataItem In RadGrid1.Items 'loop through the grid items
			GenerateText(item) 'generate text for each template column
		Next
	End If
End Sub

Protected Sub GenerateText(ByVal gridItem As GridDataItem)
    'you can use gridItem("columnUniqueName").FindControl() to access child controls if needed, however, 
    'controls will only be available if ExportOnlyData property is set to false. (`ExportOnlyData="False"`)
    
    'Get the data from the DataItem instead
    'DataItem object is DataRow is binding data using DataTables    
    gridItem("myTemplateColumn").Text = TryCast(TryCast(gridItem.DataItem, DataRowView).Row, DataRow)("DataSourceField").ToString()
    
    'When binding to custom Object, DataItem object will be the Object type that is bound to Grid
    gridItem("myTemplateColumn").Text = gridItem.DataItem.ObjectProperty
    
    'generate a string for Excel here, according to the concrete business logic
    'and according to the Excel rules (e.g., special new line characters, simple strings without HTML, etc.)    
End Sub
````

### Export in Web Farm

If you receive "Invalid ViewState" or similar exception in web farm scenario, you can try to copy the *machinekey* from your *web.config* to the *machine.config* of the web server.


## Troubleshooting

### Controls are not functional after exporting in SharePoint

If you experience that Controls are not longer functional after Exporting the Grid to Excel or PDF from a Sharepoint Application, that is because of a Special flag (`_spFormOnSubmitCalled`) in **SharePoint** that prevents the form from being submitted twice. (`observed in SharePoint 2010`)
The flag is set when the form is submitted and then cleared when the response is received. The exporting functionality clears the response, hence loosing the flag and due to that SharePoint will not allow further PostBacks.

>caption Workaround

Add the following script to your Visual Web Part, Custom UserControlPage where the exporting happens

````JavaScript
<script type="text/javascript" language="javascript">
    //sharepoint postback to work after clicking on telerik export to pdf
    if (typeof (_spBodyOnLoadFunctionNames) != 'undefined' && _spBodyOnLoadFunctionNames != null) {
        _spBodyOnLoadFunctionNames.push("supressSubmitWraper");
    }

    function supressSubmitWraper() {
        _spSuppressFormOnSubmitWrapper = true;
    }
</script>
````

For more details and additional workarounds about this SharePoint flag, you can check out the [Controls not functional after Export to Excel or Export to PDF of Telerik in Sharepoint Application page](http://faisal.azmza.com/post/Controls-not-functional-after-Export-to-Excel-or-Export-to-PDF-of-Telerik-in-Sharepoint-Application-page.aspx) blog post.


### Internet Explorer cannot download 'file' from 'server'

Internet Explorer may give the following error message if exporting over SSL: `Internet Explorer cannot download 'file' from  'server'. Internet Explorer was not able to open this Internet site. The requested site is either unavailable or cannot be found. Please try again later.`

In order to prevent this error, add the following lines just before the exporting:

````C#
RadGrid1.Page.Response.ClearHeaders();
RadGrid1.Page.Response.Cache.SetCacheability(HttpCacheability.Private);
````
````VB
RadGrid1.Page.Response.ClearHeaders()
RadGrid1.Page.Response.Cache.SetCacheability(HttpCacheability.[Private])
````

## Limitations

- **Client-Side data binding**: Exporting is a Server-Side functionality which iterates through the Grid Items and Columns to build the document for exporting. If the data is bound to the Grid on client-side, this information will not available on the server, hence returning an empty document. If this is crucial to your business, you may try the [Kendo UI Grid](https://demos.telerik.com/kendo-ui/grid/index) which is a client-side (jQuery) widget and can export the content on client, see [Export to Excel](https://demos.telerik.com/kendo-ui/grid/excel-export), [Export to PDF](https://demos.telerik.com/kendo-ui/grid/pdf-export) and [Selection & Export](https://demos.telerik.com/kendo-ui/grid/selection-export).
- **Exporting invisible RadGrid.** - RadGrid with Visible="False" cannot be exported.
- [**CSV** - Limitations]({%slug grid/functionality/exporting/csv%}#limitations)
- [**PDF** - Limitations]({%slug grid/functionality/exporting/pdf%}#limitations)
- [**Excel-ExcelML** - Limitations]({%slug grid/functionality/exporting/excel-export/excel-excelml%}#limitations)
- [**Excel-Biff** - Limitations]({%slug grid/functionality/exporting/excel-export/excel-biff%}#limitations)
- [**Excel-Html** - Limitations]({%slug grid/functionality/exporting/excel-export/excel-html%}#limitations)
- [**Excel-Xlsx** - Limitations]({%slug grid/functionality/exporting/excel-export/excel-xlsx%}#limitations)
- [**Word-Html** - Limitations]({%slug grid/functionality/exporting/word-export/word-html%}#limitations)
- [**Word-Docx** - Limitations]({%slug grid/functionality/exporting/word-export/word-docx%}#limitations)

## Obsolete Methods

The following methods are marked as obsolete as of *RadGrid* v4.6 (part of *UI for ASP.NET.AJAX*)

- server-side
  - `ExportToWord(fileName, dataOnly, ignorePaging)`
  - `ExportToExcel(fileName, dataOnly, ignorePaging)`
  - `ExportToWord2007(fileName, dataOnly, ignorePaging)`
  - `ExportToExcel2007(fileName, dataOnly, ignorePaging)`
- client-side
  - `ExportToWord(fileName)`
  - `ExportToExcel(fileName)`

## See Also
- [Word/CSV Export - Demo](https://demos.telerik.com/aspnet-ajax/grid/examples/functionality/exporting/export-word-csv/defaultcs.aspx)
- [Export to Excel - Demo](https://demos.telerik.com/aspnet-ajax/grid/examples/functionality/exporting/excel-export/defaultcs.aspx)
- [Export to PDF - Demo](https://demos.telerik.com/aspnet-ajax/grid/examples/functionality/exporting/pdf-export/defaultcs.aspx)
 
