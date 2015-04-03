---
title: ItemTemplate Event Problems
page_title: ItemTemplate Event Problems | UI for ASP.NET AJAX Documentation
description: ItemTemplate Event Problems
slug: combobox/troubleshooting/itemtemplate-event-problems
tags: itemtemplate,event,problems
published: True
position: 4
---

# ItemTemplate Event Problems



## 

Let's say you have placed a simple HTML TextBox in an ItemTemplate of RadComboBox.

RadComboBox will intercept all the input events - mouse_clicks, key_ presses, etc. Any mouse_click inside the drop-down will immediately close the drop-down - even if you click inside the TextBox. This issue is due to the DOM event bubbling - any event from child element (e.g. the TextBox) bubbles up to its parent (the combobox) unless bubbling is stopped. To solve the problem, cancel the event bubbling and enable the text selection you should use the following approach:

````ASPNET
	    <itemtemplate>   
	        <input type="text" onclick="event.cancelBubble=true" onselectstart="event.cancelBubble=true" />
	    </itemtemplate>
````



Even if you place RadTreeView inside an ItemTemplate of RadComboBox, you can use an approach similar to the one above by wrapping the tree control with a DIV tag, like:

````ASPNET
	    <div onclick="event.cancelBubble=true">
````


