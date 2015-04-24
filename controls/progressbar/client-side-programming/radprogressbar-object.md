---
title: RadProgressBar Object
page_title: RadProgressBar Object | RadProgressBar for ASP.NET AJAX Documentation
description: RadProgressBar Object
slug: progressbar/client-side-programming/radprogressbar-object
tags: radprogressbar,object
published: True
position: 0
---

# RadProgressBar Object



## 

The **RadProgressBar** client-side object exposes the following public methods and properties to control its behavior:


>caption  Helper Methods 

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **$telerik.findProgressBar(id, parent)** |String, HTMLElement|RadProgressBar|Finds a **RadProgressBar** instance. The first passed parameter is the string that contains at least a part of the ID of the **RadProgressBar** to find and the second one is the component or element that contains it.|
| **$telerik.toProgressBar(object)** |Object|RadProgressBar|Casts an object to a **RadProgressBar** instance.|


>caption  RadProgressBar Client-Side Methods 

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **get_animationSettings** ||Object Literal|Returns the animation settings of the progress bar. They are presented with an object literal with the following fields:

*  **duration** - contains the duration of the animation in milliseconds.

*  **enableChunkAnimation** - specifies whether the animation will be enabled when the **BarType** property of the progress bar is set to **Chunk** .|
| **get_barType** ||Telerik.Web.UI.ProgressBarType|Returns the type of the progress bar as a value from the **Telerik.Web.UI.ProgressBarType** enum that has the following values:

* Value

* Percent

* Chunk|
| **get_chunksCount** ||Number|Returns the number of chunks in the progress bar when its **BarType** property is set to **Chunk** .|
| **get_enabled** ||Boolean|Returns the enabled state of the progress bar.|
| **get_label** ||String|Returns the label text of the progress bar.|
| **get_maxValue** ||Number|Returns the maximum value of the progress bar.|
| **get_minValue** ||Number|Returns the minimum value of the progress bar.|
| **get_orientation** ||Telerik.Web.UI.ProgressBarOrientation|Returns the orientation of the progress bar as a value from the **Telerik.Web.UI.ProgressBarOrientation** that has the following values:

* Horizontal

* Vertical|
| **get_progressWrapper** ||HTMLElement|Returns the progress wrapper DOM element.|
| **get_reversed** ||Boolean|Indicates whether the direction of the progress bar is reversed.|
| **get_showLabel** ||Boolean|Returns the visible state of the label of the progress bar.|
| **get_value** ||Number|Returns the current value of the progress bar. Undefined means indeterminate state.|
| **isCompleted** ||Boolean|Returns the completed state of the progress bar.|
| **set_animationSettings** |Object Literal||Sets the animation settings of the progress bar. They are presented with an object literal with the following fields:

*  **duration** - contains the duration of the animation in milliseconds.

*  **enableChunkAnimation** - specifies whether the animation will be enabled when the **BarType** property of the progress bar is set to **Chunk** .

````JavaScript
			
	            progressBar.set_animationSettings({ duration: 500, enableChunkAnimation: true });
			
````

|
| **set_enabled** |Boolean||Sets the enabled state of the progress bar.|
| **set_label** |String||Sets the label text of the progress bar.|
| **set_showLabel** |Boolean||Sets the visible state of the label of the progress bar.|
| **set_value** |Number, Boolean||Sets the current value of the progress bar. Undefined/false sets indeterminate state.|
