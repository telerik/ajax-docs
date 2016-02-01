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

This article shows how you can configure and fine-tune the **RadEditor** tools by using an XML file:

* [ToolsFile XML structure](#toosfile-xml-structure)

* [Adding Tools](#adding-tools)
	* [Tools Collection](#tools-collection--toolsandheadertools)
	* [Tools Element](#tools-element---tools)
	* [Tool Element](#tool-element---tool)
		* [Example 1: Adding a plain Bold tool to the toolgroup.](#example-1)
		* [Example 2: Assigning a keyboard shortcut for the Bold tool.](#example-2)
		* [Example 3: Adding header tools.](#example-3)
	
* [Configuring Various Tools](#configuring-various-tools)

## ToosFile XML structure

The **ToolsFile** must have a **valid** XML structure as shown below:

````XML
<root>
  <!-- The Modules collection -->
  <modules>
    <!-- Adding Module instances inside -->
    <module />
  </modules>
  <!-- The HeaderTools collection -->
  <headertools>
    <!-- Adding header tool instances -->
    <tool />
  </headertools>
  <!-- Adding ToolGrpoup collections to the Tools collection -->
  <tools>
    <!-- Adding tool instances -->
    <tool />
  </tools>
  <!-- The Links collection -->
  <links>
    <!-- Adding a link instance -->
    <link>
      <!-- Adding a nested link instance -->
      <link />
    </link>
  </links>
  <!-- The Snippets collection -->
  <snippets>
    <!-- Adding snippet instance -->
    <snippet>
      <!-- HTML code -->
    </snippet>
  </snippets>
  <!-- The Symbols collection -->
  <symbols>
    <!-- Adding a symbol instance -->
    <symbol />
  </symbols>
  <!-- The FontNames collection-->
  <fontNames>
    <!-- Adding a font instance -->
    <item />
  </fontNames>
  <!-- The Colors colleciton -->
  <colors>
    <!-- Adding a color instance -->
    <color />
  </colors>
  <!-- The CssClasses collection -->
  <classes>
    <!-- Adding a class instance -->
    <class />
  </classes>
  <!-- The Paragraph collection -->
  <paragraphs>
    <!-- Adding a paragraph instance -->
    <paragraph />
  </paragraphs>
  <!-- The Languages collection -->
  <languages>
    <!-- Adding a language instance -->
    <language />
  </languages>
</root>
````

## Adding Tools

### Tools Collection — &lt;tools&gt;&nbsp;and&nbsp;&lt;headertools&gt;

>note **HeaderTools** collection is introduced with the release of the [Phone Layout of RadEditor]({%slug editor/mobile-support/phone-layout/overview%}). It is applicable only if **RadEditor** is rendered in [Mobile rendering]({%slug editor/mobile-support/render-modes%}). 

The `headertools` element has no attributes. You can see how it can be configured and populated in the [Phone Layout Toolbar Configuration]({%slug editor/mobile-support/phone-layout/toolbar-configuration%}).


### Tools Element - `<tools>`

>caption Attributes for the `<tools>` element.

|Attribute|Description|
| ------ | ------ |
| **name** |This string will identify the toolbar. This is the rendered name of the tool group when a RibbonBar is used.|
| **tab** *|This string will set a name to the **Tab** in the **ToolZone** _([Phone Layout Toolbar Configuration]({%slug editor/mobile-support/phone-layout/toolbar-configuration%}))_.|
| **context** *|Configures the contextual behavior of a **Tab** _([Phone Layout Toolbar Configuration]({%slug editor/mobile-support/phone-layout/toolbar-configuration%}))_.|

&lowast; These attributes are related to [Phone Layout]({%slug editor/mobile-support/phone-layout/overview%}) configuration and are applicable only with [Mobile rendering]({%slug editor/mobile-support/render-modes%}).

### Tool Element - `<tool>`

>caption Attributes for the `<tool>` element.

|Attribute|Description|
| ------ | ------ |
| **name** *(required)*|This string will identify the tool.|
|**shortcut** |The key combination for the specific tool: `<tool name="LinkManager"  />` or `<tool name="TemplateManager" shortcut="Ctrl+Shift+Alt+T" />`|
|**showtext** |Specifies whether to display the button name next to its icon `<tool name="ImageManager" shortcut="Ctrl+G" showtext="true" />`|
|**showicon** |Specifies whether to display the tools icon or not. Default value is true. `<tool name="ImageManager" shortcut="Ctrl+G" showicon="false" showtext="true" />`|
|**separator**|Indicates whether a separator should appear at the current position. Possible values are boolean true or false, but if you do not want a separator	you simply should omit this property. When set to true it does not require the Name attribute to be set as well.|
| **position** *|**Applicable only when tool is added to the HeaderTools collection**. Defines whether the tool to be added to the left or the right tool-group _([Phone Layout Toolbar Configuration]({%slug editor/mobile-support/phone-layout/toolbar-configuration%}))_.|

&lowast; These attributes are related to [Phone Layout]({%slug editor/mobile-support/phone-layout/overview%}) configuration and are applicable only with [Mobile rendering]({%slug editor/mobile-support/render-modes%}).

<a name="example-1"/>
>caption Example 1: Adding a plain Bold tool to the toolgroup.

````XML
<tools>
	<tool name="Bold" />
</tools>
````

<a name="example-2"/>
>caption Example 2: Assigning a keyboard shortcut for the Bold tool.

````XML
<tools>
	<tool name="Bold" shortcut="Ctrl+B" />
</tools>
````

<a name="example-3"/>
>caption Example 3: Adding header tools.

````XML
<headertools>
	<tool name="Undo"/>
	<tool name="Redo"/>
	<tool name="MobileEdit" Position="Right"/>
	<tool name="ToggleScreenMode" Position="Right"/>
</headertools>
````

You can find a list of all available tools in the [Toolbars Overview]({%slug editor/functionality/toolbars/overview%}#radeditor-toolset-reference) article.

## Configuring Various Tools

### Modules

>caption Attributes for the `<module>` element.

|Attribute|Description|
| ------ | ------ |
| **name** *(required)*|The friendly name of the module. When in floating mode the name will appear in the tool's titlebar.|
|**enabled**|Indicates whether the **Module** to be enabled or not.|
| **visible** |(Indicates whether the module should appear in the toolbar or not. This module will be available client-side - the property defines only the visibility of the module. )|

>caption Example 4: Configuring Modules

````XML
<modules>
	<module name="RadEditorStatistics" enabled="true" visible="true" />
	<module name="RadEditorDomInspector" enabled="true" visible="true" />
	<module name="RadEditorNodeInspector" enabled="true" visible="true" />
	<module name="RadEditorHtmlInspector" enabled="false" visible="false" />
</modules>
````

### Links

>caption Attributes for the `<link>` element.

|Attribute|Description|
| ------ | ------ |
| **name** *(required)*|Link/Category Name/Alias|
| **href** |URL of the link/category|
| **target** |The target window of the link|
| **tooltip** |The tooltip for the link|


>caption Example 5: Configuring Links

````XML
<links>
	<link name="Telerik" href="http://www.telerik.com">
		<link name="Products" href="http://www.telerik.com/products" />
		<link name="Purchase" href="http://www.telerik.com/purchase" />
	</link>
</links>
````

### Symbols

>caption Attributes for the `<symbol>` element.

|Attribute|Description|
| ------ | ------ |
| **value** *(required)*|The symbol to be displayed|

>caption Example 6: Configuring Symbols

````XML
 <symbols>
   <symbol value="\u20AC" />
 </symbols>
````

### Fonts

>caption Attributes for the `<font>` element.

|Attribute|Description|
| ------ | ------ |
| **name** *(required)*|Font Name|

>caption Example 7: Configuring Fonts

````XML
<fontNames>    
    <item name="Arial" />     
</fontNames>
````

### CssClasses collection

>caption Attributes for the `<class>` element.

|Attribute|Description|
| ------ | ------ |
| **name** *(required)*|Class Alias|
| **value** *(required)*|Class Name|

>caption Example 8: Configuring CssClasses collection

````XML
<classes>    
    <class name="Clear Class" value="" />    
    <class name="Links Class" value="a.link" />
</classes>
````

### Paragraphs

>caption Attributes for the `<paragraph>` element.

|Attribute|Description|
| ------ | ------ |
| **name** *(required)*|Paragraph Alias|
| **value** *(required)*|Paragraph Name|

>caption Example 9: Configuring Paragraphs

````XML
<paragraphs>
	<paragraph name="Normal" value="<p>" />
	<paragraph name="<H1>Heading 1</H1>" value="<H1>" />
</paragraphs>
````

### Colors

>caption Attributes for the `<color>` element.

|Attribute|Description|
| ------ | ------ |
| **value** *(required)*|Hex value of the color|

>caption Example 10: Configuring Colors

````XML
<colors>    
	<color value="#FF00EE" />     
</colors>
````
  
### Snippets

>caption Attributes for the `<snippet>` element.

|Attribute|Description|
| ------ | ------ |
| **name** *(required)*|Snippet Alias|

>caption Example 11: Configuring Snippets

````XML
<snippets>     
    <snippet name="Signature">      
        <![CDATA[         
            <strong>John Smith</strong>
            <br>Sales Manager<br>         
            ...         
            ************************************************      
         //]]>  
    </snippet>
</snippets>
````

### Languages

>caption Attributes for the `<language>` element.

|Attribute|Description|
| ------ | ------ |
| **code** *(required)*|Language code|
| **title** *(required)*|Language Title|

>caption Example 12: Configuring Languages

````XML
<languages>
  <langauge code="en-US" title="English" />
  <langauge code="fr-FR" title="French" />
</languages>
````

### Context Menus

The **contextMenus** tag in the Tools file allows you to change the default or specify custom context menus for different HTML elements.

>caption Attributes for the `<contextMenu>` element.

|Attribute|Description|
| ------ | ------ |
| **forElement** *(required)*|The HTML element that will call this menu.|
| **enabled** *(required)*|Defines if this context menu is switched.|

>caption Example 13: Configuring Context Menus

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

>caption Example 14: Using different ToolsFile xml files with multiple RadEditor on the page.

````ASP.NET
<telerik:RadEditor ToolsFile="~/ToolsFile1.xml" ID="RadEditor2" runat="server"></telerik:RadEditor>
<telerik:RadEditor ToolsFile="~/ToolsFile2.xml" ID="RadEditor3" runat="server"></telerik:RadEditor>
<telerik:RadEditor ToolsFile="~/ToolsFile3.xml" ID="RadEditor4" runat="server"></telerik:RadEditor>
````

## See Also

 * [Default Configuration](http://demos.telerik.com/aspnet/prometheus/Editor/Examples/Default/DefaultCS.aspx)
 * [Phone Layout Toolbar Configuration]({%slug editor/mobile-support/phone-layout/toolbar-configuration%})
