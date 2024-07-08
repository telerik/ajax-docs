---
title: Resolving "Function Name is not defined" Error for RadComboBox Event Handlers
description: Learn how to fix the "Function Name is not defined" error when attaching JavaScript functions to RadComboBox event properties in ASP.NET AJAX.
type: troubleshooting
page_title: How to Fix "Function Name is not defined" Console Error in Telerik UI for ASP.NET AJAX
slug: common-function-name-not-defined-error
tags: radcombobox, asp.net ajax, javascript, event handling, troubleshooting
res_type: kb
ticketid: 1657041
---

## Environment

| Product | Telerik UI for ASP.NET AJAX |
| --- | --- |
| Version | all |

## Description

When clicking on the RadComboBox, a console error stating "Function Name is not defined" (e.g., "onDropDownOpened is not defined") appears, despite attaching a JavaScript function to the `OnDropDownOpened` event property.

## Cause

The error typically occurs when the JavaScript function is not recognized at the point when the event is triggered. Potential causes include script loading timing, incorrect script tag placement, issues with the ASP.NET page lifecycle, or typos in the function name.

## Solution

To resolve the "Function Name is not defined" error, follow these troubleshooting steps:

1. **Script Loading Timing:** Ensure that the `<script>` tag containing the `onDropDownOpened` function is loaded before triggering the event.
2. **Script Tag Placement:** Place the `<script>` tag within the correct part of the page, such as within the `<head>` or just before the closing `</body>` tag, to ensure correct loading.
3. **Page Lifecycle:** If using ASP.NET, verify that the script is not within an update panel or subjected to any partial page update mechanism that might prevent proper loading. You can wrap it inside RadCodeBlock tags.
4. **Typo in Function Name:** Double-check the function name in both the event handler and the script to ensure there are no typos.

Here is a revised example with the script tag placement:

````ASPX
<!DOCTYPE html>
<html>
<head>
    <title>RadComboBox Example</title>
    <telerik:RadCodeBlock runat="server" ID="RadCodeBlock">
        <script type="text/javascript">
            function onDropDownOpened(sender, eventArgs) {
                var comboBox = sender;
                var items = comboBox.get_items();
                if (items.get_count() > 0) {
                    var firstItem = items.getItem(0);
                    firstItem.highlight();
                    comboBox.get_inputDomElement().focus();
                }
            }
        </script>
    </telerik:RadCodeBlock>
</head>
<body>
    <form id="form1" runat="server">
        <telerik:RadComboBox ID="RadComboBox1" runat="server" OnClientDropDownOpened="onDropDownOpened">
            <Items>
                <telerik:RadComboBoxItem Text="Item 1" />
                <telerik:RadComboBoxItem Text="Item 2" />
                <telerik:RadComboBoxItem Text="Item 3" />
            </Items>
        </telerik:RadComboBox>
    </form>
</body>
</html>
````

## Additional Troubleshooting Steps

- **Browser Console:** Check for any other errors in the browser console that might provide more context.
- **Network Tab:** In the browser's network tab, verify that the script is being loaded correctly without any 404 errors.
- **Page Source:** View the page source to confirm the script's presence and that it is correctly formed.

If the issue persists after following these steps, it may be necessary to review the script and event handler attachment more closely for any discrepancies or errors.

  
