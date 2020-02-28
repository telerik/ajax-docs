---
title: Binding to OData
page_title: Binding to OData | RadScheduler for ASP.NET AJAX Documentation
description: Binding to OData
slug: scheduler/data-binding/binding-to-odata
tags: binding,to,odata
published: True
position: 6
---

# Binding to OData


Forth from Q1 2012, **RadScheduler** can be bound to an **OData service. The Open Data Protocol (OData)** is an open web protocol for querying and updating data. The protocol allows for a consumer to query a data source over the HTTP protocol and get the result back in formats like Atom, JSON or plain XML, including pagination, ordering or filtering of the data. Also, the binding is one way only, i.e. it is not possible to perform update/insert/delete on the data source.The binding can be flat or hierarchical, the RadScheduler can utilize only the flat binding.

With the introduction of the **RadODataDataSource** control, binding to an OData feed is pretty similar to the standard binding, except for the fact that the RadScheduler is in Read-Only mode.

## Configuration

The following properties could be set in order to map the exposed feed to the binding fields:

* **DataStartField**

* **DataEndField**

* **DataSubjectField**

* **DataKeyField**

* **DataDescriptionField**

* **DataModelID**

It is necessary to set **DataModelID** property to the OData Entity that contains your appointment data.

>caution The **InitialContainerName** property is now depricated and **DataModelID** should be used instead.
>


The OData binding does not require serialized **AppointmentData** objects. Instead, the developer is free to expose whatever objects they want as a JSON feed, as long as the data is meaningful to the Scheduler.

Here is how the declaration of a RadScheduler bound to a RadODataDataSource control would look like:

>caution The RadODataDataSource should be defined before the RadScheduler.
>


````ASPNET
	
<telerik:RadODataDataSource ID="ODataDataSource1" runat="server">
	<Transport>
		<Read Url="SchedulerODataWcfService.svc" />
	</Transport>
	<Schema>
		<telerik:DataModel ModelID="Appointments" Set="Appointments">
			<telerik:DataModelField FieldName="ID" />
			<telerik:DataModelField FieldName="Subject" />
			<telerik:DataModelField FieldName="Start" />
			<telerik:DataModelField FieldName="End" />
		</telerik:DataModel>
	</Schema>
</telerik:RadODataDataSource>
<telerik:RadScheduler RenderMode="Lightweight" ID="RadScheduler1" runat="server" SelectedView="WeekView" SelectedDate="4/15/2012" ODataDataSourceID="ODataDataSource1"
	DataKeyField="ID" DataModelID="Appointments" DataStartField="Start" DataEndField="End"
	DataSubjectField="Subject" ReadOnly="True">
</telerik:RadScheduler>
	
````



# See Also

 * [Online demo](https://demos.telerik.com/aspnet-ajax/scheduler/examples/odata/defaultcs.aspx)
