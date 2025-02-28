---
title: Enabling Keyboard Accessibility for RadHtmlChart Series
description: Learn how to make RadHtmlChart series focusable and clickable via the Enter key for keyboard navigation and accessibility.
type: how-to
page_title: Making RadHtmlChart Bar Series Accessible with Keyboard
slug: htmlchart-keyboard-accessibility-for-series-items
tags: radhtmlchart, accessibility, keyboard, focus, click, asp.net ajax
res_type: kb
ticketid: 1680317
---

## Description

In web development, ensuring accessibility for all users, including those relying on keyboard navigation, is crucial. This knowledge base article provides a guide on making the series in a RadHtmlChart focusable and clickable via the Enter key. This functionality is essential for implementing drill-down features accessible through keyboard navigation, in line with WCAG 2.1 guidelines.

This knowledge base article also answers the following questions:
- How can I make the RadHtmlChart series focusable using keyboard navigation?
- How do I enable clicking on RadHtmlChart series with the Enter key for drill-down functionality?
- What are the steps to achieve keyboard accessibility for RadHtmlChart in ASP.NET AJAX applications?

## Solution

To enable keyboard navigation and accessibility for the RadHtmlChart series, follow these steps:

1. Ensure each bar in the RadHtmlChart is focusable by setting its `tabindex` to `"0"`.
2. Add a keydown event listener to each focusable bar.
3. In the event listener, check if the Enter key is pressed. If so, manually trigger the desired click action.

### Updated JavaScript Code

````JavaScript
function onChartLoad(sender, args) {
    setTimeout(function () {
        var chart = $find("<%= AssetRadChart.ClientID %>");
        if (chart) {
            var kendoChart = chart.get_kendoWidget ? chart.get_kendoWidget() : null;
            if (kendoChart) {
                var bars = kendoChart.element.find("svg path[fill]:not([fill='none'])");
                if (bars.length > 0) {
                    bars.attr("tabindex", "0"); // Make bars focusable
                    bars.first().focus();

                    // Add keydown event listener to make bars clickable via Enter key
                    bars.on('keydown', function (e) {
                        if (e.key === 'Enter') {
                            var seriesIndex = $(this).index();
                            var dataItem = kendoChart.dataSource.view()[seriesIndex];
                            var sender = {
                                series: { field: kendoChart.options.series[seriesIndex].field },
                                dataItem: dataItem
                            };
                            OnClientSeriesClicked(sender);
                        }
                    });
                }
            }
        }
    }, 1000);
}
````

### Explanation

- **Tabindex:** By setting `tabindex="0"`, the SVG path elements become focusable, allowing for navigation through chart bars using the Tab key.
- **Keydown Event:** The keydown event listener on each bar checks for the Enter key press (`e.key === 'Enter'`).
- **Simulate Click:** Upon detecting the Enter key press, the code constructs a `sender` object, mimicking the one during a mouse click, and invokes the `OnClientSeriesClicked` function.

Implementing this solution will make the RadHtmlChart series not only focusable but also clickable via the Enter key, enhancing accessibility in compliance with WCAG 2.1 guidelines.

## See Also

- [RadHtmlChart Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/overview)
- [Keyboard Accessibility in Web Applications](https://www.w3.org/WAI/standards-guidelines/wcag/)
