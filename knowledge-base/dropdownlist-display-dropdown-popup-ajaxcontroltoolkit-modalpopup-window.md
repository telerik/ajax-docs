---
title: How to Display RadDropDownList Dropdown Popup in AjaxControlToolkit ModalPopup Window
description: Learn how to increase the z-index of the RadDropDownList dropdown popup to display it correctly within an AjaxControlToolkit modal popup window.
type: how-to
page_title: Display RadDropDownList Dropdown Popup in AjaxControlToolkit ModalPopup Window
slug: dropdownlist-display-dropdown-popup-ajaxcontroltoolkit-modalpopup-window
tags: raddropdownlist, ajaxcontroltoolkit, modalpopup, dropdown-popup, z-index
res_type: kb
---

## Environment

| Property | Value |
| --- | --- |
| Product | RadDropDownList for ASP.NET AJAX |
| Version | all |

## Description

When using an AjaxControlToolkit modalpopup window, the RadDropDownList dropdown popup may not be displayed correctly.

## Solution

To address this issue and ensure that the RadDropDownList dropdown popup is displayed correctly within the AjaxControlToolkit modalpopup window, you can follow these steps:

1. Add the following JavaScript code to your page:

```javascript
<script>
    function popupOpening(sender, args) {
        var popup = sender.get_dropDownElement();
        setTimeout(function () {
            popup.style.setProperty('z-index', '103000', 'important');
        });
    }
</script>
```

2. Modify your RadDropDownList control by adding the `OnClientDropDownOpening` attribute and set it to the `popupOpening` JavaScript function:

```html
<telerik:RadDropDownList ID="ddlMatch" runat="server" OnClientDropDownOpening="popupOpening">
    <Items>
        <telerik:DropDownListItem Value="1" Text="Item1" />
        <telerik:DropDownListItem Value="2" Text="Item2" />
        <telerik:DropDownListItem Value="3" Text="Item 3" />
    </Items>
</telerik:RadDropDownList>
```

By implementing these steps, you will increase the z-index of the RadDropDownList dropdown popup, allowing it to be displayed correctly within the AjaxControlToolkit modalpopup window.
