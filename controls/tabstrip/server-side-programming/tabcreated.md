---
title: TabCreated
page_title: TabCreated | UI for ASP.NET AJAX Documentation
description: TabCreated
slug: tabstrip/server-side-programming/tabcreated
tags: tabcreated
published: True
position: 2
---

# TabCreated



## 

__TabCreated__ occurs every time a new tab is added to __Tabs__ collection of the __RadTabStrip__ instance or to the __Tabs__ collection of a tab in the tab strip. __TabCreated__ occurs for all tabs, not just those that result from data binding (when the __DataSource__ or __DataSourceID__ property is set).If the tab strip is bound to a data source, this event occurs *before* any data binding: that is, before any properties have been set to reflect the data from the data source.

>note When working with data-bound tab strips, it can be more useful to use the __[TabDataBound event]({%slug tabstrip/server-side-programming/tabdatabound%})__ , which occurs after the tab properties have been set to reflect the data source and which provides access to the __DataItem__ property of a tab.
>


The __TabCreated__ event handler receives two arguments:

1. The __RadTabStrip__ to which the tab was just added. This argument is of type object, but can be cast to the __RadTabStrip__ type.

1. A __RadTabStripEventArgs__ object. This object has a __Tab__ property that you can use to access the tab that was just added.

Use an __TabCreated__ event handler to initialize tabs as they are added to the tab strip when it is not data bound (for example, when they are [loaded from an XML file]({%slug tabstrip/tabs/loading-tabs-from-xml%})).





````C#
	
	protected void RadTabStrip1_TabCreated(object sender, RadTabStripEventArgs e)
	{
	   e.Tab.ToolTip = e.Tab.Text;
	} 
				
````
````VB.NET
	
	Protected Sub RadTabStrip1_TabCreated(ByVal sender As Object, ByVal e As RadTabStripEventArgs)
	 e.Tab.ToolTip = e.Tab.Text
	End Sub 
	
````

