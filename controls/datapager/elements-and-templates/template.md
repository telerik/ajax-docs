---
title: Template
page_title: Template - RadDataPager
description: Check our Web Forms article about Template.
slug: datapager/elements-and-templates/template
tags: template
published: True
position: 1
---

# Template


## 

You can create custom paging UI by using the **RadDataPagerTemplatePageField** object. You can use it to display custom navigation controls and show information about the underlying data source such as total number of records and the current page number.

The RadDataPagerTemplatePageField has no built-in layout. Therefore you should explicitly create the layout in its PagerTemplate. You can format the content by using cascading style sheets (CSS) classes or inline style elements.

You can reference the RadDataPager control that contains the **RadDataPagerTemplatePageField** object by using the **Container.Owner** property. This is useful when you want to create binding expressions to show how many records are retrieved, the total number of pages, and similar information. These binding expressions can use properties of the RadDataPager control such as **MaximumRows**, **PageSize**, **StartRowIndex**, and **TotalRowCount**.

The following example shows how to add a RadDataPagerTemplatePageField, which contains RadComboBox and custom button for changing the current page size in a RadDataPager control:



````ASPNET
<telerik:RadDataPager RenderMode="Lightweight" runat="server" ID="RadDataPager1" PagedControlID="ListView1">
    <Fields>
        <telerik:RadDataPagerTemplatePageField>
            <PagerTemplate>
                <asp:Button runat="server" ID="CustomButton" Text="My custom button" CommandName="Custom Command Name" />
                <telerik:RadComboBox RenderMode="Lightweight" runat="server" ID="RadComboBox1" AutoPostBack="true" SelectedValue='<%# Container.Owner.PageSize %>'
                    OnSelectedIndexChanged="RadComboBox1_SelectedIndexChanged">
                    <Items>
                        <telerik:RadComboBoxItem Text="15" Value="15" />
                        <telerik:RadComboBoxItem Text="30" Value="30" />
                        <telerik:RadComboBoxItem Text="60" Value="60" />
                    </Items>
                </telerik:RadComboBox>
            </PagerTemplate>
        </telerik:RadDataPagerTemplatePageField>
    </Fields>
</telerik:RadDataPager>
````
````C#
protected void RadComboBox1_SelectedIndexChanged(object o, RadComboBoxSelectedIndexChangedEventArgs e)
{
    RadComboBox combo = o as RadComboBox;
    (combo.NamingContainer as RadDataPagerFieldItem).Owner.PageSize = int.Parse(e.Value);
}			
````
````VB.NET
Protected Sub RadComboBox1_SelectedIndexChanged(ByVal o As Object, ByVal e As RadComboBoxSelectedIndexChangedEventArgs)
    Dim combo As RadComboBox = TryCast(o, RadComboBox)
    Dim pagerFieldItem As RadDataPagerFieldItem = CType(combo.NamingContainer, RadDataPagerFieldItem)
    pagerFieldItem.Owner.PageSize = Integer.Parse(e.Value)
End Sub
````

