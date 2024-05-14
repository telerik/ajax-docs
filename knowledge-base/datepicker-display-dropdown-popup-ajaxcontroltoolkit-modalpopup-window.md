---
title: Displaying RadDatePicker Dropdown Popup in AjaxControlToolkit ModalPopup Window
description: Learn how to display the RadDatePicker dropdown popup over the AjaxControlToolkit modalpopup window.
type: how-to
page_title: How to Display RadDatePicker Dropdown Popup in AjaxControlToolkit ModalPopup Window
slug: datepicker-display-dropdown-popup-ajaxcontroltoolkit-modalpopup-window
tags: radcalendar, asp.net ajax, ajaxcontroltoolkit, modalpopup, dropdown popup
res_type: kb
---

## Environment

| Property | Value |
| --- | --- |
| Product | RadDatePicker for ASP.NET AJAX |
| Version | all |

## Description

When using an AjaxControlToolkit modalpopup window, the RadDatePicker dropdown popup may not be displayed correctly due to its lower z-index.

## Solution

To address this issue and ensure that the RadDatePicker dropdown popup is displayed correctly within the AjaxControlToolkit modalpopup window, you can follow these steps:

1. Add the following JavaScript code to your page:

```javascript
function popupOpening(sender, args) {
    var popup = args.get_popupControl();
    setTimeout(function () {
        popup.get_element().parentElement.style.setProperty('z-index', '103000', 'important');
    });
}
```

2. Modify your RadDatePicker control by adding the `OnPopupOpening` attribute and set it to the `popupOpening` JavaScript function:

```markup
<telerik:RadDatePicker RenderMode="Lightweight" ID="RadDatePicker2" runat="server">
    <ClientEvents OnPopupOpening="popupOpening" />
</telerik:RadDatePicker>
```
