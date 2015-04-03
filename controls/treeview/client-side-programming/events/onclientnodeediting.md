---
title: OnClientNodeEditing
page_title: OnClientNodeEditing | UI for ASP.NET AJAX Documentation
description: OnClientNodeEditing
slug: treeview/client-side-programming/events/onclientnodeediting
tags: onclientnodeediting
published: True
position: 9
---

# OnClientNodeEditing



## 

The __OnClientNodeEditing__ client-side event is called when editing is completed and before the OnClientNodeEdit event fires. This event can be canceled.

The event handler receives parameters:

1. The treeview instance that fired the event.

1. Event arguments with functions:

* __get_node()__ retrieves a reference to the node being edited. You can call get_text() from this node reference to get the "old" text prior to editing.

* __get_newText()__ returns the new text entered by the user.

* __get_domEvent()__ retrieves a DOM event object of the node edit.

* __set_cancel()__ - call this function to specify wether the event should be canceled (true) or not (false).

The example below demonstrates preventing non-numeric entry to a node.

````JavaScript
	
	    <script type="text/javascript" language="javascript">
	
	        function IsNumeric(text) {
	            var ValidChars = "0123456789.";
	            var IsNumber = true;
	            var Char;
	            for (i = 0; i < text.length && IsNumber == true; i++) {
	                Char = text.charAt(i);
	                if (ValidChars.indexOf(Char) == -1) {
	                    IsNumber = false;
	                }
	            }
	            return IsNumber;
	        }
	        function ClientNodeEditing(sender, eventArgs) {
	            var node = eventArgs.get_node();
	            var oldText = node.get_text();
	            var newText = eventArgs.get_newText()
	
	            if (!IsNumeric(newText)) {
	                alert("New entry must be numeric.");
	                eventArgs.set_cancel(true);
	            }
	        }
	       
	    </script>
````



````ASPNET
	
	    <telerik:RadTreeView ID="RadTreeView1" 
	                         runat="server" 
	                         AllowNodeEditing="True" 
	                         OnClientNodeEditing="ClientNodeEditing">
	    </telerik:RadTreeView>
	    
````



# See Also

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})

 * [OnClientNodeEditStart]({%slug treeview/client-side-programming/events/onclientnodeeditstart%})

 * [OnClientNodeEdited]({%slug treeview/client-side-programming/events/onclientnodeedited%})
