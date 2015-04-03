---
title: Loading Items from XML
page_title: Loading Items from XML | UI for ASP.NET AJAX Documentation
description: Loading Items from XML
slug: panelbar/radpanelbar-items/loading-items-from-xml
tags: loading,items,from,xml
published: True
position: 5
---

# Loading Items from XML



You can easily load the items of a panel bar from an XML source, as long as the source conforms to the following structure:

1. The top level consists of a single node, called <PanelBar>. This node can include attributes for the __RadPanelBar__ properties:

````XML
	    <?xml version="1.0" encoding="utf-8" ?>
	    <PanelBar Skin="Outlook">
	       ...
	    </PanelBar>
	
````



1. Immediately below the <PanelBar> node is a set of <Item> nodes, which represent the root items in the panel bar. The attributes of the <Item> node correspond to the properties and custom attributes of the panel item. Any child items are represented by <Item> nodes nested within the parent <Item> node:

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



>note To discover the way to represent a specific __RadPanelBar__ feature in XML, create a __RadPanelBar__ with the feature and use the __RadPanelBar.GetXml__ method to get the corresponding XML string.
>


Once you have an XML file of the proper format, or an XML string in the proper format, you can use it to populate a __RadPanelBar__ object (for example, in a Page_Load event handler).

## Loading from an XML file

Create an XML file with content that complies with the rules described above and call the __LoadContentFile__ method to load the items, passing in the path to the file:

>tabbedCode

````C#
	     
			RadMenu1.LoadContentFile("~/App_Data/panelBar.xml");
				
````



````VB.NET
	
			RadMenu1.LoadContentFile("~/App_Data/panelBar.xml")
	
````


>end

## Loading from an XML string

Create a string with valid XML content (or fetch it from a database, for example) and use the __LoadXML__ method to populate the panel bar from the string:

>tabbedCode

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


>end

>note You can also populate __RadPanelBar__ from an XML file or string using an __XmlDataSource__ component. When using __XmlDataSource__ , the XML file does not have to follow the format shown in this topic. See[Binding to Hierarchical DataSource Components]({%slug panelbar/data-binding/binding-to-hierarchical-datasource%})for details.
>


You can use the __GetXml__ method to get the XML content of a panel bar and then create a new panel bar that copies the first panel bar's structure:



>tabbedCode

````C#
	     
		RadPanelBar2.LoadXml(RadPanelBar1.GetXml());
				
````



````VB.NET
	
		RadPanelBar2.LoadXml(RadPanelBar1.GetXml()) 
	
````


>end
