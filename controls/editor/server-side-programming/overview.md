---
title: Overview
page_title: Server-side Programming Overview | RadEditor for ASP.NET AJAX Documentation
description: Overview
slug: editor/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview

## Public Properties

|  **Name**  |  **Description**  |
| ------ | ------ |
|AccessKey|(Inherited from RadWebControl)|
|AllowScripts|Gets or sets the value indicating whether script tags will be allowed in the editor content. This property is now obsolete. Please use the ContentFilters property or the EnableFilter and DisableFilter methods|
|AppRelativeTemplateSourceDirectory|(Inherited from System.Web.UI.Control )|
|Attributes|(Inherited from System.Web.UI.WebControls.WebControl )|
|AutoResizeHeight|Gets or sets the value indicating whether the RadEditor will auto-resize its height to match content height|
|BackColor|(Inherited from RadWebControl)|
|BindingContainer|(Inherited from System.Web.UI.Control )|
|BorderColor|(Inherited from RadWebControl)|
|BorderStyle|(Inherited from RadWebControl)|
|BorderWidth|(Inherited from RadWebControl)|
|ClientID|(Inherited from System.Web.UI.Control )|
|Colors|Gets the collection containing the colors to put in the Foreground and Background color dropdowns.|
|Content|Gets or sets the text content of the RadEditor control inlcuding the HTML markup.|
|ContentAreaCssFile|Gets or sets a string, containing the location of the content area CSS styles. You need to set this property only if you are using a custom skin.|
|ContentAreaMode|Gets or sets the rendering mode of the editor content area. When set to Iframe, the content area is a separate document (suitable for CMS solutions or when editing a whole page). When set to Div, the content area is in the main page. The default value is Iframe.|
|ContentFilters|Gets or sets a value indicating which content filters will be active when the editor is loaded in the browser.|
|ContextMenus|Returns EditorContextMenuCollection|
|Controls|(Inherited from System.Web.UI.Control )|
|ControlStyle|(Inherited from System.Web.UI.WebControls.WebControl )|
|ControlStyleCreated|(Inherited from System.Web.UI.WebControls.WebControl )|
|CssClass|(Inherited from RadWebControl)|
|CssClasses|Gets the collection containing the CSS classes to put in the [Apply CSS Class] dropdown.|
|CssFiles|Gets a reference to a EditorCssFileCollection that can be used to add external CSS files in the editor content area.|
|DialogHandlerUrl|Gets or sets the URL which the AJAX call will be made to. Check the help for more information.|
|DialogOpener|A read-only property that returns the DialogOpener instance used in the editor control.|
|DialogsCssFile|Gets or sets the location of a CSS file, that will be added in the dialog window. If you need to include more than one file, use the CSS @import url(); rule to add the other files from the first. This property is needed if you are using a custom skin. It allows you to include your custom skin CSS in the dialogs, which are separate from the main page.|
|DialogsScriptFile|Gets or sets the location of a JavaScript file, that will be added in the dialog window. If you need to include more than one file, you will need to combine the scripts into one first. This property is needed if want to override some of the default functionality without loading the dialog from an external ascx file.|
|DocumentManager|Contains the configuration of the DocumentManager dialog.|
|EditModes|Gets or sets the value indicating which will be the available EditModes.|
|EnableAjaxSkinRendering|Overridden. Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests|
|Enabled|(Inherited from RadWebControl)|
|EnableEmbeddedBaseStylesheet|Overridden. Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.|
|EnableEmbeddedScripts|Overridden. Gets or sets the value, indicating whether to render links to the embedded client scripts or not.|
|EnableEmbeddedSkins|Overridden. Gets or sets the value, indicating whether to render links to the embedded skins or not.|
|EnableResize|Gets or sets the value indicating whether the users will be able to resize the RadEditor control on the client|
|EnableTheming|(Inherited from RadWebControl)|
|EnableViewState|(Inherited from System.Web.UI.Control )|
|ExportSettings|Gets a reference to the EditorExportSettings object that allows you to set the export file properties|
|ExternalDialogsPath|Gets or sets a value indicating where the editor will look for its dialogs.|
|FlashManager|Contains the configuration of the FlashManager dialog.|
|Font|(Inherited from RadWebControl)|
|FontNames|Gets the collection containing the custom font names to put in the Font dropdown.|
|FontSizes|Gets the collection containing the custom font sizes to put in the [Size] dropdown.|
|ForeColor|(Inherited from RadWebControl)|
|HasAttributes|(Inherited from System.Web.UI.WebControls.WebControl )|
|Height|Overridden. Gets or sets the height of the Web server control. The default height is 400 pixels.|
|Html|Gets or sets the text content of the RadEditor control inlcuding the HTML markup. The Html property is deprecated in RadEditor. Use Content instead.|
|ID|(Inherited from System.Web.UI.Control )|
|ImageManager|Contains the configuration of the ImageManager dialog.|
|ImportSettings|Gets a reference to the EditorImportSettings object that allows you to set the import properties.|
|IsSkinSet|For internal use. (Inherited from RadWebControl)|
|Language|Gets or sets a string containing the localization language for the RadEditor UI|
|Languages|Gets the collection containing the available languages for spellchecking.|
|Links|Gets the collection containing the links to put in the Custom Links dropdown.|
|Localization|The Localization property specifies the strings that appear in the runtime user interface of RadEditor.|
|LocalizationPath|Gets or sets a value indicating where the editor will look for its .resx localization files. By default these files should be in the App_GlobalResources folder. However, if you cannot put the resource files in the default location or .resx files compilation is disabled for some reason (e.g. in a DotNetNuke environment), this property should be set to the location of the resource files.|
|MaxHtmlLength|Gets or sets the max length (in symbols) of the HTML inserted in the RadEditor. When the value is 0 the property is disabled.|
|MaxTextLength|Gets or sets the max length (in symbols) of the text inserted in the RadEditor. When the value is 0 the property is disabled.|
|MediaManager|Contains the configuration of the MediaManager dialog.|
|Modules|Gets the list of modules that should be made included in RadEditor.|
|NamingContainer|(Inherited from System.Web.UI.Control )|
|NewLineBr|Gets or sets the value indicating whether the RadEditor will insert a new line or a paragraph when the [Enter] key is pressed.|
|OnClientCommandExecuted|Gets or sets a value indicating the client-side event handler that is called after an editor command was executed.|
|OnClientCommandExecuting|Gets or sets a value indicating the client-side event handler that is called before an editor command starts executing.|
|OnClientInit|Gets or sets a value indicating the client-side event handler that is called when editor starts to load on the client.|
|OnClientLoad|Gets or sets a value indicating the client-side event handler that is called when editor is loaded on the client.|
|OnClientModeChange|Gets or sets a value indicating the client-side event handler that is called when the content is submitted.|
|OnClientPasteHtml|Gets or sets a value indicating the client-side event handler that is called when a dialog is closed, but before its value returned would be pasted into the editor.|
|OnClientSelectionChange|Gets or sets a value indicating the client-side event handler that is called when selection inside editor content area changes|
|OnClientSubmit|Gets or sets a value indicating the client-side event handler that is called when the content is submitted.|
|Page|(Inherited from System.Web.UI.Control )|
|Paragraphs|Gets the collection containing the paragraph styles to put in the Paragraph Style dropdown.|
|Parent|(Inherited from System.Web.UI.Control )|
|RealFontSizes|Gets the collection containing the custom real font sizes to put in the RealFontSize dropdown.|
|RegisterWithScriptManager|Gets or sets the value, indicating whether to register with the ScriptManager control on the page. (Inherited from RadWebControl)|
|SilverlightManager|Contains the configuration of the SilverlightManager dialog.|
|Site|(Inherited from System.Web.UI.Control )|
|Skin|Overridden. Gets or sets the skin name for the control user interface.|
|SkinID|(Inherited from RadWebControl)|
|Snippets|Gets the collection containing the snippets to put in the Code Snippet dropdown.|
|SpellCheckSettings|Contains the configuration of the spell checker.|
|StripFormattingOnPaste|This property is obsolete. Please, use the StripFormattingOptions property instead.|
|StripFormattingOptions|Gets or sets the value indicating how the editor should clear the HTML formatting when the user pastes data into the content area.|
|Style|(Inherited from System.Web.UI.WebControls.WebControl )|
|Symbols|Gets the collection containing the symbols to put in the Symbols dropdown.|
|TabIndex|(Inherited from RadWebControl)|
|TableLayoutCssFile|Gets or sets a string, containing the location of the CSS styles for table css style layout tool in the TableProperties dialogue.|
|TemplateControl|(Inherited from System.Web.UI.Control )|
|TemplateManager|Contains the configuration of the TemplateManager dialog.|
|TemplateSourceDirectory|(Inherited from System.Web.UI.Control )|
|Text|Gets the text content of the RadEditor control without the HTML markup. The text displayed in the RadEditor without the HTML markup. The default is string.Empty|
|ToolAdapter|Gets or sets the tool adapter, which is responsible for rendering the tools in the toolbar. The default tool adapter is of type Telerik.Web.UI.Editor.DefaultToolAdapter|
|ToolbarMode|Gets or sets the value indicating how the editor toolbar will be rendered and will act on the client|
|ToolProviderID|Gets or sets a string containing the ID (will search for both server or client ID) of a client object that should be used as a tool provider.|
|Tools|Gets the collection containing RadEditor tools.|
|ToolsFile|Gets or sets a string containing the path to the XML toolbar configuration file.|
|ToolsWidth|Gets or sets the width of the editor's toolbar (should be used when ToolbarMode != Default).|
|ToolTip|(Inherited from RadWebControl)|
|UniqueID|(Inherited from System.Web.UI.Control )|
|Visible|(Inherited from RadWebControl)|
|Width|Overridden. Gets or sets the width of the Web server control. The default width is 680 pixels.|

## Public Methods

|  **Name**  |  **Description**  |
| ------ | ------ |
|ApplyStyle|(Inherited from System.Web.UI.WebControls.WebControl )|
|ApplyStyleSheetSkin|(Inherited from System.Web.UI.Control )|
|CopyBaseAttributes|(Inherited from System.Web.UI.WebControls.WebControl )|
|DataBind|Overloaded. (Inherited from System.Web.UI.Control )|
|DisableFilter|Removes a specific filter from the ContentFilters .|
|Dispose|(Inherited from System.Web.UI.Control )|
|EnableFilter|Add a specific filter to the ContentFilters .|
|EnsureToolsFileLoaded|Forces the ToolsFile to be parsed and loaded at any given time.|
|ExportToDocx|This method is used to export the editor's content to DOCX format.|
|ExportToPdf|This method is used to export the editor's content to PDF format.|
|ExportToRtf|This method is used to export the editor's content to RTF format.|
|FindControl|Overloaded. (Inherited from System.Web.UI.Control )|
|FindTool|Finds the tool with the given name.|
|Focus|(Inherited from System.Web.UI.Control )|
|GetEmbeddedSkinNames|Returns the names of all embedded skins. Used by Telerik.Web.Examples. (Inherited from RadWebControl)|
|HasControls|(Inherited from System.Web.UI.Control )|
|LoadDocxContent|Overloaded.More information about this method is available in the[Import from DOCX and RTF]({%slug editor/functionality/import-and-export/import-from-docx-and-rtf%})article.|
|LoadRtfContent|Overloaded.More information about this method is available in the[Import from DOCX and RTF]({%slug editor/functionality/import-and-export/import-from-docx-and-rtf%})article.|
|LoadToolsFile|Overloaded.|
|MergeStyle|(Inherited from System.Web.UI.WebControls.WebControl )|
|RenderControl|Overloaded. (Inherited from System.Web.UI.Control )|
|ResolveClientUrl|(Inherited from System.Web.UI.Control )|
|ResolveUrl|(Inherited from System.Web.UI.Control )|
|SetPaths|Used to set the file browser configuration paths for the editor dialogs|
|SetRenderMethodDelegate|(Inherited from System.Web.UI.Control )|


## Public Events


|  **Name**  |  **Description**  |
| ------ | ------ |
|DataBinding|(Inherited from System.Web.UI.Control )|
|Disposed|(Inherited from System.Web.UI.Control )|
|[ExportContent]({%slug editor/server-side-programming/events/onexportcontent%})|This event is raised before the export of a file. The file export can be canceled by	setting the **Cancel** property exposed by the **EditorExportingArgs** to *false* .|
|FileDelete|This event is raised before the deletion of a file and using the current content provider. The file deletion can be canceled if the event handler returns false.|
|FileUpload|This event is raised before the storing of a file and using the current content provider. The file upload can be canceled if the event handler returns false.|
|[ImportContent]({%slug editor/server-side-programming/events/onimportcontent%})|This event is raised before the import of a file.|
|Init|(Inherited from System.Web.UI.Control )|
|Load|(Inherited from System.Web.UI.Control )|
|PreRender|(Inherited from System.Web.UI.Control )|
|TextChanged|Occurs when the content of the RadEditor changes between posts to the server.|
|Unload|(Inherited from System.Web.UI.Control )|
