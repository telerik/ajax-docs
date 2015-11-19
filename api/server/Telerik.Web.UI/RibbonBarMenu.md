---
title: Telerik.Web.UI.RibbonBarMenu
page_title: Telerik.Web.UI.RibbonBarMenu
description: Telerik.Web.UI.RibbonBarMenu
---

# Telerik.Web.UI.RibbonBarMenu

This partial class RibbonBarMenu that inherits RibbonBarMenuBaseItem.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RibbonBarItem : IRibbonBarSubComponent
* Telerik.Web.UI.RibbonBarClickableItem
* Telerik.Web.UI.RibbonBarMenuBaseItem
* Telerik.Web.UI.RibbonBarMenu : IXmlSerializable

## Properties

###  Items `RibbonBarMenuItemCollection`

Gets a RibbonBarMenuItemCollection object that contains the items of the Menu.

#### Remarks
Use the Items property to access the items of the Menu. You can also use the Items property to
            	manage the items. You can add, remove or modify items from the Items collection.

###  ParentWebControl `WebControl`

Gets or sets the parent web control.

###  ImageUrl `String`

Gets or sets the small (or in Clip ImageRenderingMode both small and large) image's URL of a certain item.

#### Remarks
Use the ImageUrl property to specify a custom image that will be
            	used when the item has Size = RibbonBarItemSize.Small or RibbonBarItemSize.Medium, when in Dual mode and all sizes in Clip mode.

###  ToolTip `String`

Gets or sets the tooltip of a certain item.

#### Remarks
When the ToolTip value is empty, the default ASP ToolTip is displayed 
                with the Text of the item as a value. When ToolTip is set, the enhanced RibbonBar tooltip 
                is shown instead of the default one.

###  DisabledImageUrl `String`

Gets or sets the small (or in Clip ImageRenderingMode both small and large) disabled image's URL of a certain item.

#### Remarks
Use the DisabledImageUrl property to specify a custom image that will be
            	used when the item has Size = RibbonBarItemSize.Small or RibbonBarItemSize.Medium, when in Dual mode and all sizes in Clip mode
            	and at the same time disabled.

###  ImageUrlLarge `String`

Gets or sets the large image's URL of a certain item.

#### Remarks
Use the ImageUrlLarge property to specify a custom image that will be
            	used when the item has Size = RibbonBarItemSize.Large.

###  DisabledImageUrlLarge `String`

Gets or sets the large image's URL of a certain item for disabled state.

#### Remarks
Use the DisabledImageUrlLarge property to specify a custom image that will be
            	used when the item has Size = RibbonBarItemSize.Large and is disabled.

###  Size `RibbonBarItemSize`

Gets or sets the size of a certain item. This property is used to determine
            	a combination of Text, ImageUrl and ImageUrlLarge which should be displayed
            	at initial load of the RibbonBar for a specific item.

#### Remarks
Use the Size property to specify the item's initial size:
            	 - For small icon - RibbonBarItemSize.Small;
            	 - For small icon with text - RibbonBarItemSize.Medium;
            	 - For large icon with text - RibbonBarItemSize.Large.

###  ImageRenderingMode `RibbonBarImageRenderingMode`

Gets/sets the Image Rendering Mode, localy for the item.

#### Remarks
In case ImageRenderingMode is not explicitly set (meaning RibbonBar's ImageRenderingMode is Auto), it's considered as follows:
            	    - If ImageUrl is set and ImageUrlLarge is not set - the mode is Clip;
            	    - Any other case - Dual.

###  Text `String`

Gets or sets the text of a certain item.

#### Remarks
Use the property to set the displayed text for an item.

###  ImageAltText `String`

Gets or sets the rendered alt text of the item's image dom element.

#### Remarks
Use the property to set the alt text for the item's image element, when needed for accessibility.

###  ItemType `RibbonBarItemType`

Gets the type of the RibbonBarItem. Usefull when iterating through the Items collection of RibbonBarGroup

## Methods

###  GetVisibleItems

Returns the Visible menu items.

#### Returns

`System.Collections.Generic.IList`1` All visible items in the Menu.

###  FindMenuItemByValue

Searches the RibbonBarMenu for the first
                RibbonBarMenuItem which Value
                property is equal to the specified value.

#### Parameters

#### value `System.String`

The Value to search for.

#### Returns

`Telerik.Web.UI.RibbonBarMenuItem` A RibbonBarMenuItem whose Value property is equal to the specifed 
            	value. If a button is not found, null (Nothing in Visual Basic) is returned.

###  ReadXml

Reads the XML.

#### Parameters

#### reader `System.Xml.XmlReader`

The reader.

#### Returns

`System.Void` 

