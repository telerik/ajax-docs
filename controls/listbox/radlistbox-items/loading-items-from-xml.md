---
title: Loading Items from XML
page_title: Loading Items from XML | UI for ASP.NET AJAX Documentation
description: Loading Items from XML
slug: listbox/radlistbox-items/loading-items-from-xml
tags: loading,items,from,xml
published: True
position: 2
---

# Loading Items from XML



One of the ways to specify the items in a __RadListBox__ control is using XML. The format of the XML must follow a structure similar to the <Items></Items> section of an [inline RadListBox declaration]({%slug listbox/radlistbox-items/declaring-the-items-inline%}). That is, it must have:

* A single root with the <Items> tag:

````XML
	    
		<Items></Items> 
````



* A number of child nodes with the <Item></Item> tag:

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



* All item properties can be mapped on the respective XML nodes as attributes. In addition, you can use any custom attributes that are not available as properties:

````XML
		<Items>
	        <Item Text="Africa" Value="1" Enabled="True" />
	        <Item Text="Australia" Value="2" Select="False" />
	        <Item Text="Asia" Value="3" CustomAttribute="CustomData" />
	    </Items>
````



You can populate RadListBox from an XML using one of the following methods:

* From a static XML file, using the __LoadContentFile__ method.

* From a string of XML, using the __LoadXml__ method.

## Loading items from an XML file

Create an XML file with content that complies with the rules described above and call the __LoadContentFile__ method, passing in the path to the file:

>tabbedCode

````C#
	     
	    RadListBox1.LoadContentFile("ListBox.xml");
				
````
````VB.NET
	     
		RadListBox1.LoadContentFile("ListBox.xml") 
				
````
>end

## Loading items from an XML string

Create a string with valid XML content (or fetch it from a database, for example) and use the __LoadXml__ method to populate the ListBox from the string:

>tabbedCode

````C#
	    StringBuilder sb = new StringBuilder();
	    sb.Append("<Items>");
	    sb.Append(" <Item Text='Africa' />");
	    sb.Append(" <Item Text='Australia' />");
	    sb.Append(" <Item Text='Asia' />");
	    sb.Append("</Items>");
	    string xmlString = sb.ToString();
	    RadListBox2.LoadXml(xmlString);
````
````VB.NET
	    Dim sb As New StringBuilder()
	    sb.Append("<Items>")
	    sb.Append(" <Item Text='Africa' />")
	    sb.Append(" <Item Text='Australia' />")
	    sb.Append(" <Item Text='Asia' />")
	    sb.Append("</Items>")
	    Dim xmlString As String = sb.ToString()
	    RadListBox2.LoadXml(xmlString) 
````
>end

# See Also

 * [Overview]({%slug listbox/radlistbox-items/overview%})

 * [Declaring the Items Inline]({%slug listbox/radlistbox-items/declaring-the-items-inline%})

 * [Binding to ASP.NET Datasource Components]({%slug listbox/data-binding/binding-to-asp.net-datasource-components%})

 * [Xml String Binding Demo](http://demos.telerik.com/aspnet-ajax/listbox/examples/populatingwithdata/xmlstringbinding/defaultcs.aspx)
