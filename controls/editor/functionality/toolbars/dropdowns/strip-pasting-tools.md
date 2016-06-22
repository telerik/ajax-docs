---
title: Strip Pasting Tools
page_title: Strip Pasting Tools | RadEditor for ASP.NET AJAX Documentation
description: Strip Pasting Tools
slug: editor/functionality/toolbars/dropdowns/strip-pasting-tools
tags: strip,pasting,tools
published: True
position: 14
---

# Strip Pasting Tools

This article provides information about the built-in **Paste Strip** dropdown, and the Paste Strip tools exposed inside.

* [Overview](#overview)

* [Adding Paste Strip Tool to a Custom Tool-set](#adding-paste-strip-tool-to-a-custom-tool-set)

## Overview

The **Paste Strip** tools enable the end-user to strip the pasting of the content in the editor. The built-in **Paste Strip** dropdown exposes a list of **Paste Strip** tools for the user to choose from (**Figure 1**). The following list specifies each tool’s purpose:

* **Paste**—performs a clipboard paste operation.

* **[Paste from Word]({%slug editor/managing-content/pasting-content/clean-ms-word-formatting-%})**—pastes the content and strips unnecessary XML, HTML and comment element.

* **Paste from Word, strip font**—performs the same operation as Paste from Word tool and additionally removes any font-related formatting (e.g., font size, color, etc.).

* **Paste Plain Text**—pastes the copied data as plain text, HTML tags are stripped down, and all styles are removed.

* **Paste as Html**—pastes the copied content as HTML markup.

* **Paste Html**—enables the user to either type or paste HTML markup and insert it into the content. This tool opens a dialog for the content to be pasted.

>caption Figure 1: Paste from word via the Paste Strip tool.

![editor-paste-strip](images/editor-paste-strip.png)

## Adding Paste Strip Tool to a Custom Tool-set

In a custom collection of tools, the build-in **Paste Strip** dropdown can be added by [adding a plain tool]({%slug editor/functionality/toolbars/overview%}) with a name set to	**PasteStrip** (**Example 1**).

>caption Example 1: Adding the PasteStrip dropdown to a tools collection.

````ASP.NET
//Defining PasteStrip with Tools collection:
<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1">
	<Tools>
		<telerik:EditorToolGroup>
			<telerik:EditorTool Name="PasteStrip" />
		</telerik:EditorToolGroup>
	</Tools>
</telerik:RadEditor>
//Defining PasteStrip with ToolsFile property:
<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor2" ToolsFile="Tools.xml">
</telerik:RadEditor>
````
````XML
<!--Tools.xml-->
<root>
  <tools>
	<tool name="PasteStrip" />
  </tools>
</root>
````

Optionally, you can further enable stand-alone **PasteStrip** tools in a toolbar or fine tune the collection inside the **PasteStrip** dropdown (**Example 2**).

>caption Figure 2: The result of the tools collection configuration in Example 2.

![custom-paste-strip-tools-collection](images/custom-paste-strip-tools-collection.png)

>caption Example 2: Defining stand-alone PasteStrip tools in a toolbar and a custom set of tools in the PasteStrip dropdown.

````ASP.NET
//Defining PasteStrip with Tools collection:
<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1" Skin="Silk" Width="500px" Height="250px">
	<Tools>
		<telerik:EditorToolGroup>
			<telerik:EditorToolStrip Name="PasteStrip">
				<telerik:EditorTool Name="Paste" />
				<telerik:EditorTool Name="PasteFromWord" />
				<telerik:EditorTool Name="PasteFromWordNoFontsNoSizes" />
			</telerik:EditorToolStrip>
		</telerik:EditorToolGroup>
		<telerik:EditorToolGroup>
			<telerik:EditorTool Name="PastePlainText" />
			<telerik:EditorTool Name="PasteAsHtml" />
			<telerik:EditorTool Name="PasteHtml" />
		</telerik:EditorToolGroup>
	</Tools>
</telerik:RadEditor>
//Defining PasteStrip with ToolsFile property:
<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor2" Skin="Silk" Width="500px" Height="250px" ToolsFile="Tools.xml">
</telerik:RadEditor>
````
````XML
<!--Tools.xml-->
<root>
  <tools>
	<tool name="PasteStrip" >
	<tool name="Paste"/>
	<tool name="PasteFromWord"/>
	<tool name="PasteFromWordNoFontsNoSizes"/>
	</tool>
  </tools>
  <tools>
	<tool name="PastePlainText"/>
	<tool name="PasteAsHtml"/>
	<tool name="PasteHtml"/>
  </tools>
</root>	
````

## See Also

 * [Overview]({%slug editor/functionality/toolbars/overview%})
 
 * [Paste from Word]({%slug editor/managing-content/pasting-content/clean-ms-word-formatting-%})

 * [Add Standard Buttons]({%slug editor/functionality/toolbars/buttons/add-standard-buttons%})

 * [Remove Toolbar Buttons]({%slug editor/functionality/toolbars/buttons/remove-toolbar-buttons%})

 * [Using ToolsFile.xml]({%slug editor/functionality/toolbars/using-toolsfile.xml%})
