---
title: Custom EntityFramework Provider
page_title: Custom EntityFramework Provider | RadGantt for ASP.NET AJAX Documentation
description: Custom EntityFramework Provider
slug: gantt/data-binding/providers/custom-entityframework-provider
tags: custom,entityframework,provider
published: True
position: 0
---

# Custom EntityFramework Provider

The following article demonstrates how to implement a custom provider for the RadGantt, using EntityFramework.

## Implementing Custom Provider, using EntityFramework.

In order to implement a custom provider for the **RadGantt** you would need to create a class that inherits the **GanttProviderBase** class. The custom class should implement the GetTasks, UpdateTask, DeleteTask and InsertTask - regarding the **Task** object and GetDependencies, DeleteDependency and InsertDependency - regarding the **Dependencies** object. The following steps will help you to easily create and implement a custom provider for the RadGantt, using EntityFramework.

1. Initially, you would need to create your EntityFramework model, which should actually translate the underlying datatables as object so that they could be easily managed in the custom provider class.

1. Create a class that should inherit the **GanttProviderBase** class. 

In the custom class you should implement the Get, Update, Delete and Insert methods using the EntityFramework DBContenxt for both Task and Dependencies objects. 

>note  **The Dependency** object should not implement an Update method, as it does not possess such functionality. In addition, the methods should return object of type **Task** and **Dependency**.
>

1. Provide the **RadGantt** control with the newly created custom provider at the Page_Load in the following manner: 

[Here](http://www.telerik.com/support/code-library/radganttcustomentityprovider-a3e011e74a6b) you could find a code library with a runnable sample project, created base of the above instructions.
