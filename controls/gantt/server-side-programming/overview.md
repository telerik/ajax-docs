---
title: Server-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: gantt/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview

__RadGantt__ provides a rich set of server-side properties and events that can help you configure the look and behaviour of the control.

## RadGantt Properties

__Table 1__ demonstrates some general properties of the __RadGantt__:


| Property | Description |
| ------ | ------ |
| __AllowSorting__ |Gets/sets a value indicating whether sorting is enabled or not.|
| __Width__ |Gets or sets the __RadGantt__ width in pixels or percents.|
| __ListWidth__ |Gets or sets the __RadGantt__ list width in pixels or percents.|
| __Height__ |Gets or sets the __RadGantt__ height in pixels or percents.|
| __ProviderName__ |Gets or sets the name of the current tasks provider used by __RadGantt__. The provider must be defined in the gantt section of web.config.|
| __Provider__ |Gets or sets the provider instance to be used by __RadGantt__. Use this property with providers that are created at runtime. For ASP.NET providers defined in web.config use the __ProviderName__ property.|
| __SelectedView__ |Gets or sets the current view type.|
| __DependenciesDataSourceID__ |Gets or sets the data source used to bind dependencies.|
| __DependenciesDataSource__ |Gets or sets data source used for dependencies.|
| __Columns__ |Gets the available columns.|
| __DayView__ |Gets the __Day__ view settings.|
| __WeekView__ |Gets the __WeekView__ settings.|
| __MonthView__ |Gets the __Month__ view settings.|
| __YearView__ |Gets the __Year__ view settings.|
| __ReadOnly__ |Gets or sets a value indicating whether __RadGantt__ is in read-only mode.|
| __AutoGenerateColumns__ |Gets or sets a value indicating whether bound columns are automatically created for each field in the data source. __RadGantt__ will auto generate columns for the following fields: __ID__, __Title__, __Start__, __End__ and __PercentageComplete__.|
| __Culture__ |Gets or sets the selected culture. Localization strings will be loaded based on this value.|
| __Localization__ |Gets the localization.|
| __LocalizationPath__ |Gets or sets a value indicating where __RadGantt__ will look for its __.resx__ localization files.|
| __WebServiceSettings__ |Gets the web service settings to be used for binding this instance of __RadGantt__.|
| __SnapToGrid__ |Gets or sets a value that determines whether the tasks will snap to the nearest grid cell in the timeline.|
| __DisplayDeleteConfirmation__ |Gets or sets a value indicating whether a delete confirmation dialog should be displayed when the user deletes a task or a dependency. The default value is __true__.|
| __KeyboardNavigationSettings__ |Gets the __KeyboardNavigation__ settings.|

## RadGantt Methods

__Table 2__ lists the server-side method exposed in the API.


| Method | Description |
| ------ | ------ |
| __RadGantt.GetAllTasks__ |Returns __Depth First Search__ flattened list of tasks.|
| __RadGantt.Dependency.LoadFromDictionary__ |Loads the __Dependency__ values from an OrderedDictionary|

## RadGantt Events

__Table 3__ shows the server-side events to which you can subscribe.


| Events | Description |
| ------ | ------ |
| __[ColumnCreating]({%slug gantt/server-side-programming/events/columncreating%})__ |Fired before a column is created. You can handle the event to replace or modify the instance of the column.|
| __[ColumnCreated]({%slug gantt/server-side-programming/events/columncreated%})__ |Fired after a column was created. You can handle the event to grab an instance of the newly created column.|
| __[TaskInsert]({%slug gantt/server-side-programming/events/taskinsert%})__ |Fired when the task's collection is about to be inserted in the database through the provider|
| __[TaskUpdate]({%slug gantt/server-side-programming/events/taskupdate%})__ |Fired when the task's collection is about to be updated through the provider.|
| __[TaskDelete]({%slug gantt/server-side-programming/events/taskdelete%})__ |Fired when the task's collection is about to be deleted from the database through the provider.|
| __[NavigationCommand]({%slug gantt/server-side-programming/events/navigationcommand%})__ |Fired when the __RadGantt__ executes a navigation command.|
| __[DependencyInsert]({%slug gantt/server-side-programming/events/dependencyinsert%})__ |Fires when a dependency's collection is about to be inserted in the database.|
| __[DependencyDelete]({%slug gantt/server-side-programming/events/dependencydelete%})__ |Fires when a dependency's collection is about to be deleted from the database through the provider.|

## RadGantt Task

In this section you will find helpful information about the properties and methods of the gantt __Task__.

__Task Properties__


| Property | Description |
| ------ | ------ |
| __ID__ |Gets/sets the Task's ID.|
| __ParentID__ |Gets/sets the __ID__ of the task's parent task.|
| __OrderID__ |Gets/sets __OrderID__ field used by sort operations.|
| __Duration__ |Gets the appointment duration.|
| __Summary__ |Gets/sets a value that determines whether the tasks is a summary.|
| __Expanded__ |Gets or sets a value that determines whether the tasks is expanded in the __TreeList__.|
| __PercentComplete__ |Gets or sets a value that determines the percent of completion.|
| __Title__ |Gets or sets a value that determines the title of the task. The tasks is shown by default in the __TreeList__ part. If this is not the desired behavior one can set the property to false.|
| __TaskType__ |Gets a value that determines the type of the tasks.|

__Task Methods__


| Method | Description |
| ------ | ------ |
| __GetData__ |Returns the Task data as an OrdrederDictionary.|
| __LoadFromDictionary__ |Loads the __Task__ values from an OrderedDictionary.|

# See Also

 * [Dependencies]({%slug gantt/structure/dependencies%})

 * [Tasks]({%slug gantt/structure/tasks%})
