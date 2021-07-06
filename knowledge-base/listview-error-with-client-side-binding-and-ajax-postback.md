---
title: Error with RadListView client side binding and AJAX postback
description: Error with RadListView client side binding and AJAX postback. Check it now!
type: how-to
page_title: Error with RadListView client side binding and AJAX postback
slug: listview-error-with-client-side-binding-and-ajax-postback
res_type: kb
---

## Problem

**TypeError: f.get\_filterExpressions(...).toClientDataSourceList is not a function** error is thrown when a RadListView is bound to a RadClientDataSource and an AJAX request disposes the listview.

A sample scenario is available at the end of the article.

## Description

When the listview is bound client-side, it should not participate in postbacks, because its purpose is to work in the browser alone.

As a general concept, when moving towards client-side binding, the operations on the page should move to the client as well and operations often move to web services.

RadListView does offer client-side binding, but it is not designed to work with postbacks, and so it cannot initialize correctly after being disposed in a partial postback.

## Solution

There are two approaches to resolving this:
 - move towards server-side binding if you will be using server-side operations for the page

 - add the following function override that may help avoid the error, but cannot make the ListView operational  

````JavaScript
var oldBind = Telerik.Web.UI.RadListView.prototype._bindClientDataSource;
Telerik.Web.UI.RadListView.prototype._bindClientDataSource = function () {
    try { oldBind.call(this); } catch (e) { }
}
````

## Sample Scenario

````ASPX
<asp:UpdatePanel runat="server" ID="UpdatePanel1">
    <ContentTemplate>
        <asp:Button Text="click for error" ID="Button1" runat="server" />
        <telerik:RadListView ID="RadListView1" runat="server" RenderMode="Lightweight" ClientDataSourceID="RadClientDataSource1">
            <ClientSettings>
                <DataBinding ItemPlaceHolderID="itemPlaceholder">
                    <LayoutTemplate>
                          <div id="itemPlaceholder"></div>
                    </LayoutTemplate>
                    <ItemTemplate>
                         <div class="productInfo">
                            <h4>#= ProductName #</h4>
                            <div class="left">
                                <span class="quantityPerUnit">#= QuantityPerUnit #</span>
                                <span class="unitsInStock">Units in stock: #= UnitsInStock #</span>
                            </div>
                            <div class="unitPrice right">$#= UnitPrice #</div>
                        </div>
                    </ItemTemplate>
                </DataBinding>
            </ClientSettings>
        </telerik:RadListView>
 
    </ContentTemplate>
</asp:UpdatePanel>
<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1">
    <DataSource>
        <WebServiceDataSourceSettings ServiceType="OData">
            <Select Url="https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products" DataType="JSONP" />
        </WebServiceDataSourceSettings>
    </DataSource>
    <Schema>
        <Model>
            <telerik:ClientDataSourceModelField FieldName="ProductName" DataType="String" />
            <telerik:ClientDataSourceModelField FieldName="QuantityPerUnit" DataType="String" />
            <telerik:ClientDataSourceModelField FieldName="UnitPrice" DataType="Number" />
            <telerik:ClientDataSourceModelField FieldName="UnitsInStock" DataType="Number" />
        </Model>
    </Schema>
</telerik:RadClientDataSource>
````

 