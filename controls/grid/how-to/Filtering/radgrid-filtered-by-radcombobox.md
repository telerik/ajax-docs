---
title: RadGrid Filtered by RadComboBox
page_title: RadGrid Filtered by RadComboBox | RadGrid for ASP.NET AJAX Documentation
description: RadGrid Filtered by RadComboBox
slug: grid/how-to/filtering/radgrid-filtered-by-radcombobox
previous_url: grid/functionality/filtering/how-to/radgrid-filtered-by-radcombobox
tags: radgrid,filtered,by,radcombobox
published: True
position: 1
---

# RadGrid Filtered by RadComboBox



##

The [Grid Filtered by Combo]( http://demos.telerik.com/aspnet-ajax/Controls/Examples/Integration/GridComboAjax/DefaultCS.aspx ) demo presents how to display dependant records in **RadGrid**when a filtering criterion is selected in an external **RadComboBox** control. The grid is populated through an asynchronous call that is made using a **RadAjaxManager** instance which is configured to refresh the grid and the combobox. A loading panel indicates when the ajax request is in progress.

All of this is achieved in a completely codeless manner through a select **ControlParameter** on the grid's data source (which holds the **ControlID** and the **PropertyName** of the drop-down list) and the AJAX manager's settings.

Here is a screen shot from the example and the aspx code:

![Grid filtered by combo](images/grdGridFilteredByCombo.PNG)

````ASP.NET
<asp:Label ID="comboLbl" runat="server" Text="Select contact name to view its product orders." />
<telerik:RadComboBox ID="NamesDDL" runat="server" AutoPostBack="True" DataSourceID="dllDataSource"
    DataTextField="ContactName" DataValueField="SupplierID" Width="250px" Height="150px"
    AppendDataBoundItems="true">
    <Items>
        <telerik:RadComboBoxItem Text="All" Value="0" Selected="true" />
    </Items>
</telerik:RadComboBox>
<telerik:RadGrid ID="OrdersGrid" AllowPaging="true" DataSourceID="gridSource" runat="server"
        GridLines="None" Width="97%" AllowSorting="true">
</telerik:RadGrid>
<asp:SqlDataSource ID="dllDataSource" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    SelectCommand="SELECT TOP 20 [ContactName], [SupplierID] FROM [Suppliers]"></asp:SqlDataSource>
<asp:SqlDataSource ID="gridSource" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    SelectCommand="if (@SupplierID <> 0) begin SELECT ProductID, ProductName, QuantityPerUnit, UnitPrice, UnitsInStock, Discontinued FROM Products WHERE SupplierID = @SupplierID end
        else begin SELECT ProductID, ProductName, QuantityPerUnit, UnitPrice, UnitsInStock, Discontinued FROM Products end">
    <SelectParameters>
        <asp:ControlParameter Name="SupplierID" PropertyName="SelectedValue" ControlID="NamesDDL" />
    </SelectParameters>
</asp:SqlDataSource>
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" EnableAJAX="true" DefaultLoadingPanelID="RadAjaxLoadingPanel1">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="NamesDDL">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="OrdersGrid" LoadingPanelID="AjaxLoadingPanel1" />
                <telerik:AjaxUpdatedControl ControlID="NamesDDL" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" />
````


