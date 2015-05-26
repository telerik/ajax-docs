---
title: Enabled Disabled Conventions
page_title: Enabled Disabled Conventions | RadGrid for ASP.NET AJAX Documentation
description: Enabled Disabled Conventions
slug: grid/visible/enabled-conventions/enabled-disabled-conventions
tags: enabled,disabled,conventions
published: True
position: 1
---

# Enabled/Disabled Conventions


RadGrid is a complex ASP.NET control and like with the Microsoft GridView sometimes requires additional coding when its table structure should be deactivated client/server side (due to the nested control definitions and features switched on).

## Client-side

When you want to enable/disable your grid client-side when certain conditions are met, you will need to take into account that you should disable the active links/images/inputs/spans/etc. inside the grid manually. To do that, you will need to traverse the elements inside the table structure and perform one of the actions outlined below:

* set the *disabled* attribute of the corresponding html element

* clear the href property of anchor tags

* return false from the onclick handler of images/links/buttons if attached

In addition, you can disable the keyboard navigation of the grid and the scrolling option along with some of the client features which has been enabled server-side. Later on, in order to enable the grid again and allow the user to interact with it, simply perform an ajax request (to simulate client-side behavior) - thus the grid will undo the changes made client-side automatically and will be functional again.The code below demonstrates how to enable/disable grid instance from external html buttons:

````C#
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
      scrollArea.disabled = "disabled";
    }
  }
  function EnableGrid() {
    $find("<%=RadAjaxManager1.ClientID %>").ajaxRequest("");
  }
  </script>
  <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
    <AjaxSettings>
      <telerik:AjaxSetting AjaxControlID="RadGrid1">
        <UpdatedControls>
          <telerik:AjaxUpdatedControl ControlID="RadGrid1">
        </UpdatedControls>
      </telerik:AjaxSetting>
    </AjaxSettings>
  </telerik:RadAjaxManager>
  <pre xmlns="http://ddue.schemas.microsoft.com/authoring/2003/5">
<telerik:RadGrid ID="RadGrid1" DataSourceID="AccessDataSource1" runat="server" Skin="Outlook"
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
<input id="btnEnable" type="button" value="Enable grid" onclick="EnableGrid()" /></pre>
````



## Server-side

The approach differs a bit when you prefer to disable the grid server-side. To summarize, you have to set the **Enabled** property of the control to **false** and switch off the auto postback on row click, column resizing, client row selection and keyboard navigation. Finally, locate the filter images when filtering is enabled and disable them on *ItemCreated* as well (thus preventing the filter menu from being displayed on click).Later on, roll back the changes when you enable the grid on the page.The following implementation shows how to enable/disable RadGrid with ajax request from external html buttons:



````ASP.NET
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

<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
    <AjaxSettings>
      <telerik:AjaxSetting AjaxControlID="RadGrid1">
        <UpdatedControls>
          <telerik:AjaxUpdatedControl ControlID="RadGrid1">
        </UpdatedControls>
      </telerik:AjaxSetting>
    </AjaxSettings>
  </telerik:RadAjaxManager>
<telerik:RadGrid ID="RadGrid1" DataSourceID="AccessDataSource1" runat="server" Skin="Outlook"
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
````C#
protected override void RadAjaxManager1_AjaxRequest(object sender, AjaxRequestEventArgs e)
    {            
            switch(e.Argument)
            {
                 case "DisableGrid":
                    {
                        RadGrid1.Enabled = false;
                        RadGrid1.ClientSettings.EnablePostBackOnRowClick = false;
                        RadGrid1.ClientSettings.Resizing.AllowColumnResize = false;
                        RadGrid1.ClientSettings.Selecting.AllowRowSelect = false;
                        RadGrid1.ClientSettings.AllowKeyboardNavigation = false;

                        Session[ "disableFilterMenu"] = true;
                        break;
                    }
                 case "EnableGrid":
                    {
                        RadGrid1.Enabled = true;
                        RadGrid1.ClientSettings.EnablePostBackOnRowClick = true;
                        RadGrid1.ClientSettings.Resizing.AllowColumnResize = true;
                        RadGrid1.ClientSettings.Selecting.AllowRowSelect = true;
                        RadGrid1.ClientSettings.AllowKeyboardNavigation = true;

                        break;
                    }
            }
            RadGrid1.Rebind();

        }
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
        Session[ "disableFilterMenu"] = null;
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

            Exit Select
    End Select

    RadGrid1.Rebind()
End If
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

