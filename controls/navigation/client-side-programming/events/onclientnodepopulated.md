---
title: OnClientNodePopulated
page_title: OnClientNodePopulated | RadNavigation for ASP.NET AJAX Documentation
description: OnClientNodePopulated
slug: navigation/client-side-programming/events/onclientnodepopulated
tags: onclientnodepopulated
published: True
position: 12
---

# OnClientNodePopulated

## 

The **OnClientNodePopulated** client-side event occurs when nodes are loaded. The **RadNavigation** should be bound to RadClientDataSource control for this event to fire.

The event handler receives parameters:

1. The **RadNavigation** instance that fired the event.

1. Event arguments with functions:

* **get_data()** retrieves the loaded nodes.

* **get_owner()** retrieves an object that is automatically passed to the RadClientDataSource.



# See Also

 * [OnClientNodePopulating]({%slug navigation/client-side-programming/events/onclientnodepopulating%})

 * [NavigationNode]({%slug navigation/client-side-programming/objects/navigationnode-object%})

 * [Demo: Navigation - Client-side Binding]({%slug http://demos.telerik.com/aspnet-ajax/navigation/data-binding/client-side-binding/defaultcs.aspx%})

