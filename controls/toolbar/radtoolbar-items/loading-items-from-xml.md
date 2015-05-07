---
title: Loading Items from XML
page_title: Loading Items from XML | RadToolBar for ASP.NET AJAX Documentation
description: Loading Items from XML
slug: toolbar/radtoolbar-items/loading-items-from-xml
tags: loading,items,from,xml
published: True
position: 6
---

# Loading Items from XML


You can easily load the buttons of a toolbar from an XML source, as long as the source conforms to the following structure:

1. The top level consists of a single node, called <ToolBar>. This node can include attributes for the **RadToolBar** properties:

````XML	     
<?xml version="1.0" encoding="utf-8" ?> 
<ToolBar Skin="Outlook">
...
</ToolBar>			
````

1. Below the <ToolBar> node are nodes for the buttons in the toolbar. These can be <Button>, <DropDown>, or <SplitButton> nodes, depending on the type of the button. The attributes of these nodes include the properties of the button object. For drop-down and split button types, the buttons in the drop-down list appear nested in the node:

````XML
<Button Text='Button1' Value='1' />
<DropDown Text='DropDown1'> 
    <Button Text='ChildButton1'/>
</DropDown>
<SplitButton Text='SplitButton1'>
    <Button Text='ChildButton1' />
</SplitButton>				
````



>tip To discover the way to represent a specific **RadToolBar** feature in XML, create a **RadToolBar** with the feature and use the **RadToolBar.GetXml** method to get the corresponding XML string.
>


Once you have an XML file of the proper format, or an XML string in the proper format, you can use it to populate a **RadToolBar** object.

>note You can also populate **RadToolBar** from an XML file using an **XmlDataSource** component. When using **XmlDataSource** , the XML file does not have to follow the format shown in this topic. For details, see [Binding to ASP DataSource components]({%slug toolbar/data-binding/binding-to-asp-datasource-components%}).
>


## Loading from an XML file

Create an XML file with content that complies with the rules described above and call the **LoadContentFile** method to load the items, passing in the path to the file:


````C#
RadToolBar1.LoadContentFile("~/App_Data/toolbar.xml");				
````
````VB.NET
RadToolBar1.LoadContentFile("~/App_Data/toolbar.xml")				
````

## Loading from an XML string

Create a string with valid XML content (or fetch it from a database, for example) and use the **LoadXML** method to populate the toolbar from the string:


````C#
StringBuilder sb = new StringBuilder();
sb.Append("<ToolBar>");
sb.Append(" <Button Text='Button1' />");
sb.Append(" <DropDown Text='DropDown1'>");
sb.Append("     <Button Text='ChildButton1'/>");
sb.Append(" </DropDown>");
sb.Append(" <SplitButton Text='SplitButton1'>");
sb.Append("     <Button Text='ChildButton1'/>");
sb.Append(" </SplitButton>");       
sb.Append("</ToolBar>");
string xmlString = sb.ToString();
RadToolBar1.LoadXml(xmlString);				
````
````VB.NET
Dim sb As New StringBuilder()
sb.Append("<ToolBar>")
sb.Append(" <Button Text='Button1' />")
sb.Append(" <DropDown Text='DropDown1'>")
sb.Append("     <Button Text='ChildButton1'/>")
sb.Append(" </DropDown>")
sb.Append(" <SplitButton Text='SplitButton1'>")
sb.Append("     <Button Text='ChildButton1'/>")
sb.Append(" </SplitButton>")sb.Append("</ToolBar>")
Dim xmlString As String = sb.ToString()
RadToolBar1.LoadXml(xmlString)				
````

# See Also

 * [Overview]({%slug toolbar/radtoolbar-items/overview%})
