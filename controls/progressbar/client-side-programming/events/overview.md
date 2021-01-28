---
title: Overview
page_title: Events Overview - RadProgressBar
description: Check our Web Forms article about Events Overview.
slug: progressbar/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview

**RadProgressBar** provides a rich set of client-side events which allow easy and flexible use in a wide range of application scenarios. In this article you will find examples about each of these events,demonstrating how to handle and cancel them (if possible):

* **[OnInitialize]({%slug progressbar/client-side-programming/events/oninitialize%})**—raised when the **RadProgressBar** client-side object is initialized.

* **[OnLoad]({%slug progressbar/client-side-programming/events/onload%})**—raised when the **RadProgressBar** client-side object is fully loaded. The full API of the control is available at this point.

* **[OnValueChanging]({%slug progressbar/client-side-programming/events/onvaluechanging%})**—raised just before the **RadProgressBar** value property is changed. You can handle this event in case you want to prevent the current value from changing.

* **[OnValueChanged]({%slug progressbar/client-side-programming/events/onvaluechanged%})**—raised after the **RadProgressBar** value property has been changed.

* **[OnCompleted]({%slug progressbar/client-side-programming/events/oncompleted%})**—raised when the **RadProgressBar** reaches its max value.

To use these events, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the the corresponding property in the control's **ClientEvents** subtag.

## RadProgressBar Client-side Methods for Attaching/Setaching Client-side Event Handlers

|  **Name**  |  **Arguments**  |  **Description**  |
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

## See Also

 * [RadProgressBar Object]({%slug progressbar/client-side-programming/radprogressbar-object%})

 * [Element Structure]({%slug progressbar/getting-started/element-structure%})
