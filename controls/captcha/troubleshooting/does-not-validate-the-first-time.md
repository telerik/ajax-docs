---
title: Does not Validate the First Time
page_title: Does not Validate the First Time - RadCaptcha
description: Check our Web Forms article about Does not Validate the First Time only the second time after an ajax request or callback.
slug: captcha/troubleshooting/does-not-validate-the-first-time
tags: validate,ajax,callback,first,time,second,time,works
published: True
position: 3
---

# Captcha Does not Validate the First Time

**Problem**: The Captcha is always invalid the first time after an AJAX request. It validates from the second time onward.

**Details**: This is caused by AJAX requests that do not include the captcha, or by callbacks (like load-on-demand requests by a RadComboBox). Such an AJAX request initializes the captcha on the server, as any control is initialized, so the captcha generates a new image. This new image and its code, however, do not travel to the browser because the captcha is not part of the response, so the user does not have a chance of entering a correct code.

**Solution**: Wrap the captcha in an `UpdatePanel` with `UpdateMode="Always"` so it gets refreshed with the other postbacks and shows the correct image to the user. In some cases setting the `CaptchaImage-PersistCodeDuringAjax` property to `true` may help.  Callbacks cannot be handled like this, however, because they cannot update controls, they only fetch data. So, having callbacks will always cause the captcha to be invalid one time.

Below you can find an example that showcases the two scenarios that cause the issue and the best available solution.

Scenario 1:

1. expand the combo so its callback is invoked
1. validating the captcha from the button fails because the callback cannot update the captcha in any way
1. validating the captcha from the button the second time works because the button click included the captcha in the response and it now has a correct code shown in the browser

Scenario 2:

1. select a new item from the combo
1. the captcha will be invalid because it is a postback without a correct code entered and this is expected
1. validating the captcha from the button will now work because it was part of the server response (taking out the UpdatePanel around it will cause it to fail, however)

````ASP.NET
<asp:UpdatePanel ID="UpdatepanelCombo" runat="server" UpdateMode="Conditional">
	<ContentTemplate>
		<telerik:RadComboBox runat="server" ID="RadComboBox1" RenderMode="Lightweight" EnableLoadOnDemand="true" OnItemsRequested="RadComboBox1_ItemsRequested"
			AutoPostBack="true" OnSelectedIndexChanged="RadComboBox1_SelectedIndexChanged">
		</telerik:RadComboBox>
	</ContentTemplate>
</asp:UpdatePanel>
<asp:UpdatePanel ID="UpdatepanelCaptcha" runat="server" UpdateMode="Always">
	<ContentTemplate>
		<telerik:RadCaptcha runat="server" ID="RadCaptcha1" ErrorMessage="The code you entered is not valid." CaptchaImage-TextChars="Numbers"></telerik:RadCaptcha>
	</ContentTemplate>
</asp:UpdatePanel>
<asp:UpdatePanel ID="UpdatepanelLabel" runat="server" UpdateMode="Conditional">
	<ContentTemplate>
		<asp:Label ID="Label1" Text="" runat="server" />
	</ContentTemplate>
</asp:UpdatePanel>
<asp:UpdatePanel ID="UpdatepanelButton" runat="server" UpdateMode="Conditional">
	<ContentTemplate>
		<asp:Button ID="Button1" Text="Submit (validate captcha)" OnClick="Button1_Click" runat="server" />
	</ContentTemplate>
</asp:UpdatePanel>
````

````C#
protected void RadComboBox1_ItemsRequested(object sender, RadComboBoxItemsRequestedEventArgs e)
{
	for (int i = 0; i < 5; i++)
	{
		RadComboBox1.Items.Add(new RadComboBoxItem(i.ToString()));
	}
	e.EndOfItems = true;
}

protected void RadComboBox1_SelectedIndexChanged(object sender, RadComboBoxSelectedIndexChangedEventArgs e)
{
	Label1.Text = "postback from combo on " + DateTime.Now.ToString() + ", captcha is valid: " + RadCaptcha1.IsValid.ToString();
	UpdatepanelLabel.Update();
}

protected void Button1_Click(object sender, EventArgs e)
{
	Label1.Text = "postback from the button on " + DateTime.Now.ToString() + ", captcha is valid: " + RadCaptcha1.IsValid.ToString();
	UpdatepanelLabel.Update();
}
````
````VB
Protected Sub RadComboBox1_ItemsRequested(sender As Object, e As RadComboBoxItemsRequestedEventArgs)
	For i As Integer = 0 To 4
		RadComboBox1.Items.Add(New RadComboBoxItem(i.ToString()))
	Next
	e.EndOfItems = True
End Sub

Protected Sub RadComboBox1_SelectedIndexChanged(sender As Object, e As RadComboBoxSelectedIndexChangedEventArgs)
	Label1.Text = "postback from combo on " + DateTime.Now.ToString() + ", captcha is valid: " + RadCaptcha1.IsValid.ToString()
	UpdatepanelLabel.Update()
End Sub

Protected Sub Button1_Click(sender As Object, e As EventArgs)
	Label1.Text = "postback from the button on " + DateTime.Now.ToString() + ", captcha is valid: " + RadCaptcha1.IsValid.ToString()
	UpdatepanelLabel.Update()
End Sub
````

### See Also

* [Getting Started with RadCaptcha]({%slug captcha/getting-started%})

