---
title: Overview
page_title: RadPanelBar Items Overview - RadPanelBar
description: Check our Web Forms article about Overview.
slug: panelbar/radpanelbar-items/overview
tags: overview
published: True
position: 0
---

# RadPanelBar Items Overview



## The properties of panel items

The items of **RadPanelBar** have a few important properties, which are listed below:

* **Text** is the text of the item as it appears in the panel bar.

* **ToolTip** is the text of a tooltip that appears when the user hovers the mouse over the item.

>note Setting the tooltip can enable an accessibility feature: Special accessibility readers like JAWS can pronounce the tooltip of the highlighted item.
>


* **Enabled** controls whether the item is enabled or disabled.

* **IsSeparator** specifies whether the panel item [acts as a separator]({%slug panelbar/appearance-and-styling/separators%}).

* **Expanded** specifies whether the item is expanded.

* **PreventCollapse** specifies whether the user can collapse the item once it is expanded.

* **Selected** specifies whether the item is selected.

* **Value** lets you associate a text value with the panel item that you can use when programming the panel bar behavior.

* **NavigateUrl** and **Target** cause the panel item to automatically launch another Web page (specified by **NavigateUrl**) in the window specified by **Target**. If the **Target** property is not set, the new Web page uses the current browser window.

* **PostBack** specifies whether the item causes a postback.

* **CssClass**, **ClickedCssClass**, **DisabledCssClass**, **ExpandedCssClas**, and **FocusedCssClass** [control the appearance of the panel item]({%slug panelbar/appearance-and-styling/setting--the-css-class-of-items%}) when it is in its normal state, clicked, disabled, expanded, and holds input focus, respectively.

* **ImageUrl**, **SelectedImageUrl**, **DisabledImageUrl**, **ExpandedImageUrl**, and **HoveredImageUrl** let you [specify an image]({%slug panelbar/appearance-and-styling/adding-images-to-items%}) that appears on the left of the panel item when it is in its normal state, clicked, disabled, expanded, and when the mouse hovers over it, respectively.

* **ImagePosition** specifies the position of the image in the panel item.

In addition to the built-in properties, you can add your own [custom attributes]({%slug panelbar/radpanelbar-items/custom-attributes%}) to panel items to expand their functionality.

## Controlling what items appear

There are numerous ways to populate a panel bar with items. These include

* [Declaring items statically at design time]({%slug panelbar/radpanelbar-items/declaring-items-statically-at-designtime%})

* [Adding items in server-side code]({%slug panelbar/radpanelbar-items/working-with-items-at-the-server%})

* [Adding items in client-side code]({%slug panelbar/radpanelbar-items/working-with-items-at-the-client%})

* [Loading Items from an XML file or string]({%slug panelbar/radpanelbar-items/loading-items-from-xml%})

* [Binding to a data source]({%slug panelbar/data-binding/overview%})

# See Also

 * [RadPanelBar Item Builder]({%slug panelbar/design-time/radpanelbar-item-builder%})

 * [Structure]({%slug panelbar/overview/structure%})
