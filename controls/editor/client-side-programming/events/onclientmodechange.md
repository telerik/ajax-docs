---
title: OnClientModeChange
page_title: OnClientModeChange | UI for ASP.NET AJAX Documentation
description: OnClientModeChange
slug: editor/client-side-programming/events/onclientmodechange
tags: onclientmodechange
published: True
position: 6
---

# OnClientModeChange



## 

This event is fired before the mode is changed.


>caption  

|  __function OnClientModeChange(editor, args)__  |  |  |
| ------ | ------ | ------ |
| __editor__ | __object__ |Returns a reference to RadEditor client object|
| __args__ | __object__ |Returns the needed information about the event|

The following example demonstrates how to check the current mode of Telerik RadEditor:

````XML
	<script type="text/javascript">
	    function OnClientModeChange(editor, args)
	    {
	        var mode = editor.get_mode();
	        switch (mode)
	        {
	            case 1:
	                alert("We are in Design mode");
	                //do something
	                break;
	            case 2:
	                alert("We are in Html mode");
	                //do something
	                break;
	            case 4:
	                alert("We are in Preview mode");
	                //do something
	                break;
	        }
	    }
	</script>
	<telerik:radeditor runat="server" OnClientModeChange="OnClientModeChange" ID="RadEditor1"></telerik:radeditor>   
````


