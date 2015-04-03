---
title: OnClientLoad
page_title: OnClientLoad | UI for ASP.NET AJAX Documentation
description: OnClientLoad
slug: editor/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 2
---

# OnClientLoad



## 

This event is fired after the content is set in the content area, after the [OnClientInit]({%slug editor/client-side-programming/events/onclientinit%}) event and just before the editor is ready for use.




>caption  

|  __function OnClientLoad(editor, args)__  |  |  |
| ------ | ------ | ------ |
| __editor__ | __object__ |Returns a reference to RadEditor client object|
| __args__ | __object__ |Returns the needed information about the event|

The example below demonstrates how to attach the onkeydown event to the content area of RadEditor. When the onkeydown event is raised it will alert the key code of the pressed button:

````ASPNET
	<script type="text/javascript">
		function OnClientLoad(editor, args) {
	
	        editor.attachEventHandler("onkeydown", function (e) {
	            alert("Content area key down " + e.keyCode);
	        });
	    }
	</script>
	
	<telerik:RadEditor runat="server" ID="RadEditor1" OnClientLoad="OnClientLoad"></telerik:RadEditor> 
````


