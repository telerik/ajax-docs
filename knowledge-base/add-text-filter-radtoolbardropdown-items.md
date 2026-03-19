---
title: Adding a Text Filter to RadToolBarDropDown Items
description: Implement a text filter for RadToolBarDropDown items to manage large lists effectively.
type: how-to
page_title: How to Add a Text Filter to RadToolBarDropDown Items in UI for ASP.NET AJAX
meta_title: Add Text Filter to RadToolBarDropDown Items
slug: add-text-filter-radtoolbardropdown-items
tags: radtoolbar, toolbar-dropdown, filtering, javascript
res_type: kb
ticketid: 1711811
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td>
ToolBar for UI for ASP.NET AJAX
</td>
</tr>
<tr>
<td> Version </td>
<td> All </td>
</tr>
</tbody>
</table>

## Description

I want to add a text filter to the RadToolBarDropDown control in UI for ASP.NET AJAX. The dropdown contains a large number of items that are difficult to manage. I need a textbox inside the dropdown to filter items based on the text typed.

This knowledge base article also answers the following questions:

- How can I filter RadToolBarDropDown items using a textbox?
- How to create a custom filter for RadToolBarDropDown in ASP.NET AJAX?
- Is there a way to manage large lists in RadToolBarDropDown more effectively?

## Solution

To add a text filter to the RadToolBarDropDown, use JavaScript to customize the dropdown behavior. Inject a textbox inside the dropdown and filter the visible RadToolBarButton items based on user input.

1. Create a JavaScript function to handle the `OnClientDropDownOpened` event.
2. Add a textbox dynamically to the dropdown popup.
3. Use the `onkeyup` event of the textbox to filter dropdown items.

````JavaScript
function onClientDropDownOpened(sender, args) {
    let dropDown = args.get_item();
    let popup = dropDown._animationContainer;

    if (!popup.querySelector('.toolbar-filter-box')) { // Add the filter textbox only if it doesn't exist
        let input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Type to filter...';
        input.className = 'toolbar-filter-box';
        input.style.width = '95%';

        input.onkeyup = function () {
            let filter = input.value.toLowerCase();
            let buttons = popup.querySelectorAll('.rtbItem');
            buttons.forEach(btn => {
                let text = btn.innerText || btn.textContent;
                btn.style.display = text.toLowerCase().includes(filter) ? '' : 'none';
            });
        };

        popup.insertBefore(input, popup.firstChild);
    }
}
````

````ASP.NET
<telerik:RadToolBar RenderMode="Lightweight" ID="RadToolBar1" runat="server" OnClientDropDownOpened="onClientDropDownOpened">
    <Items>
        <telerik:RadToolBarButton runat="server" Text="Reset" />
        <telerik:RadToolBarDropDown runat="server" Text="Add">
            <Buttons>
                <telerik:RadToolBarButton runat="server" Text="Row Above" />
                <telerik:RadToolBarButton runat="server" Text="Row Below" />
                <telerik:RadToolBarButton runat="server" IsSeparator="True" />
                <telerik:RadToolBarButton runat="server" Text="Column Left" />
                <telerik:RadToolBarButton runat="server" Text="Column Right" />
            </Buttons>
        </telerik:RadToolBarDropDown>
        <telerik:RadToolBarSplitButton runat="server" Text="Apply Color" EnableDefaultButton="False">
            <Buttons>
                <telerik:RadToolBarButton runat="server" Text="Black" />
                <telerik:RadToolBarButton runat="server" Text="Red" />
                <telerik:RadToolBarButton runat="server" Text="Green" />
                <telerik:RadToolBarButton runat="server" Text="Blue" />
            </Buttons>
        </telerik:RadToolBarSplitButton>
    </Items>
</telerik:RadToolBar>
````


