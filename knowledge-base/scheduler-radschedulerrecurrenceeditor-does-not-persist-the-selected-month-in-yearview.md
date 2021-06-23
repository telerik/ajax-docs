---
title: RadSchedulerRecurrenceEditor does not persist the Selected month in YearView
description: RadSchedulerRecurrenceEditor does not persist the Selected month in YearView. Check it now!
type: troubleshooting
page_title: RadSchedulerRecurrenceEditor does not persist the Selected month in YearView - Telerik UI for ASP.NET AJAX - KB
slug: scheduler-radschedulerrecurrenceeditor-does-not-persist-the-selected-month-in-yearview
res_type: kb
---


### Description 
  

In YearView of the RecurrenceEditor, when you postback the page, the dropdowns for selecting the month change their value back to the default value (January). This change may cause you to lose the selected month in the recurrence rule.  
  

### Explanation
  
The selected values of the dropdowns rely on the StartDate property of the RecurrenceEditor. This value is set by the Scheduler when the RecurrenceEditor is integrated in the Advanced form because it is taken from the appointment.  
  

### Solution
  

When using the RecurrenceEditor as a stand-alone control, the `StartDate` property should be set manually on postback:  
  

````ASP.NET
<asp:label text="text" id="Label1" runat="server" />
<telerik:RadSchedulerRecurrenceEditor ID="RadSchedulerRecurrenceEditor1" runat="server"></telerik:RadSchedulerRecurrenceEditor>
<telerik:RadButton ID="RadButton1" runat="server" Text="RadButton" OnClick="RadButton1_Click"></telerik:RadButton>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (RadSchedulerRecurrenceEditor1.RecurrenceRule != null && RadSchedulerRecurrenceEditor1.RecurrenceRule.Pattern != null)
    {
        var rrule = RadSchedulerRecurrenceEditor1.RecurrenceRule;
        RadSchedulerRecurrenceEditor1.StartDate = new DateTime(
                rrule.Range.Start.Year,
                (int)rrule.Pattern.Month,
                1);
    }
}
````


## See Also

* [Recurrence Editor Overview]({%slug scheduler/recurrence-editor/overview%})

