---
title: Enable and Disable RadGrid
page_title: Enable and Disable RadGrid - RadGrid
description: Learn how to enable and disable RadGrid on the client and server in ASP.NET AJAX.
slug: grid/visible/enabled-conventions/enabled-disabled-conventions
components: ["grid"]
tags: enabled, disabled, client-side, server-side, grid
published: True
position: 1
---

# Enable and Disable RadGrid

**RadGrid** renders nested links, images, inputs, and other elements. Disabling the grid therefore requires additional client-side work, while server-side disabling also requires the relevant client features to be turned off.

## Client-Side

To disable a grid on the client, disable its interactive elements and turn off the client features that can still respond to user input. You can restore the grid with an AJAX request, which causes the server to render the enabled state again.

The following example disables links, images, inputs, sorting controls, scrolling, keyboard navigation, selection, resizing, grouping, and row-click postbacks. The external buttons call the client-side disable function and the AJAX request that restores the grid.

> caption Disable RadGrid client-side and restore it with an AJAX request

````ASP.NET
<asp:ScriptManager ID="ScriptManager1" runat="server" />
<script type="text/javascript">
  var gridCtrl;
  function GridCreated(sender, args) {
    gridCtrl = sender;
  }
  function KeyPressed(key) {
    if (gridCtrl.get_element().disabled) {
      return false;
    }
  }
  function DisableGrid() {
    gridCtrl.get_element().disabled = "disabled";
    gridCtrl.ClientSettings.Selecting.AllowRowSelect = false;
    gridCtrl.ClientSettings.Resizing.AllowColumnResize = false;
    gridCtrl.ClientSettings.Resizing.AllowRowResize = false;
    gridCtrl.ClientSettings.AllowColumnsReorder = false;
    gridCtrl.ClientSettings.AllowDragToGroup = false;
    gridCtrl.ClientSettings.EnablePostBackOnRowClick = false;
    var links = gridCtrl.get_element().getElementsByTagName("a");
    var images = gridCtrl.get_element().getElementsByTagName("img");
    var inputs = gridCtrl.get_element().getElementsByTagName("input");
    var sortButtons = gridCtrl.get_element().getElementsByTagName("span");
    for (var i = 0; i < links.length; i++) {
      links[i].href = "";
      links[i].onclick = function () {
        return false;
      }
    }
    for (var i = 0; i < images.length; i++) {
      images[i].onclick = function () {
        return false;
      }
    }
    for (var i = 0; i < sortButtons.length; i++) {
      sortButtons[i].onclick = function () {
        return false;
      }
    }
    for (var i = 0; i < inputs.length; i++) {
      switch (inputs[i].type) {
        case "button":
          inputs[i].onclick = function () {
            return false;
          }
          break;
        case "checkbox":
          inputs[i].disabled = "disabled";
          break;
        case "radio":
          inputs[i].disabled = "disabled";
          break;
        case "text":
          inputs[i].disabled = "disabled";
          break;
        case "password":
          inputs[i].disabled = "disabled";
          break;
        case "image":
          inputs[i].onclick = function () {
            return false;
          }
          break;
        case "file":
          inputs[i].disabled = "disabled";
          break;
        default:
          break;
      }
    }
    var scrollArea = $find("<%= RadGrid1.ClientID %>").GridDataDiv;
    if (scrollArea) {
      scrollArea.style.overflow = "hidden";
    }
  }
  function EnableGrid() {
    $find("<%=RadAjaxManager1.ClientID %>").ajaxRequest("");
  }
  </script>
  <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
    <AjaxSettings>
      <telerik:AjaxSetting AjaxControlID="RadAjaxManager1">
        <UpdatedControls>
          <telerik:AjaxUpdatedControl ControlID="RadGrid1">
        </UpdatedControls>
      </telerik:AjaxSetting>
    </AjaxSettings>
  </telerik:RadAjaxManager>
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" DataSourceID="AccessDataSource1" runat="server" Skin="Outlook"
    Width="95%" AutoGenerateColumns="False" PageSize="10" AllowSorting="True" AllowPaging="True"
    GridLines="None" ShowGroupPanel="true" ShowStatusBar="true">
    <PagerStyle Mode="NumericPages"></PagerStyle>
    <MasterTableView DataSourceID="AccessDataSource1" DataKeyNames="CustomerID" AllowMultiColumnSorting="True"
      Width="100%" AllowFilteringByColumn="true">
      <DetailTables>
        <telerik:GridTableView DataKeyNames="OrderID" DataSourceID="AccessDataSource2" Width="100%"
          runat="server" AllowFilteringByColumn="true">
          <ParentTableRelation>
            <telerik:GridRelationFields DetailKeyField="CustomerID" MasterKeyField="CustomerID" />
          </ParentTableRelation>
          <Columns>
            <telerik:GridEditCommandColumn UniqueName="EditCommandColumn" />
            <telerik:GridBoundColumn SortExpression="OrderID" HeaderText="OrderID" HeaderButtonType="TextButton"
              DataField="OrderID" UniqueName="OrderID">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn SortExpression="OrderDate" HeaderText="Date Ordered" HeaderButtonType="TextButton"
              DataField="OrderDate" UniqueName="OrderDate">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn SortExpression="Freight" HeaderText="Freight" HeaderButtonType="TextButton"
              DataField="Freight" UniqueName="Freight">
            </telerik:GridBoundColumn>
            <telerik:GridButtonColumn UniqueName="DeleteColumn" CommandName="Delete" ButtonType="ImageButton"
              ImageUrl="RadControls/Grid/Skins/Orange/Delete.gif" />
          </Columns>
        </telerik:GridTableView>
      </DetailTables>
      <Columns>
        <telerik:GridClientSelectColumn />
        <telerik:GridBoundColumn SortExpression="CustomerID" HeaderText="CustomerID" HeaderButtonType="TextButton"
          DataField="CustomerID" UniqueName="CustomerID">
        </telerik:GridBoundColumn>
        <telerik:GridBoundColumn SortExpression="ContactName" HeaderText="Contact Name" HeaderButtonType="TextButton"
          DataField="ContactName" UniqueName="ContactName">
        </telerik:GridBoundColumn>
        <telerik:GridBoundColumn SortExpression="CompanyName" HeaderText="Company" HeaderButtonType="TextButton"
          DataField="CompanyName" UniqueName="CompanyName">
        </telerik:GridBoundColumn>
        <telerik:GridButtonColumn UniqueName="DeleteColumn" CommandName="Delete" ButtonType="ImageButton"
          ImageUrl="RadControls/Grid/Skins/Orange/Delete.gif" />
      </Columns>
    </MasterTableView>
    <ClientSettings AllowColumnsReorder="true" AllowDragToGroup="true" AllowKeyboardNavigation="true"
      EnablePostBackOnRowClick="true">
      <Resizing AllowColumnResize="true" EnableRealTimeResize="true" />
      <Selecting AllowRowSelect="true" />
      <ClientEvents OnKeyPress="KeyPressed" OnGridCreated="GridCreated" />
      <Scrolling AllowScroll="true" UseStaticHeaders="true" ScrollHeight="200px" />
    </ClientSettings>
  </telerik:RadGrid>
<asp:AccessDataSource ID="AccessDataSource1" DataFile="~/Grid/Data/Access/Nwind.mdb"
  SelectCommand="SELECT * FROM Customers" runat="server"></asp:AccessDataSource>
<asp:AccessDataSource ID="AccessDataSource2" DataFile="~/Grid/Data/Access/Nwind.mdb"
  SelectCommand="SELECT * FROM Orders Where CustomerID = ?" runat="server">
  <SelectParameters>
    <asp:Parameter Name="CustomerID" Type="string" />
  </SelectParameters>
</asp:AccessDataSource>
<br />
<input id="btnClientDisable" type="button" value="Disable grid" onclick="DisableGrid()" />
<input id="btnEnable" type="button" value="Enable grid" onclick="EnableGrid()" />
````

## Server-Side

To disable the grid on the server, set its **Enabled** property to `False` and disable row-click postbacks, column resizing, row selection, and keyboard navigation. When filtering is enabled, disable the filter images in the **ItemCreated** event so that users cannot open a filter menu while the grid is disabled. Restore these settings when the AJAX request enables the grid again.

> caption Enable and disable RadGrid on the server in response to AJAX requests

````ASP.NET
<asp:ScriptManager ID="ScriptManager1" runat="server" />
<script type="text/javascript">
        function DisableGrid()
            {
              $find("<%=RadAjaxManager1.ClientID %>").ajaxRequest("DisableGrid");
            }
             function EnableGrid()
            {
              $find("<%=RadAjaxManager1.ClientID %>").ajaxRequest("EnableGrid");
            }
</script>

<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" OnAjaxRequest="RadAjaxManager1_AjaxRequest">
    <AjaxSettings>
  <telerik:AjaxSetting AjaxControlID="RadAjaxManager1">
        <UpdatedControls>
          <telerik:AjaxUpdatedControl ControlID="RadGrid1">
        </UpdatedControls>
      </telerik:AjaxSetting>
    </AjaxSettings>
  </telerik:RadAjaxManager>
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" DataSourceID="AccessDataSource1" runat="server" Skin="Outlook"
    Width="95%" AutoGenerateColumns="False" PageSize="10" AllowSorting="True" AllowPaging="True"
    GridLines="None" ShowGroupPanel="true" ShowStatusBar="true" OnItemCreated="RadGrid1_ItemCreated"
    OnPreRender="RadGrid1_PreRender">
    <PagerStyle Mode="NumericPages"></PagerStyle>
    <MasterTableView DataSourceID="AccessDataSource1" DataKeyNames="CustomerID" AllowMultiColumnSorting="True"
      Width="100%" AllowFilteringByColumn="true">
      <DetailTables>
        <telerik:GridTableView DataKeyNames="OrderID" DataSourceID="AccessDataSource2" Width="100%"
          runat="server" AllowFilteringByColumn="true">
          <ParentTableRelation>
            <telerik:GridRelationFields DetailKeyField="CustomerID" MasterKeyField="CustomerID" />
          </ParentTableRelation>
          <Columns>
            <telerik:GridEditCommandColumn UniqueName="EditCommandColumn" />
            <telerik:GridBoundColumn SortExpression="OrderID" HeaderText="OrderID" HeaderButtonType="TextButton"
              DataField="OrderID" UniqueName="OrderID">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn SortExpression="OrderDate" HeaderText="Date Ordered" HeaderButtonType="TextButton"
              DataField="OrderDate" UniqueName="OrderDate">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn SortExpression="Freight" HeaderText="Freight" HeaderButtonType="TextButton"
              DataField="Freight" UniqueName="Freight">
            </telerik:GridBoundColumn>
            <telerik:GridButtonColumn UniqueName="DeleteColumn" CommandName="Delete" ButtonType="ImageButton"
              ImageUrl="RadControls/Grid/Skins/Orange/Delete.gif" />
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
        <telerik:GridButtonColumn UniqueName="DeleteColumn" CommandName="Delete" ButtonType="ImageButton"
          ImageUrl="RadControls/Grid/Skins/Orange/Delete.gif" />
      </Columns>
    </MasterTableView>
    <ClientSettings AllowColumnsReorder="true" AllowDragToGroup="true" AllowKeyboardNavigation="true"
      EnablePostBackOnRowClick="true">
      <Resizing AllowColumnResize="true" EnableRealTimeResize="true" />
      <Selecting AllowRowSelect="true" />
      <Scrolling AllowScroll="true" UseStaticHeaders="true" ScrollHeight="200px" />
    </ClientSettings>
  </telerik:RadGrid>
  <asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Customers"
    runat="server"></asp:SqlDataSource>
  <asp:SqlDataSource ID="SqlDataSource2" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Orders Where CustomerID = @CustomerID"
    runat="server">
    <SelectParameters>
      <asp:Parameter Name="CustomerID" SessionField="CustomerID" Type="string" />
    </SelectParameters>
  </asp:SqlDataSource>
  <br />
  <input id="btnServerDisable" type="button" value="Disable grid" onclick="DisableGrid()" />
  <input id="btnEnable" type="button" value="Enable grid" onclick="EnableGrid()" />
````

> caption Update RadGrid client settings and filter images in the AJAX request handler

````C#
protected void RadAjaxManager1_AjaxRequest(object sender, AjaxRequestEventArgs e)
{
  switch (e.Argument)
  {
    case "DisableGrid":
      RadGrid1.Enabled = false;
      RadGrid1.ClientSettings.EnablePostBackOnRowClick = false;
      RadGrid1.ClientSettings.Resizing.AllowColumnResize = false;
      RadGrid1.ClientSettings.Selecting.AllowRowSelect = false;
      RadGrid1.ClientSettings.AllowKeyboardNavigation = false;
      Session["disableFilterMenu"] = true;
      break;
    case "EnableGrid":
      RadGrid1.Enabled = true;
      RadGrid1.ClientSettings.EnablePostBackOnRowClick = true;
      RadGrid1.ClientSettings.Resizing.AllowColumnResize = true;
      RadGrid1.ClientSettings.Selecting.AllowRowSelect = true;
      RadGrid1.ClientSettings.AllowKeyboardNavigation = true;
      Session["disableFilterMenu"] = null;
      break;
  }

  RadGrid1.Rebind();
}

    protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
    {
         if (e.Item is GridFilteringItem && Session["disableFilterMenu"] != null)
        {
            foreach(GridColumn column in e.Item.OwnerTableView.RenderColumns)
            {
               //you can check for other types of built-in columns as well
                if(column is GridBoundColumn)
               {
                   Image filterImage = (e.Item as GridFilteringItem)[column.UniqueName].Controls[1] as Image;
                   filterImage.Attributes[ "disabled"] = "true";
               }
            }
        }
    }
    protected void RadGrid1_PreRender(object sender, EventArgs e)
    {
        Session["disableFilterMenu"] = null;
    }

````
````VB
Protected Sub RadAjaxManager1_AjaxRequest(ByVal sender As Object, ByVal e As AjaxRequestEventArgs)
    Select Case e.Argument
        Case "DisableGrid"
            RadGrid1.Enabled = False
            RadGrid1.ClientSettings.EnablePostBackOnRowClick = False
            RadGrid1.ClientSettings.Resizing.AllowColumnResize = False
            RadGrid1.ClientSettings.Selecting.AllowRowSelect = False
            RadGrid1.ClientSettings.AllowKeyboardNavigation = False

            Session("disableFilterMenu") = True
            Exit Select
        Case "EnableGrid"
            RadGrid1.Enabled = True
            RadGrid1.ClientSettings.EnablePostBackOnRowClick = True
            RadGrid1.ClientSettings.Resizing.AllowColumnResize = True
            RadGrid1.ClientSettings.Selecting.AllowRowSelect = True
            RadGrid1.ClientSettings.AllowKeyboardNavigation = True
            Session("disableFilterMenu") = Nothing

            Exit Select
    End Select

    RadGrid1.Rebind()
End Sub

Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs) Handles RadGrid1.ItemCreated

    If TypeOf e.Item Is GridFilteringItem AndAlso Session("disableFilterMenu") <> Nothing Then

        For Each column As GridColumn In e.Item.OwnerTableView.RenderColumns

            'you can check for other types of built-in columns as well
            If TypeOf column Is GridBoundColumn Then
                Dim filterImage As Image = CType(CType(e.Item, GridFilteringItem)(column.UniqueName).Controls(1), Image)
                filterImage.Attributes("disabled") = "true"
            End If
        Next
    End If
End Sub
Protected Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As EventArgs) Handles RadGrid1.PreRender
    Session("disableFilterMenu") = Nothing
End Sub
````

## See Also

- [Control RadGrid visibility]({%slug grid/visible-and-enabled-conventions/visible-invisible-conventions%})
- [Ajaxifying RadGrid]({%slug grid/performance/ajaxifying-radgrid%})
- [NeedDataSource event]({%slug grid/server-side-programming/events/needdatasource%})

