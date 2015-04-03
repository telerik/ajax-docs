---
title: Validation
page_title: Validation | UI for ASP.NET AJAX Documentation
description: Validation
slug: treeview/accessibility-and-internationalization/validation
tags: validation
published: True
position: 3
---

# Validation



You can use the built in ASP.NET validation with __RadTreeView__.

## Validating the TreeView with RequiredFieldValidator

To validate for selected node of a treeview, just specify the ID of the tree in the __ControlToValidate__ property of the __RequiredFieldValidator__. Validation checks to see if there is at least one selected node.

````ASPNET
	    <telerik:RadTreeView runat="server" ID="RadTreeView1">
	        <Nodes>
	            ...</Nodes>
	    </telerik:RadTreeView>
	    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" ControlToValidate="RadTreeView1"
	        runat="server" ErrorMessage="Please select a node"></asp:RequiredFieldValidator>
````



If no node is selected, the validator detects an error and displays the error message:


>caption 

![RadTreeView Validation](images/treeview_accessibilityvalidation01.png)



## Validating the TreeView using the CompareValidator

You can validate the treeview using the CompareValidator. You need to specify the ID of the tree in the __ControlToValidate__ property, the __Operator__ and __ValueToCompare__ properties. The validation will be made against the __Value__ property of the nodes if they have values and if not - against their __Text__ property.

````ASPNET
	    <telerik:RadTreeView runat="server" ID="RadTreeView1" Skin="Hay">
	        <Nodes>
	            <telerik:RadTreeNode runat="server" Text="Australia" Value="RootItems">
	                <Nodes>
	                    <telerik:RadTreeNode runat="server" Text="Sidney">
	                    </telerik:RadTreeNode>
	                    <telerik:RadTreeNode runat="server" Text="Brisbane">
	                    </telerik:RadTreeNode>
	                </Nodes>
	            </telerik:RadTreeNode>
	            <telerik:RadTreeNode runat="server" Text="France" Value="RootItems">
	                <Nodes>
	                    <telerik:RadTreeNode runat="server" Text="Paris">
	                    </telerik:RadTreeNode>
	                </Nodes>
	            </telerik:RadTreeNode>
	            <telerik:RadTreeNode runat="server" Text="USA" Value="RootItems">
	            </telerik:RadTreeNode>
	        </Nodes>
	    </telerik:RadTreeView>
	    <asp:CompareValidator ID="CompareValidator1" runat="server" ControlToValidate="RadTreeView1"
	        ErrorMessage="Please select a City" Operator="NotEqual" ValueToCompare="RootItems"></asp:CompareValidator>
````



If a root nodes is selected, the validator detects an error and displays the error message:


>caption 

![RadTreeView Validation](images/treeview_accessibilityvalidation02.PNG)



## Causing Validation

The treeview can trigger validation of other controls on the form when it performs a post-back to the server. Simply set the __CausesValidation__ property to __True__.

By default, all validators on the Web page must be successful before the postback can occur. You can limit the controls that must be validated when the treeview performs a post-back, while still allowing other controls on the Web page to be validated, by using __Validation Groups__. The validator controls have a __ValidationGroup__ property. The treeview also has a __ValidationGroup__ property. The treeview only causes validation by those validators whose __ValidationGroup__ property matches the __ValidationGroup__ property of the treeview. (The reason the default behavior is for all validators to execute on post-back is because the default value of the __ValidationGroup__ property on both treeview and validators is an empty string.)

For a live example, see [Validation Groups](http://demos.telerik.com/aspnet-ajax/treeview/examples/functionality/validating/defaultcs.aspx)



# See Also

 * [Validating RadTreeView Online Example](http://demos.telerik.com/aspnet-ajax/treeview/examples/functionality/validating/defaultcs.aspx)

 * [Validate Treeview by Checked Nodes]({%slug treeview/application-scenarios/checkboxes/validate-treeview-by-checked-nodes%})
