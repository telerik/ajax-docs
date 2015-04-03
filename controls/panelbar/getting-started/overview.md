---
title: Getting Started Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: panelbar/getting-started/overview
tags: overview
published: True
position: 0
---

# Getting Started Overview



This tutorial will walk you through creating a __RadPanelBar__ and shows how to:

* Use the __RadPanelBar Item Builder__ to build a multi-level panel bar.

* Apply a skin to the panel bar to change its look & feel.

* Add a template to a panel bar item.

* Set __RadPanelBar__ properties.

## Creating a panel bar using the RadPanelBar Item Builder

1. Drag a __RadPanelBar__ component from the toolbox onto your Web page. The __RadPanelBar__[ Smart Tag ]({%slug panelbar/design-time/smart-tag%}) should appear automatically:![PanelBar Tasks](images/panelbar_gettingstarted1.png)

1. On the Smart Tag, choose __Build RadPanelBar.__ The [RadPanelBar Item Builder]({%slug panelbar/design-time/radpanelbar-item-builder%}) appears:![RadPanelBar Item Builder](images/panelbar_radpanelbaritembuilder.png)

1. Click the __Add root item__ button ( ![Panelbar Add Root Item](images/panelbar_addrootitem.png)) to add a root item to your panel bar.

* Set its __Text__ property to "Mail".![PanelBar Item Builder](images/panelbar_firstitem.png)

1. With the "Mail" item selected, click the __Add child item__ button ( ![Add Child Item](images/panelbar_addchilditem.png)) to add a child to your root item.

* Select the child item and set its __Text__ property to "In Box".

1. Select the "Mail" item again, and click the __Add child item__ button twice to add two more child items.

* Set the __Text__ property of the first of these to "Deleted Items".

* Set the __Text__ property of the second of these to "Sent Items".![First Item With Children](images/panelbar_firstitemwithchildren.png)

1. Click the __Add root item__ button to add another root item. Set its __Text__ property to "Calendar".

1. With the "Calendar" item selected, click the Add child item button to add a child item. Set its __Text__ property to an empty string.

1. Click the __Add root item__ button again to add a third root item. Set its __Text__ property to "Notes".

1. Select the "Notes" item and click the __Add child item__ button four times to add four child items.

* Set the __Text__ property of the first child item to "My Notes".

* Set the __Text__ property of the second child item "Shared Notes".

* Set the __Text__ property of the third child item to "<hr>" and set its __IsSeparator__ property to __True__.

* Set the __Text__ property of the fourth child item to "Archive".![Item Builder Two Levels](images/panelbar_itembuildertwolevels.png)

1. Select the "Archive" child item. With the Archive button selected, click the __Add child item__ button twice to give the child item two child items of its own.

* Set the __Text__ property of the first child item to "My Notes"

* Set the __Text__ property of the second child item to "Shared Notes".![Item Builder Three Levels](images/panelbar_itembuilderthreelevels.png)

1. Click __OK__ to confirm and exit.

1. Back in the __RadPanelBar__ Smart Tag, use the __Skin__ drop-down to change the [skin]({%slug panelbar/appearance-and-styling/skins%}) for the __RadPanelBar__ to "Outlook". The appearance of the __RadPanelBar__ in the designer changes to reflect the new skin:![Choose Skin](images/panelbar_chooseskin.png)

1. In the __RadPanelBar__ Smart Tag, click the __Edit Templates__ link.

1. The Smart Tag switches to template editing mode. From the __Display__ drop-down, select the template for the child item of the "Calendar" item:![Template Editing Mode](images/panelbar_templateeditingmode.png)

1. Drag a __RadCalendar__ control from the toolbox onto the [Template Design Surface]({%slug panelbar/design-time/template-design-surface%}). Set its __Skin__ property to "Outlook" to match the panel bar:![Template Item](images/panelbar_templateitem.png)

1. Click on the __RadPanelBar__ Smart Tag anchor to display its Smart Tag again, and choose __End Template Editing__:![End Template Editing](images/panelbar_endtemplateediting.png)

1. Right click on the __RadPanelBar__, and from its context menu, choose __Properties__.

1. In the __Behavior__ section of the properties pane,

* Expand the __ExpandAnimation__ property and set the __Type__ to "InOutBounce". This introduces an [animated effect]({%slug panelbar/appearance-and-styling/animations%}) when items are expanded.

* Set the __ExpandMode__ property to "SingleExpandedItem". This specifies that only one item can be [expanded]({%slug panelbar/radpanelbar-items/expanding-and-collapsing-items%}) at a time.

1. Run the application. Click on the panel bar items to expand them. Note the animated effect. When you expand the "Calendar" item, the template displays:![PanelBar Calendar Template](images/panelbar_gettingstartedcalendar.png)When you click the Notes item, the second level of items appears. You can then click on the "Archive" item to display the third level of items:![Getting Started Hierarchy](images/panelbar_gettingstartedhierarchy.png)

# See Also

 * [Binding to a Data Source]({%slug panelbar/getting-started/binding-to-a-data-source%})
