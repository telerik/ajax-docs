---
title: Form Fields
page_title: SmartPasteButton Form Fields
description: "Learn how to configure form fields for the Telerik WebForms SmartPasteButton to enable AI-powered data extraction and population."
slug: smartpastebutton/form-fields
tags: smartpastebutton,form-fields,ai,data-extraction
published: True
position: 3
---

# Form Fields

The SmartPasteButton uses form field metadata to instruct the AI service on how to extract and map clipboard content to form controls. This article explains how form fields work and how to configure them.

## Automatic Field Detection

The SmartPasteButton automatically detects form fields from Telerik controls that have the `SmartPasteDescription` property set:

```ASP.NET
<telerik:RadTextBox runat="server" ID="txtFullName" EmptyMessage="Full Name" SmartPasteDescription="Full Name" />
<telerik:RadTextBox runat="server" ID="txtCity" EmptyMessage="City" SmartPasteDescription="City" />
<telerik:RadMaskedTextBox runat="server" ID="txtPhone" Mask="(###) ###-####" SmartPasteDescription="Phone Number" />

<telerik:RadSmartPasteButton runat="server" ID="SmartPasteButton1" Text="Smart Paste" ServiceUrl="https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste" />
```

When the SmartPasteButton is clicked, it automatically collects information from all controls with `SmartPasteDescription` and sends it to the AI service.

## FormField Structure

The SmartPasteButton extracts form metadata in the following format:

- **Field** — Points to the identifier of the control (e.g., `txtFullName`)
- **Description** — **Critical for AI accuracy** - The text from the `SmartPasteDescription` property that provides context to the AI service
- **AllowedValues** — Constrained values that the AI Service must choose from (for dropdowns, radio groups)

**Example request sent to AI service:**

```json
{
  "clipboardContent": "John Smith, john@example.com, USA",
  "formFields": [
    {
      "id": "txtEmail",
      "description": "Email Address",
      "type": "string"
    },
    {
      "id": "ddlCountry",
      "description": "Select Country",
      "type": "fixed-choice",
      "allowedValues": ["USA", "Canada", "Mexico"]
    }
  ]
}
```

## Field Types

The SmartPasteButton automatically determines the field type based on the Telerik control:

- **string** — For `RadTextBox`. Expects plain text values
- **number** — For `RadNumericTextBox` and `RadMaskedTextBox`. Expects numeric values
- **boolean** — For `RadCheckBox` and `RadRadioButton`. Expects `true` or `false` values
- **fixed-choice** — For `RadDropDownList` and `RadRadioButtonList`. Expects values from control's items
- **multiple-choice** — For `RadComboBox` (with CheckBoxes) and `RadCheckBoxList`. Expects comma-separated values
- **date** — For `RadDatePicker`. Expects date values
- **datetime** — For `RadDateInput`. Expects date and time values

## Contextual Descriptions

Use detailed descriptions in the `SmartPasteDescription` property to provide validation context and improve AI accuracy:

```ASP.NET
<telerik:RadNumericTextBox runat="server" ID="numAge" MinValue="18" MaxValue="100" SmartPasteDescription="Age in years. Value must be between 18 and 100." />

<telerik:RadDatePicker runat="server" ID="dpDelivery" SmartPasteDescription="Preferred delivery date. Must be a future weekday." />

<telerik:RadTextBox runat="server" ID="txtEmail" SmartPasteDescription="Email address in format user@domain.com" />
```

The more descriptive you are, the better the AI can extract and validate the data.

## Explicit Field Configuration

While automatic detection works for most scenarios, you can provide explicit field configurations using the `FormFields` collection for precise control:

```ASP.NET
<telerik:RadTextBox runat="server" ID="txtFullName" EmptyMessage="Full Name" />
<telerik:RadTextBox runat="server" ID="txtCity" EmptyMessage="City" />
<telerik:RadMaskedTextBox runat="server" ID="txtPhone" Mask="(###) ###-####" />

<telerik:RadSmartPasteButton runat="server" ID="SmartPasteButton1" Text="Smart Paste" ServiceUrl="https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste">
    <FormFields>
        <telerik:SmartPasteButtonFormField ControlID="txtFullName" Description="Full name of the person. Extract first and last name together." />
        <telerik:SmartPasteButtonFormField ControlID="txtCity" Description="City name only, without state or country." />
        <telerik:SmartPasteButtonFormField ControlID="txtPhone" Description="Phone number in format (###) ###-####. Must be exactly 10 digits." />
    </FormFields>
</telerik:RadSmartPasteButton>
```

Use explicit configuration when you need to:

- Provide detailed descriptions for better AI understanding
- Include only specific form fields while excluding others
- Define allowed values for select fields
- Work with controls that don't have `SmartPasteDescription` set

## Supported Telerik AJAX Controls

The SmartPasteButton supports seamless integration with the following Telerik UI for ASP.NET AJAX controls:

| Control            | Type              | Documentation                                                    |
| ------------------ | ----------------- | ---------------------------------------------------------------- |
| RadTextBox         | `string`          | [RadTextBox Overview]({%slug radtextbox/overview%})                 |
| RadNumericTextBox  | `number`          | [RadNumericTextBox Overview]({%slug numerictextbox/overview%})   |
| RadMaskedTextBox   | `number`          | [RadMaskedTextBox Overview]({%slug radmaskedtextbox/overview%})  |
| RadDatePicker      | `date`            | [RadDatePicker Overview]({%slug datepicker/overview%})           |
| RadDateInput       | `datetime`        | [RadDateInput Overview]({%slug raddateinput/overview%})          |
| RadCheckBox        | `boolean`         | [RadCheckBox Overview]({%slug checkbox/overview%})               |
| RadDropDownList    | `fixed-choice`    | [RadDropDownList Overview]({%slug dropdownlist/overview%})       |
| RadRadioButtonList | `fixed-choice`    | [RadRadioButtonList Overview]({%slug radiobuttonlist/overview%}) |
| RadComboBox        | `multiple-choice` | [RadComboBox Overview]({%slug combobox/overview%})               |
| RadCheckBoxList    | `multiple-choice` | [RadCheckBoxList Overview]({%slug checkboxlist/overview%})       |

## Next Steps

- [Error Handling]({%slug smartpastebutton/error-handling%})
- [AI Service Integration]({%slug smartpastebutton/ai-service-integration%})
- [Keyboard Navigation]({%slug smartpastebutton/accessibility/keyboard-navigation%})
- [Client-side Programming]({%slug smartpastebutton/client-side-programming/overview%})
- [Server-side Programming]({%slug smartpastebutton/server-side-programming/overview%})

