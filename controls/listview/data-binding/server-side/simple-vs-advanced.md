---
title: Simple vs Advanced
page_title: Simple vs Advanced | RadListView for ASP.NET AJAX Documentation
description: Simple vs Advanced
slug: listview/data-binding/server-side/simple-vs-advanced
tags: simple,vs,advanced
published: True
position: 0
---

# Simple vs Advanced



## Advanced binding with NeedDataSource event handling

The key to the advanced data binding of Telerik RadListView is handling correctly the NeedDataSource event. That's why we chose this exact name. 'Need' in this case actually means that if at an exact moment the data-source property does not point to a valid data-source object, the listview will not behave correctly.

This event fires in the following cases:

* Right after **OnLoad**, Telerik RadListView checks the viewstate for stored listview-related information. If such information is missing (when the page loads for the first time), the **NeedDataSource** event is fired. This also means that if the **EnableViewState** property of the control has been set to **false**, the listview will bind **each time the page** loads (not only the first time)

* After automatic sorting

* When paging event occurs

* When **Select** command is fired

* Right after **Edit/Update/Delete/Insert** commands finish execution. You can cancel these operations handling the **ItemCommand** event and assigning **false** value to the **Canceled** property of the **e** event argument

* When grouping/ungrouping

* When resorting a group

* When filtering fields

* When a call to the **Rebind()** listview method takes place

* In some other custom cases.

The advantages of using this event are that the developer does not need to write any code handling the logic about when and how the data-binding should be processed. It is still the developer's responsibility to construct properly a data source object and assign it to the RadListView's DataSource property.

In the code of the **NeedDataSource** handler you should prepare the data source (list of objects) for Telerik RadListView and assign it to the grid's **DataSource** property.

>note  **You should never call the DataBind() method from inside the NeedDataSource handler or mix simple data-binding mode with advanced data-binding**
>


Alternatively, you can use AccessDataSource/SqlDataSource/ObjectDataSource/XmlDataSource controls to populate Telerik RadListView with data - this is another advanced data-binding mode of the control which allows automatic operations as well. See the the rest of the examples in this section as well as the Insert/Update/Delete section of the [online demos](https://demos.telerik.com/aspnet-ajax/listview) for more info.

## Simple binding

Simple data-binding through the DataBind() method can be used in simple scenarios which does not require complex operations like insert/delete/update, filtering, etc. For advanced features like data editing, filtering, etc. Telerik RadListView requires advanced data-binding through its NeedDataSource event or a data source control as explained above.

The NeedDataSource event is especially designed to facilitate the work of the developers as you do not need to handle any sorting/paging/filtering/etc. commands manually. Under such circumstances Telerik RadListView will be "smart enough" to perform the corresponding operation automatically. This example illustrates head-to-head comparison between the usage of simple and advanced data binding.

The correct approach when using simple data-binding is to call the DataBind() method on the first page load when !Page.IsPostBack and after handling some event (sort event for example). Keep in mind that if you choose simple data-binding, you will need to assign data-source and rebind the grid after each operation (paging, sorting, editing, etc.) - this copies exactly MS ListView behavior.

The code snippets below are taken from the [corresponding online demo](https://demos.telerik.com/aspnet-ajax/listview/examples/databinding/simplevsadvancedbinding/defaultcs.aspx) of the product and illustrate direct comparison between the simple and advanced binding regime of RadListView:



````ASP.NET
	    <telerik:RadScriptManager ID="RadScriptManager" runat="server" />
	    <telerik:RadFormDecorator ID="RadFormDecorator1" runat="server" />
	    <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	        <AjaxSettings>
	            <telerik:AjaxSetting AjaxControlID="RadDataPager1">
	                <UpdatedControls>
	                    <telerik:AjaxUpdatedControl ControlID="RadDataPager1" />
	                    <telerik:AjaxUpdatedControl ControlID="RadListView1" LoadingPanelID="RadAjaxLoadingPanel1" />
	                </UpdatedControls>
	            </telerik:AjaxSetting>
	            <telerik:AjaxSetting AjaxControlID="RadDataPager2">
	                <UpdatedControls>
	                    <telerik:AjaxUpdatedControl ControlID="RadDataPager2" />
	                    <telerik:AjaxUpdatedControl ControlID="RadListView2" LoadingPanelID="RadAjaxLoadingPanel1" />
	                </UpdatedControls>
	            </telerik:AjaxSetting>
	            <telerik:AjaxSetting AjaxControlID="ddList1">
	                <UpdatedControls>
	                    <telerik:AjaxUpdatedControl ControlID="ddList1" UpdatePanelRenderMode="Inline" />
	                    <telerik:AjaxUpdatedControl ControlID="RadListView1" LoadingPanelID="RadAjaxLoadingPanel1" />
	                </UpdatedControls>
	            </telerik:AjaxSetting>
	            <telerik:AjaxSetting AjaxControlID="ddList2">
	                <UpdatedControls>
	                    <telerik:AjaxUpdatedControl ControlID="ddList2" UpdatePanelRenderMode="Inline" />
	                    <telerik:AjaxUpdatedControl ControlID="RadListView2" LoadingPanelID="RadAjaxLoadingPanel1" />
	                </UpdatedControls>
	            </telerik:AjaxSetting>
	            <telerik:AjaxSetting AjaxControlID="RadListView1">
	                <UpdatedControls>
	                    <telerik:AjaxUpdatedControl ControlID="RadListView1" LoadingPanelID="RadAjaxLoadingPanel1" />
	                </UpdatedControls>
	            </telerik:AjaxSetting>
	            <telerik:AjaxSetting AjaxControlID="RadListView2">
	                <UpdatedControls>
	                    <telerik:AjaxUpdatedControl ControlID="RadListView2" LoadingPanelID="RadAjaxLoadingPanel1" />
	                </UpdatedControls>
	            </telerik:AjaxSetting>
	        </AjaxSettings>
	    </telerik:RadAjaxManager>
	    <telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" MinDisplayTime="0" />
	    <h3>
	        Advanced binding with NeedDataSource event handling</h3>
	    <telerik:RadListView ID="RadListView1" Width="97%" AllowPaging="True" runat="server"
	        AllowSorting="true" OnNeedDataSource="RadListView1_NeedDataSource" ItemPlaceholderID="ProductsHolder"
	        DataKeyNames="ProductID">
	        <LayoutTemplate>
	            <!-- Set the id of the wrapping container to match the CLIENT ID of the RadListView control to display the AJAX loading panel             In case the listview is embedded in another server control, you will need to append the id of that server control -->
	            <fieldset style="width: 700px;" id="RadListView1">
	                <legend>Products</legend>
	                <asp:Panel ID="ProductsHolder" runat="server" />
	            </fieldset>
	        </LayoutTemplate>
	        <ItemTemplate>
	            <div style="float: left;">
	                <table cellpadding="0" cellspacing="0" style="width: 230px;">
	                    <tr>
	                        <td style="width: 20%;">
	                            Name:
	                        </td>
	                        <td style="width: 80%; padding-left: 5px;">
	                            <%# Eval("ProductName") %>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            Quantity:
	                        </td>
	                        <td style="width: 80%; padding-left: 5px;">
	                            <%# Eval("QuantityPerUnit") %>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            Price:
	                        </td>
	                        <td style="width: 80%; padding-left: 5px;">
	                            <%# DataBinder.Eval(Container.DataItem, "UnitPrice", "{0:C}") %>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            Units:
	                        </td>
	                        <td style="width: 80%; padding-left: 5px;">
	                            <%# Eval("UnitsInStock") %>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            Available:
	                        </td>
	                        <td style="width: 80%; padding-left: 5px;">
	                            <%# ((bool)DataBinder.Eval(Container.DataItem,"Discontinued") == false ? "Yes" : "No") %>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            <hr />
	                        </td>
	                        <td>
	                            <hr />
	                        </td>
	                    </tr>
	                </table>
	            </div>
	        </ItemTemplate>
	    </telerik:RadListView>
	    <table cellpadding="0" cellspacing="0" width="100%">
	        <tr>
	            <td>
	                <telerik:RadDataPager ID="RadDataPager1" runat="server" PagedControlID="RadListView1"
	                    PageSize="6">
	                    <Fields>
	                        <telerik:RadDataPagerButtonField FieldType="FirstPrev" ButtonType="PushButton" />
	                        <telerik:RadDataPagerButtonField FieldType="Numeric" ButtonType="PushButton" />
	                        <telerik:RadDataPagerButtonField FieldType="NextLast" ButtonType="PushButton" />
	                    </Fields>
	                </telerik:RadDataPager>
	            </td>
	            <td>
	                <asp:Label ID="lblSort1" runat="server" Text="Sort by:" Style="padding-right: 5px;" />
	                <telerik:RadComboBox ID="ddList1" runat="server" AutoPostBack="true" OnSelectedIndexChanged="ddList1_SelectedIndexChanged">
	                    <Items>
	                        <telerik:RadComboBoxItem Text="-Select field to sort-" Value="" />
	                        <telerik:RadComboBoxItem Text="Name" Value="ProductName" />
	                        <telerik:RadComboBoxItem Text="Quantity" Value="QuantityPerUnit" />
	                        <telerik:RadComboBoxItem Text="Price" Value="UnitPrice" />
	                        <telerik:RadComboBoxItem Text="Units" Value="UnitsInStock" />
	                        <telerik:RadComboBoxItem Text="Available" Value="Discontinued" />
	                        <telerik:RadComboBoxItem Text="Clear sort" Value="ClearSort" />
	                    </Items>
	                </telerik:RadComboBox>
	            </td>
	        </tr>
	    </table>
	    <br />
	    <h3>
	        Simple binding</h3>
	    <telerik:RadListView ID="RadListView2" Width="97%" AllowPaging="True" runat="server"
	        AllowSorting="true" ItemPlaceholderID="ProductsHolder" DataKeyNames="ProductID"
	        OnPageIndexChanged="RadListView2_PageIndexChanged">
	        <LayoutTemplate>
	            <!-- Set the id of the wrapping container to match the CLIENT ID of the RadListView control to display the ajax loading panel             In case the listview is embedded in another server control, you will need to append the id of that server control -->
	            <fieldset style="width: 700px;" id="RadListView2">
	                <legend>Products</legend>
	                <asp:Panel ID="ProductsHolder" runat="server" />
	            </fieldset>
	        </LayoutTemplate>
	        <ItemTemplate>
	            <div style="float: left">
	                <table cellpadding="0" cellspacing="0" style="width: 230px">
	                    <tr>
	                        <td style="width: 20%;">
	                            Name:
	                        </td>
	                        <td style="width: 80%; padding-left: 5px;">
	                            <%# Eval("ProductName") %>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            Quantity:
	                        </td>
	                        <td style="width: 80%; padding-left: 5px;">
	                            <%# Eval("QuantityPerUnit") %>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            Price:
	                        </td>
	                        <td style="width: 80%; padding-left: 5px;">
	                            <%# DataBinder.Eval(Container.DataItem, "UnitPrice", "{0:C}") %>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            Units:
	                        </td>
	                        <td style="width: 80%; padding-left: 5px;">
	                            <%# Eval("UnitsInStock") %>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            Available:
	                        </td>
	                        <td style="width: 80%; padding-left: 5px;">
	                            <%# ((bool)DataBinder.Eval(Container.DataItem,"Discontinued") == false ? "Yes" : "No") %>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            <hr />
	                        </td>
	                        <td>
	                            <hr />
	                        </td>
	                    </tr>
	                </table>
	            </div>
	        </ItemTemplate>
	    </telerik:RadListView>
	    <table cellpadding="0" cellspacing="0" width="100%">
	        <tr>
	            <td>
	                <telerik:RadDataPager ID="RadDataPager2" runat="server" PagedControlID="RadListView2"
	                    PageSize="6">
	                    <Fields>
	                        <telerik:RadDataPagerButtonField FieldType="FirstPrev" ButtonType="PushButton" />
	                        <telerik:RadDataPagerButtonField FieldType="Numeric" ButtonType="PushButton" />
	                        <telerik:RadDataPagerButtonField FieldType="NextLast" ButtonType="PushButton" />
	                    </Fields>
	                </telerik:RadDataPager>
	            </td>
	            <td>
	                <asp:Label ID="lblSort2" runat="server" Text="Sort by:" Style="padding-right: 5px;" />
	                <telerik:RadComboBox ID="ddList2" runat="server" AutoPostBack="true" OnSelectedIndexChanged="ddList2_SelectedIndexChanged">
	                    <Items>
	                        <telerik:RadComboBoxItem Text="-Select field to sort-" Value="" />
	                        <telerik:RadComboBoxItem Text="Name" Value="ProductName" />
	                        <telerik:RadComboBoxItem Text="Quantity" Value="QuantityPerUnit" />
	                        <telerik:RadComboBoxItem Text="Price" Value="UnitPrice" />
	                        <telerik:RadComboBoxItem Text="Units" Value="UnitsInStock" />
	                        <telerik:RadComboBoxItem Text="Available" Value="Discontinued" />
	                        <telerik:RadComboBoxItem Text="Clear sort" Value="ClearSort" />
	                    </Items>
	                </telerik:RadComboBox>
	            </td>
	        </tr>
	    </table>
````
````VB
<telerik:RadScriptManager ID="RadScriptManager" runat="server" />
<telerik:RadFormDecorator ID="RadFormDecorator1" runat="server" />
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="RadDataPager1">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="RadDataPager1" />
                <telerik:AjaxUpdatedControl ControlID="RadListView1" LoadingPanelID="RadAjaxLoadingPanel1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
        <telerik:AjaxSetting AjaxControlID="RadDataPager2">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="RadDataPager2" />
                <telerik:AjaxUpdatedControl ControlID="RadListView2" LoadingPanelID="RadAjaxLoadingPanel1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
        <telerik:AjaxSetting AjaxControlID="ddList1">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="ddList1" UpdatePanelRenderMode="Inline" />
                <telerik:AjaxUpdatedControl ControlID="RadListView1" LoadingPanelID="RadAjaxLoadingPanel1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
        <telerik:AjaxSetting AjaxControlID="ddList2">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="ddList2" UpdatePanelRenderMode="Inline" />
                <telerik:AjaxUpdatedControl ControlID="RadListView2" LoadingPanelID="RadAjaxLoadingPanel1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
        <telerik:AjaxSetting AjaxControlID="RadListView1">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="RadListView1" LoadingPanelID="RadAjaxLoadingPanel1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
        <telerik:AjaxSetting AjaxControlID="RadListView2">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="RadListView2" LoadingPanelID="RadAjaxLoadingPanel1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" MinDisplayTime="0" />
<h3>
    Advanced binding with NeedDataSource event handling</h3>
<telerik:RadListView ID="RadListView1" Width="97%" AllowPaging="True" runat="server"
    AllowSorting="true" OnNeedDataSource="RadListView1_NeedDataSource" ItemPlaceholderID="ProductsHolder"
    DataKeyNames="ProductID">
    <LayoutTemplate>
        <!-- Set the id of the wrapping container to match the CLIENT ID of the RadListView control to display the ajax loading panel             In case the listview is embedded in another server control, you will need to append the id of that server control -->
        <fieldset style="width: 700px;" id="RadListView1">
            <legend>Products</legend>
            <asp:Panel ID="ProductsHolder" runat="server" />
        </fieldset>
    </LayoutTemplate>
    <ItemTemplate>
        <div style="float: left;">
            <table cellpadding="0" cellspacing="0" style="width: 230px;">
                <tr>
                    <td style="width: 20%;">
                        Name:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <%# Eval("ProductName") %>
                    </td>
                </tr>
                <tr>
                    <td>
                        Quantity:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <%# Eval("QuantityPerUnit") %>
                    </td>
                </tr>
                <tr>
                    <td>
                        Price:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <%# DataBinder.Eval(Container.DataItem, "UnitPrice", "{0:C}") %>
                    </td>
                </tr>
                <tr>
                    <td>
                        Units:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <%# Eval("UnitsInStock") %>
                    </td>
                </tr>
                <tr>
                    <td>
                        Available:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <%# ((bool)DataBinder.Eval(Container.DataItem,"Discontinued") == false ? "Yes" : "No") %>
                    </td>
                </tr>
                <tr>
                    <td>
                        <hr />
                    </td>
                    <td>
                        <hr />
                    </td>
                </tr>
            </table>
        </div>
    </ItemTemplate>
</telerik:RadListView>
<table cellpadding="0" cellspacing="0" width="100%">
    <tr>
        <td>
            <telerik:RadDataPager ID="RadDataPager1" runat="server" PagedControlID="RadListView1"
                PageSize="6">
                <Fields>
                    <telerik:RadDataPagerButtonField FieldType="FirstPrev" ButtonType="PushButton" />
                    <telerik:RadDataPagerButtonField FieldType="Numeric" ButtonType="PushButton" />
                    <telerik:RadDataPagerButtonField FieldType="NextLast" ButtonType="PushButton" />
                </Fields>
            </telerik:RadDataPager>
        </td>
        <td>
            <asp:Label ID="lblSort1" runat="server" Text="Sort by:" Style="padding-right: 5px;" />
            <telerik:RadComboBox ID="ddList1" runat="server" AutoPostBack="true" OnSelectedIndexChanged="ddList1_SelectedIndexChanged">
                <Items>
                    <telerik:RadComboBoxItem Text="-Select field to sort-" Value="" />
                    <telerik:RadComboBoxItem Text="Name" Value="ProductName" />
                    <telerik:RadComboBoxItem Text="Quantity" Value="QuantityPerUnit" />
                    <telerik:RadComboBoxItem Text="Price" Value="UnitPrice" />
                    <telerik:RadComboBoxItem Text="Units" Value="UnitsInStock" />
                    <telerik:RadComboBoxItem Text="Available" Value="Discontinued" />
                    <telerik:RadComboBoxItem Text="Clear sort" Value="ClearSort" />
                </Items>
            </telerik:RadComboBox>
        </td>
    </tr>
</table>
<br />
<h3>
    Simple binding</h3>
<telerik:RadListView ID="RadListView2" Width="97%" AllowPaging="True" runat="server"
    AllowSorting="true" ItemPlaceholderID="ProductsHolder" DataKeyNames="ProductID"
    OnPageIndexChanged="RadListView2_PageIndexChanged">
    <LayoutTemplate>
        <!-- Set the id of the wrapping container to match the CLIENT ID of the RadListView control to display the AJAX loading panel             In case the listview is embedded in another server control, you will need to append the id of that server control -->
        <fieldset style="width: 700px;" id="RadListView2">
            <legend>Products</legend>
            <asp:Panel ID="ProductsHolder" runat="server" />
        </fieldset>
    </LayoutTemplate>
    <ItemTemplate>
        <div style="float: left">
            <table cellpadding="0" cellspacing="0" style="width: 230px">
                <tr>
                    <td style="width: 20%;">
                        Name:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <%# Eval("ProductName") %>
                    </td>
                </tr>
                <tr>
                    <td>
                        Quantity:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <%# Eval("QuantityPerUnit") %>
                    </td>
                </tr>
                <tr>
                    <td>
                        Price:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <%# DataBinder.Eval(Container.DataItem, "UnitPrice", "{0:C}") %>
                    </td>
                </tr>
                <tr>
                    <td>
                        Units:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <%# Eval("UnitsInStock") %>
                    </td>
                </tr>
                <tr>
                    <td>
                        Available:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <%# ((bool)DataBinder.Eval(Container.DataItem,"Discontinued") == false ? "Yes" : "No") %>
                    </td>
                </tr>
                <tr>
                    <td>
                        <hr />
                    </td>
                    <td>
                        <hr />
                    </td>
                </tr>
            </table>
        </div>
    </ItemTemplate>
</telerik:RadListView>
<table cellpadding="0" cellspacing="0" width="100%">
    <tr>
        <td>
            <telerik:RadDataPager ID="RadDataPager2" runat="server" PagedControlID="RadListView2"
                PageSize="6">
                <Fields>
                    <telerik:RadDataPagerButtonField FieldType="FirstPrev" ButtonType="PushButton" />
                    <telerik:RadDataPagerButtonField FieldType="Numeric" ButtonType="PushButton" />
                    <telerik:RadDataPagerButtonField FieldType="NextLast" ButtonType="PushButton" />
                </Fields>
            </telerik:RadDataPager>
        </td>
        <td>
            <asp:Label ID="lblSort2" runat="server" Text="Sort by:" Style="padding-right: 5px;" />
            <telerik:RadComboBox ID="ddList2" runat="server" AutoPostBack="true" OnSelectedIndexChanged="ddList2_SelectedIndexChanged">
                <Items>
                    <telerik:RadComboBoxItem Text="-Select field to sort-" Value="" />
                    <telerik:RadComboBoxItem Text="Name" Value="ProductName" />
                    <telerik:RadComboBoxItem Text="Quantity" Value="QuantityPerUnit" />
                    <telerik:RadComboBoxItem Text="Price" Value="UnitPrice" />
                    <telerik:RadComboBoxItem Text="Units" Value="UnitsInStock" />
                    <telerik:RadComboBoxItem Text="Available" Value="Discontinued" />
                    <telerik:RadComboBoxItem Text="Clear sort" Value="ClearSort" />
                </Items>
            </telerik:RadComboBox>
        </td>
    </tr>
</table>
````




````C#
public DataTable GetDataTable(string query)
{
    String ConnString = ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
    SqlConnection conn = new SqlConnection(ConnString);
    SqlDataAdapter adapter = new SqlDataAdapter();
    adapter.SelectCommand = new SqlCommand(query, conn);
    DataTable myDataTable = new DataTable();
    conn.Open();
    try
    {
        adapter.Fill(myDataTable);
    }
    finally
    {
        conn.Close();
    }
    return myDataTable;
}
protected void RadListView1_NeedDataSource(object source, Telerik.Web.UI.RadListViewNeedDataSourceEventArgs e)
{
    RadListView1.DataSource = GetDataTable("SELECT TOP 36 ProductID, ProductName, QuantityPerUnit, UnitPrice, UnitsInStock, Discontinued FROM Products");
}
protected void Page_Load(object sender, EventArgs e)
{
    if (!Page.IsPostBack)
    {
        RadListView2.DataSource = GetDataTable("SELECT TOP 36 ProductID, ProductName, QuantityPerUnit, UnitPrice, UnitsInStock, Discontinued FROM Products");
        RadListView2.DataBind();
    }
}
protected void RadListView2_PageIndexChanged(object sender, RadListViewPageChangedEventArgs e)
{
    //RadAjaxManager1.Alert(e.NewPageIndex.ToString());
    RadListView2.CurrentPageIndex = e.NewPageIndex;
    RadListView2.DataSource = GetDataTable("SELECT TOP 36 ProductID, ProductName, QuantityPerUnit, UnitPrice, UnitsInStock, Discontinued FROM Products");
    RadListView2.DataBind();
}
protected void ddList1_SelectedIndexChanged(object sender, RadComboBoxSelectedIndexChangedEventArgs e)
{
    //check the e.Value passed as an argument and fire sort command for the corresponding field. The exact item in the listview from which you trigger the
    //command is not important
    //FireCommandEvent method invokes Rebind() implicitly, hence no explicit call is needed to refresh the listview
    switch (e.Value)
    {
        case "ProductName":
            RadListView1.Items[0].FireCommandEvent(RadListView.SortCommandName, "ProductName");
            break;
        case "QuantityPerUnit":
            RadListView1.Items[0].FireCommandEvent(RadListView.SortCommandName, "QuantityPerUnit");
            break;
        case "UnitPrice":
            RadListView1.Items[0].FireCommandEvent(RadListView.SortCommandName, "UnitPrice");
            break;
        case "UnitsInStock":
            RadListView1.Items[0].FireCommandEvent(RadListView.SortCommandName, "UnitsInStock");
            break;
        case "Discontinued":
            RadListView1.Items[0].FireCommandEvent(RadListView.SortCommandName, "Discontinued");
            break;
        case "ClearSort":
            RadListView1.SortExpressions.Clear();
            break;
        default:
            break;
    }
}
protected void ddList2_SelectedIndexChanged(object sender, RadComboBoxSelectedIndexChangedEventArgs e)
{
    //check the e.Value passed as an argument and fire sort command for the corresponding field. The exact item in the listview from which you trigger the
    //command is not important
    //FireCommandEvent method invokes DataBind() implicitly, hence no explicit call is needed to refresh the listview
    switch (e.Value)
    {
        case "ProductName":
            RadListView2.DataSource = GetDataTable("SELECT TOP 36 ProductID, ProductName, QuantityPerUnit, UnitPrice, UnitsInStock, Discontinued FROM Products");
            RadListView2.Items[0].FireCommandEvent(RadListView.SortCommandName, "ProductName");
            break;
        case "QuantityPerUnit":
            RadListView2.DataSource = GetDataTable("SELECT TOP 36 ProductID, ProductName, QuantityPerUnit, UnitPrice, UnitsInStock, Discontinued FROM Products");
            RadListView2.Items[0].FireCommandEvent(RadListView.SortCommandName, "QuantityPerUnit");
            break;
        case "UnitPrice":
            RadListView2.DataSource = GetDataTable("SELECT TOP 36 ProductID, ProductName, QuantityPerUnit, UnitPrice, UnitsInStock, Discontinued FROM Products");
            RadListView2.Items[0].FireCommandEvent(RadListView.SortCommandName, "UnitPrice");
            break;
        case "UnitsInStock":
            RadListView2.DataSource = GetDataTable("SELECT TOP 36 ProductID, ProductName, QuantityPerUnit, UnitPrice, UnitsInStock, Discontinued FROM Products");
            RadListView2.Items[0].FireCommandEvent(RadListView.SortCommandName, "UnitsInStock");
            break;
        case "Discontinued":
            RadListView2.DataSource = GetDataTable("SELECT TOP 36 ProductID, ProductName, QuantityPerUnit, UnitPrice, UnitsInStock, Discontinued FROM Products");
            RadListView2.Items[0].FireCommandEvent(RadListView.SortCommandName, "Discontinued");
            break;
        case "ClearSort":
            RadListView2.DataSource = GetDataTable("SELECT TOP 36 ProductID, ProductName, QuantityPerUnit, UnitPrice, UnitsInStock, Discontinued FROM Products");
            RadListView2.SortExpressions.Clear();
            RadListView2.DataBind();
            break;
        default:
            break;
    }
}
````
````VB
Public Function GetDataTable(ByVal query As String) As DataTable
    Dim ConnString As [String] = ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString
    Dim conn As New SqlConnection(ConnString)
    Dim adapter As New SqlDataAdapter()
    adapter.SelectCommand = New SqlCommand(query, conn)
    Dim myDataTable As New DataTable()
    conn.Open()
    Try
        adapter.Fill(myDataTable)
    Finally
        conn.Close()
    End Try
    Return myDataTable
End Function
Protected Sub RadListView1_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.RadListViewNeedDataSourceEventArgs) Handles RadListView1.NeedDataSource
    RadListView1.DataSource = GetDataTable("SELECT TOP 36 ProductID, ProductName, QuantityPerUnit, UnitPrice, UnitsInStock, Discontinued FROM Products")
End Sub
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles MyBase.Load
    If Not Page.IsPostBack Then
        RadListView2.DataSource = GetDataTable("SELECT TOP 36 ProductID, ProductName, QuantityPerUnit, UnitPrice, UnitsInStock, Discontinued FROM Products")
        RadListView2.DataBind()
    End If
End Sub
Protected Sub RadListView2_PageIndexChanged(ByVal sender As Object, ByVal e As RadListViewPageChangedEventArgs) Handles RadListView2.PageIndexChanged
    'RadAjaxManager1.Alert(e.NewPageIndex.ToString())
    RadListView2.CurrentPageIndex = e.NewPageIndex
    RadListView2.DataSource = GetDataTable("SELECT TOP 36 ProductID, ProductName, QuantityPerUnit, UnitPrice, UnitsInStock, Discontinued FROM Products")
    RadListView2.DataBind()
End Sub
Protected Sub ddList1_SelectedIndexChanged(ByVal sender As Object, ByVal e As RadComboBoxSelectedIndexChangedEventArgs) Handles ddList1.SelectedIndexChanged
    'check the e.Value passed as an argument and fire sort command for the corresponding field. The exact item in the listview from which you trigger the
    'command is not important
    'FireCommandEvent method invokes Rebind() implicitly, hence no explicit call is needed to refresh the listview
    Select Case e.Value
        Case "ProductName"
            RadListView1.Items(0).FireCommandEvent(RadListView.SortCommandName, "ProductName")
            Exit Select
        Case "QuantityPerUnit"
            RadListView1.Items(0).FireCommandEvent(RadListView.SortCommandName, "QuantityPerUnit")
            Exit Select
        Case "UnitPrice"
            RadListView1.Items(0).FireCommandEvent(RadListView.SortCommandName, "UnitPrice")
            Exit Select
        Case "UnitsInStock"
            RadListView1.Items(0).FireCommandEvent(RadListView.SortCommandName, "UnitsInStock")
            Exit Select
        Case "Discontinued"
            RadListView1.Items(0).FireCommandEvent(RadListView.SortCommandName, "Discontinued")
            Exit Select
        Case "ClearSort"
            RadListView1.SortExpressions.Clear()
            Exit Select
        Case Else
            Exit Select
    End Select
End Sub
Protected Sub ddList2_SelectedIndexChanged(ByVal sender As Object, ByVal e As RadComboBoxSelectedIndexChangedEventArgs) Handles ddList2.SelectedIndexChanged
    'check the e.Value passed as an argument and fire sort command for the corresponding field. The exact item in the listview from which you trigger the
    'command is not important
    'FireCommandEvent method invokes DataBind() implicitly, hence no explicit call is needed to refresh the listview
    Select Case e.Value
        Case "ProductName"
            RadListView2.DataSource = GetDataTable("SELECT TOP 36 ProductID, ProductName, QuantityPerUnit, UnitPrice, UnitsInStock, Discontinued FROM Products")
            RadListView2.Items(0).FireCommandEvent(RadListView.SortCommandName, "ProductName")
            Exit Select
        Case "QuantityPerUnit"
            RadListView2.DataSource = GetDataTable("SELECT TOP 36 ProductID, ProductName, QuantityPerUnit, UnitPrice, UnitsInStock, Discontinued FROM Products")
            RadListView2.Items(0).FireCommandEvent(RadListView.SortCommandName, "QuantityPerUnit")
            Exit Select
        Case "UnitPrice"
            RadListView2.DataSource = GetDataTable("SELECT TOP 36 ProductID, ProductName, QuantityPerUnit, UnitPrice, UnitsInStock, Discontinued FROM Products")
            RadListView2.Items(0).FireCommandEvent(RadListView.SortCommandName, "UnitPrice")
            Exit Select
        Case "UnitsInStock"
            RadListView2.DataSource = GetDataTable("SELECT TOP 36 ProductID, ProductName, QuantityPerUnit, UnitPrice, UnitsInStock, Discontinued FROM Products")
            RadListView2.Items(0).FireCommandEvent(RadListView.SortCommandName, "UnitsInStock")
            Exit Select
        Case "Discontinued"
            RadListView2.DataSource = GetDataTable("SELECT TOP 36 ProductID, ProductName, QuantityPerUnit, UnitPrice, UnitsInStock, Discontinued FROM Products")
            RadListView2.Items(0).FireCommandEvent(RadListView.SortCommandName, "Discontinued")
            Exit Select
        Case "ClearSort"
            RadListView2.DataSource = GetDataTable("SELECT TOP 36 ProductID, ProductName, QuantityPerUnit, UnitPrice, UnitsInStock, Discontinued FROM Products")
            RadListView2.SortExpressions.Clear()
            RadListView2.DataBind()
            Exit Select
        Case Else
            Exit Select
    End Select
End Sub
````

 
