---
title: What's New
page_title: What's New | UI for ASP.NET AJAX Documentation
description: What's New
slug: editor/changes-and-backwards-compatibility/what's-new
tags: what's,new
published: False
position: 3
---

# What's New



## What is new in Telerik RadEditor for ASP.NET AJAX

A complete list of all changes can be found on Release History page:

[http://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx](http://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx)



## What is new in Telerik RadEditor for ASP.NET AJAX Q1 2010 SP1

* Added: Paste Html dialog tool. The dialog provides the ability to paste predefined HTML code in the editor's content.

* Added: Exposed an OnExportContent event for exporting RTF content to Database/External RTF file

* Improved: Paste From Word functionality of RadEditor by cleaning of some unnecessary style attributes.

* Improved: Paste From Word functionality of RadEditor by enabling pasting of formatted (colorized) ordered and unordered lists.

## What is new in Telerik RadEditor for ASP.NET AJAX Q1 2010

* Import/export to RTF functionality to RadEditor.

* Ability to link thumbnails to the original image in the Image Manager dialog

* Editor dialogs utilize RadScriptManager and RadStyleSheetManager

* Light versions of hyperlink and image dialogs

* New content filter related to PDF export

* New ConvertCharactersToEntities content filter. This filter converts reserved characters to their html entity names.

* Custom / HEX colors support in editor colorpickers

* Border style optimization (the editor will compact CSS border styles if possible)

* Exclude the tag stripping functionality in Firefox from the FixEnclosingP filter and add it to the ConvertToXhtml content filter.

* Pasting in Safari/Chrome will now respect all StripFormattingOptions correctly

* Provide a way to open the Image Properties dialog without a selected image (e.g. to insert an image from external url)

* Enhanced XHTML compliance of the FormatBlock tool

* Localization in Silverlight Manager dialog

* Improved: Updated the RadEditor rendering to comply with accessibility validation tools (WAVE, Compliance Sherriff)

* Improved: Output "& nbsp ;" instead of character code 0x00a0 for non breaking spaces. This fixes a problem in IE when saving to a database with only ascii encoding.

* Improved: Alert the user that the Paste button is disabled in WebKit browsers due to security restrictions.

* Improved: Updated the RadEditor diff engine to make faster comparisons and support larger HTML content

## What is new in Telerik RadEditor for ASP.NET AJAX Q3 2009 SP1

* Added ability to link thumbnails to the original image in the Image Manager dialog

* Change Image Manager dialog properties tab and add a "Link to original" checkbox if image is detected as thumbnail.

* CDN support --Starting with the Q3 Service Pack 1 release you will be able to load the control scripts and skins from the Telerik CDN

* New Windows7 skin

## What is new in Telerik RadEditor for ASP.NET AJAX Q3 2009

* Accessibility improvements for Royal National Institute of Blind People

* Allow Applying the same properties to all table cells in the TableWizard and Cell Properties dialog. Implemented "Select all" button

* Added localization string "Margin" in the set image properties dialog

* Integrated tool for RadEditor PDF

* Implement Enter key support for Link Manager dialog in RadEditor

* New properties:

* *MaxTextLength* - Gets or sets the max length (in symbols) of the text that can be inserted in the RadEditor before submit. The default value is 0, which means that the property is disabled

* *MaxHtmlLength* - Gets or sets the max length (in symbols) of the HTML code that can be inserted in the __RadEditor__ before submit. The default value is 0, which means that the property is disabled

## What is new in Telerik RadEditor for ASP.NET AJAX Q2 2009 SP1

* Adding new CSS Class Layout tool in the Table Properties dialog.

* Updated Media Manager dialog to use Media Player 7+ class id instead of Media Player 6.

* Added three new localization strings for the Find and Replace dialog - NotFound, NotSupported, AllReplaced.

## What is new in Telerik RadEditor for ASP.NET AJAX Q2 2009

* Added a new function to the editor server API - SetPaths(). Used to set the paths for one or more editor dialogs.

* Updated server API of RadEditor class. File manager properties (ImageManager, DocumentManager, etc.) now have setters (they were read-only)

## What is new in Telerik RadEditor for ASP.NET AJAX Q1 2009

* Added the RadFileExplorer control in the editor file browser dialogs. It replaces the proprietary FileLister/FileUploader control.

* Reorganized the editor file browser dialogs - the browser part is in FileBrowser.ascx, so only the previewer is left in the ImageManager.ascx, DocumentManager.ascx, etc.

* Added image properties to be used from inside the image manager dialog.

* Added link properties to be used from inside the document manager dialog.

* Changed RadEditor tool rendering to be a bit more efficient and to meet several new rendering requirements for the changes in RadEditor skins.

* Integrated table editing mechanism in RadEditor context menus

* Allow calling image manager/document manager dialogs from set image properties/link manager dialogs

* Allow calling StyleBuilder dialogue in Table and Cell Properties dialogues.

* Added new localization strings - SplitCellHorizontal (editor.tools); Open (editor.dialogs)

* Re-arranged NodeInspectorModule items to produce better layout

* Added support for EditorSplitButton type to be read from the editor's tools file as well as from the editor declaration.

* Enhanced RadEditor RemoveScripts filter to also remove scripts on the server - more secure

* Greatly improved server-side rendering (5 time faster)

* Changed CSS naming convention

## What's new in Telerik RadEditor for ASP.NET AJAX Q3 2008

* Added __Clean Attributes Filter__ in RadEditor. It runs together with the XHTML filter and fixes deprecated element attributes to make the content __XHTML compliant__.

* Added the ability to use __normal browser windows__ for the editor dialogs (set_useClassicDialogs(__true__))

* Allow the __ToolsFile__ to be loaded from an absolute url (starting with http://).

* Moved the client code for the syntax highlighter to the dialog ascx file so it can be customized.

* Moved the client code for the table previewer to the table dialog ascx file so it can be customized.

* __Removed dependency on SessionState__. If your custom dialogs depend on the Session object, see the following KB - [Using Session State in Custom Editor Dialogs](http://www.telerik.com/support/kb/aspnet-ajax/editor/session-in-dialogs.aspx)

* Added __export to PDF support__ for RadEditor - see this live example: [Export to PDF](http://demos.telerik.com/aspnet/prometheus/Editor/Examples/PdfExport/DefaultCS.aspx).



## What's new in Telerik RadEditor for ASP.NET AJAX Q2 2008

* Added a new property - __ToolsWidth__, which is used to set the width of the editor toolbar

* Added a new property - [DialogsCssFile]({%slug editor/appearance-and-styling/dialogscssfile-property%}). It allows using custom skins with the dialogs. Changed current dialog implementation to no longer use Default skin when __EnableEmbeddedSkins__ is __false__.

* The RadEditor class now properly implements the ITextControl interface.

* Updated the spinbox controls in the table design dialog.

* Updated the tabstrip control in some dialogs (table wizard, link manager, find and replace) with RadTabStrip.

* The Image editor functions (crop, resize, flip, etc.) are now in a separate public class so they can be used outside of the editor.

* The Image editor client callback function has a new argument - get_newImageSrc() which returns the URL of the updated image.

* Added a new __OptimizeSpans__ content filter to remove extra spans from the editor content.

* Improved Undo/Redo of Apply Class functionality

* Enabled the __StripFormattingOptions__ options in Firefox 3. Content will be automatically processed now when the user pastes using Ctrl-V.

* Integration of __RadFormDecorator__ in __RadEditor's dialogs__

* Added a new filter to the RadEditor ContentFilters property - __EncodeScripts__

* Added a new function to the client API - __saveContent()__. It should be used to manually save the editor content before submit (e.g. when submitting using custom ajax client code).

* Added server-side FileUpload and FileDelete events.

* Marked one of the __StoreFile__ methods in the file browser provider as obsolete. When creating a custom content provider, you no longer need to have a StoreFile overload with HttpPostedFile as the first parameter.

More detailed information on current or previous releases is available [here](http://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx).
