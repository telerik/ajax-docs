---
title: Session Expired Redirect / Session Refresher Using RadWindowManager and jQuery
description: See how to create a Session Expired Redirect / Session Refresher Using RadWindowManager and jQuery
type: how-to
page_title: Session Expired Redirect / Session Refresher Using RadWindowManager and jQuery
slug: common-session-expired-redirect-session-refresher-using-radwindowmanager-and-jquery
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

This control solves two problems. In a custom CMS we wrote, users were losing data when their sessions were expiring during editing of a page. We wanted to be able reset the users session countdown without having to refresh the page. 

The second problem is auto-redirecting a user to the login screen if they have been logged out due to session inactivity. This control displays a RadWindow confirm popup when there is 90 seconds left on a users session.

If the user does not click the prompt within 90 seconds, they are redirected to a login page. Otherwise, the user will silently have their session timer refreshed.

## Solution

To implement the control, simply add it to a page whenever the user is logged in. If a user is not logged in, you can either not add the control to the page (optimal), or set it Visible = false.

**LogoutTimer.ascx**

````ASP.NET
<%@ Control Language="vb" AutoEventWireup="false" CodeBehind="LogoutTimer.ascx.vb" Inherits="ScreenMatter.Admin.Web.LogoutTimer" %> 
<%@ Register Namespace="Telerik.Web.UI" TagPrefix="telerik" Assembly="Telerik.Web.UI" %> 

<telerik:RadWindowManager runat="server" ID="windowManager" Behaviors="Move" style="z-index:8000"> 
    <AlertTemplate></AlertTemplate> 
    <PromptTemplate></PromptTemplate> 
    <ConfirmTemplate> 
        <div class="rwDialogPopup radconfirm"> 
            <div class="rwDialogText"> 
                You will be logged out due to inactivity soon.<br />Time until logged out: <span class="sm_logoutTimer"></span> 
            </div> 
            <div> 
                <a onclick="$find('{0}').close(true);" class="rwPopupButton" href="javascript:void(0);"> 
                    <span class="rwOuterSpan"><span class="rwInnerSpan">Stay Logged In</span></span></a> 
            </div> 
        </div> 
    </ConfirmTemplate> 
</telerik:RadWindowManager> 
````

````JavaScript
function sm_timer(sessionLength, redirectUrl) { 
    var timeleft = sessionLength; 
    var prm = Sys.WebForms.PageRequestManager.getInstance(); 

    if (prm != null) { 
        prm.add_endRequest(function() { 
        timeleft = sessionLength; 
        }); 
    } 

    var modalVisible = false; 
    var displayElements = $('.sm_logoutTimer'); 

    function updateDisplay() { 
        if (displayElements != null) { 
            var m = Math.floor(timeleft / 60); 
            var s = timeleft % 60; 
            displayElements.attr('innerHTML', m.toString() + ':' + (s <= 9 ? '0' : '') + s.toString()); 
        } 
    } 

    function logout_callback(arg) { 
        $.get(location.href); 
        modalVisible = false; 
        timeleft = sessionLength; 
    } 

    function checkPrompt() { 
        if (timeleft <= 120 && !modalVisible) { 
            modalVisible = true; 
            radconfirm('', logout_callback, 280, 140); 
            displayElements = $('.sm_logoutTimer'); 
        } 
    } 

    function logout() { 
        document.location.href = redirectUrl; 
    } 

    function tick() { 
        if (timeleft <= 0) { 
            logout(); 
        } else { 
            updateDisplay(); 
            checkPrompt(); 
            setTimeout(tick, 1000); 
        } 
        timeleft--; 
    } 

    setTimeout(tick, 1000); 
} 
````

**LogoutTimer.ascx** code behind

````C#
public partial class LogoutTimer : System.Web.UI.UserControl
{
    private static int SessionDurationInSeconds = System.Web.HttpContext.Current.Session.Timeout * 60;
    private string _logoutUrl;

    /// <summary>
    /// When the user is logged out they will be redirected here.
    /// </summary>
    public string LogoutUrl
    {
        get
        {
            return _logoutUrl;
        }
        set
        {
            _logoutUrl = value;
        }
    }

    protected void Page_Load(object sender, System.EventArgs e)
    {
        string timeoutStartScript = string.Format("sm_timer({0},\"{1}\");", SessionDurationInSeconds, LogoutUrl);
        Page.ClientScript.RegisterStartupScript(typeof(LogoutTimer), "TimeoutStartScript", timeoutStartScript, true);
    }
}
````
````VB
Public Partial Class LogoutTimer 
    Inherits System.Web.UI.UserControl 

    Private Shared SessionDurationInSeconds As Integer = System.Web.HttpContext.Current.Session.Timeout * 60 
    Private _logoutUrl As String 

    ''' <summary> 
    ''' When the user is logged out they will be redirected here. 
    ''' </summary> 
    Public Property LogoutUrl() As String 
        Get 
            Return _logoutUrl 
        End Get 
        Set(ByVal value As String) 
            _logoutUrl = value 
        End Set 
    End Property 

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load 
        Dim timeoutStartScript As String = String.Format("sm_timer({0},""{1}"");", SessionDurationInSeconds, LogoutUrl) 
        Page.ClientScript.RegisterStartupScript(GetType(LogoutTimer), "TimeoutStartScript", timeoutStartScript, True) 
    End Sub 
End Class 
````

Example implementation:

````C#
protected void OnLoad(System.EventArgs e)
{
    if (Current.User.Identity.IsAuthenticated)
    {
        Control loginControl = LoadControl("~/auth/controls/LogoutTimer.ascx");
        LoggedInPanel.Controls.Add(loginControl);
    }
}
````
````VB
Protected Sub OnLoad(ByVal e As System.EventArgs) 
    If Current.User.Identity.IsAuthenticated Then 
        Dim loginControl As Control = LoadControl("~/auth/controls/LogoutTimer.ascx") 
        LoggedInPanel.Controls.Add(loginControl) 
    End If 
End Sub 
````
   
    
	 
