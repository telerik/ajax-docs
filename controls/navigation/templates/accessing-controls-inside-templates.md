---
title: Accessing Controls Inside Templates
page_title: Accessing Controls Inside Templates - RadNavigation
description: Check our Web Forms article about Accessing Controls Inside Templates.
slug: navigation/templates/accessing-controls-inside-templates
tags: accessing,controls,inside,templates
published: True
position: 2
---

# Accessing Controls Inside Templates



The following example demonstrates how to find **RadDropDownList** control nested in a NodeTemplate of a **RadNavigation**.

Here follows the markup:

````ASPNET
<telerik:RadNavigation runat="server" ID="RadNavigation1" Skin="Silk">
    <Nodes>
        <telerik:NavigationNode Text="Node with RadDropDownList">
            <NodeTemplate>
                <telerik:RadDropDownList ID="RadDropDownList1" runat="server"></telerik:RadDropDownList>
            </NodeTemplate>
        </telerik:NavigationNode>
    </Nodes>
</telerik:RadNavigation>
````



## How to find RadDropDownList object server-side

You need to search for the RadDropDownList in the Controls collection of the RadNavigation's nodes:



````C#
	
RadDropDownList dropDownList = (RadDropDownList)RadNavigation1.Nodes[0].FindControl("RadDropDownList1");
	          
````
````VB.NET
	 
Dim dropDownList As RadDropDownList = DirectCast(RadNavigation1.Nodes(0).FindControl("RadDropDownList1"), RadDropDownList)
				
````


## How to find RadDropDownList object client-side

Here are the available options to find the RadTreeView object in RadComboBox, on the client:

````JavaScript
	
var dropDownList = $find("<%= RadNavigation1.FindNodeByText("Node with RadDropDownList").FindControl("RadDropDownList1").ClientID %>");

````



