---
title: Custom Attributes Overview
page_title: Custom Attributes Overview | RadTreeView for ASP.NET AJAX Documentation
description: Custom Attributes Overview
slug: treeview/custom-attributes/custom-attributes-overview
tags: custom,attributes,overview
published: True
position: 0
---

# Custom Attributes Overview



## 

It is not always possible to provide all properties that might be needed for a given scenario. The RadTreeNode object provides a special collection called **Attributes** that can store any number of name and value pairs.

>caution The custom attribute's name should not be an **HTML reserved word** . Please see[this article]({%slug treeview/troubleshooting/custom-attributes%})for more information.
>


* [Attributes can be defined declaratively]({%slug treeview/custom-attributes/using-custom-attributes-declaratively%}) by simply adding HTML attributes to a RadTreeNode tag.

* To add an attribute at runtime on the server, use the **Add()** method of the RadTreeNode **Attributes** object passing a key string and a value string.



````C#
	     
		RadTreeNode root1 = new RadTreeNode("root1");
	    root1.Attributes.Add("My Key", "My Value");
	    RadTreeView1.Nodes.Add(root1);
				
````
````VB.NET
	     
	    Dim root1 As New RadTreeNode("root1")
	    root1.Attributes.Add("My Key", "My Value")
	    RadTreeView1.Nodes.Add(root1)
				
````


* [Attributes can be accessed in server-side code]({%slug treeview/custom-attributes/using-custom-attributes-at-the-server%}) by addressing the RadTreeNode **Attributes** collection.

* [Attributes can be accessed in client-side code]({%slug treeview/custom-attributes/using-custom-attributes-at-the-client%}) using the **getAttributes()** function. See also the [Custom Attributes online demo](http://demos.telerik.com/aspnet-ajax/TreeView/Examples/ApplicationScenarios/CustomAttributes/DefaultCS.aspx) for another example.

* [Attributes can be used to locate nodes]({%slug treeview/server-side-programming/finding-nodes-at-runtime%}) using the RadTreeView's or RadTreeView.Nodes's**FindNodeByAttribute()** method. Also see the [Tutorial: Finding Nodes]({%slug treeview/server-side-programming/tutorial:-finding-nodes%}) topic.

# See Also

 * [Custom Attributes]({%slug treeview/troubleshooting/custom-attributes%})
