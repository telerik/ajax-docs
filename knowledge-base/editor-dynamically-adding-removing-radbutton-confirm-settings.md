---
title: Dynamically Adding and Removing RadButton Confirm Settings
description: Learn how to dynamically add and remove RadButton confirm settings in the code-behind.
type: how-to
page_title: Dynamically Adding and Removing RadButton Confirm Settings
slug: editor-dynamically-adding-removing-radbutton-confirm-settings
tags: radbutton, confirm-settings, code-behind, dynamic
res_type: kb
---

## Environment

| Property | Value |
|----------|-------|
| Product  | RadPushButton for ASP.NET AJAX |
| Version  | 2023.3.1010 |

## Description

I want to dynamically add and remove RadButton confirm settings in the code-behind. The scenario is that when a user clicks a button, some application-specific validations are performed. If the validations return false, I want to add a confirmation text to another button. If the validations return true, I need to clear the confirmation settings so that the next button can be clicked without the user having to read the popup and click the OK button.

## Solution

You can achieve this by enabling the confirmation feature of RadButton and setting the `ConfirmSettings.ConfirmText` property. To clear the confirmation settings, set `ConfirmSettings.ConfirmText` to an empty string (`string.Empty`). Here's an example that demonstrates this:

1. Add the following code to your ASPX file:

````ASPX
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
        </telerik:RadScriptManager>
        <telerik:RadButton ID="Button1" runat="server" OnClick="Button1_Click" Text="Button 1"  />
        <telerik:RadButton ID="Button2" runat="server" OnClick="Button2_Click" Text="Button 2"  />
        <telerik:RadWindowManager ID="RadWindowManager1" runat="server"></telerik:RadWindowManager>
    </form>
</body>
</html>
````

2. In your code-behind file (ASPX.CS), add the following code:

````CS
protected void Button1_Click(object sender, EventArgs e)
{
    // Perform your application-specific validations
    bool validationPassed = PerformValidation();

    if (!validationPassed)
    {
        // Validation failed, set the confirmation message for Button2
        Button2.ConfirmSettings.ConfirmText = "Are you sure you want to proceed with errors?";
    }
    else
    {
        // Validation passed, clear the confirmation settings for Button2
        Button2.ConfirmSettings.ConfirmText = string.Empty;
    }
}

protected void Button2_Click(object sender, EventArgs e)
{
    // Your code to execute when Button2 is clicked
}

private bool PerformValidation()
{
    // Your validation logic here
    // Return true if validation passes, false if it fails
    return false; // Change to true or false based on your validation result
}
````

This code dynamically adds and removes the confirm settings for `Button2` based on the validation result.
 
