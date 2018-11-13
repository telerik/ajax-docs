---
title: RadMenu Items Overview
page_title: Overview | RadMenu for ASP.NET AJAX Documentation
description: Overview
slug: menu/radmenu-items/overview
tags: overview
published: True
position: 0
---

# RadMenu Items Overview



## The properties of menu items

The items of **RadMenu** have a few important properties, which are listed below:

* **Text** is the text of the item as it appears in the menu.

* **Value** lets you associate a text value with the menu item that you can use when programming the menu behavior. If the item is selected, the **SelectedValue** property of RadMenu will return the value of this property (if it is empty then the value of the **Text** property will be returned).

* **Selected** specifies whether the item should be selected. If set to True - the **SelectedItem** property of RadMenu will return this item.

* **ToolTip** is the text of a tooltip that appears when the user hovers the mouse over the item.

>note Setting the tooltip can enable an accessibility feature: Special accessibility readers like JAWS can pronounce the tooltip of the highlighted item.
>


* **Enabled** controls whether the item is initially enabled or disabled.

* **GroupSettings** lets you [specify how the child items are laid out]({%slug menu/appearance-and-styling/layout-of-child-items%}).

* **IsSeparator** specifies whether the menu item [acts as a separator]({%slug menu/functionality/separators%}).

* **NavigateUrl** and **Target** cause the menu item to automatically launch another Web page (specified by **NavigateUrl**) in the window specified by **Target**. If the **Target** property is not set, the new Web page uses the current browser window.

* **PostBack** specifies whether the item causes a postback.

* **CssClass**, **ClickedCssClass**, **DisabledCssClass**, **ExpandedCssClas**, **SelectedCssClass** and **FocusedCssClass** [control the appearance of the menu item]({%slug menu/appearance-and-styling/setting--the-css-class-of-items%}) when it is in its normal state, clicked, disabled, expanded, selected and holds input focus, respectively.

* **ImageUrl**, **ImageClickedUrl**, **DisabledImageUrl**, **ExpandedImageUrl**, **SelectedImageUrl** and **ImageOverUrl** let you [specify an image]({%slug menu/appearance-and-styling/adding-images-to-items%}) that appears on the left of the menu item when it is in its normal state, clicked, disabled, expanded, selected and when the mouse hovers over it, respectively.

In addition to the built-in properties, you can add your own [custom attributes]({%slug menu/radmenu-items/custom-attributes%}) to menu items to expand their functionality.

## Populating the RadMenu With Items

There are numerous ways to populate a menu with items. These include

* [Declaring items statically at design time]({%slug menu/radmenu-items/declaring-items-statically-at-design-time%})

* [Adding items in server-side code]({%slug menu/radmenu-items/working-with-items-at-server-side%})

* [Adding items in client-side code]({%slug menu/radmenu-items/working-with-items-at-client-side%})

* [Loading Items from an XML file or string]({%slug menu/radmenu-items/loading-items-from-xml%})

* [Populating the menu from a WebService]({%slug menu/data-binding/web-service-binding%})

* [Binding to a data source]({%slug menu/data-binding/overview%})

# See Also

 * [RadMenu Item Builder]({%slug menu/design-time/radmenu-item-builder%})

 * [Showing the Path to an Item]({%slug menu/how-to/showing-the-path-to-an-item%})

 * [Structure]({%slug menu/structure%})
