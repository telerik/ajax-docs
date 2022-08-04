---
title: Configuring the ErrorMessage text to be announced by the screen reader
description: 
type: troubleshooting
page_title: Configuring the ErrorMessage text to be announced by the screen reader
slug: captcha-configure-error-text-to-be-announced-by-screen-reader
position: 
tags: 
ticketid: 1573316
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadCaptcha for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
The solution below answers and handles the following questions/scenario:
* How do I get the aria-required="true" attribute added? 
* How do I get the aria-describedby attribute added so that when the captcha user input has an error, the ErrorMessage text is announced by the screen reader?

## Solution
Here is how to apply the aria-required, aria-describedby and set focus on the error message so that JAWS and NVDA can read it:

````ASPX
<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>Telerik AJAX Accessibility Page</title>
</head>

<body>
    <header>
        <h1>Telerik AJAX Accessibility Page</h1>
    </header>
    <main>
        <form id="form1" runat="server">
            <asp:ScriptManager runat="server" />
            <script>
                function OnClientLoad(sender, args) {
                    var captchaClassName = sender.get_element().className;
                    var captchaTextBox = sender.get_textBox();
                    var captchaErrorLabel = $get(sender.get_id() + "_ctl00");
                    var captchaErrorLabelId = $get(sender.get_id() + "_ctl00").id;



                    if (captchaClassName.indexOf("rcInvalid") < 0) {
                        captchaErrorLabel.innerText = "";

                    }
                    else {
                        captchaErrorLabel.innerText = "You have entered an invalid code";
                        captchaTextBox.setAttribute("aria-invalid", "true");
                        captchaTextBox.focus();
                    }


                    captchaTextBox.setAttribute("aria-required", "true");
                    captchaTextBox.setAttribute("aria-describedby", captchaErrorLabelId);

                }
            </script>
            <telerik:RadCaptcha Skin="Office2007" AccessKey="A" ID="RadCaptcha1" runat="server" OnClientLoad="OnClientLoad"
                ErrorMessage="You have entered an invalid code" ValidationGroup="SubmitGroup"
                ForeColor="Red" CaptchaImage-EnableCaptchaAudio="true">
            </telerik:RadCaptcha> 
            
            <asp:Button ID="Button1" runat="server" Text="Button" ValidationGroup="SubmitGroup"></asp:Button>
        </form>
    </main>
</body>
</html>
````

   
