---
title: RadGantt Object
page_title: RadGantt Object | RadGantt for ASP.NET AJAX Documentation
description: RadGantt Object
slug: gantt/client-side-programming/objects/radgantt-object
tags: radgantt,object
published: True
position: 0
---

# RadGantt Object



## 

The following table lists the most important methods of the **RadGantt** client-side object:


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_tasks** |none|Telerik.Web.UI.GanttTaskCollection|Gets a collection with all root level tasks.|
| **get_allTasks** |none|Telerik.Web.UI.GanttTask Array|Gets a collection with all tasks. See **Example 1**.|
|  **get_dependencies**  | none | Telerik.Web.UI.GanttDependencyCollection |Gets a collection with all dependencies. See **Example 2**.|
|  **get_resources**  | none | Telerik.Web.UI.GanttResourceCollection |Gets a collection with all resources.|
|  **get_assignments**  | none | Telerik.Web.UI.GanttAssignmentCollection |Gets a collection with all resource assignments.|
|  **get_selectedView**  | none | Telerik.Web.UI.GanttViewType |Gets the selected view mode.|
|  **get_scrollTop**  | none | int |Returns the vertical scroll bar position.|
|  **get_scrollLeft**  | none | int |Returns the horizontal scroll bar position.|
|  **get_element**  | none | HTMLElement |Gets the control's DOM element.|
|  **get_enabled**  | none | boolean |Returns a boolean value indicating whether the control is enabled.|
|  **exportToPdf**  | none | none |Exports the RadGantt to .pdf if the EnablePdfExport property is true.|
|  **get_allowColumnResize**  | none | boolean |True if the allowColumnResize property is enabled, false otherwise.|
|  **get_currentTimeMarkerInterval**  | none | int |Returns the value of the Gantts's currentTimeMarkerInterval property.|
|  **get_displayDeleteConfirmation**  | none | boolean |True if the displayDeleteConfirmation property is enabled, false otherwise.|
|  **get_height**  | none | int |Returns the height of the Gantts's DOM element.|
|  **get_hourSpan**  | none | int |Returns the value of the Gantts's hourSpan property.|
|  **get_listWidth**  | none | string |Returns the width of the RadGantt's TreeList view.|
|  **get_rowHeight**  | none | int |Returns the value of the Gantts's rowHeight property.|
|  **get_showCurrentTimeMarker**  | none | boolean |Returns the value of the Gantt's showCurrentTimeMarker property.|
|  **get_showFullTime**  | none | boolean |Returns a boolean value indicating whether a complete day or a range between 8:00 AM and 5:00 PM is displayed.|
|  **get_showFullWeek**  | none | boolean |Returns a boolean value indicating whether all days of the Gantt's week are displayed or a range between WorkWeekStart and WorkWeekEnd.|
|  **get_showTooltip**  | none | boolean |Returns a boolean value indicating whether showing tooltips for Gantt tasks is enabled.|
|  **get_width**  | none | int |Returns the width of the Gantts's DOM element.|
|  **get_workWeekEnd**  | none | Telerik.Web.UI.DayOfWeek |Returns the last day of the work week.|
|  **get_workWeekStart**  | none | Telerik.Web.UI.DayOfWeek |Returns the first day of the work week.|
|  **set_allowColumnResize**  | boolean | none |Enables/Disables column resizing. See **Example 3**.|
|  **get_rangeStart**  | none | Date |Returns the Gantts's rangeStart property.|
|  **get_rangeEnd**  | none | Date |Returns the Gantts's rangeEnd property.|
|  **get_selectedDate**  | none | Date |Returns the Gantts's selectedDate property.|
|  **set_currentTimeMarkerInterval**  | int | none |Sets the value of the Gantts's currentTimeMarkerInterval property. See **Example 4**.|
|  **set_displayDeleteConfirmation**  | boolean | none |Enables/Disables confirmation dialog when the user deletes a task or a dependency.|
|  **set_height**  | int | none |Sets the height of the Gantts's DOM element. See **Example 5**.|
|  **set_hourSpan**  | int | none |Sets the hour span.|
|  **set_listWidth**  | string | none |Sets the width of the Gantt's TreeList view.|
|  **set_rowHeight**  | int | none |Sets the rows height.|
|  **set_selectedView**  | int | none |Sets the selected view mode. See **Example 6**.|
|  **set_scrollLeft**  | int | none |Sets the horizontal scroll bar position.|
|  **set_scrollTop**  | int | none |Sets the vertical scroll bar position.|
|  **set_showCurrentTimeMarker**  | boolean | none |Shows/Hides the Gantt's current time marker.|
|  **set_showFullTime**  | boolean | none |Enables displaying the Gantt's complete day or displays a range between 8:00 AM and 5:00 PM.|
|  **set_showFullWeek**  | boolean | none |Enables displaying all days of the Gantt's week or diplays the range between WorkWeekStart and WorkWeekEnd.|
|  **set_showTooltip**  | boolean | none |Enables/Disables displaying tooltips for Gantt tasks.|
|  **set_width**  | int | none |Sets the width of the Gantts's DOM element.|
|  **set_workWeekEnd**  | int | none |Sets the Gantts's last day of the work week. See **Example 7**.|
|  **set_workWeekStart**  | int | none |Sets the Gantts's first day of the work week.|
|  **set_rangeStart**  | Date | none |Sets the value of the Gantts's rangeStart property. See **Example 8**.|
|  **set_rangeEnd**  | Date | none |Sets the value of the Gantts's rangeEnd property. See **Example 9**.|
|  **set_selectedDate**  | Date | none |Sets the value of the Gantts's selectedDate property. See **Example 10**.|

>caption  Example 1: Get a collection with all Gantt tasks.
````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
var allTasks = gantt.get_allTasks();  
````

>caption  Example 2: Get the id of the first dependency in the Gantt's DependencyCollection.
````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
var firstDependency = gantt.get_dependencies().getDependency(0); 	
var id = firstDependency.get_id();	
````

>caption  Example 3: Enable column resizing.
````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
gantt.set_allowColumnResize(true); 	
````

>caption  Example 4: Set the current time marker interval to 5000.
````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
gantt.set_currentTimeMarkerInterval(5000); 		
````

>caption  Example 5: Set the Gantt's height to 700px.
````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
gantt.set_height(700); 		
````

>caption  Example 6: Set the Week view as selected.
````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
gantt.set_selectedView(1); 	
````

>caption  Example 7: Set the work week end to Thursday.
````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
gantt.set_workWeekEnd(4); 	
````

>caption  Example 8: Set the range start.
````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
gantt.set_rangeStart(new Date("2014/06/09"));	
````

>caption  Example 9: Set the range end.
````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
gantt.set_rangeEnd(new Date("2014/06/18"));	
````

>caption  Example 10: Set the selected date.
````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
gantt.set_selectedDate(new Date("2014/06/10"));	
````


# See Also

 * [Overview]({%slug gantt/client-side-programming/overview%})
