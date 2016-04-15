---
title: RadListView Filtering with RadFilter
page_title: RadListView Filtering with RadFilter | RadFilter for ASP.NET AJAX Documentation
description: RadListView Filtering with RadFilter
slug: filter/how-to/radlistview-filtering-with-radfilter
tags: radlistview,filtering,with,radfilter
published: True
position: 2
---

# RadListView Filtering with RadFilter



RadFilter can be used to build complex filtering criteria by means of intuitive visual UI and depending on the data type of the underlying source fields. To use **RadFilter** to filter data in **RadLsitView**, you need to set the **FilterContainerID** property of RadFilter or handler the **ApplyExpressions** server event of RadFilter.

## Using the FilterContainerID property

````ASPNET
<telerik:RadFilter RenderMode="Lightweight" runat="server" ID="RadFilter1" FilterContainerID="RadListView1" />
<telerik:RadListView ID="RadListView1" DataSourceID="SqlDataSource1" PageSize="6"
    AllowPaging="True" runat="server" ItemPlaceholderID="ProductsHolder" DataKeyNames="OrderID">
    <ItemTemplate>
        <div class="rlvA" style="height: 120px; width: 270px; margin-top: 5px; margin-left: 2px;
            margin-bottom: 20px; padding-left: 10px; border-style: none">
            <fieldset style="height: 100%">
                <table>
                    <tr>
                        <td>
                            <strong>OrderID:</strong>
                            <asp:Label ID="OrderIDLabel" runat="server" Text='<%# Eval("OrderID") %>' /><br />
                            <strong>Order date:</strong>
                            <asp:Label ID="OrderDateLabel" runat="server" Text='<%# ((DateTime)Eval("OrderDate")).ToString() %>' /><br />
                            <strong>Ship city:</strong>
                            <asp:Label ID="ShipCityLabel" runat="server" Text='<%# Eval("ShipCity") %>' /><br />
                            <strong>Ship country:</strong>
                            <asp:Label ID="ShipCountryLabel" runat="server" Text='<%# Eval("ShipCountry") %>' /><br />
                            <strong>Ship name:</strong>
                            <asp:Label ID="ShipNameLabel" runat="server" Text='<%# Eval("ShipName") %>' /><br />
                        </td>
                        <td>
                            <img src="Img/ordertracking.gif" alt="" />
                        </td>
                    </tr>
                </table>
            </fieldset>
        </div>
    </ItemTemplate>
    <LayoutTemplate>
        <fieldset>
            <legend style="margin-left: 20px">Orders</legend>
            <div class="RadListView RadListViewFloated RadListView_Default">
                <div class="rlvFloated">
                    <div id="ProductsHolder" runat="server">
                    </div>
                </div>
                <div>
                    <telerik:RadDataPager RenderMode="Lightweight" ID="RadDataPager1" PageSize="6" runat="server">
                        <Fields>
                            <telerik:RadDataPagerButtonField FieldType="Numeric" />
                        </Fields>
                    </telerik:RadDataPager>
                </div>
            </div>
        </fieldset>
    </LayoutTemplate>
</telerik:RadListView>
<asp:SqlDataSource runat="server" ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    SelectCommand="Select OrderID, OrderDate, ShipVia, ShipName, ShipAddress, ShipCity, ShipCountry FROM Orders">
</asp:SqlDataSource>
````



## Handling the AppyExpressions event handler



````ASPNET
<telerik:RadFilter RenderMode="Lightweight" runat="server" ID="RadFilter1" OnApplyExpressions="RadFilter1_AppyExpressions">
    <FieldEditors>
        <telerik:RadFilterNumericFieldEditor DataType="System.Int32" FieldName="OrderID" />
        <telerik:RadFilterDateFieldEditor DataType="System.DateTime" FieldName="OrderDate" />
        <telerik:RadFilterTextFieldEditor DataType="System.String" FieldName="ShipCity" />
        <telerik:RadFilterTextFieldEditor DataType="System.String" FieldName="ShipCountry" />
        <telerik:RadFilterTextFieldEditor DataType="System.String" FieldName="ShipName" />
    </FieldEditors>
</telerik:RadFilter>
<telerik:RadListView ID="RadListView1" DataSourceID="SqlDataSource1" PageSize="6"
    AllowPaging="True" runat="server" ItemPlaceholderID="ProductsHolder" DataKeyNames="OrderID">
    <ItemTemplate>
        <div class="rlvA" style="height: 120px; width: 270px; margin-top: 5px; margin-left: 2px;
            margin-bottom: 20px; padding-left: 10px; border-style: none">
            <fieldset style="height: 100%">
                <table>
                    <tr>
                        <td>
                            <strong>OrderID:</strong>
                            <asp:Label ID="OrderIDLabel" runat="server" Text='<%# Eval("OrderID") %>' /><br />
                            <strong>Order date:</strong>
                            <asp:Label ID="OrderDateLabel" runat="server" Text='<%# ((DateTime)Eval("OrderDate")).ToString() %>' /><br />
                            <strong>Ship city:</strong>
                            <asp:Label ID="ShipCityLabel" runat="server" Text='<%# Eval("ShipCity") %>' /><br />
                            <strong>Ship country:</strong>
                            <asp:Label ID="ShipCountryLabel" runat="server" Text='<%# Eval("ShipCountry") %>' /><br />
                            <strong>Ship name:</strong>
                            <asp:Label ID="ShipNameLabel" runat="server" Text='<%# Eval("ShipName") %>' /><br />
                        </td>
                        <td>
                            <img src="Img/ordertracking.gif" alt="" />
                        </td>
                    </tr>
                </table>
            </fieldset>
        </div>
    </ItemTemplate>
    <LayoutTemplate>
        <fieldset>
            <legend style="margin-left: 20px">Orders</legend>
            <div class="RadListView RadListViewFloated RadListView_Default">
                <div class="rlvFloated">
                    <div id="ProductsHolder" runat="server">
                    </div>
                </div>
                <div>
                    <telerik:RadDataPager RenderMode="Lightweight" ID="RadDataPager1" PageSize="6" runat="server">
                        <Fields>
                            <telerik:RadDataPagerButtonField FieldType="Numeric" />
                        </Fields>
                    </telerik:RadDataPager>
                </div>
            </div>
        </fieldset>
    </LayoutTemplate>
</telerik:RadListView>
<asp:SqlDataSource runat="server" ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    SelectCommand="Select OrderID, OrderDate, ShipVia, ShipName, ShipAddress, ShipCity, ShipCountry FROM Orders">
</asp:SqlDataSource>
````
````C#
protected void RadFilter1_AppyExpressions(object sender, RadFilterApplyExpressionsEventArgs e)
{
    RadFilterListViewQueryProvider provider = new RadFilterListViewQueryProvider(new List<RadFilterGroupOperation>() { RadFilterGroupOperation.And, RadFilterGroupOperation.Or }); 
    provider.ProcessGroup(e.ExpressionRoot); 
    RadListView1.FilterExpressions.Add(provider.ListViewExpressions[0]); 
    RadListView1.Rebind();
}
````
````VB.NET	
Protected Sub RadFilter1_AppyExpressions(ByVal sender As Object, ByVal e As RadFilterApplyExpressionsEventArgs)
    Dim provider As New RadFilterListViewQueryProvider(New List(Of RadFilterGroupOperation)())
    provider.ProcessGroup(e.ExpressionRoot)
    RadListView1.FilterExpressions.Add(provider.ListViewExpressions(0))
    RadListView1.Rebind()
End Sub	
````


Find a live demo illustrating the integration of RadFilter with RadListView [here](http://demos.telerik.com/aspnet-ajax/filter/examples/firstlook/defaultcs.aspx).
