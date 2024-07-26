---
title: Accessing Custom Attributes in RadSignature Client-Side
description: Learn how to access custom attributes of the RadSignature control on the client-side using JavaScript.
type: how-to
page_title: How to Access Custom Attributes of RadSignature on the Client-Side
slug: signature-how-to-access-custom-attributes-radsignature-client-side
tags: radsignature, asp.net ajax, custom attributes, client-side, javascript
res_type: kb
ticketid: 1659286
---

## Environment

| Product | Version |
| --- | --- |
| RadSignature for ASP.NET AJAX | all |

## Description

I added a custom attribute to my RadSignature control. I want to use the custom attribute on the client side. 

This KB article also answers the following questions:
- How can I access a custom attribute of RadSignature in the client-side code?
- What is the correct method to retrieve a custom attribute value from RadSignature using JavaScript?
- Is it possible to use `get_element().getAttribute()` to read custom attributes of RadSignature?

## Solution

To access custom attributes of the RadSignature control on the client side, use the `get_element().getAttribute()` method. This approach allows you to retrieve the value of any custom attribute that you have added to the RadSignature control.

Here is a step-by-step example showing how to set a custom attribute in the RadSignature control and access it using JavaScript:

1. **ASPX Markup**: Define the RadSignature control with a custom attribute. Attach a client-side event handler to the `OnLoad` event.

   ```aspx
   <telerik:RadSignature ID="RadSignature1" runat="server">
       <ClientEvents OnLoad="OnClientLoad" />
   </telerik:RadSignature>
   <script type="text/javascript">
       function OnClientLoad(sender) {
           alert(sender.get_element().getAttribute("CustomAttribute"));
       }
   </script>
   ```

2. **Code-behind (ASPX.CS)**: Set the value of the custom attribute in the code-behind file.

   ```csharp
   RadSignature1.Attributes["CustomAttribute"] = "My Custom Attribute Value";
   ```

3. **Accessing the Custom Attribute**: The custom attribute can now be accessed client-side using the `OnClientLoad` event handler, as shown in the JavaScript part of the ASPX markup. The `get_element().getAttribute()` method retrieves the value of the custom attribute.

By following these steps, you can successfully access custom attributes of the RadSignature control on the client side.

## See Also

- [RadSignature Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/signature/overview)
- [Client-Side Programming Overview in RadControls for ASP.NET AJAX](https://docs.telerik.com/devtools/aspnet-ajax/general-information/understanding-client-side-api)
