---
title: Attach Event for Editor Changes
page_title: Attach Event for Editor Changes | RadGrid for ASP.NET AJAX Documentation
description: Attach Event for Editor Changes
slug: grid/how-to/data-editing/attach-event-for-editor-changes
previous_url: grid/data-editing/how-to/attach-event-for-editor-changes
tags: attach,event,for,editor,changes
published: True
position: 9
---

# Attach Event for Editor Changes



##

There is no default event for editor changes in grid columns - it is up to the developer to attach events to these editors when necessary. This operation can be performed hooking the ItemCreated event of Telerik RadGrid. For example- in case with **GridDropDownColumn** you have to:

1. Check whether the currently created grid item is **GridDataItem** and is in edit mode

1. Locate the dropdown list editor in the Controls collection of the cell which corresponds to the **GridDropDownList** column

1. Mark it with **AutoPostBack** = **true** and wire a handler to its **SelectedIndexChanged** event. Then in the **SelectedIndexChanged** handler you can update the selected value for the second dropdown.



````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server">
  <MasterTableView EditMode="InPlace" AutoGenerateColumns="False">
    <Columns>
      <telerik:GridBoundColumn HeaderText="CustomerID" DataField="CustomerID" UniqueName="CustomerID">
      </telerik:GridBoundColumn>
      <telerik:GridDropDownColumn HeaderText="ContactName" ListDataMember="Customers" ListTextField="ContactName"
        DataField="CustomerID" UniqueName="DropDownColumn1" ListValueField="CustomerID">
      </telerik:GridDropDownColumn>
      <telerik:GridDropDownColumn HeaderText="ContactTitle" ListDataMember="Customers"
        ListTextField="ContactTitle" DataField="CustomerID" UniqueName="DropDownColumn2"
        ListValueField="CustomerID">
      </telerik:GridDropDownColumn>
      <telerik:GridEditCommandColumn UniqueName="EditCommandColumn">
      </telerik:GridEditCommandColumn>
    </Columns>
  </MasterTableView>
</telerik:RadGrid>
````
````VB
Private Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemCreated
    If (TypeOf e.Item Is GridEditableItem AndAlso e.Item.IsInEditMode) Then
        Dim list As DropDownList =
        CType(CType(e.Item, GridEditableItem)("DropDownColumn1").Controls(0),
        DropDownList)
        list.AutoPostBack = True
        AddHandler list.SelectedIndexChanged, AddressOf list_SelectedIndexChanged
    End If
End Sub
Private Sub list_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs)
    'change the selected value for ContactTitle here
End Sub
````
````C#
private void RadGrid1_ItemCreated(object sender, Telerik.Web.UI.GridItemEventArgs e)
{
    if (e.Item is GridEditableItem && e.Item.IsInEditMode)
    {
        DropDownList list = (e.Item as GridEditableItem)["DropDownColumn1"].Controls[0] as DropDownList;
        list.AutoPostBack = true;
        list.SelectedIndexChanged += new System.EventHandler(this.list_SelectedIndexChanged);
    }
}

private void list_SelectedIndexChanged(object sender, System.EventArgs e)
{
    // change the selected value for ContactTitle here
}
````

