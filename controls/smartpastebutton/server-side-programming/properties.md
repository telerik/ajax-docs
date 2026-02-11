---
title: Properties
page_title: SmartPasteButton Server-side Properties
description: "Server-side properties of the WebForms SmartPasteButton component."
slug: smartpastebutton/server-side-programming/properties
tags: smartpastebutton,server-side,properties
published: True
position: 1
---

# Properties

SmartPasteButton-specific properties to configure appearance, form fields, service integration, and client-side events.

## Main Properties

| Name           | Return Type / Enum Link                                                                                     | Description                                                                                      |
| -------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `CancelIcon`   | `string`                                                                                                    | Gets/Sets the icon displayed when cancelling the smart paste operation (default: `x`).           |
| `FormFields`   | [`Telerik.Web.UI.SmartPasteButtonFormFieldsCollection`](#formfields)                                        | Gets the collection of form fields/target controls for smart paste operations.                   |
| `Icon`         | `string`                                                                                                    | Gets/Sets the icon displayed on the button by default (default: `paste-sparkle`).                |
| `Rounded`      | [`Telerik.Web.UI.SmartPasteButtonRounded`]({%slug smartpastebutton/server-side-programming/enums#rounded%}) | Gets/Sets the border radius of the button.                                                       |
| `Service`      | [`Telerik.Web.UI.SmartPasteButtonService`](#service)                                                        | Gets/Sets the service configuration for the LLM integration.                                     |
| `ServiceUrl`   | `string`                                                                                                    | Gets/Sets the URL of the LLM service. This is **required** for the SmartPasteButton to function. |
| `Size`         | [`Telerik.Web.UI.SmartPasteButtonSize`]({%slug smartpastebutton/server-side-programming/enums#size%})       | Gets/Sets the size of the button.                                                                |
| `Text`         | `string`                                                                                                    | Gets/Sets the text displayed on the button (default: empty string).                              |

## FormFields

The `FormFields` collection defines the target controls or form fields that the SmartPasteButton will populate. Each form field is represented by a `SmartPasteButtonFormField` object with the following properties:

| Property        | Type       | Description                                                                                                                                            |
| --------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ControlID`     | `string`   | Gets/Sets the target Control/Element ID to be populated.                                                                                               |
| `Description`   | `string`   | Gets/Sets the description for the form field. Used to supply extra information for LLMs (e.g., data type, format, constraints).                        |
| `AllowedValues` | `string[]` | Gets/Sets the list of allowed values as a string array. Guides the LLM to return constrained values. **Note:** Large lists increase input token count. |

### Example

````ASP.NET
<telerik:RadSmartPasteButton runat="server" ID="RadSmartPasteButton1" ServiceUrl="https://your-llm-service.com/api">
    <FormFields>
        <telerik:SmartPasteButtonFormField ControlID="txtFirstName" Description="Customer's first name" />
        <telerik:SmartPasteButtonFormField ControlID="txtLastName" Description="Customer's last name" />
        <telerik:SmartPasteButtonFormField ControlID="ddlCountry" Description="Country of residence" AllowedValues="USA,Canada,Mexico" />
    </FormFields>
</telerik:RadSmartPasteButton>
````

## Service

The `Service` property configures the LLM service integration for the SmartPasteButton. It exposes the following properties:

| Property  | Type     | Description                                                                             |
| --------- | -------- | --------------------------------------------------------------------------------------- |
| `Url`     | `string` | Gets/Sets the URL of the LLM service. This is **required** for the control to function. |
| `Headers` | `string` | Gets/Sets the headers to be included in the request to the LLM service.                 |

### Example

````ASP.NET
<telerik:RadSmartPasteButton runat="server" ID="RadSmartPasteButton1">
    <Service Url="https://your-llm-service.com/api" Headers="Authorization: Bearer YOUR_TOKEN" />
</telerik:RadSmartPasteButton>
````

## Next Steps

- [Enums]({%slug smartpastebutton/server-side-programming/enums%})
