---
title: Cascading Delete in Hierarchical Grid
page_title: Cascading Delete in Hierarchical Grid | RadGrid for ASP.NET AJAX Documentation
description: Cascading Delete in Hierarchical Grid
slug: grid/data-editing/delete-records/cascading-delete-in-hierarchical-grid
tags: cascading,delete,in,hierarchical,grid
published: True
position: 4
---

# Cascading Delete in Hierarchical Grid



## 

There are cases when you want to delete an item in table in the grid hierarchy which has child table. A good implementation technique would be to delete all records in the child table related to the deleted item. By this means you can erase the information from the inner table which is no longer needed (after you delete the parent item). This technique is called **cascade delete**.This feature is not built in Telerik RadGrid but you can execute the necessary operations with a custom code. Here is a sample case which demonstrates how to delete items from master/detail tables and how to iterate through the detail table items for **expanded**parent item:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" DataSourceID="SqlDataSource1" runat="server" CssClass="RadGrid"
    Width="95%" AutoGenerateColumns="False" PageSize="3" AllowSorting="True" AllowPaging="True"
    GridLines="None" HorizontalAlign="NotSet" OnDeleteCommand="RadGrid1_DeleteCommand">
    <MasterTableView DataSourceID="SqlDataSource1" DataKeyNames="CustomerID" AllowMultiColumnSorting="True"
      Width="100%">
      <DetailTables>
        <telerik:GridTableView DataKeyNames="OrderID" DataSourceID="AccessDataSource2" Width="100%"
          GridLines="Horizontal" BorderColor="#D5B96A" CssClass="RadGrid2" runat="server">
          <ParentTableRelation>
            <telerik:GridRelationFields DetailKeyField="CustomerID" MasterKeyField="CustomerID" />
          </ParentTableRelation>
          <Columns>
            <telerik:GridBoundColumn SortExpression="OrderID" HeaderText="OrderID" HeaderButtonType="TextButton"
              DataField="OrderID" UniqueName="OrderID">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn SortExpression="OrderDate" HeaderText="Date
                 Ordered" HeaderButtonType="TextButton" DataField="OrderDate" UniqueName="OrderDate">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn SortExpression="EmployeeID" HeaderText="EmployeeID" HeaderButtonType="TextButton"
              DataField="EmployeeID" UniqueName="EmployeeID">
            </telerik:GridBoundColumn>
            <telerik:GridButtonColumn CommandName="Delete" Text="Delete" UniqueName="MasterDeleteColumn">
            </telerik:GridButtonColumn>
          </Columns>
        </telerik:GridTableView>
      </DetailTables>
      <Columns>
        <telerik:GridBoundColumn SortExpression="CustomerID" HeaderText="CustomerID" HeaderButtonType="TextButton"
          DataField="CustomerID" UniqueName="CustomerID">
        </telerik:GridBoundColumn>
        <telerik:GridBoundColumn SortExpression="ContactName" HeaderText="Contact Name" HeaderButtonType="TextButton"
          DataField="ContactName" UniqueName="ContactName">
        </telerik:GridBoundColumn>
        <telerik:GridBoundColumn SortExpression="CompanyName" HeaderText="Company" HeaderButtonType="TextButton"
          DataField="CompanyName" UniqueName="CompanyName">
        </telerik:GridBoundColumn>
        <telerik:GridButtonColumn CommandName="Delete" Text="Delete" UniqueName="DetailDeleteColumn">
        </telerik:GridButtonColumn>
      </Columns>
    </MasterTableView>
  </telerik:RadGrid>
  <asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
      ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Customers"
      runat="server">
  </asp:SqlDataSource>
  <asp:SqlDataSource ID="SqlDataSource2" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
      ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Orders Where CustomerID = @CustomerID"
      runat="server">
      <SelectParameters>
          <asp:Parameter Name="CustomerID" SessionField="CustomerID" Type="string" />
      </SelectParameters>
  </asp:SqlDataSource>
````



And in the code-behind:

````C#
protected void RadGrid1_DeleteCommand(object source, GridCommandEventArgs e)
{
    string masterPrKey;
    int detailPrKey;

    if (e.Item.OwnerTableView.DataSourceID == "SqlDataSource2")
    {
        detailPrKey = (int)e.Item.OwnerTableView.DataKeyValues[e.Item.ItemIndex]["OrderID"];
        //detailPrKey will hold the primary key for the detail table item which has to be deleted
        //delete the item from the detail table
    }
    if (e.Item.OwnerTableView.DataSourceID == "SqlDataSource1")
    {
        //now delete all items from the respective detail table
        if (e.Item.HasChildItems && e.Item is GridDataItem)
        {
            GridTableView tableView = (e.Item as GridDataItem).ChildItem.NestedTableViews[0];
            foreach (GridItem item in tableView.Items)
            {
                if (item is GridDataItem)
                {
                    GridDataItem dataItem = item as GridDataItem;
                    detailPrKey = (int)tableView.DataKeyValues[item.ItemIndex]["OrderID"];
                    //detailPrKey will hold the primary key for the detail table item which has to be deleted
                    //delete the detail table item
                }
            }
        }
        masterPrKey = (string)e.Item.OwnerTableView.DataKeyValues[e.Item.ItemIndex]
        ["CustomerID"];
        //masterPrKey will hold the primary key for the master table item which has to be deleted
        //finally delete the item from the master table
    }
}
````



````VB
Protected Sub RadGrid1_DeleteCommand(ByVal source As Object, ByVal e As GridCommandEventArgs)
    Dim masterPrKey As String
    Dim detailPrKey As Integer
    If (e.Item.OwnerTableView.DataSourceID = "SqlDataSource2") Then
        detailPrKey = CType(e.Item.OwnerTableView.DataKeyValues(e.Item.ItemIndex)("OrderID"), Integer)
        'detailPrKey will hold the primary key for the detail table item which has to be deleted
        'delete the item from the detail table
    End If
    If (e.Item.OwnerTableView.DataSourceID = "SqlDataSource1") Then
        'now delete all items from the respective detail table
        If e.Item.HasChildItems AndAlso TypeOf e.Item Is GridDataItem Then
            Dim tableView As GridTableView = CType(e.Item, GridDataItem).ChildItem.NestedTableViews(0)
            For Each item As GridItem In tableView.Items
                If TypeOf item Is GridDataItem Then
                    Dim dataItem As GridDataItem = CType(item, GridDataItem)
                    detailPrKey = CType(tableView.DataKeyValues(item.ItemIndex)("OrderID"), Integer)
                    'detailPrKey will hold the primary key for the detail table item which has to be deleted
                    'delete the detail table item
                End If
            Next
        End If
        masterPrKey = CType(e.Item.OwnerTableView.DataKeyValues(e.Item.ItemIndex)("CustomerID"), String)
        'masterPrKey will hold the primary key for the master table item which has to be deleted
        'finally delete the item from the master table
    End If
End Sub
````



For hierarchical grids with multiple nested tables you will have to traverse the items in them recursively to accomplish this task (in a similar to the demonstrated manner).
