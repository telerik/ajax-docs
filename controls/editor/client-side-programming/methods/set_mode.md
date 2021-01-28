---
title: set_mode
page_title: set_mode - RadEditor
description: Check our Web Forms article about set_mode.
slug: editor/client-side-programming/methods/set_mode
tags: set_mode
published: True
position: 15
---

# set_mode


Sets RadEditor for ASP.NET AJAX in Html, Preview or Design mode


|  **function**  **set_mode (value)**  |  |  |
| ------ | ------ | ------ |
| **value: 1** | **integer** |Sets RadEditor for ASP.NET AJAX in Design mode|
| **value: 2** | **integer** |Sets RadEditor for ASP.NET AJAX in Html mode|
| **value: 4** | **integer** |Sets RadEditor for ASP.NET AJAX in Preview mode|

The following example will set the editor in Html mode on page load

````ASP.NET
<script type="text/javascript">
	function OnClientLoad(editor, args) {
		editor.set_mode(2);
	}
</script>
<telerik:radeditor runat="server" id="RadEditor1" OnClientLoad="OnClientLoad"></telerik:radeditor> 
````


