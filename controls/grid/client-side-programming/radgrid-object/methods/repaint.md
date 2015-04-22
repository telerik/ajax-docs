---
title: repaint
page_title: repaint | RadGrid for ASP.NET AJAX Documentation
description: repaint
slug: grid/client-side-programming/radgrid-object/methods/repaint
tags: repaint
published: True
position: 2
---

# repaint



## 

Method which re-renders the grid on the client. Useful when you would like to refresh the grid appearance on the client and synchronize the column settings when scrolling and static headers are enabled and the control is nested in another container.


|  **repaint()**  |
| ------ |
||

Example:

````JavaScript
	        function repaintGrid(sender, args) {
	            var grid = $find("<%=RadGrid1.ClientID %>");
	            grid.repaint();
	        }
````


