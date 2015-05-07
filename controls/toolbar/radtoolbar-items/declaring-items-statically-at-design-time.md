---
title: Declaring Items Statically at Design Time
page_title: Declaring Items Statically at Design Time | RadToolBar for ASP.NET AJAX Documentation
description: Declaring Items Statically at Design Time
slug: toolbar/radtoolbar-items/declaring-items-statically-at-design-time
tags: declaring,items,statically,at,design,time
published: True
position: 1
---

# Declaring Items Statically at Design Time



The definition of **RadToolBar** items can be added to the in-line declaration of the toolbar using the [RadToolBar Item Builder]({%slug toolbar/design-time/radtoolbar-item-editor%}). The item builder updates the ASPX or ASCX file to include the list of items and their properties.

You can also directly edit the ASPX or ASCX file by adding items to the <Items></Items> section of the **RadToolBar** declaration. The item declaration might be <telerik:RadToolBarButton .../>, <telerik:RadToolBarDropDown .../>or <telerik:RadToolBarSplitButton ... />.

## Example

Add the following **inline** definition of a toolbar to your ASPX or ASCX file:

````ASPNET
<telerik:RadToolBar ID="RadToolBar1" runat="server" Orientation="Horizontal">
    <CollapseAnimation Duration="200" Type="OutQuint" />
    <Items>
        <telerik:RadToolBarButton runat="server" Text="Button 1">
        </telerik:RadToolBarButton>
        <telerik:RadToolBarDropDown runat="server" Text="DropDown 1">
            <Buttons>
                <telerik:RadToolBarButton runat="server" Text="Child Button 1">
                </telerik:RadToolBarButton>
                <telerik:RadToolBarButton runat="server" Text="Child Button 2">
                </telerik:RadToolBarButton>
            </Buttons>
        </telerik:RadToolBarDropDown>
        <telerik:RadToolBarSplitButton runat="server" Text="SplitButton 1">
            <Buttons>
                <telerik:RadToolBarButton runat="server" Text="Child Button 1">
                </telerik:RadToolBarButton>
                <telerik:RadToolBarButton runat="server" Text="Child Button 2">
                </telerik:RadToolBarButton>
            </Buttons>
        </telerik:RadToolBarSplitButton>
    </Items>
</telerik:RadToolBar>
````



# See Also

 * [Custom Attributes]({%slug toolbar/radtoolbar-items/custom-attributes%})

 * [Overview]({%slug toolbar/radtoolbar-items/overview%})
