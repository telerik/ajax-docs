---
title: TabClick
page_title: TabClick | UI for ASP.NET AJAX Documentation
description: TabClick
slug: tabstrip/server-side-programming/tabclick
tags: tabclick
published: True
position: 1
---

# TabClick



## 

The server-side __TabClick__ event occurs when the user clicks on a tab, causing a postback.

The __TabClick__ event handler receives two arguments:

1. The __RadTabStrip__ that contains the clicked tab. This argument is of type object, but can be cast to the __RadTabStrip__ type.

1. A __RadTabStripEventArgs__ object. This object has a __Tab__property that you can use to access the tab that was clicked.

Use the __TabClick__ event handler to respond when the user clicks a tab in the tab strip:





````C#
	
	protected void RadTabStrip1_TabClick(object sender, RadTabStripEventArgs e)
	{
	   Telerik.Web.UI.RadTab TabClicked = e.Tab;
	   Label1.Text = TabClicked.Value;
	} 
				
````
````VB.NET
	
	Protected Sub RadTabStrip1_TabClick(ByVal sender As Object, ByVal e As RadTabStripEventArgs)
	 Dim TabClicked As Telerik.Web.UI.RadTab = e.Tab
	 Label1.Text = TabClicked.Value
	End Sub 
				
````

