---
title: Raising SelectedIndexChanged Server-Side for RadComboBox and MultiColumnComboBox
description: This article explains how to raise the SelectedIndexChanged event server-side for RadComboBox and MultiColumnComboBox controls in ASP.NET AJAX. 
type: how-to
page_title: Raising SelectedIndexChanged Server-Side for RadComboBox and MultiColumnComboBox | Telerik UI for ASP.NET AJAX
slug: raising-selectedindexchanged-server-side-radcombobox-multicolumncombobox
tags: radcombobox, multicolumncombobox, selectedindexchanged, server-side, how-to
res_type: kb
---
## Environment
| Product | Version |
| --- | --- |
| RadComboBox for ASP.NET AJAX | all |

## Description
I want to raise the SelectedIndexChanged event server-side for RadComboBox and MultiColumnComboBox controls in my ASP.NET AJAX application. How can I achieve this?

## Solution
The SelectedIndexChanged event and similar events in web controls like RadComboBox and MultiColumnComboBox are designed to respond to user interactions in the browser. They are triggered when a user selects a new item from the drop-down list. However, programmatically changing the selection in server-side code does not automatically trigger the SelectedIndexChanged event.

To programmatically set the selected value of a RadComboBox or MultiColumnComboBox and ensure that the SelectedIndexChanged event is fired server-side, you can use one of the following approaches:

## Manual Event Invocation
1. Set the selected value programmatically.
2. Invoke the SelectedIndexChanged event handler manually after setting the selected value.

Example:

```
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        // Set initial values programmatically
        SetInitialValues();
    }
}

private void SetInitialValues()
{
    // Setting RadComboBox value
    RadComboBox1.SelectedValue = "2";
    
    // Manually trigger the event
    RadComboBox1_SelectedIndexChanged(RadComboBox1, new RadComboBoxSelectedIndexChangedEventArgs(
        RadComboBox1.Text,
        RadComboBox1.Text,
        RadComboBox1.SelectedValue,
        RadComboBox1.SelectedValue
    ));

    // Setting MultiColumnComboBox value
    MultiColumnComboBox1.Value = "B";
    
    // Manually trigger the event
    MultiColumnComboBox1_SelectedIndexChanged(MultiColumnComboBox1, EventArgs.Empty);
}

protected void RadComboBox1_SelectedIndexChanged(object sender, RadComboBoxSelectedIndexChangedEventArgs e)
{
    // Your logic here
}

protected void MultiColumnComboBox1_SelectedIndexChanged(object sender, EventArgs e)
{
    // Your logic here
}
```

## Page Load Logic
1. Set the selected value programmatically.
2. Implement your logic within the Page_Load event, executing it conditionally based on whether it's a postback.

Example:

```
protected void Page_Load(object sender, EventArgs e)
{
    if (IsPostBack)
    {
        // Execute the logic that would otherwise be in the SelectedIndexChanged event handler
    }
}
```

Remember, these workarounds mimic the behavior of the SelectedIndexChanged event and do not constitute an actual event firing as it would from a client-side action. Make sure to test thoroughly to ensure that your application behaves as expected.

## See Also
- [RadComboBox Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/overview)
- [MultiColumnComboBox Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/multicolumncombobox/overview)
 
