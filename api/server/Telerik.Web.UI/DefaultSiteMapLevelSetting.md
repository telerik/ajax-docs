---
title: Telerik.Web.UI.DefaultSiteMapLevelSetting
page_title: Telerik.Web.UI.DefaultSiteMapLevelSetting
description: Telerik.Web.UI.DefaultSiteMapLevelSetting
---

# Telerik.Web.UI.DefaultSiteMapLevelSetting

Specialized class for the RadSiteMap.DefaultLevelSettings.
            Removes the Level property from the property grid and IntelliSense.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.SiteMapLevelSetting
* Telerik.Web.UI.DefaultSiteMapLevelSetting

## Properties

###  ImageUrl `String`

Gets or sets the URL to an image which is displayed next to all the nodes of a given level

#### Remarks
Use the ImageUrl property to specify a custom image that will be
            	displayed before the text of the current node.

###  Layout `SiteMapLayout`

Gets or sets the layout mode that is applied to a given LevelSetting. By default is set to List

###  Level `Int32`

Not applicable to DefaultSiteMapLevelSetting

###  Level `Int32`

Gets or sets the level to which a given LevelSetting refer/

###  ListLayout `SiteMapLayout`

Gets the Specific settings for the List layout mode.

###  MaximumNodes `Int32`

Gets or sets the maximum nodes that are allowed for a given level.

###  NodeTemplate `ITemplate`

Gets or sets the template for displaying the nodes on the specified level.

###  SeparatorTemplate `ITemplate`

Gets or sets the separator template for nodes on the specified level.

###  SeparatorText `String`

Gets or sets the separator text that is going to be used to separate 
            nodes in Flow layout mode.

###  Width `Unit`

Gets or sets the width of the specified level.

