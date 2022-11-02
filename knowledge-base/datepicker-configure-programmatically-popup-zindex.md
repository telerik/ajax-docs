---
title: Set z-index for a specific date picker popup
description: See how to configure programmatically different z-indexes for the popups of two different date pickers placed on the same page - Telerik UI for ASP.NET AJAX
type: how-to
page_title: How to specify the z-index for the RadDatePicker dialog?
slug: datepicker-configure-programmatically-popup-zindex
position: 
tags: 
ticketid: 1585411
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadCalendar for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
I have a CSS that specifies a default z-index which works fine for normal windows. However, I use a modal popup window where I want to show a calendar button (RadDatePicker). Here the z-index of the datepicker calendar dropdown needs to be a lot higher (say 100002) for it to show correctly. However, I cannot specify that in the default CSS, as that would result in a possible open calendar control showing above the modal screen.

How can I have different z-indexes for the calendar popups of two different datepickers placed on the same page?

The first DatePicker control will sit on a normal form with a z-index of 3000 and the other will be inside the modal popup with a z-index of 103000.

## Solution
You can apply a z-index to a specific Telerik control via its Style="z-index: 12345" property as explained in the following article: [Controlling Absolute Positioning with z-index]({%slug controls/controlling-absolute-positioning-with-z-index%}).

````ASPX
<telerik:RadDatePicker RenderMode="Lightweight" ID="RadWindowManager1" runat="server" Style="z-index: 12345">
</telerik:RadDatePicker>
 ````

Basically, the z-index of the calendar popup of the RadDatePicker can be set via the following CSS class:

 ````ASPX
<style>
    .RadCalendarPopup {
        z-index: 6000 !important;
    }
</style>
````

However, the .RadCalendarPopup class will be applied to the popups of all RadDatePicker controls. This is not very handy customization for a scenarios like where you have a datepicker on the main page (form) and another one in a dialog (modalpopupextender) since you cannot control the specific z-index of the popups separately. In this case, you can programmatically update the calendar popup z-index in the [OnPopupOpening client-side event]({%slug datepicker/client-side-programming/events/onpopupopening%}) of the datepicker placed inside the modal popup extender:

````ASPX
<%@ Page Language="C#" AutoEventWireup="true" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
    .modalBackground
    {
        background-color: Black;
        filter: alpha(opacity=90);
        opacity: 0.8;
    }
    .modalPopup
    {
        background-color: #FFFFFF;
        border-width: 3px;
        border-style: solid;
        border-color: black;
        padding-top: 10px;
        padding-left: 10px;
        width: 300px;
        height: 140px;
    }
</style>
</head>
<body>
    <form id="form1" runat="server">
        <asp:ScriptManager runat="server" />
        <asp:Button ID="btnShow" runat="server" Text="Show Modal Popup" />

        <!-- ModalPopupExtender -->
        <cc1:ModalPopupExtender ID="mp1" runat="server" PopupControlID="Panel1" TargetControlID="btnShow"
            CancelControlID="btnClose" BackgroundCssClass="modalBackground">
        </cc1:ModalPopupExtender>
        <asp:Panel ID="Panel1" runat="server" CssClass="modalPopup" align="center" Style="display: none">
            RadDatePicker with ID="2" is loaded below:
            <script>
                function popupOpening(sender, args) {
                    var popup = args.get_popupControl();
                    setTimeout(function () {
                        popup.get_element().parentElement.style.zIndex = "103000";
                    });
                }
            </script>
            <telerik:RadDatePicker RenderMode="Lightweight" ID="RadDatePicker2" runat="server">
                 <ClientEvents OnPopupOpening="popupOpening" />
            </telerik:RadDatePicker>
            <asp:Button ID="btnClose" runat="server" Text="Close" />
        </asp:Panel>

        RadDatePicker with ID="1" is loaded below on the Form:<br />
        <telerik:RadDatePicker RenderMode="Lightweight" ID="RadDatePicker1" runat="server"></telerik:RadDatePicker>
       
    </form>
</body>
</html>
````

This way the popup of the datepicker on the parent page will not show through the modal dialog and at the same time, you will be able to configure the popup of the datepicker inside the modal extender to show over it.
   
   