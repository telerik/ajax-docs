---
title: Overview
page_title: Toolbars Overview | RadEditor for ASP.NET AJAX Documentation
description: Overview
slug: editor/functionality/toolbars/overview
tags: overview
published: True
position: 0
---

# Toolbars Overview

**RadEditor** Toolbars are containers that accommodate the buttons and dropdown lists of the various tools.	Developers can group buttons in a number of toolbars according to the specific purpose of the **RadEditor** implementation.	The figure below shows an editor with its full set of tools, distributed in five toolbars. You can configure a toolbar	with as few or as many tools as your application requires.

![](images/editor-fullsetoftoolsq12010.png)

You can learn how to add standard or custom tools to a toolbar in the following Help articles:

* [Adding Standard Buttons]({%slug editor/functionality/toolbars/buttons/add-standard-buttons%})

* [Adding Your Own Buttons]({%slug editor/functionality/toolbars/buttons/add-your-own-buttons%})

You can also configure the toolbar using an XML [ToolsFile]({%slug editor/functionality/toolbars/using-toolsfile.xml%}), which	defines:

* the number of toolbars and system [modules]({%slug editor/functionality/modules/overview%})

* the collection of buttons in each toolbar and their order

* the specific options (if any) for the respective tools (i.e., Fonts collections, Colors collection, etc.)

* the [dockability]({%slug editor/functionality/toolbars/docking-zones%}) of each toolbar

* the default docking zone for each toolbar

You can group tools with similar logic in ToolStrips. You can find more information in the following	article: [How to create a ToolStrip]({%slug editor/functionality/toolbars/dropdowns/custom-toolstrip%}).

As of **Q2 2015**, new phone-optimized UI is introduced in **RadEditor**—[Phone Layout of RadEditor]({%slug editor/mobile-support/phone-layout/overview%}). You can find more details about the toolbar-related optimizations in the [Phone Layout Elements Structure]({%slug editor/mobile-support/phone-layout/elements-structure%}) article.   

## RadEditor Toolset Reference

The lists below show the icon image, the name of the tool, a description of what the tool does, and the tag format used to declare that tool in the ToolsFile.xml file.

## General Buttons


|  **Icon**  |  **Tool Name**  |  **Description**  |  **ToolsFile Declaration**  |
| ------ | ------ | ------ | ------ |
|![](images/editor-converttoupper.gif)| **ConvertToUpper** |Convert the text of the current selection to upper case, preserving the non-text elements such as	images and tables.|`<tool name="ConvertToUpper" />`|
|![](images/editor-converttolower.gif)| **ConvertToLower** |Convert the text of the current selection to lower case, preserving the non-text	elements such as images and tables.|`<tool name="ConvertToLower" />`|
|![](images/editor-fontsize.gif)| **RealFontSize** |Allows the user to apply to the current selection, the font size measured in pixels (px) or points (pt),	rather than a fixed-size 1 to 7 (as does the FontSize tool).|`<tool name="RealFontSize"/>`|
|![](images/editor-togglescreenmode.gif)| **ToggleScreenMode** |Toggle Screen Mode - Switches Telerik **RadEditor** into full screen mode.|`<tool name="ToggleScreenMode" shortcut="F11"/>`|
|![](images/editor-toggleborders.gif)| **ToggleTableBorder** |Show/Hide Border - Shows or hides borders around tables in the content area.|`<tool name="ToggleTableBorder" />`|
|![](images/editor-zoom1.gif)| **Zoom** |Zoom - Changes the level of text magnification.|`<tool name="Zoom" />`|
|![](images/editor-modulemanager.gif)| **ModuleManager** |Module Manager - Activates /Deactivates modules from a drop-down list of available modules.|`<tool name="ModuleManager" />`|
|![](images/editor-toggledocking.gif)| **ToggleDocking** |Toggle Docking - Docks all floating toolbars to their respective docking areas.|`<tool name="ToggleDocking" />`|
|![](images/editor-findandreplace.gif)| **FindAndReplace** |Find and Replace - Find (and replaces) text in the editor's content area.|`<tool name="FindAndReplace" shortcut="CTRL+F"/>`|
|![](images/editor-print.gif)| **Print** |Print - Prints the contents of the Telerik **RadEditor** or the whole web page.|`<tool name="Print" shortcut="CTRL+P"/>`|
|![](images/editor-spellcheck.gif)| **AjaxSpellCheck** |Spell - Launches the spell checker.|`<tool name="AjaxSpellCheck" shortcut="F7"/>`|
|![](images/editor-cut.gif)| **Cut** |Cut - Cuts the selected content and copies it to the clipboard.|`<tool name="Cut" shortcut="CTRL+X"/>`|
|![](images/editor-copy.gif)| **Copy** |Copy - Copies the selected content to the clipboard.|`<tool name="Copy" shortcut="CTRL+C"/>`|
|![](images/editor-paste.gif)| **Paste** |Paste - Pastes the copied content from the clipboard into the editor.|`<tool name="Paste" shortcut="CTRL+V"/>`|
|![editor-paste-strip](images/editor-paste-strip.png)| **PasteStrip** |PasteStrip dropdown - Contains advanced paste options (Paste, PasteFromWord, PasteFromWordNoFontsNoSizes, PastePlainText, PasteAsHtml, PasteHtml)|`<tool name="PasteStrip" />`|
|![](images/editor-pastefromword.gif)| **PasteFromWord** |Paste from Word - Pastes content copied from Word and removes the web-unfriendly tags.|`<tool name="PasteFromWord" />`|
|![](images/editor-pastefromword_full.gif)| **PasteFromWordNoFontsNoSizes** |Paste from Word cleaning fonts and sizes - Cleans all Word-specific tags and removes font names and text sizes.|`<tool name="PasteFromWordNoFontsNoSizes" />`|
|![](images/editor-pasteplaintext.gif)| **PastePlainText** |Paste Plain Text - Pastes plain text (no formatting) into the editor.|`<tool name="PastePlainText" />`|
|![](images/editor-pastehtml.png)| **PasteHtml** |Paste HTML - Pastes HTML code in to the current selection and renders it. It is helpful when needed to enter predefined HTML code such as media embed source.|`<tool name="PasteHtml" />`|
|![](images/editor-pasteashtml.gif)| **PasteAsHtml** |Paste as HTML - Pastes HTML code in the content area and keeps all the HTML tags.|`<tool name="PasteAsHtml"/>`|
|![](images/editor-undo.gif)| **Undo** |Undo - Undoes the last action.|`<tool name="Undo" shortcut="CTRL+Z"/>`|
|![](images/editor-redo.gif)| **Redo** |Redo - Redoes/repeats the last action, which has been undone.|`<tool name="Redo" shortcut="CTRL+Y"/>`|
|![](images/editor-formatstripper.gif)| **FormatStripper** |Format Stripper - Removes custom or all formatting from selected text.|`<tool name="FormatStripper"/>`|
|![](images/editor-help.gif)| **Help** |Quick Help - Launches the Quick Help you are currently viewing.|`<tool name="Help" shortcut="F1"/>`|
|![](images/editor-aboutdialog.gif)| **AboutDialog** |About Dialog - Shows the current version and credentials of Telerik **RadEditor** .|`<tool name="AboutDialog" />`|
|![](images/editor-xhtmlvalidator.png)| **XhtmlValidator** |XhtmlValidator - Uses the W3C XHTML Validator Page to perform validation of the current editor content.|`<tool name="XhtmlValidator" />`|
|![](images/editor-csdialog-icon.png)| **CSDialog** |[Accessibility Compliance Check Dialog]({%slug editor/accessibility-and-internationalization/creating-accessible-content/compliance-check-dialog%}) - Uses HiSoftware's Compliance Sheriff tool to help the user create accessible content.|`<tool name="CSDialog" />`|
|![StyleBuilder](images/editor-stylebuilder.png)| **StyleBuilder** |StyleBuilder - Provides options to define cascading style sheet (CSS) style attributes.|`<tool name="StyleBuilder" />`|
|![](./images/editor-toggle-toolzone.png)|**Toggle ToolZone** *(this button is [Phone-Layout-related]({%slug editor/mobile-support/phone-layout/overview%}))*|Toggles the ToolZone in RadEditor with Phone Layout|`<tool name="MobileEdit" />`|
|![](./images/editor-toggle-html-mode.png)|**Toggle Edit Mode** *(this button is [Phone-Layout-related]({%slug editor/mobile-support/phone-layout/overview%}))*|Switches between Design and HTML mode in RadEditor with Phone Layout.|`<tool name="ToggleEditMode" />`|
|![](./images/editor-toggle-screen-mode.png)|**Toggle Screen Mode** *(this button is [Phone-Layout-related]({%slug editor/mobile-support/phone-layout/overview%}))*|Exits the full screen mode in RadEditor with Phone layout.|`<tool name="ToggleScreenMode" />`|

## Insert and Manage Links, Tables, Special Characters, Images and Media


|  **Icon**  |  **Tool Name**  |  **Description**  |  **ToolsFile Declaration**  |
| ------ | ------ | ------ | ------ |
|![](images/editor-imagemanager.gif)| **ImageManager** |Image Manager - Inserts an image from a predefined image folder(s).|`<tool name="ImageManager" shortcut="CTRL+G"/>`|
|![](images/editor-insertimage.png)| **InsertImage** |Insert Image - A lite version of the Set Image Properties (Properties...) dialog.|`<tool name="InsertImage"/>`|
|![](images/editor-imagemapdialog.gif)| **ImageMapDialog** |Image Map - Allows users to define clickable areas within an image.|`<tool name="ImageMapDialog"/>`|
|![](images/editor-absoluteposition.gif)| **AbsolutePosition** |Absolute Object Position - Sets an absolute position of an object (free move).|`<tool name="AbsolutePosition" />`|
|![](images/editor-inserttable.gif)| **InsertTable** |Insert Table - Inserts a table in the Telerik **RadEditor** .|`<tool name="InsertTable" />`|
|![](images/editor-toggletableborder.gif)| **ToggleTableBorder** |Toggle Table Borders - Toggles borders of all tables within the editor.|`<tool name="ToggleTableBorder" />`|
|![](images/editor-insertsnippet.gif)| **InsertSnippet** |Insert Snippet - Inserts pre-defined code snippets.|`<tool name="InsertSnippet" />`|
|![](images/editor-insertformelement.gif)| **InsertFormElement** |Insert Form Element - Inserts a form element from a drop-down list with available elements.|`<tool name="InsertFormElement" />`|
|![](images/editor-insertdate.gif)| **InsertDate** |Insert Date - Inserts current date.|`<tool name="InsertDate" />`|
|![](images/editor-inserttime.gif)| **InsertTime** |Insert Time - Inserts current time.|`<tool name="InsertTime" />`|
|![editor-insertexternalvideo](images/editor-insertexternalvideo.png)| **InsertExternalVideo** |Insert Video - Inserts YouTube or Vimeo video providing just the URL. Additional options for video	customization are available as well.|`<tool name="InsertExternalVideo" />`|
|![](images/editor-flashmanager.gif)| **FlashManager** |Flash Manager - Inserts a Flash animation and lets you set its properties.|`<tool name="FlashManager" />`|
|![](images/editor-mediamanager.gif)| **MediaManager** |Windows Media Manager - Inserts a Windows media object (AVI, MPEG, WAV, etc.) and lets you set its properties.|`<tool name="MediaManager" />`|
|![](images/editor-documentmanager.gif)| **DocumentManager** |Document Manager - Inserts a link to a document on the server (PDF, DOC, etc.)|`<tool name="DocumentManager" />`|
|![](images/editor-linkmanager.gif)| **LinkManager** |Hyperlink Manager - Makes the selected text or image a hyperlink.|`<tool name="LinkManager" shortcut="CTRL+K"/>`|
|![](images/editor-insertlink.png)| **InsertLink** |Insert Link - A lite version of the **Hyperlink Manager** , which makes the selected text or image a hyperlink.|`<tool name="InsertLink" />`|
|![](images/editor-unlink.gif)| **Unlink** |Remove Hyperlink - Removes the hyperlink from the selected text or image.|`<tool name="Unlink" shortcut="CTRL+SHIFT+K"/>`|
|![](images/editor-symbols.gif)| **InsertSymbol** |Insert Special Character - Inserts a special character (€, ®, ©, ±, etc.)|`<tool name="InsertSymbol" />`|
|![](images/editor-customlinks.gif)| **InsertCustomLink** |Insert Custom Link - Inserts an internal or external link from a predefined list.|`<tool name="InsertCustomLink"/>`|
|![](images/editor-templatemanager.gif)| **TemplateManager** |Choose HTML Template - Applies an HTML template from a predefined list of templates.|`<tool name="TemplateManager" />`|


## Create, Format, Edit: Paragraphs and Lines


|  **Icon**  |  **Tool Name**  |  **Description**  |  **ToolsFile Declaration**  |
| ------ | ------ | ------ | ------ |
|![](images/editor-insertparagraph.gif)| **InsertParagraph** |Insert New Paragraph - Inserts a new paragraph.|`<tool name="InsertParagraph" />`|
|![](images/editor-paragraph.gif)| **FormatBlock** |Paragraph Style dropdown button - Applies standard text styles to selected text.|`<tool name="FormatBlock"/>`|
|![](images/editor-indent.gif)| **Indent** |Indent - Indents paragraphs to the right.|`<tool name="Indent" />`|
|![](images/editor-outdent.gif)| **Outdent** |Outdent - Indents paragraphs to the left.|`<tool name="Outdent" />`|
|![](images/editor-justifyleft.gif)| **JustifyLeft** |Align Left - Aligns the selected paragraph to the left.|`<tool name="JustifyLeft" />`|
|![](images/editor-justifycenter.gif)| **JustifyCenter** |Center - Aligns the selected paragraph to the center.|`<tool name="JustifyCenter" />`|
|![](images/editor-justifyright.gif)| **JustifyRight** |Align Right - Aligns the selected paragraph to the right.|`<tool name="JustifyRight" />`|
|![](images/editor-justifyfull.gif)| **JustifyFull** |Justify - Justifies the selected paragraph.|`<tool name="JustifyFull" />`|
|![](images/editor-justifynone.gif)| **JustifyNone** |Justify None - Removes the alignment.|`<tool name="JustifyNone" />`|
|![](images/editor-insertunorderedlist.gif)| **InsertUnorderedList** |Bulleted List - Creates a bulleted list from the selection.|`<tool name="InsertUnorderedList" />`|
|![](images/editor-insertorderedlist.gif)| **InsertOrderedList** |Numbered List - Creates a numbered list from the selection.|`<tool name="InsertOrderedList" />`|
|![](images/editor-inserthorizontalrule.gif)| **InsertHorizontalRule** |Insert Horizontal Line (e.g. Horizontal Ruler) - Inserts a horizontal line at the cursor position.|`<tool name="InsertHorizontalRule" />`|


## Create, Format, Edit: Text, Font and Lists
 

|  **Icon**  |  **Tool Name**  |  **Description**  |  **ToolsFile Declaration**  |
| ------ | ------ | ------ | ------ |
|![](images/editor-bold.gif)| **Bold** |Bold - Applies bold formatting to the selected text.|`<tool name="Bold" shortcut="CTRL+B"/>`|
|![](images/editor-italic.gif)| **Italic** |Italic - Applies italic formatting to the selected text.|`<tool name="Italic" shortcut="CTRL+I"/>`|
|![](images/editor-underline.gif)| **Underline** |Underline - Applies underline formatting to the selected text.|`<tool name="Underline" shortcut="CTRL+U"/>`|
|![](images/editor-strikethrough.gif)| **StrikeThrough** |Strikethrough - Applies strikethrough formatting to the selected text.|`<tool name="StrikeThrough" />`|
|![](images/editor-superscript.gif)| **Superscript** |Superscript - Makes the selected text superscript.|`<tool name="Superscript" />`|
|![](images/editor-subscript.gif)| **Subscript** |Subscript - Makes the selected text subscript.|`<tool name="Subscript" />`|
|![](images/editor-fontname.gif)| **FontName** |Font Select - Sets the font typeface.|`<tool name="FontName"/>`|
|![](images/editor-fontsize.gif)| **FontSize** |Font Size - Sets the font size.|`<tool name="FontSize"/>`|
|![](images/editor-forecolor.gif)| **ForeColor** |Text Color (foreground) - Changes the foreground color of the selected text.|`<tool name="ForeColor"/>`|
|![](images/editor-backcolor.gif)| **BackColor** |Text Color (background) - Changes the background color of the selected text.|`<tool name="BackColor"/>`|
|![radeditor formatcodeblock png](images/radeditor_formatcodeblock_png.png)| **FormatCodeBlock** |Formats the selected text as a code block.|`<tool name="FormatCodeBlock" />`|
|![](images/editor-class.gif)| **ApplyClass** |Custom Styles - Applies custom, predefined styles to the selected text.|`<tool name="ApplyClass"/>`|
|![](images/editor-separator.gif)| **EditorSeparator** |Separate the tools icons on the toolbar.|`<tool separator="true" />`|

## Track Changes and Comments

To have the Track Changes tools you should set the `EnableTrackChanges` property to `true`. You can refer to [Track Changes article]({%slug editor/functionality/track-changes-and-comments/track-changes%}). And for Comment tools, set the `EnableComments` property to `true`. You can refer to [Comments article]({%slug editor/functionality/track-changes-and-comments/comments%})

|  **Icon**  |  **Tool Name**  |  **Description**  |  **ToolsFile Declaration**  |
| ------ | ------ | ------ | ------ |
|![](images/editor-acceptTrackChange.gif)| **AcceptTrackChange** |AcceptTrackChange - Accepts the selected change.|`<tool name="AcceptTrackChange" />`|
|![](images/editor-rejectTrackChange.gif)| **RejectTrackChange** |RejectTrackChange - Rejects the selected change.|`<tool name="RejectTrackChange" />`|
|![](images/editor-acceptAllTrackChanges.gif)| **AcceptAllTrackChanges** |AcceptAllTrackChanges - Accepts all changes in the document.|`<tool name="AcceptAllTrackChanges" />`|
|![](images/editor-rejectAllTrackChanges.gif)| **RejectAllTrackChanges** |RejectAllTrackChanges - Rejects all changes in the document.|`<tool name="RejectAllTrackChanges" />`|
|![](images/editor-enableTrackChangesOverride.gif)| **EnableTrackChangesOverride** |EnableTrackChangesOverride - Toggles the Track Changes feature.|`<tool name="EnableTrackChangesOverride" />`|
|![](images/editor-addComment.gif)| **AddComment** |AddComment - Adds comment on the highlighted text.|`<tool name="AddComment" />`|
|![](images/editor-removeComment.gif)| **RemoveComment** |RemoveComment - Removes the comment under the selected text.|`<tool name="RemoveComment"/>`|
|![](images/editor-removeAllComments.gif)| **RemoveAllComments** |RemoveAllComments - Removes all comments in the document.|`<tool name="RemoveAllComments"/>`|


## ToolsFile Example

Below is an example of a ToolsFile:

````XML
<root>
	<tools name="MainToolbar" enabled="true">
		<tool name="AjaxSpellCheck" />
		<tool name="Print" />
		<tool name="FindAndReplace" />
		<tool separator="true"/>
		<tool name="Cut" />
		<tool name="Copy" />
		<tool name="Paste" />
		<tool name="PasteFromWord" />
		<tool name="PastePlainText" />
		<tool name="PasteAsHtml"  />
		<tool separator="true"/>
		<tool name="Undo" />
		<tool name="Redo" />
	</tools>
</root> 			
````

## See Also

 * [Set Properties]({%slug editor/getting-started/set-properties%})

 * [Default ToolsFile.xml file of RadEditor for ASP.NET AJAX](http://www.telerik.com/support/kb/aspnet-ajax/editor/details/default-toolsfile-xml-file-of-radeditor-for-asp-net-ajax)

 * [Dialogs live example](http://demos.telerik.com/aspnet-ajax/editor/examples/built-in-dialogs/defaultcs.aspx)

 * [RadEditor End-User Manual](http://www.telerik.com/documents/RadEditorAjaxEndUserManual.pdf)

 * [Phone Layout of RadEditor]({%slug editor/mobile-support/phone-layout/overview%})

 * [Phone Layout Getting Started]({%slug editor/mobile-support/phone-layout/getting-started%})

 * [Phone Layout Elements Structure]({%slug editor/mobile-support/phone-layout/elements-structure%})
