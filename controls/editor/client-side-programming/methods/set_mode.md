---
title: set_mode
page_title: set_mode | UI for ASP.NET AJAX Documentation
description: set_mode
slug: editor/client-side-programming/methods/set_mode
tags: set_mode
published: True
position: 15
---

# set_mode



## 

Sets RadEditor for ASP.NET AJAX in Html, Preview or Design mode


>caption  

|  __function__  __set_mode (value)__  |  |  |
| ------ | ------ | ------ |
| __value: 1__ | __integer__ |Sets RadEditor for ASP.NET AJAX in Design mode|
| __value: 2__ | __integer__ |Sets RadEditor for ASP.NET AJAX in Html mode|
| __value: 4__ | __integer__ |Sets RadEditor for ASP.NET AJAX in Preview mode|

The following example will set the editor in Html mode on page load

````ASPNET
	<script type="text/javascript">
		function OnClientLoad(editor, args) {
			editor.set_mode(2);
		}
	</script>
	<telerik:radeditor runat="server" id="RadEditor1" OnClientLoad="OnClientLoad"></telerik:radeditor> 
````


