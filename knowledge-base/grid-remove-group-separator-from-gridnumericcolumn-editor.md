---
title: Remove Group Separator from GridNumericColumnEditor in RadGrid
description: Remove Group Separator from GridNumericColumnEditor in RadGrid. Check it now!
type: how-to
page_title: Remove Group Separator from GridNumericColumnEditor in RadGrid
slug: grid-remove-group-separator-from-gridnumericcolumn-editor
res_type: kb
---

## How to

How can I remove the commas in a GridNumericColumn when I edit without using code-behind?  When I enter edit mode, the four digit item value contains a comma when it should contain no formatting.  For example, I have a year that should not contain a comma.  Is there a way to change the appearance in the editor?   
  

## Description


The GridNumericColumn uses a RadNumericTextBox as an editor which contains a [numeric format of "N"](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings#the-numeric-n-format-specifier) by default.  This causes the group separator to be commas in en-US culture.

## Solution

In order to change the appearance of a GridNumericColumn during edit mode, use a [GridNumericColumnEditor](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/GridNumericColumnEditor).  With this editor, the [numericTextBox](http://https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/GridNumericColumnEditor#properties-NumericTextBox) can be formatted to contain no separators with its [NumberFormat.GroupSeparator property](http://https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/NumberFormatSettings#properties-GroupSeparator).  Here are the steps to adjust the style of the editor:

 1. Add a [ColumnEditorID](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/GridNumericColumn#properties-ColumnEditorID) to a GridNumericColumn to reference the GridNumericColumnEditor.
 ````ASPX
 <telerik:GridNumericColumn DataField="MyYear" HeaderText="My Year" UniqueName="MyYear"  DataType="System.Int32" ColumnEditorID="NumericEditor1">
</telerik:GridNumericColumn>
 ````
 
 2. Create a GridNumericColumnEditor containing a NumericTextBox.   
 
 3. Set the [NumberFormat - GroupSeparator's](http://https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/NumberFormatSettings.html#properties-GroupSeparator) value as an empty string.

 ````ASPX
 <telerik:GridNumericColumnEditor ID="NumericEditor1" runat="server">
    <NumericTextBox runat="server">
        <NumberFormat GroupSeparator="" DecimalDigits="0" />
    </NumericTextBox>
</telerik:GridNumericColumnEditor>
 ````

## See Also

* [GridNumericColumn Column Type - Documentation]({%slug grid/columns/column-types%}#gridnumericcolumn)

* [Various Built-in Column Editors - Documentation]({%slug grid/how-to/data-editing/various-built-in-column-editors%})

