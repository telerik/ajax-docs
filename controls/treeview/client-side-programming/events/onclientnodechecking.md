---
title: OnClientNodeChecking
page_title: OnClientNodeChecking | UI for ASP.NET AJAX Documentation
description: OnClientNodeChecking
slug: treeview/client-side-programming/events/onclientnodechecking
tags: onclientnodechecking
published: True
position: 20
---

# OnClientNodeChecking



## 

The __OnClientNodeChecking__ client-side event occurs when the user selects a checkbox using mouse or keyboard. The checked state returned by the node __get_checked()__ function has not changed to reflect the new value. The event is called just prior to postback or url redirection and can be canceled.

The event handler receives parameters:

1. The treeview instance that fired the event.

1. Event arguments with functions:

* __get_node()__ retrieves a reference to the clicked on node.

* __set_cancel()__ call this function to specify wether the event should be canceled (true) or not (false).

* __get_domEvent()__ retrieves a DOM event object of the node check.

The example below shows how to cancel the event if the category for the node is "NonCheckable". Note that the __OnClientNodeChecked__ event does not fire if set_cancel(true) is called.

````ASPNET
	
	    <script type="text/javascript" language="javascript">
	
	        function ClientNodeChecked(sender, eventArgs) {
	            alert("OnClientNodeChecked");
	        }
	
	        function ClientNodeChecking(sender, eventArgs) {
	            var node = eventArgs.get_node();
	
	            alert("You are going to check " +
	        node.get_text() +
	        ". Current state is: " +
	        node.get_checked());
	
	            if (node.get_category() == "NonCheckable") {
	                eventArgs.set_cancel(true);
	            }
	        }
	    
	    </script>
	
	    <telerik:RadTreeView ID="RadTreeView1" runat="server" CheckBoxes="true" OnClientNodeChecked="ClientNodeChecked"
	                                           OnClientNodeChecking="ClientNodeChecking">
	    </telerik:RadTreeView>
````











# See Also

 * [OnClientNodeChecked]({%slug treeview/client-side-programming/events/onclientnodechecked%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
