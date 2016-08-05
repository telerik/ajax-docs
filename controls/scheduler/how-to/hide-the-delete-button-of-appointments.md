---
title: Hide the Delete Button of Appointments
page_title: Hide the Delete Button of Appointments | RadScheduler for ASP.NET AJAX Documentation
description: Hide the Delete Button of Appointments
slug: scheduler/how-to/hide-the-delete-button-of-appointments
tags: hide,the,delete,button,of,appointments
published: True
position: 6
---

# Hide the Delete Button of Appointments



## 

One could hide the Delete button of Appointments either by setting the **AllowDelete** property of RadScheduler to **false** or by including the following CSS style on the page where the control is located:

````CSS
	     
/* For Classic RenderMode */
.rsAptDelete {
    display: none;
}

/* For Lightweight RenderMode */
.RadScheduler .rsApt .rsAptDelete {
    display: none;
}
				
````


