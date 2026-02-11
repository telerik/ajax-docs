---
title: AI Service Integration
page_title: SmartPasteButton AI Service Integration
description: "Learn how to integrate AI services with the Telerik WebForms SmartPasteButton to process clipboard content and extract structured data."
slug: smartpastebutton/ai-service-integration
tags: smartpastebutton,ai,service,integration
published: True
position: 5
---

# AI Service Integration

The SmartPasteButton integrates with AI services to process clipboard content and extract structured data for form population. This article demonstrates how to configure and implement AI service integration.

## Service Configuration

Configure the AI service endpoint using the `ServiceUrl` property.

````ASP.NET
<telerik:RadTextBox runat="server" ID="txtFirstName" EmptyMessage="First Name" SmartPasteDescription="First Name" />
<telerik:RadTextBox runat="server" ID="txtLastName" EmptyMessage="Last Name" SmartPasteDescription="Last Name" />
<telerik:RadTextBox runat="server" ID="txtEmail" EmptyMessage="Email" SmartPasteDescription="Email Address" />
<telerik:RadMaskedTextBox runat="server" ID="txtPhone" Mask="(###) ###-####" SmartPasteDescription="Phone Number" />

<telerik:RadSmartPasteButton runat="server" ID="SmartPasteButton1" Text="Smart Paste" ServiceUrl="https://your-ai-service.com/api/smartpaste" />
````

## How It Works

The SmartPasteButton automatically collects form field information from controls that have the `SmartPasteDescription` property set:

1. **User clicks the SmartPasteButton** - The control reads the clipboard content
2. **Field information is gathered** - All Telerik controls with `SmartPasteDescription` are identified
3. **Request is sent** - Clipboard content and field descriptions are sent to the AI service
4. **AI processes the data** - The service extracts relevant information from the clipboard
5. **Fields are populated** - The control automatically fills in the form fields with the extracted data

## Request Format

The SmartPasteButton sends a POST request with the following structure:

````JSON
{
    "clipboardContent": "John Smith, Software Engineer at Acme Corp, john.smith@acme.com, (555) 123-4567",
    "formFields": [{
        "id": "txtFirstName",
        "description": "First Name",
        "type": "string"
	}, {
        "id": "txtLastName",
        "description": "Last Name",
        "type": "string"
    }, {
        "id": "txtEmail",
        "description": "Email Address",
        "type": "string"
    }, {
        "id": "txtPhone",
        "description": "Phone Number",
        "type": "string"
    }]
}
````

The `formFields` array is automatically built from all controls on the page that have the `SmartPasteDescription` property set.

## Response Format

The AI service should return a JSON response mapping field IDs to their extracted values:

````JSON
{
    "txtFirstName": "John",
    "txtLastName": "Smith",
    "txtEmail": "john.smith@acme.com",
    "txtPhone": "(555) 123-4567"
}
````

The SmartPasteButton will automatically populate the corresponding controls with these values.

## Using FormFields Collection

Alternatively, you can explicitly define form fields using the `FormFields` collection:

````ASP.NET
<telerik:RadTextBox runat="server" ID="txtFirstName" EmptyMessage="First Name" />
<telerik:RadTextBox runat="server" ID="txtLastName" EmptyMessage="Last Name" />
<telerik:RadTextBox runat="server" ID="txtEmail" EmptyMessage="Email" />

<telerik:RadSmartPasteButton runat="server" ID="SmartPasteButton2" Text="Smart Paste" ServiceUrl="https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste">
    <FormFields>
        <telerik:SmartPasteButtonFormField ControlID="txtFirstName" Description="Person's first name" />
        <telerik:SmartPasteButtonFormField ControlID="txtLastName" Description="Person's last name" />
        <telerik:SmartPasteButtonFormField ControlID="txtEmail" Description="Email address" AllowedValues="john@example.com,jane@example.com" />
    </FormFields>
</telerik:RadSmartPasteButton>
````

This approach gives you more control over field descriptions and allows you to specify `AllowedValues` for constrained fields.

## Implementing Your Own AI Service

You can implement your own AI service using .NET Core and the `Telerik.AI.SmartComponents.Extensions` library. This library simplifies the integration with various AI providers (OpenAI, Azure OpenAI, etc.).

### Step 1: Create a .NET Core Web API Project

Create a new ASP.NET Core Web API project:

````bash
dotnet new webapi -n SmartPasteService
cd SmartPasteService
````

### Step 2: Install Required Packages

Install the Telerik AI Smart Components package:

````bash
dotnet add package Telerik.AI.SmartComponents.Extensions
dotnet add package Microsoft.Extensions.AI.OpenAI
````



### Step 3: Create the SmartPaste Controller

Create `Controllers/SmartPasteController.cs`:

````C#
using Microsoft.Extensions.AI;
using Microsoft.AspNetCore.Mvc;
using Telerik.AI.SmartComponents.Extensions;

[ApiController]
[Route("api/[controller]")]
public class SmartPasteController : ControllerBase
{
    private readonly IChatClient _chatClient;

    public SmartPasteController(IChatClient chatClient)
    {
        _chatClient = chatClient;
    }

    [HttpPost]
    public async Task<IActionResult> ProcessSmartPaste([FromBody] SmartPasteRequest request)
    {
        try
        {
            var chatMessages = request.GetChatMessages();
            var response = await _chatClient.CompleteAsync(chatMessages);
            var smartPasteResponse = response.ExtractSmartPasteResponse();
            
            return Ok(smartPasteResponse.FieldValues);
        }
        catch (Exception ex)
        {
            return BadRequest(new { error = ex.Message });
        }
    }
}
````

### Step 4: Configure SmartPasteButton to Use Your Service

Update your WebForms application to use your custom service:

````ASP.NET
<telerik:RadSmartPasteButton runat="server" ID="SmartPasteButton1" Text="Smart Paste" ServiceUrl="https://your-service-url/api/smartpaste" />
````

## Error Handling

Handle service errors using the `OnError` client event:

````ASP.NET
<telerik:RadSmartPasteButton runat="server" ID="SmartPasteButton1" Text="Smart Paste" ServiceUrl="https://your-service-url/api/smartpaste">
    <ClientEvents OnError="onSmartPasteError" />
</telerik:RadSmartPasteButton>
````

````JavaScript
function onSmartPasteError(sender, args) {
    let error = args.get_error();

    console.error("AI service error:", error);
}
````

The AI service will intelligently extract the relevant information and map it to the appropriate form fields based on the field descriptions.

## Next Steps

- [Keyboard Navigation]({%slug smartpastebutton/accessibility/keyboard-navigation%})
- [Client-side Programming]({%slug smartpastebutton/client-side-programming/overview%})
- [Server-side Programming]({%slug smartpastebutton/server-side-programming/overview%})