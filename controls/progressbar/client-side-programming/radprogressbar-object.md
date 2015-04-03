---
title: RadProgressBar Object
page_title: RadProgressBar Object | UI for ASP.NET AJAX Documentation
description: RadProgressBar Object
slug: progressbar/client-side-programming/radprogressbar-object
tags: radprogressbar,object
published: True
position: 0
---

# RadProgressBar Object



## 

The __RadProgressBar__ client-side object exposes the following public methods and properties to control its behavior:


>caption  Helper Methods 

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __$telerik.findProgressBar(id, parent)__ |String, HTMLElement|RadProgressBar|Finds a __RadProgressBar__ instance. The first passed parameter is the string that contains at least a part of the ID of the __RadProgressBar__ to find and the second one is the component or element that contains it.|
| __$telerik.toProgressBar(object)__ |Object|RadProgressBar|Casts an object to a __RadProgressBar__ instance.|


>caption  RadProgressBar Client-Side Methods 

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __get_animationSettings__ ||Object Literal|Returns the animation settings of the progress bar. They are presented with an object literal with the following fields:

*  __duration__ - contains the duration of the animation in milliseconds.

*  __enableChunkAnimation__ - specifies whether the animation will be enabled when the __BarType__ property of the progress bar is set to __Chunk__ .|
| __get_barType__ ||Telerik.Web.UI.ProgressBarType|Returns the type of the progress bar as a value from the __Telerik.Web.UI.ProgressBarType__ enum that has the following values:

* Value

* Percent

* Chunk|
| __get_chunksCount__ ||Number|Returns the number of chunks in the progress bar when its __BarType__ property is set to __Chunk__ .|
| __get_enabled__ ||Boolean|Returns the enabled state of the progress bar.|
| __get_label__ ||String|Returns the label text of the progress bar.|
| __get_maxValue__ ||Number|Returns the maximum value of the progress bar.|
| __get_minValue__ ||Number|Returns the minimum value of the progress bar.|
| __get_orientation__ ||Telerik.Web.UI.ProgressBarOrientation|Returns the orientation of the progress bar as a value from the __Telerik.Web.UI.ProgressBarOrientation__ that has the following values:

* Horizontal

* Vertical|
| __get_progressWrapper__ ||HTMLElement|Returns the progress wrapper DOM element.|
| __get_reversed__ ||Boolean|Indicates whether the direction of the progress bar is reversed.|
| __get_showLabel__ ||Boolean|Returns the visible state of the label of the progress bar.|
| __get_value__ ||Number|Returns the current value of the progress bar. Undefined means indeterminate state.|
| __isCompleted__ ||Boolean|Returns the completed state of the progress bar.|
| __set_animationSettings__ |Object Literal||Sets the animation settings of the progress bar. They are presented with an object literal with the following fields:

*  __duration__ - contains the duration of the animation in milliseconds.

*  __enableChunkAnimation__ - specifies whether the animation will be enabled when the __BarType__ property of the progress bar is set to __Chunk__ .

````JavaScript
			
	            progressBar.set_animationSettings({ duration: 500, enableChunkAnimation: true });
			
````

|
| __set_enabled__ |Boolean||Sets the enabled state of the progress bar.|
| __set_label__ |String||Sets the label text of the progress bar.|
| __set_showLabel__ |Boolean||Sets the visible state of the label of the progress bar.|
| __set_value__ |Number, Boolean||Sets the current value of the progress bar. Undefined/false sets indeterminate state.|
