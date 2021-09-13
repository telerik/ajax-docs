---
title: Overview
page_title: Overview - RadDateRangePicker
description: Check our Web Forms article about Overview.
slug: daterangepicker/server-side-programming/events/overview
tags: server-side,events,overview
published: True
position: 0
---

{% if site.has_cta_panels == true %}
{% include cta-panel-small.html %}
{% endif %}

# Server-side events Overview

The **RadDateRangePicker** controls expose the following server-side event:

 * [RangeSelectionChanged]({%slug daterangepicker/server-side-programming/events/rangeselectionchanged%}) occurs after a Postback, when the value of the control has been changed.

To achieve AutoPostBack behavior with the **RadDateRangePicker**, you can use the [client-side DateSelected event]({%slug daterangepicker/client-side-programming/events/ondateselected%}) to trigger a postback for submitting the changes to the server-side. Otherwise the **RangeSelectionChanged** event will be triggered after a postback initiated by another postback control (e.g. Submit button):

````JavaScript
function OnDateSelected(sender, args) {
    // trigger a postback when both start and end dates are selected
    if (sender.get_rangeSelectionStartDate() && sender.get_rangeSelectionEndDate()) {
        args.set_shouldPostBack(true);
    }
}
````

See live sample of handling the server event in our [Server-side events demo](https://demos.telerik.com/aspnet-ajax/daterangepicker/server-side-programming/server-side-events/defaultcs.aspx)

# See Also

 * [Client-side events Overview]({%slug datepicker/client-side-programming/events/overview%})
