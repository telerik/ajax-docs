---
title: Telerik.Web.UI.RadEditor
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.RadEditor
---

# Telerik.Web.UI.RadEditor : Telerik.Web.UI.RadWebControl

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadEditor]({%slug Telerik.Web.UI.RadEditor%})*

## Methods

### get_ajaxSpellCheck

Returns the instance of the AjaxSpellCheck.

#### Parameters

#### Returns

`Telerik.Web.UI.Editor.AjaxSpellCheck`

### set_ajaxSpellCheck

Sets the AjaxSpellCheck instance to be used by the RadEditor.

#### Parameters

##### ajaxSpellCheck `Telerik.Web.UI.Editor.AjaxSpellCheck`

The instance of the AjaxSpellCheck to serve the spell checking service.

#### Returns

`None`

### get_commandsManager

Returns the CommandsManager instance used by the RadEditor.

#### Parameters

#### Returns

`Telerik.Web.UI.Editor.CommandsManager`

### get_toolAdapter

Gets a reference to the tool adapter.

#### Parameters

#### Returns

`Telerik.Web.UI.Editor.DefaultToolAdapter`

### get_modulesManager

Gets a reference to the modules manager.

#### Parameters

#### Returns

`Telerik.Web.UI.Editor.ModulesManager`

### repaint

Re-renders the editor on the client. Useful when the editor is in an invisible container that is shown dynamically.

#### Parameters

#### Returns

`None` 

### setActive

IE ONLY. Alias of setFocus

#### Parameters

#### Returns

`None` 

### selectElement

Select an element from the content area

#### Parameters

##### element `Element`

Element to be selected

##### fireEvent? `Boolean`

Specifies whether to raise the selectionChange event

#### Returns

`None` 

### get_mode

Returns the editor's  EditMode

#### Parameters

#### Returns

`Telerik.Web.UI.EditModes`

### get_textArea

Returns a reference to the RadEditor's TextArea in Html mode

#### Parameters

#### Returns

`Element` 

### get_useClassicDialogs

Returns whether RadEditor is using RadWindow windows or browser popup windows for its dialogs.

#### Parameters

#### Returns

`Boolean` 

### setShortCut

Sets a shortcut. If it does not exist in the ShortCutManager list it will be added as well

#### Parameters

##### shortcutName `String`

Name of the shortcut

##### shortcutString `String`

The key combination of the shortcut

#### Returns

`None` 

### getContextMenuByTagName

Returns a reference to the context menu object

#### Parameters

##### tagName `String`

The Tag name of the context menu

#### Returns

`Telerik.Web.UI.EditorContextMenu` Reference to the context menu object

### set_editable

Sets mode of the RadEditor's content area

#### Parameters

##### editable `Boolean`

Specifies whether to enable or disable edit-ability.

#### Returns

`None` 

### addShortCut

Adds shortcut to the RadEditor's ShortCutManager

#### Parameters

##### shortcutName `String`

Name of the shortcut

##### shortcutString `String`

The key combination of the shortcut

#### Returns

`None` 

### get_mainTable

Return a reference to the RadEditor's wrapping DOM element

#### Parameters

#### Returns

`Element`

### setNodeImmutability

Modifies a node from the content to be not editable. 

#### Parameters

##### node `Element`

The node element.

#### Returns

`None`

### removeNodeImmutability

Modifies a node from the content to be editable. 

#### Parameters

##### node `Element`

The node element.

#### Returns

`None`

### onParentNodeChanged

Re-creates the iframe content area of the RadEditor. 

#### Parameters

#### Returns

`None`

### get_TopZone

Returns the wrapper element of the toolbar.

#### Parameters

#### Returns

`Element`

### detachEventHandler

Detaches an event handler.

#### Parameters

##### eventName `String`

The name of the event to be handled

##### fnRef `Function`

The function to be removed from the eventListenerList

#### Returns

`None` 

### getToolByName

Returns a reference to a specified tool

#### Parameters

##### toolName `String`

The name of the tool

#### Returns

`Telerik.Web.UI.EditorButton` 

### isVisible

Returns Boolean value that represents if the Editor is visible on the page

#### Parameters

#### Returns

`None` 

### getToolState

Returns current state of a tool

#### Parameters

##### toolName `String`

The name of the tool

##### range `Object`

The selection range.

#### Returns

`Telerik.Web.UI.EditingOptions` The current state of the tool

### raiseEvent

Raise a RadEditor's event

#### Parameters

##### evName `String`

Name of the event to be raised

##### args `Object`

Arguments to be sent

#### Returns

`None` 

### removeShortCut

Removes a shortcut from the RadEditor's ShortCutManager

#### Parameters

##### shortcutName `String`

Name of the the shortcut

#### Returns

`None` 

### getToolValue

Returns current value of a tool.

#### Parameters

##### toolName `String`

The name of the tool.

##### range `Object`

The selection range.

#### Returns

`String`

### usesContentFilter

Returns a Boolean value indicating whether the passed filter is enabled or not.

#### Parameters

##### filterName `String`

The name of the tool.

#### Returns

`Boolean`

### fire

Executes a built-in command.

#### Parameters

##### comamndName `String`

The name of the tool.

##### args `Object`

Command arguments. You can pass either an object of type Telerik.Web.UI.EditorCommandEventArgs or one with a value field - { value: String }.

#### Returns

`None`

### pasteHtml

Pastes HTML content to the cursor position.

#### Parameters

##### content `String`

The content to be pasted

##### commandName? `String`

The name of the command using PasteHtml for Undo

##### bSelectText? `Boolean`

Specifies whether to select pasted text

##### bFireSelChanged? `Boolean`

Specifies whether to fire the selection change event

##### bAddUndo? `Boolean`

specifies whether to add the command in the Undo

#### Returns

`None` 

### undo

Fire RadEditor's Undo command

#### Parameters

##### depth `Number`

Number of commands to undo

#### Returns

`None` 

### getSelectedElement

Returns a reference to the currently selected HTML element in the editor's content area

#### Parameters

#### Returns

`Element` 

### toggleScreenMode

Toggles the full screen mode of RadEditor.

#### Parameters

#### Returns

`None` 

### validateMaxTextLength

Validates the current length of the text. Optional String parameter can be added to validate with additional text without inserting it into the content.

#### Parameters

##### text? `String`

Additional text to validate with.

#### Returns

`Boolean` 

### validateMaxHtmlLength

Validates the current length of the HTML content. Optional String parameter can be added to validate with additional content without inserting it into the HTML.

#### Parameters

##### html? `String`

Additional HTML to validate with.

#### Returns

`Boolean` 

### displayMaxHtmlLengthErrorMessage

Shows the alert to inform the user about reaching the limit of the MaxHtmlLength.

#### Parameters

#### Returns

`None` 

### displayMaxTextLengthErrorMessage

Shows the alert to inform the user about reaching the limit of the MaxTextLength.

#### Parameters

#### Returns

`None` 

### getSelectionHtml

Returns the selected HTML.

#### Parameters

#### Returns

`String` 

### getEditorSelectionRange

Returns the current selection range.

#### Parameters

#### Returns

`Object` 

### showExternalDialog

Open a dialog, placed in an external page.

#### Parameters

##### url `String`

The URL of the ASPX page to open. 

##### argument `Object`

The client parameters to be passed to the dialog. Optional. 

##### width `Number`

The width of the RadWindow dialog. Required. 

##### height `Number`

The height of the RadWindow dialog. Required. 

##### callbackFunction `Function`

The function to be executed when the dialog is closed. The function syntax is myFunction

##### callbackArgs `Object`

The additional parameters to be passed to the callbackFunction when it is executed. Optional. 

##### title `String`

The text in the RadWindow title bar. Optional. 

##### modal `String`

Specifies whether RadWindow should be modal or not. The default is true. Optional. 

##### behaviors `Telerik.Web.UI.WindowBehaviors`

The WindowBehaviors to be enabled for the dialog.

##### showStatusbar `Boolean`

Specifies whether RadWindow displays its statusbar or not. The default is true. Optional. 

##### showTitlebar `Boolean`

Specifies whether RadWindow displays its titlebar or not. The default is true. Optional. 

#### Returns

`None` 

### enableEditing

Ability to programmatically disable/enable editing in editor while retaining its looks

#### Parameters

##### enable `Boolean`

Specifies whether enable or disable editing

##### editingOptions `Telerik.Web.UI.EditingOptions`

Which editing options to enable

##### optionalIgnoredTools `Array`

Array of tool names to enable

#### Returns

`None` 

### showDialog

Open a light dialog.

#### Parameters

##### dialogName `String`

The name of the dialog to be opened. 

##### argument `Object`

The client parameters to be passed to the dialog 

##### callbackFunction `Function`

The function to be executed when the dialog is closed. The function syntax is myFunction

#### Returns

`None` 

### get_contentAreaElement

Returns a reference to the RadEditor's content area element.

#### Parameters

#### Returns

`Element` 

### getCssArray

Returns a collection of class names existing in the CSS files added to the Iframe's content area.

#### Parameters

#### Returns

`Array` 

### get_shortCutManager

Returns a reference to the ShortCutManager instance.

#### Parameters

#### Returns

`Telerik.Web.UI.EditorShortCutManager` 

### get_text

Returns the editor content as plain text (strips down the tags).

#### Parameters

##### options `Object`

Options for the strip behavior. Example: { trimText: true, removeMultipleSpaces: true }.

#### Returns

`String` 

### setFocus

Sets the focus on RadEditor

#### Parameters

#### Returns

`None` 

### set_html

Replaces the current content with a new one.

#### Parameters

##### content `String`

The HTML content to be inserted.

##### title? `String`

The command's title shown in the Undo stack.

##### setFocus? `Boolean`

Specifies whether setFocus to be fired after the command execution

##### raiseSelChanged? `Boolean`

Indicates whether to raise selectioChange event.

#### Returns

`None` 

### get_html

Returns the editor content as HTML

#### Parameters

##### isFiltered? `Boolean`

Indicates whether the content to be returned after processing it with the content filters or not. 

##### removeComments? `Telerik.Web.UI.EditorStripHtmlOptions`

Indicates whether the content to be returned without inserted comments. 

#### Returns

`String`

### set_useClassicDialogs

Specifies whether RadEditor will use RadWindow instances or browser's windows to open dialogs. If the parameter is set to true the editor will use the browser windows.

#### Parameters

##### value `Boolean`

Indicates whether to enable or disable.

#### Returns

`None` 

### get_qualifiedSkin

Returns the qualified name of the skin.
#### Parameters

#### Returns

`String` 

### get_contentArea

Returns a reference to the RadEditor's content area's body element

#### Parameters

#### Returns

`Object` 

### createRestorePoint

You can store and restore the exact position of the cursor using createRestorePoint and select method. Use getSelection().getRange()instead of the obsolete createRestorePoint()

#### Parameters

#### Returns

`None` 

### get_document

Returns a reference to the RadEditor's content area's document object

#### Parameters

#### Returns

`Object` 

### get_toolContainer

Returns a reference to the Toolbar container DOM element

#### Parameters

#### Returns

`Element` 

### redo

Fire RadEditor's Redo command

#### Parameters

##### depth `Number`

Number of commands to redo

#### Returns

`None` 

### executeCommand

Executes a RadEditor command.

#### Parameters

##### radCommand `String`

The command name.

##### setFocus `Boolean`

Specifies whether to focus the content area or not.

##### addToStack `Boolean`

Specifies whether to add the command in the undo/redo stack.

#### Returns

`None` 

### createElement

Creates DOM element and return reference to it

#### Parameters

##### tagName `String`

Element

##### styleWidth `String`

Width of the element

##### styleHeight `String`

Height of the element

##### sId `String`

ID of the element

##### sName `String`

Name of the element

##### sValue `String`

Value of the element

#### Returns

`Element` 

### addCustomWord

Adds a custom word to the collection.

#### Parameters

##### word `String`

The custom word to be added.

#### Returns

`None` 

### get_toolHTML

Returns the inner HTML of the ToolContainer as string.

#### Parameters

#### Returns

`String` 

### startSpellCheck

Causes the editor to start the spell checker.

#### Parameters

#### Returns

`None` 

### saveContent

Force RadEditor to save current content

#### Parameters

#### Returns

`None` 

### disableContentAreaStylesheet

Toggles the state if the content area's CSS file. 

#### Parameters

##### toEnable? `Boolean`

Indicates whether to disable or enable the style sheet (NOTE: If argument is not available, the state will be switched).

#### Returns

`None` 

### pasteHyperLink

Inserts a link element in the editor content. 

#### Parameters

##### linkElmenet `Element`

The DOM element of the link.

##### commandName `String`

The command name fired the method.

#### Returns

`None` 

### get_localization

Returns an associative array of RadEditor's localization

#### Parameters

#### Returns

`Object` 

### get_dialogOpener

Returns teh instance to the RadDialogOpener.

#### Parameters

#### Returns

`Telerik.Web.UI.RadDialogOpener` 

### get_editable

Returns whether the RadEditor's content area is editable or not

#### Parameters

#### Returns

`Boolean` 

### set_visible

Sets the RadEditor visible on the client

#### Parameters

##### toShow `Boolean`

Indicates whether to be visible or not.

#### Returns

`None` 

### getSelection

Returns a reference to the current RadEditorSelection object

#### Parameters

#### Returns

`Telerik.Web.UI.Editor.Selection` 

### setSize

Sets the width and height of the RadEditor (in pixels)

#### Parameters

##### width `Number`

Width to be set 

##### height `Number`

Height to be set 

#### Returns

`None` 

### get_filtersManager

Returns a reference to RadEditor's filters manager

#### Parameters

#### Returns

`Telerik.Web.UI.Editor.FiltersManager` 

### attachEventHandler

Attaches an event to RadEditor

#### Parameters

##### eventName `String`

The name of the event to be handled

##### fnRef `Function`

The function to be registered to the event

#### Returns

`None` 

### get_spellCheckService

Returns a reference to the used SpellCheckService

#### Parameters

#### Returns

`Telerik.Web.UI.SpellCheckService` 

### isFullScreen

Indicates whether the RadEditor is in full screen mode.

#### Parameters

#### Returns

`Boolean` 

### set_mode

Sets RadEditor in HTML, Preview or Design mode

#### Parameters

##### value `Telerik.Web.UI.EditModes`

The mode to be switched on.

#### Returns

`None` 

### get_enableImmutableElements

Returns a Boolean value that indicates whether immutability is enabled or not.

#### Parameters

#### Returns

`Boolean` 

### set_enableImmutableElements

Sets a Boolean value that indicates whether immutability to be enabled or not.

#### Parameters

##### value `Boolean`

Indicates whether to be enabled or disabled.

#### Returns

`None` 

### get_language

Returns current language

#### Parameters

#### Returns

`String` 

### zoomContent

Zooms the RadEditor content similar to the Zoom command

#### Parameters

##### level `String`

The zoom level is in percents with default value of "100%". Optional.

#### Returns

### refreshContentZoom

Refreshes the zoomed content. Useful when content is resized outside the RadEditor API.

#### Parameters

#### Returns

## Events

### editReady

This event is raised when editor is ready to operate with.

#### Event Data

##### sender `Telerik.Web.UI.RadEditor`

The RadEditor instance raised the event.

##### args `Sys.EventArgs`

The event arguments. 

### commandExecuting

This event is fired just before a command is executed.

#### Event Data

##### sender `Telerik.Web.UI.RadEditor`

The RadEditor instance raised the event.

##### args `Telerik.Web.UI.EditorCommandEventArgs`

The event arguments.  

### toggleScreenMode

This event is fired when a user has toggled the Full Screen Mode of the RadEditor.

#### Event Data

##### sender `Telerik.Web.UI.RadEditor`

The RadEditor instance raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### submit

This event is fired just before the content is submitted to the server. 

#### Event Data

##### sender `Telerik.Web.UI.RadEditor`

The RadEditor instance raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### init

This event is fired before the initialization of the editor's content area.

#### Event Data

##### sender `Telerik.Web.UI.RadEditor`

The RadEditor instance raised the event.

##### args `Sys.EventArgs`

The event arguments. 

### load

This event is fired after the content is set in the content area, after the init event and just before the editReady. 

#### Event Data

##### sender `Telerik.Web.UI.RadEditor`

The RadEditor instance raised the event.

##### args `Sys.EventArgs`

The event arguments. 

### modeChange

This event is fired before the mode is changed.

#### Event Data

##### sender `Telerik.Web.UI.RadEditor`

The RadEditor instance raised the event.

##### args `Sys.EventArgs`

The event arguments. 

### domChange

This event is fired after a command that modified the DOM is executed.

#### Event Data

##### sender `Telerik.Web.UI.RadEditor`

The RadEditor instance raised the event.

##### args `Telerik.Web.UI.EditorCommandEventArgs`

The event arguments.  

### selectionChange

This event is raised when the selection in the content area is changed.

#### Event Data

##### sender `Telerik.Web.UI.RadEditor`

The RadEditor instance raised the event.

##### args `Sys.EventArgs`

The event arguments. 

### firstShow

This event is raised when the Editor is rendered on the page for first time.

#### Event Data

##### sender `Telerik.Web.UI.RadEditor`

The RadEditor instance raised the event.

##### args `Sys.EventArgs`

The event arguments. . 

### commandExecuted

This event is fired after a command is executed.

#### Event Data

##### sender `Telerik.Web.UI.RadEditor`

The RadEditor instance raised the event.

##### args `Telerik.Web.UI.EditorCommandEventArgs`

The event arguments.  

### spellCheckLoaded

This event is raise when the spell check is started. 

#### Event Data

##### sender `Telerik.Web.UI.RadEditor`

The RadEditor instance raised the event.

##### args `Telerik.Web.UI.EditorCommandEventArgs`

The event arguments.  

### pasteHtml

This event is raised when content is inserted either via pasting or via command. 

#### Event Data

##### sender `Telerik.Web.UI.RadEditor`

The RadEditor instance raised the event.

##### args `Telerik.Web.UI.EditorCommandEventArgs`

The event arguments.  

### inlineEditCompleted

This event is fired when user has clicked outside an editor in Inline Edit mode.

#### Event Data

##### sender `Telerik.Web.UI.RadEditor`

The RadEditor instance raised the event.

##### args `Telerik.Web.UI.EditorCommandEventArgs`

The event arguments.