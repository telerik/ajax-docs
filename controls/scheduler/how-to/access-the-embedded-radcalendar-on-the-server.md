---
title: Access the Embedded RadCalendar on the Server
page_title: Access the Embedded RadCalendar on the Server - RadScheduler
description: Check our Web Forms article about Access the Embedded RadCalendar on the Server.
slug: scheduler/how-to/access-the-embedded-radcalendar-on-the-server
tags: access,the,embedded,radcalendar,on,the,server
published: True
position: 7
---

# Access the Embedded RadCalendar on the Server



## 

The popup calendar in RadScheduler is actually RadCalendar and is a child control of RadScheduler. The **ID** of the embedded RadCalendaris **"SelectedDateCalendar"**, so getting a reference to it on the server-side can be done easily in RadScheduler's **PreRender** event as shown below:





````C#
	
protected void RadScheduler1_PreRender(object sender, EventArgs e)
{
	RadCalendar popupCalendar = RadScheduler1.FindControl("SelectedDateCalendar") as RadCalendar;
	popupCalendar.ShowOtherMonthsDays = true;
}  
	
````
````VB.NET

Protected Sub RadScheduler1_PreRender(ByVal sender As Object, ByVal e As EventArgs)
	Dim popupCalendar As RadCalendar = TryCast(RadScheduler1.FindControl("SelectedDateCalendar"), RadCalendar)
	popupCalendar.ShowOtherMonthsDays = True
End Sub
		
````

