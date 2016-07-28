---
title: RadGantt Object
page_title: Server-side RadGantt Object | RadGantt for ASP.NET AJAX Documentation
description: RadGantt Object
slug: gantt/server-side-programming/objects/radgantt-object
tags: radgantt-object
published: True
position: 0
---

# RadGantt Object

The most important properties and methods of the **RadGantt** server-side object are described and explained in this article.

## RadGantt Properties

The **RadGantt** properties are divided into three separate tables below: 
* list of user editing options (Table 1)
* general properties (Table 2)
* view settings properties (Table 3)

**Table 1** lists the user editing options properties exposed by the **RadGantt** object.

| Name | Type | Description |
| ------ | ------ | ------ |
| **AllowColumnResize** |bool|Gets or sets a value indicating whether the columns can be resized.|
| **AllowDependencyDelete** |bool|Gets or sets a value indicating whether the user is able to delete a dependency.|
| **AllowDependencyInsert** |bool|Gets or sets a value indicating whether the user is able to insert a dependency.|
| **AllowPercentCompleteDrag** |bool|Gets or sets a value indicating whether the user is able to drag PercentComplete of a task.|
| **AllowSorting** |bool|Gets or sets a value indicating whether sorting is enabled for the tree list part.|
| **AllowTaskDelete** |bool|Gets or sets a value indicating whether the user is able to delete a task.|
| **AllowTaskInsert** |bool|Gets or sets a value indicating whether the user is able to insert a task.|
| **AllowTaskMove** |bool|Gets or sets a value indicating whether the user is able to move a task.|
| **AllowTaskReorder** |bool|Gets or sets a value indicating whether the user is able to reorder a task.|
| **AllowTaskResize** |bool|Gets or sets a value indicating whether the user is able to resize a task.|
| **AllowTaskUpdate** |bool|Gets or sets a value indicating whether the user is able to update a task.|


**Table 2** demonstrates some general properties of the **RadGantt** object.

| Name | Type | Description |
| ------ | ------ | ------ |
| **Assignments** |Telerik.Web.UI.Gantt. AssignmentCollection|Gets the **RadGantt** assignments collection.|
| **AutoGenerateColumns** |bool|Gets or sets a value indicating whether bound columns are automatically created for each field in the data source. **RadGantt** will auto generate columns for the following fields: ID, Title, Start, End and PercentageComplete.|
| **ClientTemplate** |string|Gets or sets the HTML template of the **RadGantt** tasks.|
| **Columns** |Telerik.Web.UI.Gantt. ColumnCollection|Gets the available columns.|
| **Culture** |System.Globalization.CultureInfo|Gets or sets the selected culture. Localization strings will be loaded based on this value.|
| **CurrentTimeMarkerInterval** |int|Gets or sets a value indicating the number of milliseconds after which the current time marker is updated.|
| **CustomTaskFields** |Telerik.Web.UI.Gantt. CustomFieldCollection|Gets the additional task fields.|
| **DataBindings** |Telerik.Web.UI.Gantt. GanttDataBindings|Gets the **RadGantt** data bindings.|
| **Dependencies** |Telerik.Web.UI.Gantt. DependencyCollection|Gets the **RadGantt** tasks dependencies.|
| **DisplayDeleteConfirmation** |bool|Gets or sets a value indicating whether a delete confirmation dialog should be displayed when the user deletes a task or a dependency.|
| **EnablePdfExport** |bool|Gets or sets a value indicating whether the export to PDF functionality is enabled.|
| **EnableResources** |bool|Gets or sets a value indicating whether the resources functionality is enabled.|
| **ItemType** |string|Gets or sets the name of the data item type for strongly typed data binding.|
| **KeyboardNavigationSettings** |Telerik.Web.UI. GanttKeyboardNavigationSettings|Gets the **KeyboardNavigation** settings.|
| **ListWidth** |Unit|Gets or sets the **RadGantt** list width in pixels or percent.|
| **Localization** |Telerik.Web.UI.GanttStrings|Gets the localization.|
| **LocalizationPath** |string|Gets or sets a value indicating where **RadGantt** will look for its **.resx** localization files.|
| **Provider** |Telerik.Web.UI. GanttProviderBase|Gets or sets the provider instance to be used by **RadGantt**. Use this property with providers that are created at runtime. For ASP.NET providers defined in web.config use the Telerik.Web.UI.RadGantt.ProviderName property.|
| **ProviderName** |string|Gets or sets the name of the current tasks provider used by **RadGantt**. The provider must be defined in the Gantt section of web.config.|
| **RangeEnd** |DateTime?|Gets or sets the end date and time of the visible range on the currently selected view. The **RangeEnd** date will not be included within the visible range. Available also to be specified per view.|
| **RangeStart** |DateTime?|Gets or sets the start date and time of the visible range on the currently selected view. Available also to be specified per view.|
| **Resources** |Telerik.Web.UI.Gantt. ResourceCollection|Gets the collection of all resources attached to the **RadGantt**.|
| **RowHeight** |Unit|Gets or sets the height of **RadGantt** rows.|
| **SelectedDate** |DateTime?|Gets or sets the date and time to which the timeline of the currently selected view is scrolled. Available also to be specified per view.|
| **SelectedView** |Telerik.Web.UI.GanttViewType enumeration|Gets or sets the current view type.|
| **ShowCurrentTimeMarker** |bool|Gets or sets a value indicating whether the current time marker is visible.|
| **ShowFullTime** |bool|Gets or sets a value indicating whether to display the complete day or the range between 8:00 AM and 5:00 PM.|
| **ShowFullWeek** |bool|Gets or sets a value indicating whether to display all days of the week or the range between WorkWeekStart and WorkWeekEnd.|
| **ShowTooltip** |bool|Gets or sets a value indicating whether to display a tooltip with summary of the task upon hovering.|
| **SnapToGrid** |bool|Gets or sets a value that determines whether the tasks will snap to the nearest grid cell in the timeline.|
| **Tasks** |Telerik.Web.UI.Gantt. TaskCollection|Gets the collection of all tasks loaded within the **RadGantt**.|
| **WebServiceSettings** |Telerik.Web.UI.Gantt. WebServiceSettings|Gets the web service settings to be used for binding this instance of **RadGantt**.|
| **WorkWeekEnd** |DayOfWeek enumeration|Gets or sets the last day of the work week.|
| **WorkWeekStart** |DayOfWeek enumeration|Gets or sets the first day of the work week.|


**Table 3** lists the **RadGantt**'s View Settings properties exposed in the API.

| Name | Type | Description |
| ------ | ------ | ------ |
| **DayView** |Telerik.Web.UI.Gantt.DayViewSettings|Gets the Day view settings.|
| **WeekView** |Telerik.Web.UI.Gantt.DayViewSettings|Gets the Week view settings.|
| **MonthView** |Telerik.Web.UI.Gantt.DayViewSettings|Gets the Month view settings.|
| **YearView** |Telerik.Web.UI.Gantt.DayViewSettings|Gets the Year view settings.|


## RadGantt Methods

**Table 4** lists the server-side methods exposed in the **RadGantt** API.

| Name | Parameters | Return type | Description |
| ------ | ------ | ------ | ------ |
| **GetAllTasks** |none|IList&lt;Telerik.Web.UI.Gantt.ITask&gt;|Returns Depth First Search flattened list of tasks.|
| **ImportXml** |string|void|Populates the control from the specified MSProject XML file.|


# See Also

 * [Server-side Programming Overview]({%slug gantt/server-side-programming/overview%})
 
 * [Tasks]({%slug gantt/server-side-programming/objects/tasks%})

 * [Dependencies]({%slug gantt/server-side-programming/objects/dependencies%})
 
 * [Assignments]({%slug gantt/server-side-programming/objects/assignments%})
 
 * [Resources]({%slug gantt/server-side-programming/objects/resources%})
 
