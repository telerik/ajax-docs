---
title: Telerik.Web.UI.ResourceStyleMapping
page_title: Telerik.Web.UI.ResourceStyleMapping
description: Telerik.Web.UI.ResourceStyleMapping
---

# Telerik.Web.UI.ResourceStyleMapping

This Class implements the ResourceStyleMapping.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager
* Telerik.Web.UI.ResourceStyleMapping

## Properties

###  Key `String`

Gets or sets a value indicating the resource key to match.

###  Text `String`

Gets or sets a value indicating the resource text to match.

###  Type `String`

Gets or sets a value indicating the resource type to match.

###  ApplyCssClass `String`

Gets or sets a value indicating the cascading style sheet (CSS) class
            to render for appointments that use the matching resource.

#### Remarks
You can define your own CSS class name or use some of the predefined class names:
            rsCategoryBluersCategoryDarkBluersCategoryDarkGreenrsCategoryDarkRedrsCategoryGreenrsCategoryOrangersCategoryPinkrsCategoryRedrsCategoryVioletrsCategoryYellow

###  BackColor `Color`

Gets or sets a value indicating the background color
            to render for appointments that use the matching resource.

#### Remarks
Setting a background color automatically switches the appointment rendering
            to Simple (no rounded corners and gradients). In order to disable this
            legacy behavior, and force the default rendering, set AppointmentStyleMode
            to Default.

###  BorderColor `Color`

Gets or sets a value indicating the border color
            to render for appointments that use the matching resource.

#### Remarks
Setting a border color automatically switches the appointment rendering
            to Simple (no rounded corners and gradients). In order to disable this
            legacy behavior, and force the default rendering, set AppointmentStyleMode
            to Default.

