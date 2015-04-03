---
title: OnClientLoad
page_title: OnClientLoad | UI for ASP.NET AJAX Documentation
description: OnClientLoad
slug: treeview/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 1
---

# OnClientLoad



## 

The __OnClientLoad__ event fires after the RadTreeView client-side object has been fully initialized.

The event handler has two parameters:

1. The treeview instance that fired the event.

1. An empty event arguments object.

The example below demonstrates handling the __OnClientLoad__ event and displaying the id of the initialized RadTreeView object to the user:

````ASPNET
	
	    <script type="text/javascript">
	
	        function onLoad(sender, eventArgs) 
	        {
	            alert(sender.get_id());
	        }
	    </script>
	
	    <telerik:RadTreeView ID="RadTreeView1" 
	                         runat="server" 
	                         OnClientLoad="onLoad">
	    </telerik:RadTreeView>
````


