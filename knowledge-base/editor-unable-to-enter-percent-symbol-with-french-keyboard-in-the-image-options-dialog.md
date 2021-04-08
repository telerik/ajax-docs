---
title: Unable to enter the Percent symbol in the Width and Height textboxes of the Image Options dialog when using French keyboard
description: See how to allow pecent symbol from the French keyboard layout inside the RadEditor Image Options dialog.
type: troubleshooting
page_title: Unable to enter the Percent symbol in the Width and Height textboxes of the Image Options dialog when using French keyboard
slug: editor-unable-to-enter-percent-symbol-with-french-keyboard-in-the-image-options-dialog
res_type: kb
---

## Description

The problem is due to different keyCode of the % symbol when using French keyboard. That's why the validation mechanism of the Width and Height fields does not allow it.

## Solution

To allow the % special symbol when typing in French, create a new Dialog.js file with the following contents:

Dialog.js

````JavaScript
if (Sys && Sys.Application) {
    Sys.Application.add_init(function () {
        if (Telerik && Telerik.Web && Telerik.Web.UI.Widgets && Telerik.Web.UI.Widgets.ImageProperties) {
            var oldInit = Telerik.Web.UI.Widgets.ImageProperties.prototype.initialize;
            Telerik.Web.UI.Widgets.ImageProperties.prototype.initialize = function () {
                oldInit.call(this);
                this._allowedASCII = new Array(8, 16, 35, 36, 37, 39, 45, 46, 165, 192);
            }
        }
    });
}
````

and import the script file in the Set Image Properties dialog via the DialogsScriptFile property:

Default.aspx

````ASP.NET
<telerik:RadEditor ID="RadEditor1" runat="server" DialogsScriptFile="~/Dialog.js">
    <Content>
        <img src="Images/Apply.png" />
    </Content>
</telerik:RadEditor>
````

The DialogsScriptFile property allows to import JavaScript content in the RadEditor dialogs similarly to the DialogsCssFile property which allows to import custom stylesheet in them.


