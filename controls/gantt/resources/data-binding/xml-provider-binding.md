---
title: XML Provider Binding
page_title: XML Provider Binding | UI for ASP.NET AJAX Documentation
description: XML Provider Binding
slug: gantt/resources/data-binding/xml-provider-binding
tags: xml,provider,binding
published: True
position: 2
---

# XML Provider Binding


This help article describes how use [Gantt Resources]({%slug gantt/resoruces/overview%}) with the built-in [Xml Provider]({%slug gantt/data-binding/server-side-binding/programmatic-binding-/xml-provider%}).

There is not much difference in using XML Provider with Resources compared to using [Xml Provider]({%slug gantt/data-binding/server-side-binding/programmatic-binding-/xml-provider%}) without resources. Just set the **EnableResources** property of the Gantt to **true** and extend the XML file to support resources.

## 

>caution Gantt expects that the **Resources** are defined. It does not provide mechanism to manipulate them.
>


The example provided below illustrates a possible implementation of **RadGantt** with **Resources**, bound to **XML Provider**.


````ASPNET
<telerik:RadGantt ID="RadGantt1" runat="server" AutoGenerateColumns="false" SelectedView="WeekView" EnableResources="true">
    <Columns>
        <telerik:GanttBoundColumn DataField="Title" DataType="String"></telerik:GanttBoundColumn>
        <telerik:GanttResourceColumn HeaderText="Asssigned Resources"></telerik:GanttResourceColumn>
    </Columns>
</telerik:RadGantt>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    RadGantt1.Provider = new XmlGanttProvider(Server.MapPath("App_Code/Gantt.xml"));
}
````
````VB.NET
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
    RadGantt1.Provider = New XmlGanttProvider(Server.MapPath("App_Code/Gantt.xml"))
End Sub
````

The format of the XML file that contains the data should look similar to the shown below.

````XML
<?xml version="1.0" encoding="utf-8"?>
<Project>
  <Tasks />
  <Dependencies />
  <Assignments />
  <Resources>
    <Resource>
      <ID>1</ID>
      <Text>Thomas Hardy</Text>
      <Color>#f44336</Color>
    </Resource>
    <Resource>
      <ID>2</ID>
      <Text>Elizabeth Lincoln</Text>
      <Color>#880e4f</Color>
    </Resource>
  </Resources>
</Project>
````

# See Also

 * [XML Provider]({%slug gantt/data-binding/server-side-binding/programmatic-binding-/xml-provider%})
