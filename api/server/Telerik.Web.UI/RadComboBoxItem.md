---
title: Telerik.Web.UI.RadComboBoxItem
page_title: Telerik.Web.UI.RadComboBoxItem
description: Telerik.Web.UI.RadComboBoxItem
---

# Telerik.Web.UI.RadComboBoxItem

Represents an individual item in a Telerik.Web.UI.RadComboBox control.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.ControlItem : IMarkableStateManager, INamingContainer, IStateManager, IXmlSerializable
* Telerik.Web.UI.RadComboBoxItem : IComparable

## Properties

###  AccessKey `String`

Gets or sets the access key that allows you to quickly navigate to the Web server control.

###  Checked `Boolean`

Gets or sets the checked state of the combobox item.

#### Remarks
Use the Checked property to determine whether the item is checked or not.

###  ComboBoxParent `RadComboBox`

Gets the RadComboBox instance which contains the current item.

###  DisabledImageUrl `String`

Gets or sets the path to an image to display for the item when it is disabled.

#### Remarks
Use the DisabledImageUrl property to specify the image for the item when it is disabled. If
            the DisabledImageUrl property is set to empty string no image will be
            rendered. Use "~" (tilde) when referring to images within the current ASP.NET
            application.

###  EnableViewState `Boolean`

Gets or sets a value indicating whether the server control persists
            its view state, and the view state of any child controls it contains, to the
            requesting client.

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

###  IsSeparator `Boolean`

Sets or gets whether the item is separator. It also represents a logical state of
            the item. Might be used in some applications for keyboard navigation to omit processing
            items that are marked as separators.

###  Owner `RadComboBox`

Gets the RadComboBox instance which contains the current item.

###  Selected `Boolean`

Gets or sets the selected state of the combobox item.

#### Remarks
Use the Selected property to determine whether the item is selected or not.

###  Text `String`

Gets or sets the text caption for the combobox item.

#### Remarks
Use the Text property to specify the text to display for the
            item.

###  ToolTip `String`

Gets or sets the tooltip of the combobox item.

###  Value `String`

Gets or sets the value  for the combobox item.

#### Remarks
Use the Value property to specify the value

## Methods

###  CompareTo

Compares two instance for equality. 
            returns 0 if equal, a positive number if the first is greater than the 
            second, and a negative number otherwise.

#### Parameters

#### obj `System.Object`

#### Returns

`System.Int32` 

###  IsChildControl

Returns true if the control is rendered by the ControlItem itself;
            false if it was added by the user to the Controls collection.

#### Returns

`System.Boolean` 

###  Remove

Removes this instance.

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

###  RenderEndTag

Renders the HTML closing tag of the control into the specified writer.
            This method is used primarily by control developers.

#### Parameters

#### writer `System.Web.UI.HtmlTextWriter`

A  that represents
            the output stream to render HTML content on the client.

#### Returns

`System.Void` 

