---
title: Tasks
page_title: Tasks | UI for ASP.NET AJAX Documentation
description: Tasks
slug: gantt/structure/tasks
tags: tasks
published: True
position: 1
---

# Tasks



In this help article you can find helpful information on the different types of **RadGantt** tasks and their properties.

## Task Properties

In the table provided below you can find all the properies of the task.


| Property | Description | Type |
| ------ | ------ | ------ |
| **ID** |Gets the ID of the task.|Object|
| **Title** |Gets the name of the task.|String|
| **Start** |Gets the date when the task is started.|DateTime|
| **End** |Gets the date when the task should be finished.|DateTime|
| **Duration** |Gets a value indicating the duration of the task.|TimeSpan|
| **PercentComplete** |Gets a value in percents indicating the task completion.|Double|
| **Summary** |Gets a boolean value indicating whether the taks is a summary task.|Bool|
| **Dependencies** |Gets a collection of dependencies to other tasks. Each dependency has a type and predecessor **ID** . There are four types of dependencies.

*  **Start-Start** - task must start when the predecessor starts

*  **Start-Finish** - task must finish before predecessor starts

*  **Finish-Start** - task must start after predecessor finishes

*  **Finish-Finish** - task must finish when predecessor finishesl|Collection of **Dependency** objects|

## Task Types

Depending on the **IsMilestone** and **IsSummary** properties, the **Task** can be one of three types:

* **Regular Task** - regular task which can have assigned resources, links to predecessors, start date, end date,duration and percentage of completion.

* **Summary** - a grouping of child tasks. The **Summary** has a **Start** and **End** determined by the earliest **Start** and latest **End** of its child tasks. The percentage of completion is calculatedbased on the percentage of each child task. The **Summary** does not have links to predecessors, and can not be referenced as such by other tasks.

* **Mileston** - a regular task with zero duration.

# See Also

 * [Dependencies]({%slug gantt/structure/dependencies%})
