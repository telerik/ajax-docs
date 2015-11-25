---
title: Telerik.Web.UI.RadWindowManager
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.RadWindowManager
---

# Telerik.Web.UI.RadWindowManager : Telerik.Web.UI.RadWindow

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWindow]({%slug Telerik.Web.UI.RadWindow%})
* *[Telerik.Web.UI.RadWindowManager]({%slug Telerik.Web.UI.RadWindowManager%})*

## Methods

### removeShortcut

Removes shortcut for the command

#### Parameters

##### shortcutCommand `String`

shortcutCommand

#### Returns

`None` 

### tile

Tiles the window objects

#### Parameters

#### Returns

`None` 

### cascade

Cascades the window objects

#### Parameters

#### Returns

`None` 

### restoreAll

Restores all windows

#### Parameters

#### Returns

`None` 

### open

Opens a new or existing window. Can be used to change the URL of existing window as well. If an external page is loaded, do not provide content element. Otherwise, do not provide url. If both are provided, the url has priority

#### Parameters

##### url `String`

##### wndName `String`

##### contentElement `String`

#### Returns

`Telerik.Web.UI.RadWindow` The RadWindow instance

### radalert

Displays a RadAlert dialog with the specified content.

#### Parameters

##### text `String`

Content to show in the RadAlert dialog.

##### oWidth? `Number`

Width of the RadAlert dialog.

##### oHeight? `Number`

Height of the RadAlert dialog.

##### oTitle? `String`

Title of the RadAlert dialog.

##### callbackFn? `Function`

Callback function that will be called after closing the dialog.

##### imgUrl? `String`

The URL to replace the image for the RadAlert dialog.

#### Returns

`Telerik.Web.UI.RadWindow` The RadWindow instance

### minimizeAll

Minimizes all windows

#### Parameters

#### Returns

`None` 

### clearCloneCache

Clears cached properties of the manager. This property should be used when a setting of the manager is changed on the client and the change should be applied to new dynamically created windows.

#### Parameters

#### Returns

`None` 

### isShortcutAdded

Returns a boolean value indicating whether a shortcut for this command exists

#### Parameters

##### shortcutCommand `String`

shortcutCommand

#### Returns

`Boolean` 

### restoreActiveWindow

Restores the active window

#### Parameters

#### Returns

`None` 

### radprompt

Displays a RadPrompt dialog with the specified content.

#### Parameters

##### text `String`

Content to show in the RadPrompt dialog.

##### callBackFn `Function`

Callback function that will be called after closing the dialog. The results of the user's action (the text inserted) can be processed here.

##### oWidth? `Number`

Width of the RadPrompt dialog.

##### oHeight? `Number`

Height of the RadPrompt dialog.

##### callerObj? `Object`

Backwards compatibility. Set to Null.

##### oTitle? `String`

Title of the RadPrompt dialog.

##### initialValue? `String`

Optional value to be shown in the textbox of the displayed RadPrompt dialog.

#### Returns

`Telerik.Web.UI.RadWindow` The RadWindow instance

### radconfirm

Displays a RadConfirm dialog with the specified content.

#### Parameters

##### text `String`

Content to show in the RadConfirm dialog.

##### callBackFn `Function`

Callback function that will be called after closing the dialog. The results of the user's action (OK or Cancel) can be processed here.

##### oWidth? `Number`

Width of the RadConfirm dialog.

##### oHeight? `Number`

Height of the RadConfirm dialog.

##### callerObj? `Object`

Backwards compatibility. Set to Null.

##### oTitle? `String`

Title of the RadConfirm dialog.

##### imgUrl? `String`

Optional image to be shown in the RadConfirm dialog.

#### Returns

`Telerik.Web.UI.RadWindow` The RadWindow instance

### closeActiveWindow

Close the active window

#### Parameters

#### Returns

`None` 

### maximizeAll

Maximizes all windows

#### Parameters

#### Returns

`None` 

### getActiveWindow

Returns a reference to the current active window

#### Parameters

#### Returns

`Telerik.Web.UI.RadWindow` 

### removeAllShortcutsCommand

Removes all shortcuts for the command

#### Parameters

##### shortcutCommand `String`

shortcutCommand

#### Returns

`None` 

### showAll

Shows all windows

#### Parameters

#### Returns

`None` 

### closeAll

Closes all windows

#### Parameters

#### Returns

`None` 

### minimizeActiveWindow

Minimizes the currently active window

#### Parameters

#### Returns

`None` 

### getShortcutString

Returns shortcut string for the command

#### Parameters

##### shortcutCommand `String`

shortcutCommand

#### Returns

`String` 

### get_windows

Returns a reference to the array of RadWindow objects managed by the RadWindowManager

#### Parameters

#### Returns

`Array` 

### getWindowById

Returns a reference to a RadWindow. The Id is the window's server-side Id property

#### Parameters

##### id `String`

#### Returns

`Telerik.Web.UI.RadWindow` 

### getWindowByName

Returns a reference to a RadWindow. The Name is the window's server-side Id property

#### Parameters

##### name `String`

#### Returns

`Telerik.Web.UI.RadWindow` 

### addShortcut

Adds a new shortcut for the command

#### Parameters

##### shortcutCommand `String`

shortcutCommand

##### shortcutString `String`

shortcutString

#### Returns

`None` 

