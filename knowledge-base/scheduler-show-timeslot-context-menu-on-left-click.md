---
title: Show the time slot context menu on left-click
description: Show the time slot context menu on left-click. Check it now!
type: how-to
page_title: Show the time slot context menu on left-click - Telerik UI for ASP.NET AJAX - KB
slug: scheduler-show-timeslot-context-menu-on-left-click
res_type: kb
---
 
   
### HOW TO  

Show the context menu associated with a specific timeslot when you left-click it.   
   
### DESCRIPTION  
   
This functionality is easily achieved with the [client API]({%slug scheduler/client-side-programming/properties-and-methods/radscheduler-object%}) of RadScheduler.   
   
### SOLUTION 
   
Get the desired timeslot context menu from the [OnClientTimeSlotClick]({%slug scheduler/client-side-programming/events/onclienttimeslotclick%}) event and show the menu as explained in [Hide and Show the Menu on the Client]({%slug menu/how-to/hide-and-show-the-menu-on-the-client%}).
 
````ASP.NET
<script type="text/javascript">
   function OnClientTimeSlotClick(sender, args) {

      sender.get_timeSlotContextMenus()[0].show(args.get_domEvent());
   }
</script>
<telerik:RadScheduler runat="server" ID="RadScheduler1" OnClientTimeSlotClick="OnClientTimeSlotClick">
   <TimeSlotContextMenuSettings EnableDefault="true" />
</telerik:RadScheduler>

````
 

### See Also

* [RadScheduler Client API]({%slug scheduler/client-side-programming/properties-and-methods/radscheduler-object%})
* [OnClientTimeSlotClick]({%slug scheduler/client-side-programming/events/onclienttimeslotclick%})
* [Hide and Show the Menu on the Client]({%slug menu/how-to/hide-and-show-the-menu-on-the-client%})


