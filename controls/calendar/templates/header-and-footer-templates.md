---
title: Header and Footer Templates
page_title: RadCalendar Header and Footer Templates | RadCalendar for ASP.NET AJAX Documentation
description: RadCalendar Header and Footer Templates
slug: calendar/functionality/templates/header-and-footer-templates
tags: radcalendar,header,and,footer,templates
published: True
position: 1
---

# Header and Footer Templates



The header and footer areas of a **RadCalendar** control can be customized using templates. The header is the area between the title and the main calendar area, while the footer is the area below the main calendar area.

As with all **RadCalendar** templates, the header and footer templates can contain regular HTML, including text, images, hyperlinks, and so on.
![Customized RadCalendar](images/calendar_overviewstructure_003.png)

To create templates for the header and footer, right click on the **RadCalendar** control and choose **Edit Template | CalendarHeader** or **Edit Template | CalendarFooter**. This brings up the template design surface, where you can drag and drop items from the tool box.

The following code shows a **RadCalendar** definition with header and footer template definitions:

````ASPNET
<telerik:RadCalendar RenderMode="Lightweight" id="RadCalendar1" runat="server">
    <HeaderTemplate>
        <img id="HeaderImage" src="Images/spring_header.gif" alt="Header Image" style="width: 100%;" />
    </HeaderTemplate>
    <FooterTemplate>
        <img id="FooterImage" src="Images/spring_footer.gif" alt="Footer Image" style="width: 100%;" />
    </FooterTemplate>
</telerik:RadCalendar>
````

> These templates are suitable for client-side content like HTML elements - input, button, etc. Using a template container for server controls and server logic is not supported.


# See Also

 * [Template Design Surface]({%slug calendar/design-time/template-design-surface%})
