---
title: Customize Attribute Labels
description: Learn how to change the labels of custom attributes in the appointment window of RadScheduler for ASP.NET AJAX to display text different from the attribute names.
type: how-to
page_title: Customize Attribute Labels
slug: scheduler-customize-attribute-labels
tags: radsheduler, asp.net ajax, custom attributes, labels, client-side, server-side
res_type: kb
ticketid: 1669411
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadScheduler for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

After updating to a newer version of Telerik UI for ASP.NET AJAX, the custom attributes in the RadScheduler appointment window display their property names instead of the custom labels. Previously, it was possible to override the labels shown in the appointment window by modifying the control's label in the `OnFormCreated` event. In the newer version, this approach does not seem to work. How can the label for a custom attribute, such as `BookedBy`, be changed to display as "Skapad av:" in the appointment window?

This KB article also answers the following questions:

- How do I change the display label for custom attributes in RadScheduler appointments?
- What is the process to customize attribute labels in RadScheduler using ASP.NET AJAX?
- Can I modify the text of a custom attribute label in the RadScheduler appointment window?

## Solution

Due to changes in newer versions, it might be necessary to update the IDs used in the `FindControl` method. To modify the label of a custom attribute in the appointment window, follow these steps:

**Server-side Customization**: Use the `FindControl` method in the `RadScheduler1_FormCreated` event to get the TextBox associated with the custom attribute. However, directly accessing the label from the server side is not possible anymore.

````C#
protected void RadScheduler1_FormCreated(object sender, SchedulerFormCreatedEventArgs e)
{
    if (e.Container.Mode == SchedulerFormMode.Edit || e.Container.Mode == SchedulerFormMode.AdvancedEdit)
    {
        RadTextBox textBox = (RadTextBox)e.Container.FindControl("AttrMyAttribute1"); // Adjust the ID accordingly
    }
}
````

**Client-side Customization for Label Text**: To change the label text, utilize the `OnClientFormCreated` event. This approach allows you to access and modify the label text from the client side.

Include the client-side event in your RadScheduler definition:

````ASP.NET
<telerik:RadScheduler ID="RadScheduler1" runat="server" CustomAttributeNames="MyAttribute1, MyAttribute2"
    OnClientFormCreated="onClientFormCreated">
</telerik:RadScheduler>
````

Then, implement the JavaScript function to modify the label:

````JavaScript
function onClientFormCreated(sender, args) {
    let formElement = args.get_formElement();
    let label = Array.from(formElement.querySelectorAll("label"))
        .find(label => label.textContent.trim() === "MyAttribute1");

    label?.textContent = "ew text"
}
````

This solution allows you to customize the label for custom attributes in the RadScheduler appointment window, ensuring that the labels display the desired text instead of the attribute names.

## See Also

- [RadScheduler Overview](https://www.telerik.com/products/aspnet-ajax/scheduler.aspx)
- [Custom Attributes](https://www.telerik.com/products/aspnet-ajax/documentation/controls/scheduler/design-time/custom-resources-and-attributes#custom-attributes)
- [OnClientFormCreated Event](https://www.telerik.com/products/aspnet-ajax/documentation/controls/scheduler/client-side-programming/events/onclientformcreated#onclientformcreated)
