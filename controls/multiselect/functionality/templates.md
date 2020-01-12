---
title: Templates
page_title: Templates | RadMultiSelect for ASP.NET AJAX Documentation
description: Templates
slug: multiselect/functionality/templates
tags: template,client
published: True
position: 1
---

# Templates

**RadMultiSelect** uses [Kendo UI Templates](https://docs.telerik.com/kendo-ui/framework/templates/overview) to provide full control over the rendering of items, selected values, and popup headers. The control supports the following templates:

- [Templates](#templates)
	- [Item template](#item-template)
	- [Tag Template](#tag-template)
	- [Header Template](#header-template)
	- [Footer Template](#footer-template)
	- [No Data Template](#no-data-template)
	- [See Also](#see-also)

>caption Figure 1: Structure of the popup and where you can use templates. 

![multiselect template example](../images/multiselect-templates.png)

You can see the source code used for producing the image in [RadMultiSelect Templates Live demo](https://demos.telerik.com/aspnet-ajax/multiselect/customizingtemplates/defaultcs.aspx).

>caption Example 1: Sample use of templates in RadMultiSelect.
    
````ASP.NET
        <telerik:RadMultiSelect runat="server" Width="400px" ID="RadMultiSelect1"
            DataTextField="ContactName"
            DataValueField="CustomerID"
            DropDownHeight="400"
            CssClass="customers-wrapper"
            Placeholder="Select customers...">
            <ItemTemplate>
                <span class="k-state-default"><h3>#: data.ContactName #</h3><p>#: data.CompanyName #</p></span>
            </ItemTemplate>
            <TagTemplate>
                <span style="color:red;">#:data.ContactName#</span>
            </TagTemplate>
            <HeaderTemplate>
                <div style="color: darkgreen; font-size: 18px"> 
                    <span>Photo</span> 
                    <span>Contact info</span>
                </div>
            </HeaderTemplate>
            <FooterTemplate>
                <div style="color: gray; font-size: 14px"> 
                    Total #: instance.dataSource.total() # items found
                </div>
            </FooterTemplate>
            <NoDataTemplate>
                 No data found. Please try searching for a different customer.
            </NoDataTemplate>

            <WebServiceClientDataSource>
                <WebServiceSettings ServiceType="OData">
                    <Select DataType="JSONP" Url="https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers" />
                </WebServiceSettings>
            </WebServiceClientDataSource>
        </telerik:RadMultiSelect>
````


## Item template

This is the template that is rendered in each individual column. It receives the `data` parameter that points to the dataItem for the corresponding item, so you can use all its data source fields

````ASP.NET
<telerik:RadMultiSelect runat="server" Width="400px" ID="RadMultiSelect1"
    DataTextField="ContactName"
    DataValueField="CustomerID">
    <ItemTemplate>
        <span class="k-state-default" style="background-image: url('https://demos.telerik.com/kendo-ui/content/web/Customers/#:data.CustomerID#.jpg')"></span>
        <span class="k-state-default"><h3>#: data.ContactName #</h3><p>#: data.CompanyName #</p></span>
    </ItemTemplate>
    <WebServiceClientDataSource>
        <WebServiceSettings ServiceType="OData">
            <Select DataType="JSONP" Url="https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers" />
        </WebServiceSettings>
    </WebServiceClientDataSource>
</telerik:RadMultiSelect>
<style>
    .RadMultiSelectDropDown .k-item > span:first-child {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-size: 100%;
        background-repeat: no-repeat;
    }
</style>
````

## Tag Template

This is the [https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/tagtemplate](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/tagtemplate) that manages the way the tag of a MultiSelect is rendered. It is not bound to data and is static HTML.

## Header Template

A [https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/headertemplate](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/headertemplate) that shows above all items. It is not bound to data and is static HTML.

>caution The header content should be wrapped with an HTML tag if it contains more than one element. This is applicable also when header content is just a string/text.
>

## Footer Template

This is the [https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/footertemplate](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/footertemplate) used to render the footer. The footer is re-rendered on every change of the Data Source. The context of the footer template is the underlying Kendo Widget itself that you can access through the `instance` argument.

## No Data Template

This [template](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/nodatatemplate) is shown when the data source is empty or the current filter operation returned no results.

>caution When the NoDataTemplate is defined, the MultiSelect always opens the popup element.
>


## See Also

* [Live Demo - Templates](http://demos.telerik.com/aspnet-ajax/multiselect/customizingtemplates/defaultcs.aspx)

* [Kendo UI MultiSelect Widget API Reference](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect)

