---
title: Tabs Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: tabstrip/tabs/overview
tags: overview
published: True
position: 0
---

# Tabs Overview



The tabs inside __RadTabStrip__ have a few important properties, which are listed below:

* __Text__ is the text that appears on the tab.

* __ToolTip__ is the text of a tooltip that appears when the user hovers the mouse over the tab.

* __Value__ is a string value that you can associate with the tab for use when programming the tab strip behavior.

* __IsSeparator__ specifies whether the tab acts as a separator.

* __IsBreak__ specifies whether the tab strip displays the next tab in the collection in another row.

* __Enabled__ controls whether the tab is initially enabled or disabled.

* __Selected__ controls whether the tab is initially selected.

* __SelectedIndex__ specifies which child item of the tab is initially selected.

* __NavigateUrl__ and __Target__ cause the tab to automatically launch another Web page (specified by __NavigateUrl__) in the window specified by __Target__. If the __Target__ property is not set, the new Web page uses the current browser window.

* __PostBack__ specifies whether the tab causes a postback when the user selects it.

* __ScrollChildren__, __PerTabScrolling__, __ScrollButtonsPosition__, and __ScrollPosition__ specify how the tab [scrolls its child items]({%slug tabstrip/tabs/scrolling-tabs%}) when there is not enough room to display them all.

* __CssClass__, __SelectedCssClass__, __DisabledCssClass__, __HoveredCssClass__, and __ChildGroupCssClass__[control the appearance of the tab]({%slug tabstrip/appearance-and-styling/setting-the-css-class-of-tabs%}) when it is in its normal state, selected, disabled, under the mouse, and the appearance of its group of child items, respectively.

* __ImageUrl__, __SelectedImageUrl__, __DisabledImageUrl__, and __HoveredImageUrl__ let you [specify an image]({%slug tabstrip/appearance-and-styling/adding-images-to-tabs%}) that appears on the left of the tab text when it is in its normal state, selected, disabled, and when the mouse hovers over it, respectively.

In addition to the built-in properties, you can add your own [custom attributes]({%slug tabstrip/tabs/custom-attributes%}) to tabs to expand their functionality.

## Controlling what tabs appear

There are numerous ways to populate a tab strip with tabs. These include

* [Declaring tabs statically at design time]({%slug tabstrip/tabs/declaring-tabs-statically-in-design-time%})

* [Adding tabs in server-side code]({%slug tabstrip/tabs/working-with-tabs-at-the-server%})

* [Adding tabs in client-side code]({%slug tabstrip/tabs/working-with-tabs-at-thr-client%})

* [Loading tabs from an XML file or string]({%slug tabstrip/tabs/loading-tabs-from-xml%})

* [Binding to a data source]({%slug tabstrip/data-binding/overview%})

# See Also

 * [Structure]({%slug tabstrip/structure%})
