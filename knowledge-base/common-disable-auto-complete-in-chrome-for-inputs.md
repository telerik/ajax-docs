---
title: Disable Auto Complete in Chrome for Input elements, RadTextBox and RadComboBox
description: See how to disable the auto fill in Chrome for Input elements, RadTextBox and RadComboBox 
type: how-to
page_title: Disable Auto Complete in Chrome for Input elements, RadTextBox and RadComboBox
slug: common-disable-auto-complete-in-chrome-for-inputs
res_type: kb
---

## Description

If you have a requirement to stop the auto fill feature of the input elements, RadTextBox and RadCombobox, you should be aware that the `[autocomplete](https://www.w3schools.com/tags/att_input_autocomplete.asp)="off"` attribute is currently ignored by many of the modern browsers, including Chrome.

## Solution

In the recent updates of Google Chrome (released after January 2019), the autocomplete attribute values can disable either the autocomplete or the autofill, not both. In such a case, we can just temporarily set .name attribute of the input to a random string, so that neither the autocomplete nor the autofill are triggered, and in the blur event of the input to restore the original name.

The following example allows the same OnClientLoad event handler to be used by both TextBoxes and ComboBoxes:

````ASP.NET
<form id="form1" runat="server" autocomplete="off">
````

````JavaScript
function OnClientLoad(sender, args) {
    disableAutoFill(sender);
}
 
function disableAutoFill(control) {
    function focusHandler(ev) {
        this.originalName = this.name;
        this.name = new Date().toString();
    }
    function blurHandler(ev) {
        this.name = this.originalName;
    }
 
    if (Telerik.Web.UI.RadComboBox && control instanceof Telerik.Web.UI.RadComboBox) {
        $telerik.$(control.get_inputDomElement()).on({
            focus: focusHandler,
            blur: blurHandler
        });
    } else if (Telerik.Web.UI.RadTextBox && control instanceof Telerik.Web.UI.RadTextBox) {
        $telerik.$(control.get_element()).on({
            focus: focusHandler,
            blur: blurHandler
        });
    }
}
````

## SEE ALSO

* [Chrome Browser Ignoring AutoComplete=Off](https://stackoverflow.com/questions/12374442/chrome-browser-ignoring-autocomplete-off)
* [Disabling Chrome Autofill](https://stackoverflow.com/questions/15738259/disabling-chrome-autofill/30976223#30976223) 
* [Chrome 34+, Firefox 38+, IE11+ ignore autocomplete=off](https://makandracards.com/makandra/24933-chrome-34+-firefox-38+-ie11+-ignore-autocomplete-off)

