---
title: Using ToolsFile.xml
page_title: Using ToolsFile.xml | RadEditor for ASP.NET AJAX Documentation
description: Using ToolsFile.xml
slug: editor/functionality/toolbars/using-toolsfile.xml
tags: using,toolsfile.xml
published: True
position: 2
---

# Using ToolsFile.xml

RadEditor for ASP.NET AJAX can populate its toolbar tools and modules through a ToolsFile.xml. The **ToolsFile** must have a **valid** XML structure as shown below:

You can also create your own ToolsFile.xml using the provided information below:

````XML
<root>
	 <modules>
			 <module />
			 <module />
	 </modules>
	 <tools>
			 <tool />
			 <tool />
			 ...
	</tools>
	<tools>
			 <tool />
			 ...
	</tools>
	 ...
	<links>
			<link />
			<link />
	</links>
	<colors>
			<color />
			<color />
	</colors>
</root>
````

## Adding Tools

### Tools Collection - `<tools>`

>caption Attributes for the `<tools>` element.

|Attribute|Description|
| ------ | ------ |
| **name** |This string will identify the toolbar.|

### Tool Element - `<tool>`

>caption Attributes for the `<tool>` element.

|Attribute|Description|
| ------ | ------ |
| **name** *(required)*|This string will identify the tool.|
|**shortcut** |The key combination for the specific tool: `<tool name="LinkManager"  />` or `<tool name="TemplateManager" shortcut="Ctrl+Shift+Alt+T" />`|
|**showtext** |Specifies whether to display the button name next to its icon `<tool name="ImageManager" shortcut="Ctrl+G" showtext="true" />`|
|**showicon** |Specifies whether to display the tools icon or not. Default value is true. `<tool name="ImageManager" shortcut="Ctrl+G" showicon="false" showtext="true" />`|
|**separator**|Indicates whether a separator should appear at the current position. Possible values are boolean true or false, but if you do not want a separator	you simply should omit this property. When set to true it does not require the Name attribute to be set as well.|

>caption Example 2: Adding a plain Bold tool to the toolgroup.

````XML
<tools>
	<tool name="Bold" />
</tools>
````

>caption Example 1: Assigning a keyboard shortcut for the Bold tool.

````XML
<tools>
	<tool name="Bold" shortcut="Ctrl+B" />
</tools>
````

>caption Available built-in tools 

|Tool Names| | | | | | |
|------|------|------|------|------|------|------|
|AboutDialog|FindAndReplace|Indent|InsertTime|Outdent|StrikeThrough|Unlink|
|AbsolutePosition|FlashManager|InsertHorizontalRule|InsertUnorderedList|Paste|Subscript|Zoom|
|ApplyClass|FontName|InsertCustomLink|Italic|PasteAsHtml|Superscript|XhtmlValidator|
|BackColor|FontSize|InsertDate|JustifyCenter|PasteFromWord|TemplateManager||
|Bold|ForeColor|InsertFormElement|JustifyFull|PasteFromWordNoFontsNoSizes|ToggleDocking|FormatCodeBlock|
|Copy|FormatBlock|InsertOrderedList|JustifyLeft|PastePlainText|ToggleEditMode (This tool is designed to work only in [Inline editing mode]({%slug editor/functionality/editor-views-and-modes/inline-editing-mode%}))||
|Custom|FormatStripper|InsertParagraph|JustifyRight|Print|ToggleScreenMode||
|Cut|Help|InsertSnippet|LinkManager|Redo|ToggleTableBorder||
|DecreaseSize|ImageManager|InsertSymbol|MediaManager|RepeatLastCommand|Underline||
|DocumentManager|IncreaseSize|InsertTable|ModuleManager|AjaxSpellCheck|Undo|||

## Configuring Modules

>caption Attributes for the `<module>` element.

|Attribute|Description|
| ------ | ------ |
| **name** *(required)*|The friendly name of the module. When in floating mode the name will appear in the tool's titlebar.|
| **visible** |(Indicates whether the module should appear in the toolbar or not. This module will be available client-side - the property defines only the visibility of the module. )|

## Configuring Links

>caption Attributes for the `<link>` element.

|Attribute|Description|
| ------ | ------ |
| **name** *(required)*|Link/Category Name/Alias|
| **href** |URL of the link/category|
| **target** |The target window of the link|
| **tooltip** |The tooltip for the link|

## Configuring Symbols

>caption Attributes for the `<symbol>` element.

|Attribute|Description|
| ------ | ------ |
| **value** *(required)*|The symbol to be displayed|

## Configuring Fonts

>caption Attributes for the `<font>` element.

|Attribute|Description|
| ------ | ------ |
| **name** *(required)*|Font Name|

## Configuring CssClasses collection

>caption Attributes for the `<class>` element.

|Attribute|Description|
| ------ | ------ |
| **name** *(required)*|Class Alias|
| **value** *(required)*|Class Name|

## Configuring Paragraphs

>caption Attributes for the `<paragraph>` element.

|Attribute|Description|
| ------ | ------ |
| **name** *(required)*|Paragraph Alias|
| **value** *(required)*|Paragraph Name|

## Configuring Colors

>caption Attributes for the `<color>` element.

|Attribute|Description|
| ------ | ------ |
| **value** *(required)*|Hex value of the color|
  
## Configuring Snippets

>caption Attributes for the `<snippet>` element.

|Attribute|Description|
| ------ | ------ |
| **name** *(required)*|Snippet Alias|

## Configuring Languages

>caption Attributes for the `<language>` element.

|Attribute|Description|
| ------ | ------ |
| **code** *(required)*|Language code|
| **title** *(required)*|Language Title|

## Configuring Context Menus

The **contextMenus** tag in the Tools file allows you to change the default or specify custom context menus for different HTML elements.

>caption Attributes for the `<contextMenu>` element.

|Attribute|Description|
| ------ | ------ |
| **forElement** *(required)*|The HTML element that will call this menu.|
| **enabled** *(required)*|Defines if this context menu is switched.|

The example below shows how to attach custom context menus for `<A>` and `<P>` elements.

````XML
<contextmenus>
   <contextMenu forElement="A" enabled="false">
   </contextMenu>
   <contextMenu forElement="P">
	   <tool name="JustifyLeft" />
	   <tool name="JustifyCenter" />
	   <tool name="JustifyRight" />
	   <tool name="JustifyFull" />
   </contextMenu>
</contextmenus>
````


By editing the editor's ToolsFile.xml file you easily customize the editor's toolbar and add or remove toolbar buttons. In case you have multiple editor's on the same page, you can provide them with different set of tools by setting **ToolsFile** property to point to different ToolsFile.xml files:

````ASP.NET
<telerik:radeditor toolsfile="~/ToolsFile1.xml" id="RadEditor1" runat="server"></telerik:radeditor>
<telerik:radeditor toolsfile="~/ToolsFile2.xml" id="RadEditor2" runat="server"></telerik:radeditor>
<telerik:radeditor toolsfile="~/ToolsFile3.xml" id="RadEditor3" runat="server"></telerik:radeditor>
````

## See Also

 * [Default Configuration](http://demos.telerik.com/aspnet/prometheus/Editor/Examples/Default/DefaultCS.aspx)
