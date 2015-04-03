---
title: Server-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: formdecorator/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview



## 


>caption RadFormDecorator exposes the following properties:

|  __Name__  |  __Description__  |
| ------ | ------ |
| __ControlsToSkip__ |Sets the type of the HTML elements/controls which are to be excluded from decoration - takes a combination of the members of the __Telerik.Web.UI.FormDecoratorDecoratedControls__ . The default value is "None" which means that no elements/controls will be excluded from decoration if DecoratedControls property is set to "All".|
| __DecoratedControls__ |Sets the type of the HTML elements/controls which are to be decorated - takes a combination of the members of the __Telerik.Web.UI.FormDecoratorDecoratedControls__ . The default value is "Default" which means CheckBoxes, RadioButtons, Buttons and Scrollbars will be decorated.|
| __DecorationZoneID__ |The ID of the HTML element which content will be decorated. (e.g. DecorationZoneID="div1" will decorate the content of div with ID="div1")|
| __EnableEmbeddedSkins__ |A boolean property indicating whether the FormDecorator will apply own or[custom Skin]({%slug formdecorator/appearance-and-styling/tutorial:-create-custom-skins%})(e.g. If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.)|
| __EnableRoundedCorners__ |A boolean property indicating whether the Input fields will be decorated with rounded corners.|
| __Skin__ |Controls the Skin of the decorated controls|

## 

RadFormDecorator exposes __Telerik.Web.UI.FormDecoratorDecoratedControls__ enumerator:

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
