---
title: Telerik.Web.UI.RadSliderItem
page_title: Telerik.Web.UI.RadSliderItem
description: Telerik.Web.UI.RadSliderItem
---

# Telerik.Web.UI.RadSliderItem

Represents an item that is part of the RadSlider control using items collection

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.ControlItem : IMarkableStateManager, INamingContainer, IStateManager, IXmlSerializable
* Telerik.Web.UI.RadSliderItem

## Properties

###  AccessKey `String`

Gets or sets the access key that allows you to quickly navigate to the Web server control.

###  ID `String`

The ID property is reserved for internal use. Please use the Value property or
            use the Attributes collection if you need to assign
            custom data to the item.

###  Index `Int32`

Gets the zero based index of the item.

###  Owner `RadSlider`

Gets the RadSlider instance which contains the current item.

###  Selected `Boolean`

Gets the selected state of the slider item.

#### Remarks
Use the Selected property to determine whether the item is selected or not.

###  SliderParent `RadSlider`

Gets the RadSlider instance which contains the current item.

###  Text `String`

Gets or sets the text caption for the slider item.

#### Remarks
Use the Text property to specify the text to display for the
            item.

###  ToolTip `String`

Gets or sets the tooltip of the slider item.

###  Value `String`

Gets or sets the value  for the slider item.

#### Remarks
Use the Value property to specify the value

## Methods

###  IsChildControl

Returns true if the control is rendered by the ControlItem itself;
            false if it was added by the user to the Controls collection.

#### Returns

`System.Boolean` 

