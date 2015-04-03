---
title: Cloning a RadTreeView
page_title: Cloning a RadTreeView | UI for ASP.NET AJAX Documentation
description: Cloning a RadTreeView
slug: treeview/application-scenarios/server-side-programming/cloning-a-radtreeview
tags: cloning,a,radtreeview
published: True
position: 0
---

# Cloning a RadTreeView



## 

To clone a Tree, use the __GetXml()__ and __LoadXmlString()__ methods of RadTreeView.

````ASPNET
	    <telerik:RadTreeView ID="RadTreeView1" runat="server">
	        <Nodes>
	            ...
	        </Nodes>
	    </telerik:RadTreeView>
	    <telerik:RadTreeView ID="RadTreeView2" runat="server">
	    </telerik:RadTreeView>
	    <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Button" />
````



>tabbedCode

````C#
	     
		RadTreeView2.LoadXmlString(RadTreeView1.GetXml());
				
````



````VB.NET
	     
		RadTreeView2.LoadXmlString(RadTreeView1.GetXml())
				
````


>end
