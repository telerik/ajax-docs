---
title: RadEditor Object
page_title: RadEditor Object | RadEditor for ASP.NET AJAX Documentation
description: RadEditor Object
slug: editor/client-side-programming/radeditor-object
tags: radeditor,object
published: True
position: 3
---

# RadEditor Object

The RadEditor object exposes the following public methods and properties to control its behavior:

>caption RadEditor Client-Side Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|addCustomWord|`String`||Adds a custom word to the collection.The method takes the following arguments: **word** - The custom word to be added.|
|addShortCut|`String`, `String`||Adds shortcut to the RadEditor's ShortCutManagerThe method takes the following arguments: **shortcutName** - Name of the shortcut **shortcutString** - The key combination of the shortcut|
|[attachEventHandler]({%slug editor/client-side-programming/methods/attacheventhandler%})|`String`, `Function`||Attaches an event to RadEditorThe method takes the following arguments: **eventName** - The name of the event to be handled **fnRef** - The function to be registered to the event|
|createElement|`String`, `String`, `String`, `String`, `String`, `String`|Element|Creates DOM element and return reference to itThe method takes the following arguments: **tagName** - Element **styleWidth** - Width of the element **styleHeight** - Height of the element **sId** - ID of the element **sName** - Name of the element **sValue** - Value of the element|
|createRestorePoint|||You can store and restore the exact position of the cursor using createRestorePoint and select method. Use getSelection().getRange()instead of the obsolete createRestorePoint()|
|[detachEventHandler]({%slug editor/client-side-programming/methods/detacheventhandler%})|`String`, `Function`||Detaches an event handler.The method takes the following arguments: **eventName** - The name of the event to be handled **fnRef** - The function to be removed from the eventListenerList|
|disableContentAreaStylesheet|`Boolean`||Toggles the state if the content area's CSS file.The method takes the following arguments: **toEnable?** - Indicates whether to disable or enable the style sheet (NOTE: If argument is not available, the state will be switched).|
|displayMaxHtmlLengthErrorMessage|||Shows the alert to inform the user about reaching the limit of the MaxHtmlLength.|
|displayMaxTextLengthErrorMessage|||Shows the alert to inform the user about reaching the limit of the MaxTextLength.|
|enableEditing|`Boolean`, `Telerik.Web.UI.EditingOptions`, `Array`||Ability to programmatically disable/enable editing in editor while retaining its looksThe method takes the following arguments: **enable** - Specifies whether enable or disable editing **editingOptions** - Which editing options to enable **optionalIgnoredTools** - Array of tool names to enable|
|executeCommand|`String`, `Boolean`, `Boolean`||Executes a RadEditor command.The method takes the following arguments: **radCommand** - The command name. **setFocus** - Specifies whether to focus the content area or not. **addToStack** - Specifies whether to add the command in the undo/redo stack.|
|[fire]({%slug editor/client-side-programming/methods/fire%})|`String`, `Object`||Executes a built-in command.The method takes the following arguments: **comamndName** - The name of the tool. **args** - Command arguments. You can pass either an object of type Telerik.Web.UI.EditorCommandEventArgs or one with a value field - { value: String }.|
|get_ajaxSpellCheck||Telerik.Web.UI.Editor.AjaxSpellCheck|Returns the instance of the AjaxSpellCheck.|
|get_commandsManager||Telerik.Web.UI.Editor.CommandsManager|Returns the CommandsManager instance used by the RadEditor.|
|[get_contentArea]({%slug editor/client-side-programming/methods/get_contentarea%})||Object|Returns a reference to the RadEditor's content area's body element|
|get_contentAreaElement||Element|Returns a reference to the RadEditor's content area element.|
|get_dialogOpener||Telerik.Web.UI.RadDialogOpener|Returns teh instance to the RadDialogOpener.|
|[get_document]({%slug editor/client-side-programming/getting-a-reference-to-the-radeditor-document-object%})||Object|Returns a reference to the RadEditor's content area's document object|
|get_editable||Boolean|Returns whether the RadEditor's content area is editable or not|
|get_enableImmutableElements||Boolean|Returns a Boolean value that indicates whether immutability is enabled or not.|
|get_filtersManager||Telerik.Web.UI.Editor.FiltersManager|Returns a reference to RadEditor's filters manager|
|[get_html]({%slug editor/client-side-programming/methods/get_html%})|`Boolean`, `Telerik.Web.UI.EditorStripHtmlOptions`|String|Returns the editor content as HTMLThe method takes the following arguments: **isFiltered?** - Indicates whether the content to be returned after processing it with the content filters or not. **removeComments?** - Indicates whether the content to be returned without inserted comments.|
|get_language||String|Returns current language|
|get_localization||Object|Returns an associative array of RadEditor's localization|
|get_mainTable||Element|Return a reference to the RadEditor's wrapping DOM element|
|[get_mode]({%slug editor/client-side-programming/methods/get_mode%})||Telerik.Web.UI.EditModes|Returns the editor'sEditMode|
|get_modulesManager||Telerik.Web.UI.Editor.ModulesManager|Gets a reference to the modules manager.|
|get_qualifiedSkin||String|Returns the qualified name of the skin.|
|get_shortCutManager||Telerik.Web.UI.EditorShortCutManager|Returns a reference to the ShortCutManager instance.|
|get_spellCheckService||Telerik.Web.UI.SpellCheckService|Returns a reference to the used SpellCheckService|
|[get_text]({%slug editor/client-side-programming/methods/get_text%})|`Object`|String|Returns the editor content as plain text (strips down the tags).As of **Q1 2015** , optionally,you can configure how the text to be stripped via the *options* parameter. **options** - Options for the strip behavior. Example:`{ trimText: true, removeMultipleSpaces: true }`. *trimText* - Removes all leading and trailing white-space characters; *removeMultipleSpaces* - Merges all white-space characters.|
|get_textArea||Element|Returns a reference to the RadEditor's TextArea in Html mode|
|get_toolAdapter||Telerik.Web.UI.Editor.DefaultToolAdapter|Gets a reference to the tool adapter.|
|get_toolContainer||Element|Returns a reference to the Toolbar container DOM element|
|get_toolHTML||String|Returns the inner HTML of the ToolContainer as string.|
|get_TopZone||Element|Returns the wrapper element of the toolbar.|
|get_useClassicDialogs||Boolean|Returns whether RadEditor is using RadWindow windows or browser popup windows for its dialogs.|
|getContextMenuByTagName|`String`|Telerik.Web.UI.EditorContextMenu|Returns a reference to the context menu objectThe method takes the following arguments: **tagName** - The Tag name of the context menu|
|getCssArray||Array|Returns a collection of class names existing in the CSS files added to the Iframe's content area.|
|getEditorSelectionRange||Object|Returns the current selection range.|
|getHeaderToolByName|`String`|Telerik.Web.UI.EditorButton|Returns a reference to a specified header tool. The method takes the following arguments: **toolName** - The name of the tool|
|[getSelectedElement]({%slug editor/client-side-programming/methods/selection/getselectedelement%})||Element|Returns a reference to the currently selected HTML element in the editor's content area|
|[getSelection]({%slug editor/client-side-programming/methods/getselection%})||Telerik.Web.UI.Editor.Selection|Returns a reference to the current RadEditorSelection object|
|[getSelectionHtml]({%slug editor/client-side-programming/methods/getselectionhtml%})||String|Returns the selected HTML.|
|[getToolByName]({%slug editor/client-side-programming/methods/gettoolbyname%})|`String`|Telerik.Web.UI.EditorButton|Returns a reference to a specified tool. The method takes the following arguments: **toolName** - The name of the tool|
|getToolState|`String`, `Object`|Telerik.Web.UI.EditingOptions|Returns current state of a toolThe method takes the following arguments: **toolName** - The name of the tool **range** - The selection range.|
|getToolValue|`String`, `Object`|String|Returns current value of a tool.The method takes the following arguments: **toolName** - The name of the tool. **range** - The selection range.|
|isFullScreen||Boolean|Indicates whether the RadEditor is in full screen mode.|
|isVisible|||Returns Boolean value that represents if the Editor is visible on the page|
|onParentNodeChanged|||Re-creates the iframe content area of the RadEditor.|
|[pasteHtml]({%slug editor/client-side-programming/methods/pastehtml%})|`String`, `String`, `Boolean`, `Boolean`, `Boolean`||Pastes HTML content to the cursor position.The method takes the following arguments: **content** - The content to be pasted **commandName?** - The name of the command using PasteHtml for Undo **bSelectText?** - Specifies whether to select pasted text **bFireSelChanged?** - Specifies whether to fire the selection change event **bAddUndo?** - specifies whether to add the command in the Undo|
|pasteHyperLink|`Element`, `String`||Inserts a link element in the editor content.The method takes the following arguments: **linkElmenet** - The DOM element of the link. **commandName** - The command name fired the method.|
|raiseEvent|`String`, `Object`||Raise a RadEditor's eventThe method takes the following arguments: **evName** - Name of the event to be raised **args** - Arguments to be sent|
|redo|`Number`||Fire RadEditor's Redo commandThe method takes the following arguments: **depth** - Number of commands to redo|
|removeNodeImmutability|`Element`||Modifies a node from the content to be editable.The method takes the following arguments: **node** - The node element.|
|removeShortCut|`String`||Removes a shortcut from the RadEditor's ShortCutManagerThe method takes the following arguments: **shortcutName** - Name of the the shortcut|
|repaint|||Re-renders the editor on the client. Useful when the editor is in an invisible container that is shown dynamically.|
|saveContent|||Force RadEditor to save current content|
|selectElement|`Element`, `Boolean`||Select an element from the content areaThe method takes the following arguments: **element** - Element to be selected **fireEvent?** - Specifies whether to raise the selectionChange event|
|set_ajaxSpellCheck|`Telerik.Web.UI.Editor.AjaxSpellCheck`||Sets the AjaxSpellCheck instance to be used by the RadEditor.The method takes the following arguments: **ajaxSpellCheck** - The instance of the AjaxSpellCheck to serve the spell checking service.|
|set_editable|`Boolean`||Sets mode of the RadEditor's content areaThe method takes the following arguments: **editable** - Specifies whether to enable or disable edit-ability.|
|set_enableImmutableElements|`Boolean`||Sets a Boolean value that indicates whether immutability to be enabled or not.The method takes the following arguments: **value** - Indicates whether to be enabled or disabled.|
|[set_html]({%slug editor/client-side-programming/methods/set_html%})|`String`, `String`, `Boolean`, `Boolean`||Replaces the current content with a new one.The method takes the following arguments: **content** - The HTML content to be inserted. **title?** - The command's title shown in the Undo stack. **setFocus?** - Specifies whether setFocus to be fired after the command execution **raiseSelChanged?** - Indicates whether to raise selectioChange event.|
|[set_mode]({%slug editor/client-side-programming/methods/set_mode%})|`Telerik.Web.UI.EditModes`||Sets RadEditor in HTML, Preview or Design modeThe method takes the following arguments: **value** - The mode to be switched on.|
|set_useClassicDialogs|`Boolean`||Specifies whether RadEditor will use RadWindow instances or browser's windows to open dialogs. If the parameter is set to true the editor will use the browser windows.The method takes the following arguments: **value** - Indicates whether to enable or disable.|
|[set_visible]({%slug editor/client-side-programming/methods/set_visible%})|`Boolean`||Sets the RadEditor visible on the clientThe method takes the following arguments: **toShow** - Indicates whether to be visible or not.|
|setActive|||IE ONLY. Alias of setFocus|
|[setFocus]({%slug editor/client-side-programming/methods/setfocus%})|||Sets the focus on RadEditor|
|setNodeImmutability|`Element`||Modifies a node from the content to be not editable.The method takes the following arguments: **node** - some description|
|setShortCut|`String`, `String`||Sets a shortcut. If it does not exist in the ShortCutManager list it will be added as wellThe method takes the following arguments: **shortcutName** - Name of the shortcut **shortcutString** - The key combination of the shortcut|
|[setSize]({%slug editor/client-side-programming/methods/setsize%})|`Number`, `Number`||Sets the width and height of the RadEditor (in pixels)The method takes the following arguments: **width** - Width to be set **height** - Height to be set|
|[showDialog]({%slug editor/client-side-programming/methods/showdialog%})|`String`, `Object`, `Function`||Open a light dialog.The method takes the following arguments: **dialogName** - The name of the dialog to be opened. **argument** - The client parameters to be passed to the dialog **callbackFunction** - The function to be executed when the dialog is closed. The function syntax is myFunction|
|showExternalDialog|`String`, `Object`, `Number`, `Number`, `Function`, `Object`, `String`, `String`, `Telerik.Web.UI.WindowBehaviors`, `Boolean`, `Boolean`||Open a dialog, placed in an external page.The method takes the following arguments: **url** - The URL of the ASPX page to open. **argument** - The client parameters to be passed to the dialog. Optional. **width** - The width of the RadWindow dialog. Required. **height** - The height of the RadWindow dialog. Required. **callbackFunction** - The function to be executed when the dialog is closed. The function syntax is myFunction **callbackArgs** - The additional parameters to be passed to the callbackFunction when it is executed. Optional. **title** - The text in the RadWindow title bar. Optional. **modal** - Specifies whether RadWindow should be modal or not. The default is true. Optional. **behaviors** - The WindowBehaviors to be enabled for the dialog. **showStatusbar** - Specifies whether RadWindow displays its statusbar or not. The default is true. Optional. **showTitlebar** - Specifies whether RadWindow displays its titlebar or not. The default is true. Optional.|
|startSpellCheck|||Causes the editor to start the spell checker.|
|toggleScreenMode|||Toggles the full screen mode of RadEditor.|
|undo|`Number`||Fire RadEditor's Undo commandThe method takes the following arguments: **depth** - Number of commands to undo|
|usesContentFilter|`String`|Boolean|Returns a Boolean value indicating whether the passed filter is enabled or not.The method takes the following arguments: **filterName** - The name of the tool.|
|validateMaxHtmlLength|`String`|Boolean|Validates the current length of the HTML content. Optional String parameter can be added to validate with additional content without inserting it into the HTML.The method takes the following arguments: **html?** - Additional HTML to validate with.|
|validateMaxTextLength|`String`|Boolean|Validates the current length of the text. Optional String parameter can be added to validate with additional text without inserting it into the content.The method takes the following arguments: **text?** - Additional text to validate with.|


>caption RadEditor Client-Side Methods for attaching/detaching client-side event handlers


| Name | Arguments | Description |
| ------ | ------ | ------ |
|add_commandExecuted|Function|Adds a handler for the commandExecuted RadEditor client event.|
|add_commandExecuting|Function|Adds a handler for the commandExecuting RadEditor client event.|
|add_domChange|Function|Adds a handler for the domChange RadEditor client event.|
|add_editReady|Function|Adds a handler for the editReady RadEditor client event.|
|add_firstShow|Function|Adds a handler for the firstShow RadEditor client event.|
|add_init|Function|Adds a handler for the init RadEditor client event.|
|add_inlineEditCompleted|Function|Adds a handler for the inlineEditCompleted RadEditor client event.|
|add_load|Function|Adds a handler for the load RadEditor client event.|
|add_modeChange|Function|Adds a handler for the modeChange RadEditor client event.|
|add_pasteHtml|Function|Adds a handler for the pasteHtml RadEditor client event.|
|add_selectionChange|Function|Adds a handler for the selectionChange RadEditor client event.|
|add_spellCheckLoaded|Function|Adds a handler for the spellCheckLoaded RadEditor client event.|
|add_submit|Function|Adds a handler for the submit RadEditor client event.|
|add_toggleScreenMode|Function|Adds a handler for the toggleScreenMode RadEditor client event.|
|remove_commandExecuted|Function|Removes a handler for the commandExecuted RadEditor client event.|
|remove_commandExecuting|Function|Removes a handler for the commandExecuting RadEditor client event.|
|remove_domChange|Function|Removes a handler for the domChange RadEditor client event.|
|remove_editReady|Function|Removes a handler for the editReady RadEditor client event.|
|remove_firstShow|Function|Removes a handler for the firstShow RadEditor client event.|
|remove_init|Function|Removes a handler for the init RadEditor client event.|
|remove_inlineEditCompleted|Function|Removes a handler for the inlineEditCompleted RadEditor client event.|
|remove_load|Function|Removes a handler for the load RadEditor client event.|
|remove_modeChange|Function|Removes a handler for the modeChange RadEditor client event.|
|remove_pasteHtml|Function|Removes a handler for the pasteHtml RadEditor client event.|
|remove_selectionChange|Function|Removes a handler for the selectionChange RadEditor client event.|
|remove_spellCheckLoaded|Function|Removes a handler for the spellCheckLoaded RadEditor client event.|
|remove_submit|Function|Removes a handler for the submit RadEditor client event.|
|remove_toggleScreenMode|Function|Removes a handler for the toggleScreenMode RadEditor client event.|
