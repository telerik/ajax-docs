---
title: Enable Keyboard Accessibility for RadDatePicker's MonthYear Picker
description: Learn how to enable full keyboard navigation of the RadDatePicker's month/year selection and date grid.
type: how-to
page_title: Enable Keyboard Accessibility for RadDatePicker's MonthYear Picker
meta_title: Enable Keyboard Accessibility for RadDatePicker's MonthYear Picker
slug: datepicker-enable-keyboard-accessibility-for-month-year-picker
tags: raddatepicker, ui for asp.net ajax, enablekeyboardnavigation, accessibility, keyboard-navigation
res_type: kb
ticketid: 1719792
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>UI for ASP.NET AJAX RadDatePicker</td>
</tr>
<tr>
<td>Version</td>
<td>2026.1.211</td>
</tr>
</tbody>
</table>

## Description

The RadDatePicker control for ASP.NET AJAX does not provide built-in keyboard accessibility for the month and year selector. This limitation prevents users from accessing and operating these elements using only the keyboard. Additionally, a keyboard focus issue occurs after using the calendar navigation buttons when a date is pre-set in the input field. This article explains how to resolve these issues to enable full keyboard navigation.

This knowledge base article also answers the following questions:
- How can I make the month/year selector in RadDatePicker accessible via keyboard navigation?
- How can I fix keyboard focus issues in RadDatePicker after using navigation buttons?
- How can I enable full keyboard support for RadDatePicker in ASP.NET AJAX?

## Solution

To add full keyboard accessibility to the month/year selector and resolve the focus issue, implement the following steps:

1. Use the `OnPopupOpening` client event of the RadDatePicker to hook into its calendar each time the popup opens.
2. Add custom JavaScript logic to enable keyboard navigation for the month/year selector and manage focus properly.

Here is the updated implementation:

````ASP.NET
<telerik:RadDatePicker runat="server" EnableKeyboardNavigation="true">
    <ClientEvents OnPopupOpening="onPopupOpening" />
    <Calendar runat="server" EnableKeyboardNavigation="true" />
</telerik:RadDatePicker>
````

Add the following JavaScript code:

````JavaScript
function onPopupOpening(sender, args) {
    let calendar = sender.get_calendar();
    let calendarElement = calendar.get_element();
    let title = calendarElement.querySelector(".rcTitle");

    if (!title.getAttribute("data-kbd-fix")) {
        title.setAttribute("tabindex", "0");
        title.setAttribute("data-kbd-fix", "1");
        title.setAttribute("role", "button");

        title.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " " || e.keyCode === 13 || e.keyCode === 32) {
                e.preventDefault();
                title.click();
            }
        });
    }

    let titlebarSelector = ".rcFastPrev, .rcPrev, .rcTitle, .rcNext, .rcFastNext";
    let titlebarButtons = Array.prototype.slice.call(calendarElement.querySelectorAll(titlebarSelector));
    let titleIndex = titlebarButtons.indexOf(title);

    if (titleIndex > 2) {
        titlebarButtons.splice(titleIndex, 1);
        titlebarButtons.splice(2, 0, title);
    }

    titlebarButtons.forEach(function (button) {
        if (button.getAttribute("data-kbd-fix-arrows")) {
            return;
        }
        button.setAttribute("data-kbd-fix-arrows", "1");
        button.addEventListener("keydown", function (e) {
            if (e.key !== "ArrowLeft" && e.key !== "ArrowRight" && e.keyCode !== 37 && e.keyCode !== 39) {
                return;
            }

            let currentButtons = Array.prototype.slice.call(calendarElement.querySelectorAll(titlebarSelector));
            let currentTitle = calendarElement.querySelector(".rcTitle");
            let currentTitleIndex = currentButtons.indexOf(currentTitle);

            if (currentTitleIndex > 2) {
                currentButtons.splice(currentTitleIndex, 1);
                currentButtons.splice(2, 0, currentTitle);
            }

            let currentIndex = currentButtons.indexOf(button);
            if (currentIndex === -1) {
                return;
            }

            let isNext = e.key === "ArrowRight" || e.keyCode === 39;
            let nextIndex = isNext ? currentIndex + 1 : currentIndex - 1;

            if (nextIndex >= 0 && nextIndex < currentButtons.length) {
                e.preventDefault();
                currentButtons[nextIndex].focus();
            }
        });
    });
}
````

### Key Points:

- Add `tabindex="0"` and `role="button"` to make the month/year selector focusable and operable with Enter or Space keys.
- Implement ArrowLeft/ArrowRight key support for navigating between all title bar elements (Fast Prev, Prev, Title, Next, Fast Next).
- Ensure the navigation logic recomputes DOM elements dynamically, as the calendar re-renders its DOM after certain interactions.

Test the implementation by focusing the DatePicker, opening the calendar popup, tabbing to the first button, and using the arrow keys to navigate.

## See Also
- [RadDatePicker Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/datepicker/overview)
- [Accessibility in RadControls](https://docs.telerik.com/devtools/aspnet-ajax/accessibility/accessibility-overview)

