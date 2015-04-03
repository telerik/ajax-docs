---
title: OnClientNodeExpanded
page_title: OnClientNodeExpanded | UI for ASP.NET AJAX Documentation
description: OnClientNodeExpanded
slug: navigation/client-side-programming/events/onclientnodeexpanded
tags: onclientnodeexpanded
published: True
position: 7
---

# OnClientNodeExpanded



The following article demonstrates how to use and subscribe to the __OnClientNodeExpanded__ client-side event of the __RadNavigation__ control.

## 

The client-side __OnClientNodeExpanded__ event of the __RadNavigation__ is raised immediately after some Node is expanded. To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the __OnClientNodeClicked__ property.The client-side __OnClientNodeExpanded__ event handler receives two arguments:

* sender — the RadNavigation object that fired the event.

* Event arguments—an event arguments object that exposes the following methods:


>caption ButtonClicking Event Arguments Object

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
|get_node()||Telerik.Web.UI.NavigationNode|Returns an instance of NavigationNode that has just been expanded.|

__Example 1__: Handle the __RadNavigation__'s client-side __OnClientNodeExpanded__ event.

````JavaScript
	            <script type="text/javascript">
	                function OnClientNodeExpanded(sender, eventArgs) {
	                    alert("the Node that has just been expanded has text: " + eventArgs.get_node().get_text());
	                }
	            </script>
	
	            <telerik:RadNavigation runat="server" ID="RadNavigation1" OnClientNodeExpanded="OnClientNodeExpanded">
	                <Nodes>
	                    <telerik:NavigationNode Text="Node1">
	                        <Nodes>
	                            <telerik:NavigationNode Text="ChildNode1"></telerik:NavigationNode>
	                            <telerik:NavigationNode Text="ChildNode2"></telerik:NavigationNode>
	                            <telerik:NavigationNode Text="ChildNode3"></telerik:NavigationNode>
	                            <telerik:NavigationNode Text="ChildNode4"></telerik:NavigationNode>
	                        </Nodes>
	                    </telerik:NavigationNode>
	                    <telerik:NavigationNode Text="Node2"></telerik:NavigationNode>
	                    <telerik:NavigationNode Text="Node3"></telerik:NavigationNode>
	                </Nodes>
	            </telerik:RadNavigation>
````


