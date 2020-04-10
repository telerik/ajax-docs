---
title: Confirm selection of RadComboBox
description: Add confirmation dialog on SelectedIndexChanged - RadComboBox
type: how-to
page_title: Confirm selection of RadComboBox | Telerik UI for ASP.NET AJAX
slug: confirm-selection-of-radcombobox
ticketid: 1461060
res_type: kb
---

## Description

How to use a RadConfirm Dialog to prompt the user to confirm before proceeding with a change in a RadCombobox

## Solution

Confirmation of RadComboBox selection change can be done in the ClientSelectedIndexChanging event handler. The event should be canceled so that the following confirmation logic can be executed (calling the radconfirm() method). To finalize the process you need to manualy set the properties of the RadComboBox and trigger the SelectedIndexChanged event.


````JavaScript
function ClientSelectedIndexChanging(sender, args) {
    args.set_cancel(true);

    var domEvent = args.get_domEvent();
    var item = args.get_item();

    radconfirm("Are you sure you want to postback?", function (arg) {
        theCallback(arg, item, domEvent)
    }, 330, 180, null, "Confirm");

}

function theCallback(selection, item, domEvent) {
    if (selection) {
        var combo = item.get_parent();

        var text = combo.get_text();
        var lastSeparatorIndex = combo._getLastSeparatorIndex(text);

        var textToSet = text.substring(0, lastSeparatorIndex + 1) + item.get_text();

        combo.set_text(textToSet);
        combo.set_originalText(textToSet);
        combo.set_value(item.get_value());

        combo.set_selectedItem(item);
        combo.set_selectedIndex(item.get_index());

        item.set_selected(true);
        item.highlight();

        combo.raise_selectedIndexChanged(null, domEvent);

        var command = {
            Command: "Select",
            Index: item.get_index()
        };

        combo.postback(command);
    }
}
````

  
