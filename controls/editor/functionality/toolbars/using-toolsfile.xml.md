---
title: Using ToolsFile.xml
page_title: Using ToolsFile.xml | UI for ASP.NET AJAX Documentation
description: Using ToolsFile.xml
slug: editor/functionality/toolbars/using-toolsfile.xml
tags: using,toolsfile.xml
published: True
position: 2
---

# Using ToolsFile.xml



## 

RadEditor for ASP.NET AJAX can populate its toolbar tools and modules through a ToolsFile.xml. The __ToolsFile__ must have a __valid__ XML structure as shown below:

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



__Tools And Modules Attributes:__


>caption  

|  __<tool>__ element valid attributes: |  |
| ------ | ------ |
| __name__ (required):|


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
| __shortcut__ (not required):|The key combination for the specific tool:

````XML
		<tool name="LinkManager" shortcut="Ctrl+L" />
		<tool name="TemplateManager" shortcut="Ctrl+Shift+Alt+T" />
````

|
| __showtext__ (not required)|Specifies whether to display the button name next to its icon<tool name="ImageManager" shortcut="Ctrl+G" __showtext__ =" __true__ " />|
| __showicon__ (not required)|Specifies whether to display the tools icon or not. Default value is true.

````XML
		<tool name="ImageManager" shortcut="Ctrl+G" showicon="false" showtext="true" />
````

|
| __separator__ (not required)|Indicates whether a separator should appear at the current position. Possible values are boolean true or false, but if you do not want a separator	you simply should omit this property. When set to true it does not require the Name attribute to be set as well.|




>caption  

|  __<tools>__ element valid attributes: |  |
| ------ | ------ |
| __name__ (required):|This string will identify the toolbar.|




>caption  

|  __<module>__ element valid attributes: *(module elements should appear as child elements of an element "modules")*  |  |
| ------ | ------ |
| __name__ (required):|The friendly name of the module. When in floating mode the name will appear in the tool's titlebar.|
| __visible__ (not required):|(Indicates whether the module should appear in the toolbar or not. This module will be available client-side - the property defines only the visibility of the module. )|




>caption  

|  __<link>__ element valid attributes: *(link elements should appear as child elements of an element "links")*  |  |
| ------ | ------ |
| __name__ (required):|Link/Category Name/Alias|
| __href__ (not required):|URL of the link/category|
| __target__ (not required):|The target window of the link|
| __tooltip__ (not required):|The tooltip for the link|


>caption  

|  __<s__  __ymbol>__ element valid attributes: *(symbol elements should appear as child elements of an element "symbols")*  |  |
| ------ | ------ |
|value (required):|The symbol to be displayed|


>caption  

|  __<font>__ element valid attributes: *(font elements should appear as child elements of a tool element with "name" attribute set to "fontNames")*  |  |
| ------ | ------ |
| __name__ (required):|Font Name|




>caption  

|  __<class>__ element valid attributes: *(class elements should appear as child elements of an element "classes")*  |  |
| ------ | ------ |
| __name__ (required):|Class Alias|
| __value__ (required):|Class Name|




>caption  

|  __<paragraph>__ element valid attributes: *(paragraph elements should appear as child elements of an element "paragraphs")*  |  |
| ------ | ------ |
| __name__ (required):|Paragraph Alias|
| __value__ (required):|Paragraph Name|




>caption  

|  __<color>__ element valid attributes: *(color elements should appear as child elements of an element "colors")*  |  |
| ------ | ------ |
| __value__ (not required):|Hex value of the color|


>caption  

|  __<snippet>__ element valid attributes: *(snippet elements should appear as child elements of an element "snippets")*  |  |
| ------ | ------ |
| __name__ (required):|Snippet Alias|




>caption  

|  __<language>__ element valid attributes: *(language elements should appear as child elements of an element "Languages")*  |  |
| ------ | ------ |
| __code__ (required):|Language code|
| __title__ (required):|Language Title|



The __contextMenus__ tag in the Tools file allows you to change the default or specify custom context menus for different HTML elements.




>caption  

|  __<contextMenu__  __>__ element valid attributes: *(contextMenu elements should appear as child elements of an element "contextMenus")*  |  |
| ------ | ------ |
| __forElement__ (required):|The HTML element that will call this menu.|
| __enabled__ (required):|Defines if this context menu is switched.|

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





By editing the editor's ToolsFile.xml file you easily customize the editor's toolbar and add or remove toolbar buttons. In case you have multiple editor's on the same page, you can provide them with different set of tools by setting __ToolsFile__ property to point to different ToolsFile.xml files:

````ASPNET
		<telerik:radeditor toolsfile="~/ToolsFile1.xml" id="RadEditor1" runat="server"></telerik:radeditor>
		<telerik:radeditor toolsfile="~/ToolsFile2.xml" id="RadEditor2" runat="server"></telerik:radeditor>
		<telerik:radeditor toolsfile="~/ToolsFile3.xml" id="RadEditor3" runat="server"></telerik:radeditor>
````



# See Also

 * [Default Configuration](http://demos.telerik.com/aspnet/prometheus/Editor/Examples/Default/DefaultCS.aspx)
