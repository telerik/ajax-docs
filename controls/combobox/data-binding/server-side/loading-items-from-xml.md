---
title: Loading Items from XML
page_title: Loading Items from XML - RadComboBox
description: Simple way to load ComboBox Items from an XML file on Server-side. 
slug: combobox/data-binding/server-side/loading-items-from-xml
previous_url: controls/combobox/radcombobox-items/loading-items-from-xml
tags: server-side, data-binding, loading, items, xml
published: True
position: 3
---

# Loading Items from XML

You can populate the ComboBox with Items from an XML file out of the Box. 

>caption Add a ComboBox component to the Page.

````ASP.NET
<telerik:RadComboBox ID="RadComboBox1" runat="server"></telerik:RadComboBox>
````

Load the XML file using any of the following approaches:
- [Loading from an XML file](#loading-from-an-xml-file)
- [Loading from an XML string](#loading-from-an-xml-string)

## Loading from an XML file

Create an XML file with the following structure:
- Root element: `<Items></Items>`
- Child elements: `<Item />` 

>All [ComboBox Item Properties]({%slug combobox/radcombobox-items/overview%}) can be mapped on the respective XML nodes as attributes. In addition, you can use any [Custom Attributes]({%slug combobox/radcombobox-items/custom-attributes%}) that are not available as properties.

>caption ~/App_Data/Continents.xml

````XML
<?xml version="1.0" encoding="utf-8" ?>
<Items>
	<Item Text="Africa" Value="1" Enabled="True" />
	<Item Text="Australia" Value="2" Selected="False" />
	<Item Text="Asia" Value="3" CustomAttribute="CustomData" />
	<Item Text="Europe" Value="4" />
	<Item Text="North America" Value="5" />
	<Item Text="South America" Value="6" />
</Items>
````

>caption Loading from XML File using the `LoadContentFile` method

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadComboBox1.LoadContentFile("~/App_Data/Continents.xml");
}
````
````VB
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs)
    RadComboBox1.LoadContentFile("~/App_Data/Continents.xml")
End Sub
````

## Loading from an XML string

Create a string with the following XML structure (or fetch it from a database, for example):
- Root element: `<Items></Items>`
- Child elements: `<Item />`

>All [ComboBox Item Properties]({%slug combobox/radcombobox-items/overview%}) can be mapped on the respective XML nodes as attributes. In addition, you can use any [Custom Attributes]({%slug combobox/radcombobox-items/custom-attributes%}) that are not available as properties.

>caption Loading from XML String using the `LoadXml` method

````C#
protected void Page_Init(object sender, EventArgs e)
{
    StringBuilder sb = new StringBuilder();
    sb.Append("<?xml version=\"1.0\" encoding=\"utf-8\" ?>");
    sb.Append("<Items>");
    sb.Append("	<Item Text=\"Africa\" Value=\"1\" Enabled=\"True\" />");
    sb.Append("	<Item Text=\"Australia\" Value=\"2\" Selected=\"False\" />");
    sb.Append("	<Item Text=\"Asia\" Value=\"3\" CustomAttribute=\"CustomData\" />");
    sb.Append("	<Item Text=\"Europe\" Value=\"4\" />");
    sb.Append("	<Item Text=\"North America\" Value=\"5\" />");
    sb.Append("	<Item Text=\"South America\" Value=\"6\" />");
    sb.Append("</Items>");

    string xmlString = sb.ToString();
    RadComboBox1.LoadXml(xmlString);
}
````
````VB.NET
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs)
    Dim sb As StringBuilder = New StringBuilder()
    sb.Append("<?xml version=""1.0"" encoding=""utf-8"" ?>")
    sb.Append("<Items>")
    sb.Append(vbTab & "<Item Text=""Africa"" Value=""1"" Enabled=""True"" />")
    sb.Append(vbTab & "<Item Text=""Australia"" Value=""2"" Selected=""False"" />")
    sb.Append(vbTab & "<Item Text=""Asia"" Value=""3"" CustomAttribute=""CustomData"" />")
    sb.Append(vbTab & "<Item Text=""Europe"" Value=""4"" />")
    sb.Append(vbTab & "<Item Text=""North America"" Value=""5"" />")
    sb.Append(vbTab & "<Item Text=""South America"" Value=""6"" />")
    sb.Append("</Items>")
    Dim xmlString As String = sb.ToString()
    RadComboBox1.LoadXml(xmlString)
End Sub
````
