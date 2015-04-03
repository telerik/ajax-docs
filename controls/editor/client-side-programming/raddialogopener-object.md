---
title: RadDialogOpener Object
page_title: RadDialogOpener Object | UI for ASP.NET AJAX Documentation
description: RadDialogOpener Object
slug: editor/client-side-programming/raddialogopener-object
tags: raddialogopener,object
published: True
position: 12
---

# RadDialogOpener Object



The RadDialogOpener object exposes the following public methods and properties to control its behavior:

## 

RadDialogOpener Client-Side Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|open|`String`, `Object`, `Function`||Opens a dialog created via DialogDefinitions on the server.The method takes the following arguments:

1. dialogName - The name of the dialog to be opened.

1. clientParameters - Parameters to be passed to the dialog.

1. callbackFunction - The callback function.|
|openLight|`String`, `Object`, `Function`||Opens a light dialog created via DialogDefinitions on the server.The method takes the following arguments:

1. dialogName - The name of the dialog to be opened.

1. clientParameters - Parameters to be passed to the dialog.

1. callbackFunction - The callback function.|
|openUrl|`String`, `Object`, `Number`, `Number`, `Function`, `Object`, `String`, `Boolean`, `Telerik.Web.UI.WindowBehaviors`, `Boolean`, `Boolean`, `String`||Opens a dialog via the DialogOpener.The method takes the following arguments:

1. url - Specifies the URL/Path to the user control to be opened in the dialog.

1. argument - Pass an argument object to be fetched in the dialog.

1. width - The width of the dialog.

1. height - The height of the dialog.

1. callbackFunction - The callback function which will be called on closing the dialog.

1. callbackArgs - The callback arguments.

1. title - The title of the dialog.

1. modal - Specifies whether the dialog to be modal or not.

1. behaviors - The behavior settings of the dialog.

1. showStatusbar - Specifies whether to show the status bar.

1. showTitlebar - Specifies whether to show the title bar.

1. dialogName - Specifies the name of the dialog instance.|

## 

RadDialogOpener Client-Side Methods for attaching/detaching client-side event handlers


| Name | Arguments | Description |
| ------ | ------ | ------ |
|add_close|Function|Adds a handler for the close RadDialogOpener client event.|
|add_open|Function|Adds a handler for the open RadDialogOpener client event.|
|remove_close|Function|Removes a handler for the close RadDialogOpener client event.|
|remove_open|Function|Removes a handler for the open RadDialogOpener client event.|
