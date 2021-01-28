---
title: Loading Items from XML
page_title: Loading Items from XML - RadPanelBar
description: Check our Web Forms article about Loading Items from XML.
slug: panelbar/radpanelbar-items/loading-items-from-xml
tags: loading,items,from,xml
published: True
position: 5
---

# Loading Items from XML



You can easily load the items of a panel bar from an XML source, as long as the source conforms to the following structure:

* The top level consists of a single node, called `<PanelBar>`. This node can include attributes for the **RadPanelBar** properties:

````XML

<?xml version="1.0" encoding="utf-8" ?>
<PanelBar Skin="Outlook">
   ...
</PanelBar>
	
````



* Immediately below the `<PanelBar>` node is a set of `<Item>` nodes, which represent the root items in the panel bar. The attributes of the `<Item>` node correspond to the properties and custom attributes of the panel item. Any child items are represented by `<Item>` nodes nested within the parent `<Item>` node:

````XML
<Item Text="Products" Expanded="True" >
	<Item Text="RadEditor" />
	<Item Text="RadPanelBar" />
	<Item Text="RadMenu" />
	<Item Text="RadTabStrip" />
</Item>
<Item Text="Support" >
	<Item Text="Knowledge Base" />
	<Item Text="Forums" />
	<Item Text="Articles" />
	<Item Text="FAQ" />
</Item> 
````



>note To discover the way to represent a specific **RadPanelBar** feature in XML, create a **RadPanelBar** with the feature and use the **RadPanelBar.GetXml** method to get the corresponding XML string.
>


Once you have an XML file of the proper format, or an XML string in the proper format, you can use it to populate a **RadPanelBar** object (for example, in a Page_Load event handler).

## Loading from an XML file

Create an XML file with content that complies with the rules described above and call the **LoadContentFile** method to load the items, passing in the path to the file:



````C#
	     
RadMenu1.LoadContentFile("~/App_Data/panelBar.xml");
				
````
````VB.NET
	
RadMenu1.LoadContentFile("~/App_Data/panelBar.xml")
	
````


## Loading from an XML string

Create a string with valid XML content (or fetch it from a database, for example) and use the **LoadXML** method to populate the panel bar from the string:



````C#
	     	
StringBuilder sb = new StringBuilder();
sb.Append("<PanelBar>");
sb.Append(" <Item Text='Root1'>");
sb.Append("   <Item Text='Child11'/>");
sb.Append(" </Item>");
sb.Append("</PanelBar>");
string xmlString = sb.ToString();
RadPanelBar1.LoadXml(xmlString);
				
````
````VB.NET
	
Dim sb As New StringBuilder()
sb.Append("<PanelBar>")
sb.Append(" <Item Text='Root1'>")
sb.Append(" <Item Text='Child11'/>")
sb.Append(" </Item>")
sb.Append("</PanelBar>")
Dim xmlString As String = sb.ToString()
RadPanelBar1.LoadXml(xmlString)
	
````


>note You can also populate **RadPanelBar** from an XML file or string using an **XmlDataSource** component. When using **XmlDataSource** , the XML file does not have to follow the format shown in this topic. See [Binding to Hierarchical DataSource Components]({%slug panelbar/data-binding/binding-to-hierarchical-datasource%}) for details.
>


You can use the **GetXml** method to get the XML content of a panel bar and then create a new panel bar that copies the first panel bar's structure:





````C#
	     
RadPanelBar2.LoadXml(RadPanelBar1.GetXml());
				
````
````VB.NET
	
RadPanelBar2.LoadXml(RadPanelBar1.GetXml()) 
	
````

