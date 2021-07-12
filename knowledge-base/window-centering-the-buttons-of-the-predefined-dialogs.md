---
title: Centering the buttons of the predefined dialogs and keeping the image aligned to the top
description: Centering the buttons of the predefined dialogs and keeping the image aligned to the top. Check it now!
type: how-to
page_title: Centering the buttons of the predefined dialogs and keeping the image aligned to the top
slug: window-centering-the-buttons-of-the-predefined-dialogs
res_type: kb
---


## HOW TO:

Use CSS only to center the buttons in the predefined dialogs and to keep the image aligned to the top.

## DESCRIPTION:

A common requirement is that the buttons of the predefined dialogs are centered in their container and/or the image on the left stays on the top when the text is very long. This can easily be changed via JavaScript (and even easier with jQuery) when the dialogs are called from the client, but it is not viable then they are called from the server.

## SOLUTION:

The following CSS snippets can be placed on the page where you need these modifications, so you can call the predefined dialogs without extra code.

**Lightweight RenderMode:**

````CSS
/*Center buttons - Lightweight Mode*/
div.RadWindow div.rwDialogButtons {
    text-align: center;
    width: 100%;
    box-sizing: border-box;
}
````

The icon is aligned to the top in `Lightweight` RenderMode by design, and the following rule shows how you can center it vertically so it looks like the default behavior in `Classic` mode:

````CSS
/*Align image to top - Lightweight Mode*/
div.rwDialog.rwAlertDialog,
div.rwDialog.rwConfirmDialog {
    background-position: 20px center;
}
````


**Classic RenderMode:**

````CSS
/*Center buttons - Classic Mode*/
div.rwDialogText + div,
div.rwDialogText + div + div {
    text-align: center;
}
 
div.RadWindow .rwDialogPopup .rwPopupButton,
div.RadWindow .rwDialogPopup .rwPopupButton span {
    float: none;
    display: inline-block;
    *zoom: 1;
    *display: inline;
}
````
 
````CSS
/*Align image to top - Classic Mode*/
div.RadWindow .rwWindowContent .radconfirm,
div.RadWindow .rwWindowContent .radalert {
    background-position: left top;
}
````

You can use the snippet below to see the result (toggle the RenderMode property according to your needs):

````ASP.NET
<telerik:RadWindowManager runat="server" ID="RadWindowManager1" RenderMode="Lightweight">
</telerik:RadWindowManager>
<script type="text/javascript">
    var longMessage = "this<br />is<br />a<br />very<br />long<br />message<br />for<br />the<br />predefined<br />dialogs";
</script>
<asp:Button ID="Button1" Text="call a RadAlert" OnClientClick="radalert(longMessage, 450, 350); return false;" runat="server" />
<asp:Button ID="Button2" Text="call a RadConfirm" OnClientClick="radconfirm(longMessage, '', 450, 350); return false;" runat="server" />
<asp:Button ID="Button3" Text="call a RadPrompt" OnClientClick="radprompt(longMessage, '', 450, 350); return false;" runat="server" />
````

## NOTES

Instead of global rules for the page, these rules can be incorporated in the templates as inline styles, so you can have different managers with different settings in the following resources:
 - [How to Change the Dialog Templates]({%slug window/alert,-confirm,-prompt-dialogs/how-to-change-the-dialog-templates%})
 - [Change the templates of the predefined dialogs (radalert, radconfirm and radprompt)]({%slug fileexplorer-change-the-templates-of-the-predefined-dialogs%}) 



