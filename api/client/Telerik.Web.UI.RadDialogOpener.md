---
title: Telerik.Web.UI.RadDialogOpener
title_prefix: Client-side API Reference
description: Telerik.Web.UI.RadDialogOpener
slug: Telerik.Web.UI.RadDialogOpener
---

# Telerik.Web.UI.RadDialogOpener : Telerik.Web.UI.RadWebControl

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadDialogOpener]({%slug Telerik.Web.UI.RadDialogOpener%})*


## Methods

### open 

Opens a dialog created via DialogDefinitions on the server.

#### Parameters

##### dialogName `String`

The name of the dialog to be opened. 

##### clientParameters `Object`

Parameters to be passed to the dialog.

##### callbackFunction `Function`

The callback function.

#### Returns

`None`


### openLight 

Opens a light dialog created via DialogDefinitions on the server.

#### Parameters

##### dialogName `String`

The name of the dialog to be opened. 

##### clientParameters `Object`

Parameters to be passed to the dialog.

##### callbackFunction `Function`

The callback function.

#### Returns

`None`

### openUrl

Opens a dialog via the DialogOpener.

#### Parameters

##### url `String`

Specifies the URL/Path to the user control to be opened in the dialog.

##### argument `Object`

Pass an argument object to be fetched in the dialog.

##### width `Number`

The width of the dialog.

##### height `Number`

The height of the dialog.

##### callbackFunction `Function`

The callback function which will be called on closing the dialog.

##### callbackArgs `Object`

##### title `String`

The title of the dialog.

##### modal `Boolean`

Specifies whether the dialog to be modal or not.

##### behaviors `Telerik.Web.UI.WindowBehaviors`

The behavior settings of the dialog.

##### showStatusbar `Boolean`

##### showTitlebar `Boolean`

##### dialogName `String`

Specifies the name of the dialog instance.

#### Returns

`None`


## Events

### open

This event is fired when the dialog is opened.

#### Event Data

##### sender `Telerik.Web.UI.RadDialogOpener`

The RadDialogOpener instance raised the event.

##### args `Telerik.Web.UI.DialogOpenEventArgs`

The event arguments.

### close

This event is fired when the dialog is opened.

#### Event Data

##### sender `Telerik.Web.UI.RadDialogOpener`

The RadDialogOpener instance raised the event.

##### dialog `Telerik.Web.UI.RadWindow`

The RadWindow instance of the dialog.

