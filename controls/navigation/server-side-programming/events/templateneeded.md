---
title: TemplateNeeded
page_title: TemplateNeeded | UI for ASP.NET AJAX Documentation
description: TemplateNeeded
slug: navigation/server-side-programming/events/templateneeded
tags: templateneeded
published: True
position: 2
---

# TemplateNeeded

## 

Occurs before template is being applied to the navigation node.

The NodeDataBound event handler receives two arguments:

1. The Navigation that is loading the nodes. This argument is of type object, but can be cast to the **RadNavigation** type.

1. An **EventArgs** object. This object has an Node property, which provides access to the node that expects receive a template. This node, in turn, has a NodeTemplate property, which has to be set.

````ASPNET
<telerik:RadNavigation runat="server" ID="RadNavigation2" DataFieldID="id"  DataKeyNames="Text" DataFieldParentID="parentID" 
DataTextField="Text" OnTemplateNeeded="RadNavigation_TemplateNeeded">
</telerik:RadNavigation>
````

````C#
protected void RadNavigation1_TemplateNeeded(object sender, NavigationNodeEventArguments e)
{
	e.Node.NodeTemplate = new LabelDataBoundTemplate();
}
````
````VB.NET
Protected Sub RadNavigation1_TemplateNeeded(sender As Object, e As NavigationNodeEventArguments)
	e.Node.NodeTemplate = New LabelDataBoundTemplate()
End Sub
````

# See Also

 * [Overview]({%slug navigation/server-side-programming/events/overview%})

 * [Server Templates]({%slug navigation/templates/server-templates%})
