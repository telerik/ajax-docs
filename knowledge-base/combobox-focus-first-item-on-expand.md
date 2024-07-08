---
title: Focusing on the First Element in RadComboBox on Expand
description: Learn how to set focus to the first item of a RadComboBox when it expands using client-side scripting.
type: how-to
page_title: How to Focus the First Item in RadComboBox on Expand
slug: combobox-focus-first-item-on-expand
tags: radcombobox, asp.net ajax, focus, expand, client-side, onclientdropdownopened
res_type: kb
ticketid: 1657041
---

## Environment

| Product | Version |
| --- | --- |
| RadComboBox for ASP.NET AJAX | all |

## Description

When expanding a RadComboBox, I want the focus to automatically move to the first item in the dropdown list. 

This KB article also answers the following questions:
- How can I automatically highlight the first item in a RadComboBox when it is expanded?
- What client-side event allows me to set focus to the first item in a RadComboBox?
- How to improve user experience by focusing on the first item in RadComboBox dropdown?

## Solution

To focus on the first item of a [RadComboBox](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/client-side-programming/events/onclientdropdownopened) when it is expanded, leverage the `OnClientDropDownOpened` event. In this event, programmatically set the focus and highlight the first item using JavaScript. Follow the steps below:

1. Define the RadComboBox in your ASP.NET page with the `OnClientDropDownOpened` event, pointing to a JavaScript function.

    ```ASPX
    <telerik:RadComboBox ID="RadComboBox1" runat="server" OnClientDropDownOpened="onDropDownOpened">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
        </Items>
    </telerik:RadComboBox>
    ```

2. Implement the JavaScript function referenced in the `OnClientDropDownOpened` event. This function should:
    - Retrieve the RadComboBox instance.
    - Check if there are any items in the RadComboBox.
    - Highlight the first item and set focus to the RadComboBox input element.

    ```JavaScript
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
    ```

This code ensures that whenever the RadComboBox dropdown is expanded, the focus will be on the first item, enhancing the user experience by providing a smoother interaction.

## See Also

- [RadComboBox Client-Side Programming](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/client-side-programming/overview)
- [OnClientDropDownOpened Event](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/client-side-programming/events/onclientdropdownopened)
