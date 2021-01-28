---
title: Overview
page_title: Keyboard Support Overview - RadEditor
description: Check our Web Forms article about Keyboard Support Overview.
slug: editor/accessibility-and-internationalization/keyboard-support/overview
tags: overview
published: True
position: 0
---

# Keyboard Support Overview

RadEditor for ASP.NET AJAX is a fully keyboard navigable component. This includes shortcuts to open and operate with drop-downs, tools and dialogs, achieving true full keyboard accessibility.

* Use **F10**- focus goes on toolbars

* toolbars navigation - use arrow keys or TAB / Ctrl-TAB key

* dropdown navigation - navigate through the dropdown items using the **up** and **down** arrow keys

* Press **ENTER** to execute the selected button, dropdown item.

* built-in keyboard shortcuts - by default, RadEditor has the following shortcuts hardcoded internally:

	* Find Dialog - CTRL+F

	* Toggle Full Screen Mode - F11

	* Repeat Last Command - F4

	* Hyperlink Manager Dialog - CTRL+K

	* Remove Hyperlink - CTRL+SHIFT+K

	* Image Manager Dialog - CTRL+G

	* Bold - CTRL+B

	* Italic - CTRL+I

	* Underline - CTRL+U

	* Undo - CTRL+Z

	* Redo - CTRL+SHIFT+Z, CTRL+Y

	* Cut - CTRL+X

	* Copy - CTRL+C

	* Paste - CTRL+V

	* Select All - CTRL+A

You can assign a shortcut to all editor's buttons and dropdowns by using the **ShortCut** attribute of the inner telerik:EditorTool tag of the RadEditor:

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" ID="RadEditor1" runat="server">
	<Tools>
		<telerik:EditorToolGroup>
			<telerik:EditorTool Name="Cut" ShortCut="Ctrl+X" />
			<telerik:EditorTool Name="Copy" ShortCut="Ctrl+C" />
			<telerik:EditorTool Name="Paste" ShortCut="Ctrl+V" />
		</telerik:EditorToolGroup>
	</Tools>
</telerik:RadEditor>
````

or in the CodeBehind:


````C#
using Telerik.Web.UI;
...
EditorToolGroup main = new EditorToolGroup();
RadEditor1.Tools.Add(main);
EditorTool cut = new EditorTool();
cut.Name = "Cut";
cut.ShortCut = "CTRL+X";
main.Tools.Add(cut);
````
````VB
Imports Telerik.Web.UI
...
	Dim main As New EditorToolGroup()
RadEditor1.Tools.Add(main)
	Dim cut As New EditorTool()
cut.Name = "Cut"
cut.ShortCut = "CTRL+X"
main.Tools.Add(cut) 
````


or using the **ShortCut** attribute of the `<tool>` item in the ToolsFile.xml file:

````XML
<tool name="Cut" shortcut="CTRL+X" />
<tool name="Copy" shortcut="CTRL+C" />
<tool name="Paste" shortcut="CTRL+V" />
````

>tip The shortcut mechanism can override some of the default shortcuts of the browser, like **Ctrl+A, Ctrl+C, Ctrl+J**, so you can use those combinations for custom purposes. Other combinations like **Ctrl+N, Ctrl+T, Ctrl+W** are reserved to Chrome and Firefox and not available to scripts.

>tip @[template](/_templates/editor/keyboard-support.md#cmd-on-mac)
