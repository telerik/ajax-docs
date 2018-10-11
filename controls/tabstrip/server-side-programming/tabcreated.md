---
title: TabCreated
page_title: TabCreated | RadTabStrip for ASP.NET AJAX Documentation
description: TabCreated
slug: tabstrip/server-side-programming/tabcreated
tags: tabcreated
published: True
position: 2
---

# TabCreated

## 

**TabCreated** occurs every time a new tab is added to **Tabs** collection of the **RadTabStrip** instance or to the **Tabs** collection of a tab in the tab strip. **TabCreated** occurs for all tabs, not just those that result from data binding (when the **DataSource** or **DataSourceID** property is set).If the tab strip is bound to a data source, this event occurs *before* any data binding: that is, before any properties have been set to reflect the data from the data source.

>tip When working with data-bound tab strips, it can be more useful to use the **[TabDataBound event]({%slug tabstrip/server-side-programming/tabdatabound%})** , which occurs after the tab properties have been set to reflect the data source and which provides access to the **DataItem** property of a tab.
>


The **TabCreated** event handler receives two arguments:

1. The **RadTabStrip** to which the tab was just added. This argument is of type object, but can be cast to the **RadTabStrip** type.

1. A **RadTabStripEventArgs** object. This object has a **Tab** property that you can use to access the tab that was just added.

Use an **TabCreated** event handler to initialize tabs as they are added to the tab strip when it is not data bound (for example, when they are [loaded from an XML file]({%slug tabstrip/tabs/loading-tabs-from-xml%})).

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

