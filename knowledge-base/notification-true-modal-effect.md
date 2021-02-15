---
title: Create a true modal effect for RadNotification
description: Make RadNotification have true modal effect
type: how-to
page_title: True modal effect - RadNotification
slug: notification-true-modal-effect
position: 
tags: radnotification, notification, modal
ticketid: 1484141
res_type: kb
---

## Environment
<table>
    <thead>
        <tr>
            <th>Product</th>
        </tr>
    </thead>
	<tbody>
		<tr>
			<td>RadNotification</td>
		</tr>
	</tbody>
</table>

## Description

The **RadNotification** is a lightweight control and does not have a built-in modality (i.e. no **Modal** property).

However, With the power of JavaScript/jQuery a Modal effect can be implemented additionally. In the **Solution** section below you will find an example showing how to create that.

You can also check out and older version of such implementation at [How to make a modal RadNotification](https://www.telerik.com/support/kb/aspnet-ajax/notification/details/how-to-make-a-modal-radnotification)


## Solution

The RadWindow's modality is iterating all the elements and is setting the tab index to -1 so they are not selectable while open, and restores the original tab-index when closed.

To do that, use the **OnClientShown** and **OnClientHiding** events.

*Optional*: Set the **EnableAriaSupport** to **True** to enable WAI-ARIA Support and make it compatible with Screenreaders.

````XML
<asp:Button ID="Button1" Text="show the RadNotification" OnClientClick="showNotification(); return false;" runat="server" />
        
<telerik:RadNotification runat="server" ID="RadNotification1" EnableAriaSupport="true" Position="Center" AutoCloseDelay="10000" Width="200px" Height="120px" Title="Sample Title"
    Text="Lorem ipsum dolor sit amet" OnClientShown="showModalDiv" OnClientHiding="hideModalDiv">
</telerik:RadNotification>

<input type="text" name="name" value="" />
````

JavaScript logic

````JavaScript
<script type="text/javascript">
    var modalDiv = null;
    function showNotification() {
        $find("<%=RadNotification1.ClientID %>").show();
    }

    setTimeout(showNotification,4000);

    function showModalDiv(sender, args) {
        var popUp = sender.get_popupElement();
        if (!popUp._modalExtender) {
            popUp._modalExtender = new Telerik.Web.UI.ModalExtender(popUp, {
                enableAriaSupport: true,
                getNodesToHide: function () {
                    return $telerik.$(popUp).nextAll(":not(script,link)").get();
                },
                trapTabKey: true
            });
        }
        popUp._modalExtender.show();

        // find the desired element inside the popup and focus it here...
    }

    function hideModalDiv(sender, args) {
        var popUp = sender.get_popupElement();
        popUp._modalExtender.hide();
    }
</script>
````
 
