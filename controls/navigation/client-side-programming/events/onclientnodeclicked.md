---
title: OnClientNodeClicked
page_title: OnClientNodeClicked | UI for ASP.NET AJAX Documentation
description: OnClientNodeClicked
slug: navigation/client-side-programming/events/onclientnodeclicked
tags: onclientnodeclicked
published: True
position: 3
---

# OnClientNodeClicked



The following article demonstrates how to use and subscribe to the __OnClientNodeClicked__ client-side event of the __RadNavigation__ control.

## 

The client-side __OnClientNodeClicked__ event of the __RadNavigation__ is raised immediately after the user clicks on a Node. To handle this event, simply write a JavaScript function that can be called when the event occurs.Then assign the name of this function as the value of the __OnClientNodeClicked__ property.The client-side __OnClientNodeClicked__ event handler receives two arguments:

* sender — the RadNavigation object that fired the event.

* Event arguments—an event arguments object that exposes the following methods:


>caption ButtonClicking Event Arguments Object

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
|get_node()||Telerik.Web.UI.NavigationNode|Returns an instance of NavigationNode that has just been clicked.|

__Example 1__: Handle the __RadNavigation__'s client-side __OnClientNodeClicked__ event.

````JavaScript
	            <script type="text/javascript">
	                function OnClientNodeClicked(sender, eventArgs) {
	                    var clickedNodeText = eventArgs.get_node().get_text();
	                    alert("You have just clicked on node with text " + clickedNodeText);
	                }
	            </script>
	
	            <telerik:radnavigation runat="server" id="RadNavigation1" onclientnodeclicked="OnClientNodeClicked">
	                <Nodes>
	                    <telerik:NavigationNode Text="Node1"></telerik:NavigationNode>
	                    <telerik:NavigationNode Text="Node2"></telerik:NavigationNode>
	                    <telerik:NavigationNode Text="Node3"></telerik:NavigationNode>
	                </Nodes>
	            </telerik:radnavigation>
````


