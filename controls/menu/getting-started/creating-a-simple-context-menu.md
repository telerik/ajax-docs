---
title: Creating a Simple Context Menu
page_title: Creating a Simple Context Menu | RadMenu for ASP.NET AJAX Documentation
description: Creating a Simple Context Menu
slug: menu/getting-started/creating-a-simple-context-menu
tags: creating,a,simple,context,menu
published: True
position: 2
---

# Creating a Simple Context Menu

## 

This tutorial will walk you through creating a simple **RadContextMenu** and shows how to:

* Use the **RadMenu Item Editor** to build a simple context menu.

* Use the Targets collection to attach the context menu to another control.

1. Drag a **RadContextMenu** component from the toolbox onto your Web page. The **RadContextMenu** [Smart Tag]({%slug menu/design-time/smart-tag%}) should appear automatically: 
![RadMenu Smart Tag](images/menu_smarttag.png)

1. On the Smart Tag, choose **Edit Items.** The [RadMenu Item Builder]({%slug menu/design-time/radmenu-item-builder%}) appears:![Contextmenu ItemBuilder](images/menu_contextmenuitembuilder.png)

1. Click the **Add root item** button (![RadMenu Add Root Item](images/menu_addrootitem.png)) to add a root item to your menu.

1. With the root item selected, click the **Add child item** button (![RadMenu Add Child Item](images/menu_addchilditem.png)) to add a child to your root item.

1. Add some more root items, and child items using the **Add root item** button and the **Add child item** button:![Contextmenu SampleMenu](images/menu_contextmenusamplemenu.png)

1. Select one of the child items, and change its **IsSeparator** property to **True** and its **Text** property to an empty string (""):![Contextmenu IsSeparator](images/menu_contextmenuisseparator.png)

1. Click **OK** to confirm and exit.

1. Right click on the **RadContextMenu**, and from its context menu, choose **Properties**.

1. From the Standard area of the toolbox, drag a **Label** onto your page. Set its **Text** property to "Label1".

1. Move to the Source view of your Web page and locate the declaration of your **RadContextMenu**.

1. Select **Edit Targets** from the smart tag.![RadContextMenu Targets](images/menu_targets.png)

1. From the **Target Editor** select to **Add Control Target**. This attaches your context menu to a specific control, based on its ID:![RadContextMenu Control Target](images/menu_controltarget.png)

1. Select the ControlID attribute from the dropdown that appears:![RadContextMenu ControlID](images/menu_controlid.png)

1. Select **Ok** and run the application. Right-click on the label and see your context menu appear:![RadContextMenu](images/menu_contextmenu1.png)

# See Also

 * [RadContextMenu Object]({%slug menu/context-menus/radcontextmenu-object%})
