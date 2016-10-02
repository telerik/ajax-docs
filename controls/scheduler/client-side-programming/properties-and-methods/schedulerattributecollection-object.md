---
title: SchedulerAttributeCollection Object
page_title: SchedulerAttributeCollection Object | RadScheduler for ASP.NET AJAX Documentation
description: SchedulerAttributeCollection Object
slug: scheduler/client-side-programming/properties-and-methods/schedulerattributecollection-object
tags: schedulerattributecollection,object
published: True
position: 6
---

# SchedulerAttributeCollection Object



The SchedulerAttributeCollection client-side object represents a Key-Value list of attributes. Each attribute has a Name (Key) and a Value.Two attributes with the same Names (Keys) cannot exist in the collection at the same time.

The tables below lists all public properties and the most important methods of the SchedulerAttributeCollection client-side object.


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_count()** |None|Int|Gets the number of attributes in the collection.|
| **getAttribute()** |String|String|Gets the value of the attribute with the specified name (key).|
| **removeAttribute()** |String|None|Removes the attribute with the specified name (key) from the collection.|
| **setAttribute()** |String (key), String (value)|None|Sets the specified value to the attribute with the specified name (key). If an attribute with such name (key) does not exist in the collection, it will be added.|

# See Also

 * [Overview]({%slug scheduler/client-side-programming/events/overview%})
