---
title: Disable or Hide Modules
page_title: Disable or Hide Modules | UI for ASP.NET AJAX Documentation
description: Disable or Hide Modules
slug: editor/functionality/modules/disable-or-hide-modules
tags: disable,or,hide,modules
published: True
position: 1
---

# Disable or Hide Modules



## 



There are a couple of ways to hide or remove the RadEditor's modules: inline, via the code-behind, using a toolsfile or a theme/skin file. The following examples demonstrate how to do that:

1. __Inline__In order to __disable__a specific module inside the RadEditor declaration define the needed modules (built-in or custom) only, or set its __Enabled__property to __false__. To __hide__a specific module set its __Visible__property to __false__,e.g.

````ASPNET
	    <telerik:RadEditor ID="RadEditor1" runat="server">
	        <Modules>
	            <telerik:EditorModule Name="RadEditorHtmlInspector" Enabled="true" Visible="true" />
	            <telerik:EditorModule Name="RadEditorNodeInspector" Enabled="true" Visible="false" />
	            <telerik:EditorModule Name="RadEditorDomInspector" Enabled="false" />
	            <telerik:EditorModule Name="RadEditorStatistics" Enabled="false" />
	        </Modules>
	    </telerik:RadEditor>
````

The declaration above will disable the DomInpector and Statistics modules and will render the real time HTMLmodule, while the NodeInspector will be hidden but available via ModuleManager tool.

>note To disable all modules inline, at least one module should be declared in the <Modules> section and its __Enabled__ property should be set to __false__ .
>


1. __Via the code-behind__The first thing that has to be done to manipulate the __Modules__collection on the server is to load the default built-in modules, otherwise it will be empty and if you try to remove something it will throw an exception. This is done with the editor's __EnsureToolsFileLoaded()__ method:

>tabbedCode

````C#
	        RadEditor1.EnsureToolsFileLoaded(); //ensure that the default (or custom) Toolsfile is loaded
	        RadEditor1.Modules.Remove("RadEditorDomInspector"); //remove a specific module
````
````VB
	        RadEditor1.EnsureToolsFileLoaded() 'ensure that the default (or custom) Toolsfile is loaded
	        RadEditor1.Modules.Remove("RadEditorDomInspector") 'remove a specific module
````
>endIn order to hide a specific module via the code-behind, get a reference to it using the Modules collection and its index and set the Visible property to false. The indexes of the built-in modules are listed below:


|  __0__  | RadEditorStatistics |
| ------ | ------ |
| __1__ |RadEditorDomInspector|
| __2__ |RadEditorNodeInspector|
| __3__ |RadEditorHtmlInspector|For example: __RadEditor1.Modules[2].Visible = false; //hide RadEditorNodeInspector__

1. __Using ToolsFile__Configuring built-in modules from the tools file is done in the <modules> node. For example:

>tabbedCode

````C#
	        RadEditor1.EnsureToolsFileLoaded(); //ensure that the default (or custom) Toolsfile is loaded
	        RadEditor1.Modules.Clear();//clear the module collections
````
````VB
	        RadEditor1.EnsureToolsFileLoaded() 'ensure that the default (or custom) Toolsfile is loaded
	        RadEditor1.Modules.Clear() 'clear the module collections
````
>endThe __Enabled__property set to __false__will disable the respective module. The __Visible__property will hide the module. To make it visible again use the Module Manager splitbutton.

>note If the modules node is not declared the default settings will be applied.
>

