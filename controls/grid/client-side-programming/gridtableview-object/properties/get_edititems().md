---
title: get_editItems()
page_title: get_editItems() - RadGrid
description: Check our Web Forms article about get_editItems().
slug: grid/client-side-programming/gridtableview-object/properties/get_edititems()
tags: get_edititems()
published: True
position: 7
---

# get_editItems()



## 

Property which retrieves the GridDataItem objects of the current table view that are in edit mode.

>caption Example 1:

Loop through the edit items on a button click:

````ASP.NET
<telerik:RadButton runat="server" ID="RadButton1" Text="AlertEditItems" AutoPostBack="false" OnClientClicked="OnClientClicked" />
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px" OnNeedDataSource="RadGrid1_NeedDataSource"
    AllowMultiRowEdit="true" AutoGenerateEditColumn="true">
    <MasterTableView AutoGenerateColumns="true" DataKeyNames="OrderID"
        ClientDataKeyNames="OrderID" CommandItemDisplay="Top" EditMode="InPlace">
    </MasterTableView>
</telerik:RadGrid>
````
````C#
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    (sender as RadGrid).DataSource = OrdersTable(); 
}

private DataTable OrdersTable()
{
    DataTable dt = new DataTable();

    dt.Columns.Add(new DataColumn("OrderID", typeof(int)));
    dt.Columns.Add(new DataColumn("OrderDate", typeof(DateTime)));
    dt.Columns.Add(new DataColumn("Freight", typeof(decimal)));
    dt.Columns.Add(new DataColumn("ShipName", typeof(string)));
    dt.Columns.Add(new DataColumn("ShipCountry", typeof(string)));

    dt.PrimaryKey = new DataColumn[] { dt.Columns["OrderID"] };

    for (int i = 0; i < 70; i++)
    {
        int index = i + 1;

        DataRow row = dt.NewRow();

        row["OrderID"] = index;
        row["OrderDate"] = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 0, 0, 0).AddHours(index);
        row["Freight"] = index * 0.1 + index * 0.01;
        row["ShipName"] = "Name " + index;
        row["ShipCountry"] = "Country " + index;

        dt.Rows.Add(row);
    }

    return dt;
}
````
````VB
Protected Sub RadGrid1_NeedDataSource(sender As Object, e As GridNeedDataSourceEventArgs)
    RadGrid1.DataSource = OrdersTable()
End Sub

Private Function OrdersTable() As DataTable
    Dim dt As New DataTable()

    dt.Columns.Add(New DataColumn("OrderID", Type.GetType("System.Int32")))
    dt.Columns.Add(New DataColumn("OrderDate", Type.GetType("System.DateTime")))
    dt.Columns.Add(New DataColumn("Freight", Type.GetType("System.Decimal")))
    dt.Columns.Add(New DataColumn("ShipName", Type.GetType("System.String")))
    dt.Columns.Add(New DataColumn("ShipCountry", Type.GetType("System.String")))

    Dim PrimaryKeyColumns As DataColumn() = New DataColumn(0) {}
    PrimaryKeyColumns(0) = dt.Columns("OrderID")
    dt.PrimaryKey = PrimaryKeyColumns

    For i As Integer = 0 To 70 - 1
        Dim index As Integer = i + 1
        Dim row As DataRow = dt.NewRow()

        row("OrderID") = index
        row("OrderDate") = New DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 0, 0, 0).AddHours(index)
        row("Freight") = index * 0.1 + index * 0.01
        row("ShipName") = "Name " & index
        row("ShipCountry") = "Country " & index

        dt.Rows.Add(row)
    Next

    Return dt
End Function
````

````JavaScript
function OnClientClicked(sender, args) {
    var grid = $find('<%= RadGrid1.ClientID %>');
    var masterTable = grid.get_masterTableView();
    var editItems = masterTable.get_editItems();
    var arr = [];
    for (var i = 0; i < editItems.length; i++) {
        var id = editItems[i].getDataKeyValue("OrderID");
        arr.push(id);
    }
    if (arr.length == 0) alert("No orders are in edit mode!");
    else alert("Orders open for editing: " + arr);
}
````

>caption Example 2:

Traverse the edit items in order to access the inner controls:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AllowPaging="True" CellSpacing="0"
    GridLines="None" Width="800px" OnNeedDataSource="RadGrid1_NeedDataSource"
    AutoGenerateEditColumn="true" AllowMultiRowEdit="true">
    <ClientSettings>
        <ClientEvents OnGridCreated="gridCreated" />
    </ClientSettings>
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID" EditMode="InPlace"
        CommandItemDisplay="Top">
        <Columns>
            <telerik:GridBoundColumn DataField="OrderID" DataType="System.Int32"
                FilterControlAltText="Filter OrderID column" HeaderText="OrderID"
                ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID">
            </telerik:GridBoundColumn>
            <telerik:GridDateTimeColumn DataField="OrderDate" DataType="System.DateTime"
                FilterControlAltText="Filter OrderDate column" HeaderText="OrderDate"
                SortExpression="OrderDate" UniqueName="OrderDate">
            </telerik:GridDateTimeColumn>
            <telerik:GridTemplateColumn UniqueName="Sharing" EditFormHeaderTextFormat="Sharing">
                <ItemTemplate>
                    <asp:Label ID="Label1" runat="server" Text="Test 1"></asp:Label>
                </ItemTemplate>
                <EditItemTemplate>
                    <telerik:RadComboBox RenderMode="Lightweight" ID="RadComboBoxSharing" runat="server" DataSource='<%# (new string[] { "Coordinated", "Test 1", "Test 2"}) %>'
                        OnClientSelectedIndexChanged='<%# string.Format("function (s,a){{selectedIndexChanged(s,a,{0},\"{1}\");}}",
                                    Container.ItemIndex,Container.OwnerTableView.ClientID) %>'>
                    </telerik:RadComboBox>
                </EditItemTemplate>
            </telerik:GridTemplateColumn>
            <telerik:GridNumericColumn DataField="Freight" DataType="System.Decimal"
                FilterControlAltText="Filter Freight column" HeaderText="Freight"
                SortExpression="Freight" UniqueName="Freight">
            </telerik:GridNumericColumn>
            <telerik:GridBoundColumn DataField="ShipName"
                FilterControlAltText="Filter ShipName column" HeaderText="ShipName"
                SortExpression="ShipName" UniqueName="ShipName">
            </telerik:GridBoundColumn>
            <telerik:GridTemplateColumn UniqueName="IndefiniteSharing" EditFormHeaderTextFormat="IndefiniteSharing">
                <ItemTemplate>
                    <asp:Label ID="Label2" runat="server" Text="Test 1"></asp:Label>
                </ItemTemplate>
                <EditItemTemplate>
                    <div style="width: 170px;">
                        <asp:TextBox ID="TextBoxIndefiniteSharing" runat="server"></asp:TextBox>
                    </div>
                </EditItemTemplate>
            </telerik:GridTemplateColumn>
            <telerik:GridTemplateColumn UniqueName="IndefiniteSharingRad" EditFormHeaderTextFormat="IndefiniteSharingRad">
                <ItemTemplate>
                    <asp:Label ID="Label3" runat="server" Text="Test 1"></asp:Label>
                </ItemTemplate>
                <EditItemTemplate>
                    <div style="width: 170px;">
                        <telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBoxIndefiniteSharing" runat="server"></telerik:RadTextBox>
                    </div>
                </EditItemTemplate>
            </telerik:GridTemplateColumn>
            <telerik:GridBoundColumn DataField="ShipCountry"
                FilterControlAltText="Filter ShipCountry column" HeaderText="ShipCountry"
                SortExpression="ShipCountry" UniqueName="ShipCountry">
            </telerik:GridBoundColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````
````C#
protected void RadGrid1_NeedDataSource(object sender, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    (sender as RadGrid).DataSource = OrdersTable();
}
        
private DataTable OrdersTable()
{
    DataTable dt = new DataTable();

    dt.Columns.Add(new DataColumn("OrderID", typeof(int)));
    dt.Columns.Add(new DataColumn("OrderDate", typeof(DateTime)));
    dt.Columns.Add(new DataColumn("Freight", typeof(decimal)));
    dt.Columns.Add(new DataColumn("ShipName", typeof(string)));
    dt.Columns.Add(new DataColumn("ShipCountry", typeof(string)));

    dt.PrimaryKey = new DataColumn[] { dt.Columns["OrderID"] };

    for (int i = 0; i < 70; i++)
    {
        int index = i + 1;

        DataRow row = dt.NewRow();

        row["OrderID"] = index;
        row["OrderDate"] = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 0, 0, 0).AddHours(index);
        row["Freight"] = index * 0.1 + index * 0.01;
        row["ShipName"] = "Name " + index;
        row["ShipCountry"] = "Country " + index;

        dt.Rows.Add(row);
    }

    return dt;
}
````
````VB
Protected Sub RadGrid1_NeedDataSource(sender As Object, e As GridNeedDataSourceEventArgs)
    RadGrid1.DataSource = OrdersTable()
End Sub

Private Function OrdersTable() As DataTable
    Dim dt As New DataTable()

    dt.Columns.Add(New DataColumn("OrderID", Type.GetType("System.Int32")))
    dt.Columns.Add(New DataColumn("OrderDate", Type.GetType("System.DateTime")))
    dt.Columns.Add(New DataColumn("Freight", Type.GetType("System.Decimal")))
    dt.Columns.Add(New DataColumn("ShipName", Type.GetType("System.String")))
    dt.Columns.Add(New DataColumn("ShipCountry", Type.GetType("System.String")))

    Dim PrimaryKeyColumns As DataColumn() = New DataColumn(0) {}
    PrimaryKeyColumns(0) = dt.Columns("OrderID")
    dt.PrimaryKey = PrimaryKeyColumns

    For i As Integer = 0 To 70 - 1
        Dim index As Integer = i + 1
        Dim row As DataRow = dt.NewRow()

        row("OrderID") = index
        row("OrderDate") = New DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 0, 0, 0).AddHours(index)
        row("Freight") = index * 0.1 + index * 0.01
        row("ShipName") = "Name " & index
        row("ShipCountry") = "Country " & index

        dt.Rows.Add(row)
    Next

    Return dt
End Function
````


````JavaScript
//pass the indexes of the GridItem and the GridTableView containing the RadComboBox as arguments
function selectedIndexChanged(sender, args, index, tableViewID) {
    var tableView = $find(tableViewID);
    var rowInEditMode = index >= 0 ? tableView.get_dataItems()[index].get_element() :
        tableView.get_insertItem();
    hideIndefiniteSharing(rowInEditMode);
}
function gridCreated(sender, args) {
    var editItems = sender.get_masterTableView().get_editItems();
    for (var i = 0; i < editItems.length; i++) {
        hideIndefiniteSharing(editItems[i].get_element());
    }

    var insertItemForm = sender.get_masterTableView().get_insertItem();
    if (insertItemForm) {
        hideIndefiniteSharing(insertItemForm);
    }
}
function hideIndefiniteSharing(rowInEditMode) {
    //the editingElement could be the GridDataItem in EditMode="InPlace"
    //or the EditFormItem when EditMode = "EditForms"
    var editingElement = rowInEditMode.control.get_editFormItem() ? rowInEditMode.control.get_editFormItem() : rowInEditMode;

    var combo = $telerik.findControl(editingElement, "RadComboBoxSharing");
    var condition = !(combo.get_selectedItem().get_value() == "Coordinated");

    var textBox = $telerik.findElement(editingElement, "TextBoxIndefiniteSharing");
    textBox.style.display = condition ? "" : "none";

    var radTextBox = $telerik.findControl(editingElement, "RadTextBoxIndefiniteSharing");
    radTextBox.set_visible(condition);
}
````

In the sample above, the inner controls are referenced by using the $telerik.findControl() method. Check out more on how to get a client-side reference to a control object in the [Get Client-side Reference to a Control Object](https://docs.telerik.com/devtools/aspnet-ajax/general-information/get-client-side-reference) article.


## See Also

* [Get Client-side Reference to a Control Object](https://docs.telerik.com/devtools/aspnet-ajax/general-information/get-client-side-reference)

* [Accessing Grid Items Client-Side](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/accessing-values-and-controls/client-side/accessing-items)

* [Accessing Grid Cells, Cell Values and Raw DataKey Values Client-Side](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/accessing-values-and-controls/client-side/accessing-cells)


