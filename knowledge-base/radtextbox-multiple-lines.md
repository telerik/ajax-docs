---
title: Displaying Text on Multiple Lines in RadTextBox
description: Learn how to display text on multiple lines in RadTextBox for ASP.NET AJAX by using newline characters.
type: how-to
page_title: How to Display Multi-Line Text in RadTextBox for ASP.NET AJAX
slug: radtextbox-multiple-lines
tags: radinput, asp.net ajax, radtextbox, multiline, environment.newline
res_type: kb
ticketid: 1656507
---

## Environment

| Product | Version |
| --- | --- |
| RadInput for ASP.NET AJAX | all |

## Description

When attempting to display text on multiple lines within a RadTextBox, HTML `<br />` tags do not automatically convert to new lines. This behavior is consistent with that of the standard ASP.NET TextBox control, where HTML line breaks are not directly interpreted as new lines in text mode.

This KB article also answers the following questions:
- How can I insert new lines in RadTextBox text?
- Why don't HTML `<br />` tags work for new lines in RadTextBox?
- Is there a way to display multiline text in RadTextBox?

## Solution

To display text on multiple lines in a [RadTextBox](https://docs.telerik.com/devtools/aspnet-ajax/controls/input/overview), use newline characters (`\n`) or `Environment.NewLine` instead of HTML `<br />` tags. Here's an example of how to modify both the RadTextBox control definition and the server-side code to achieve multiline text display:

**RadTextBox Control Definition:**

```aspnet
<telerik:RadTextBox ID="txtAigValidation" runat="server" Width="100%" MaxLength="3000" ForeColor="Red" BorderStyle="None"
    Skin="WebBlue" EnableEmbeddedSkins="true" Font-Bold="true" TextMode="MultiLine">
</telerik:RadTextBox>
<asp:Button Text="cmdAigInsert Button" OnClick="cmdAigInsert_Click" runat="server" />
```

**Server-Side Code:**
Update your server-side code to use newline characters (`\n`):
```c#
protected void cmdAigInsert_Click(object sender, EventArgs e)
{
    txtAigValidation.Text = "*Customer Required" + Environment.NewLine + "*Customer Type Required" + Environment.NewLine;
}
```
```vbnet
Protected Sub cmdAigInsert_Click(sender As Object, e As EventArgs)
    txtAigValidation.Text = "*Customer Required" & Environment.NewLine & "*Customer Type Required" & Environment.NewLine
End Sub
```

Using the `Environment.NewLine` constant ensures compatibility across different platforms and is the recommended approach for inserting new lines in text within RadTextBox.

## Notes

- If you require HTML formatting capabilities (e.g., using `<br>` for line breaks), consider using the RadEditor control, which offers rich text editing features. For more information, refer to the RadEditor [overview](https://demos.telerik.com/aspnet-ajax/editor/examples/overview/defaultcs.aspx) and the RadEditor as TextBox [demo](https://demos.telerik.com/aspnet-ajax/editor/examples/editorastextbox/defaultcs.aspx).

## See Also

- [RadTextBox Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/input/overview)
- [RadEditor Overview](https://demos.telerik.com/aspnet-ajax/editor/examples/overview/defaultcs.aspx)
- [RadEditor as TextBox Demo](https://demos.telerik.com/aspnet-ajax/editor/examples/editorastextbox/defaultcs.aspx)
