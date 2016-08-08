---
title: Go into Edit Mode with AJAX Double-Click
page_title: Go into Edit Mode with AJAX Double-Click | RadGrid for ASP.NET AJAX Documentation
description: Go into Edit Mode with AJAX Double-Click
slug: grid/how-to/ajaxified-grid/go-into-edit-mode-with-ajax-double-click
previous_url: controls/grid/ajaxified-radgrid/go-into-edit-mode-with-ajax-double-click
tags: go,into,edit,mode,with,ajax,double-click
published: True
position: 0
---

# Go into Edit Mode with AJAX Double-Click



##

You may want to allow the user to force grid item in edit mode by simply double-clicking the respective item (an easy and intuitive approach). This chapter describes how to switch a row in edit mode by double-clicking an arbitrary grid item and how to update this row when the user clicks another row in the grid. Furthermore, a user-friendly confirm dialog will be displayed to prompt whether the operation should be propagated or not.

The example uses **<RadAjaxManagerInstance>.AjaxRequest(args)** calls (wiring the **RowClick** and **RowDblClick** events) and the **onchange** event of the inputs in the grid rows used for editing (the handler for the **onchange** event is assigned in the **GridCreated**handler of the grid):

````ASP.NET
<asp:ScriptManager ID="ScriptManager1" runat="server">
</asp:ScriptManager>
<!-- content start -->
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
  <script type="text/javascript">
    var hasChanges, inputs, dropdowns, editedRow; function RowClick(sender, eventArgs) {
      if (editedRow != null && hasChanges) {
        if (confirm("Update changes?")) {
          hasChanges = false; $find("<%= RadGrid1.MasterTableView.ClientID %>").updateItem(editedRow);
        }
        else {
          hasChanges = false;
        }
      }
    }
    function RowDblClick(sender, eventArgs) {
      if (editedRow && hasChanges) {
        if (confirm("Update changes?")) {
          hasChanges = false; $find("<%= RadGrid1.MasterTableView.ClientID %>").updateItem(editedRow);
        }
        else {
          hasChanges = false;
        }
      }
      editedRow = eventArgs.get_itemIndexHierarchical();
      $find("<%= RadGrid1.MasterTableView.ClientID %>").editItem(editedRow);
    }
    function GridCreated(sender, eventArgs) {
      var gridElement = sender.get_element();
      var elementsToUse = []; inputs = gridElement.getElementsByTagName("input");
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type.toLowerCase() == "hidden") {
          continue;
        }
        Array.add(elementsToUse, inputs[i]); inputs[i].onchange = TrackChanges;
      }
      dropdowns = gridElement.getElementsByTagName("select");
      for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].onchange = TrackChanges;
      }
      setTimeout(function () {
        if (elementsToUse[0]) elementsToUse[0].focus();
      }, 100);
    }
    function TrackChanges(e) { hasChanges = true; }    </script>
</telerik:RadCodeBlock>
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
  <AjaxSettings>
    <telerik:AjaxSetting AjaxControlID="RadGrid1">
      <UpdatedControls>
        <telerik:AjaxUpdatedControl ControlID="RadGrid1" />
        <telerik:AjaxUpdatedControl ControlID="Label1" />
      </UpdatedControls>
    </telerik:AjaxSetting>
  </AjaxSettings>
</telerik:RadAjaxManager>
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" DataSourceID="SessionDataSource1" Width="97%" Skin="Office2007"
  ShowStatusBar="True" AllowSorting="True" PageSize="7" GridLines="None" AllowPaging="True"
  runat="server" AllowAutomaticUpdates="True" OnItemUpdated="RadGrid1_ItemUpdated"
  AutoGenerateColumns="False" OnDataBound="RadGrid1_DataBound">
  <PagerStyle Mode="NumericPages" />
  <MasterTableView Width="100%" DataKeyNames="OrderID,ProductID" EditMode="InPlace"
    AutoGenerateColumns="false">
    <Columns>
      <telerik:GridBoundColumn UniqueName="OrderID" DataField="OrderID" HeaderText="OrderID"
        ReadOnly="True" HeaderStyle-Width="20%" />
      <telerik:GridBoundColumn UniqueName="ProductID" DataField="ProductID" HeaderText="ProductID"
        ReadOnly="True" HeaderStyle-Width="15%" />
      <telerik:GridBoundColumn UniqueName="Quantity" DataField="Quantity" HeaderText="Quantity"
        HeaderStyle-Width="20%" />
      <telerik:GridDropDownColumn UniqueName="UnitPrice" HeaderText="Unit price" ListTextField="UnitPrice"
        ListValueField="UnitPrice" DataSourceID="SessionDataSource1" DataField="UnitPrice"
        HeaderStyle-Width="25%" />
      <telerik:GridBoundColumn UniqueName="Discount" DataField="Discount" HeaderText="Discount"
        HeaderStyle-Width="20%" />
    </Columns>
  </MasterTableView>
  <ClientSettings>
    <ClientEvents OnRowClick="RowClick" OnRowDblClick="RowDblClick" OnGridCreated="GridCreated" />
  </ClientSettings>
</telerik:RadGrid>
<br />
<asp:Label ID="Label1" runat="server" EnableViewState="false" />
<br />
<sds:sessiondatasource id="SessionDataSource1" connectionstring="<%$ ConnectionStrings:NorthwindConnectionString %>"
  providername="System.Data.SqlClient" selectcommand="SELECT TOP 18 * FROM [Order Details]"
  runat="server" primarykeyfields="OrderID,ProductID" conflictdetection="CompareAllValues"
  oldvaluesparameterformatstring="original_{0}" updatecommand="UPDATE [Order Details] SET [UnitPrice] = @UnitPrice, [Quantity] = @Quantity, [Discount] = @Discount WHERE [OrderID] = @OrderID AND [ProductID] = @ProductID AND [UnitPrice] = @UnitPrice AND [Quantity] = @Quantity AND [Discount] = @Discount">            <UpdateParameters>                <asp:Parameter Name="UnitPrice" Type="Decimal" />                <asp:Parameter Name="Quantity" Type="Int16" />                <asp:Parameter Name="Discount" Type="Single" />                <asp:Parameter Name="original_OrderID" Type="Int32" />                <asp:Parameter Name="original_ProductID" Type="Int32" />                <asp:Parameter Name="original_UnitPrice" Type="Decimal" />                <asp:Parameter Name="original_Quantity" Type="Int16" />                <asp:Parameter Name="original_Discount" Type="Single" />            </UpdateParameters>        </sds:sessiondatasource>
````



And in the code-behind:



````VB
Protected Sub RadGrid1_ItemUpdated(ByVal source As Object, ByVal e As GridUpdatedEventArgs) Handles RadGrid1.ItemUpdated
    If Not e.Exception Is Nothing Then
        e.KeepInEditMode = True
        e.ExceptionHandled = True
        SetMessage(Server.HtmlEncode("Unable to update Orders. Reason: " + e.Exception.Message).Replace("'", "'").Replace(vbCrLf, "<br />"))
    Else
        Dim dataItem As GridDataItem = e.Item
        SetMessage("Order " & dataItem.GetDataKeyValue("OrderID") & ", ProductID " & dataItem.GetDataKeyValue("ProductID") & " updated")
    End If
End Sub
Private Sub DisplayMessage(ByVal text As String)
    Label1.Text = String.Format("<span>{0}</span>", text)
End Sub
Private Sub SetMessage(ByVal message As String)
    gridMessage = message
End Sub
Private gridMessage As String = Nothing
Protected Sub RadGrid1_DataBound(ByVal sender As Object, ByVal e As EventArgs) Handles RadGrid1.DataBound
    If Not String.IsNullOrEmpty(gridMessage) Then
        DisplayMessage(gridMessage)
    End If
End Sub
````
````C#
protected void RadGrid1_ItemUpdated(object source, Telerik.Web.UI.GridUpdatedEventArgs e)
{
    if (e.Exception != null)
    {
        e.KeepInEditMode = true;
        e.ExceptionHandled = true;
        SetMessage(Server.HtmlEncode("Unable to update Orders. Reason: " + e.Exception.Message).Replace("'", "&#39;").Replace("\r\n", "<br />"));
    }
    else
    {
        GridDataItem dataItem = (GridDataItem)e.Item;
        SetMessage("Order " + dataItem.GetDataKeyValue("OrderID") + ", ProductID " + dataItem.GetDataKeyValue("ProductID") + " updated");
    }
}
private void DisplayMessage(string text)
{
    Label1.Text = string.Format("<span>{0}</span>", text);
}
private void SetMessage(string message)
{
    gridMessage = message;
}
private string gridMessage = null;
protected void RadGrid1_DataBound(object sender, EventArgs e)
{
    if (!string.IsNullOrEmpty(gridMessage))
    {
        DisplayMessage(gridMessage);
    }
}
````

