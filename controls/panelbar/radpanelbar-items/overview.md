---
title: RadPanelBar Items Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: panelbar/radpanelbar-items/overview
tags: overview
published: True
position: 0
---

# RadPanelBar Items Overview



## The properties of panel items

The items of __RadPanelBar__ have a few important properties, which are listed below:

* __Text__ is the text of the item as it appears in the panel bar.

* __ToolTip__ is the text of a tooltip that appears when the user hovers the mouse over the item.

>note Setting the tooltip can enable an accessibility feature: Special accessibility readers like JAWS can pronounce the tooltip of the highlighted item.
>


* __Enabled__ controls whether the item is enabled or disabled.

* __IsSeparator__ specifies whether the panel item [acts as a separator]({%slug panelbar/appearance-and-styling/separators%}).

* __Expanded__ specifies whether the item is expanded.

* __PreventCollapse__ specifies whether the user can collapse the item once it is expanded.

* __Selected__ specifies whether the item is selected.

* __Value__ lets you associate a text value with the panel item that you can use when programming the panel bar behavior.

* __NavigateUrl__ and __Target__ cause the panel item to automatically launch another Web page (specified by __NavigateUrl__) in the window specified by __Target__. If the __Target__ property is not set, the new Web page uses the current browser window.

* __PostBack__ specifies whether the item causes a postback.

* __CssClass__, __ClickedCssClass__, __DisabledCssClass__, __ExpandedCssClas__, and __FocusedCssClass__[control the appearance of the panel item]({%slug panelbar/appearance-and-styling/setting--the-css-class-of-items%}) when it is in its normal state, clicked, disabled, expanded, and holds input focus, respectively.

* __ImageUrl__, __SelectedImageUrl__, __DisabledImageUrl__, __ExpandedImageUrl__, and __HoveredImageUrl__ let you [specify an image]({%slug panelbar/appearance-and-styling/adding-images-to-items%}) that appears on the left of the panel item when it is in its normal state, clicked, disabled, expanded, and when the mouse hovers over it, respectively.

* __ImagePosition__ specifies the position of the image in the panel item.

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
