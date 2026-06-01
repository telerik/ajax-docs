```markdown
---
title: Setting Text Value of RadTextBox with TextMode Password
description: Learn how to set the text value of a RadTextBox with TextMode set to Password in UI for ASP.NET AJAX.
type: how-to
page_title: Set Text in RadTextBox with TextMode Password
meta_title: Set Text in RadTextBox with TextMode Password
slug: textbox-set-text-password
tags: radtextbox, password, textmode, set_value, showpasswordbutton
res_type: kb
ticketid: 1714343
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>UI for ASP.NET AJAX RadTextBox</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

When using a [RadTextBox](https://docs.telerik.com/devtools/aspnet-ajax/controls/textbox/overview) with `TextMode` set to `Password`, setting the `Text` property from the code-behind does not display the value in the textbox. This behavior occurs because of security considerations. 

To work around this limitation, you can use a client-side script to set the value of the textbox. Additionally, while some browsers (e.g., Microsoft Edge) may display an "eye" icon for password visibility due to native browser functionality, this is not a built-in feature of the RadTextBox in version 2026.1.421. A reliable implementation for a show/hide password toggle requires a custom solution.

This knowledge base article also answers the following questions:
- How to display a value in a RadTextBox with TextMode set to Password?
- How to enable password visibility toggle feature in RadTextBox?
- Why does RadTextBox.Text not display a password value?

## Solution

To set the value of a RadTextBox with `TextMode` set to `Password`, use the following server-side code to register a startup script:

````ASP.NET
<telerik:RadTextBox runat="server" ID="TextBox1" TextMode="Password" />
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    string script = string.Format("function f(){{$find('{0}').set_value('password');Sys.Application.remove_load(f);}}Sys.Application.add_load(f);", TextBox1.ClientID);
    ScriptManager.RegisterStartupScript(this, this.GetType(), "SetTextBoxValue", script, true);
}
````

### Note

- The "eye" icon for toggling password visibility is not available as a built-in feature in RadTextBox version 2026.1.421.
- For a cross-browser solution, refer to Telerik's [sample implementation for adding a show/hide password toggle](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/textbox-add-showpassword-button).

Starting with the 2026 Q2 update, the RadTextBox will include an out-of-the-box `ShowPasswordButton` functionality.

## See Also

- [RadTextBox Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/textbox/overview)
- [Adding a Show/Hide Password Button](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/textbox-add-showpassword-button)
```
