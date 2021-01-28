---
title: RadDialogOpener Object
page_title: RadDialogOpener Object - RadEditor
description: Check our Web Forms article about RadDialogOpener Object.
slug: editor/client-side-programming/raddialogopener-object
tags: raddialogopener,object
published: True
position: 12
---

# RadDialogOpener Object



The RadDialogOpener object exposes the following public methods and properties to control its behavior:

>caption RadDialogOpener Client-Side Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|open|`String`, `Object`, `Function`||Opens a dialog created via DialogDefinitions on the server.The method takes the following arguments: **dialogName** - The name of the dialog to be opened. **clientParameters** - Parameters to be passed to the dialog. **callbackFunction** - The callback function.|
|openLight|`String`, `Object`, `Function`||Opens a light dialog created via DialogDefinitions on the server.The method takes the following arguments: **dialogName** - The name of the dialog to be opened. **clientParameters** - Parameters to be passed to the dialog. **callbackFunction** - The callback function.|
|openUrl|`String`, `Object`, `Number`, `Number`, `Function`, `Object`, `String`, `Boolean`, `Telerik.Web.UI.WindowBehaviors`, `Boolean`, `Boolean`, `String`||Opens a dialog via the DialogOpener.The method takes the following arguments: **url** - Specifies the URL/Path to the user control to be opened in the dialog. **argument** - Pass an argument object to be fetched in the dialog. **width** - The width of the dialog. **height** - The height of the dialog. **callbackFunction** - The callback function which will be called on closing the dialog. **callbackArgs** - The callback arguments. **title** - The title of the dialog. **modal** - Specifies whether the dialog to be modal or not. **behaviors** - The behavior settings of the dialog. **showStatusbar** - Specifies whether to show the status bar. **showTitlebar** - Specifies whether to show the title bar. **dialogName** - Specifies the name of the dialog instance.|

>caption RadDialogOpener Client-Side Methods for attaching/detaching client-side event handlers


| Name | Arguments | Description |
| ------ | ------ | ------ |
|add_close|Function|Adds a handler for the close RadDialogOpener client event.|
|add_open|Function|Adds a handler for the open RadDialogOpener client event.|
|remove_close|Function|Removes a handler for the close RadDialogOpener client event.|
|remove_open|Function|Removes a handler for the open RadDialogOpener client event.|
