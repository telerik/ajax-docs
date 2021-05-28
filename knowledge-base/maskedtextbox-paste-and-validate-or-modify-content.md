---
title: Paste and Validate or Modify Content in RadMaskedTextBox
description: Paste and Validate or Modify Content in RadMaskedTextBox. Check it now!
type: how-to
page_title: Paste and Validate or Modify Content
slug: maskedtextbox-paste-and-validate-or-modify-content
res_type: kb
---


## Problem

If the user copies and pastes data from another application into a RadMaskedTextBox, the user input may not match the mask properly and thus, the input may be broken.
For example, copying phone numbers that contain alphabetic characters or spaces will not be pasted well in a masked text box with a phone number mask.

## Description

Browsers may not even allow programmatic access to the clipboard through DOM events (IE), others will throw errors when you attempt to modify the content (FF), or may not actually modify the data without any information (Chrome).

## Solution

You can get the clipboard data for browsers where this is possible, sanitize it, and use the RadMaskedTextbox API to set it in the control.

You can do this by:
 1. using the OnLoad event of the control to hook the paste event to its &lt;input&gt; element
 1. get the clipboard data and sanitize it
 1. set the new string in the textbox via its set\_value() method
 1. cancel the paste event if there have been modifications


Here is a basic example that leaves only numeric characters for a phone mask:

````ASPX
<telerik:RadMaskedTextBox runat="server" ID="RadMaskedTextBox1" Mask="(###)-######" ClientEvents-OnLoad="attachPaste" />
 
<script type="text/javascript">
    function attachPaste(sender, args) {
        $telerik.$(sender.get_element()).on('paste', function (e) {
            //get pasted data. Unsupported in IE at the time of writing - the event may not even be raised
            var clipboardData = e.clipboardData || e.originalEvent.clipboardData || window.clipboardData;
            var pastedData = clipboardData.getData('text');
 
            //modify the pasted string as desired
            pastedData = pastedData.replace(/\D/g, "");
 
            if (pastedData) {
                //Chrome will not throw errors, but will not modify the text
                //in FF attempting to modify pasted values may throw errors at the time of writing
                //clipboardData.setData("text/plain", pastedData); //attempt to change the clipboard
                sender.set_value(pastedData);//set the new value to the masked textbox
                //if we put content in the textbox manually, cancel the paste event
                return false;
            }
        });
    }
</script>
````


 