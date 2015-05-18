---
title: Replace the Edit Form
page_title: Replace the Edit Form | RadScheduler for ASP.NET AJAX Documentation
description: Replace the Edit Form
slug: scheduler/how-to/replace-the-edit-form
tags: replace,the,edit,form
published: True
position: 10
---

# Replace the Edit Form



## 

You can use the **OnClientAppointmentEditing** and **OnClientAppointmentInserting** events to replace the default edit form with one of your own. This example shows how to replace them with an edit form that is implemented using **RadWindow**.

1. Drag a **RadScheduler** onto your Web page from the toolbox.

* [Bind the scheduler]({%slug scheduler/data-binding/overview%}) to a data source.

* Set its **StartEditingInAdvancedForm** property to **False**,so that the new custom edit form is not loaded unless the user clicks the "more" link.

1. Drag a **RadAjaxLoadingPanel** from the toolbox onto your Web page. On the body of the loading panel, type the literal "Loading..."

1. Drag a **RadAjaxManager** onto your Web page.

1. In the AJAX manager's Smart Tag, choose "Configure Ajax Manager".

1. In the Property Builder, select the **RadScheduler**as a control that initiates a request and as the updated control by this request. Assign the **RadAjaxLoadingPanel** as the loading panel for this pair. Then select the **RadAjaxManager**as a control that initiates a request and select the **RadScheduler** as the updated control.

1. Give the AJAX manager an **AjaxRequest** event handler to rebind the scheduler after an edit:


	**C#**
	
		protected void RadAjaxManager1_AjaxRequest(object sender, AjaxRequestEventArgs e)
		{
			if (e.Argument == "RebindScheduler")
			{
				RadScheduler1.Rebind();
			}
		}
	    

	**VB**
	
		Protected Sub RadAjaxManager1_AjaxRequest( _
						ByVal sender As Object, _
						ByVal e As AjaxRequestEventArgs)
			If e.Argument = "RebindScheduler" Then
				RadScheduler1.Rebind()
			End If
		End Sub
	


1. Switch to Source view and add the following javascript functions to your page:

	**JavaScript**
	
		function AppointmentEditing(sender, eventArgs)
		{
			 var apt = eventArgs.get_appointment();
			 window.radopen("AdvancedForm.aspx?Mode=Edit&AppointmentId=" + apt.ID, "AdvancedForm");
			 eventArgs.set_cancel(true);
		}

		function AppointmentInserting(sender, eventArgs)
		{
			 var start = formatDate(eventArgs.get_startTime());
			 var isAllDay = eventArgs.get_isAllDay();
			 // New appointment
			 window.radopen("AdvancedForm.aspx?Mode=Insert&Start=" + start + "&IsAllDay=" + isAllDay, "AdvancedForm");   
			 eventArgs.set_cancel(true);
		}

		function formatDate(date)
		{
			var year = padNumber(date.getUTCFullYear(), 4);
			var month = padNumber(date.getUTCMonth() + 1, 2);
			var day = padNumber(date.getUTCDate(), 2);
			var hour = padNumber(date.getUTCHours(), 2);
			var minute = padNumber(date.getUTCMinutes(), 2);

			return year + month + day + hour + minute;
		}

		function padNumber(number, totalDigits)
		{
			number = number.toString();
			var padding = '';
			if (totalDigits > number.length)
			{
			 for (i = 0; i < (totalDigits - number.length); i++)
			 {
			   padding += '0';
			 }
			}

			return padding + number.toString();
		}

		function refreshScheduler()
		{
			 var ajaxManager = $find("RadAjaxManager1");
			 ajaxManager.ajaxRequest('RebindScheduler');
		}
			


1. Set the **OnClientAppointmentEditing** property of your **RadScheduler** to "**AppointmentEditing**" and the **OnClientAppointmentInserting** property to "**AppointmentInserting**". These two javascript functions are defined in the javascript you added to your page.They call **window.radopen()** to open a **RadWindow** with content defined by **AdvancedForm.aspx**. **AdvancedForm.aspx** is a Web Form that takes information about the appointment from the URL. It uses four query parameters: **Mode**, which is "Insert" or "Edit" depending on whether the form is inserting a new appointment or editing an existing one; **AppointmentId**, which is the keyfor the appointment to edit; **Start**, which is the start time for an inserted appointment;and **IsAllDay**, which indicates whetheran inserted appointment should begin as an all-day event. **AdvancedForm.aspx** has its own reference to the data source that the scheduler uses, and usesthat data source to obtain information about the appointment to be edited, as well as to save any changes made by the user. For more information on **AdvancedForm.aspx**, see the Quick Start demo.

	>note The **AppointmentEditing** and **AppointmentInserting** functions call eventArgs.set_cancel(true) to prevent the scheduler from editing or inserting the appointment: this is handled by the edit form instead.
	>


1. Drag a **RadWindowManager** onto your page and add a window to the **RadWindowManager**.

	* Set the **ID** property of the window to "AdvancedForm"

	* Set the **Title** property to "Edit an Appointment"

	* Set the **ReloadOnShow** property to **True**

	* Set the**Modal** property to **True**

	* Set the **VisibleStatusBar** property to **False**

	* Set the **Behaviors** property to "Close"

	* Set the **OnClientClose** property to the "refreshScheduler" function from the javascript you added to your page. The refreshScheduler function causes the AJAX manager to trigger a rebind of the scheduler to reflectthe changes made in the new edit form.



# See Also

 * [OnClientAppointmentEditing]({%slug scheduler/client-side-programming/events/onclientappointmentediting%})

 * [OnClientAppointmentInserting]({%slug scheduler/client-side-programming/events/onclientappointmentinserting%})
