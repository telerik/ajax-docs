---
title: Add a clear button to RadComboBox input
description: See how to add a small X icon that will erase on click the content inside the text input area of RadComboBox - Telerik UI for ASP.NET AJAX
type: how-to
page_title: Enable an erase icon button to Telerik combobox input
slug: combobox-add-clear-button-to-combobox-input
position: 
tags: 
ticketid: 1580870
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadComboBox for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
Learn how to add a clear button with a small X icon in the text input area of an editable RadComboBox in the solution section below:

## Solution
You can add a button in the OnClientLoad event and then use the API to clear the selection as explained here

* [Clear RadComboBox](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/how-to/clear-radcombobox)

Here is an example of how you can add this functionality to all the RadComboBox controls in your project by just simply subscribing to the OnClientLoad event of the ComboBox. 

````JavaScript
<script>
    function OnClientLoad(sender, args) {
        var $clearButton = $telerik.$('<span class="combo-clear-btn"></span>')
        $clearButton.insertAfter($telerik.$(sender.get_inputDomElement()));
    
        $clearButton.click(function (ev) {
            $telerik.cancelRawEvent(ev);
                sender.clearSelection();
            sender.get_inputDomElement().focus();
         })
    }
</script>
````

````CSS
<style>
    .combo-clear-btn {
        position: relative;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        position: absolute;
        right: 32px;
        top: 4px;
        z-index: 2;
        width: 30px;
        cursor: pointer;
        visibility: hidden;
        opacity: 0;
        transition: opacity .2s ease 0s,visibility 0s linear .2s;
        font-family: "WebComponentsIcons";
        text-align: center;
    }

    .combo-clear-btn:before {
            display: block;
            content: "\e11b";
        }

    .RadComboBox:hover .combo-clear-btn {
        display: block;
        visibility: visible;
        opacity: 1;
        transition: opacity .2s ease 0s,visibility 0s linear 0s;
    }
</style>
````

````ASPNET
<telerik:RadComboBox ID="RadComboBox1" Skin="Default" EmptyMessage="Select an item" OnClientLoad="OnClientLoad" runat="server" RenderMode="Lightweight">
        <Items>
            <telerik:RadComboBoxItem Text="item 1" Value="1" />
            <telerik:RadComboBoxItem Text="item 2" Value="2" />
            <telerik:RadComboBoxItem Text="item 3" Value="3" />
            <telerik:RadComboBoxItem Text="item 4" Value="4" />
        </Items>
</telerik:RadComboBox>
````

     