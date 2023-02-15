---
title: RequiredFieldValidation of ComboBox client-side with SetFocusOnError
description: Check out how to enable the SetFocusOnError for client-side validation of RadComboBox
type: how-to
page_title: RequiredFieldValidation of ComboBox client-side with SetFocusOnError
slug: combobox-client-validation-with-setfocusonerror
position: 
tags: 
ticketid: 1597266
res_type: kb
---

## Description

Trying to use SetFocusOnError in RequiredFieldValidator and EnableClientScript="false", but it seems like RadComoboBox doesn't work with this.

RadTextBox, on the other hand works fine.

Is there some workaround for this issue?

## Solution

The **SetFocusOnError** works as expected with **RadComboBox** on my side when the Validator is used for server-side validation only - EnableClientScript="false".

In case client-side validation is needed you can set the focus back to the Combo manually by using a **CustomValidator** and some JavaScript code:

````ASPX
<telerik:RadComboBox ID="RadComboBox1" runat="server" RenderMode="Lightweight" AllowCustomText="true" EmptyMessage="test">
    <Items>
        <telerik:RadComboBoxItem Text="Item 1" />
        <telerik:RadComboBoxItem Text="Item 2" />
        <telerik:RadComboBoxItem Text="Item 3" />
        <telerik:RadComboBoxItem Text="Item 4" />
    </Items>
</telerik:RadComboBox>

<asp:CustomValidator ErrorMessage="errormessage" ControlToValidate="RadComboBox1" ValidateEmptyText="true"
    runat="server" SetFocusOnError="true" ClientValidationFunction="comboValidate" />
<script>
    function comboValidate(sender, args) {
        if (!args.Value) {
            args.IsValid = false;
            setTimeout(function () {
                var combo = $find("<%= RadComboBox1.ClientID %>");
                combo.get_inputDomElement().focus();
            })
        } else {
            args.IsValid = true;
        }
    }
</script>

<telerik:RadButton runat="server" ID="RadButton1" Text="Postback" AutoPostBack="true" />
````

>caption What if the **CustomValidator** is not an option, and **RequiredFiledValidator** have to be used?

The reason for the non working **SetFocusOnError** when validating a Combo with RequiredFieldValidator is that validator tries to set the focus on the wrapper div element representing the ComboBox.

Instead, to effectively focus the control, the focus should be set to the input element inside the RadComboBox DOM structure but not to the wrapper itself.

As the current behavior is achieved with client-side code, changing it can only be done with some additional JavaScript code on the page.

Here are a couple of options to consider:

1. Make the wrapper element of the Combo focusable (add tabindex) and handle its focus event to set the focus programmatically to the input element:

 ````ASPX
<telerik:RadComboBox ID="RadComboBox1" runat="server" RenderMode="Lightweight" AllowCustomText="false" EmptyMessage="test" OnClientLoad="clientLoad">
````

 ````JavaScript
function clientLoad(sender, args) {
    var wrapper = sender.get_element();
    $(wrapper).attr("tabindex", "1");
    $(wrapper).focus(function () {
        debugger;
        var inputElement = sender.get_inputDomElement();
        if (inputElement) {
            inputElement.focus();
        }
    })
}
````

2. Override the built-in logic of the RadComboBox by adding the same focusing logic right after the initialization of the Control:

 ````JavaScript
if (Telerik.Web.UI && Telerik.Web.UI.RadComboBox) {

    Telerik.Web.UI.RadComboBox.prototype.originalInitialize = Telerik.Web.UI.RadComboBox.prototype.initialize;

    Telerik.Web.UI.RadComboBox.prototype.initialize = function () {
        this.originalInitialize();

        var that = this;
        var wrapper = that.get_element();
        $(wrapper).attr("tabindex", "1");
        $(wrapper).focus(function () {
            var inputElement = that.get_inputDomElement();
            if (inputElement) {
                inputElement.focus();
            }
        })
    }
}
````

3. Override the native validation script used by the RequiredFieldValidator by adding a condition addressing the RadComboBox case:

 ````JavaScript
function ValidatorSetFocus(val, event) {
    var ctrl;
    if (typeof (val.controlhookup) == "string") {
        var eventCtrl;

        if ((typeof (event) != "undefined") && (event != null)) {
            if ((typeof (event.srcElement) != "undefined") && (event.srcElement != null)) {
                eventCtrl = event.srcElement;
            }
            else {
                eventCtrl = event.target;
            }
        }
        if ((typeof (eventCtrl) != "undefined") && (eventCtrl != null) &&
            (typeof (eventCtrl.id) == "string") &&
            (eventCtrl.id == val.controlhookup)) {
            ctrl = eventCtrl;
        }
    }
    if ((typeof (ctrl) == "undefined") || (ctrl == null)) {
        ctrl = document.getElementById(val.controltovalidate);
    }
    if ((typeof (ctrl) != "undefined") && (ctrl != null) &&
        (ctrl.tagName.toLowerCase() != "table" || (typeof (event) == "undefined") || (event == null)) &&
        ((ctrl.tagName.toLowerCase() != "input") || (ctrl.type.toLowerCase() != "hidden")) &&
        (typeof (ctrl.disabled) == "undefined" || ctrl.disabled == null || ctrl.disabled == false) &&
        (typeof (ctrl.visible) == "undefined" || ctrl.visible == null || ctrl.visible != false) &&
        (IsInVisibleContainer(ctrl))) {
        if ((ctrl.tagName.toLowerCase() == "table" && (typeof (__nonMSDOMBrowser) == "undefined" || __nonMSDOMBrowser)) ||
            (ctrl.tagName.toLowerCase() == "span")) {
            var inputElements = ctrl.getElementsByTagName("input");
            var lastInputElement = inputElements[inputElements.length - 1];
            if (lastInputElement != null) {
                ctrl = lastInputElement;
            }
        }
        if (typeof (ctrl.focus) != "undefined" && ctrl.focus != null) {
            ctrl.focus();
            Page_InvalidControlToBeFocused = ctrl;
        }
    }

    if (ctrl && ctrl.control) {
        var tControl = ctrl.control;
        if (tControl instanceof Telerik.Web.UI.RadComboBox) {
            var inputElement = tControl.get_inputDomElement();
            if (inputElement) {
                inputElement.focus();
            }
        }
    }
````

Each of the three options can be applied by referencing an external JavaScript file to the pages where RadComboBox is used and validated.

