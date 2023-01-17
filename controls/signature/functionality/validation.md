---
title: Validation
page_title: Validation - RadSignature
description: Check our Web Forms article about how to validate a RadSignature.
slug: signature/functionality/items
published: True
position: 3
---

# Validation

The Telerik UI ASP.NET AJAX RadSignature allows you to integrate it inside a form and validate the Signature before the form is submitted.

The content of RadSignature control can be conveniently validated with a asp:CustomValidator control.

>note Initially empty RadSignature has no value -> signatureObject.get_value() returns *undefined*. When the control is focused it gets a default value representing the blank background of the signature pad.

````ASPX
<telerik:RadSignature runat="server" ID="RadSignature1" Width="170px" Height="250">
    <ClientEvents OnLoad="signatureLoad" />
</telerik:RadSignature>

<asp:CustomValidator runat="server" ErrorMessage="*Signature is required" ForeColor="Red" ClientValidationFunction="validateSignature" EnableClientScript="true" />

<telerik:RadButton runat="server" ID="RadButton1" Text="Submit" Primary="true" AutoPostBack="true" />
````

````JavaScript
var signature;
var focusedSignatureDefaultContent;

function signatureLoad(sender, args) {
    signature = sender;
    var innerElement = $telerik.$(signature.get_element()).find('.k-signature-canvas')[0];
    $(innerElement).focus(function () {
        if (!signature.get_value()) {
            setTimeout(function () {
                if (signature.get_value()) {
                    focusedSignatureDefaultContent = signature.get_value();
                }
            },100)
        }
    })
}

function validateSignature(source, args) {
    signature = $telerik.findControl(document, "RadSignature1");
    if (signature.get_value() && signature.get_value() !== focusedSignatureDefaultContent) {
        args.IsValid = true;
    } else {
        args.IsValid = false;
        return;
    }
}
````


Test the Form Integration example in our live demo [Signature Form Integration](https://demos.telerik.com/aspnet-ajax/signature/formintegration/defaultcs.aspx).

# See Also

 * [Signature Form Integration](https://demos.telerik.com/aspnet-ajax/signature/formintegration/defaultcs.aspx)


