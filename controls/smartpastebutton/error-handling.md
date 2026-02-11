---
title: Error Handling
page_title: SmartPasteButton Error Handling
description: "Learn how to implement proper error handling when using the WebForms SmartPasteButton with AI services and form validation."
slug: smartpastebutton/error-handling
tags: smartpastebutton,error-handling,validation
published: True
position: 4
---

# Error Handling

When using the **SmartPasteButton**, there are situations where the clipboard content may not contain sufficient information for all form fields. This guide demonstrates how form validation is triggered when required fields cannot be populated from the extracted data.

## Form Validation Behavior

When the SmartPasteButton processes clipboard content but cannot extract data for required form fields, the standard form validation will trigger to ensure data integrity:

````ASP.NET
<telerik:RadTextBox runat="server" ID="txtFullName" EmptyMessage="Full Name" SmartPasteDescription="Full Name" />
<telerik:RadTextBox runat="server" ID="txtCity" EmptyMessage="City" SmartPasteDescription="City" />
<telerik:RadMaskedTextBox runat="server" ID="txtPhone" Mask="(###) ###-####" SmartPasteDescription="Phone Number" />

<asp:RequiredFieldValidator runat="server" ID="rfvPhone"  ControlToValidate="txtPhone" ErrorMessage="Phone Number is required" Display="Dynamic" ForeColor="Red" />

<telerik:RadSmartPasteButton runat="server" ID="SmartPasteButton1" Text="Smart Paste" ServiceUrl="https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste" />

<telerik:RadButton runat="server" ID="btnSubmit" Text="Submit" />
````

## Validation Behavior

When you paste content like "Ashley Johnson, Portland" into the form above, the SmartPasteButton will:

1. **Extract available data**: Successfully populate the "Full Name" field with "Ashley Johnson" and "City" field with "Portland"
2. **Handle missing data**: The "Phone Number" field cannot be populated because the clipboard content doesn't contain phone information
3. **Trigger validation**: Since the Phone field is marked as required via `RequiredFieldValidator`, the form validation will highlight this field as invalid

## Required Field Validation

The SmartPasteButton respects existing form validation rules. If a required field cannot be populated from the clipboard content:

- The field will remain empty
- Form validation will trigger when the user interacts with the form or attempts to submit
- Visual indicators (red borders, error messages) will appear for unfilled required fields
- Users can then manually complete the missing information

## Validation Configuration

Configure form validation behavior alongside the SmartPasteButton:

````ASP.NET
<telerik:RadTextBox runat="server" ID="txtEmail" EmptyMessage="Email Address" SmartPasteDescription="Email Address" />
<asp:RequiredFieldValidator runat="server" ID="rfvEmail" ControlToValidate="txtEmail" ErrorMessage="Email is required" Display="Dynamic" ForeColor="Red" />
<asp:RegularExpressionValidator runat="server" ID="revEmail" ControlToValidate="txtEmail" ErrorMessage="Invalid email format" ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*" Display="Dynamic" ForeColor="Red" />

<telerik:RadMaskedTextBox runat="server" ID="txtPhone2" Width="250" Mask="(###) ###-####" SmartPasteDescription="Phone Number" />
<asp:RequiredFieldValidator runat="server" ID="rfvPhone2" ControlToValidate="txtPhone2" ErrorMessage="Phone Number is required" Display="Dynamic" ForeColor="Red" />

<telerik:RadSmartPasteButton runat="server" ID="SmartPasteButton2" Icon="clipboard-code" Text="Smart Paste" ServiceUrl="https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste" />
````

## Error Event Handling

The SmartPasteButton provides an `OnError` client-side event to handle errors during the AI service communication:

````ASP.NET
<telerik:RadSmartPasteButton runat="server" ID="SmartPasteButton3" Icon="clipboard-code" Text="Smart Paste" ServiceUrl="https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste">
    <ClientEvents OnError="onSmartPasteError" OnRequestStart="onRequestStart" OnRequestEnd="onRequestEnd" />
</telerik:RadSmartPasteButton>
````

````JavaScript
function onSmartPasteError(sender, args) {
    let error = args.get_error();
    alert(error);
}

function onRequestStart(sender, args) {
    let content = args.get_content().trim();

    if (!content || content === "") {
        args.set_cancel(true);
        alert("Clipboard is empty. Please copy some data first.");
    }
}

function onRequestEnd(sender, args) {
    let fieldValues = args.get_fieldValues();
    console.log("Successfully populated fields:", fieldValues);
}
````

## Testing with Sample Data

You can test the validation behavior with various clipboard content:

**Complete**

```
John Smith
john.smith@email.com
(555) 123-4567
```

**Incomplete**

```
Sarah Wilson
Portland, OR
```

In the incomplete example, the phone field validation will trigger because the required phone number cannot be extracted from the clipboard content.

## Next Steps

- [AI Service Integration]({%slug smartpastebutton/ai-service-integration%})
- [Keyboard Navigation]({%slug smartpastebutton/accessibility/keyboard-navigation%})
- [Client-side Programming]({%slug smartpastebutton/client-side-programming/overview%})
- [Server-side Programming]({%slug smartpastebutton/server-side-programming/overview%})