---
title: OnClientNodeChecked
page_title: OnClientNodeChecked | RadTreeView for ASP.NET AJAX Documentation
description: OnClientNodeChecked
slug: treeview/client-side-programming/events/onclientnodechecked
tags: onclientnodechecked
published: True
position: 21
---

# OnClientNodeChecked



## 

The **OnClientNodeChecked**client-side event occurs after the end user selects a checkbox using mouse or keyboard. The node checked status returned by the node **get_checked()** function has now changed to reflect the new value. The action can longer be canceled.

The event handler receives parameters:

1. The treeview instance that fired the event.

1. Event arguments with functions:

* **get_node()** retrieves a reference to the clicked on node.

* **get_domEvent()** retrieves a DOM event object of the node check.

The example below shows a message containing the text of a node and the checked state of its checkbox when checked/unchecked.

````ASPNET
	
	    <script type="text/javascript" language="javascript">
	    
	        function ClientNodeChecked(sender, eventArgs) {
	            var node = eventArgs.get_node();
	
	            alert("You have checked node " +
	                    node.get_text() +
	                    ". Current check state is: " +
	                    node.get_checked());
	        }
	    </script>
	
	    <telerik:RadTreeView ID="RadTreeView1" runat="server" CheckBoxes="true" OnClientNodeChecked="ClientNodeChecked">
	    </telerik:RadTreeView>
````



# See Also

 * [OnClientNodeChecking]({%slug treeview/client-side-programming/events/onclientnodechecking%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
