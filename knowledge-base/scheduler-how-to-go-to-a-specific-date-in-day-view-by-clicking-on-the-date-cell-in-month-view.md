---
title: How to go to a specific date in Day View by clicking on the date cell in Month View
description: How to go to a specific date in Day View by clicking on the date cell in Month View of RadSheduler. Check it now!
type: how-to
page_title: How to go to a specific date in Day View by clicking on the date cell in Month View
slug: scheduler-how-to-go-to-a-specific-date-in-day-view-by-clicking-on-the-date-cell-in-month-view.md
res_type: kb
---

## HOW-TO  
   
 Go to a specific date in Day View by clicking on the date cell in Month View of RadSheduler
   
## DESCRIPTION 
   
 RadScheduler's **OnClientTimeSlotClick** event is used along with **RadAjax** to pass the clicked date to the **AjaxRequest** server-side event handler which updates RadScheduler to switch to Day View for the corresponding date.   
   
## SOLUTION
   
````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server"      
        onajaxrequest="RadAjaxManager1_AjaxRequest">     
         <AjaxSettings>    
             <telerik:AjaxSetting AjaxControlID="RadAjaxManager1">     
                 <UpdatedControls>    
                     <telerik:AjaxUpdatedControl ControlID="RadScheduler1" />    
                 </UpdatedControls>    
             </telerik:AjaxSetting>    
             <telerik:AjaxSetting AjaxControlID="RadScheduler1">     
                 <UpdatedControls>    
                     <telerik:AjaxUpdatedControl ControlID="RadScheduler1" />    
                 </UpdatedControls>    
             </telerik:AjaxSetting>    
         </AjaxSettings>    
    </telerik:RadAjaxManager>    
    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">     
    <script type="text/javascript">     
    function OnClientTimeSlotClickHandler(sender, eventArgs)     
    {           
        if(sender.get_selectedView() == Telerik.Web.UI.SchedulerViewType.MonthView)     
        {                
            $find("<%=RadAjaxManager1.ClientID %>").ajaxRequest(eventArgs.get_time().format("MM/dd/yyyy"));     
        }     
    }         
    </script>    
    </telerik:RadCodeBlock>    
 
    <telerik:RadScheduler ID="RadScheduler1" runat="server" 
       OnClientTimeSlotClick="OnClientTimeSlotClickHandler" .../> 
````

````C#
protected void RadAjaxManager1_AjaxRequest(object sender, Telerik.Web.UI.AjaxRequestEventArgs e)  
{  
    DateTime dt = new DateTime();  
    dt = DateTime.Parse(e.Argument);  
    RadScheduler1.SelectedView = Telerik.Web.UI.SchedulerViewType.DayView;  
    RadScheduler1.SelectedDate = dt;  
}   
````
 
   