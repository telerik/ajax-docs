---
title: Change the Style of the Today Cell in Month View
page_title: Change the Style of the Today Cell in Month View | RadScheduler for ASP.NET AJAX Documentation
description: Change the Style of the Today Cell in Month View
slug: scheduler/how-to/change-the-style-of-the-today-cell-in-month-view
tags: change,the,style,of,the,today,cell,in,month,view
published: True
position: 5
---

# Change the Style of the Today Cell in Month View



## 

In Month View the Today Cell has the **rsTodayCell** class applied to it. So changing the style of this cell is possible with the following CSS style:

>tip  -Note:- The selector is Skin-dependent. One should replace [skinName] with the name of the currently used Skin.
>


````CSS
	    
div.RadScheduler_[skinName] .rsMonthView .rsTodayCell
{
	background-color: #CCFF00;
	color: #000;
	border: 1px solid #000;
}  
	
````


