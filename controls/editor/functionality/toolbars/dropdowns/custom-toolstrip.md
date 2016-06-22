---
title: Custom ToolStrip
page_title: Custom ToolStrip | RadEditor for ASP.NET AJAX Documentation
description: Custom ToolStrip
slug: editor/functionality/toolbars/dropdowns/custom-toolstrip
tags: custom,toolstrip
published: True
position: 16
---

# Custom ToolStrip

ToolStrips are useful dropdowns that contain a group of tools with related functionality and can be a very convenient means of arranging tools used in the editor. An example of a simple ToolStrip with a group of alignment tools is shown below:

![](images/editor-dropdowns025.png)

````ASP.NET
<style>
	.reToolbar.Default .MyToolStrip
	{
		background-image: url(http://www.telerik.com/DEMOS/ASPNET/RadControls/Editor/Skins/Default/buttons/Custom.gif);
	}
</style>
...
<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1">
	<Tools>
		<telerik:EditorToolGroup>
			<telerik:EditorToolStrip Name="MyToolStrip">
				<telerik:EditorTool Name="JustifyLeft" />
				<telerik:EditorTool Name="JustifyCenter" />
				<telerik:EditorTool Name="JustifyRight" />
			</telerik:EditorToolStrip>
		</telerik:EditorToolGroup>
	</Tools>
</telerik:RadEditor>
````

You can also create a toolstrip via the ToolsFile.xml file, e.g.

````XML
<editortoolstrip name="Apply Formatting">  
	<EditorTool Name="Bold" />  
	<EditorTool Name="Italic" />  
	<EditorTool Name="Underline" />
</editortoolstrip>
````

In order to apply an image to be used as the ToolStrip icon, you need to set a style with the following structure:

````CSS
.reToolbar.<skinName> .<commandName>
{    
	background-image: url(MyImage.gif);
}
````


