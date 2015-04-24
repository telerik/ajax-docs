---
title: Loading Items from XML
page_title: Loading Items from XML | RadMenu for ASP.NET AJAX Documentation
description: Loading Items from XML
slug: menu/radmenu-items/loading-items-from-xml
tags: loading,items,from,xml
published: True
position: 5
---

# Loading Items from XML



You can easily load the items of a menu from an XML source, as long as the source conforms to the following structure:

1. The top level consists of a single node, called <Menu>. This node can include attributes for the **RadMenu** properties:

````XML
	    <?xml version="1.0" encoding="utf-8" ?>
	    <Menu Skin="Outlook">
	       ...
	    </Menu> 
````



1. Immediately below the <Menu> node is a <Group> node to enclose the root level items. Each level of items, including the root level, is enclosed in a <Group> node. The <Group> node correspondsto the **GroupSettings** property of a menu item, and can include attributes that correspond to the GroupSettings sub-properties such as **Flow**, **ExpandDirection**, **Height**, **Width**, **OffsetX**, and **OffsetY**:

````XML
	    <Group ExpandDirection="Right" Flow="Horizontal">
	     ...
	    <Group> 
````



1. Each item within a <Group> node is represented by an <Item> node. The attributes of the <Item> node correspond to the properties and custom attributes of the menu item. Any child items are contained in a <Group> node nested within the <Item> node:

````XML
	<Item Text="Parent" LeftLogo="Img\parent.gif" >
	    <Group Width="140" Flow="Vertical">
	        <Item Text="Child 1" />
	        <Item IsSeparator="True" />
	        <Item Text="Child 2" />
	    </Group>
	</Item>
````



>tip To discover the way to represent a specific **RadMenu** feature in XML, create a **RadMenu** with the feature and use the **RadMenu.GetXml** method to get the corresponding XML string.
>


Once you have an XML file of the proper format, or an XML string in the proper format, you can use it to populate a RadMenu object.

## Loading from an XML file

Create an XML file with content that complies with the rules described above and call the **LoadContentFile** method to load the items, passing in the path to the file:





````C#
	RadMenu1.LoadContentFile("~/App_Data/menu.xml");		
````
````VB.NET
	    RadMenu1.LoadContentFile("~/App_Data/menu.xml")
````


## Loading from an XML string

Create a string with valid XML content (or fetch it from a database, for example) and use the **LoadXML** method to populate the menu from the string:





````C#
	StringBuilder sb = new StringBuilder();
	sb.Append("<Menu>");sb.Append(" <Group>");
	sb.Append(" <Item Text='Root 1' />");
	sb.Append(" <Item Text='Root 2' />");
	sb.Append(" <Item Text='Root 3' />");
	sb.Append(" </Group>");sb.Append(" </Menu>");
	string xmlString = sb.ToString();
	RadMenu1.LoadXml(xmlString);	
````
````VB.NET
	    Dim sb As New StringBuilder()
	    sb.Append("<Menu>")
	    sb.Append(" <Group>")
	    sb.Append(" <Item Text='Root 1' />")
	    sb.Append(" <Item Text='Root 2' />")
	    sb.Append(" <Item Text='Root 3' />")
	    sb.Append(" </Group>")
	    sb.Append(" </Menu>")
	    Dim xmlString As String = sb.ToString()
	    RadMenu1.LoadXml(xmlString)
````


>note You can also populate RadMenu from an XML file using an **XmlDataSource** component. When using **XmlDataSource** , the XML file does not have to follow the format shown in this topic. See[Binding to Hierarchical DataSource Components]({%slug menu/data-binding/binding-to-hierarchical-datasource%})for details.
>


For a live example of loading **RadMenu** items from XML, see [XML Definition](http://demos.telerik.com/aspnet-ajax/Menu/Examples/Programming/XmlDefinition/DefaultCS.aspx).



# See Also

 * [Overview]({%slug menu/radmenu-items/overview%})
