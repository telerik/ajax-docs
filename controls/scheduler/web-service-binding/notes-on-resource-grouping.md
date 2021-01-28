---
title: Notes on Resource Grouping
page_title: Notes on Resource Grouping - RadScheduler
description: Check our Web Forms article about Notes on Resource Grouping.
slug: scheduler/web-service-binding/notes-on-resource-grouping
tags: notes,on,resource,grouping
published: True
position: 3
---

# Notes on Resource Grouping



## Using resource grouping with Web Service data binding

There are additional steps that must be performed to enable resource grouping when using Web Service data binding.

The control needs the list of resources on the server in order to be able to render its basic structure.

The **ResourcePopulationMode** property controls how the resources are obtained. The possible options are:

* **ServerSide** - The resources will be populated from the server by issuing a request to the Web Service.

* **Manual** - In manual mode RadScheduler will not request resources from the Web Service. They can be populated from the code-behind of the ASP.NET page that hosts the RadScheduler control.

* **ClientSide** (default) - The resources will be populated from the client by issuing a request to the Web Service.

You have to set the mode to either **ServerSide** or **Manual** in order to enable grouped views. The server-side mode is recommended, as it requires no additional code. The drawback is that it does not work in medium trust. In such case you will have to fall back to manually populating the resource list.

````ASPNET
	
<telerik:RadScheduler RenderMode="Lightweight" runat="server" ID="RadScheduler1" Skin="Vista"
   SelectedView="DayView" SelectedDate="2009-04-18">
   <DayView GroupBy="User" />
   <WebServiceSettings Path="~/SchedulerDataService.asmx" ResourcePopulationMode="Manual" />
</telerik:RadScheduler>
			
````



````C#
	
protected void Page_Load(object sender, EventArgs e)
{
	RadScheduler1.ResourceTypes.Add(new ResourceType("User"));
	RadScheduler1.Resources.Add(new Resource("User", "1", "Alex"));
	RadScheduler1.Resources.Add(new Resource("User", "2", "Bob"));
	RadScheduler1.Resources.Add(new Resource("User", "3", "Charlie"));
}       
	
````



## Passing additional arguments to the GetResources method when using server-side mode

In some cases you might want to pass additional arguments to the GetResources method. This can be done by handling the **ResourcesPopulating** event.

You need to implement ISchedulerInfo first:

````C#
	
public class MySchedulerInfo : SchedulerInfo
{
   private int _userId;
   public int UserId
   {
	   get { return _userId; }
	   set { _userId = value; }
   }
}
			
````



Then you can to handle the ResourcesPopulating event and replace the original schedulerInfo object:

````C#
	
protected void RadScheduler1_OnResourcesPopulating(object sender, ResourcesPopulatingEventArgs args)
{
	MySchedulerInfo info = new MySchedulerInfo();
	info.ViewStart = args.SchedulerInfo.ViewStart;
	info.ViewEnd = args.SchedulerInfo.ViewEnd;
	info.UserId = 100;

	args.SchedulerInfo = info;
}  
	
````



Finally, the GetResources method can use the data like this:

````C#
	
[WebMethod]
public IEnumerable<ResourceData> GetResources(MySchedulerInfo schedulerInfo)
{
	int userId = schedulerInfo.UserId;
	// ...
	return Controller.GetResources(schedulerInfo);
} 
				
````




