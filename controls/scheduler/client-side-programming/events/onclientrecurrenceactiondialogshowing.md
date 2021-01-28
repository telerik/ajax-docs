---
title: OnClientRecurrenceActionDialogShowing
page_title: OnClientRecurrenceActionDialogShowing - RadScheduler
description: Check our Web Forms article about OnClientRecurrenceActionDialogShowing.
slug: scheduler/client-side-programming/events/onclientrecurrenceactiondialogshowing
tags: onclientrecurrenceactiondialogshowing
published: True
position: 15
---

# OnClientRecurrenceActionDialogShowing



The **OnClientRecurrenceActionDialogShowing** client-side event is called just before the dialog appears to ask whether the change the user just started on a recurring appointment is to affect the appointment itself or the entire series.

Two parameters are passed to the event handler:

* **sender** is the scheduler client object.

* **eventArgs** has the following methods:

* **get_appointment()** that returns the appointment instance.

* **get_recurrenceAction()** returns **1** for**edit**, **2** for **delete**, **3** for **resize**, and **4** for **move**.

* **set_cancel()** lets you permit or block the showing of the recurrence action dialog of the appointment. Calling **set_cancel(true)** suppresses the showing of the dialog, while **set_cancel(false)** allows the scheduler to proceed with showing the dialog.

* **set_editSeries()**- instructs the scheduler whether to edit the entire series or just the occurrence.

## Example

This example shows how to suppress the "Edit this occurrence" or "Edit Series" dialog and choose to either edit the entire series or just the occurrence:

````ASPNET
	 
<script type="text/javascript">
function OnClientRecurrenceActionDialogShowing(sender, eventArgs)
{
	eventArgs.set_cancel(true);   
	//Edit this instance only:   
	//eventArgs.set_editSeries(false);   
		  
	//Edit the entire series:   
	eventArgs.set_editSeries(true);
}        
</script>
<telerik:RadScheduler
   ID="RadScheduler1"
   runat="server"  
   OnClientRecurrenceActionDialogShowing ="OnClientRecurrenceActionDialogShowing"
   DataSourceID="AppointmentsDS" />
	
````




