---
title: Update Calculated Columns Client-side
page_title: Update Calculated Columns Client-side | RadGrid for ASP.NET AJAX Documentation
description: Update Calculated Columns Client-side
slug: grid/data-editing/edit-mode/batch-editing/how-to/update-calculated-column-client-side
tags: update,calculated,columns,client-side
published: True
position: 1
---


# Update Calculated Columns Client-side


When using **GridCalculatedColumns** the calculated value is based on the values in the data source. When editing cells in Batch Edit mode the modifications are initially performed only on the client. Thus, the calculated field will be updated after the changes are saved.

The following sample illustrates how you can use JavaScript to update the calculated value immediately after the user makes a modification.


````ASP.NET
<telerik:RadGrid runat="server" ID="RadGrid1"
    OnNeedDataSource="RadGrid1_NeedDataSource"
    AutoGenerateColumns="false"
    AutoGenerateEditColumn="true"
    AllowSorting="true"
    AllowPaging="true" PageSize="10"
    OnUpdateCommand="RadGrid1_UpdateCommand"
    OnInsertCommand="RadGrid1_InsertCommand">

    <ClientSettings>
        <ClientEvents OnBatchEditClosed="batchEditClosed" />
    </ClientSettings>

    <MasterTableView CommandItemDisplay="Top" DataKeyNames="ID" EditMode="Batch">

        <Columns>
            <telerik:GridBoundColumn DataField="ID" HeaderText="ID" UniqueName="ID" ReadOnly="true" InsertVisiblityMode="AlwaysVisible">
            </telerik:GridBoundColumn>
            <telerik:GridNumericColumn DataField="NumericField1" HeaderText="NumericField1" UniqueName="NumericField1">
            </telerik:GridNumericColumn>
            <telerik:GridNumericColumn DataField="NumericField2" HeaderText="NumericField2" UniqueName="NumericField2">
            </telerik:GridNumericColumn>
            <telerik:GridCalculatedColumn UniqueName="CalculatedColumn1" HeaderText="Calculated Column" 
                DataFields="NumericField1, NumericField2" DataType="System.Int32" Expression="{0}+{1}">
            </telerik:GridCalculatedColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````
````JavaScript
function batchEditClosed(sender, args) {
    var grid = sender;
    var masterTableView = grid.get_masterTableView();
    var batchEditManager = grid.get_batchEditingManager();

    var columnUniqueName = args.get_columnUniqueName();

    var currentDataItem;
    var calculatedCell;

    var firstNumericValue;
    var secondNumericValue;
    var calculatedValue;

    if (columnUniqueName == "NumericField1" || columnUniqueName == "NumericField2") {
        // retrieve data items on the client
        masterTableView.get_dataItems();

        currentDataItem = $find(args.get_row().id);
        calculatedCell = currentDataItem.get_cell("CalculatedColumn1");

        firstNumericValue = batchEditManager.getCellValue(currentDataItem.get_cell("NumericField1"));
        secondNumericValue = batchEditManager.getCellValue(currentDataItem.get_cell("NumericField2"))

        calculatedValue = parseInt(firstNumericValue) + parseInt(secondNumericValue);

        calculatedCell.innerHTML = calculatedValue;
    }

}
````



# See Also

 * [Client-Side API]({%slug grid/data-editing/edit-mode/batch-editing/client-side-api%})


