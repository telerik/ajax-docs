---
title: Methods and Properties
page_title: Methods and Properties | UI for ASP.NET AJAX Documentation
description: Methods and Properties
slug: menu/server-side-programming/methods-and-properties
tags: methods,and,properties
published: True
position: 4
---

# Methods and Properties



## RadMenu Properties and Methods

__RadMenu__ has a number of useful properties methods for iteracting with the menu and items. The following table lists these properties:




|  __Property__  |  __Type__  |  __Description__  |
| ------ | ------ | ------ |
| __AccessKey__ |string|Sets or returns a String that represents the shortcut key, also known as the accelerator key, for a specified object.|
| __AutoScrollMinimumHeight__ |int|The minimum available height that is needed to enable the auto-scroll.|
| __AutoScrollMinimumWidth__ |int|The minimum available width that is needed to enable the auto-scroll.|
| __ClearSelectedItem__ |void|Clears the selected item from the current __RadMenu__ instance. Very useful when you want to clear the selected item after a postback.|
| __ClickToOpen__ |bool|Specifying if child items should open when the user clicks on their parent item, rather than just pointing the mouse over it.|
| __ClientItemTemplate__ |string|Gets or sets the client template for displying the items of the __RadMenu__ .|
| __CollapseAnimation__ |AnimationSettings|Gets the settings for animation played when item closes.|
| __CollapseDelay__ |string|Gets or sets the animation timeout after which the item starts to close.|
| __EnableAutoScroll__ |bool|Gets or sets a value indicating if an automatic scroll is applied if the groups are larger then the screen height.|
| __EnableOverlay__ |bool|Gets or sets a value indicating if an overlay should be rendered (only in Internet Explorer).|
| __EnableRootItemScroll__ |bool|Gets or sets a value indicating if scroll is enabled for the root items.|
| __EnableRoundedCorners__ |bool|Specifying if child items should have rounded corners.|
| __EnableScreenBoundaryDetection__ |bool|Specifies where screen boundary detection is enabled or not.|
| __EnableSelection__ |bool|Gets or sets a value indicating if the currently selected item will be tracked and highlighted.|
| __EnableAutoScroll__ |bool|Specifying if child items should have shadows.|
| __EnableTextHTMLEncoding__ |bool|Specifies whether the text encoding when rendering menu item is enabled or not.|
| __ExpandAnimation__ |AnimationSettings|Gets or sets a the animation settings when item closes.|
| __ExpandDelay__ |int|Gets or sets a delay in milliseconds between the mouse entering a __RadMenuItem__ and its child items starting to expand|
| __Flow__ |ItemFlow|Gets or sets the orientation of the root items|
| __Items__ |RadMenuItemCollection|Gets or sets RadMenuItemCollection that contains the root items of the __RadMenu__ .|
| __ItemTemplate__ |string|Gets or sets the template for displaying the items in __RadMenu__ .|
| __RenderMode__ |RenderMode|Specifies the __RadMenu__ 's render mode. Using the LightWeight render mode will yield HTML5/CSS3 html and css.|
| __SelectedItem__ |RadMenuItem|Gets a __RadMenuItem__ object that represents the selected item in the __RadMenu__ control.|
| __SelectedValue__ |string|Gets the __RadMenuItem.Value__ of the selected item.|
| __ShowToggleHandle__ |bool|Gets the sets a value indicating whether a toggle handler is rendered when item has child items.|

The following table lists most of the methods that __RadMenu__ offers:


|  __Property__  |  __Parameter__  |  __Return Value__  |  __Description__  |
| ------ | ------ | ------ | ------ |
|GetAllItems|none|IList<RadMenuItem>|Returns a list of all items in the menu, flattening out the menu hierarchy.|
|FindItemByText|string|RadMenuItem|Returns the first item in the menu whose __Text__ property matches the parameter.|
|FindItemByUrl|string|RadMenuItem|Returns the first item in the menu whose __NavigateUrl__ property matches the parameter.|
|FindItemByValue|string|RadMenuItem|Returns the first item in the menu whose __Value__ property matches the parameter.|
|LoadContentFile|string|none|Populates the __RadMenu__ control from external XML file..|
|LoadXml|string|none|Loads the control from a XML file.|

# See Also

 * [Working With Items at Server-side]({%slug menu/radmenu-items/working-with-items-at-server-side%})

 * [RadMenuItemCollection Object]({%slug menu/client-side-programming/objects/radmenuitemcollection-object%})

 * [RadMenu and RadContextMenu Objects]({%slug menu/client-side-programming/objects/radmenu-and-radcontextmenu-objects%})
