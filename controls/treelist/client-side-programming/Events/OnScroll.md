---
title: OnScroll
page_title: OnScroll - RadTreeList
description: Check our Web Forms article about OnScroll Event.
slug: treelist/client-side-programming/Events/OnScroll
tags: events,OnScroll
published: True
position: 1
---

# OnScroll


This event is fired when the treelist is scrolled.


| | |
| ------ | ------ |
| **Fired by** | RadTreeList |
| **Arguments** | get_isOnBottom() - bool indicating whether the scroll has reached the bottom of the treelist |
|| get_isOnTop() - bool indicating whether the scroll has reached the top of the treelist |
|| get_scrollControl() - the <div> element that is being scrolled |
|| get_scrollTop() - the [scrollTop](https://msdn.microsoft.com/en-us/library/ms534618) value |
|| get_scrollLeft() - the [scrollLeft](https://msdn.microsoft.com/en-us/library/ms534617) value |
|| get_cancel() - bool |
|| set_cancel(bool) |
| **Can be canceled** | Yes |


## Example

````JavaScript
function Scroll(sender, eventArgs) {
    if (eventArgs.get_isOnBottom()) {
        alert('Reached bottom.');
    }
    else if (eventArgs.get_isOnTop()) {
        alert('Reached top.');
    }
}
````



## See Also

 * [Overview]({%slug treelist/client-side-programming/Events/Overview%})
 
 
 
