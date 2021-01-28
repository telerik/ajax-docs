---
title: OnClientSelectionChange
page_title: OnClientSelectionChange - RadEditor
description: Check our Web Forms article about OnClientSelectionChange.
slug: editor/client-side-programming/events/onclientselectionchange
tags: onclientselectionchange
published: True
position: 8
---

# OnClientSelectionChange

The OnClientSelectionChange event signals that the selection within the editor content area has changed. 
This event is one of the most widely and often fired internally events by the editor when:

* focus the content area
* clicking in the content area
* selecting in the content area
* typing
* scrolling
* a command is fired
* pasting content
* setting content

|  **function OnClientSelectionChange(editor, args)**  |  |  |
| ------ | ------ | ------ |
| **editor** | **object** |Returns a reference to RadEditor client object|
| **args** | **object** |Returns the needed information about the event|

The example below alerts the editor content when the user clicks inside the content area or makes a selection:

````ASP.NET	 
<script type="text/javascript">
	function OnClientSelectionChange(editor, args)
	{
		alert("selection changed" + editor.getSelectionHtml());
	}
</script>
<telerik:radeditor runat="server" ID="RadEditor1"
	OnClientSelectionChange="OnClientSelectionChange">
	<Content>
		 <strong>Sample Content</strong>
	</Content>
</telerik:radeditor> 			
````




