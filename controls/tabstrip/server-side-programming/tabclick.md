---
title: TabClick
page_title: TabClick | RadTabStrip for ASP.NET AJAX Documentation
description: TabClick
slug: tabstrip/server-side-programming/tabclick
tags: tabclick
published: True
position: 1
---

# TabClick



## 

The server-side **TabClick** event occurs when the user clicks on a tab, causing a postback.

The **TabClick** event handler receives two arguments:

1. The **RadTabStrip** that contains the clicked tab. This argument is of type object, but can be cast to the **RadTabStrip** type.

1. A **RadTabStripEventArgs** object. This object has a **Tab**property that you can use to access the tab that was clicked.

Use the **TabClick** event handler to respond when the user clicks a tab in the tab strip:





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

