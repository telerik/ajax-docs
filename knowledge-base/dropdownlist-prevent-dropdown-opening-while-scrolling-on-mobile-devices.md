---
title: Preventing RadDropDownList from Opening on Scroll in Mobile Devices
description: This article demonstrates how to prevent the RadDropDownList from unintentionally opening when scrolling on a page on mobile devices.
type: how-to
page_title: Prevent DropDown From Opening while Scrolling on Mobile Devices
slug: dropdownlist-prevent-dropdown-opening-while-scrolling-on-mobile-devices
tags: javascript, touch events, mobile, scroll, raddropdownlist, asp.net ajax
res_type: kb
ticketid: 1672206
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadDropDownList for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

When interacting with a web page on an Android mobile device, scrolling over a RadDropDownList unintentionally opens it. This behavior contrasts with that of RadComboBox, which does not exhibit the same issue. The goal is to modify the RadDropDownList such that it only opens upon an explicit tap, not during scrolling.

This knowledge-base article also answers the following questions:

- How can I stop RadDropDownList from opening when scrolling on mobile?
- What JavaScript can prevent RadDropDownList from triggering on touch scroll?
- Is there a way to make RadDropDownList behave like RadComboBox on mobile devices?

## Solution

To prevent the RadDropDownList from opening during a scroll on mobile devices, implement custom JavaScript to handle touch events, specifically detecting scroll gestures and inhibiting the dropdown from opening during such gestures.

### Custom JavaScript

Incorporate the following script to manage touch events and prevent the dropdown from opening while scrolling:

````JavaScript
let isScrolling = false;

document.addEventListener('DOMContentLoaded', function () {
    let dropdowns = document.querySelectorAll('.RadDropDownList');

    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('touchstart', function (e) {
            isScrolling = false;
        });

        dropdown.addEventListener('touchmove', function (e) {
            isScrolling = true;
        });
    });
});

function onClientDropDownOpening(sender, args) {
    if (isScrolling) {
        args.set_cancel(true);
    }
}
````

Ensure this script is included on your page, following the RadScriptManager to ensure it loads after the necessary Telerik UI scripts.

### Explanation

- **Touch Events**: The script listens for `touchstart` and `touchmove` events on RadDropDownList elements.
- **Scroll Detection**: It toggles a flag (`isScrolling`) upon detecting a touch movement (`touchmove`).
- **DropDownOpening**: It leverages the `onClientDropDownOpening` event, canceling it if scrolling is detected (`isScrolling` is true).

### Additional Considerations

- **Testing**: Verify the solution across different mobile devices and browsers for comprehensive compatibility.
- **Performance**: Pay attention to performance implications, especially with multiple dropdowns on your page.

Implementing this solution aligns the behavior of the RadDropDownList with the RadComboBox, ensuring a seamless and user-friendly experience on mobile devices.

## See Also

- [Mobile Browser Support in Telerik UI for ASP.NET AJAX](https://www.telerik.com/forums/mobile-browser)
- [RadDropDownList Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/dropdownlist/dropdownlist-vs-radcombobox)
- [Handling Touch Events in JavaScript](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
