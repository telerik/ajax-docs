---
title: How to Display ErrorMessage inside RadTextBox
description: How to Display ErrorMessage inside RadTextBox. Check it now!
type: how-to
page_title: How to Display ErrorMessage inside RadTextBox
slug: textbox-how-to-display-errormessage
res_type: kb
---


### HOW TO

The example below explains how you can show an error message directly in the input of a RadTextBox after unsuccessful validation.

### SOLUTION

The code comments in the snippet explain how you can override the built-in validation method of the framework to execute additional logic - in this case, to change the appearance and contents of the textbox. If you want to keep the standard validation messages as well, remove the Style attribute from the validators.

````ASP.NET
<script type="text/javascript">
    //note, requires:
    // <appSettings>
    //     <add key="ValidationSettings:UnobtrusiveValidationMode" value="None" />
    if (ValidatorUpdateDisplay && typeof (ValidatorUpdateDisplayOriginal) === "undefined") {
        ValidatorUpdateDisplayOriginal = ValidatorUpdateDisplay;
        ValidatorUpdateDisplay = function (val) {
            var control = $find(val.controltovalidate);
            if ((!val.isvalid) && control && control.set_invalid) {
                //make it show in error state with empty message
                control.set_invalid(true);
                //optionally, change the empty message to the one from the validator control
                control.set_emptyMessage(val.innerText);
                control.set_displayValue(val.innerText);
                //the next time it gets focus, remove the empty message that will otherwise remain
                control.__shouldClearOnNextFocus = true;
            }
            ValidatorUpdateDisplayOriginal(val);
        };
    }
 
    function ClearAfterValidation(sender, args) {
        if (sender.__shouldClearOnNextFocus) {
            sender.selectAllText();
            sender.__shouldClearOnNextFocus = false;
        }
    }
</script>
<telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBox1" runat="server" EmptyMessage="Enter username" ClientEvents-OnFocus="ClearAfterValidation">
</telerik:RadTextBox>
<telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBox2" runat="server" EmptyMessage="Enter password"  ClientEvents-OnFocus="ClearAfterValidation">
</telerik:RadTextBox>
<asp:Button ID="Button1" runat="server" Text="PostBack" />
<asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" Text="username is required" ControlToValidate="RadTextBox1"
    Style="display: none;"></asp:RequiredFieldValidator>
<asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" Text="password is required" ControlToValidate="RadTextBox2"
    Style="display: none;"></asp:RequiredFieldValidator>
````

### NOTES

This approach relies on overriding methods from the framework and Telerik does not guarantee it can work and will not cause side effects.

Also, the overriden method is part of the "standard" WebForms validation mechanism, so Unobtrusive Validation (the default since .NET 4.5) must be stopped:

````xml
<appSettings>
  <add key="ValidationSettings:UnobtrusiveValidationMode" value="None"/>
````

