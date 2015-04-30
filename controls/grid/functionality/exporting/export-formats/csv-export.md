---
title: CSV Export
page_title: CSV Export | RadGrid for ASP.NET AJAX Documentation
description: CSV Export
slug: grid/functionality/exporting/export-formats/csv-export
tags: csv,export
published: True
position: 0
---

# CSV Export



## General information

*CSV* format is based on a plain text - it is widely used to display simple tabular data.Due to its simplicity and portability, it can be seen in various platforms - web, desktop, mobile, embedded, etc.

By default, *RadGrid's ** CSV* engine encloses all the data within double quotes to allow the usage of commas, new lines and so on.

>note  **GridExporting** event allows the developer to change the generated file directly.This approach could be used to achieve some custom functionality that is not supported out of the box.For example you can use it to add header text to the output and then save it to *TXT* format(since it won't be valid *CSV* anymore).
>


## 

>note Depending on your local settings, the default column separator might be a **comma** or a **semicolon** . **Excel** won't be able to properly separate the columns when thecolumn separator is not valid for the current culture.
>


## 

>note Note, that if you set **ExportOnlyData="true"** , the contents (text) of all template columns will beremoved but the columns will be still visible in the exported file.
>


## CSV specific settings

*RadGrid* exposes the following properties for customizing the output:


|  **Name**  |  **Options**  |  **Description**  |
| ------ | ------ | ------ |
|ColumnDelimiter|Colon, Comma, NewLine, Semicolon, Tab, VerticalBar|Used to specify the column delimiter|
|RowDelimiter|Colon, Comma, NewLine, Semicolon, Tab, VerticalBar|Used to specify the row delimiter|
|FileExtension|File extension string|Useful when the developer wishes to change the file extension. Since the *CSV* format is text-based,it is often saved as *TXT* instead of *CSV* |
|EncloseDataWithQuotes|True/False|Determines whether the exported values are enclosed with quotes.|

## 

````ASP.NET
<ExportSettings>    
    <Csv ColumnDelimiter="Tab" RowDelimiter="NewLine" FileExtension="TXT" EncloseDataWithQuotes="true" />
</ExportSettings>
````



## 

>note  **Microsoft Excel** parses the cell values automatically depending on the local settings.For example the string **19/05** might change to **19.May** automatically.The only workaround would be to insert a sign of equality ( **=** ) before the relevant string.For example: **"012"** should be modified as **="012"** .
>


## Encoding support

**UI for ASP.NET AJAX Q2 2009 SP1** and later fully supports *Unicode*symbols in both *left-to-right* and *right-to-left *modes.*RadGrid* automatically saves the file in**UTF-8** encoding.

>note If you open the **CSV** file in some editors, you will notice some strange characters at the beginning.This is[BOM (Byte Order Mark)](http://en.wikipedia.org/wiki/Byte_order_mark)header - it marks the file content as **Unicode** .These characters wouldn't be visible under normal circumstances.
>


Since **UI for ASP.NET AJAX Q3 2014 SP1** version, you are able to change the default encoding of the **CSV** format.The property that allows you to change the encoding is named **Encoding** and has the following predefined values.

* **Utf8** (default)

* **Ascii** (US ASCII)

* **Default** (system default (ANSI); depends on the regional settings of the OS)

* **Windows1252** (Western European encoding)

* **Unicode** (UTF16 little endian)

* **Utf7**

* **Utf32** (UTF32 little endian)

Along with **Encoding** property we introduce a possibility to disable the **BOM (Byte Order Mark)** header by setting **EnableBomHeader**. This property is of type boolean and accepts **True** (Default) and **False**values. You can find more information about **BOM** header in the following [article](http://en.wikipedia.org/wiki/Byte_order_mark).

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server">
    <MasterTableView CommandItemDisplay="Top">
        <CommandItemSettings ShowExportToCsvButton="true" />
    </MasterTableView>
    <ExportSettings>
        <Csv EnableBomHeader="true" Encoding="Unicode" />
    </ExportSettings>
</telerik:RadGrid>
````



## Common scenarios

## Exporting unsupported controls

Since *CSV* is text-based format it doesn't support images or complex structures like tables.It is possible to replace such content manually by removing the unwanted objects before exporting or on **ItemDataBound**/**ItemCreated** events:



````ASP.NET
<telerik:GridTemplateColumn UniqueName="MyColumn" HeaderText="MyColumn">
    <ItemTemplate>
        <asp:Image ID="Image1" runat="server" ImageUrl="~/img.png" AlternateText="AltText" />
    </ItemTemplate>
</telerik:GridTemplateColumn>
````
````C#	
protected void Button1_Click(object sender, EventArgs e)
{
    foreach (GridDataItem item in RadGrid1.MasterTableView.Items)
    {
        Image img = item["MyColumn"].FindControl("Image1") as Image;
        item["MyColumn"].Text = img.AlternateText;
    }
    RadGrid1.MasterTableView.ExportToCSV();
}
````
````VB
Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs) Handles Button1.Click
    For Each item As GridDataItem In RadGrid1.MasterTableView.Items
        Dim img As Image = TryCast(item("MyColumn").FindControl("Image1"), Image)
        item("MyColumn").Text = img.AlternateText
    Next
    RadGrid1.MasterTableView.ExportToCSV()
End Sub
````


This approach won't work if your **RadGrid**rebinds before export. In such cases (for instance, whenusing **IgnorePaging="true"**) the developer should put the code on **ItemCreated**/**ItemDataBound**:



````C#
bool isExport = false;
protected void Button1_Click(object sender, EventArgs e)
{
    isExport = true;
    RadGrid1.MasterTableView.ExportToCSV();
}
protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
    if (e.Item is GridDataItem && isExport)
    {
        TableCell cell = (e.Item as GridDataItem)["myColumn"];
        Image img = cell.FindControl("Image1") as Image;
        cell.Text = img.AlternateText;
    }
}
````
````VB
Private isExport As Boolean = FalseProtected
Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs) Handles Button1.Click
    isExport = True
    RadGrid1.MasterTableView.ExportToCSV()
End Sub
Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs) Handles RadGrid1.ItemCreated
    If TypeOf e.Item Is GridDataItem AndAlso isExport Then
        Dim cell As TableCell = (TryCast(e.Item, GridDataItem))("myColumn")
        Dim img As Image = TryCast(cell.FindControl("Image1"), Image)
        cell.Text = img.AlternateText
    End If
End Sub
````


>note Note that you don't need to set **isExport="false"** explicitly because the changes we perform will affectonly the response streamed to the client. In other words, the user won't see any change to the actual page.
>


## Exporting the selected rows only

You can hide the unselected rows and export the rest in a manner similar to the example above. This approach is applicable alsofor *HTML Excel/Word* and *PDF.*



````C#
protected void Button1_Click(object sender, EventArgs e)
{
    foreach (GridDataItem item in RadGrid1.MasterTableView.Items)
        item.Visible = item.Selected;
    RadGrid1.MasterTableView.ExportToCSV();
}
````
````VB
Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs) Handles Button1.Click
    For Each item As GridDataItem In RadGrid1.MasterTableView.Items
        item.Visible = item.Selected
    Next RadGrid1.MasterTableView.ExportToCSV()
End Sub
````


## Hiding columns

You can use the **HideStructureColumns** property to hide *GridRowIndicatorColumn*, *GridExpandColumn* and *GridGroupSplitterColumn.* For the other columns types,you can use the following approach:



````C#	
protected void Button1_Click(object sender, EventArgs e)
{
    RadGrid1.MasterTableView.GetColumn("C2").Visible = false;
    RadGrid1.MasterTableView.ExportToCSV();
}
````
````VB
Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs) Handles Button1.Click
    RadGrid1.MasterTableView.GetColumn("C2").Visible = False
    RadGrid1.MasterTableView.ExportToCSV()
End Sub
````


>note From Q2 2013 we introduced a new propery named **Exportable** . This property allows you tochoose whether a certain column should be included in the exported file or not. By setting this property to **false** the related column will be excluded from the exported file. Its default value is true.
>


## Hiding items

There are two common ways to hide an item.

* **Directly** - in the button handler when exporting from a button or on **ItemCommand** when exporting from the built-in buttons



````C#	
protected void RadGrid1_ItemCommand(object source, GridCommandEventArgs e)
{
    if (e.CommandName == RadGrid.ExportToCsvCommandName)
        RadGrid1.MasterTableView.Items[2].Visible = false;
}
````
````VB
Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As GridCommandEventArgs) Handles RadGrid1.ItemCommand
    If e.CommandName = RadGrid.ExportToCsvCommandName Then
        RadGrid1.MasterTableView.Items(2).Visible = False
    End If
End Sub
````




````C#
protected void Button1_Click(object sender, EventArgs e)
{
    RadGrid1.MasterTableView.Items[2].Visible = false;
    RadGrid1.MasterTableView.ExportToCSV();
}
````
````VB
Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs) Handles Button1.Click
    RadGrid1.MasterTableView.Items(2).Visible = False
    RadGrid1.MasterTableView.ExportToCSV()
End Sub
````


* **On ItemCreated / ItemDataBound** - this approach should be used when **IgnorePaging="true"** or when you call RadGrid.Rebind before exporting.



````C#	
bool isCsvExport = false;
protected void RadGrid1_ItemCommand(object source, GridCommandEventArgs e)
{
    if (e.CommandName == RadGrid.ExportToCsvCommandName)
        isCsvExport = true;
}
protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
    if (isCsvExport && e.Item.ItemIndex == 2)
        e.Item.Display = false;
}
````
````VB
Private isCsvExport As Boolean = FalseProtected
Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As GridCommandEventArgs)

    If e.CommandName = RadGrid.ExportToCsvCommandName Then
        isCsvExport = True
    End If
End Sub
Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs)
    If isCsvExport AndAlso e.Item.ItemIndex = 2 Then
        e.Item.Display = False
    End If
End Sub
````


## CSV Export Q & A

Q: Can I export content from **GridTemplateColumn**?

A: Yes, as long as it contain a binding expression or regular **Label** control and **ExportOnlyData** is set to "**false**".

Q: How to export **GridCheckBoxColumn**?

A: You have to set **ExportOnlyData** to "**false**"

## Unsupported scenarios

* Hierarchical structure

* Grouping

* Exporting invisible **RadGrid**
