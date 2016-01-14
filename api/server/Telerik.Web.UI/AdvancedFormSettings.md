---
title: Telerik.Web.UI.AdvancedFormSettings
page_title: Telerik.Web.UI.AdvancedFormSettings
description: Telerik.Web.UI.AdvancedFormSettings
---

# Telerik.Web.UI.AdvancedFormSettings

This Class gets and sets the AdvancedForm Settings.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.AdvancedFormSettings

## Properties

###  DateFormat `String`

Gets or sets the edit form date format string.

#### Remarks
The default value of this property is inferred from the
            Thread.CurrentThread.CurrentCulture.DateTimeFormat.ShortDatePattern
            property.

###  EnableCustomAttributeEditing `Boolean`

Gets or sets a value that indicates whether the attribute editing in the advanced form is enabled.

###  Enabled `Boolean`

Gets or sets a value indicating whether the user can use the advanced insert/edit form.

###  EnableResourceEditing `Boolean`

Gets or sets a value that indicates whether the resource editing in the advanced form is enabled.

###  EnableTimeZonesEditing `Boolean`

Gets or sets a value that controls whether one can chose custom time zone for appointment, i.e. 
            different from the one RadScheduler is operating in."

###  MaximumHeight `Unit`

Gets or sets the maximum height of the modal advanced form.

###  Modal `Boolean`

Gets or sets a value indicating whether advanced form is displayed as a modal dialog.

###  TimeFormat `String`

Gets or sets the edit form time format string.

#### Remarks
The default value of this property is inferred from the
            Thread.CurrentThread.CurrentCulture.DateTimeFormat.ShortTimePattern
            property.

###  Width `Unit`

Gets or sets the width of the modal advanced form.

###  ZIndex `Int32`

Gets or sets a value indicating the z-index of the modal dialog.

#### Remarks
Use this property to position the form over elements with higher z-index
            than the modal form.

