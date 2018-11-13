---
title: Disable or Hide Modules
page_title: Disable or Hide Modules | RadEditor for ASP.NET AJAX Documentation
description: Disable or Hide Modules
slug: editor/functionality/modules/disable-or-hide-modules
tags: disable,or,hide,modules
published: True
position: 1
---

# Disable or Hide Modules

There are a couple of ways to hide or remove the RadEditor's modules: inline, via the code-behind, using a toolsfile or a theme/skin file. The following examples demonstrate how to do that:

1. **Inline** In order to **disable** a specific module inside the RadEditor declaration define the needed modules (built-in or custom) only, or set its **Enabled** property to **false**. To **hide** a specific module set its **Visible** property to **false**, e.g.:

	**ASP.NET**
	
		<telerik:RadEditor RenderMode="Lightweight" ID="RadEditor1" runat="server">
			<Modules>
				<telerik:EditorModule Name="RadEditorHtmlInspector" Enabled="true" Visible="true" />
				<telerik:EditorModule Name="RadEditorNodeInspector" Enabled="true" Visible="false" />
				<telerik:EditorModule Name="RadEditorDomInspector" Enabled="false" />
				<telerik:EditorModule Name="RadEditorStatistics" Enabled="false" />
			</Modules>
		</telerik:RadEditor>

	The declaration above will disable the DomInpector and Statistics modules and will render the real time HTMLmodule, while the NodeInspector will be hidden but available via ModuleManager tool.

	>note To disable all modules inline, at least one module should be declared in the `<Modules>` section and its **Enabled** property should be set to **false** .


1. **Via the code-behind** The first thing that has to be done to manipulate the **Modules** collection on the server is to load the default built-in modules, otherwise it will be empty and if you try to remove something it will throw an exception. This is done with the editor's **EnsureToolsFileLoaded()** method:



	**C#**
	
		RadEditor1.EnsureToolsFileLoaded(); //ensure that the default (or custom) Toolsfile is loaded
		RadEditor1.Modules.Remove("RadEditorDomInspector"); //remove a specific module
	
	**VB**
	
		RadEditor1.EnsureToolsFileLoaded() 'ensure that the default (or custom) Toolsfile is loaded
		RadEditor1.Modules.Remove("RadEditorDomInspector") 'remove a specific module


	In order to hide a specific module via the code-behind, get a reference to it using the Modules collection and its index and set the Visible property to false. The indexes of the built-in modules are listed below:

	|Index|Name|
	| ------ | ------ |
	|  **0**  | RadEditorStatistics |
	| **1** |RadEditorDomInspector|
	| **2** |RadEditorNodeInspector|
	| **3** |RadEditorHtmlInspector|

	For example: `RadEditor1.Modules[2].Visible = false; //hide RadEditorNodeInspector`

1. **Using ToolsFile** Configuring built-in modules from the tools file is done in the `<modules>` node. For example:



	**C#**
	
		RadEditor1.EnsureToolsFileLoaded(); //ensure that the default (or custom) Toolsfile is loaded
		RadEditor1.Modules.Clear();//clear the module collections

	**VB**
	
		RadEditor1.EnsureToolsFileLoaded() 'ensure that the default (or custom) Toolsfile is loaded
		RadEditor1.Modules.Clear() 'clear the module collections


	The **Enabled** property set to **false** will disable the respective module. The **Visible** property will hide the module. To make it visible again use the Module Manager splitbutton.

	>note If the modules node is not declared the default settings will be applied.


