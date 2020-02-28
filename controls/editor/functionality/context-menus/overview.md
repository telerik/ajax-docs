---
title: Overview
page_title: Context Menus Overview | RadEditor for ASP.NET AJAX Documentation
description: Overview
slug: editor/functionality/context-menus/overview
tags: overview
published: True
position: 0
---

# Context Menus Overview

**RadEditor** allows context menu customizations - you can change the default context menus for various HTML elements (e.g. different context menus for images, tables, paragraphs, hyperlinks etc.).

As of **R2 2016** context menus integrate [RadMenu]({%slug menu/overview%}) when using [Lightweight rendering]({%slug editor/mobile-support/render-modes%}). This extend the context menus and allows nesting—[Nested Context Menus]({%slug editor/functionality/context-menus/nested-context-menus%}). You can disable the new context menu rendering and show the old one by setting `UseRadContextMenu` property to `false`.

The context menus are available in the ContextMenus Collection. You can define this collection in the ContextMenus section of RadEditor’s declaration:

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1">
	<ContextMenus>
		<telerik:EditorContextMenu TagName="IMG">
			<telerik:EditorTool Name="Cut" />
			<telerik:EditorTool Name="Copy" />
			<telerik:EditorTool Name="Paste" />
		</telerik:EditorContextMenu>
		<telerik:EditorContextMenu TagName="P">
			<telerik:EditorTool Name="JustifyLeft" />
			<telerik:EditorTool Name="JustifyCenter" />
			<telerik:EditorTool Name="JustifyRight" />
			<telerik:EditorTool Name="JustifyFull" />
		</telerik:EditorContextMenu>
	</ContextMenus>
	<Content>           
		Right-click on image to see custom menu           
		<img style="marign-left: 6px" src=" https://demos.telerik.com/aspnet-ajax/Editor/Img/productLogoLight.gif" />
		<br/><br/>           <p>Right-click here to see the custom Paragraph menu.<br/></p><br/>           
		Right-click on the link to see the default link menu disabled: <a href="/">www.telerik.com</a>   
	</Content>
</telerik:RadEditor>
````


You can also define context menus via code-behind:



````C#
//make sure the tools file is loaded RadEditor1.EnsureToolsFileLoaded(); 
EditorContextMenu imgTag = RadEditor1.ContextMenus.FindByTagName("IMG");
//the Copy tool is not available for this tag, it is just for demonstration purposes
imgTag.Tools.Add(new EditorTool("Copy")); 
````
````VB
'make sure that the tools file is loaded RadEditor1.EnsureToolsFileLoaded()
Dim imgTag As EditorContextMenu = RadEditor1.ContextMenus.FindByTagName("IMG")
'the Copy tool is not available for this tag, it is just for demonstration purposes
imgTag.Tools.Add(New EditorTool("Copy"))
````

If needed, you can disable specific context menus. Note that when you disable a certain context menu, you are disabling only that specific menu while the default one (the one applied to all tags) is still available. That is why, if you want to customize the context menus, you should disable/remove all menus first and then declare only the ones that you need.

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" ID="RadEditor1" runat="server">
	<Tools>
		<telerik:EditorToolGroup>
			<telerik:EditorTool Name="SelectAll" ShortCut="CTRL+A" />
			<telerik:EditorSeparator />
			<telerik:EditorTool Name="Bold" ShortCut="CTRL+B" />
			<telerik:EditorTool Name="Italic" ShortCut="CTRL+I" />
			<telerik:EditorTool Name="Underline" ShortCut="CTRL+U" />
			<telerik:EditorTool Name="StrikeThrough" />
			<telerik:EditorSeparator />
			<telerik:EditorTool Name="InsertOrderedList" />
			<telerik:EditorTool Name="InsertUnorderedList" />
			<telerik:EditorTool Name="InsertParagraph" />
			<telerik:EditorTool Name="InsertSymbol" />
		</telerik:EditorToolGroup>
		<telerik:EditorToolGroup Tag="MainToolbar">
			<telerik:EditorTool Name="Cut" />
			<telerik:EditorTool Name="Copy" ShortCut="CTRL+C" />
			<telerik:EditorTool Name="Paste" ShortCut="CTRL+V" />
			<telerik:EditorTool Name="PasteStrip" />
			<telerik:EditorSeparator />
			<telerik:EditorTool Name="Undo" ShortCut="CTRL+Z" />
			<telerik:EditorTool Name="Redo" ShortCut="CTRL+Y" />
			<telerik:EditorSeparator />
			<telerik:EditorTool Name="FormatStripper" />
			<telerik:EditorTool Name="ToggleScreenMode" ShortCut="F11" />
			<telerik:EditorTool Name="Print" ShortCut="CTRL+P" />
		</telerik:EditorToolGroup>
	</Tools>
	<ContextMenus>
		<telerik:EditorContextMenu TagName="BODY">
			<telerik:EditorTool Name="Cut" />
			<telerik:EditorTool Name="Copy" />
			<telerik:EditorTool Name="Paste" />
			<telerik:EditorTool Name="PasteFromWord" />
			<telerik:EditorTool Name="PastePlainText" />
			<telerik:EditorTool Name="PasteAsHtml" />
		</telerik:EditorContextMenu>
		<telerik:EditorContextMenu TagName="A" Enabled="false">
		</telerik:EditorContextMenu>
		<telerik:EditorContextMenu TagName="IMG" Enabled="false">
		</telerik:EditorContextMenu>
		<telerik:EditorContextMenu TagName="P">
			<telerik:EditorTool Name="JustifyLeft" />
			<telerik:EditorTool Name="JustifyCenter" />
			<telerik:EditorTool Name="JustifyRight" />
			<telerik:EditorTool Name="JustifyFull" />
		</telerik:EditorContextMenu>
	</ContextMenus>
	<Content>           
		Right-click on image to see custom menu           
		<img style="marign-left: 6px" src=" https://demos.telerik.com/aspnet-ajax/Editor/Img/productLogoLight.gif" />
		<br/><br/>           <p>Right-click here to see the custom Paragraph menu.<br/></p><br/>           
		Right-click on the link to see the default link menu disabled: <a href="/">www.telerik.com</a>   
	</Content>
</telerik:RadEditor>
````

>caution Important: In order to remove default context menus, you have to declare Tools section with all needed tools for the ToolBar. You cannot use ToolsFile with this approach, that’s why it is advisable to manipulate context menus from code-behind.


````C#
//make sure that the tools file is loaded
RadEditor1.EnsureToolsFileLoaded(); 
//clear default context menus collection 
RadEditor1.ContextMenus.Clear(); 
//create new context menu 
EditorContextMenu forBody = new EditorContextMenu(); 
forBody.TagName = "BODY"; 
//add specific tools to the context menu 
forBody.Tools.Add(new EditorTool("Cut")); 
forBody.Tools.Add(new EditorTool("Copy")); 
forBody.Tools.Add(new EditorTool("Paste")); 
forBody.Tools.Add(new EditorTool("PasteFromWord")); 
forBody.Tools.Add(new EditorTool("PastePlainText")); 
forBody.Tools.Add(new EditorTool("PasteAsHtml")); 
//add the newly created context menu to the context menu collection 
RadEditor1.ContextMenus.Add(forBody); 
````
````VB
'make sure that the tools file is loaded
RadEditor1.EnsureToolsFileLoaded()
'clear default context menus collection 
RadEditor1.ContextMenus.Clear()
'create new context menu 
Dim forBody As New EditorContextMenu()
forBody.TagName = "BODY"
'add specific tools to the context menu 
forBody.Tools.Add(New EditorTool("Cut"))
forBody.Tools.Add(New EditorTool("Copy"))
forBody.Tools.Add(New EditorTool("Paste"))
forBody.Tools.Add(New EditorTool("PasteFromWord"))
forBody.Tools.Add(New EditorTool("PastePlainText"))
forBody.Tools.Add(New EditorTool("PasteAsHtml"))
'add the newly created context menu to the context menu collection 
RadEditor1.ContextMenus.Add(forBody)
````

## See Also

 * [Custom Context Menus](https://demos.telerik.com/aspnet-ajax/Editor/Examples/ContextMenus/DefaultCS.aspx)
