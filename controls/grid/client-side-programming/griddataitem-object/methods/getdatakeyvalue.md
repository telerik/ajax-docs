---
title: getDataKeyValue
page_title: getDataKeyValue | RadGrid for ASP.NET AJAX Documentation
description: getDataKeyValue
slug: grid/client-side-programming/griddataitem-object/methods/getdatakeyvalue
tags: getdatakeyvalue
published: True
position: 4
---

# getDataKeyValue



##

 * Gets a single *string* parameter representing a DataField bound to the RadGrid and added to the `ClientDataKeyNames` collection of the MasterTableView/GridTableView.

 * Returns a *string* of the dataKeyValue, associated with the GridDataItem.

>note  The DataField name passed to the getDataKeyValue method has to be part of the `ClientDataKeyNames` array of the MasterTableView/GridTableView.
>

Example:

Call get_dataKeyValue() on row double click:

````ASPX
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px" OnNeedDataSource="RadGrid1_NeedDataSource">
    <ClientSettings>
        <ClientEvents OnRowDblClick="onRowDblClick" />
    </ClientSettings>
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="ID" ClientDataKeyNames="ID, LastName">
        <Columns>
            <telerik:GridBoundColumn DataField="ID" DataType="System.Int32"
                FilterControlAltText="Filter ID column" HeaderText="ID"
                ReadOnly="True" SortExpression="ID" UniqueName="ID">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="FirstName"
                FilterControlAltText="Filter FirstName column" HeaderText="First Name"
                SortExpression="FirstName" UniqueName="FirstName">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="LastName"
                FilterControlAltText="Filter LastName column" HeaderText="Last Name"
                SortExpression="LastName" UniqueName="LastName">
            </telerik:GridBoundColumn>
            </Columns>
    </MasterTableView>
</telerik:RadGrid>
````
````C#
protected void RadGrid1_NeedDataSource(object sender, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    var grid = sender as RadGrid;
    grid.DataSource = Enumerable.Range(1, 10).Select(x => new { ID = x, FirstName = "First Name " + x, LastName = "Last Name " + x });
}
````
````VB
Protected Sub RadGrid1_NeedDataSource(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
    Dim grid = TryCast(sender, RadGrid)
    grid.DataSource = Enumerable.Range(1, 10).Select(Function(x) New With {Key .ID = x, Key .FirstName = "First Name " & x, Key .LastName = "Last Name " & x
    })
End Sub
````

````JavaScript
function onRowDblClick(sender, args) {
    var dataItem = args.get_item();
    var id = dataItem.getDataKeyValue("ID");
    var lastName = dataItem.getDataKeyValue("LastName");
    alert("Clicked item key values:" + "\n" +
        "ID: " + id + "\n" +
        "Last Name: " + lastName);
}
````

You can see one more practical example of the method in its dedicated section in the [Accessing Grid Cells, Cell Values and Raw DataKey Values Client-Side]({%slug grid/accessing-values-and-controls/client-side/accessing-cells%}) article.
