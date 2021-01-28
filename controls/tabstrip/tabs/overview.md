---
title: Overview
page_title: Overview - RadTabStrip
description: Check our Web Forms article about Overview.
slug: tabstrip/tabs/overview
tags: overview
published: True
position: 0
---

# Tabs Overview

The tabs inside **RadTabStrip** have a few important properties, which are listed below:

* **Text** is the text that appears on the tab.

* **ToolTip** is the text of a tooltip that appears when the user hovers the mouse over the tab.

* **Value** is a string value that you can associate with the tab for use when programming the tab strip behavior.

* **IsSeparator** specifies whether the tab acts as a separator.

* **IsBreak** specifies whether the tab strip displays the next tab in the collection in another row.

* **Enabled** controls whether the tab is initially enabled or disabled.

* **Selected** controls whether the tab is initially selected.

* **SelectedIndex** specifies which child item of the tab is initially selected.

* **NavigateUrl** and **Target** cause the tab to automatically launch another Web page (specified by **NavigateUrl**) in the window specified by **Target**. If the **Target** property is not set, the new Web page uses the current browser window.

* **PostBack** specifies whether the tab causes a postback when the user selects it.

* **ScrollChildren**, **PerTabScrolling**, **ScrollButtonsPosition**, and **ScrollPosition** specify how the tab [scrolls its child items]({%slug tabstrip/tabs/scrolling-tabs%}) when there is not enough room to display them all.

* **CssClass**, **SelectedCssClass**, **DisabledCssClass**, **HoveredCssClass**, and **ChildGroupCssClass** [control the appearance of the tab]({%slug tabstrip/appearance-and-styling/setting-the-css-class-of-tabs%}) when it is in its normal state, selected, disabled, under the mouse, and the appearance of its group of child items, respectively.

* **ImageUrl**, **SelectedImageUrl**, **DisabledImageUrl**, and **HoveredImageUrl** let you [specify an image]({%slug tabstrip/appearance-and-styling/adding-images-to-tabs%}) that appears on the left of the tab text when it is in its normal state, selected, disabled, and when the mouse hovers over it, respectively.

In addition to the built-in properties, you can add your own [custom attributes]({%slug tabstrip/tabs/custom-attributes%}) to tabs to expand their functionality.

## Controlling what tabs appear

There are numerous ways to populate a tab strip with tabs. These include

* [Declaring tabs statically at design time]({%slug tabstrip/tabs/declaring-tabs-statically-in-design-time%})

* [Adding tabs in server-side code]({%slug tabstrip/tabs/working-with-tabs-at-the-server%})

* [Adding tabs in client-side code]({%slug tabstrip/tabs/working-with-tabs-at-the-client%})

* [Loading tabs from an XML file or string]({%slug tabstrip/tabs/loading-tabs-from-xml%})

* [Binding to a data source]({%slug tabstrip/data-binding/overview%})

# See Also

 * [Structure]({%slug tabstrip/structure%})
