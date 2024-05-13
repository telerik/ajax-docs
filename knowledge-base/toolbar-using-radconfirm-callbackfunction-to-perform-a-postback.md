---
title: Using radconfirm() CallBackFunction to perform a postback
description: Using radconfirm() CallBackFunction to perform a postback. Check it out!
type: how-to
page_title: Using radconfirm() CallBackFunction to perform a postback. | RadToolBar
slug: toolbar-using-radconfirm-callbackfunction-to-perform-a-postback
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms ToolBar for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

Unlike the standard `confim()`, `radconfirm()` cannot block the execution of the thread (this is something that cannot be done with Javascript) and a **CallBackFunction** is needed.

The sample code snippet demonstrates a real-life scenario where when clicking one of the Toolbar's buttons we want to ask a confirmation from the user before performing the postback. **RadWindowManager** and **RadToolbar** are wrapped in **RadAjaxPanel** to avoid full page's postback.

## Solution

The implementation of such scenario is relatively simple - when the user clicks on the button, we need to make a check what button is clicked and if it is the one which requires confirmation - cancel the postback and call `radconfirm()`.

Once the user confirms the postback, in the radconfirm's CallBackFunction we will use  `__doPostBack()` to send the information on the server:

````JavaScript
    <%= RadToolbar1.ClientID %>.attachEvent("OnClientClick", "Toolbar_ClientClick");

    function Toolbar_ClientClick(sender, e) {
        if (sender.CommandName == "Delete") {
            radconfirm("Delete?", CallBackFn);
            return false;
        }
        else {
            return true;
        }
    }
    
    function CallBackFn(arg) {
        if (arg) {
            __doPostBack("<%= RadToolbar1.UniqueID %>", "onclick#Delete");
        }
    }
````

In the  `__doPostBack()` we are provide the following arguments:

1. The UniqueID of the RadToolbar - this will allow us to reference the toolbar even if a MasterPage is used
1. The RadToolBar command that we want to be executed.

And in the codebehind:

````C#
protected void RadToolbar1_OnClick(object sender, Telerik.WebControls.RadToolbarClickEventArgs e)  
{  
    Message.Text = "You clicked " +  e.Button.CommandName + " " + DateTime.Now.ToString("hh:mm:ss");  
} 
````

**DOWNLOAD** the sample project: [toolbar-using-radconfirm-callbackfunction-to-perform-a-postback.zip](files/toolbar-using-radconfirm-callbackfunction-to-perform-a-postback.zip)
 
   
