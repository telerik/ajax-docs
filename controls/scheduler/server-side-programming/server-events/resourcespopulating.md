---
title: ResourcesPopulating
page_title: ResourcesPopulating | UI for ASP.NET AJAX Documentation
description: ResourcesPopulating
slug: scheduler/server-side-programming/server-events/resourcespopulating
tags: resourcespopulating
published: True
position: 16
---

# ResourcesPopulating



## 

__ResourcesPopulating__ occurs when the scheduler is about to request resources from the Web Service. Resources need to be populated from the server when using resource grouping. Doing so also reduces the client-side initialization time. This operation requires the __WebPermission__to be granted for the Web Service URL. This permission is not granted by default in __Medium Trust__.

You can disable the population of the resources from the server and still use client-side rendering for grouped views. To do so you need to set the __WebServiceSettings.ResourcePopulationMode__ to __Manual__ and populate the resources from the OnInit method of the page.

The __ResourcesPopulatingEventArgs__contains additional information about the request that is about to be made. You can use its properties to modify the URL, supply credentials and so on.

The operation can be cancelled by setting the __ResourcesPopulatingEventArgs.Cancel__property of __ResourcesPopulatingEventArgs__ to true.



# See Also

 * [Notes on Resource Grouping]({%slug scheduler/web-service-binding/notes-on-resource-grouping%})
