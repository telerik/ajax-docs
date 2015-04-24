---
title: Overview
page_title: Server-side Programming Overview | RadGantt for ASP.NET AJAX Documentation
description: Overview
slug: gantt/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview

**RadGantt** provides a rich set of server-side properties and events that can help you configure the look and behaviour of the control.

## RadGantt Properties

**Table 1** demonstrates some general properties of the **RadGantt**:


| Property | Description |
| ------ | ------ |
| **AllowSorting** |Gets/sets a value indicating whether sorting is enabled or not.|
| **Width** |Gets or sets the **RadGantt** width in pixels or percents.|
| **ListWidth** |Gets or sets the **RadGantt** list width in pixels or percents.|
| **Height** |Gets or sets the **RadGantt** height in pixels or percents.|
| **ProviderName** |Gets or sets the name of the current tasks provider used by **RadGantt**. The provider must be defined in the gantt section of web.config.|
| **Provider** |Gets or sets the provider instance to be used by **RadGantt**. Use this property with providers that are created at runtime. For ASP.NET providers defined in web.config use the **ProviderName** property.|
| **SelectedView** |Gets or sets the current view type.|
| **DependenciesDataSourceID** |Gets or sets the data source used to bind dependencies.|
| **DependenciesDataSource** |Gets or sets data source used for dependencies.|
| **Columns** |Gets the available columns.|
| **DayView** |Gets the **Day** view settings.|
| **WeekView** |Gets the **WeekView** settings.|
| **MonthView** |Gets the **Month** view settings.|
| **YearView** |Gets the **Year** view settings.|
| **ReadOnly** |Gets or sets a value indicating whether **RadGantt** is in read-only mode.|
| **AutoGenerateColumns** |Gets or sets a value indicating whether bound columns are automatically created for each field in the data source. **RadGantt** will auto generate columns for the following fields: **ID**, **Title**, **Start**, **End** and **PercentageComplete**.|
| **Culture** |Gets or sets the selected culture. Localization strings will be loaded based on this value.|
| **Localization** |Gets the localization.|
| **LocalizationPath** |Gets or sets a value indicating where **RadGantt** will look for its **.resx** localization files.|
| **WebServiceSettings** |Gets the web service settings to be used for binding this instance of **RadGantt**.|
| **SnapToGrid** |Gets or sets a value that determines whether the tasks will snap to the nearest grid cell in the timeline.|
| **DisplayDeleteConfirmation** |Gets or sets a value indicating whether a delete confirmation dialog should be displayed when the user deletes a task or a dependency. The default value is **true**.|
| **KeyboardNavigationSettings** |Gets the **KeyboardNavigation** settings.|

## RadGantt Methods

**Table 2** lists the server-side method exposed in the API.


| Method | Description |
| ------ | ------ |
| **RadGantt.GetAllTasks** |Returns **Depth First Search** flattened list of tasks.|
| **RadGantt.Dependency.LoadFromDictionary** |Loads the **Dependency** values from an OrderedDictionary|

## RadGantt Events

**Table 3** shows the server-side events to which you can subscribe.


| Events | Description |
| ------ | ------ |
| **[ColumnCreating]({%slug gantt/server-side-programming/events/columncreating%})** |Fired before a column is created. You can handle the event to replace or modify the instance of the column.|
| **[ColumnCreated]({%slug gantt/server-side-programming/events/columncreated%})** |Fired after a column was created. You can handle the event to grab an instance of the newly created column.|
| **[TaskInsert]({%slug gantt/server-side-programming/events/taskinsert%})** |Fired when the task's collection is about to be inserted in the database through the provider|
| **[TaskUpdate]({%slug gantt/server-side-programming/events/taskupdate%})** |Fired when the task's collection is about to be updated through the provider.|
| **[TaskDelete]({%slug gantt/server-side-programming/events/taskdelete%})** |Fired when the task's collection is about to be deleted from the database through the provider.|
| **[NavigationCommand]({%slug gantt/server-side-programming/events/navigationcommand%})** |Fired when the **RadGantt** executes a navigation command.|
| **[DependencyInsert]({%slug gantt/server-side-programming/events/dependencyinsert%})** |Fires when a dependency's collection is about to be inserted in the database.|
| **[DependencyDelete]({%slug gantt/server-side-programming/events/dependencydelete%})** |Fires when a dependency's collection is about to be deleted from the database through the provider.|

## RadGantt Task

In this section you will find helpful information about the properties and methods of the gantt **Task**.

**Task Properties**


| Property | Description |
| ------ | ------ |
| **ID** |Gets/sets the Task's ID.|
| **ParentID** |Gets/sets the **ID** of the task's parent task.|
| **OrderID** |Gets/sets **OrderID** field used by sort operations.|
| **Duration** |Gets the appointment duration.|
| **Summary** |Gets/sets a value that determines whether the tasks is a summary.|
| **Expanded** |Gets or sets a value that determines whether the tasks is expanded in the **TreeList**.|
| **PercentComplete** |Gets or sets a value that determines the percent of completion.|
| **Title** |Gets or sets a value that determines the title of the task. The tasks is shown by default in the **TreeList** part. If this is not the desired behavior one can set the property to false.|
| **TaskType** |Gets a value that determines the type of the tasks.|

**Task Methods**


| Method | Description |
| ------ | ------ |
| **GetData** |Returns the Task data as an OrdrederDictionary.|
| **LoadFromDictionary** |Loads the **Task** values from an OrderedDictionary.|

# See Also

 * [Dependencies]({%slug gantt/structure/dependencies%})

 * [Tasks]({%slug gantt/structure/tasks%})
