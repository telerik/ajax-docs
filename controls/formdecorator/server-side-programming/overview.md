---
title: Overview
page_title: Server-side Programming Overview - RadFormDecorator
description: Check our Web Forms article about Overview.
slug: formdecorator/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview

>caption **RadFormDecorator** exposes the following properties:

|  **Name**  |  **Description**  |
| ------ | ------ |
| **ControlsToSkip** |Sets the type of the HTML elements/controls which are to be excluded from decoration - takes a combination of the members of the **Telerik.Web.UI.FormDecoratorDecoratedControls** . The default value is "None" which means that no elements/controls will be excluded from decoration if DecoratedControls property is set to "All".|
| **DecoratedControls** |Sets the type of the HTML elements/controls which are to be decorated - takes a combination of the members of the **Telerik.Web.UI.FormDecoratorDecoratedControls** . The default value is "Default" which means CheckBoxes, RadioButtons, Buttons and Scrollbars will be decorated.|
| **DecorationZoneID** |The ID of the HTML element which content will be decorated. (e.g. **DecorationZoneID**="div1" will decorate the content of div with ID="div1")|
| **EnableEmbeddedSkins** |A boolean property indicating whether the FormDecorator will apply own or [custom Skin]({%slug formdecorator/appearance-and-styling/tutorial-creating-custom-lightweight-skin%})(e.g. If **EnableEmbeddedSkins** is set to false you will have to register the needed CSS files by hand.)|
| **EnableRoundedCorners** |A boolean property indicating whether the Input fields will be decorated with rounded corners.|
| **Skin** |Controls the Skin of the decorated controls|

RadFormDecorator exposes **Telerik.Web.UI.FormDecoratorDecoratedControls** enumerator:

* All

* Buttons

* CheckBoxes

* Default

* Fieldset

* GridFormDetailsViews

* H4H5H6

* Label

* LoginControls

* None

* RadioButtons

* Scrollbars

* Select

* Textarea

* Textbox

* ValidationSummary

* Zone
