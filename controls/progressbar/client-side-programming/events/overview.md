---
title: Events Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: progressbar/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview



## 

__RadProgressBar__ provides a rich set of client-side events which allow easy and flexibleuse in a wide range of application scenarios. In this article you will find examples about each of these events,demonstrating how to handle and cancel them (if possible):

* __[OnInitialize]({%slug progressbar/client-side-programming/events/oninitialize%})__—raised when the __RadProgressBar__client-side object is initialized.

* __[OnLoad]({%slug progressbar/client-side-programming/events/onload%})__—raised when the __RadProgressBar__client-side object is fully loaded. The full API of the control is available at this point.

* __[OnValueChanging]({%slug progressbar/client-side-programming/events/onvaluechanging%})__—raised just before the __RadProgressBar__ value property is changed. You can handle this eventin case you want to prevent the current value from changing.

* __[OnValueChanged]({%slug progressbar/client-side-programming/events/onvaluechanged%})__—raised after the __RadProgressBar__value property has been changed.

* __[OnCompleted]({%slug progressbar/client-side-programming/events/oncompleted%})__—raised when the __RadProgressBar__reaches its max value.

To use these events, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the the corresponding property in the control's __ClientEvents__ subtag.

## RadProgressBar Client-side Methods for Attaching/Setaching Client-side Event Handlers


|  __Name__  |  __Arguments__  |  __Description__  |
| ------ | ------ | ------ |
|add_initialize()|Function|Adds a handler for the OnInitialize ProgressBar client-side event.|
|add_load()|Function|Adds a handler for the OnLoad ProgressBar client-side event.|
|add_valueChanging()|Function|Adds a handler for the OnValueChanging ProgressBar client-side event.|
|add_valueChanged()|Function|Adds a handler for the OnValueChanged ProgressBar client-side event.|
|add_completed()|Function|Adds a handler for the OnCompleted ProgressBar client-side event.|
|remove_initialize()|Function|Removes a handler for the OnInitialize ProgressBar client-side event.|
|remove_load()|Function|Removes a handler for the OnLoad ProgressBar client-side event.|
|remove_valueChanging()|Function|Removes a handler for the OnValueChanging ProgressBar client-side event.|
|remove_valueChanged()|Function|Removes a handler for the OnValueChanged ProgressBar client-side event.|
|remove_completed()|Function|Removes a handler for the OnCompleted ProgressBar client-side event.|

# See Also

 * [RadProgressBar Object]({%slug progressbar/client-side-programming/radprogressbar-object%})

 * [Element Structure]({%slug progressbar/getting-started/element-structure%})
