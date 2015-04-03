---
title: Creating a Simple Context Menu
page_title: Creating a Simple Context Menu | UI for ASP.NET AJAX Documentation
description: Creating a Simple Context Menu
slug: menu/getting-started/creating-a-simple-context-menu
tags: creating,a,simple,context,menu
published: True
position: 2
---

# Creating a Simple Context Menu



## 

This tutorial will walk you through creating a simple __RadContextMenu__ and shows how to:

* Use the __RadMenu Item Editor__ to build a simple context menu.

* Use the Targets collection to attach the context menu to another control.

1. Drag a __RadContextMenu__ component from the toolbox onto your Web page. The __RadContextMenu__[Smart Tag]({%slug menu/design-time/smart-tag%}) should appear automatically:![RadMenu Smart Tag](images/menu_smarttag.png)

1. On the Smart Tag, choose __Edit Items.__ The [RadMenu Item Builder]({%slug menu/design-time/radmenu-item-builder%}) appears:![Contextmenu ItemBuilder](images/menu_contextmenuitembuilder.png)

1. Click the __Add root item__ button (![RadMenu Add Root Item](images/menu_addrootitem.png)) to add a root item to your menu.

1. With the root item selected, click the __Add child item__ button (![RadMenu Add Child Item](images/menu_addchilditem.png)) to add a child to your root item.

1. Add some more root items, and child items using the __Add root item__ button and the __Add child item__ button:![Contextmenu SampleMenu](images/menu_contextmenusamplemenu.png)

1. Select one of the child items, and change its __IsSeparator__ property to __True__ and its __Text__ property to an empty string (""):![Contextmenu IsSeparator](images/menu_contextmenuisseparator.png)

1. Click __OK__ to confirm and exit.

1. Right click on the __RadContextMenu__, and from its context menu, choose __Properties__.

1. From the Standard area of the toolbox, drag a __Label__ onto your page. Set its __Text__ property to "Label1".

1. Move to the Source view of your Web page and locate the declaration of your __RadContextMenu__.

1. Select __Edit Targets__ from the smart tag.![RadContextMenu Targets](images/menu_targets.png)

1. From the __Target Editor__ select to __Add Control Target__. This attaches your context menu to a specific control, based on its ID:![RadContextMenu Control Target](images/menu_controltarget.png)

1. Select the ControlID attribute from the dropdown that appears:![RadContextMenu ControlID](images/menu_controlid.png)

1. Select __Ok__ and run the application. Right-click on the label and see your context menu appear:![RadContextMenu](images/menu_contextmenu1.png)

# See Also

 * [RadContextMenu Object]({%slug menu/context-menus/radcontextmenu-object%})
