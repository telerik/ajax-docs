---
title: How to prevent UP/DOWN keys from changing values in a GridNumericColumn editor
description: How to prevent UP/DOWN keys from changing values in a GridNumericColumn editor in RadGrid?
type: how-to
page_title: Prevent Up/Down keys value change of numeric editor in RadGrid
slug: how-to-prevent-up-down-keys-from-changing-values-in-a-gridnumericcolumn-editor
position: 
tags: RadGrid
res_type: kb
---

## Description

How do I prevent the UP and DOWN arrows from changing the values while editing a GridNumericColumn in a RadGrid?

## Solution

The GridNumericColumn implements a NumericTextBox when editing. The default behavior of the RadNumericTextBox is to increment or decrement values when the UP/DOWN arrow keys are pressed. To change that behavior, an [External Column Editor]({%slug grid/data-editing/grid-editors/custom-editors-extending-auto-generated-editors%}) can be used to provide additional configuration options.

The code below demonstrates how to configure an external column editor, and how to disable the UP/DOWN key behavior.

````ASPX
<telerik:RadGrid ID="RadGrid1" runat="server" OnNeedDataSource="RadGrid1_NeedDataSource" AutoGenerateColumns="false">
    <MasterTableView EditMode="Batch">
        <Columns>
            <telerik:GridBoundColumn DataField="ID" />
            <telerik:GridNumericColumn DataField="Value" ColumnEditorID="NumericEditor" />
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
  
<telerik:GridNumericColumnEditor runat="server" ID="NumericEditor">
    <NumericTextBox runat="server" IncrementSettings-InterceptArrowKeys="false"></NumericTextBox>
</telerik:GridNumericColumnEditor>
````

## See Also

* [Custom Editors Extending Auto-Generated Editors]({%slug grid/data-editing/grid-editors/custom-editors-extending-auto-generated-editors%})


