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



In this help article you can find helpful information on the different types of __RadGantt__ tasks and their properties.

## Task Properties

In the table provided below you can find all the properies of the task.


| Property | Description | Type |
| ------ | ------ | ------ |
| __ID__ |Gets the ID of the task.|Object|
| __Title__ |Gets the name of the task.|String|
| __Start__ |Gets the date when the task is started.|DateTime|
| __End__ |Gets the date when the task should be finished.|DateTime|
| __Duration__ |Gets a value indicating the duration of the task.|TimeSpan|
| __PercentComplete__ |Gets a value in percents indicating the task completion.|Double|
| __Summary__ |Gets a boolean value indicating whether the taks is a summary task.|Bool|
| __Dependencies__ |Gets a collection of dependencies to other tasks. Each dependency has a type and predecessor __ID__ . There are four types of dependencies.

*  __Start-Start__ - task must start when the predecessor starts

*  __Start-Finish__ - task must finish before predecessor starts

*  __Finish-Start__ - task must start after predecessor finishes

*  __Finish-Finish__ - task must finish when predecessor finishesl|Collection of __Dependency__ objects|

## Task Types

Depending on the __IsMilestone__ and __IsSummary__ properties, the __Task__ can be one of three types:

* __Regular Task__ - regular task which can have assigned resources, links to predecessors, start date, end date,duration and percentage of completion.

* __Summary__ - a grouping of child tasks. The __Summary__ has a __Start__ and __End__ determined by the earliest __Start__ and latest __End__ of its child tasks. The percentage of completion is calculatedbased on the percentage of each child task. The __Summary__ does not have links to predecessors, and can not be referenced as such by other tasks.

* __Mileston__ - a regular task with zero duration.

# See Also

 * [Dependencies]({%slug gantt/structure/dependencies%})
