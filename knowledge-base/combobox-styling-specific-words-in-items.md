---
title: Styling Specific Words in RadComboBox Items
description: Learn how to apply bold or italic styling to specific words within the items of a RadComboBox for ASP.NET AJAX.
type: how-to
page_title: Applying Custom Styling to Parts of RadComboBox Items
slug: combobox-styling-specific-words-in-items
tags: radcombobox, asp.net ajax, itemtemplate, styling, bold, italic
res_type: kb
ticketid: 1668235
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadComboBox for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description
I am binding items in the code behind in a RadComboBox and using RadSkinManager to set the skin to Bootstrap. The items are rendering fine, but I want to style specific words within an item description to be italic or bold. Using `<i>` or `<b>` tags directly in the item text shows the tags instead of applying the styling.

This KB article also answers the following questions:
- How to apply bold styling to part of a RadComboBox item text?
- How to italicize a portion of the text in RadComboBox items?
- How to use templates to customize the appearance of RadComboBox items?

## Solution
To style specific parts of the text in a RadComboBox item, use the `ItemTemplate` feature. This approach allows you to define a custom template for the items, where HTML tags can be used to apply the desired styling.

Here is an example of how to achieve this:

Define the `RadComboBox` with an `ItemTemplate` on your ASPX page:

````ASP.NET
<telerik:RadComboBox ID="RadComboBox1" runat="server" RenderMode="Lightweight" Width="400px" EnableLoadOnDemand="true"
    OnItemsRequested="RadComboBox1_ItemsRequested" OnClientDropDownClosing="styleItems" OnClientBlur="styleItems" HighlightTemplatedItems="true">
    <ItemTemplate>
        <%# Container.Text %>
    </ItemTemplate>
</telerik:RadComboBox>
````

In your code-behind, add items with styled text to the RadComboBox during the `ItemsRequested` event:

````C#
protected void RadComboBox1_ItemsRequested(object sender, RadComboBoxItemsRequestedEventArgs e)
{
    RadComboBox combo = sender as RadComboBox;

    RadComboBoxItem item = new RadComboBoxItem
    {
        Text = "My <b>bold</b> item",
        Value = "1"
    };
    combo.Items.Add(item);

    item = new RadComboBoxItem
    {
        Text = "My <i>italic</i> item",
        Value = "2"
    };
    combo.Items.Add(item);

    combo.DataBind();
}
````

Use JavaScript to ensure the styled text remains when an item is selected:

````JavaScript
function styleItems(sender, args) {
    let inputElement = sender.get_inputDomElement();
    let escapedValue = removeHtmlTags(inputElement?.value);

    setTimeout(() => {
        inputElement.value = escapedValue;
    });
}

function removeHtmlTags(input) {
    return input.replace(/<[^>]*>/g, "");
}
````

This solution allows you to display RadComboBox items with specific words styled in bold or italic. However, once an item is selected, the styling will be removed in the input element due to HTML restrictions. To maintain styling after selection, consider using CSS or other styling methods that do not rely on HTML tags within the input element itself.

## See Also
- [RadComboBox Templates Demo](https://demos.telerik.com/aspnet-ajax/dropdownlist/examples/functionality/templates/defaultcs.aspx)
- [Client-Side Templates Demo](https://demos.telerik.com/aspnet-ajax/dropdownlist/examples/functionality/clienttemplates/defaultcs.aspx)
- [RadComboBox Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/overview)
