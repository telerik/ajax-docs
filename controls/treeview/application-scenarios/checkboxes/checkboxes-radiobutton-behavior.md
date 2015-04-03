---
title: CheckBoxes RadioButton Behavior
page_title: CheckBoxes RadioButton Behavior | UI for ASP.NET AJAX Documentation
description: CheckBoxes RadioButton Behavior
slug: treeview/application-scenarios/checkboxes/checkboxes-radiobutton-behavior
tags: checkboxes,radiobutton,behavior
published: True
position: 1
---

# CheckBoxes RadioButton Behavior



## 

You may want the checkbox to exhibit a non-standard, RadioButton behavior, where only one checkbox may be selected at a time and all previous checkbox selections are cleared. The example below defines the [OnClientNodeChecked]({%slug treeview/checkboxes/client-side%}) event. The clientNodeChecked() function that handles this event first retrieves the currently checked Node. Then checks if there is a previously checked Node in the "oldNode" global variable and unchecks it if so. The newly clicked Node is checked, and a reference to it is saved off in "oldNode" for later use the next time the [OnClientNodeChecked]({%slug treeview/checkboxes/client-side%}) event fires.



````ASPNET
	
	    <script type="text/javascript" language="javascript">
	
	        var oldNode;
	        function clientNodeChecked(sender, eventArgs) {
	            var node = eventArgs.get_node();
	
	            if (oldNode != null) {
	                oldNode.set_checked(false);
	            }
	
	            node.set_checked(true);
	            oldNode = node;
	        }
	
	        function pageLoad() {
	            var tree = $find("<%= RadTreeView1.ClientID  %>");
	            var checkedNodes = tree.get_checkedNodes();
	            if (checkedNodes) {
	                //this will ensure the correct behavior even if a node is checked server-side
	                oldNode = checkedNodes[0];
	            }
	        }
	    </script>
	
	    ...
	    <telerik:RadTreeView ID="RadTreeView1" runat="server" CheckBoxes="True" OnClientNodeChecked="clientNodeChecked">
	    </telerik:RadTreeView>
````




