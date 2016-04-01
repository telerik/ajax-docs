---
title: Hiding the Expand/Collapse Images When No Records
page_title: Hiding the expand/collapse images when no records | RadGrid for ASP.NET AJAX Documentation
description: Hiding the expand/collapse images when no records
slug: grid/how-to/hierarchy/hiding-the-expand-collapse-images-when-no-records
previous_url: grid/hierarchical-grid-types-and-load-modes/how-to/hiding-the-expand-collapse-images-when-no-records
tags: hiding,the,expand/collapse,images,when,no,records
published: True
position: 3
---

# Hiding the expand/collapse images when no records


You may want to hide the expand/collapse images when there are no records under parent grid item and the **HierarchyLoadMode = ServerBind** or **HierarchyLoadMode = Client** options for loading grid hierarchy are chosen. To accomplish this task you need to:

1. Wire the **PreRender** event of Telerik RadGrid

1. Traverse all grid items and get reference to those which are of type **GridNestedViewItem**

1. Verify whether their **NestedTableViews** collection is empty

1. If so, locate the expand/collapse image inside the **ExpandCollapse** column of the respective **GridTableView**

1. Hide the image along with the corresponding **GridNestedViewItem**

Below is the code of a simple demo with two level hierarchy:



````ASP.NET
<telerik:RadGrid ID="RadGrid1" DataSourceID="SqlDataSource1" runat="server" Width="95%"
  AutoGenerateColumns="False" PageSize="3" AllowPaging="True" OnPreRender="RadGrid1_PreRender">
  <MasterTableView DataSourceID="SqlDataSource1" DataKeyNames="CustomerID" Width="100%"
    HierarchyLoadMode="ServerBind">
    <PagerStyle Mode="NumericPages" />
    <DetailTables>
      <telerik:GridTableView DataKeyNames="OrderID" DataSourceID="SqlDataSource2" Width="100%"
        runat="server">
        <ParentTableRelation>
          <telerik:GridRelationFields DetailKeyField="CustomerID" MasterKeyField="CustomerID" />
        </ParentTableRelation>
        <Columns>
          <telerik:GridBoundColumn SortExpression="OrderID" HeaderText="OrderID" HeaderButtonType="TextButton"
            DataField="OrderID" UniqueName="OrderID">
          </telerik:GridBoundColumn>
          <telerik:GridBoundColumn SortExpression="OrderDate" HeaderText="Date Ordered" HeaderButtonType="TextButton"
            DataField="OrderDate" UniqueName="OrderDate">
          </telerik:GridBoundColumn>
          <telerik:GridBoundColumn SortExpression="EmployeeID" HeaderText="EmployeeID" HeaderButtonType="TextButton"
            DataField="EmployeeID" UniqueName="EmployeeID">
          </telerik:GridBoundColumn>
        </Columns>
        <PagerStyle Mode="NumericPages" />
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
    </Columns>
  </MasterTableView>
</telerik:RadGrid>
<asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
  ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Customers"
  runat="server"></asp:SqlDataSource>
<asp:SqlDataSource ID="SqlDataSource2" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
  ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Orders Where CustomerID = @CustomerID"
  runat="server">
  <SelectParameters>
     <asp:SessionParameter Name="CustomerID" SessionField="CustomerID" Type="string" />
  </SelectParameters>
</asp:SqlDataSource>
````
````C#
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
    HideExpandColumnRecursive(RadGrid1.MasterTableView);
}
public void HideExpandColumnRecursive(GridTableView tableView)
{
    GridItem[] nestedViewItems = tableView.GetItems(GridItemType.NestedView);
    foreach (GridNestedViewItem nestedViewItem in nestedViewItems)
    {
        foreach (GridTableView nestedView in nestedViewItem.NestedTableViews)
        {
            if (nestedView.Items.Count == 0)
            {
                TableCell cell = nestedView.ParentItem["ExpandColumn"];
                cell.Controls[0].Visible = false;
                cell.Text = "&nbsp";
                nestedViewItem.Visible = false;
            }
            if (nestedView.HasDetailTables)
            {
                HideExpandColumnRecursive(nestedView);
            }
        }
    }
}
````
````VB
Protected Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As EventArgs)
    HideExpandColumnRecursive(RadGrid1.MasterTableView)
End Sub
Public Sub HideExpandColumnRecursive(ByVal tableView As GridTableView)
    Dim nestedViewItems As GridItem() = tableView.GetItems(GridItemType.NestedView)
    For Each nestedViewItem As GridNestedViewItem In nestedViewItems
        For Each nestedView As GridTableView In nestedViewItem.NestedTableViews
            If nestedView.Items.Count = 0 Then
                Dim cell As TableCell = nestedView.ParentItem("ExpandColumn")
                cell.Controls(0).Visible = False
                cell.Text = "&nbsp"
                nestedViewItem.Visible = False
            End If
            If nestedView.HasDetailTables Then
                HideExpandColumnRecursive(nestedView)
            End If
        Next
    Next
End Sub
````


In order to hide the expand/collapse images in multiple nested levels, you will need to perform a recursive loop through each table in depth. How to traverse the grid items in such manner you can learn from [this topic]({%slug grid/hierarchical-grid-types-and-load-modes/traversing-detail-tables%}).
