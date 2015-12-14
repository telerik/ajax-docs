---
title: Single Click
page_title: Single Click | RadImageButton for ASP.NET AJAX Documentation
description: Single Click
slug: imagebutton/functionality/single-click
tags: single,click
published: True
position: 0
---

# Single Click

Use the single click button (**Figure 1** and **Figure 2**) to avoid multiple postbacks to the server. This feature is useful in scenarios where the developer wants to prevent the user from submitting identical content multiple times to the server (e.g., when editing a database or sending an e-mail).

>caption Figure 1: RadImageButton with SingleClick functionality before click.

![button-single-click](images/button-single-click-1.png) 

>caption Figure 2: RadImageButton with SingleClick functionality after click.

![button-single-click](images/button-single-click-2.png) 

The following properties should be used to enable the single click functionality:

* **SingleClick** - determines whether the **RadImageButton** control will be immediately disabled after the user clicks it. Set it to **true** to enable the single click functionality.

* **SingleClickText** - determines the text displayed in the **RadImageButton** control after the user has clicked the button and it is disabled while the server request executes. The original text will be retrieved after the server request execution. The property takes a plain text string.

>caption Example 1: The code that enables the single click functionality in **RadImageButton** from **Figure 1** and **Figure 2**.

````ASP.NET
<telerik:RadTextBox ID="txtName" runat="server" Width="180px" EmptyMessage="Enter your name..."/>

<telerik:RadImageButton ID="btnSubmit" runat="server" Text="Submit" OnClick="btnSubmit_Click"
	SingleClick="true" SingleClickText="Processing...">
	<Image Url="~/Images/cb_empty_01.png" />
</telerik:RadImageButton>
<br /><br />
<asp:Label ID="lblGreeting" runat="server" />
````

````C#
protected void btnSubmit_Click(object sender, EventArgs e)
{
    if (Page.IsPostBack) System.Threading.Thread.Sleep(3000);
    lblGreeting.Text = String.Format("Hello, {0}!", txtName.Text);
}
````
````VB
Protected Sub btnSubmit_Click(sender As Object, e As System.EventArgs) Handles btnSubmit.Click
	If Page.IsPostBack Then
		System.Threading.Thread.Sleep(3000)
	End If
	lblGreeting.Text = String.Format("Hello, {0}!", txtName.Text)
End Sub
````

The submitted text in processed on the server. Note that this example uses the **System.Threading.Thread.Sleep** method so that the disabled button can be examined after clicking it.

## See Also

 * [Single Click Button Demo](http://demos.telerik.com/aspnet-ajax/imagebutton/examples/singleclick/defaultcs.aspx)
