---
title: Persisting the Selected Rows Server-side on Sorting/Paging/Filtering/Grouping
page_title: Persisting the Selected Rows Server-side on Sorting/Paging/Filtering/Grouping | RadGrid for ASP.NET AJAX Documentation
description: Persisting the Selected Rows Server-side on Sorting/Paging/Filtering/Grouping
slug: grid/how-to/selecting/persisting-selected-rows-server-side
previous_url: grid/functionality/selecting/how-to/persisting-selected-rows-server-side
tags: Server-side,selecting,persisting
published: True
position: 5
---

# Persisting the Selected Rows Server-side on Sorting/Paging/Filtering/Grouping

**RadGrid** loses its current selection when the data is sorted, a new group or filter is added, or when the current page changes. If you want the selection to persist across these events, you can do the following:

1. Add an ItemCommand event handler to the grid.
	1. When a "Select" command occurs, store the key values for the selected row in a Session variable.

	1. When a "Deselect" command occurs, remove the key values from the Session variable.

1. Add a PreRender event handler to the grid.

	*	In the pre-render event of the grid, traverse the rows of the grid and compare their key values to the values saved in the Session variable. Whenever you find a match, select the row.


>caution This example only works if you have not enabled client-side selection (that is, you are selecting rows using Command buttons).
>

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" DataSourceID="SqlDataSource1" Width="97%"
  AllowPaging="True" PageSize="15" AllowSorting="True" AllowMultiRowSelection="True"
  ShowGroupPanel="True" AllowFilteringByColumn="true" OnItemCommand="RadGrid1_ItemCommand"
  OnPreRender="RadGrid1_PreRender">
  <PagerStyle Mode="NextPrevAndNumeric" />
  <MasterTableView Width="100%" DataKeyNames="CustomerID" AllowFilteringByColumn="true">
    <Columns>
      <telerik:GridButtonColumn UniqueName="SelectColumn" CommandName="Select" Text="Select" />
      <telerik:GridButtonColumn UniqueName="DeselectColumn" CommandName="Deselect" Text="Deselect" />
    </Columns>
  </MasterTableView>
  <ClientSettings AllowDragToGroup="True" />
</telerik:RadGrid>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
      SelectCommand="SELECT TOP 10 [CustomerID], [ContactName], [ContactTitle], [Address] FROM [Customers]">
</asp:SqlDataSource>
````

In the code-behind, the **ItemCommand** handler saves the key values, and the PreRender handler uses them to restore the selection:
````C#
protected void RadGrid1_ItemCommand(object source, GridCommandEventArgs e)
{
    ArrayList selectedItems;
    if (Session["selectedItems"] == null)
    {
        selectedItems = new ArrayList();
    }
    else
    {
        selectedItems = (ArrayList)Session["selectedItems"];
    }
    if (e.CommandName == RadGrid.SelectCommandName && e.Item is GridDataItem)
    {
        GridDataItem dataItem = (GridDataItem)e.Item;
        string customerID = dataItem.OwnerTableView.DataKeyValues[dataItem.ItemIndex]["CustomerID"].ToString();
        selectedItems.Add(customerID);
        Session["selectedItems"] = selectedItems;
    }
    if (e.CommandName == RadGrid.DeselectCommandName && e.Item is GridDataItem)
    {
        GridDataItem dataItem = (GridDataItem)e.Item;
        string customerID = dataItem.OwnerTableView.DataKeyValues[dataItem.ItemIndex]["CustomerID"].ToString();
        selectedItems.Remove(customerID);
        Session["selectedItems"] = selectedItems;
    }
}
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
    if (Session["selectedItems"] != null)
    {
        ArrayList selectedItems = (ArrayList)Session["selectedItems"];
        Int16 stackIndex;
        for (stackIndex = 0; stackIndex <= selectedItems.Count - 1; stackIndex++)
        {
            string curItem = selectedItems[stackIndex].ToString();
            foreach (GridItem item in RadGrid1.MasterTableView.Items)
            {
                if (item is GridDataItem)
                {
                    GridDataItem dataItem = (GridDataItem)item;
                    if (curItem.Equals(dataItem.OwnerTableView.DataKeyValues[dataItem.ItemIndex]["CustomerID"].ToString()))
                    {
                        dataItem.Selected = true;
                        break;
                    }
                }
            }
        }
    }
}
````
````VB
Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As GridCommandEventArgs) Handles RadGrid1.ItemCommand
    Dim selectedItems As ArrayList
    If Session("selectedItems") Is Nothing Then
        selectedItems = New ArrayList
    Else
        selectedItems = CType(Session("selectedItems"), ArrayList)
    End If
    If e.CommandName = RadGrid.SelectCommandName AndAlso TypeOf e.Item Is GridDataItem Then
        Dim dataItem As GridDataItem = CType(e.Item, GridDataItem)
        Dim customerID As String = dataItem.OwnerTableView.DataKeyValues(dataItem.ItemIndex)("CustomerID").ToString
        selectedItems.Add(customerID)
        Session("selectedItems") = selectedItems
    End If
    If e.CommandName = RadGrid.DeselectCommandName AndAlso TypeOf e.Item Is GridDataItem Then
        Dim dataItem As GridDataItem = CType(e.Item, GridDataItem)
        Dim customerID As String = dataItem.OwnerTableView.DataKeyValues(dataItem.ItemIndex)("CustomerID").ToString
        selectedItems.Remove(customerID)
        Session("selectedItems") = selectedItems
    End If
End Sub
Protected Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As EventArgs) Handles RadGrid1.PreRender
    If Not (Session("selectedItems") Is Nothing) Then
        Dim selectedItems As ArrayList = CType(Session("selectedItems"), ArrayList)
        Dim stackIndex As Int16
        For stackIndex = 0 To selectedItems.Count - 1
            Dim curItem As String = selectedItems(stackIndex).ToString
            For Each item As GridItem In RadGrid1.MasterTableView.Items
                If TypeOf item Is GridDataItem Then
                    Dim dataItem As GridDataItem = CType(item, GridDataItem)
                    If curItem.Equals(dataItem.OwnerTableView.DataKeyValues(dataItem.ItemIndex)("CustomerID").ToString()) Then
                        dataItem.Selected = True
                    End If
                End If
            Next
        Next
    End If
End Sub
````

