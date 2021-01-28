---
title: Using RadDataPager
page_title: Using RadDataPager - RadListView
description: Check our Web Forms article about Using RadDataPager.
slug: listview/fuctionality/paging/using-raddatapager
tags: using,raddatapager
published: True
position: 1
---

# Using RadDataPager



The **RadListView** supports [native paging]({%slug listview/fuctionality/paging/integrated-paging%}) and [RadDataPager](https://www.telerik.com/help/aspnet-ajax/datapageroverview.html) as external control to provide paging features. The advantage of a separate control is that it gives you much more control on the pager look and where it can be placed on the page - before or after the RadListView control, as well as within its LayoutTemplate element. The **RadDataPager** control extends the RadListView paging capabilities.

RadDataPager control is a standalone control, it does not have to be directly associated with **IPageableItemContainer or IRadPageableItemContainer** control. In such case it handles the paging of the first pageable control on the page. If you need a RadDataPager control to be used for navigating through a RadListView control data, you must set the **PagedControlID** property of RadDataPager to the ID of the RadListView control and the **AllowPaging** property of the listview to **True**. The size of the pages of data is set by using the **PageSize** property of the RadDataPager control. If you need to set the page size dynamically, use the Page_Load event and not the Page_Init event.

You can use the following [RadDataPager elements](https://www.telerik.com/help/aspnet-ajax/datapager-elements.html) in your pager control: RadDataPagerButtonField, RadDataPagerPageSizeField, RadDataPagerSliderField, RadDataPagerGoToPageField and RadDataPagerTemplatePageField. When RadDataPager has RadDataPagerTemplatePageField you can set custom appearance and features of the pager field. In this field, you can reference the RadDataPager control by using the Container.Owner property. Thus you can access any public property of the RadDataPager control, including the starting row index, the page size, and the total number of rows currently bound to the RadListView control.

The following example shows a RadDataPager in the LayoutTemplate of a RadListView control.

````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server" />
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="RadListView1">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="RadListView1" LoadingPanelID="RadAjaxLoadingPanel1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" MinDisplayTime="0" />
<telerik:RadListView ID="RadListView1" Width="97%" AllowPaging="True" runat="server"
    AllowSorting="true" DataSourceID="SqlDataSource1" ItemPlaceholderID="ProductsHolder"
    DataKeyNames="ProductID">
    <LayoutTemplate>
        <!-- Set the id of the wrapping container to match the CLIENT ID of the RadListView control to display the ajax loading panel
        In case the listview is embedded in another server control, you will need to append the id of that server control -->
        <fieldset style="width: 740px;" id="RadListView1">
            <legend>Products</legend>
            <asp:Panel ID="ProductsHolder" runat="server" />
            <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td>
                        <telerik:RadDataPager RenderMode="Lightweight" ID="RadDataPager1" runat="server" PagedControlID="RadListView1"
                            PageSize="6">
                            <Fields>
                                <telerik:RadDataPagerButtonField FieldType="FirstPrev" />
                                <telerik:RadDataPagerButtonField FieldType="Numeric" />
                                <telerik:RadDataPagerButtonField FieldType="NextLast" />
                                <telerik:RadDataPagerPageSizeField PageSizeText="Page size: " />
                                <telerik:RadDataPagerGoToPageField CurrentPageText="Page: " TotalPageText="of" SubmitButtonText="Go"
                                    TextBoxWidth="15" />
                                <telerik:RadDataPagerTemplatePageField>
                                    <PagerTemplate>
                                        <div style="float: right">
                                            <b>Items
                                                <asp:Label runat="server" ID="CurrentPageLabel" Text="<%# Container.Owner.StartRowIndex+1%>" />
                                                to
                                                <asp:Label runat="server" ID="TotalPagesLabel" Text="<%# Container.Owner.StartRowIndex+Container.Owner.PageSize %>" />
                                                of
                                                <asp:Label runat="server" ID="TotalItemsLabel" Text="<%# Container.Owner.TotalRowCount%>" />
                                                <br />
                                            </b>
                                        </div>
                                    </PagerTemplate>
                                </telerik:RadDataPagerTemplatePageField>
                            </Fields>
                        </telerik:RadDataPager>
                    </td>
                </tr>
            </table>
        </fieldset>
    </LayoutTemplate>
    <ItemTemplate>
        <div style="float: left;">
            <table cellpadding="0" cellspacing="0" style="width: 230px; height: 100px">
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
<br />
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    ProviderName="System.Data.SqlClient" SelectCommand="SELECT [ProductID], [ProductName], [QuantityPerUnit], [UnitPrice], [UnitsInStock], [Discontinued] FROM [Products]" />
````

 
