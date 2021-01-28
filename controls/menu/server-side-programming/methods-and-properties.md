---
title: Methods and Properties
page_title: Methods and Properties - RadMenu
description: Check our Web Forms article about Methods and Properties.
slug: menu/server-side-programming/methods-and-properties
tags: methods,and,properties
published: True
position: 4
---

# Methods and Properties



## RadMenu Properties and Methods

**RadMenu** has a number of useful properties methods for iteracting with the menu and items. The following table lists these properties:




|  **Property**  |  **Type**  |  **Description**  |
| ------ | ------ | ------ |
| **AccessKey** |string|Sets or returns a String that represents the shortcut key, also known as the accelerator key, for a specified object.|
| **AutoScrollMinimumHeight** |int|The minimum available height that is needed to enable the auto-scroll.|
| **AutoScrollMinimumWidth** |int|The minimum available width that is needed to enable the auto-scroll.|
| **ClearSelectedItem** |void|Clears the selected item from the current **RadMenu** instance. Very useful when you want to clear the selected item after a postback.|
| **ClickToOpen** |bool|Specifying if child items should open when the user clicks on their parent item, rather than just pointing the mouse over it.|
| **ClientItemTemplate** |string|Gets or sets the client template for displying the items of the **RadMenu** .|
| **CollapseAnimation** |AnimationSettings|Gets the settings for animation played when item closes.|
| **CollapseDelay** |string|Gets or sets the animation timeout after which the item starts to close.|
| **EnableAutoScroll** |bool|Gets or sets a value indicating if an automatic scroll is applied if the groups are larger then the screen height. To use this with `RadContextMenu`, define `DefaultGroupSettings.Height`. |
| **EnableOverlay** |bool|Gets or sets a value indicating if an overlay should be rendered (only in Internet Explorer).|
| **EnableRootItemScroll** |bool|Gets or sets a value indicating if scroll is enabled for the root items.|
| **EnableRoundedCorners** |bool|Specifying if child items should have rounded corners.|
| **EnableScreenBoundaryDetection** |bool|Specifies where screen boundary detection is enabled or not.|
| **EnableSelection** |bool|Gets or sets a value indicating if the currently selected item will be tracked and highlighted.|
| **EnableShadows** |bool|Specifying if child items should have shadows.|
| **EnableTextHTMLEncoding** |bool|Specifies whether the text encoding when rendering menu item is enabled or not.|
| **ExpandAnimation** |AnimationSettings|Gets or sets a the animation settings when item closes.|
| **ExpandDelay** |int|Gets or sets a delay in milliseconds between the mouse entering a **RadMenuItem** and its child items starting to expand|
| **Flow** |ItemFlow|Gets or sets the orientation of the root items|
| **Items** |RadMenuItemCollection|Gets or sets RadMenuItemCollection that contains the root items of the **RadMenu** .|
| **ItemTemplate** |string|Gets or sets the template for displaying the items in **RadMenu** .|
| **RenderMode** |RenderMode|Specifies the **RadMenu** 's render mode. Using the LightWeight render mode will yield HTML5/CSS3 html and css.|
| **SelectedItem** |RadMenuItem|Gets a **RadMenuItem** object that represents the selected item in the **RadMenu** control.|
| **SelectedValue** |string|Gets the **RadMenuItem.Value** of the selected item.|
| **ShowToggleHandle** |bool|Gets the sets a value indicating whether a toggle handler is rendered when item has child items.|

The following table lists most of the methods that **RadMenu** offers:


|  **Property**  |  **Parameter**  |  **Return Value**  |  **Description**  |
| ------ | ------ | ------ | ------ |
|GetAllItems|none|IList<RadMenuItem>|Returns a list of all items in the menu, flattening out the menu hierarchy.|
|FindItemByText|string|RadMenuItem|Returns the first item in the menu whose **Text** property matches the parameter.|
|FindItemByUrl|string|RadMenuItem|Returns the first item in the menu whose **NavigateUrl** property matches the parameter.|
|FindItemByValue|string|RadMenuItem|Returns the first item in the menu whose **Value** property matches the parameter.|
|LoadContentFile|string|none|Populates the **RadMenu** control from external XML file..|
|LoadXml|string|none|Loads the control from a XML file.|

# See Also

 * [Working With Items at Server-side]({%slug menu/radmenu-items/working-with-items-at-server-side%})

 * [RadMenuItemCollection Object]({%slug menu/client-side-programming/objects/radmenuitemcollection-object%})

 * [RadMenu and RadContextMenu Objects]({%slug menu/client-side-programming/objects/radmenu-and-radcontextmenu-objects%})
