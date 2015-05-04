---
title: Getting Started Overview
page_title: Overview | RadMenu for ASP.NET AJAX Documentation
description: Overview
slug: menu/getting-started/overview
tags: overview
published: True
position: 0
---

# Getting Started Overview



This tutorial will walk you through creating a **RadMenu** and shows how to:

* Use the **RadMenu Item Editor** to build a simple menu.

* Apply a skin to the menu to change its look & feel.

* Set **RadMenu** properties.

## Creating a menu using the RadMenu Item Builder

1. Drag a **RadMenu** component from the toolbox onto your Web page. The **RadMenu**[Smart Tag]({%slug menu/design-time/smart-tag%}) should appear automatically:![RadMenu Smart Tag](images/menu_smarttag.png)

1. On the Smart Tag, choose **Edit Items.** The [RadMenu Item Builder]({%slug menu/design-time/radmenu-item-builder%}) appears:![RadMenu ItemBuilder](images/menu_itembuilder.png)

1. Click the **Add root item** button (![RadMenu Add Root Item](images/menu_addrootitem.png)) to add a root item to your menu.

1. With the root item selected, click the **Add child item** button (![RadMenu Add Child Item](images/menu_addchilditem.png)) to add a child to your root item.

1. Add some more root items, and child items using the **Add root item** button and the **Add child item** button:![Sample RadMenu](images/menu_samplemenu.png)

1. Select one of the child items, and change its **IsSeparator** property to **True** and its **Text** property to an empty string (""):![RadMenu IsSeparator Property](images/menu_isseparator.png)

1. Click **OK** to confirm and exit.

1. Back in the **RadMenu** Smart Tag, use the **Skin** drop-down to change the [skin]({%slug menu/appearance-and-styling/appearance-skins%}) for the **RadMenu** to "Outlook":![RadMenu Choose Skin](images/menu_chooseskin.png)

1. The appearance of the RadMenu in the designer changes to reflect the new skin:![RadMenu in the Designer](images/menu_designer.png)

1. Right click on the **RadMenu**, and from its context menu, choose **Properties**.

1. In the properties pane, set the **ClickToOpen** property to **True**. This causes the menu to [display its child items when clicked]({%slug menu/accessibility-and-internationalization/displaying-child-items%}):![RadMenu ClickToOpen property](images/menu_clicktoopen.png)

1. Run the application. Click on the menu items to display the child items:![RadMenu Display](images/menu_runmenu.png)

# See Also

 * [Binding to a Data Source]({%slug menu/getting-started/binding-to-a-data-source%})

 * [Creating a Simple Context Menu]({%slug menu/getting-started/creating-a-simple-context-menu%})
