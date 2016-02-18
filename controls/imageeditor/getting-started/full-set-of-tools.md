---
title: Full Set of Tools
page_title: Full Set of Tools | RadImageEditor for ASP.NET AJAX Documentation
description: Full Set of Tools
slug: imageeditor/getting-started/full-set-of-tools
tags: full,set,of,tools
published: True
position: 2
---

# Full Set of Tools



**RadImageEditor** can be used in two different render modes - CanvasMode, using the HTML canvas tag where all the changes are made Client-side,and non CanvasMode, where the image editing is handled entirely on the Server. The core of the Server-side editing mode is the .NET standard GDI+ library. You can control	the mode of the control through its **CanvasMode** property (with a value set to "Yes" or "No"). Thanks to the canvas functionality (available since Q3 2012)	**RadImageEditor** has the following filters: Invert Color, Brightness and Contrast, Sepia and Greyscale along with drawing functionality.

Depending on the chosen mode, you can utilize the following sets of tools:

* **All modes supported tools**:	Print, Save, Undo, Redo, Reset, Crop, Resize, Zoom, ZoomIn, ZoomOut, Opacity, Rotate, RotateRight, RotateLeft,	Flip, FlipVertical, FlipHorizontal, AddText, InsertImage (available since Q3 2011), Export (available since Q1 2013).

* **CanvasMode supported tools**:	All tools from the list above, including BrightnessContrast, InvertColor, Sepia, Greyscale, HueSaturation, Pencil, DrawCircle, DrawRectangle, Line.

The implementation of the **RadImageEditor**’s toolbar is based on RadToolBar. Still it resembles the toolbar structure of RadEditor, which can be set either:

* inline in the control’s declaration

* or via an XML file.

## Defining the tools inline

>important When setting the `ImageEditorTool` tool tags, it is required to specify the **CommandName** attribute. Other available attributes are: **CssClass**, **Enabled**, **ImageUrl**, **Text** and **ToolTip**.


**Image Mode**
````ASP.NET
<telerik:RadImageEditor ID="theImageEditor" runat="server" ImageUrl="~/content/pg.png" Width="1100" Height="860"> 
    <Tools> 
        <telerik:ImageEditorToolGroup> 
            <telerik:ImageEditorTool Text="Print" CommandName="Print" /> 
            <telerik:ImageEditorTool Text="Save" CommandName="Save" /> 
			<telerik:ImageEditorTool Text="Export" CommandName="Export" />
        </telerik:ImageEditorToolGroup> 
        <telerik:ImageEditorToolGroup> 
            <telerik:ImageEditorToolStrip Text="Undo" CommandName="Undo" /> 
            <telerik:ImageEditorToolStrip Text="Redo" CommandName="Redo" /> 
            <telerik:ImageEditorTool Text="Reset" CommandName="Reset" /> 
        </telerik:ImageEditorToolGroup> 
        <telerik:ImageEditorToolGroup> 
            <telerik:ImageEditorTool Text="Crop" CommandName="Crop" IsToggleButton="true" /> 
            <telerik:ImageEditorTool Text="Resize" CommandName="Resize" IsToggleButton="true" /> 
            <telerik:ImageEditorTool Text="Zoom" CommandName="Zoom" /> 
            <telerik:ImageEditorTool Text="ZoomIn" CommandName="ZoomIn" /> 
            <telerik:ImageEditorTool Text="ZoomOut" CommandName="ZoomOut" /> 
            <telerik:ImageEditorTool Text="Opacity" CommandName="Opacity" IsToggleButton="true" /> 
            <telerik:ImageEditorTool Text="Rotate" CommandName="Rotate" IsToggleButton="true" /> 
            <telerik:ImageEditorTool Text="Rotate Right" CommandName="RotateRight" /> 
            <telerik:ImageEditorTool Text="Rotate Left" CommandName="RotateLeft" /> 
            <telerik:ImageEditorTool Text="Flip" CommandName="Flip" IsToggleButton="true" /> 
            <telerik:ImageEditorTool Text="Flip Vertical" CommandName="FlipVertical" /> 
            <telerik:ImageEditorTool Text="Flip Horizontal" CommandName="FlipHorizontal" /> 
            <telerik:ImageEditorTool Text="Add Text" CommandName="AddText" IsToggleButton="true" /> 
			<telerik:ImageEditorTool Text="Insert Image" CommandName="InsertImage" IsToggleButton="true" /> 
        </telerik:ImageEditorToolGroup> 
    </Tools> 
</telerik:RadImageEditor>
````


**Canvas Mode**
````ASP.NET
<telerik:RadImageEditor ID="theImageEditor" runat="server" ImageUrl="~/content/pg.png"
	Width="1100" Height="860">
	<Tools>
		<telerik:ImageEditorToolGroup>
			<telerik:ImageEditorTool Text="Print" CommandName="Print" />
			<telerik:ImageEditorTool Text="Save" CommandName="Save" />
			<telerik:ImageEditorTool Text="Export" CommandName="Export" />
		</telerik:ImageEditorToolGroup>
		<telerik:ImageEditorToolGroup>
			<telerik:ImageEditorToolStrip Text="Undo" CommandName="Undo" />
			<telerik:ImageEditorToolStrip Text="Redo" CommandName="Redo" />
			<telerik:ImageEditorTool Text="Reset" CommandName="Reset" />
		</telerik:ImageEditorToolGroup>
		<telerik:ImageEditorToolGroup>
			<telerik:ImageEditorTool Text="Crop" CommandName="Crop" IsToggleButton="true" />
			<telerik:ImageEditorTool Text="Resize" CommandName="Resize" IsToggleButton="true" />
			<telerik:ImageEditorTool Text="Zoom" CommandName="Zoom" />
			<telerik:ImageEditorTool Text="ZoomIn" CommandName="ZoomIn" />
			<telerik:ImageEditorTool Text="ZoomOut" CommandName="ZoomOut" />
			<telerik:ImageEditorTool Text="Opacity" CommandName="Opacity" IsToggleButton="true" />
			<telerik:ImageEditorTool Text="Rotate" CommandName="Rotate" IsToggleButton="true" />
			<telerik:ImageEditorTool Text="Rotate Right" CommandName="RotateRight" />
			<telerik:ImageEditorTool Text="Rotate Left" CommandName="RotateLeft" />
			<telerik:ImageEditorTool Text="Flip" CommandName="Flip" IsToggleButton="true" />
			<telerik:ImageEditorTool Text="Flip Vertical" CommandName="FlipVertical" />
			<telerik:ImageEditorTool Text="Flip Horizontal" CommandName="FlipHorizontal" />
			<telerik:ImageEditorTool Text="Add Text" CommandName="AddText" IsToggleButton="true" />
			<telerik:ImageEditorTool Text="Insert Image" CommandName="InsertImage" IsToggleButton="true" />
		</telerik:ImageEditorToolGroup>
		<telerik:ImageEditorToolGroup>
			<telerik:ImageEditorTool Text="Brightness Contrast" CommandName="BrightnessContrast" IsToggleButton="true" />
			<telerik:ImageEditorTool Text="Invert Color" CommandName="InvertColor" />
			<telerik:ImageEditorTool Text="Sepia" CommandName="Sepia" />
			<telerik:ImageEditorTool Text="Greyscale" CommandName="Greyscale" />
			<telerik:ImageEditorTool Text="Hue Saturation" CommandName="HueSaturation" IsToggleButton="true" />
		</telerik:ImageEditorToolGroup>
		<telerik:ImageEditorToolGroup>
			<telerik:ImageEditorTool Text="Pencil" CommandName="Pencil" IsToggleButton="true" />
			<telerik:ImageEditorTool Text="Draw Circle" CommandName="DrawCircle" IsToggleButton="true" />
			<telerik:ImageEditorTool Text="Draw Rectangle" CommandName="DrawRectangle" IsToggleButton="true" />
			<telerik:ImageEditorTool Text="Line" CommandName="Line" IsToggleButton="true" />
		</telerik:ImageEditorToolGroup>
	</Tools>
</telerik:RadImageEditor>
````



## Loading the tools from an XML file

Set the RadImageEditor’s **ToolsFile** property to point to an XML file, which has the following structure and syntax.The available attributes are:

* **name** - specifies the tool name.

* **toolstrip** - when set to true renders a toolstrip button.

* **togglebutton** - when set to true renders a togglebutton.

* **tooltip** - specify a tooltip for the button.

**Image Mode**
````XML
<?xml version="1.0" encoding="utf-8" ?>
<root>
  <tools name="MainToolbar">
    <tool name="Print" togglebutton="true" />
    <tool name="Save" togglebutton="true" />
	<tool name="Export" togglebutton="true" />
    <tool separator="true"/>
    <tool name="Undo" toolstrip="true" />
    <tool name="Redo" toolstrip="true" />
    <tool name="Reset" />
    <tool separator="true"/>
    <tool name="Crop" togglebutton="true" />
    <tool name="Resize" togglebutton="true" />
    <tool name="Zoom" togglebutton="true" />
    <tool name="ZoomIn"  />
    <tool name="ZoomOut" />
    <tool name="Opacity" togglebutton="true" />
    <tool name="Rotate" togglebutton="true" />
    <tool name="RotateRight" />
    <tool name="RotateLeft"  />
    <tool name="Flip" togglebutton="true" />
    <tool name="FlipVertical"   />
    <tool name="FlipHorizontal" />
    <tool name="AddText" togglebutton="true" tooltip="Add Text"  />
	<tool name="InsertImage" togglebutton="true" />
  </tools>
</root>
````


**Canvas Mode (default set of tools)**
````XML
<?xml version="1.0" encoding="utf-8" ?>
<root>
	<tools name="MainToolbar">
		<tool name="Print" togglebutton="true" />
		<tool name="Save" togglebutton="true"  />
		<tool name="Export" togglebutton="true"  />
		<tool separator="true"/>
		<tool name="Undo" toolstrip="true" />
		<tool name="Redo" toolstrip="true" />
		<tool name="Reset" />
		<tool separator="true"/>
		<tool name="Crop" togglebutton="true" />
		<tool name="Resize" togglebutton="true" />
		<tool toolstrip="true" name="Zoom" togglebutton="true" enabledefaulttool="true">
			<tool name="Zoom" />
			<tool name="ZoomIn" />
			<tool name="ZoomOut" />
		</tool>
		<tool name="Opacity" togglebutton="true" />
		<tool name="Rotate" togglebutton="true" toolstrip="true" enabledefaulttool="true">
			<tool name="Rotate" />
			<tool name="RotateRight" />
			<tool name="RotateLeft" />
		</tool>
		<tool name="Flip" togglebutton="true" toolstrip="true" enabledefaulttool="true">
			<tool name="Flip" />
			<tool name="FlipVertical" />
			<tool name="FlipHorizontal" />
		</tool>
		<tool name="AddText" togglebutton="true" />
		<tool name="InsertImage" togglebutton="true" />
		<tool separator="true"/>
		<tool name="BrightnessContrast" togglebutton="true" toolstrip="true" enabledefaulttool="true">
			<tool name="BrightnessContrast" togglebutton="true" />
			<tool name="HueSaturation" togglebutton="true" />
			<tool name="Blur" />
			<tool name="Sharpen" />
			<tool name="Greyscale" />
			<tool name="Sepia" />
			<tool name="InvertColor" />
		</tool>
		<tool name="Pencil" togglebutton="true" toolstrip="true" enabledefaulttool="true">
			<tool name="Pencil" togglebutton="true" />
			<tool name="Line" togglebutton="true" />
			<tool name="DrawRectangle" togglebutton="true" />
			<tool name="DrawCircle" togglebutton="true" />
		</tool>
	</tools>
</root>
````


