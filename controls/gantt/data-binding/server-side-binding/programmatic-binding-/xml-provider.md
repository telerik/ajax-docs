---
title: XML Provider
page_title: XML Provider | RadGantt for ASP.NET AJAX Documentation
description: XML Provider
slug: gantt/data-binding/server-side-binding/programmatic-binding-/xml-provider
tags: xml,provider
published: True
position: 0
---

# XML Provider

This help article describes how you can bind the **RadGantt** control to an XML file using the built-in **XmlGanttProvider**.

## 

Binding the control to a XML file is achievable by following the below listed steps.

1. Add the XML containing the data in the App_Data folder.

1. Subscribe to the **PageLoad** event and in the event handler create a new instance of the **XmlGanttProvider** provider passing the XML file path to its constructor.

1. Set the **RadGannt.Provider** property to the newly created provider instance.

The below provided example illustrates a possible realization of the above mentioned.


````ASPNET
<telerik:RadGantt ID="RadGantt1" runat="server" >
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

The format of the XML file that contains the data should look similar to the below shown.

>caution If the XML file will be initially blank it should contain a **Project** opening and closing tag.
>


````XML
<?xml version="1.0" encoding="utf-8"?>
<Project>
  <Tasks>
    <Task>
      <ID>1</ID>
      <ParentID />
      <Start>2014-05-05T08:00:00Z</Start>
      <End>2014-05-11T20:00:00Z</End>
      <Title>Defining selection criteria</Title>
      <PercentComplete>0</PercentComplete>
      <Summary>false</Summary>
      <Expanded>true</Expanded>
      <OrderID>0</OrderID>
    </Task>
    <NextID>16</NextID>
    <Task>
      <ID>2</ID>
      <ParentID>5</ParentID>
      <Start>2014-05-12T08:00:00Z</Start>
      <End>2014-05-26T20:00:00Z</End>
      <Title>Advertising the position</Title>
      <PercentComplete>0</PercentComplete>
      <Summary>false</Summary>
      <Expanded>true</Expanded>
      <OrderID>0</OrderID>
    </Task>
    <Task>
      <ID>12</ID>
      <ParentID />
      <Start>2014-06-13T08:00:00Z</Start>
      <End>2014-06-13T09:00:00Z</End>
      <Title>Task1</Title>
      <PercentComplete>0</PercentComplete>
      <Summary>false</Summary>
      <Expanded>true</Expanded>
      <OrderID>0</OrderID>
    </Task>
    <Task>
      <ID>13</ID>
      <ParentID />
      <Start>2014-06-13T08:00:00Z</Start>
      <End>2014-06-13T14:00:00Z</End>
      <Title>SummaryTask</Title>
      <PercentComplete>0</PercentComplete>
      <Summary>true</Summary>
      <Expanded>true</Expanded>
      <OrderID>1</OrderID>
    </Task>
    <Task>
      <ID>14</ID>
      <ParentID>13</ParentID>
      <Start>2014-06-13T08:00:00Z</Start>
      <End>2014-06-13T11:00:00Z</End>
      <Title>ChildTask1</Title>
      <PercentComplete>0</PercentComplete>
      <Summary>false</Summary>
      <Expanded>true</Expanded>
      <OrderID>0</OrderID>
    </Task>
    <Task>
      <ID>15</ID>
      <ParentID>13</ParentID>
      <Start>2014-06-13T11:00:00Z</Start>
      <End>2014-06-13T14:00:00Z</End>
      <Title>ChildTask2</Title>
      <PercentComplete>0</PercentComplete>
      <Summary>false</Summary>
      <Expanded>true</Expanded>
      <OrderID>1</OrderID>
    </Task>
  </Tasks>
  <Dependencies />
</Project>
````



# See Also

 * [Resource XML Provider]({%slug gantt/resoruces/data-binding/xml-provider-binding%})
