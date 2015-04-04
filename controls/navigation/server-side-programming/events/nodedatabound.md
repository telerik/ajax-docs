---
title: NodeDataBound
page_title: NodeDataBound | UI for ASP.NET AJAX Documentation
description: NodeDataBound
slug: navigation/server-side-programming/events/nodedatabound
tags: nodedatabound
published: True
position: 1
---

# NodeDataBound



## 

The __NodeDataBound__ event occurs for each new node that is added to the __Nodes__ collection of the Navigation when it is bound.This event only occurs if the nodes are loaded from a data source (the __DataSource__ or __DataSourceID__ property is set).

For each node that is added from a data source, the following events occur:

1. A new node is created and added to the Nodes collection.

1. The __ItemDataBound__ event occurs.

The __NodeDataBound__ event handler receives two arguments:

1. The __Navigation__ that is loading the nodes. This argument is of type object, but can be cast to the __RadNavigation__ type.

1. An EventArgs object. This object has an __Node__ property, which provides access to the node that was just bound. This item, in turn, has a __DataItem__ property,which lets you access the item in the data source to which the __NavigationNode__ is being bound.

Use the __NodeDataBound__ event handler to make changes to items as they are bound to the data.For example, you can set custom attributes based on other fields in the DataItem:

````ASPNET
	            <telerik:RadNavigation runat="server" ID="RadNavigation1" OnNodeDataBound="RadNavigation1_NodeDataBound" />
````





````C#
	    protected void RadNavigation1_NodeDataBound(object sender, NavigationNodeEventArguments e)
	    {
	        if (e.Node.Text == "Home")
	        {
	            e.Node.Selected = true;
	        }
	    }
````
````VB.NET
	    Protected Sub RadNavigation1_NodeDataBound(sender As Object, e As NavigationNodeEventArguments)
	        If e.Node.Text = "Home" Then
	            e.Node.Selected = True
	        End If
	    End Sub
````


# See Also

 * [Overview]({%slug navigation/server-side-programming/events/overview%})
