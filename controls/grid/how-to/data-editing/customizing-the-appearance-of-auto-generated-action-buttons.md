---
title: Customizing the Appearance of Auto-generated Action Buttons
page_title: Customizing the Appearance of Auto-generated Action Buttons - RadGrid
description: Check our Web Forms article about Customizing the Appearance of Auto-generated Action Buttons.
slug: grid/how-to/data-editing/customizing-the-appearance-of-auto-generated-action-buttons
previous_url: controls/grid/data-editing/how-to/customizing-the-appearance-of-auto-generated-action-buttons
tags: customizing,the,appearance,of,auto-generated,action,buttons
published: True
position: 15
---

# Customizing the Appearance of Auto-generated Action Buttons



##

In some scenarios you may want to get a hold on the auto-generated action buttons (update/insert/cancel) inside the auto-generated grid edit form (EditMode = InPlace or EditForms) and modify them a bit without changing the entire layout of the edit form (which is possible with [WebUserControl](https://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/UserControlEditForm/DefaultCS.aspx) or [FormTemplate](https://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/TemplateFormUpdate/DefaultCS.aspx) custom edit form). Here are the steps to accomplish this task programmatically with several lines of code:

1. Subscribe to the ItemCreated event of RadGrid

1. Check whether the currently created item is in edit or insert mode

1. Find the button of interest by its id (**UpdateButton**, **PerformInsertButton** or **CancelButton**) and alter its setting in par with your preferences

Below is a simple example which changes the text and some of the styles for those buttons:



````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" DataSourceID="SqlDataSource1" AllowSorting="True"
  Skin="Office2007" GridLines="None" Width="95%">
  <MasterTableView Width="100%" DataKeyNames="CustomerID" CommandItemDisplay="Top"
    AutoGenerateColumns="false">
    <Columns>
      <telerik:GridBoundColumn UniqueName="CompanyName" DataField="CompanyName" HeaderText="Company name" />
      <telerik:GridBoundColumn UniqueName="ContactName" DataField="ContactName" HeaderText="Contact name" />
      <telerik:GridBoundColumn UniqueName="ContactTitle" DataField="ContactTitle" HeaderText="Contact title" />
      <telerik:GridEditCommandColumn />
    </Columns>
  </MasterTableView>
</telerik:RadGrid>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
   SelectCommand="SELECT * FROM [Customers]">
</asp:SqlDataSource>
````
````VB
Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemCreated
    If TypeOf e.Item Is GridEditableItem AndAlso e.Item.IsInEditMode Then
        If Not e.Item.OwnerTableView.IsItemInserted Then
            Dim updateButton As LinkButton = CType(e.Item.FindControl("UpdateButton"), LinkButton)
            updateButton.Text = "Update record"
            updateButton.Style("font-size") = "12px"
            updateButton.Style("font-weight") = "bold"
            updateButton.Style("color") = "blue"
        Else
            Dim insertButton As LinkButton = CType(e.Item.FindControl("PerformInsertButton"), LinkButton)
            insertButton.Text = "Insert record"
            insertButton.Style("font-size") = "12px"
            insertButton.Style("font-weight") = "bold"
            insertButton.Style("color") = "blue"
        End If
        Dim cancelButton As LinkButton = CType(e.Item.FindControl("CancelButton"), LinkButton)
        cancelButton.Text = "Cancel editing"
        cancelButton.Style("font-size") = "12px"
        cancelButton.Style("font-weight") = "bold"
        cancelButton.Style("color") = "blue"
    End If
End Sub
````
````C#
protected void RadGrid1_ItemCreated(object sender, Telerik.Web.UI.GridItemEventArgs e)
{
    if (e.Item is GridEditableItem && e.Item.IsInEditMode)
    {
        if (!e.Item.OwnerTableView.IsItemInserted)
        {
            LinkButton updateButton = (LinkButton)e.Item.FindControl("UpdateButton");
            updateButton.Text = "Update record";
            updateButton.Style["font-size"] = "12px";
            updateButton.Style["font-weight"] = "bold";
            updateButton.Style["color"] = "blue";
        }
        else
        {
            LinkButton insertButton = (LinkButton)e.Item.FindControl("PerformInsertButton");
            insertButton.Text = "Insert record";
            insertButton.Style["font-size"] = "12px";
            insertButton.Style["font-weight"] = "bold";
            insertButton.Style["color"] = "blue";
        }
        LinkButton cancelButton = (LinkButton)e.Item.FindControl("CancelButton");
        cancelButton.Text = "Cancel editing";
        cancelButton.Style["font-size"] = "12px";
        cancelButton.Style["font-weight"] = "bold";
        cancelButton.Style["color"] = "blue";
    }
}
````

