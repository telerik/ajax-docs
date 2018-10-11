---
title: HTML-Based Export
page_title: HTML-Based Export | RadGrid for ASP.NET AJAX Documentation
description: HTML-Based Export
slug: grid/functionality/exporting/export-formats/word-and-excel-export/html-based-export
tags: html-based,export
published: True
position: 0
---

# HTML-Based Export



**RadGrid** is able to export your data to **Word** and **Excel** using **HTML/CSS-based** format. It is not the native binary format used by *Microsoft Office* but it is a popular way to export data and it is also officially supported by **Microsoft**:

[Microsoft® Office HTML and XML Reference](http://msdn.microsoft.com/en-us/library/aa155477%28office.10%29.aspx)

## Styles / Appearance

Due to the fact that this format is based on standard **HTML/CSS** it is quite straightforward to control the appearance of the output by applying **CSS** tags/classes to the cells/rows/tables, etc.

## ExportCellFormating / ExcelExportCellFormatting events

In order to aid the developers, we exposed the **ExportCellFormatting** event. It fires for each cell in each *data item* in **RadGrid**.

>tip Please note that the **ExcelExportCellFormatting** event (Excel-specific) is marked as obsolete as from UI for ASP.NET AJAX Q1 2011.
>


There are two important members exposed by the **ExportCellFormattingEventArgs**:

* **Cell** - this is a reference to the current **TableCell**. You can use it to apply specific **CSS** style or to gain access to the **GridDataItem** object:



````C#
GridDataItem item = e.Cell.Parent as GridDataItem;
````
````VB
Dim item As GridDataItem = TryCast(e.Cell.Parent, GridDataItem)
````


* **FormattedColumn** - this property returns an object of type **GridColumn**. It helps to distinguish to which column the current cell belongs to.



````C#
GridColumn column = e.FormattedColumn as GridColumn;
string columnName = column.UniqueName;
````
````VB
Dim column As GridColumn = TryCast(e.FormattedColumn, GridColumn)
Dim columnName As String = column.UniqueName
````


## HTMLExporting event

The purpose of this event is to allow the developer to insert global styles (CSS) or configuration options (XML) to the exported file. A possible application for this event is to enable the grid lines for the current worksheet:



````C#
protected void RadGrid1_HTMLExporting(object sender, GridHTMLExportingEventArgs e)
{
    e.Styles.Append("body { border:solid 0.1pt #CCCCCC; }");
}
````
````VB
Protected Sub RadGrid1_HTMLExporting(ByVal sender As Object, ByVal e As GridHTMLExportingEventArgs) Handles RadGrid1.HTMLExporting
    e.Styles.Append("body { border:solid 0.1pt #CCCCCC; }")
End Sub
````


## Line Breaks

In case you need to use a line breaks when exporting to Excel or Word you can add **<br/>** tags in order to move the text onthe next line. Nevertheless this approach will move the text in a new cell in the next row rather than creating a line break within the current cell. To get around this you can add **mso-data-placement** style to the **<br/>** tags.



````C#
protected void RadGrid1_HTMLExporting(object sender, GridHTMLExportingEventArgs e)
{
    e.Styles.Append("br { mso-data-placement: same-cell; }");
}
````
````VB
Protected Sub RadGrid1_HTMLExporting(sender As Object, e As GridHTMLExportingEventArgs)
    e.Styles.Append("br { mso-data-placement: same-cell; }")
End Sub
````


## Styling rows/cells

Thanks to the **ExportCellFormatting** event it is really easy to apply custom styles to the rows/cells. The following code-snippet demonstrates how to style the alternating items:



````C#
protected void RadGrid1_ExportCellFormatting(object source, ExportCellFormattingEventArgs e)
{
    GridDataItem item = e.Cell.Parent as GridDataItem;
    if (item.ItemType == GridItemType.AlternatingItem)
        item.Style["background-color"] = "#359AFF";
    else
        item.Style["background-color"] = "#2D62FF";
}
````
````VB
Protected Sub RadGrid1_ExportCellFormatting(ByVal source As Object, ByVal e As ExportCellFormattingEventArgs) Handles RadGrid1.ExportCellFormatting
    Dim item As GridDataItem = TryCast(e.Cell.Parent, GridDataItem)
    If item.ItemType = GridItemType.AlternatingItem Then
        item.Style("background-color") = "#359AFF"
    Else
        item.Style("background-color") = "#2D62FF"
    End If
End Sub
````


Sometimes the developer needs to highlight the negative values (for example: -1, -5, -10.5) - this could be achieved in the same event handler:



````C#
protected void RadGrid1_ExportCellFormatting(object source, ExportCellFormattingEventArgs e)
{
    if (e.FormattedColumn.UniqueName == "MyColumn" && double.Parse(e.Cell.Text) < 0)
        e.Cell.Style["background-color"] = "#FA2020";
}
````
````VB	
Protected Sub RadGrid1_ExportCellFormatting(ByVal source As Object, ByVal e As ExportCellFormattingEventArgs) Handles RadGrid1.ExportCellFormatting
    If e.FormattedColumn.UniqueName = "MyColumn" AndAlso Double.Parse(e.Cell.Text) < 0 Then
        e.Cell.Style("background-color") = "#FA2020"
    End If
End Sub
````


## Using ItemCreated/ItemDataBound

These events are usable in different scenarios such as applying styles to items other than **GridDataItem**

They are not as convenient as the **ExportCellFormatting** event because the developer should use **flag** to distinguish whether the current item/cell is being exported or displayed.

Please keep in mind that if you don't use **IgnorePaging="true" RadGrid** will be exported directly and the **ItemCreated**/**ItemDataBound** events won't be fired.

>tip Since UI for ASP.NET AJAX Q3 2015 we have implement a new property named **IsExporting** which can be used instead of the old approach with a boolean flag. The property is accessible only from the server.
>

````C#
bool isExport = false; //Export flag 
protected void Button1_Click(object sender, EventArgs e)
{
    isExport = true;
    RadGrid1.MasterTableView.ExportToExcel();
}
protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
    if (e.Item is GridHeaderItem && isExport)
        e.Item.Style["background-color"] = "#EEAAEC";
}
````
````VB	
Private isExport As Boolean = False 'Export flagProtected
Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs) Handles Button1.Click
    isExport = True
    RadGrid1.MasterTableView.ExportToExcel()
End Sub
Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs) Handles RadGrid1.ItemCreated
    If TypeOf e.Item Is GridHeaderItem AndAlso isExport Then
        e.Item.Style("background-color") = "#EEAAEC"
    End If
End Sub
````


When **IgnorePaging="false"** you should rebind **RadGrid** manually, otherwise this approach won't work. The above code needs only one change - put **RadGrid1.Rebind()** after the point where you set the flag.

## XML Options

**XmlOptions** property allows you to set different options of the exported file.	The XML element contains one or more sub-elements. These include **DocumentProperties** which is valid for Word and Excel,	**WordDocument** which can be used when exporting to Word, and finally **ExcelWorkbook** which applies to Microsoft Excel.

Below you could find a list with the supported sub-elements of the **DocumentProperties**.


| DocumentProperties | Represents |
| ------ | ------ |
|\<o:Subject\> \</o:Subject\>|Left-aligned data|
|\<o:Author\> \</o:Author\>|String value specifying the author's name.|
|\<o:Keywords\> \</o:Keywords\>|Comma-separated string values listing the document’s keywords.|
|\<o:Description\> \</o:Description\>|Represents the document description.|
|\<o:LastAuthor\> \</o:LastAuthor\>|The account name of the last person who made changes to the file.|
|\<o:Category\> \</o:Category\>|The category of the document.|
|\<o:Manager\> \</o:Manager\>|Manager’s name.|
|\<o:Company\> \</o:Company\>|String value holding the name of the company.|

A list of supported Word properties could be found [here]({%slug grid/functionality/exporting/export-formats/word-and-excel-export/word-format-(html-based)%}).

A list of supported Excel properties could be found [here]({%slug grid/functionality/exporting/export-formats/word-and-excel-export/excel-format-(html-based)%}).

Example:



````C#
protected void RadGrid1_HTMLExporting(object sender, GridHTMLExportingEventArgs e)
{
    e.XmlOptions = @"<xml>
                        <o:DocumentProperties>
                          <o:Category>Reports</o:Category>
                          <o:Manager>Kate Dresen</o:Manager>
                          <o:Company>Adventure Works</o:Company>  
                        </o:DocumentProperties>
                     </xml>";
}
````
````VB
Protected Sub RadGrid1_HTMLExporting(sender As Object, e As GridHTMLExportingEventArgs)
    e.XmlOptions = "<xml><o:DocumentProperties><o:Category>Reports</o:Category><o:Manager>Kate Dresen</o:Manager><o:Company>Adventure Works</o:Company></o:DocumentProperties></xml>"
End Sub
````


## Hiding columns

You can use the **HideStructureColumns** property to hide *GridRowIndicatorColumn*, *GridExpandColumn* and *GridGroupSplitterColumn.* For the other columns types, you can use the following approach:



````C#
protected void Button1_Click(object sender, EventArgs e)
{
    RadGrid1.MasterTableView.GetColumn("C2").Visible = false;
    RadGrid1.MasterTableView.ExportToWord();
}
````
````VB
Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs) Handles Button1.Click
    RadGrid1.MasterTableView.GetColumn("C2").Visible = False
    RadGrid1.MasterTableView.ExportToWord()
End Sub
````


>tip From Q2 2013 we introduced a new property named **Exportable**. This property allows you to choose whether a certain column should be included in the exported file or not. By setting this property to **false** the related column will be excluded from the exported file. Its default value is true.
>


## Hiding items

There are two common ways to hide an item.

* **Directly** - in the button handler when exporting from a button or on **ItemCommand** when exporting from the built-in buttons



````C#
protected void RadGrid1_ItemCommand(object source, GridCommandEventArgs e)
{
    if (e.CommandName == RadGrid.ExportToWordCommandName)
        RadGrid1.MasterTableView.Items[2].Visible = false;
}
````
````VB
Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As GridCommandEventArgs) Handles RadGrid1.ItemCommand
    If e.CommandName = RadGrid.ExportToWordCommandName Then
        RadGrid1.MasterTableView.Items(2).Visible = False
    End If
End Sub
````




````C#
protected void Button1_Click(object sender, EventArgs e)
{
    RadGrid1.MasterTableView.Items[2].Visible = false;
    RadGrid1.MasterTableView.ExportToWord();
}
````
````VB	
Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs) Handles Button1.Click
    RadGrid1.MasterTableView.Items(2).Visible = False
    RadGrid1.MasterTableView.ExportToWord()
End Sub
````


* **On ItemCreated / ItemDataBound** - this approach should be used when **IgnorePaging="true"** or when you call RadGrid.Rebind before exporting.



````C#
bool isWordExport = false;
protected void RadGrid1_ItemCommand(object source, GridCommandEventArgs e)
{
    if (e.CommandName == RadGrid.ExportToWordCommandName)
        isWordExport = true;
}
protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
    if (isWordExport && e.Item.ItemIndex == 2)
        e.Item.Visible = false;
}
````
````VB
Private isWordExport As Boolean = False
Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As GridCommandEventArgs)
    If e.CommandName = RadGrid.ExportToWordCommandName Then
        isWordExport = True
    End If
End Sub
Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs)
    If isWordExport AndAlso e.Item.ItemIndex = 2 Then
        e.Item.Visible = False
    End If
End Sub
````

## Default Cell Alignment

You can specify a default alignment to all cells by using **DefaultCellAlignment**. This property is supported since **Q2 2015** and its default value is NotSet. Typical values include **Left**, **Right** and **Center**.

````ASP.NET    
<ExportSettings>
    <Excel DefaultCellAlignment="Center" />
</ExportSettings>
````

Additionally you can change the default alignment on **HtmlExporting** event.

## Resizing/Aligning Columns

There are various ways to set the width of a given column.

* declarative approach:

````ASP.NET    
<telerik:GridBoundColumn ... HeaderStyle-Width="20px" />	
````



* in code-behind - before export:



````C#
protected void Button1_Click(object sender, EventArgs e)
{
    RadGrid1.MasterTableView.GetColumn("C1").HeaderStyle.Width = Unit.Pixel(20);
    RadGrid1.MasterTableView.ExportToExcel();
}
````
````VB	
Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs) Handles Button1.Click
    RadGrid1.MasterTableView.GetColumn("C1").HeaderStyle.Width = Unit.Pixel(20)
    RadGrid1.MasterTableView.ExportToExcel()
End Sub
````


* in code-behind - on **TH** elements



````C#
protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
    if (e.Item is GridHeaderItem && isExport)
    {
        foreach (TableCell cell in e.Item.Cells)
            cell.Style["width"] = "20px";
    }
}
````
````VB
Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs) Handles RadGrid1.ItemCreated
    If TypeOf e.Item Is GridHeaderItem AndAlso isExport Then
        For Each cell As TableCell In e.Item.Cells
            cell.Style("width") = "20px"
        Next
    End If
End Sub
````


## Alignment

You can specify the horizontal alignment, using the **text-align CSS** attribute. Please note that it is not possible to apply this attribute to the whole header row - you should set it to each cell (**TH**) separately. The aforementioned limitation concerns only to the header items.

## Unsupported scenarios

There are several limitations that you should have in mind:

* embedded images are not supported

* exporting invisible **RadGrid** - to avoid problems with missing content, you should temporary show **RadGrid** before export

* **OpenOffice**, **AbiWord**, etc doesn't support this standard so they won't show the files properly

* in theory all **Microsoft Office** versions from **2000** up might work, although we don't guarantee that any version, prior to **2003** will display the **Office HTML** formats as expected
