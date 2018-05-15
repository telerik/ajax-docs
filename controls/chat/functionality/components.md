---
title: Custom Components 
page_title: Custom Components | RadChat for ASP.NET AJAX Documentation
description: Custom Components 
slug: chat/functionality/components
tags: custom,components
published: True
position: 3
---

# Custom Components


The **RadChat** control supports the implementation of custom components which allow you to use JavaScript to render any content.

The following example demonstrates how to place a [Kendo UI Calendar](https://docs.telerik.com/kendo-ui/controls/scheduling/calendar/overview) in a custom RadChat component.

>caption **Figure 1**: A Chat renders a Kendo UI Calendar to facilitate date choosing.

![chat with custom components](images/custom-components.png)

````HTML
 <%-- load Kendo UI styles and scripts --%>
<link rel="stylesheet" href="~/styles/kendo.common.min.css" />
<link rel="stylesheet" href="~/styles/kendo.default.min.css" />
<script src="~/scripts/kendo.all.min.js"></script>
````

````ASPX
<telerik:RadChat runat="server" ID="RadChat1">
</telerik:RadChat>
 ````

````JavaScript
var CalendarComponent = kendo.chat.Component.extend({
    init: function (options, view) {
        kendo.chat.Component.fn.init.call(this, options, view);

        // Create a <div> from which the Calendar will be initialized
        var calendarElement = $('<div>');

        // Initialize the Calendar widget passing the provided value
        calendarElement.kendoCalendar({
            value: options.value,
            // Implement the logic to be executed
            // when the user selects a date
            change: function (e) {
                var chat = $telerik.$(this.element).closest(".RadChat")[0].control;
                chat.postMessage('You have selected ' + kendo.toString(e.sender.value(), 'D') + '!');

                var element = e.sender.element.closest('.t-card-container');

                setTimeout(function () {
                    e.sender.destroy();
                    element.remove();
                });
            }
        });

        // Place the calendar within the Chat Card
        var bodyElement = $('<div>').addClass("t-card-body").append(calendarElement);
        this.element.addClass("t-card").append(bodyElement);
    }
});

kendo.chat.registerComponent("CalendarComponent", CalendarComponent);
````

````JavaScript
function addCustomComponent() {
    var chat = $find("<%= RadChat2.ClientID %>");

    chat.postMessage("Hello!");
    chat.postMessage("Please, select a date from the Calendar.");

    chat.renderAttachments({
        attachments: [{
            contentType: "CalendarComponent",
            content: {
                value: new Date()
            }
        }]
    }, chat.get_user());
}
````


# See Also

 * [RadChat Structure]({%slug chat/structure%})

 * [RadChat Server-Side Programming]({%slug diagram/server-side-programming%})

 * [RadChat Client-Side Programming]({%slug chat/client-side-programming/overview%})

 * [RadChat Online Demos](http://demos.telerik.com/aspnet-ajax/chat/overview/defaultcs.aspx)

 