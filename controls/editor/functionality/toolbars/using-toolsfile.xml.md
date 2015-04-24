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



## 

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



**Tools And Modules Attributes:**


>caption  

|  **<tool>** element valid attributes: |  |
| ------ | ------ |
| **name** (required):|


>caption 


|AboutDialog|FindAndReplace|Indent|InsertTime|Outdent|StrikeThrough|Unlink|
|AbsolutePosition|FlashManager|InsertHorizontalRule|InsertUnorderedList|Paste|Subscript|Zoom|
|ApplyClass|FontName|InsertCustomLink|Italic|PasteAsHtml|Superscript|XhtmlValidator|
|BackColor|FontSize|InsertDate|JustifyCenter|PasteFromWord|TemplateManager||
|Bold|ForeColor|InsertFormElement|JustifyFull|PasteFromWordNoFontsNoSizes|ToggleDocking|FormatCodeBlock|
|Copy|FormatBlock|InsertOrderedList|JustifyLeft|PastePlainText|ToggleEditMode (This tool is designed to work only in[Inline editing mode]({%slug editor/functionality/editor-views-and-modes/inline-editing-mode%}))||
|Custom|FormatStripper|InsertParagraph|JustifyRight|Print|ToggleScreenMode||
|Cut|Help|InsertSnippet|LinkManager|Redo|ToggleTableBorder||
|DecreaseSize|ImageManager|InsertSymbol|MediaManager|RepeatLastCommand|Underline||
|DocumentManager|IncreaseSize|InsertTable|ModuleManager|AjaxSpellCheck|Undo|||
| **shortcut** (not required):|The key combination for the specific tool:

````XML
		<tool name="LinkManager" shortcut="Ctrl+L" />
		<tool name="TemplateManager" shortcut="Ctrl+Shift+Alt+T" />
````

|
| **showtext** (not required)|Specifies whether to display the button name next to its icon<tool name="ImageManager" shortcut="Ctrl+G" **showtext** =" **true** " />|
| **showicon** (not required)|Specifies whether to display the tools icon or not. Default value is true.

````XML
		<tool name="ImageManager" shortcut="Ctrl+G" showicon="false" showtext="true" />
````

|
| **separator** (not required)|Indicates whether a separator should appear at the current position. Possible values are boolean true or false, but if you do not want a separator	you simply should omit this property. When set to true it does not require the Name attribute to be set as well.|




>caption  

|  **<tools>** element valid attributes: |  |
| ------ | ------ |
| **name** (required):|This string will identify the toolbar.|




>caption  

|  **<module>** element valid attributes: *(module elements should appear as child elements of an element "modules")*  |  |
| ------ | ------ |
| **name** (required):|The friendly name of the module. When in floating mode the name will appear in the tool's titlebar.|
| **visible** (not required):|(Indicates whether the module should appear in the toolbar or not. This module will be available client-side - the property defines only the visibility of the module. )|




>caption  

|  **<link>** element valid attributes: *(link elements should appear as child elements of an element "links")*  |  |
| ------ | ------ |
| **name** (required):|Link/Category Name/Alias|
| **href** (not required):|URL of the link/category|
| **target** (not required):|The target window of the link|
| **tooltip** (not required):|The tooltip for the link|


>caption  

|  **<s**  **ymbol>** element valid attributes: *(symbol elements should appear as child elements of an element "symbols")*  |  |
| ------ | ------ |
|value (required):|The symbol to be displayed|


>caption  

|  **<font>** element valid attributes: *(font elements should appear as child elements of a tool element with "name" attribute set to "fontNames")*  |  |
| ------ | ------ |
| **name** (required):|Font Name|




>caption  

|  **<class>** element valid attributes: *(class elements should appear as child elements of an element "classes")*  |  |
| ------ | ------ |
| **name** (required):|Class Alias|
| **value** (required):|Class Name|




>caption  

|  **<paragraph>** element valid attributes: *(paragraph elements should appear as child elements of an element "paragraphs")*  |  |
| ------ | ------ |
| **name** (required):|Paragraph Alias|
| **value** (required):|Paragraph Name|




>caption  

|  **<color>** element valid attributes: *(color elements should appear as child elements of an element "colors")*  |  |
| ------ | ------ |
| **value** (not required):|Hex value of the color|


>caption  

|  **<snippet>** element valid attributes: *(snippet elements should appear as child elements of an element "snippets")*  |  |
| ------ | ------ |
| **name** (required):|Snippet Alias|




>caption  

|  **<language>** element valid attributes: *(language elements should appear as child elements of an element "Languages")*  |  |
| ------ | ------ |
| **code** (required):|Language code|
| **title** (required):|Language Title|



The **contextMenus** tag in the Tools file allows you to change the default or specify custom context menus for different HTML elements.




>caption  

|  **<contextMenu**  **>** element valid attributes: *(contextMenu elements should appear as child elements of an element "contextMenus")*  |  |
| ------ | ------ |
| **forElement** (required):|The HTML element that will call this menu.|
| **enabled** (required):|Defines if this context menu is switched.|

The example below shows how to attach custom context menus for <A> and <P> elements.

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

````ASPNET
		<telerik:radeditor toolsfile="~/ToolsFile1.xml" id="RadEditor1" runat="server"></telerik:radeditor>
		<telerik:radeditor toolsfile="~/ToolsFile2.xml" id="RadEditor2" runat="server"></telerik:radeditor>
		<telerik:radeditor toolsfile="~/ToolsFile3.xml" id="RadEditor3" runat="server"></telerik:radeditor>
````



# See Also

 * [Default Configuration](http://demos.telerik.com/aspnet/prometheus/Editor/Examples/Default/DefaultCS.aspx)
