---
title: Making a Grid Row Selected at All Times
page_title: Making a Grid Row Selected at All Times | RadGrid for ASP.NET AJAX Documentation
description: Making a Grid Row Selected at All Times
slug: grid/how-to/selecting/making-a-grid-row-selected-at-all-times
previous_url: controls/grid/functionality/selecting/how-to/making-a-grid-row-selected-at-all-times
tags: selecting
published: True
position: 8
---

# Making a Grid Row Selected at All Times

In some cases, you may want to configure the grid so that it always has one row selected. The following example illustrates one way to accomplish this. The first row is selected by default. If the user triggers an edit or insert operation, selection moves to the edited or inserted row and remains there until another row is edited or inserted.

To accomplish this effect:

1. An **ItemDataBound** event handler selects a grid item when it is in edit or insert mode. At the same time
	* It sets a boolean variable to indicate that an item has been selected.

	* For edited items, it saves the index of the selected item in a Session variable so that the selection of the item can persist over postbacks when the update or cancel command executes.

1. A **PreRender** event handler ensures that an item is always selected:
	* If the **ItemDataBound** event handler has set the boolean variable, it does not need to select an item, and does nothing.

	* If the **Session** variable contains the index of an item that was last edited, it selects that item.

	* Otherwise, it selects the first item.

	After selecting an item, the PreRender event handler always clears the boolean variable, so that on the next postback, the grid will know to force a selection.

In the code-behind, the ItemDataBound and PreRender event handlers ensure that an item is always selected.

*Note that in the declaration of the grid, client-side selection is NOT enabled.*

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AllowPaging="True" PageSize="5" Skin="Silk"
  DataSourceID="SqlDataSource1" AllowAutomaticInserts="True" AllowAutomaticUpdates="True"
  OnItemDataBound="RadGrid1_ItemDataBound" OnPreRender="RadGrid1_PreRender">
  <MasterTableView EditMode="InPlace" CommandItemDisplay="Bottom" DataSourceID="SqlDataSource1"
    DataKeyNames="OrderID">
    <EditFormSettings>
      <EditColumn UniqueName="EditCommandColumn1" />
      <PopUpSettings ScrollBars="None" />
    </EditFormSettings>
    <Columns>
      <telerik:GridEditCommandColumn />
    </Columns>
  </MasterTableView>
  <SelectedItemStyle BackColor="Aqua"></SelectedItemStyle>
</telerik:RadGrid>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
     SelectCommand="SELECT [OrderID], [CustomerID], [EmployeeID], [OrderDate], [ShipName] FROM [Orders]"
     DeleteCommand="DELETE FROM [Orders] WHERE [OrderID] = @OrderID"
     InsertCommand="INSERT INTO [Orders] ([CustomerID], [EmployeeID], [OrderDate], [ShipName]) VALUES (@CustomerID, @EmployeeID, @OrderDate, @ShipName)"
     UpdateCommand="UPDATE [Orders] SET [CustomerID] = @CustomerID, [EmployeeID] = @EmployeeID, [OrderDate] = @OrderDate, [ShipName] = @ShipName WHERE [OrderID] = @OrderID">
     <DeleteParameters>
         <asp:Parameter Name="OrderID" Type="Int32" />
     </DeleteParameters>
     <InsertParameters>
         <asp:Parameter Name="CustomerID" Type="String" />
         <asp:Parameter Name="EmployeeID" Type="Int32" />
         <asp:Parameter Name="OrderDate" Type="DateTime" />
         <asp:Parameter Name="ShipName" Type="String" />
     </InsertParameters>
     <UpdateParameters>
         <asp:Parameter Name="CustomerID" Type="String" />
         <asp:Parameter Name="EmployeeID" Type="Int32" />
         <asp:Parameter Name="OrderDate" Type="DateTime" />
         <asp:Parameter Name="ShipName" Type="String" />
         <asp:Parameter Name="OrderID" Type="Int32" />
      </UpdateParameters>
 <asp:SqlDataSource>
````
````C#
bool isSelected;
protected void RadGrid1_ItemDataBound(object sender,
GridItemEventArgs e)
{
    if (e.Item is GridEditableItem &&
  e.Item.IsInEditMode)
    {
        if (!e.Item.OwnerTableView.IsItemInserted)
        {
            Session["selIndex"] =
      e.Item.ItemIndex;
        }
        e.Item.Selected = true;
        isSelected = true;
    }
}
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
  if (!isSelected && Session["selIndex"] != null)
  {
	RadGrid1.MasterTableView.Items[(int)Session["selIndex"&cd;.Selected = true;
	Session["selIndex"] = null;
  }
  else if (!isSelected)
  {
		RadGrid1.MasterTableView.Items[0].Selected = true;
  }

  isSelected = false;
}
````
````VB
Dim isSelected As Boolean
Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As GridItemEventArgs)
    If TypeOf e.Item Is GridEditableItem And e.Item.IsInEditMode Then
    Then
        If Not e.Item.OwnerTableView.IsItemInserted Then
            Session("selIndex") = e.Item.ItemIndex
        End If
        e.Item.Selected = True
        isSelected = True
    End If
End Sub
Protected Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As EventArgs)
    If Not isSelected And Not Session("selIndex") Is Nothing Then
    Then
        RadGrid1.MasterTableView.Items(CType(Session("selIndex"), Integer)).Selected = True
        Session("selIndex") = Nothing
    ElseIf Not isSelected Then
        RadGrid1.MasterTableView.Items(0).Selected = True
    End If
    isSelected = False
End Sub
````

