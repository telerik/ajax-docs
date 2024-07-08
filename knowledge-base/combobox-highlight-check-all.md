---
title: Highlighting the Check All Option in RadComboBox on Expand
description: Learn how to automatically highlight the "Check All" checkbox when expanding the RadComboBox.
type: how-to
page_title: How to Highlight "Check All" in RadComboBox Upon Expansion
slug: combobox-highlight-check-all
tags: radcombobox, asp.net ajax, javascript, focus, expand, highlight
res_type: kb
ticketid: 1657041
---

## Environment

| Product | Version |
| --- | --- |
| RadComboBox for ASP.NET AJAX | all |

## Description

When using a RadComboBox with the `EnableCheckAllItemsCheckBox` option set to true, you might want to highlight the "Check All" checkbox automatically when the dropdown is expanded. 

This KB article also answers the following questions:
- How to automatically focus on the "Check All" option in RadComboBox?
- How to visually highlight an item in RadComboBox upon expansion?
- How to use JavaScript to modify RadComboBox items' appearance on certain events?

## Solution

To highlight the "Check All" item when the RadComboBox is expanded, attach a client-side event handler to the `OnClientDropDownOpened` event. In this event handler, use JavaScript to add a custom CSS class or directly modify the style of the "Check All" checkbox container to visually distinguish it. The example below demonstrates how to add a hover effect class to the "Check All" checkbox container.

1. Add the RadComboBox to your ASP.NET page and enable checkboxes and the "Check All" option.

2. Define a JavaScript function that will be triggered on the `OnClientDropDownOpened` event. This function locates the "Check All" checkbox container using a jQuery selector and applies a custom class to it.

3. Optionally, you can directly manipulate styles or attributes to achieve the desired visual effect.

```html
<!DOCTYPE html>
<html>
<head>
    <title>RadComboBox Example</title>
</head>
<body>
    <form id="form1" runat="server">
        <telerik:RadScriptManager ID="RadScriptManager1" runat="server" />
        <telerik:RadComboBox ID="RadComboBox1" CheckBoxes="true" runat="server" OnClientDropDownOpened="onDropDownOpened" EnableCheckAllItemsCheckBox="true">
            <Items>
                <telerik:RadComboBoxItem Text="Item 1" />
                <telerik:RadComboBoxItem Text="Item 2" />
                <telerik:RadComboBoxItem Text="Item 3" />
            </Items>
        </telerik:RadComboBox>
    </form>

    <script type="text/javascript">
        function onDropDownOpened(sender, eventArgs) {
            var checkall = $telerik.$('.rcbCheckAllItemsCheckBox').parent().parent();
            checkall.addClass("rcbCheckAllItemsHovered"); // Highlight the "Check All" item
        }
    </script>
</body>
</html>
```

This approach allows you to provide visual cues to users, making the UI more intuitive and user-friendly.

## See Also

- [RadComboBox Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/overview)
- [RadComboBox Client-Side Events](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/client-side-programming/events)
