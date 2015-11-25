---
title: Telerik.Web.UI.RadEditor
page_title: Telerik.Web.UI.RadEditor
description: Telerik.Web.UI.RadEditor
---

# Telerik.Web.UI.RadEditor

Telerik RadEditor

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadEditor : IEditableTextControl, INamingContainer, ITextControl

## Properties

###  TagKey `HtmlTextWriterTag`

Gets the  value that corresponds to this Web server control. This property is used primarily by control developers.

###  CssClassFormatString `String`

###  SupportsRenderingMode `Boolean`

###  ExportSettings `EditorExportSettings`

Gets a reference to the  object that
                    allows you to set the export file properties

#### Remarks
Use the ExportSettings property to control the export file settings 
                This property is read-only;
                however, you can set the properties of the EditorExportSettings object it returns.
                The properties can be set declaratively using one of the following methods:Place an attribute in the opening tag of the Telerik RadEditor
                    control in the form Property-Subproperty, where Subproperty is a property of
                    the EditorExportSettings object (for example,
                    ExportSettings-FileName).Nest a <ExportSettings> element between the opening and closing
                    tags of the Telerik RadEditor control.The properties can also be set programmatically in the form
                Property.Subproperty (for example, ExportSettings.FileName).

###  ImportSettings `EditorImportSettings`

Gets a reference to the  object that
                    allows you to set the import Rtf/Docx properties

#### Remarks
Use the ImportSettings property to control the import settings 
                This property is read-only;
                however, you can set the properties of the EditorImportSettings object it returns.
                The properties can be set declaratively using one of the following methods:Place an attribute in the opening tag of the Telerik RadEditor
                    control in the form Property-Subproperty, where Subproperty is a property of
                    the EditorImportSettings object (for example,
                    ImportSettings Rtf-ImagesMode="External").Nest a <ImportSettings> element between the opening and closing
                    tags of the Telerik RadEditor control.The properties can also be set programmatically in the form
                Property.Subproperty (for example, ImportSettings.Rtf.ImagesMode).

###  IsInAccessibleMode `Boolean`

Gets a value indicating whether the editor is being rendered in accessible mode

#### Remarks
This propery has no setter. If you wish to enable the accessible editor interface, use the AccessibleRadEditor control instead.

###  ToolProviderID `String`

Gets or sets a string containing the ID (will search for both server or client ID) of a client object that should be used as a tool provider.

#### Remarks
This property helps significantly reduce the HTML markup and JSON sent from server to the
                client when multiple RadEditor objects with the same tools are used on the same page.
            	The ToolProviderID can be set to the ID of another RadEditor, or to a custom
                control that implements two clientside methods get_toolHTML and get_toolJSON.

###  CssFiles `EditorCssFileCollection`

Gets a reference to a  that can be used to add external CSS files in the editor content area.

#### Remarks
By default, RadEditor uses the CSS classes available in the current page.
                However, it can be configured to load external CSS files instead. This scenario is
                very common for editors integrated in back-end administration areas, which have one
                set of CSS classes, while the content is being saved in a database and displayed on
                the public area, which has a different set of CSS classes.If this property is set the RadEditor loads only the styles
                defined in the CssFiles collection. The styles defined in the current page are not loaded in
                the editor content area and the "Apply Class" dropdown.
                    If you want to load only a subset of the defined classes you can use the
                    CssClasses property.

###  Modules `EditorModuleCollection`

Gets the list of modules that should be made included in RadEditor.

###  Colors `EditorColorCollection`

Gets the collection containing the colors to put in the Foreground and Background color dropdowns.

#### Remarks
The contents of this collection will override the default colors available in
                the Foreground and Background color dropdowns. In order to extend the default set
                you should add the default colors and the new colors.Note: Setting this property will affect all color pickers of
                the RadEditor, including those in the table proprties dialogs.

###  Symbols `EditorSymbolCollection`

Gets the collection containing the symbols to put in the Symbols dropdown.

#### Remarks
The contents of this collection will override the default symbols available
                in the Symbols dropdown.Note: multiple symbols can be added at once by using the
                SymbolCollection.Add() method.

###  Links `EditorLinkCollection`

Gets the collection containing the links to put in the Custom Links dropdown.

#### Remarks
The Custom Links dropdown of the RadEditor is a very convenient tool for
                inserting predefined hyperlinks.Note: the links can be organized in a tree like
                structure.

###  FontSizes `EditorFontSizeCollection`

Gets the collection containing the custom font sizes to put in the [Size] dropdown.

#### Remarks
The contents of this collection will override the default font sizes
                available in the [Size] dropdown. In order to extend the default set you should add
                the default font sizes and the new font sizes. The default font sizes are: 1, 2, 3,
                4, 5, 6 and 7.Note: the minimum font size is 1, the maximum is 7.

###  FontNames `EditorFontCollection`

Gets the collection containing the custom font names to put in the Font dropdown.

#### Remarks
The contents of this collection will override the default fonts available in
                the Font dropdown. In order to extend the default set you should add the default
                font names and the new font names. The default font names are: Arial, Comic Sans
                MS, Courier New, Tahoma, Times New Roman, Verdana.Note: the fonts must exist on the client computer.

###  Paragraphs `EditorParagraphCollection`

Gets the collection containing the paragraph styles to put in the Paragraph Style
            dropdown.

#### Remarks
The contents of this collection will override the default paragraph styles
                available in the Paragraph Style dropdown.Note: RadEditor also supports block format with css class
                set. See the example below.

###  FormatSets `EditorFormatSetCollection`

Gets the collection containing the format sets to put in the FormatSets dropdown.

#### Remarks
The contents of this collection will override the default format sets available in the FormatSets dropdown.

###  RealFontSizes `EditorFontSizeCollection`

Gets the collection containing the custom real font sizes to put in the RealFontSize dropdown.

#### Remarks
The contents of this collection will override the default real font sizes available in
                the RealFontSize dropdown.

###  CssClasses `EditorCssClassCollection`

Gets the collection containing the CSS classes to put in the [Apply CSS Class] dropdown.

#### Remarks
The contents of this collection will override the default CSS classes
                available in the Apply CSS Class dropdown.

###  Snippets `EditorSnippetCollection`

Gets the collection containing the snippets to put in the Code Snippet
            dropdown.

#### Remarks
The Code Snippet dropdown is a very convenient tool for inserting predefined
                chunks of HTML content like signatures, product description templates, custom
                tables, etc.The contents of this collection will override the default snippets available
                in the Code Snippet dropdown.

###  Languages `SpellCheckerLanguageCollection`

Gets the collection containing the available languages for spellchecking.

#### Remarks
RadEditor has integrated support for the multi-language mode of RadSpell. When
            working with content in different languages you can select the proper spellchecking
            dictionary from a dropdown button on the RadEditor toolbar.

###  Tools `EditorToolGroupCollection`

Gets the collection containing RadEditor tools.

###  HeaderTools `EditorToolGroupCollection`

Gets the collection containing RadEditor HeaderTools.

###  ToolsFile `EditorToolGroupCollection`

Gets or sets a string containing the path to the XML toolbar configuration file.

#### Remarks
This property is provided for backwards compatibility. Please, use either 
            	inline toolbar declaration or code-behind to configure the toolbars. To configure 
            	multiple RadEditor controls with the same settings you could use either Theme, 
            	UserControl with inline declaration, or CustomControl.
            	Use "~" (tilde) as a substitution of the web-application's root
            	directory.You can also provide this property with an absolute URL which returns a valid XML
            	toolbar configuration file, e.g. http://MyServer/MyApplication/Tools/MyToolsFile.aspx

###  Language `String`

Gets or sets a string containing the localization language for the RadEditor UI

###  ContentAreaCssFile `String`

Gets or sets a string, containing the location of the content area CSS styles. 
            You need to set this property only if you are using a custom skin.

###  TableLayoutCssFile `String`

Gets or sets a string, containing the location of the CSS styles for table css style layout tool in the TableProperties dialogue.

###  Localization `EditorStrings`

The Localization property specifies the strings that appear in the runtime user interface of RadEditor.

###  LocalizationPath `EditorStrings`

Gets or sets a value indicating where the editor will look for its .resx localization files.
            By default these files should be in the App_GlobalResources folder. However, if you cannot put
            the resource files in the default location or .resx files compilation is disabled for some reason 
            (e.g. in a DotNetNuke environment), this property should be set to the location of the resource files.

#### Remarks
If specified, the LocalizationPath
            property will allow you to load the editor localization files from any location in the 
            web application.

###  AllowScripts `Boolean`

Gets or sets the value indicating whether script tags will be allowed in the editor content.
            This property is now obsolete. Please use the ContentFilters property or the EnableFilter and DisableFilter methods

###  AutoResizeHeight `Boolean`

Gets or sets the value indicating whether the RadEditor will auto-resize its height to match content height

###  EnableResize `Boolean`

Gets or sets the value indicating whether the users will be able to resize the RadEditor control on the client

###  NewLineBr `Boolean`

This property is obsolete. Please, use the NewLineMode property instead.

#### Remarks
Note: this property is intended for use only in Internet Explorer.
            	The gecko-based browsers always insert <BR> tags.

###  NewLineMode `EditorNewLineModes`

Gets or sets the value indicating what element will be inserted when the [Enter] key is pressed.

###  ToolbarMode `EditorToolbarMode`

Gets or sets the value indicating how the editor toolbar will be rendered and will act on the client

#### Remarks
Several editors can simulate usage of the same toolbar if this property has the same value everywhere

###  ToolAdapter `ToolAdapter`

Gets or sets the tool adapter, which is responsible for rendering the tools in the toolbar.

###  HeaderToolsToolAdapter `EditorToolGroupCollection`

Gets or sets the tool adapter, which is responsible for rendering the header tools.

###  FindReplaceOverlay `FindReplaceMobile`

The overlay for the Find and Replace functionality in the mobile editor

###  OnClientLoad `String`

Gets or sets a value indicating the client-side event handler that is called when editor is loaded on the client.

#### Remarks
If specified, the OnClientLoadclient-side event handler is called when editor is loaded on the client.
             Two parameters are passed to the handler:sender, the RadEditor object.args.

###  OnClientInit `String`

Gets or sets a value indicating the client-side event handler that is called when editor starts to load on the client.

#### Remarks
If specified, the OnClientInitclient-side event handler is called when editor starts to load on the client.
             Two parameters are passed to the handler:sender, the RadEditor object.args.

###  OnClientPasteHtml `String`

Gets or sets a value indicating the client-side event handler that is called when a dialog is closed, but before its value returned would be pasted into the editor.

#### Remarks
If specified, the OnClientPasteHtmlclient-side event handler is called when a dialog is closed, but before its value returned would be pasted into the editor.
             Two parameters are passed to the handler:sender, the RadEditor object.args.

###  OnClientDomChange `String`

Gets or sets a value indicating the client-side event handler that is called when an editor command has been executed providing the changed Dom element.

#### Remarks
If specified, the OnClientDomChangeclient-side event handler is called when an editor command has been executed providing the changed Dom element.
             Two parameters are passed to the handler:sender, the RadEditor object.args.

###  OnClientSubmit `String`

Gets or sets a value indicating the client-side event handler that is called when the content is submitted.

#### Remarks
If specified, the OnClientPasteHtmlclient-side event handler is called when a dialog is closed, but before its value returned would be pasted into the editor.
             Two parameters are passed to the handler:sender, the RadEditor object.args.

###  OnClientModeChange `String`

Gets or sets a value indicating the client-side event handler that is called when the content is submitted.

#### Remarks
If specified, the OnClientModeChangeclient-side event handler is called when the mode of the editor is changing..
             Two parameters are passed to the handler:sender, the RadEditor object.args.

###  OnClientSelectionChange `String`

Gets or sets a value indicating the client-side event handler that is called when selection inside editor content area changes

#### Remarks
If specified, the OnClientSelectionChangeclient-side event handler is called when selection inside editor content area changes.
             Two parameters are passed to the handler:sender, the RadEditor object.args.

###  OnClientCommandExecuting `String`

Gets or sets a value indicating the client-side event handler that is called before
            an editor command starts executing.

#### Remarks
If specified, the OnClientCommandExecutingclient-side event handler is called before a command starts executing.
             Two parameters are passed to the handler:sender, the RadEditor object.args.This event can be cancelled.

###  OnClientCommandExecuted `String`

Gets or sets a value indicating the client-side event handler that is called 
            after an editor command was executed.

#### Remarks
If specified, the OnClientCommandExecutedclient-side event handler that is called 
            when after an editor command was executed. Two parameters are passed to the handler:sender, the RadEditor object.args.

###  OnClientInlineEditCompleted `String`

The event is fired when the inline editing is completed.

###  IsSkinTouch `Boolean`

Gets or sets bool value indicating if the Runtime skin is touch.

###  Height `Unit`

Gets or sets the height of the Web server control. The default height is 400 pixels.

###  Width `Unit`

Gets or sets the width of the Web server control.

###  ToolsWidth `EditorToolGroupCollection`

Gets or sets the width of the editor's toolbar (should be used when ToolbarMode != Default).

###  MaxTextLength `Int32`

Gets or sets the max length (in symbols) of the text inserted in the RadEditor. When the value is 0 the property is disabled.

###  MaxHtmlLength `Int32`

Gets or sets the max length (in symbols) of the HTML inserted in the RadEditor. When the value is 0 the property is disabled.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render links to the embedded client scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed script files by hand.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  EnableTextareaMode `Boolean`

Gets or sets the value, indicating whether to render the editor as a simple textarea (for compatibility with older browsers).

#### Remarks
If EnableTextareaMode is set to true, the editor will be replaced by a textbox where you can write its HTML. All advanced editor features will be disabled.

###  Text `String`

Gets the text content of the RadEditor control without the HTML markup.

#### Remarks
The text returned by this property contains no HTML markup. If only the HTML
                    markup in the text is needed use the Html property.
                
                    You can set the text content of the RadEditor by using the
                    Html property or inline between its opening and closing
                    tags. In this case setting the Html property in the code
                    behind will override the inline content.

###  EditModes `EditModes`

Gets or sets the value indicating which will be the available EditModes.

###  EditType `EditorEditType`

Gets or sets the value of the edit type of the Editor.

###  Html `String`

Gets or sets the text content of the RadEditor control inlcuding the HTML
            	markup. The Html property is deprecated in RadEditor.
            	Use Content instead.

###  Content `String`

Gets or sets the text content of the RadEditor control inlcuding the HTML
            	markup.

#### Remarks
The text returned by this property contains HTML markup. If only the text is
                    needed use the Text property.
                You can also set the text content of the RadEditor inline between the
            		<Content></Content> tags. In this case setting this property
            		in the code behind will override the inline content.

###  ImageManager `ImageManagerDialogConfiguration`

Contains the configuration of the ImageManager dialog.

###  DocumentManager `FileManagerDialogConfiguration`

Contains the configuration of the DocumentManager dialog.

###  FlashManager `FileManagerDialogConfiguration`

Contains the configuration of the FlashManager dialog.

###  SilverlightManager `FileManagerDialogConfiguration`

Contains the configuration of the SilverlightManager dialog.

###  MediaManager `FileManagerDialogConfiguration`

Contains the configuration of the MediaManager dialog.

###  TemplateManager `FileManagerDialogConfiguration`

Contains the configuration of the TemplateManager dialog.

###  SpellCheckSettings `SpellCheckSettings`

Contains the configuration of the spell checker.

###  TrackChangesSettings `TrackChangesSettings`

Contains the configuration of the track changes functionality.

###  DialogDefinitions `DialogDefinitionDictionary`

Gets the collection of the dialog definitions (configurations) of the editor.

###  StripFormattingOnPaste `EditorStripFormattingOptions`

This property is obsolete. Please, use the StripFormattingOptions property instead.

###  StripFormattingOptions `EditorStripFormattingOptions`

Gets or sets the value indicating how the editor should clear the HTML formatting
            when the user pastes data into the content area.

#### Remarks
EditorStripFormattingOptions
                    enum members
                    MemberDescriptionNoneDoesn't strip anything, asks a question when MS Word
                            formatting was detected.NoneSupressCleanMessageDoesn't strip anything and does not ask a
                            question.MSWordStrips only MSWord related attributes and
                            tags.MSWordNoFontsStrips the MSWord related attributes and tags and font
                            tags.MSWordNoMarginsStrips the MSWord related attributes and tags and margins
                            MSWordRemoveAllStrips MSWord related attributes and tags, font tags and
                            font size attributes.CssRemoves style attributes.FontRemoves Font tags.SpanClears Span tags.AllExceptNewLinesClears all tags except "br" and new lines (\n) on paste.AllRemove all HTML formatting.Note: In Gecko-based browsers you will see the mandatory
                dialog box where you need to paste the content.

###  DialogHandlerUrl `String`

Gets or sets the URL which the AJAX call will be made to. Check the help for more information.

###  DialogsCssFile `String`

Gets or sets the location of a CSS file, that will be added in the dialog window. If you need to include 
            more than one file, use the CSS @import url(); rule to add the other files from the first.
            This property is needed if you are using a custom skin. It allows you to include your custom skin
            CSS in the dialogs, which are separate from the main page.

###  DialogsScriptFile `String`

Gets or sets the location of a JavaScript file, that will be added in the dialog window. If you need to include 
            more than one file, you will need to combine the scripts into one first.
            This property is needed if want to override some of the default functionality without loading the dialog
            from an external ascx file.

###  DialogOpener `RadDialogOpener`

A read-only property that returns the DialogOpener instance used in the editor control.

###  RibbonBar `RadRibbonBar`

Gets a reference to the ribbon bar, when toolbar mode is BibbonBar.

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ContentFilters `String`

Gets or sets a value indicating which content filters will be active when the editor is loaded in the browser.

#### Remarks
EditorFilters enum members
            		MemberDescriptionRemoveScriptsThis filter removes script tags from the editor content. Disable the filter if you want to insert script tags in the content.MakeUrlsAbsoluteThis filter makes all URLs in the editor content absolute (e.g. "http://server/page.html" instead of "page.html"). This filter is DISABLED by default.FixUlBoldItalicThis filter changes the deprecated u tag to a span with CSS style.IECleanAnchorsInternet Explorer only - This filter removes the current page url from all anchor(#) links to the same page.FixEnclosingPThis filter removes a parent paragraph tag if the whole content is inside it.MozEmStrongThis filter changes b to strong and i to em in Mozilla browsers.ConvertFontToSpanThis filter changes deprecated font tags to compliant span tags.ConvertToXhtmlThis filter converts the HTML from the editor content area to XHTML.IndentHTMLContentThis filter indents the HTML content so it is more readable when you view the code.OptimizeSpansThis filter tries to decrease the number of nested spans in the editor content.ConvertCharactersToEntitiesThis filter converts reserved characters to their html entity names.ConvertInlineStylesToAttributesThis filter converts XHTML compliant inline style attributes to Email compliant element attributes.DefaultFiltersThe default editor behavior. All content filters except MakeUrlsAbsolute are activated.

###  ExternalDialogsPath `String`

Gets or sets a value indicating where the editor will look for its dialogs.

#### Remarks
If specified, the ExternalDialogsPath
            		property will allow you to customize and load the editor dialogs from normal ASCX files.

###  ContentAreaMode `String`

Gets or sets the rendering mode of the editor content area. When set to Iframe, the content area is a separate document
            (suitable for CMS solutions or when editing a whole page). When set to Div, the content area is in the main page. The default value is Iframe.

###  EnableAriaSupport `Boolean`

When set to true enables support for WAI-ARIA

###  EnableComments `Boolean`

When set to true enables support for entering comments in the editor content

###  EnableTrackChanges `Boolean`

When set to true enables support for tracking changes each time the editor content is modified

###  EmptyMessage `String`

Message that will be shown over the content area when the editor is empty.

###  EnableImmutableElements `Boolean`

When set to true enables support for immutable HTML elements

###  AnimationSettings `EditorAnimationSettings`

Specifies the animation settings.

###  DocumentImporter `IDplImportProxy`

Contains the import Rtf/Docx functionality.

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  IsSkinSet `String`

For internal use.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  ClientStateFieldID `String`

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ScriptManager `ScriptManager`

###  RadScriptManager `ScriptManager`

## Methods

###  GetDialogDefinition

#### Returns

`Telerik.Web.UI.DialogDefinition` 

###  RemoveDialogDefinition

#### Returns

`System.Void` 

###  AddDialogDefinition

#### Returns

`System.Void` 

###  EnsureToolsFileLoaded

Forces the ToolsFile to be parsed and loaded at any given time.

#### Returns

`System.Void` 

###  LoadToolsFile

#### Returns

`System.Void` 

###  GetScriptDescriptors

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  GetScriptReferences

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  ForceEditorToolType

#### Returns

`System.Void` 

###  AddAttributesToRender

Adds HTML attributes and styles that need to be rendered to the specified . This method is used primarily by control developers.

#### Parameters

#### writer `System.Web.UI.HtmlTextWriter`

A  that represents the output stream to render HTML content on the client.

#### Returns

`System.Void` 

###  CreateControlRenderer

#### Returns

`Telerik.Web.UI.IRenderer` 

###  RegisterScriptControl

Registers the control with the ScriptManager

#### Returns

`System.Void` 

###  RegisterCssReferences

Registers the CSS styles for the control

#### Returns

`System.Void` 

###  RegisterScriptDescriptors

Registers the script descriptors.

#### Returns

`System.Void` 

###  RenderBeginTag

#### Returns

`System.Void` 

###  RenderContents

#### Returns

`System.Void` 

###  RenderClientStateField

#### Returns

`System.Void` 

###  RenderBottomZone

#### Returns

`System.Void` 

###  RenderEditModes

#### Returns

`System.Void` 

###  DescribeComponent

#### Returns

`System.Void` 

###  FindTool

Finds the tool with the given name.

#### Parameters

#### name `System.String`

The name of the tool to find.

#### Returns

`Telerik.Web.UI.EditorTool` 

###  ContainsTool

#### Returns

`System.Boolean` 

###  LoadPostData

Executed when post data is loaded from the request

#### Returns

`System.Boolean` 

###  ControlPreRender

Executes during the prerender event. We set the tools file and fill the collections with their default values.

#### Returns

`System.Void` 

###  DisableFilter

Removes a specific filter from the ContentFilters.

#### Parameters

#### filter `Telerik.Web.UI.EditorFilters`

An EditorFilters value

#### Returns

`System.Void` 

###  EnableFilter

Add a specific filter to the ContentFilters.

#### Parameters

#### filter `Telerik.Web.UI.EditorFilters`

An EditorFilters value

#### Returns

`System.Void` 

###  SetPaths

Used to set the file browser configuration paths for the editor dialogs

#### Parameters

#### paths `System.String`

A string array containing the paths to set.

#### fileTypes `Telerik.Web.UI.Editor.EditorFileTypes`

Which dialogs to set the paths to.

#### fileOptions `Telerik.Web.UI.Editor.EditorFileOptions`

Which paths (view, upload, delete) to set.

#### Returns

`System.Void` 

###  LoadViewState

Restores view-state information from a previous request that was saved with the System.Web.UI.WebControls.WebControl.SaveViewState() method.

#### Parameters

#### state `System.Object`

An object that represents the control state to restore.

#### Returns

`System.Void` 

###  SaveViewState

Saves any state that was modified after the System.Web.UI.WebControls.Style.TrackViewState() method was invoked.

#### Returns

`System.Object` An object that contains the current view state of the control; otherwise, if there is no view state associated with the control, null.

###  TrackViewState

Causes the control to track changes to its view state so they can be stored in the object's System.Web.UI.Control.ViewState property.

#### Returns

`System.Void` 

###  GetHtml

This method is used to strip comments from the Content of the editor.

#### Returns

`System.String` 

###  SetTrackChangesAdapter

A way to inject a custom implementation for accepting/rejecting track changes.

#### Parameters

#### adapter `Telerik.Web.UI.Editor.TrackChanges.ITrackChangesAdapter`

A custom implementation of the track changes adapter

#### Returns

`System.Void` 

###  AcceptTrackChanges

Changes the content of the Editor by accepting the track changes

#### Returns

`System.Void` 

###  RejectTrackChanges

Changes the content of the Editor by rejecting the track changes

#### Returns

`System.Void` 

###  Export

A way to export editor's content by using the provided RadEditorExportTemplate.

#### Parameters

#### template `Telerik.Web.UI.Editor.Export.RadEditorExportTemplate`

Object, which implements the RadEditorExportTemplate abstract class.

#### Returns

`System.Void` 

###  SetPdfExportTemplate

A way to inject a custom implementation of the PDF export engine.

#### Parameters

#### template `Telerik.Web.UI.Editor.Export.RadEditorExportTemplate`

Object, which implements the RadEditorExportTemplate abstract class.

#### Returns

`System.Void` 

###  ExportToPdf

This method is used to export the editor's content to PDF format.

#### Returns

`System.Void` 

###  SetRtfExportTemplate

A way to inject a custom implementation of the RTF export engine.

#### Parameters

#### template `Telerik.Web.UI.Editor.Export.RadEditorExportTemplate`

Object, which implements the RadEditorExportTemplate abstract class.

#### Returns

`System.Void` 

###  ExportToRtf

This method is used to export the editor's content to RTF format.

#### Returns

`System.Void` 

###  LoadRtfContent

This method is used to convert RTF content to HTML and loadit in RadEditor.

#### Parameters

#### rtfStream `System.IO.Stream`

A Stream object holding the RTF content to be transformed and loaded.

#### Returns

`System.Void` 

###  LoadRtfContent

This method is used to convert Markdown content to RTF and loadit in RadEditor.

#### Parameters

#### rtfText `System.String`

A String object holding the RTF content to be transformed and loaded.

#### Returns

`System.Void` 

###  SetDocxExportTemplate

A way to inject a custom implementation of the DOCX export engine.

#### Parameters

#### template `Telerik.Web.UI.Editor.Export.RadEditorExportTemplate`

Object, which implements the RadEditorExportTemplate abstract class.

#### Returns

`System.Void` 

###  ExportToDocx

This method is used to export the editor's content to DOCX format.

#### Returns

`System.Void` 

###  LoadDocxContent

This method is used to convert DOCX content to HTML and loadit in RadEditor.

#### Parameters

#### docxStream `System.IO.Stream`

A Stream object holding the DOCX content to be transformed and loaded.

#### Returns

`System.Void` 

###  LoadDocxContent

This method is used to convert Markdown content to DOCX and loadit in RadEditor.

#### Parameters

#### docxText `System.String`

A String object holding the DOCX content to be transformed and loaded.

#### Returns

`System.Void` 

###  SetMarkdownExportTemplate

A way to inject a custom implementation of the Markdown export engine.

#### Parameters

#### template `Telerik.Web.UI.Editor.Export.RadEditorExportTemplate`

Object, which implements the RadEditorExportTemplate abstract class.

#### Returns

`System.Void` 

###  ExportToMarkdown

This method is used to export the editor's content to Markdown format.

#### Returns

`System.Void` 

###  LoadMarkdownContent

This method is used to convert Markdown content to HTML and loadit in RadEditor.

#### Parameters

#### markdownStream `System.IO.Stream`

A Stream object holding the Markdown content to be transformed and loaded.

#### Returns

`System.Void` 

###  LoadMarkdownContent

This method is used to convert Markdown content to HTML and loadit in RadEditor.

#### Parameters

#### markdownText `System.String`

A String object holding the Markdown content to be transformed and loaded.

#### Returns

`System.Void` 

###  OnFileDelete

Raises the FileDelete event.

#### Returns

`System.Void` 

###  OnExportContent

Raises the ExportContent event.

#### Returns

`System.Void` 

###  OnImportContent

Raises the ImportContent event.

#### Returns

`System.Void` 

###  OnFileUpload

Raises the FileUpload event.

#### Returns

`System.Void` 

###  OnTextChanged

Raises the TextChanged event.

#### Returns

`System.Void` 

###  DescribeClientProperties

#### Returns

`System.Void` 

###  DescribeClientEvents

#### Returns

`System.Void` 

###  AddAttributesToRender

#### Returns

`System.Void` 

###  OnPreRender

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  RegisterScriptControl

Registers the control with the ScriptManager

#### Returns

`System.Void` 

###  RegisterCssReferences

Registers the CSS references

#### Returns

`System.Void` 

###  LoadClientState

Loads the client state data

#### Parameters

#### clientState `System.Collections.Generic.Dictionary{System.String,System.Object}`

#### Returns

`System.Void` 

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 

###  RenderClientStateField

#### Returns

`System.Void` 

###  RenderBeginTag

#### Returns

`System.Void` 

###  RenderEndTag

#### Returns

`System.Void` 

###  Render

#### Returns

`System.Void` 

###  RenderScriptsNoScriptManager

#### Returns

`System.Void` 

###  RenderDescriptorsNoScriptManager

#### Returns

`System.Void` 

###  RenderContents

#### Returns

`System.Void` 

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  DescribeComponent

#### Returns

`System.Void` 

###  DescribeProperty

#### Returns

`System.Void` 

###  DescribeIDReferenceProperty

#### Returns

`System.Void` 

###  DescribeEvent

#### Returns

`System.Void` 

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

###  LoadPostData

Executed when post data is loaded from the request

#### Parameters

#### postDataKey `System.String`

#### postCollection `System.Collections.Specialized.NameValueCollection`

#### Returns

`System.Boolean` 

###  RaisePostDataChangedEvent

Executed when post data changes should invoke a changed event

#### Returns

`System.Void` 

###  GetViewStateValue

#### Returns

`Telerik.Web.UI.T` 

