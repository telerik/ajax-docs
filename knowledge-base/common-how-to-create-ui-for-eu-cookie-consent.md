---
title: How to create UI for EU Cookie Consent
description: How to create UI for EU Cookie Consent. Check it now!
type: how-to
page_title: How to create UI for EU Cookie Consent
slug: common-how-to-create-ui-for-eu-cookie-consent
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

The EU GDPR rules takes effect in 2018, and you may need to add a pop-over on your pages where users consent to the application using cookies.

## Solution 

This example code below shows how you can create such UI through **RadNotification** to get notified on the server (through MS AJAX) for the user consent so you can store the choice long term.

Comments in the code offer a few ideas and explanations for implementing the remainder of the necessary application-level logic.

````ASP.NET
<%@ Register Src="~/cookie-consent.ascx" TagPrefix="uc1" TagName="cookieconsent" %>

<asp:UpdatePanel runat="server" ID="up1" UpdateMode="Conditional">
    <ContentTemplate>
        <asp:Button Text="other partial postback on the page" ID="button2" runat="server" />
    </ContentTemplate>
</asp:UpdatePanel>

<asp:Button Text="other full postback on the page" ID="button1" runat="server" />

<uc1:cookieconsent runat="server" id="cookieconsent" />
````

**cookie-consent.ascx**

````ASP.NET
<%@ Control Language="C#" AutoEventWireup="true" CodeFile="cookie-consent.ascx.cs" Inherits="cookie_consent_cookie_consent" %>

<asp:UpdatePanel runat="server" UpdateMode="Always" ID="upCookieConsent">
    <ContentTemplate>
        <asp:Panel runat="server" ID="container">
            <asp:HiddenField runat="server" ID="hfUserAgreed" />
            <telerik:RadScriptBlock runat="server" ID="rsb1">
                <script>
                    function agreeToCookies() {
                        __doPostBack("<%=upCookieConsent.UniqueID%>", "userAgreed");
                    }
                </script>
            </telerik:RadScriptBlock>
            <telerik:RadNotification runat="server" ID="rnCookieConsent" VisibleOnPageLoad="true" AutoCloseDelay="0" 
                RenderMode="Lightweight" Skin="Black"
                Width="100%" Height="150px" Position="BottomCenter" VisibleTitlebar="false" Animation="Slide"
                LoadContentOn="PageLoad">
                <ContentTemplate>
                    <%--Tip: You can localize this message, or extract it from a database
                    You can also style the content here with CSS and use your custom HTML--%>
                    This website uses cookies to ensure you get the best experience on our website.
                <a target="_blank" href="my-explanation-page">Learn more</a>.
                <span style="float: right;">
                    <button onclick="agreeToCookies();return false;">Got it, I agree</button></span>
                </ContentTemplate>
            </telerik:RadNotification>
        </asp:Panel>
    </ContentTemplate>
</asp:UpdatePanel>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (Request.Params["__EVENTTARGET"] == upCookieConsent.UniqueID &&
        Request.Params["__EVENTARGUMENT"] == "userAgreed")
    {
        container.Visible = false;

        //store this info per user
        //perform a check based on that stored data to know whether to show this control at all
        //if the user already agreed you can simply set the Visible property to false
        //postbacks on this same page while the viewstate is retained will work fine, but you should implement
        //a long term storage as well
        //you may also want to look into showing this only for users that need to see it (e.g., based on IP location)
    }
}

protected override void Render(HtmlTextWriter writer)
{
    if (container.Visible)
    {
        Page.ClientScript.RegisterForEventValidation(upCookieConsent.UniqueID, "userAgreed");
    }
    base.Render(writer);
}
````



 