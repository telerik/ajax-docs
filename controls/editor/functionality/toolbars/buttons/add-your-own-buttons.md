---
title: Add Your Own Buttons
page_title: Add Your Own Buttons | RadEditor for ASP.NET AJAX Documentation
description: Add Your Own Buttons
slug: editor/functionality/toolbars/buttons/add-your-own-buttons
tags: add,your,own,buttons
published: True
position: 2
---

# Add Your Own Buttons

RadEditor provides 4 different ways to configure the toolbars:

 * [Setting the tools in the RadEditor's declaration](#setting-the-tools-in-the-radeditors-declaration)
 
 * [Setting the tools via the ToolsFile property - the same way as in the previous versions of the control](#setting-the-tools-via-the-toolsfile-property---the-same-way-as-in-the-previous-versions-of-the-control)
 
 * [Setting the tools programmatically in the code-behind](#setting-the-tools-programmatically-in-the-code-behind)
 
 * [Setting the tools by using Theme](#setting-the-tools-by-using-theme)

## Setting the tools in the RadEditor's declaration:


````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1">
	<Tools>
		<telerik:EditorToolGroup>
			<telerik:EditorTool Name="Custom1" />
			<telerik:EditorTool Name="Custom2" />
			<telerik:EditorTool Name="Custom3" />
		</telerik:EditorToolGroup>
	</Tools>
</telerik:RadEditor>
````

>note The selected ToolsFile or the built-in default tools file will not be loaded if you set the Tools collection in the control tag.

## Setting the tools via the ToolsFile property - the same way as in the previous versions of the control:

You can add any number of custom buttons using the sample code below. All you need to do is provide different names for them, e.g. in your

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" ToolsFile="~/ToolsFile.xml" runat="server" ID="RadEditor2" Height="100px">
</telerik:RadEditor>
````

````XML
<tools name="MainToolbar" enabled="true">  
	<tool name="Custom1" />  
	<tool name="Custom2" />  
	<tool name="Custom3" />
</tools>
````

## Setting the tools programmatically in the code-behind:

Creating tools programmatically will replace the default toolsfile RadEditor loads and only the tools you added will remain. If you want to keep the original set of tools and add your own after them, call the `EnsureToolsFileLoaded` method first.


````C#
protected void Page_Load(object sender, EventArgs e)
{
	if (!IsPostBack)
	{
		//uncomment this line to first load the default tools
		//RadEditor3.EnsureToolsFileLoaded();

		EditorToolGroup main = new EditorToolGroup();
		RadEditor3.Tools.Add(main);
		EditorTool custom1 = new EditorTool();
		custom1.Name = "Custom1";
		custom1.ShortCut = "CTRL+1";
		main.Tools.Add(custom1);
		EditorTool custom2 = new EditorTool();
		custom2.Name = "Custom2";
		custom2.ShortCut = "CTRL+2";
		main.Tools.Add(custom2);
		EditorTool custom3 = new EditorTool();
		custom3.Name = "Custom3";
		custom3.ShortCut = "CTRL+3";
		main.Tools.Add(custom3);
	}
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
	If Not IsPostBack Then
		'uncomment this line to first load the default tools
		RadEditor3.EnsureToolsFileLoaded()

		Dim main As New EditorToolGroup()
		RadEditor3.Tools.Add(main)
		Dim custom1 As New EditorTool()
		custom1.Name = "Custom1"
		custom1.ShortCut = "CTRL+1"
		main.Tools.Add(custom1)
		Dim custom2 As New EditorTool()
		custom2.Name = "Custom2"
		custom2.ShortCut = "CTRL+2"
		main.Tools.Add(custom2)
		Dim custom3 As New EditorTool()
		custom3.Name = "Custom3"
		custom3.ShortCut = "CTRL+3"
		main.Tools.Add(custom3)
	End If
End Sub
````
````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" ID="RadEditor3" runat="server"></telerik:RadEditor>
````

## Setting the tools by using Theme:

In your .skin file:

````ASP.NET
<%@ Register TagPrefix="telerik" Namespace="Telerik.Web.UI" Assembly="Telerik.Web.UI" %>
<telerik:RadEditor RenderMode="Lightweight" runat="server" SkinID="SomeTools">
	<Tools>
		<telerik:EditorToolGroup>
			<telerik:EditorTool Name="Custom1" />
			<telerik:EditorTool Name="Custom2" />
			<telerik:EditorTool Name="Custom3" />
		</telerik:EditorToolGroup>
	</Tools>
</telerik:RadEditor>
````

Once the skin is set, you need to declare it in the RadEditor's declaration by using the SkinId property. In the Default.aspx:

````ASP.NET
<%@ Page Theme="Default" Language="C#" AutoEventWireup="true" CodeFile="DefaultCS.aspx.cs" Inherits="Telerik.Web.Examples.Editor.Default.DefaultCS" %>
...
<telerik:RadEditor RenderMode="Lightweight" SkinID="SomeTools" runat="server" ID="RadEditor4">
</telerik:RadEditor>
````

>note Note: More information on how to use ASP.NET 2.x Themes is available in [MSDN](http://msdn2.microsoft.com/en-us/library/wcyt4fxb(vs.80).aspx).

## Declaring the custom CommandList that will be executed when the button is clicked:

After adding the custom toolbar button(s) to the editor's toolbar, you should define their command. In your page with the editor (after the `<telerik:radeditor ...>` declaration), add the following:

````JavaScript
Telerik.Web.UI.Editor.CommandList["Custom1"] = function (commandName, editor, args)
{
	alert("Custom command 1");
	//for example you can apply bold formatting by firing the editor.fire("Bold");
};
Telerik.Web.UI.Editor.CommandList["Custom2"] = function (commandName, editor, args)
{
	alert("Custom command 2");
	// Execute your code here, provide it with any arguments that you need, etc.
};
Telerik.Web.UI.Editor.CommandList["Custom3"] = function (commandName, editor, args)
{   
	// Execute your code here, provide it with any arguments that you need, etc.
};
````

If you add a custom tool and do not create a CommandList then when you click the button it will pop up a message that the command `<commandName>` is not implemented yet.

The commands above will be rendered as buttons on the toolbar. To improve their appearance, you should provide image files or font icons, based on the [render mode]({%slug editor/mobile-support/render-modes%}) of the editor. You can find such an example in the ([Set Icons for Toolbar Button States]({%slug editor/functionality/toolbars/buttons/set-button-state%}#set-icons-for-toolbar-button-states)) help article.


## See Also

 * [Adding Custom Tools](http://demos.telerik.com/aspnet-ajax/Editor/Examples/CustomTools/DefaultCS.aspx)
 * [Set Button State]({%slug editor/functionality/toolbars/buttons/set-button-state%})
 * [RadEditor Render Modes]({%slug editor/mobile-support/render-modes%})
 * [Server-Side API](http://demos.telerik.com/aspnet/prometheus/Editor/Examples/ServersideAPI/DefaultCS.aspx)
 * [Show or hide the DOM Inspector module via an Editor tool](http://www.telerik.com/support/code-library/show-or-hide-the-dom-inspector-module-via-an-editor-tool)
