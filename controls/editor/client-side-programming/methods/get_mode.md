---
title: get_mode
page_title: get_mode | RadEditor for ASP.NET AJAX Documentation
description: get_mode
slug: editor/client-side-programming/methods/get_mode
tags: get_mode
published: True
position: 7
---

# get_mode

Returns the editor's mode:

|  **function**  **get_mode()**  |  |  |
| ------ | ------ | ------ |
| **returned value: 1** | **integer** |represents Design mode|
| **returned value: 2** | **integer** |represents HTML mode|
| **returned value: 4** | **integer** |represents Preview mode|

The following example demonstrates how to check the current mode of Telerik RadEditor:

````ASP.NET
<script type="text/javascript">
	function OnClientLoad(editor, args)
	{     
		editor.add_modeChange(function(sender, args)     
		{        
			var mode = sender.get_mode();                             
			switch (mode)        
			{           
				case 1:            
					alert( "We are in Design mode");            
					//do something            
					break;           
				case 2:            
					alert( "We are in Html mode");            
					//do something            
					break;           
				case 4:            
					alert( "We are in Preview mode");
					//do something            
					break;
			}
		});
	}
</script>
<telerik:radeditor runat="server" OnClientLoad="OnClientLoad" ID="RadEditor1">
</telerik:radeditor>
````


