---
title: Events
page_title: Events | RadCaptcha for ASP.NET AJAX Documentation
description: Events
slug: captcha/server-side-programming/events
tags: events
published: True
position: 0
---

# Events



## CaptchaValidate

The event **CaptchaValidate** is fired before the control is validated.This event allows you to execute server-side code on RadCaptcha validation, to cancel the default validation mechanismof the captcha control and to specify your own logic for validating the RadCaptcha. The **CaptchaValidateEventArgs** objectof the **CaptchaValidate** event exposes the following properties:

* **CancelDefaultValidation** - specifies whether the default validation of RadCaptcha will proceed after the event is fired.

* **IsValid** - determines whether the RadCaptcha validation is successful, should be used if **CancelDefaultValidation** is set to **true**.

The following example demonstrates a RadCaptcha that is validated if the sum of the digits, displayed in the code, is entered in the input.For this purpose the property **CancelDefaultValidation** is set to **true** and the new validation logicis implemented in the **CaptchaValidate** event handler. Finally, **IsValid** is set according to the result of the validation.

````ASPNET
		<telerik:RadCaptcha ID="RadCaptcha1" runat="server" ValidationGroup="CaptchaValidation" ErrorMessage="Page not valid. The code you entered is not valid."
			CaptchaTextBoxCssClass="textBox" OnCaptchaValidate="RadCaptcha1_CaptchaValidate">
			<CaptchaImage ImageCssClass="imageClass" BackgroundColor="#dff3ff" TextColor="Black"
				RenderImageOnly="true" />
		</telerik:RadCaptcha>
		Enter the sum of the digits in the validation code <br />(enter 0 if there are not any):<br />
		<asp:TextBox ID="ValdiationCodeDigitsSum" runat="server" />
		<asp:Button ID="btnValidate" runat="server" Text="Verify Code" ValidationGroup="CaptchaValidation" />
````





````C#
	
		private string oldCaptchaCode;
	
		protected void Page_Init(object sender, EventArgs e)
		{
			if (!IsPostBack)
			{
				Session["CaptchaCode"] = RadCaptcha1.CaptchaImage.Text;
			}
		}
	
		protected void RadCaptcha1_CaptchaValidate(object sender, CaptchaValidateEventArgs e)
		{
			e.CancelDefaultValidation = true;
			string validationCodeNumbers = Regex.Replace(Session["CaptchaCode"].ToString(), "[^0-9]", "");
			int digitsSum = 0;
			foreach (char c in validationCodeNumbers)
			{
				digitsSum += Convert.ToInt32(c.ToString());
			}
	
			int enteredDigitsSum = 0;
			e.IsValid = Int32.TryParse(ValdiationCodeDigitsSum.Text, out enteredDigitsSum) && digitsSum == enteredDigitsSum;
			if (e.IsValid)
			{
				RadCaptcha1.CaptchaImage.ImageCssClass = "imgCorrectCode";
			}
			else
			{
				RadCaptcha1.CaptchaImage.ImageCssClass = "imgWrongCode";
			}
			Session["CaptchaCode"] = RadCaptcha1.CaptchaImage.Text;
		}
	
````
````VB
	
		Private oldCaptchaCode As String
	
		Protected Sub Page_Init(sender As Object, e As System.EventArgs) Handles Me.Init
			If Not IsPostBack Then
				Session("CaptchaCode") = RadCaptcha1.CaptchaImage.Text
			End If
	
		End Sub
	
		Protected Sub RadCaptcha1_CaptchaValidate(sender As Object, e As CaptchaValidateEventArgs) Handles RadCaptcha1.CaptchaValidate
			e.CancelDefaultValidation = True
			Dim validationCodeNumbers As String = Regex.Replace(Session("CaptchaCode").ToString(), "[^0-9]", "")
			Dim digitsSum As Integer = 0
			For Each c As Char In validationCodeNumbers
				digitsSum += Convert.ToInt32(c.ToString())
			Next
	
			Dim enteredDigitsSum As Integer = 0
			e.IsValid = Int32.TryParse(ValdiationCodeDigitsSum.Text, enteredDigitsSum) AndAlso digitsSum = enteredDigitsSum
			If e.IsValid Then
				RadCaptcha1.CaptchaImage.ImageCssClass = "imgCorrectCode"
			Else
				RadCaptcha1.CaptchaImage.ImageCssClass = "imgWrongCode"
			End If
			Session("CaptchaCode") = RadCaptcha1.CaptchaImage.Text
		End Sub
	
````


# See Also

 * [Check this live in the online demo](http://demos.telerik.com/aspnet-ajax/captcha/examples/serversideevents/defaultcs.aspx)
