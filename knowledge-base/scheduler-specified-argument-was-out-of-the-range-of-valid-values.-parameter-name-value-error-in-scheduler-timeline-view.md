---
title: 'Specified argument was out of the range of valid values. Parameter name: value error in Scheduler Timeline view'
description: 'Specified argument was out of the range of valid values. Parameter name: value error in Scheduler Timeline view. Check it now!'
type: how-to
page_title: 'Specified argument was out of the range of valid values. Parameter name: value error in Scheduler Timeline view - Telerik UI for ASP.NET AJAX - KB'
slug: scheduler-specified-argument-was-out-of-the-range-of-valid-values.-parameter-name-value-error-in-scheduler-timeline-view
res_type: kb
---


### PROBLEM

The following error is encountered when the *RadScheduler1.TimelineView.NumberOfSlots* property is set to a big number and the column width is set in pixels so that Horizontal scroll appears. The issue is reproduced by having an appointment staring in one of the last slots in the view.


<div class="server-error">
<span></span>
<h4>Server Error in '/' Application.</h4>
<hr width="100%" size="1" color="silver">
<h4> <em>Specified argument was out of the range of valid values.<br>
Parameter name: value</em> </h4>
<span style="font-family: Arial, Helvetica, Geneva, SunSans-Regular, sans-serif;">
<strong> Description: </strong>An unhandled exception occurred during the execution of the current web request. Please review the stack trace for more information about the error and where it originated in the code.
<br>
<br>
<strong> Exception Details: </strong>System.ArgumentOutOfRangeException: Specified argument was out of the range of valid values.<br>
Parameter name: value<br>
<br>
<strong>Source Error:</strong> <br>
<br>
</span>
<table width="100%" style="background-color: #ffffcc;">
    <tbody>
        <tr>
            <td>
            <code>
            An unhandled exception was generated during the execution of the current web request. Information regarding the origin and location of the exception can be identified using the exception stack trace below.</code>
            </td>
        </tr>
    </tbody>
</table>
<span style="font-family: Arial, Helvetica, Geneva, SunSans-Regular, sans-serif;">
<br>
<strong>Stack Trace:</strong> <br>
<br>
</span>
<table width="100%" style="background-color: #ffffcc;">
    <tbody>
        <tr>
            <td>
            <code>
            <pre>[ArgumentOutOfRangeException:<strong> Specified argument was out of the range of valid values.</strong>
Parameter name: value]
   <strong>System.Web.UI.WebControls.Unit..ctor(Double value, UnitType type) +9821778</strong>
   <strong>Telerik.Web.UI.Scheduler.Views.Timeline.TimelineAppointmentControl.GetWidth() +348</strong>
   Telerik.Web.UI.AppointmentControl.CalculateSize() +38
   Telerik.Web.UI.Scheduler.Views.Timeline.TimelineAppointmentControl.CalculateSize() +33
   Telerik.Web.UI.Scheduler.Views.AllDayLayout.CreateAppointmentControls(IEnumerable`1 slots, Boolean registerAppointmentControls) +817
   Telerik.Web.UI.Scheduler.Views.AllDayLayout.get_AppointmentControls() +24
   Telerik.Web.UI.Scheduler.Views.Timeline.RendererBase.CreateInnerContentTable(Control container, IList`1 allTimeLineSlots) +253
   Telerik.Web.UI.Scheduler.Views.Timeline.RendererBase.CreateInnerContentTable(Control container, IList`1 intervalSlots, Int32 minimumRowCount) +49
   Telerik.Web.UI.Scheduler.Views.Timeline.Renderer.GetInnerContent() +511
   Telerik.Web.UI.Scheduler.Views.SchedulerRenderer.GetContent() +75
   Telerik.Web.UI.RadScheduler.CreateContent() +122
   Telerik.Web.UI.RadScheduler.CreateChildControls(Boolean bindFromDataSource) +100
   Telerik.Web.UI.RadScheduler.ClearChildControls() +65
   Telerik.Web.UI.RadScheduler.Rebind() +12
   Telerik.Web.UI.RadScheduler.ProcessPostBackCommand(SchedulerPostBackEvent postBack) +2104
   Telerik.Web.UI.RadScheduler.RaisePostBackEvent(String eventArgument) +62
   Telerik.Web.UI.RadScheduler.System.Web.UI.IPostBackEventHandler.RaisePostBackEvent(String eventArgument) +13
   System.Web.UI.Page.RaisePostBackEvent(IPostBackEventHandler sourceControl, String eventArgument) +15
   System.Web.UI.Page.RaisePostBackEvent(NameValueCollection postData) +9883930
   System.Web.UI.Page.ProcessRequestMain(Boolean includeStagesBeforeAsyncPoint, Boolean includeStagesAfterAsyncPoint) +1639
</pre>
            </code>
            </td>
        </tr>
    </tbody>
</table>
<span style="font-family: Arial, Helvetica, Geneva, SunSans-Regular, sans-serif;">
<br>
</span><hr width="100%" size="1" color="silver">
<span style="font-family: Arial, Helvetica, Geneva, SunSans-Regular, sans-serif;">
<strong>Version Information:</strong>&nbsp;Microsoft .NET Framework Version:4.0.30319; ASP.NET Version:4.7.3163.0
</span>
<!-- 
[ArgumentOutOfRangeException]: Specified argument was out of the range of valid values.
Parameter name: value
   at System.Web.UI.WebControls.Unit..ctor(Double value, UnitType type)
   at Telerik.Web.UI.Scheduler.Views.Timeline.TimelineAppointmentControl.GetWidth()
   at Telerik.Web.UI.AppointmentControl.CalculateSize()
   at Telerik.Web.UI.Scheduler.Views.Timeline.TimelineAppointmentControl.CalculateSize()
   at Telerik.Web.UI.Scheduler.Views.AllDayLayout.CreateAppointmentControls(IEnumerable`1 slots, Boolean registerAppointmentControls)
   at Telerik.Web.UI.Scheduler.Views.AllDayLayout.get_AppointmentControls()
   at Telerik.Web.UI.Scheduler.Views.Timeline.RendererBase.CreateInnerContentTable(Control container, IList`1 allTimeLineSlots)
   at Telerik.Web.UI.Scheduler.Views.Timeline.RendererBase.CreateInnerContentTable(Control container, IList`1 intervalSlots, Int32 minimumRowCount)
   at Telerik.Web.UI.Scheduler.Views.Timeline.Renderer.GetInnerContent()
   at Telerik.Web.UI.Scheduler.Views.SchedulerRenderer.GetContent()
   at Telerik.Web.UI.RadScheduler.CreateContent()
   at Telerik.Web.UI.RadScheduler.CreateChildControls(Boolean bindFromDataSource)
   at Telerik.Web.UI.RadScheduler.ClearChildControls()
   at Telerik.Web.UI.RadScheduler.Rebind()
   at Telerik.Web.UI.RadScheduler.ProcessPostBackCommand(SchedulerPostBackEvent postBack)
   at Telerik.Web.UI.RadScheduler.RaisePostBackEvent(String eventArgument)
   at Telerik.Web.UI.RadScheduler.System.Web.UI.IPostBackEventHandler.RaisePostBackEvent(String eventArgument)
   at System.Web.UI.Page.RaisePostBackEvent(IPostBackEventHandler sourceControl, String eventArgument)
   at System.Web.UI.Page.RaisePostBackEvent(NameValueCollection postData)
   at System.Web.UI.Page.ProcessRequestMain(Boolean includeStagesBeforeAsyncPoint, Boolean includeStagesAfterAsyncPoint)
[HttpUnhandledException]: Exception of type &#39;System.Web.HttpUnhandledException&#39; was thrown.
   at System.Web.UI.Page.HandleError(Exception e)
   at System.Web.UI.Page.ProcessRequestMain(Boolean includeStagesBeforeAsyncPoint, Boolean includeStagesAfterAsyncPoint)
   at System.Web.UI.Page.ProcessRequest(Boolean includeStagesBeforeAsyncPoint, Boolean includeStagesAfterAsyncPoint)
   at System.Web.UI.Page.ProcessRequest()
   at System.Web.UI.Page.ProcessRequestWithNoAssert(HttpContext context)
   at System.Web.UI.Page.ProcessRequest(HttpContext context)
   at ASP.default_aspx.ProcessRequest(HttpContext context) in c:\Users\pmilchev\AppData\Local\Temp\Temporary ASP.NET Files\vs\c98942b5\ed2ec499\App_Web_mkhgwjkz.0.cs:line 0
   at System.Web.HttpApplication.CallHandlerExecutionStep.System.Web.HttpApplication.IExecutionStep.Execute()
   at System.Web.HttpApplication.ExecuteStepImpl(IExecutionStep step)
   at System.Web.HttpApplication.ExecuteStep(IExecutionStep step, Boolean& completedSynchronously)
-->
</div>


### DESCRIPTION

The position of an appointment is saved and uses [Microsoft's Unit struct](https://docs.microsoft.com/en-us/dotnet/api/system.web.ui.webcontrols.unit?view=netframework-4.7.2), which has a limited range - *The Unit class can represent values only between -32768 and 32767*.

### SOLUTION

As this is a limitation of the .NET Framework's struct, the possible workarounds are:

- Decreasing the number of slots per view;
- Decreasing the width of the slots;
- Removing the horizontal scrolling by setting the column width in percentages;

  
