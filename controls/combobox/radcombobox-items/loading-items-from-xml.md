---
title: Loading Items from XML
page_title: Loading Items from XML | UI for ASP.NET AJAX Documentation
description: Loading Items from XML
slug: combobox/radcombobox-items/loading-items-from-xml
tags: loading,items,from,xml
published: True
position: 2
---

# Loading Items from XML



XML can also serve as a data provider for the __RadComboBox__ control. The format of the XML, however, must follow a structure similar to the <Items></Items> section of an [in-line RadComboBox declaration]({%slug combobox/radcombobox-items/declaring-the-items-in-line%}). It must have:

1. A single root with the <Items> tag:

````XML
	<Items>
	
	</Items>
	
````



1. A number of child nodes with the <Item></Item> tag:

````XML
	<Items>
	  <Item Text="Africa" Value="1" />
	  <Item Text="Australia" Value="2" />
	  <Item Text="Asia" Value="3" />
	  <Item Text="Europe" Value="4" />
	  <Item Text="North America" Value="5" />
	  <Item Text="South America" Value="6" />
	</Items>
````



1. All [item properties]({%slug combobox/radcombobox-items/overview%}) can be mapped on the respective XML nodes as attributes. In addition, you can use any [custom attributes]({%slug combobox/radcombobox-items/custom-attributes%}) that are not available as properties:

````XML
	<Items>
	  <Item Text="Africa" Value="1" Enabled="True" />
	  <Item Text="Australia" Value="2" Select="False" />
	  <Item Text="Asia" Value="3" CustomAttribute="CustomData" />
	</Items>
````



You can populate the RadComboBox from an XML, using one of the following methods:

* From a static XML file, using the __LoadContentFile__ method.

* From a string of XML, using the __LoadXml__ method.

## Loading from an XML file

Create an XML file with content that complies with the rules described above and call the __LoadContentFile__ method, passing in the path to the file:



````C#
	     
	    RadComboBox1.LoadContentFile("~/App_Data/content.xml");
				
````
````VB.NET
	
	     RadComboBox1.LoadContentFile("~/App_Data/content.xml")
	
````


## Loading from an XML string

Create a string with valid XML content (or fetch it from a database, for example) and use the __LoadXML__ method to populate the RadComboBox from the string:



````C#
	     
	
	    StringBuilder sb = new StringBuilder();
	    sb.Append("<Items>");
	    sb.Append(" <Item Text='Africa' />");
	    sb.Append(" <Item Text='Australia' />");
	    sb.Append(" <Item Text='Asia' />");
		sb.Append("</Items>");
	
	    string xmlString = sb.ToString();
	    RadComboBox1.LoadXml(xmlString);
				
````
````VB.NET
	
	
	    Dim sb As New StringBuilder()
	    sb.Append("<Items>")
	    sb.Append(" <Item Text='Africa' />")
	    sb.Append(" <Item Text='Australia' />")
	    sb.Append(" <Item Text='Asia' />")
	    sb.Append("</Items>")
	
	    Dim xmlString As String = sb.ToString()
	    RadComboBox1.LoadXml(xmlString)
	
````

