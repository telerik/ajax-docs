---
title: Telerik.Web.UI.DropDownListItem
page_title: Telerik.Web.UI.DropDownListItem
description: Telerik.Web.UI.DropDownListItem
---

# Telerik.Web.UI.DropDownListItem

This Class defines the DropDownListItem in RadDropDownList.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.ControlItem : IMarkableStateManager, INamingContainer, IStateManager, IXmlSerializable
* Telerik.Web.UI.DropDownListItem : IComparable

## Properties

###  DropDownList `RadDropDownList`

Gets the  which this item belongs to.

###  Selected `Boolean`

Gets or sets a value indicating whether this  is selected.

###  ImageUrl `String`

Gets or sets the path to an image to display for the item.

#### Remarks
Use the ImageUrl property to specify the image for the item. If
            the ImageUrl property is set to empty string no image will be
            rendered. Use "~" (tilde) when referring to images within the current ASP.NET
            application.

###  Enabled `Boolean`

###  Visible `Boolean`

###  ID `String`

The ID property is reserved for internal use. Please use the Value property or
            use the Attributes collection if you need to assign
            custom data to the item.

###  Index `Int32`

Gets the zero based index of the item.

###  AccessKey `String`

Gets or sets the access key that allows you to quickly navigate to the Web server control.

###  BackColor `Color`

###  ForeColor `Color`

###  BorderColor `Color`

## Methods

###  Remove

Removes this  from the  control which contains it.

#### Returns

`System.Void` 

###  CompareTo

Compares the current instance with another object of the same type.

#### Parameters

#### obj `System.Object`

An object to compare with this instance.

#### Returns

`System.Int32` A 32-bit signed integer that indicates the relative order of the objects
            being compared. The return value has these meanings: Value Meaning Less than
            zero This instance is less than . Zero This instance is
            equal to . Greater than zero This instance is greater than
            .

###  IsChildControl

Returns true if the control is rendered by the ControlItem itself;
            false if it was added by the user to the Controls collection.

#### Returns

`System.Boolean` 

