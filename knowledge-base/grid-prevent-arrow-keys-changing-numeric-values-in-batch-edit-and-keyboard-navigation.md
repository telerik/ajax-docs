---
title: Prevent arrow keys changing numeric values in Batch Edit and Keyboard Navigation
description: Prevent arrow keys changing numeric values in Batch Edit and Keyboard Navigation
type: how-to
page_title: Prevent arrow keys changing numeric values in Batch Edit and Keyboard Navigation - RadGrid
slug: grid-prevent-arrow-keys-changing-numeric-values-in-batch-edit-and-keyboard-navigation
res_type: kb
---


## Description

The increment settings of RadNumericTextBox are enabled by default for better convenience when operating with the input control. You can access the control and disable the arrow navigation of the numbox itself using the approach demonstrated in the following section:

[http://docs.telerik.com/devtools/aspnet-ajax/controls/grid/rows/accessing-cells-and-rows#accessing-controls-in-batch-edit-mode](http://docs.telerik.com/devtools/aspnet-ajax/controls/grid/rows/accessing-cells-and-rows#accessing-controls-in-batch-edit-mode)

## Solution
  
To resolve that, you can use the PreRender event of the Grid to disable intercepting user events in the Numeric TextBox.


````XML
<telerik:RadGrid ID="RadGrid1" runat="server" OnPreRender="RadGrid1_PreRender">
````

The PreRender event handler

````C#
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
    GridTableView masterTable = ((RadGrid)sender).MasterTableView;
    GridNumericColumnEditor editor = masterTable.GetBatchColumnEditor("Freight") as GridNumericColumnEditor;
    RadNumericTextBox numBox = editor.NumericTextBox;
    numBox.IncrementSettings.InterceptArrowKeys = false;
    numBox.IncrementSettings.InterceptMouseWheel = false;
}
```` 

An alternative solution would be to use an external custom editor:  

````XML
<telerik:GridNumericColumnEditor runat="server" ID="NumBoxEditor1">
    <NumericTextBox runat="server">
        <IncrementSettings InterceptArrowKeys="false" InterceptMouseWheel="false" />
    </NumericTextBox>
</telerik:GridNumericColumnEditor>
````

And then set it in the column definition:

````XML
<telerik:GridNumericColumn ... ColumnEditorID="NumBoxEditor1">
````

 