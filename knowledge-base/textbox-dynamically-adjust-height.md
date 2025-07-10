---
title: Dynamically Adjusting Height of RadTextBox Based on User Input
description: Learn how to dynamically adjust the height of the RadTextBox control in Telerik UI for ASP.NET AJAX based on the number of lines entered by the user.
type: how-to
page_title: Adjusting RadTextBox Height Dynamically Using Client-Side Events
meta_title: Adjusting RadTextBox Height Dynamically Using Client-Side Events
slug: textbox-dynamically-adjust-height
tags: telerik, radtextbox, onvaluechanged, client-events, resize, asp.net-ajax, multiline
res_type: kb
ticketid: 1692597
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td> Telerik® UI for ASP.NET AJAX RadTextBox </td>
</tr>
<tr>
<td> Version </td>
<td> All</td>
</tr>
</tbody>
</table>

## Description

I want to dynamically adjust the height of a [RadTextBox](https://www.telerik.com/products/aspnet-ajax/documentation/controls/textbox/client-side-programming/events/onvaluechanged#onvaluechanged) control based on the number of lines entered by the user. My goal is to avoid vertical scrollbars while maintaining a fixed width of 400px.

## Solution

To dynamically adjust the height of the RadTextBox control, use the `OnValueChanged` client-side event. Attach JavaScript logic to resize the text area as users type. The following example demonstrates how to achieve this:

### Example

Markup:

````ASP.NET
<telerik:RadTextBox ID="txtComment" runat="server" MaxLength="1024" Rows="5" TextMode="MultiLine" Width="400px">
    <ClientEvents OnValueChanged="onValueChanged" />
</telerik:RadTextBox>
````

````JavaScript
function onValueChanged(sender, args) {
    let textArea = sender.get_element();

    function resize() {
        textArea.style.height = 'auto'; // Reset height
        textArea.style.height = textArea.scrollHeight + 'px'; // Adjust to content height
    }

    textArea.addEventListener('input', resize);
}
````

Steps:

1. Add the `OnValueChanged` client event to the RadTextBox.
2. Implement the `resize()` function in JavaScript. It resets the height of the text area and adjusts it to match its scroll height.
3. Use the `input` event listener to trigger the `resize()` function whenever the user types.

This ensures the height dynamically updates based on the content entered by the user, avoiding vertical scrollbars while keeping the width fixed.

## See Also

- [RadTextBox Client-Side Events Documentation](https://www.telerik.com/products/aspnet-ajax/documentation/controls/textbox/client-side-programming/events/onvaluechanged#onvaluechanged)
- [RadTextBox Overview](https://www.telerik.com/products/aspnet-ajax/documentation/controls/textbox/overview)
