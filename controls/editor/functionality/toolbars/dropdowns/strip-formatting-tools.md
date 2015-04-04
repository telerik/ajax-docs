---
title: Strip Formatting Tools
page_title: Strip Formatting Tools | UI for ASP.NET AJAX Documentation
description: Strip Formatting Tools
slug: editor/functionality/toolbars/dropdowns/strip-formatting-tools
tags: strip,formatting,tools
published: True
position: 13
---

# Strip Formatting Tools



This article provides information about the built-in __Format Stripper__ dropdown,	and the Strip Formatting tools exposed inside.

## 

The __Strip Formatting__ tools enable the end-user to strip the formatting from existing content.The built-in __Format Stripper__ dropdown exposes a list of __Strip Formatting__ tools for the user tochoose from (__Figure 1__). The following list specifies each tool’s purpose:

* __Strip All Formatting__—removes all styles and formatting applied to the content (i.e., transforms it to plain text).

* __Strip Css Formatting__—removes all inline CSS rules (i.e., the style attribute).

* __Strip Font Elements__—strips all <font< tags from the HTML content.

* __Strip Span Elements__—strips all <span< tags from the HTML content.

* __Strip Word Formatting__—cleans the HTML content from unnecessary XML tags and comments inserted by[pasting MS Word content]({%slug editor/managing-content/pasting-content/clean-ms-word-formatting-%}).
>caption Figure 1: Plain HTML content, later (in Figure 2) stripped to plain text.

![editor-paste-dialogs-result](images/editor-paste-dialogs-result.png)
>caption Figure 2: Transforming HTML content to plain text via Strip All Formatting tool.

![editor-format-stripper](images/editor-format-stripper.png)

## Adding Format Stripper Tool to a Custom Tool-set

In a custom collection of tools, the build-in __Format Stripper__ dropdowncan be added by [adding a plain tool]({%slug editor/functionality/toolbars/overview%}) with a name set to	__FormatStripper__ (__Example 1__).

__Example 1__: Adding the PasteStrip dropdown to a tools collection.

>tabbedCode

````ASPNET
			<telerik:RadEditor runat="server" ID="RadEditor1">
				<telerik:EditorToolGroup>
					<telerik:EditorTool Name="FormatStripper" />
				</telerik:EditorToolGroup>
			</telerik:RadEditor>
````
````XML
			<root>
			  <tools>
				<tool name="FormatStripper" />
			  </tools>
			</root>
````
>end

Optionally, you can further enable stand-alone __Strip Formatting__ tools in a toolbar or fine tune the collectioninside the __PasteStrip__ dropdown (__Example 2__).
>caption Figure 2: The result of the tools collection configuration in Example 2.

![custom-strip-tools-collection](images/custom-strip-tools-collection.png)

__Example 2__: Defining stand-alone Strip Formatting tools in a toolbar and a custom set of tools in the PasteStrip dropdown.

>tabbedCode

````ASPNET
			<telerik:RadEditor runat="server" ID="RadEditor1" Skin="Silk" Width="500px" Height="250px">
				<Tools>
					<telerik:EditorToolGroup>
						<telerik:EditorToolStrip Name="FormatStripper">
							<telerik:EditorTool Name="StripAll" />
							<telerik:EditorTool Name="StripCss" />
							<telerik:EditorTool Name="StripWord" />
						</telerik:EditorToolStrip>
					</telerik:EditorToolGroup>
					<telerik:EditorToolGroup>
						<telerik:EditorTool Name="StripSpan" />
						<telerik:EditorTool Name="StripFont" />       
					</telerik:EditorToolGroup>
				</Tools>
			</telerik:RadEditor>
	
````
````XML
			<root>
			  <tools>
				<tool name="FormatStripper" >
				  <tool name="StripAll"/>
				  <tool name="StripCss"/>
				  <tool name="StripWord"/>
				</tool>
			  </tools>
			  <tools>
				  <tool name="StripSpan"/>
				  <tool name="StripFont"/>
			  </tools>
			</root>
	
	
````
>end

# See Also

 * [Overview]({%slug editor/functionality/toolbars/overview%})

 * [Add Standard Buttons]({%slug editor/functionality/toolbars/buttons/add-standard-buttons%})

 * [Remove Toolbar Buttons]({%slug editor/functionality/toolbars/buttons/remove-toolbar-buttons%})

 * [Using ToolsFile.xml]({%slug editor/functionality/toolbars/using-toolsfile.xml%})
