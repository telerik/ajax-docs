---
title: Telerik.Web.UI.RadMenuItemGroupSettings
page_title: Telerik.Web.UI.RadMenuItemGroupSettings
description: Telerik.Web.UI.RadMenuItemGroupSettings
---

# Telerik.Web.UI.RadMenuItemGroupSettings

Represents settings controlling child item behavior.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.RadMenuItemGroupSettings

## Properties

###  ExpandDirection `ExpandDirection`

Gets or sets the direction in which child items will open.

#### Remarks
Use the ExpandDirection property to specify different expand
                direction than the automatically determined one. See the
                ExpandDirection description for more information.

###  Flow `ItemFlow`

Gets or sets the flow of child items.

#### Remarks
Use the Flow property to customize the flow of child menu items.
            By default RadMenu mimics the behavior of Windows and child items
            (apart from top level ones) flow vertically.

###  Height `Unit`

Gets or sets a value indicating the height of child menu items (the whole item
            group).

#### Remarks
If the total height of menu items exceeds the Height property
            scrolling will be applied.

###  OffsetX `Int32`

Gets or sets a value indicating the horizontal offset of child menu items
            considering their parent.

#### Remarks
Use the OffsetX property to change the position where child
                items will appear.
                    To customize the vertical offset use the OffsetY
                    property.

###  OffsetY `Int32`

Gets or sets a value indicating the vertical offset of child menu items
            considering their parent.

#### Remarks
Use the OffsetY property to change the position where child
                items will appear.
                    To customize the horizontal offset use the OffsetX
                    property.

###  RepeatColumns `Int32`

Gets or sets the number of columns to display in this item group.

#### Remarks
Specifies the number of columns which are displayed for a given item group. For example, 
            if it set to 3, the child items are displayed in three columns.
            The default value is 1.Displaying more than 1 column automatically disables scrolling for this group.

###  RepeatDirection `MenuRepeatDirection`

Gets or sets whether the columns are repeated vertically or horizontally

#### Remarks
When this property is set to Vertical, 
            items are displayed vertically in columns from top to bottom, 
            and then left to right, until all items are rendered.
            
            When this property is set to Horizontal,
            items are displayed horizontally in rows from left to right, 
            then top to bottom, until all items are rendered.

###  Width `Unit`

Gets or sets a value indicating the width of child menu items (the whole item
            group).

#### Remarks
If the total width of menu items exceeds the Width property
            scrolling will be applied.

## Methods

###  ToString

Returns a  that represents the current
            .

#### Returns

`System.String` A  that represents the current .

