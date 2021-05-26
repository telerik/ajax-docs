---
title: Planned vs Actual
page_title: Planned vs Actual - RadGantt
description:  Check our Web Forms article about PDF Export.
slug: gantt/functionality/planned-vs-actual
tags: planned,actual,task,baseline
published: True
position: 9
---

# Planned vs Actual

The `Planned vs Actual` functionality of the Gantt allows you to compare actual `start` and `end` dates to originaly planned dates or in other words, the `Baseline dates`. If the actual completion date of a task matches the planned end time date, the default task appearance is used. In the scenarios listed below, when there is a difference between an actual and a planned(baseline) date, the Gantt visualizes it by changing the appearance of the task:

* The actual `end` date of the task is before the planned `end` date - the task is colored green.
* The actual `end` date of the task is after the planned `end` date - a hatched bar that marks the delay is rendered in the task. 
* The actual `start` date of the task is after the planned `end` date - the task is colored red.

For a full example of the Planned vs Actual functionality, refer to the [Planned vs Actual Demo](https://demos.telerik.com/aspnet-ajax/gantt/examples/functionality/planned-vs-actual/defaultcs.aspx).

## Configuration

The example below demonstrates how to configure the Gantt to display planned and actual dates.

The `AllowPlannedTasks` property enables a switch in the toolbar of the Gantt that allows toggling the `Planned vs Actual` functionality. 

The `ShowPlannedTasks` property controls whether planned dates will be shown initially.

## Binding

The `PlannedStart` and `PlannedEnd` properties are not required to populate the Gantt tasks and they allow null values. The type of the planned dates properties is a [Nullable](https://docs.microsoft.com/en-us/dotnet/api/system.nullable-1?view=net-5.0) DateTime - `DateTime?`. The fields in an SQL database can be of type `datetime`, nullable.

## See Also

* [Gantt Data Binding]({%slug gantt/data-binding/database-structure %})
* [Planned vs Actual (Demo)](https://demos.telerik.com/aspnet-ajax/gantt/examples/functionality/planned-vs-actual/defaultcs.aspx)

