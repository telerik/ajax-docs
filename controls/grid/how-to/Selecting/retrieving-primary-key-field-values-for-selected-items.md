---
title: Retrieving Primary Key Field Values for Selected Items
page_title: Retrieving Primary Key Field Values for Selected Items - RadGrid
description: Check our Web Forms article about Retrieving Primary Key Field Values for Selected Items.
slug: grid/how-to/selecting/retrieving-primary-key-field-values-for-selected-items
previous_url: controls/grid/functionality/selecting/how-to/retrieving-primary-key-field-values-for-selected-items
tags: client-side,selecting,values,primary key
published: True
position: 2
---

# Retrieving Primary Key Field Values for Selected Items


There are many times you may need to fetch the primary key field values for grid items. You can use the **DataKeyNames** and **DataKeyValues** arrays of the **GridTableView** object for this purpose. When you specify a primary key field by adding it to the **DataKeyNames** array, the value of the specified column becomes available in **DataKeyValues** array.

The following example illustrates this use of **DataKeyNames** and **DataKeyValues**. The **ItemCommand** and **SelectedIndexChanged** event handlers use the **DataKeyValues** array to access the primary key of a row when it enters edit mode or when it is selected, respectively:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" DataSourceID="SqlDataSource1" AutoGenerateColumns="false"
  OnItemCommand="RadGrid1_ItemCommand" OnSelectedIndexChanged="RadGrid1_SelectedIndexChanged">
  <MasterTableView DataKeyNames="CustomerID" DataSourceID="SqlDataSource1">
    <Columns>
      <telerik:GridButtonColumn CommandName="Select" Text="Select" UniqueName="SelectColumn" />
      <telerik:GridBoundColumn UniqueName="ContactName" HeaderText="Contact name" DataField="ContactName" />
      <telerik:GridBoundColumn UniqueName="ContactTitle" HeaderText="Contact title" DataField="ContactTitle" />
      <telerik:GridBoundColumn UniqueName="Address" HeaderText="Address" DataField="Address" />
    </Columns>
  </MasterTableView>
</telerik:RadGrid>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    SelectCommand="SELECT TOP 10 [CustomerID], [ContactName], [ContactTitle], [Address] FROM [Customers]">
</asp:SqlDataSource>
````
````C#
protected void RadGrid1_ItemCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
{
    if (e.CommandName == RadGrid.SelectCommandName)
    {
        Response.Write("Primary key for the clicked item from ItemCommand: " + (e.Item as GridDataItem).GetDataKeyValue("CustomerID").ToString() + "<br>");
    }
}
protected void RadGrid1_SelectedIndexChanged(object sender, System.EventArgs e)
{
    Response.Write("Primary key for the clicked item from SelectedIndexChanged: "
    + (RadGrid1.SelectedItems[0] as GridDataItem).GetDataKeyValue("CustomerID").ToString() + "<br>");
}
````
````VB
Protected Sub RadGrid1_ItemCommand(ByVal source As Object, _
  ByVal e As Telerik.Web.UI.GridCommandEventArgs) _
  Handles RadGrid1.ItemCommand
    If (e.CommandName = RadGrid.SelectCommandName) Then
        Response.Write("Primary key for the clicked item from ItemCommand: " _
            + (DirectCast(e.Item, GridDataItem)).GetDataKeyValue("CustomerID").ToString() + "<br>")
    End If
End Sub
Protected Sub RadGrid1_SelectedIndexChanged(ByVal sender As Object, _
          ByVal e As System.EventArgs) Handles RadGrid1.SelectedIndexChanged
    Response.Write("Primary key for the clicked item from SelectedIndexChanged: " _
      + (DirectCast(RadGrid1.SelectedItems(0), GridDataItem)).GetDataKeyValue("CustomerID").ToString() + "<br>")
End Sub
````

