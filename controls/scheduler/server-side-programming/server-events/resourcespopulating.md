---
title: ResourcesPopulating
page_title: ResourcesPopulating | RadScheduler for ASP.NET AJAX Documentation
description: ResourcesPopulating
slug: scheduler/server-side-programming/server-events/resourcespopulating
tags: resourcespopulating
published: True
position: 16
---

# ResourcesPopulating



## 

**ResourcesPopulating** occurs when the scheduler is about to request resources from the Web Service. Resources need to be populated from the server when using resource grouping. Doing so also reduces the client-side initialization time. This operation requires the **WebPermission**to be granted for the Web Service URL. This permission is not granted by default in **Medium Trust**.

You can disable the population of the resources from the server and still use client-side rendering for grouped views. To do so you need to set the **WebServiceSettings.ResourcePopulationMode** to **Manual** and populate the resources from the OnInit method of the page.

The **ResourcesPopulatingEventArgs**contains additional information about the request that is about to be made. You can use its properties to modify the URL, supply credentials and so on.

The operation can be cancelled by setting the **ResourcesPopulatingEventArgs.Cancel**property of **ResourcesPopulatingEventArgs** to true.



# See Also

 * [Notes on Resource Grouping]({%slug scheduler/web-service-binding/notes-on-resource-grouping%})
