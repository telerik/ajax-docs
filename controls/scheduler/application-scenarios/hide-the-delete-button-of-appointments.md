---
title: Hide the Delete Button of Appointments
page_title: Hide the Delete Button of Appointments | UI for ASP.NET AJAX Documentation
description: Hide the Delete Button of Appointments
slug: scheduler/application-scenarios/hide-the-delete-button-of-appointments
tags: hide,the,delete,button,of,appointments
published: True
position: 6
---

# Hide the Delete Button of Appointments



## 

One could hide the Delete button of Appointments either by setting the __AllowDelete__property of RadScheduler to __false__ or by including the following CSS style on the page where the control is located:

````CSS
	     
	.rsAptDelete
	{
	display: none;
	}
				
````


