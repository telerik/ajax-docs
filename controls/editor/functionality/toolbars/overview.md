---
title: Overview
page_title: Toolbars Overview - RadEditor
description: Learn about the toolbars in the Editor control and how to customize them for specific editing needs.
slug: editor/functionality/toolbars/overview
components: ["editor"]
tags: overview
published: True
position: 0
---

# Toolbars Overview

**RadEditor** Toolbars are containers that accommodate the buttons and dropdown lists of the various tools.	Developers can group buttons in a number of toolbars according to the specific purpose of the **RadEditor** implementation.	The figure below shows an editor with its full set of tools, distributed in five toolbars. You can configure a toolbar	with as few or as many tools as your application requires.

![RadEditor screenshot showing editor-fullsetoftoolsq12010.png](images/editor-fullsetoftoolsq12010.png)

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
|![RadEditor screenshot showing editor-converttoupper.gif](images/editor-converttoupper.gif)| **ConvertToUpper** |Convert the text of the current selection to upper case, preserving the non-text elements such as	images and tables.|`<tool name="ConvertToUpper" />`|
|![RadEditor screenshot showing editor-converttolower.gif](images/editor-converttolower.gif)| **ConvertToLower** |Convert the text of the current selection to lower case, preserving the non-text	elements such as images and tables.|`<tool name="ConvertToLower" />`|
|![RadEditor screenshot showing editor-fontsize.gif](images/editor-fontsize.gif)| **RealFontSize** |Allows the user to apply to the current selection, the font size measured in pixels (px) or points (pt),	rather than a fixed-size 1 to 7 (as does the FontSize tool).|`<tool name="RealFontSize" shortcut="CTRL+SHIFT+P / CMD+SHIFT+P"/>`|
|![RadEditor screenshot showing editor-togglescreenmode.gif](images/editor-togglescreenmode.gif)| **ToggleScreenMode** |Toggle Screen Mode - Switches Telerik **RadEditor** into full screen mode.|`<tool name="ToggleScreenMode" shortcut="F11 / CMD+F11"/>`|
|![RadEditor screenshot showing editor-toggleborders.gif](images/editor-toggleborders.gif)| **ToggleTableBorder** |Show/Hide Border - Shows or hides borders around tables in the content area.|`<tool name="ToggleTableBorder" />`|
|![RadEditor screenshot showing editor-zoom1.gif](images/editor-zoom1.gif)| **Zoom** |Zoom - Changes the level of text magnification.|`<tool name="Zoom" />`|
|![RadEditor screenshot showing editor-modulemanager.gif](images/editor-modulemanager.gif)| **ModuleManager** |Module Manager - Activates /Deactivates modules from a drop-down list of available modules.|`<tool name="ModuleManager" />`|
|![RadEditor screenshot showing editor-toggledocking.gif](images/editor-toggledocking.gif)| **ToggleDocking** |Toggle Docking - Docks all floating toolbars to their respective docking areas.|`<tool name="ToggleDocking" />`|
|![RadEditor screenshot showing editor-findandreplace.gif](images/editor-findandreplace.gif)| **FindAndReplace** |Find and Replace - Find (and replaces) text in the editor's content area.|`<tool name="FindAndReplace" shortcut="CTRL+F / CMD+F"/>`|
|![RadEditor screenshot showing editor-print.gif](images/editor-print.gif)| **Print** |Print - Prints the contents of the Telerik **RadEditor** or the whole web page.|`<tool name="Print" shortcut="CTRL+P / CMD+P"/>`|
|![RadEditor screenshot showing editor-spellcheck.gif](images/editor-spellcheck.gif)| **AjaxSpellCheck** |Spell - Launches the spell checker.|`<tool name="AjaxSpellCheck"/>`|
|![RadEditor screenshot showing editor-cut.gif](images/editor-cut.gif)| **Cut** |Cut - Cuts the selected content and copies it to the clipboard.|`<tool name="Cut" shortcut="CTRL+X / CMD+X"/>`|
|![RadEditor screenshot showing editor-copy.gif](images/editor-copy.gif)| **Copy** |Copy - Copies the selected content to the clipboard.|`<tool name="Copy" shortcut="CTRL+C / CMD+X"/>`|
|![RadEditor screenshot showing editor-paste.gif](images/editor-paste.gif)| **Paste** |Paste - Pastes the copied content from the clipboard into the editor.|`<tool name="Paste" shortcut="CTRL+V / CMD+V"/>`|
|![editor-paste-strip](images/editor-paste-strip.png)| **PasteStrip** |PasteStrip dropdown - Contains advanced paste options (Paste, PasteFromWord, PasteFromWordNoFontsNoSizes, PastePlainText, PasteAsHtml, PasteHtml)|`<tool name="PasteStrip" />`|
|![RadEditor screenshot showing editor-pastefromword.gif](images/editor-pastefromword.gif)| **PasteFromWord** |Paste from Word - Pastes content copied from Word and removes the web-unfriendly tags.|`<tool name="PasteFromWord" />`|
|![RadEditor screenshot showing editor-pastefromword_full.gif](images/editor-pastefromword_full.gif)| **PasteFromWordNoFontsNoSizes** |Paste from Word cleaning fonts and sizes - Cleans all Word-specific tags and removes font names and text sizes.|`<tool name="PasteFromWordNoFontsNoSizes" />`|
|![RadEditor screenshot showing editor-pasteplaintext.gif](images/editor-pasteplaintext.gif)| **PastePlainText** |Paste Plain Text - Pastes plain text (no formatting) into the editor.|`<tool name="PastePlainText" />`|
|![RadEditor screenshot showing editor-pastehtml.png](images/editor-pastehtml.png)| **PasteHtml** |Paste HTML - Pastes HTML code in to the current selection and renders it. It is helpful when needed to enter predefined HTML code such as media embed source.|`<tool name="PasteHtml" />`|
|![RadEditor screenshot showing editor-pasteashtml.gif](images/editor-pasteashtml.gif)| **PasteAsHtml** |Paste as HTML - Pastes HTML code in the content area and keeps all the HTML tags.|`<tool name="PasteAsHtml"/>`|
|![RadEditor screenshot showing editor-undo.gif](images/editor-undo.gif)| **Undo** |Undo - Undoes the last action.|`<tool name="Undo" shortcut="CTRL+Z / CMD+Z"/>`|
|![RadEditor screenshot showing editor-redo.gif](images/editor-redo.gif)| **Redo** |Redo - Redoes/repeats the last action, which has been undone.|`<tool name="Redo" shortcut="CTRL+Y / CMD+Y"/>`|
|![RadEditor screenshot showing editor-formatstripper.gif](images/editor-formatstripper.gif)| **FormatStripper** |Format Stripper - Removes custom or all formatting from selected text.|`<tool name="FormatStripper"/>`|
|![RadEditor screenshot showing editor-help.gif](images/editor-help.gif)| **Help** |Quick Help - Launches the Quick Help you are currently viewing.|`<tool name="Help" shortcut="F1"/>`|
|![RadEditor screenshot showing editor-aboutdialog.gif](images/editor-aboutdialog.gif)| **AboutDialog** |About Dialog - Shows the current version and credentials of Telerik **RadEditor** .|`<tool name="AboutDialog" />`|
|![RadEditor screenshot showing editor-xhtmlvalidator.png](images/editor-xhtmlvalidator.png)| **XhtmlValidator** |XhtmlValidator - Uses the W3C XHTML Validator Page to perform validation of the current editor content.|`<tool name="XhtmlValidator" />`|
|![StyleBuilder](images/editor-stylebuilder.png)| **StyleBuilder** |StyleBuilder - Provides options to define cascading style sheet (CSS) style attributes.|`<tool name="StyleBuilder" />`|
|![RadEditor screenshot showing editor-toggle-toolzone.png](./images/editor-toggle-toolzone.png)|**Toggle ToolZone** *(this button is [Phone-Layout-related]({%slug editor/mobile-support/phone-layout/overview%}))*|Toggles the ToolZone in RadEditor with Phone Layout|`<tool name="MobileEdit" />`|
|![RadEditor screenshot showing editor-toggle-html-mode.png](./images/editor-toggle-html-mode.png)|**Toggle Edit Mode** *(this button is [Phone-Layout-related]({%slug editor/mobile-support/phone-layout/overview%}))*|Switches between Design and HTML mode in RadEditor with Phone Layout.|`<tool name="ToggleEditMode" />`|
|![RadEditor screenshot showing editor-toggle-screen-mode.png](./images/editor-toggle-screen-mode.png)|**Toggle Screen Mode** *(this button is [Phone-Layout-related]({%slug editor/mobile-support/phone-layout/overview%}))*|Exits the full screen mode in RadEditor with Phone layout.|`<tool name="ToggleScreenMode" />`|

## Insert and Manage Links, Tables, Special Characters, Images and Media


|  **Icon**  |  **Tool Name**  |  **Description**  |  **ToolsFile Declaration**  |
| ------ | ------ | ------ | ------ |
|![RadEditor screenshot showing editor-imagemanager.gif](images/editor-imagemanager.gif)| **ImageManager** |Image Manager - Inserts an image from a predefined image folder(s).|`<tool name="ImageManager" shortcut="CTRL+G / CMD+G"/>`|
|![RadEditor screenshot showing editor-insertimage.png](images/editor-insertimage.png)| **InsertImage** |Insert Image - A lite version of the Set Image Properties (Properties...) dialog.|`<tool name="InsertImage"/>`|
|![RadEditor screenshot showing editor-imagemapdialog.gif](images/editor-imagemapdialog.gif)| **ImageMapDialog** |Image Map - Allows users to define clickable areas within an image.|`<tool name="ImageMapDialog"/>`|
|![RadEditor screenshot showing editor-absoluteposition.gif](images/editor-absoluteposition.gif)| **AbsolutePosition** |Absolute Object Position - Sets an absolute position of an object (free move).|`<tool name="AbsolutePosition" />`|
|![RadEditor screenshot showing editor-inserttable.gif](images/editor-inserttable.gif)| **InsertTable** |Insert Table - Inserts a table in the Telerik **RadEditor** .|`<tool name="InsertTable" />`|
|![RadEditor screenshot showing editor-toggletableborder.gif](images/editor-toggletableborder.gif)| **ToggleTableBorder** |Toggle Table Borders - Toggles borders of all tables within the editor.|`<tool name="ToggleTableBorder" />`|
|![RadEditor screenshot showing editor-insertsnippet.gif](images/editor-insertsnippet.gif)| **InsertSnippet** |Insert Snippet - Inserts pre-defined code snippets.|`<tool name="InsertSnippet" />`|
|![RadEditor screenshot showing editor-insertformelement.gif](images/editor-insertformelement.gif)| **InsertFormElement** |Insert Form Element - Inserts a form element from a drop-down list with available elements.|`<tool name="InsertFormElement" />`|
|![RadEditor screenshot showing editor-insertdate.gif](images/editor-insertdate.gif)| **InsertDate** |Insert Date - Inserts current date.|`<tool name="InsertDate" />`|
|![RadEditor screenshot showing editor-inserttime.gif](images/editor-inserttime.gif)| **InsertTime** |Insert Time - Inserts current time.|`<tool name="InsertTime" />`|
|![editor-insertexternalvideo](images/editor-insertexternalvideo.png)| **InsertExternalVideo** |Insert Video - Inserts YouTube or Vimeo video providing just the URL. Additional options for video	customization are available as well.|`<tool name="InsertExternalVideo" />`|
|![RadEditor screenshot showing editor-flashmanager.gif](images/editor-flashmanager.gif)| **FlashManager** |Flash Manager - Inserts a Flash animation and lets you set its properties.|`<tool name="FlashManager" />`|
|![RadEditor screenshot showing editor-mediamanager.gif](images/editor-mediamanager.gif)| **MediaManager** |Windows Media Manager - Inserts a Windows media object (AVI, MPEG, WAV, etc.) and lets you set its properties.|`<tool name="MediaManager" />`|
|![RadEditor screenshot showing editor-documentmanager.gif](images/editor-documentmanager.gif)| **DocumentManager** |Document Manager - Inserts a link to a document on the server (PDF, DOC, etc.)|`<tool name="DocumentManager" />`|
|![RadEditor screenshot showing editor-linkmanager.gif](images/editor-linkmanager.gif)| **LinkManager** |Hyperlink Manager - Makes the selected text or image a hyperlink.|`<tool name="LinkManager" shortcut="CTRL+K / CMD+K"/>`|
|![RadEditor screenshot showing editor-insertlink.png](images/editor-insertlink.png)| **InsertLink** |Insert Link - A lite version of the **Hyperlink Manager** , which makes the selected text or image a hyperlink.|`<tool name="InsertLink" />`|
|![RadEditor screenshot showing editor-unlink.gif](images/editor-unlink.gif)| **Unlink** |Remove Hyperlink - Removes the hyperlink from the selected text or image.|`<tool name="Unlink" shortcut="CTRL+SHIFT+K / CMD+SHIFT+K"/>`|
|![RadEditor screenshot showing editor-symbols.gif](images/editor-symbols.gif)| **InsertSymbol** |Insert Special Character - Inserts a special character (€, ®, ©, ±, etc.)|`<tool name="InsertSymbol" />`|
|![RadEditor screenshot showing editor-customlinks.gif](images/editor-customlinks.gif)| **InsertCustomLink** |Insert Custom Link - Inserts an internal or external link from a predefined list.|`<tool name="InsertCustomLink" shortcut="CTRL+ALT+K / CMD+ALT+K"/>`|
|![RadEditor screenshot showing editor-templatemanager.gif](images/editor-templatemanager.gif)| **TemplateManager** |Choose HTML Template - Applies an HTML template from a predefined list of templates.|`<tool name="TemplateManager" />`|


## Create, Format, Edit: Paragraphs and Lines


|  **Icon**  |  **Tool Name**  |  **Description**  |  **ToolsFile Declaration**  |
| ------ | ------ | ------ | ------ |
|![RadEditor screenshot showing editor-insertparagraph.gif](images/editor-insertparagraph.gif)| **InsertParagraph** |Insert New Paragraph - Inserts a new paragraph.|`<tool name="InsertParagraph" />`|
|![RadEditor screenshot showing editor-paragraph.gif](images/editor-paragraph.gif)| **FormatBlock** |Paragraph Style dropdown button - Applies standard text styles to selected text.|`<tool name="FormatBlock"/>`|
|![RadEditor screenshot showing editor-indent.gif](images/editor-indent.gif)| **Indent** |Indent - Indents paragraphs to the right.|`<tool name="Indent" />`|
|![RadEditor screenshot showing editor-outdent.gif](images/editor-outdent.gif)| **Outdent** |Outdent - Indents paragraphs to the left.|`<tool name="Outdent" />`|
|![RadEditor screenshot showing editor-justifyleft.gif](images/editor-justifyleft.gif)| **JustifyLeft** |Align Left - Aligns the selected paragraph to the left.|`<tool name="JustifyLeft" />`|
|![RadEditor screenshot showing editor-justifycenter.gif](images/editor-justifycenter.gif)| **JustifyCenter** |Center - Aligns the selected paragraph to the center.|`<tool name="JustifyCenter" />`|
|![RadEditor screenshot showing editor-justifyright.gif](images/editor-justifyright.gif)| **JustifyRight** |Align Right - Aligns the selected paragraph to the right.|`<tool name="JustifyRight" />`|
|![RadEditor screenshot showing editor-justifyfull.gif](images/editor-justifyfull.gif)| **JustifyFull** |Justify - Justifies the selected paragraph.|`<tool name="JustifyFull" />`|
|![RadEditor screenshot showing editor-justifynone.gif](images/editor-justifynone.gif)| **JustifyNone** |Justify None - Removes the alignment.|`<tool name="JustifyNone" />`|
|![RadEditor screenshot showing editor-insertunorderedlist.gif](images/editor-insertunorderedlist.gif)| **InsertUnorderedList** |Bulleted List - Creates a bulleted list from the selection.|`<tool name="InsertUnorderedList" />`|
|![RadEditor screenshot showing editor-insertorderedlist.gif](images/editor-insertorderedlist.gif)| **InsertOrderedList** |Numbered List - Creates a numbered list from the selection.|`<tool name="InsertOrderedList" />`|
|![RadEditor screenshot showing editor-inserthorizontalrule.gif](images/editor-inserthorizontalrule.gif)| **InsertHorizontalRule** |Insert Horizontal Line (e.g. Horizontal Ruler) - Inserts a horizontal line at the cursor position.|`<tool name="InsertHorizontalRule" />`|


## Create, Format, Edit: Text, Font and Lists
 

|  **Icon**  |  **Tool Name**  |  **Description**  |  **ToolsFile Declaration**  |
| ------ | ------ | ------ | ------ |
|![RadEditor screenshot showing editor-bold.gif](images/editor-bold.gif)| **Bold** |Bold - Applies bold formatting to the selected text.|`<tool name="Bold" shortcut="CTRL+B / CMD+B"/>`|
|![RadEditor screenshot showing editor-italic.gif](images/editor-italic.gif)| **Italic** |Italic - Applies italic formatting to the selected text.|`<tool name="Italic" shortcut="CTRL+I / CMD+I"/>`|
|![RadEditor screenshot showing editor-underline.gif](images/editor-underline.gif)| **Underline** |Underline - Applies underline formatting to the selected text.|`<tool name="Underline" shortcut="CTRL+U / CMD+U"/>`|
|![RadEditor screenshot showing editor-strikethrough.gif](images/editor-strikethrough.gif)| **StrikeThrough** |Strikethrough - Applies strikethrough formatting to the selected text.|`<tool name="StrikeThrough" />`|
|![RadEditor screenshot showing editor-superscript.gif](images/editor-superscript.gif)| **Superscript** |Superscript - Makes the selected text superscript.|`<tool name="Superscript" />`|
|![RadEditor screenshot showing editor-subscript.gif](images/editor-subscript.gif)| **Subscript** |Subscript - Makes the selected text subscript.|`<tool name="Subscript" />`|
|![RadEditor screenshot showing editor-fontname.gif](images/editor-fontname.gif)| **FontName** |Font Select - Sets the font typeface.|`<tool name="FontName" shortcut="CTRL+SHIFT+F / CMD+SHIFT+F"/>`|
|![RadEditor screenshot showing editor-fontsize.gif](images/editor-fontsize.gif)| **FontSize** |Font Size - Sets the font size.|`<tool name="FontSize"/>`|
|![RadEditor screenshot showing editor-forecolor.gif](images/editor-forecolor.gif)| **ForeColor** |Text Color (foreground) - Changes the foreground color of the selected text.|`<tool name="ForeColor"/>`|
|![RadEditor screenshot showing editor-backcolor.gif](images/editor-backcolor.gif)| **BackColor** |Text Color (background) - Changes the background color of the selected text.|`<tool name="BackColor"/>`|
|![radeditor formatcodeblock png](images/radeditor_formatcodeblock_png.png)| **FormatCodeBlock** |Formats the selected text as a code block.|`<tool name="FormatCodeBlock" />`|
|![RadEditor screenshot showing editor-class.gif](images/editor-class.gif)| **ApplyClass** |Custom Styles - Applies custom, predefined styles to the selected text.|`<tool name="ApplyClass"/>`|
|![RadEditor screenshot showing editor-separator.gif](images/editor-separator.gif)| **EditorSeparator** |Separate the tools icons on the toolbar.|`<tool separator="true" />`|

## Track Changes and Comments

To have the Track Changes tools you should set the `EnableTrackChanges` property to `true`. You can refer to [Track Changes article]({%slug editor/functionality/track-changes-and-comments/track-changes%}). And for Comment tools, set the `EnableComments` property to `true`. You can refer to [Comments article]({%slug editor/functionality/track-changes-and-comments/comments%})

|  **Icon**  |  **Tool Name**  |  **Description**  |  **ToolsFile Declaration**  |
| ------ | ------ | ------ | ------ |
|![RadEditor screenshot showing editor-acceptTrackChange.gif](images/editor-acceptTrackChange.gif)| **AcceptTrackChange** |AcceptTrackChange - Accepts the selected change.|`<tool name="AcceptTrackChange" />`|
|![RadEditor screenshot showing editor-rejectTrackChange.gif](images/editor-rejectTrackChange.gif)| **RejectTrackChange** |RejectTrackChange - Rejects the selected change.|`<tool name="RejectTrackChange" />`|
|![RadEditor screenshot showing editor-acceptAllTrackChanges.gif](images/editor-acceptAllTrackChanges.gif)| **AcceptAllTrackChanges** |AcceptAllTrackChanges - Accepts all changes in the document.|`<tool name="AcceptAllTrackChanges" />`|
|![RadEditor screenshot showing editor-rejectAllTrackChanges.gif](images/editor-rejectAllTrackChanges.gif)| **RejectAllTrackChanges** |RejectAllTrackChanges - Rejects all changes in the document.|`<tool name="RejectAllTrackChanges" />`|
|![RadEditor screenshot showing editor-enableTrackChangesOverride.gif](images/editor-enableTrackChangesOverride.gif)| **EnableTrackChangesOverride** |EnableTrackChangesOverride - Toggles the Track Changes feature.|`<tool name="EnableTrackChangesOverride" />`|
|![RadEditor screenshot showing editor-addComment.gif](images/editor-addComment.gif)| **AddComment** |AddComment - Adds comment on the highlighted text.|`<tool name="AddComment" />`|
|![RadEditor screenshot showing editor-removeComment.gif](images/editor-removeComment.gif)| **RemoveComment** |RemoveComment - Removes the comment under the selected text.|`<tool name="RemoveComment"/>`|
|![RadEditor screenshot showing editor-removeAllComments.gif](images/editor-removeAllComments.gif)| **RemoveAllComments** |RemoveAllComments - Removes all comments in the document.|`<tool name="RemoveAllComments"/>`|


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

## Full Set of Tools Setup

````ASP.NET
        <telerik:RadEditor ID="RadEditor1" runat="server">
            <Tools>
                <telerik:EditorToolGroup>
                    <telerik:EditorTool Name="XhtmlValidator" />
                    <telerik:EditorTool Name="PageProperties" />
                    <telerik:EditorTool Name="StyleBuilder" />
                    <telerik:EditorTool Name="TrackChangesDialog" />
                    <telerik:EditorTool Name="FormatCodeBlock" />
                    <telerik:EditorSeparator></telerik:EditorSeparator>
                    <telerik:EditorTool Name="InsertImage" />
                    <telerik:EditorTool Name="InsertLink" />
                    <telerik:EditorTool Name="InsertTableLight" />
                    <telerik:EditorSeparator></telerik:EditorSeparator>
                    <telerik:EditorTool Name="InsertFormElement" />
                    <telerik:EditorTool Name="InsertFormForm" />
                    <telerik:EditorTool Name="InsertFormButton" />
                    <telerik:EditorTool Name="InsertFormCheckbox" />
                    <telerik:EditorTool Name="InsertFormHidden" />
                    <telerik:EditorTool Name="InsertFormPassword" />
                    <telerik:EditorTool Name="InsertFormRadio" />
                    <telerik:EditorTool Name="InsertFormReset" />
                    <telerik:EditorTool Name="InsertFormSelect" />
                    <telerik:EditorTool Name="InsertFormSubmit" />
                    <telerik:EditorTool Name="InsertFormTextarea" />
                    <telerik:EditorTool Name="InsertFormText" />
                    <telerik:EditorSeparator></telerik:EditorSeparator>
                    <telerik:EditorTool Name="StripAll" />
                    <telerik:EditorTool Name="StripCss" />
                    <telerik:EditorTool Name="StripFont" />
                    <telerik:EditorTool Name="StripSpan" />
                    <telerik:EditorTool Name="StripWord" />
                    <telerik:EditorTool Name="FormatStripper" />
                </telerik:EditorToolGroup>
                <telerik:EditorToolGroup>
                    <telerik:EditorTool Name="AjaxSpellCheck" />
                    <telerik:EditorTool Name="ImageManager" ShortCut="CTRL+M" />
                    <telerik:EditorTool Name="SetImageProperties" />
                    <telerik:EditorTool Name="ImageMapDialog" />
                    <telerik:EditorSeparator></telerik:EditorSeparator>
                    <telerik:EditorTool Name="FlashManager" />
                    <telerik:EditorTool Name="MediaManager" />
                    <telerik:EditorTool Name="InsertExternalVideo" />
                    <telerik:EditorSeparator></telerik:EditorSeparator>
                    <telerik:EditorTool Name="DocumentManager" />
                    <telerik:EditorTool Name="TemplateManager" />
                    <telerik:EditorTool Name="SilverlightManager" />
                    <telerik:EditorSeparator></telerik:EditorSeparator>
                    <telerik:EditorTool Name="InsertTable" />
                    <telerik:EditorTool Name="InsertRowAbove" />
                    <telerik:EditorTool Name="InsertRowBelow" />
                    <telerik:EditorTool Name="DeleteRow" />
                    <telerik:EditorTool Name="InsertColumnLeft" />
                    <telerik:EditorTool Name="InsertColumnRight" />
                    <telerik:EditorTool Name="DeleteColumn" />
                    <telerik:EditorSeparator></telerik:EditorSeparator>
                    <telerik:EditorTool Name="MergeColumns" />
                    <telerik:EditorTool Name="MergeRows" />
                    <telerik:EditorSeparator></telerik:EditorSeparator>
                    <telerik:EditorTool Name="SplitCell" />
                    <telerik:EditorTool Name="SplitCellHorizontal" />
                    <telerik:EditorTool Name="DeleteCell" />
                    <telerik:EditorTool Name="SetCellProperties" />
                    <telerik:EditorTool Name="SetTableProperties" />
                    <telerik:EditorSeparator></telerik:EditorSeparator>
                    <telerik:EditorTool Name="InsertSymbol" />
                </telerik:EditorToolGroup>
                <telerik:EditorToolGroup>
                    <telerik:EditorTool Name="Undo" />
                    <telerik:EditorTool Name="Redo" />
                    <telerik:EditorSeparator></telerik:EditorSeparator>
                    <telerik:EditorTool Name="Cut" />
                    <telerik:EditorTool Name="Copy" />
                    <telerik:EditorTool Name="Paste" ShortCut="CTRL+!" />
                    <telerik:EditorTool Name="PasteMarkdown" />
                    <telerik:EditorSeparator></telerik:EditorSeparator>
                    <telerik:EditorTool Name="PasteFromWord" />
                    <telerik:EditorTool Name="PasteFromWordNoFontsNoSizes" />
                    <telerik:EditorTool Name="PastePlainText" />
                    <telerik:EditorTool Name="PasteAsHtml" />
                    <telerik:EditorTool Name="PasteHtml" />
                    <telerik:EditorSeparator></telerik:EditorSeparator>
                    <telerik:EditorTool Name="Print" />
                    <telerik:EditorTool Name="FindAndReplace" />
                    <telerik:EditorTool Name="SelectAll" />
                    <telerik:EditorSeparator></telerik:EditorSeparator>
                    <telerik:EditorTool Name="InsertGroupbox" />
                    <telerik:EditorTool Name="InsertParagraph" />
                    <telerik:EditorTool Name="InsertHorizontalRule" />
                    <telerik:EditorTool Name="InsertSnippet" />
                    <telerik:EditorSeparator></telerik:EditorSeparator>
                    <telerik:EditorTool Name="InsertDate" />
                    <telerik:EditorTool Name="InsertTime" />
                    <telerik:EditorSeparator></telerik:EditorSeparator>
                    <telerik:EditorTool Name="AboutDialog" />
                    <telerik:EditorTool Name="Help" />
                    <telerik:EditorTool Name="ToggleScreenMode" />
                </telerik:EditorToolGroup>
                <telerik:EditorToolGroup>
                    <telerik:EditorTool Name="Bold" />
                    <telerik:EditorTool Name="Italic" />
                    <telerik:EditorTool Name="Underline" />
                    <telerik:EditorTool Name="StrikeThrough" />
                    <telerik:EditorTool Name="ForeColor" />
                    <telerik:EditorTool Name="BackColor" />
                    <telerik:EditorTool Name="FormatPainter" />
                    <telerik:EditorSeparator></telerik:EditorSeparator>
                    <telerik:EditorTool Name="JustifyLeft" />
                    <telerik:EditorTool Name="JustifyCenter" />
                    <telerik:EditorTool Name="JustifyRight" />
                    <telerik:EditorTool Name="JustifyFull" />
                    <telerik:EditorTool Name="JustifyNone" />
                    <telerik:EditorSeparator></telerik:EditorSeparator>
                    <telerik:EditorTool Name="Superscript" />
                    <telerik:EditorTool Name="Subscript" />
                    <telerik:EditorSeparator></telerik:EditorSeparator>
                    <telerik:EditorTool Name="ConvertToLower" />
                    <telerik:EditorTool Name="ConvertToUpper" />
                    <telerik:EditorTool Name="Indent" />
                    <telerik:EditorTool Name="Outdent" />
                    <telerik:EditorTool Name="InsertOrderedList" />
                    <telerik:EditorTool Name="InsertUnorderedList" />
                    <telerik:EditorTool Name="AbsolutePosition" />
                    <telerik:EditorTool Name="LinkManager" />
                    <telerik:EditorTool Name="Unlink" />
                    <telerik:EditorTool Name="SetLinkProperties" />
                    <telerik:EditorTool Name="ToggleTableBorder" />
                </telerik:EditorToolGroup>
                <telerik:EditorToolGroup>
                    <telerik:EditorTool Name="FontName" />
                    <telerik:EditorTool Name="FontSize" />
                    <telerik:EditorTool Name="RealFontSize" />
                    <telerik:EditorTool Name="ApplyClass" />
                    <telerik:EditorTool Name="InsertCustomLink" />
                    <telerik:EditorTool Name="FormatBlock" />
                    <telerik:EditorTool Name="FormatSets" />
                    <telerik:EditorTool Name="Zoom" />
                </telerik:EditorToolGroup>
            </Tools>
        </telerik:RadEditor>
````

## See Also

 * [Set Properties]({%slug editor/getting-started/set-properties%})

 * [Default ToolsFile.xml file of RadEditor for ASP.NET AJAX](https://www.telerik.com/support/kb/aspnet-ajax/editor/details/default-toolsfile-xml-file-of-radeditor-for-asp-net-ajax)

 * [Dialogs live example](https://demos.telerik.com/aspnet-ajax/editor/examples/built-in-dialogs/defaultcs.aspx)

 * [RadEditor End-User Manual](https://www.telerik.com/documents/RadEditorAjaxEndUserManual.pdf)

 * [Phone Layout of RadEditor]({%slug editor/mobile-support/phone-layout/overview%})

 * [Phone Layout Getting Started]({%slug editor/mobile-support/phone-layout/getting-started%})

 * [Phone Layout Elements Structure]({%slug editor/mobile-support/phone-layout/elements-structure%})
