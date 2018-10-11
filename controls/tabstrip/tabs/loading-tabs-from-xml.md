---
title: Loading Tabs from XML
page_title: Loading Tabs from XML | RadTabStrip for ASP.NET AJAX Documentation
description: Loading Tabs from XML
slug: tabstrip/tabs/loading-tabs-from-xml
tags: loading,tabs,from,xml
published: True
position: 7
---

# Loading Tabs from XML

You can easily load the tabs of a tab strip from an XML source, as long as the source conforms to the following structure:

1. The top level consists of a single node, called <TabStrip>. This node can include attributes for the **RadTabStrip** properties:

````XML	  
<?xml version="1.0" encoding="utf-16"?>
<TabStrip
 SelectedIndex="0"
 MultiPageID="RadMultiPage1"
 Skin="Vista" >

 ...
</TabStrip> 	  
````

1. Immediately below the <TabStrip> node is a set of <Tab> nodes, where each node represents a root-level tab. The attributes of the <Tab> node correspond to the properties and custom attributes of the tab. Any child tabs are nested within the <Tab> node:

````XML	 
<Tab Selected="True" ScrollChildren="True" Text="Tab 1">
	<Tab PageViewID="RadPageView1" Text="Child 1" />
	<Tab IsBreak="True" PageViewID="RadPageView2" Text="Child 2" />
	<Tab PageViewID="RadPageView3" Text="Child 3" />
</Tab> 				
````

>tip To discover the way to represent a specific **RadTabStrip** feature in XML, create a **RadTabStrip** with the feature and use the **RadTabStrip.GetXml** method to get the corresponding XML string.
>


Once you have an XML file of the proper format, or an XML string in the proper format, you can use it to populate a **RadTabStrip** object.

## Loading from an XML file

Create an XML file with content that complies with the rules described above and call the **LoadContentFile** method to load the items, passing in the path to the file:

````C#
RadTabStrip1.LoadContentFile("~/App_Data/tabStructure.xml");				
````
````VB.NET
RadTabStrip1.LoadContentFile("~/App_Data/tabStructure.xml")	
````

## Loading from an XML string

Create a string with valid XML content (or fetch it from a database, for example) and use the **LoadXML** method to populate the tab strip from the string:

````C#
StringBuilder sb = new StringBuilder();
sb.Append("<TabStrip>");
sb.Append(" <Tab Text='Root 1'>");
sb.Append(" <Tab Text='Child 1' />");
sb.Append(" </Tab>");
sb.Append(" <Tab Text='Root 2' />");
sb.Append(" <Tab Text='Root 3' />");
sb.Append(" </TabStrip>");
RadTabStrip1.LoadXml(sb.ToString());				
````
````VB.NET
Dim sb As New StringBuilder()
sb.Append("<TabStrip>")
sb.Append(" <Tab Text='Root 1'>")
sb.Append(" <Tab Text='Child 1' />")
sb.Append(" </Tab>")
sb.Append(" <Tab Text='Root 2' />")
sb.Append(" <Tab Text='Root 3' />")
sb.Append(" </TabStrip>")
RadTabStrip1.LoadXml(sb.ToString())				
````

>tip You can also populate **RadTabStrip** from an XML file using an **XmlDataSource** component. When using **XmlDataSource** , the XML file does not have to follow the format shown in this topic.
>

# See Also

 * [Overview]({%slug tabstrip/tabs/overview%})
