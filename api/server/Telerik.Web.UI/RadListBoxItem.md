---
title: Telerik.Web.UI.RadListBoxItem
page_title: Telerik.Web.UI.RadListBoxItem
description: Telerik.Web.UI.RadListBoxItem
---

# Telerik.Web.UI.RadListBoxItem

This Class defines the RadListBoxItem in RadListBox.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.ControlItem : IMarkableStateManager, INamingContainer, IStateManager, IXmlSerializable
* Telerik.Web.UI.RadListBoxItem : IComparable

## Properties

###  AccessKey `String`

Gets or sets the access key that allows you to quickly navigate to the Web server control.

###  AllowDrag `Boolean`

Gets or sets a value indicating whether the Item can be dragged and dropped.

###  Checkable `Boolean`

Gets or sets a value indicating whether the item is checkable. A checkbox control is rendered
            for checkable nodes.

#### Remarks
If the CheckBoxes property set to true, RadTreeView automatically displays a checkbox next to each node. 
            You can set the Checkable property to false for nodes that do not need to display a checkbox.

###  Checked `Boolean`

Gets or sets a value indicating whether the item is checked or not.

###  DataKey `Object`

Gets the data key.

###  ID `String`

The ID property is reserved for internal use. Please use the Value property or
            use the Attributes collection if you need to assign
            custom data to the item.

###  ImageUrl `String`

Gets or sets the path to an image to display for the item.

#### Remarks
Use the ImageUrl property to specify the image for the item. If
            the ImageUrl property is set to empty string no image will be
            rendered. Use "~" (tilde) when referring to images within the current ASP.NET
            application.

###  Index `Int32`

Gets the zero based index of the item.

###  ListBox `RadListBox`

Gets the  which this item belongs to.

###  Selected `Boolean`

Gets or sets a value indicating whether this  is selected.

###  Value `String`

Gets or sets the value of this .

## Methods

###  Clone

Clones this instance.

#### Returns

`Telerik.Web.UI.RadListBoxItem` 

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

###  Remove

Removes this  from the  control which contains it.

#### Returns

`System.Void` 

###  RenderBeginTag

Renders the HTML opening tag of the control to the specified writer.
            This method is used primarily by control developers.

#### Parameters

#### writer `System.Web.UI.HtmlTextWriter`

A  that represents
            the output stream to render HTML content on the client.

#### Returns

`System.Void` 

