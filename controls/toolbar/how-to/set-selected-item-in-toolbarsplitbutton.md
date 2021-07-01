---
title: Set selected item in RadToolBarSplitButton
page_title: Set selected item in RadToolBarSplitButton
description: Check our Web Forms article about How to pre-select an item in RadToolBarSplitButton
slug: toolbar/how-to/set-selected-item-in-toolbarsplitbutton
tags: associate,radtooltip,with,from,radtoolbarbutton
published: True
position: 2
---

# Set selected item in RadToolBarSplitButton

The `RadToolBarSplitButton` can have a different `Text` and `Value` from its child items and this is controlled by the `EnableDefaultButton` property. If the property is set to `true`(the default value) then the child items' text and value are used. More information can be found in the [ToolBar - Default Items]({%slug toolbar/radtoolbar-items/default-items%}) article. 

As the `ToolBarSplitButton`'s text and value relies on it's items ("default items"), if you need to pre-select a given item, you need to use the `DefaultButtonIndex` property as demonstrated in the example below:  

````C#
var item = SplitButton1.Buttons.FindButtonByText("Third");
SplitButton1.DefaultButtonIndex = item.Index;
````

````ASPNET
<telerik:RadToolBar runat="server" ID="RadToolbar1">
    <Items>
        <telerik:RadToolBarSplitButton runat="server" ID="SplitButton1">
            <Buttons>
                <telerik:RadToolBarButton Text="First" Value="First" ></telerik:RadToolBarButton>
                <telerik:RadToolBarButton Text="Second" Value="Second" ></telerik:RadToolBarButton>
                <telerik:RadToolBarButton Text="Third" Value="Third" ></telerik:RadToolBarButton>
            </Buttons>
        </telerik:RadToolBarSplitButton>
    </Items>
</telerik:RadToolBar>
````

## See Also

* [ToolBar - Default Items]({%slug toolbar/radtoolbar-items/default-items%})

