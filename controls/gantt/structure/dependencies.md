---
title: Dependencies
page_title: Dependencies | UI for ASP.NET AJAX Documentation
description: Dependencies
slug: gantt/structure/dependencies
tags: dependencies
published: True
position: 2
---

# Dependencies



The following article describes the Dependencies between tasks and how they can be managed.

## Dependencies

__The dependencies__ represent the relations between two components. The direction of the arrow indicated which component is dependent on the other. They could be created, deleted or customized from the Timeline area, in each of the views - __Day, Week, Month and Year__. You could use dependencies, in order to link the tasks and thus create the work-flow for a given summary task.


|  __Dependency Type__  |  __Example__  |  __Description__  |
| ------ | ------ | ------ |
|Finish to Start (FS)|![gantt-structure-dependencies-fs](images/gantt-structure-dependencies-fs.png)|The task cannot start before its predecessor task ends, although it may start later.|
|Start to Start (SS)|![gantt-structure-dependencies-ss](images/gantt-structure-dependencies-ss.png)|The task cannot start until the predecessor task starts, although it may start later.|
|Finish to Finish (FF)|![gantt-structure-dependencies-ff](images/gantt-structure-dependencies-ff.png)|The task cannot end before the predecessor task ends, although it may end later.|
|Start to Finish (SF)|![gantt-structure-dependencies-sf](images/gantt-structure-dependencies-sf.png)|The task cannot end before the predecessor task starts, although it may end later.|
