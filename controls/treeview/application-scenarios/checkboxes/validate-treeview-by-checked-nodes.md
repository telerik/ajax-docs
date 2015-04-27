---
title: Validate Treeview by Checked Nodes
page_title: Validate Treeview by Checked Nodes | RadTreeView for ASP.NET AJAX Documentation
description: Validate Treeview by Checked Nodes
slug: treeview/application-scenarios/checkboxes/validate-treeview-by-checked-nodes
tags: validate,treeview,by,checked,nodes
published: True
position: 4
---

# Validate Treeview by Checked Nodes



By design, the RequiredFieldValidator can [validate RadTreeView]({%slug treeview/accessibility-and-internationalization/validation%}) for a selected node.

This article shows two methods of validating RadTreeView for a **checked** nodes. In this way, you will be sure that there is at least one checked node of your treeview.

## Using the RequiredFieldValidator

In order this to work, you need to select/unselect the node on its checking/unchecking.

Here is the relevant code:

````ASPNET
	    <telerik:RadTreeView ID="RadTreeView1" runat="server" CheckBoxes="true" OnClientNodeChecked="OnClientNodeCheckedHandler"
	        Skin="Sunset">
	    </telerik:RadTreeView>
````



````JavaScript
	
	        function OnClientNodeCheckedHandler(sender, eventArgs) {
	            var node = eventArgs.get_node();
	            node.set_selected(node.get_checked());
	        }
	
````





````ASPNET
	    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="RadTreeView1"
	        ErrorMessage="Please check at least one node">
	    </asp:RequiredFieldValidator>
````





## Using the CustomValidator

The custom validator will check if the array containing the checked nodes has at least one node.

````ASPNET
	    <telerik:RadTreeView ID="RadTreeView2" runat="server" CheckBoxes="true" Skin="Hay">
	    </telerik:RadTreeView>
````



````ASPNET
	    <asp:CustomValidator ID="CustomValidator1" runat="server" ClientValidationFunction="validateTreeViewCheckboxes"
	        ErrorMessage="Please check at least one node" OnServerValidate="CustomValidator1_ServerValidate">
	    </asp:CustomValidator>
````



````JavaScript
	
	        function validateTreeViewCheckboxes(source, args) {
	            var tree = $find("<%= RadTreeView2.ClientID %>");
	            args.IsValid = tree.get_checkedNodes().length > 0;
	        }
	
````





````C#
	
	    protected void CustomValidator1_ServerValidate(object source, ServerValidateEventArgs args) 
	    { 
	        args.IsValid = RadTreeView2.CheckedNodes.Count > 0; 
	    }
	
````
````VB.NET
	
	    Protected Sub CustomValidator1_ServerValidate(ByVal source As Object, ByVal args As ServerValidateEventArgs) Handles CustomValidator1.ServerValidate
	        args.IsValid = RadTreeView2.CheckedNodes.Count > 0
	    End Sub
	
	
````


# See Also

 * [Validation]({%slug treeview/accessibility-and-internationalization/validation%})
