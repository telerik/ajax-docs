---
title: get_mode
page_title: get_mode | UI for ASP.NET AJAX Documentation
description: get_mode
slug: editor/client-side-programming/methods/get_mode
tags: get_mode
published: True
position: 7
---

# get_mode



## 



Returns the editor's mode:


>caption  

|  __function__  __get_mode()__  |  |  |
| ------ | ------ | ------ |
| __returned value: 1__ | __integer__ |represents Design mode|
| __returned value: 2__ | __integer__ |represents HTML mode|
| __returned value: 4__ | __integer__ |represents Preview mode|

The following example demonstrates how to check the current mode of Telerik RadEditor:

````ASPNET
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


