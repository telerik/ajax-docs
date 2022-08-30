---
title: Localize the OK and Cancel buttons text of the RadButton Confirm dialog
description: Learn how to update the text of the Ok and Cancel buttons of the RadButton Confirm dialog - Telerik UI for ASP.NET AJAX
type: how-to
page_title: Change the default text of the OK and Cancel buttons of RadButton Confirm dialog
slug: button-change-confirm-dialog-buttons-text
position: 
tags: 
ticketid: 1577895
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
The article shows how to change the text of the Ok and Cancel buttons of the RadButton Confirm dialog to Yes and No.

## Solution
The localization (OK and Cancel text change) can be achieved, by using [RadConfirm dialog]({%slug button/functionality/button-confirm-dialog%}#using-radconfirm) instead of the browser confirm one, since the browser's one cannot be modified (customized). 

You need to register RadWindowManager and override [its ConfirmTemplate]({%slug window/alert,-confirm,-prompt-dialogs/how-to-change-the-dialog-templates%}) as shown below:

````ASPX
<telerik:RadButton ID="cmdCreateBatch" runat="server" Text="Create Batch" Width="160" >
    <ConfirmSettings ConfirmText="Are you sure want to Create the Batch?"  />
</telerik:RadButton>

<telerik:RadWindowManager ID="RadWindowManager1" runat="server">
    <ConfirmTemplate>
         <div class="rwDialog rwConfirmDialog">
            <div class="rwDialogContent">
                <div class="rwDialogMessage">{1}</div>
            </div>
            <div class="rwDialogButtons">
                <button type="button" class="rwOkBtn" onclick="$find('{0}').close(true); return false;">##LOC[Yes]##</button>
                <button type="button" class="rwCancelBtn" onclick="$find('{0}').close(false); return false;">##LOC[No]##</button>
            </div>
        </div>
    </ConfirmTemplate>
</telerik:RadWindowManager>
````
   
   