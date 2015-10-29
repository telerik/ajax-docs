---
title: Keyboard Support
page_title: Keyboard Support | RadCalendar for ASP.NET AJAX Documentation
description: Keyboard Support
slug: calendar/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 5
---

# Keyboard Support


The **RadCalendar** control provides support for **Access Keys** and navigation using the tab and arrow keys:

* **Access Keys** - You can specify a key that lets the end user move focus directly to the **RadCalendar** control. Once focus is on the control, the user can use the keyboard to navigate around the control select a value. The access key is defined using the **AccessKey** property. For example, if you set the **AccessKey** property to "C", focus moves to the **RadCalendar** control when the user presses "**Alt+C**".

    ````ASPNET
<telerik:RadCalendar ID="RadCalendar1" runat="server" MonthLayout="Layout_7columns_x_6rows" AccessKey="C">       
</telerik:RadCalendar>
````

* **Tab key Navigation** - Once focus is on the **RadCalendar** control, the TAB key and SHIFT+TAB key combination move through the parts of the control. The first time the user presses the TAB key, focus moves to the first navigation control in the title bar. Pressing TAB repeatedly moves through the navigation controls in the title bar and then through each day shown in the main calendar area. Pressing SHIFT+TAB moves backward through the same elements. Pressing the ENTER key when focus is on a navigation control causes the view to change. Pressing the ENTER key when focus is on a day in the main calendar area selects the day.


# See Also

 * [Removing RadCalendar from the Tab Sequence]({%slug calendar/how-to/removing-radcalendar-from-the-tab-sequence%})
