---
title: Telerik.Web.UI.RibbonBarMenuItem
page_title: Telerik.Web.UI.RibbonBarMenuItem
description: Telerik.Web.UI.RibbonBarMenuItem
---

# Telerik.Web.UI.RibbonBarMenuItem

This Class defines RibbonBarMenuItem.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RibbonBarMenuItem

## Properties

###  ParentItem `RibbonBarMenuItem`

Gets the parent item of the menu item. Returns null if the parent is the menu itself.

###  Container `IRibbonBarSubComponent`

Gets or sets the container.

###  RibbonBar `RadRibbonBar`

Gets a reference to the RibbonBar instance.

#### Remarks
Use the property to get the RibbonBar instance.

###  ParentWebControl `WebControl`

Gets or sets the parent web control.

###  ImageUrl `String`

Gets or sets the image's URL of the item, used when it's enabled.

#### Remarks
Use the ImageUrl property to specify a custom image that will be
            	used when the item is enabled.

###  DisabledImageUrl `String`

Gets or sets the image's URL of the item, used when it's disabled.

#### Remarks
Use the DisabledImageUrl property to specify a custom image that will be
            	used when the item is disabled.

###  ImageAltText `String`

Gets or sets the rendered alt text of the item's image dom element.

#### Remarks
Use the property to set the alt text for the item's image element, when needed for accessibility.

###  NavigateUrl `String`

Gets or sets navigation URL for the item. Usually pointing to a page.

#### Remarks
Use the NavigateUrl property to specify a custom a url to a page
            	which should be loaded on click on the item.

###  Text `String`

Gets or sets the text of a certain item.

#### Remarks
Use the property to set the displayed text for an item.

###  Value `String`

Gets or sets the value property of the item.

#### Remarks
You can use it to associate custom data with the item.

###  ToolTip `String`

Gets or sets the tooltip of a certain item.

#### Remarks
When the ToolTip value is empty, the default ASP ToolTip is displayed 
                with the Text of the item as a value. When ToolTip is set, the enhanced RibbonBar tooltip 
                is shown instead of the default one.

###  CommandName `String`

Gets or sets the command name associated with the MenuItem that is passed to the Command event.

###  CommandArgument `String`

Gets or sets an optional parameter passed to the Command event along with the associated CommandName.

###  Items `RibbonBarMenuItemCollection`

Gets a RibbonBarMenuItemCollection object that contains the sub-items of the MenuItem.

#### Remarks
Use the Items property to access the sub-items of the MenuItem. You can also use the Items property to
            	manage the items. You can add, remove or modify items from the Items collection.

## Methods

###  RenderControl

Outputs server control content to a provided 
            object and stores tracing information about the control if tracing is enabled.

#### Parameters

#### writer `System.Web.UI.HtmlTextWriter`

The  object
            that receives the control content.

#### Returns

`System.Void` 

###  GetVisibleItems

Returns the Visible sub-items.

#### Returns

`System.Collections.Generic.IList`1` All visible sub-items.

###  FindMenuItemByValue

Searches the RibbonBarMenuItem for the first
                sub-item which Value
                property is equal to the specified value.

#### Parameters

#### value `System.String`

The Value to search for.

#### Returns

`Telerik.Web.UI.RibbonBarMenuItem` A sub-item of the current MenuItem whose Value property is equal to the specifed 
            	value. If a button is not found, null (Nothing in Visual Basic) is returned.

###  ReadXml

Reads the XML.

#### Parameters

#### reader `System.Xml.XmlReader`

The reader.

#### Returns

`System.Void` 

