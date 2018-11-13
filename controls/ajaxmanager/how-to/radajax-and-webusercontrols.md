---
title: RadAjax and WebUserControls
page_title: RadAjax and WebUserControls | RadAjax for ASP.NET AJAX Documentation
description: RadAjax and WebUserControls
slug: ajaxmanager/how-to/radajax-and-webusercontrols
previous_url: ajax/radajaxmanager/how-to/radajax-and-webusercontrols
tags: radajax,and,webusercontrols
published: True
position: 1
---

# RadAjax and WebUserControls

RadAjaxManager for ASP.NET AJAX allows only a single instance of the control on the same page. One cannot place manager in the main page and second instance inside a user control. The RadAjaxManager designer on the other hand, cannot locate the WebUserControl (as well as controls inside it).

The solution is using the [RadAjaxManagerProxy control]({%slug ajaxmanager/radajaxmanagerproxy/overview%}). This control can be added inside a WebUserControl and configured the same way as the manager to AJAX-enable the user control completely codelessly:

````ASP.NET
<%@ Control Language="C#" AutoEventWireup="true" CodeFile="WebUserControl.ascx.cs" Inherits="WebUserControl" %>

<telerik:RadAjaxManagerProxy ID="AjaxManagerProxy1" runat="server">
	<AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="DropDownList1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="DetailsView1" />
	            <telerik:AjaxUpdatedControl ControlID="GridView1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	    <telerik:AjaxSetting AjaxControlID="GridView1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="GridView1" />
	            <telerik:AjaxUpdatedControl ControlID="DetailsView1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManagerProxy>
````



>note RadAjaxManagerProxy can be used for design-time configuration only. It does not have a client-side object, methods or events. Read the sections below to see how to handle them through the RadAjaxManager instance.

## Get Reference to the RadAjaxManager Instance

Should you need the server or client-side RadAjaxManager functionality (like the **ResponseScripts** collection or the **ajaxRequest** function), you can get the "master" manager instance via Server-Side **GetCurrent(Page)** method from the user control code-behind:

````C#
RadAjaxManager ram = RadAjaxManager.GetCurrent(Page);
````
````VB
Dim ram as RadAjaxManager = RadAjaxManager.GetCurrent(Page)
````


## Trigger AJAX Request from the Client

If you need the manager instance at the code of a WebUserControl, for example, so that an AJAX request need to be triggered explicitly, you can get the manager by using the `RadAjaxManager.GetCurrent(Page)` method. The method will return `null` if there is no manager on the page, similar to the [ASP:ScriptManager implementation](http://msdn.microsoft.com/en-us/magazine/cc163354.aspx).

>note With this approach, the initiator of the request is the RadAjaxManager, and so it will update only controls according to AjaxSettings where the ajax manager is the initiator.

>caption How to use server-side code block in a JS function inside your WebUserControl to call the master manager `ajaxRequest()` function:

````JavaScript
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	<script type="text/javascript">
	    function myUserControlClickHandler() {
	        $find("<%= RadAjaxManager.GetCurrent(Page).ClientID %>").ajaxRequest("FromUserControl");
	    }
	</script>
</telerik:RadCodeBlock>
````

## Handle AjaxRequest Server-side Event

If you invoked an AJAX request from the client from inside a user control, chances are you would also want to handle that event in the user control's code-behind. You can do that by attaching an event handler to the RadAjaxManager instance, whose reference you can obtain through its `GetCurrent()` method.

>caption How to handle AjaxRequest server event in a user control

````C#
protected void Page_Load(object sender, EventArgs e)
{
	RadAjaxManager ram = RadAjaxManager.GetCurrent(Page);
	if (ram != null)
	{
		ram.AjaxRequest += Ram_AjaxRequest;
	}
}

private void Ram_AjaxRequest(object sender, AjaxRequestEventArgs e)
{
    //check for the argument passed to the ajaxRequest() client-side method
	if (e.Argument.Equals("FromUserControl"))
	{
		Label1.Text = DateTime.Now.ToString();
	}
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	Dim ram As RadAjaxManager = RadAjaxManager.GetCurrent(Page)
	If ram IsNot Nothing Then
		AddHandler ram.AjaxRequest, AddressOf Ram_AjaxRequest
	End If
End Sub

Private Sub Ram_AjaxRequest(ByVal sender As Object, ByVal e As AjaxRequestEventArgs)
    'check for the argument passed to the ajaxRequest() client-side method'
	If e.Argument.Equals("FromUserControl") Then
		Label1.Text = DateTime.Now.ToString()
	End If
End Sub
````

## Add AJAX Settings to the Manager

As to the AJAX settings, if the markup setting within the user control do not suffice, you can always [add AJAX settings programmatically]({%slug ajaxmanager/how-to/add-ajaxsettings-programmatically%}). For example, you may want to have something from the user control update another part of the page.

>caption How to add AjaxSettings to the AjaxManager

On the main form:

````ASP.NET
<form id="Form1" method="post" runat="server">
    <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
    </telerik:RadScriptManager>
    <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
    </telerik:RadAjaxManager>
    <uc1:webusercontrol1 id="WebUserControl1" runat="server"></uc1:webusercontrol1>
</form>
````

On the user control markup:

````ASP.NET
<asp:Button ID="Button1" Text="Button" runat="server"></asp:Button>
<asp:Label ID="Label1" runat="server">Label</asp:Label>
````

In the page code-behind:

````C#
protected void Page_Load(object sender, EventArgs e)
{
    //Get the WebUserControl
    UserControl MyControl = (UserControl)Page.FindControl("WebUserControl1");

    //Get user control's button and label
    Button MyButton = (Button)MyControl.FindControl("Button1");
    Label MyLabel = (Label)MyControl.FindControl("Label1");

    //Add the necessary AJAX setting programmatically
    RadAjaxManager1.AjaxSettings.AddAjaxSetting(MyButton, MyLabel);
}
				
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
    'Get the WebUserControl
    Dim MyControl As UserControl = CType(Page.FindControl("WebUserControl1"), UserControl)

    'Get user control's button and label
    Dim MyButton As Button = CType(MyControl.FindControl("Button1"), Button)
    Dim MyLabel As Label = CType(MyControl.FindControl("Label1"), Label)

    'Add the necessary AJAX setting programmatically
    RadAjaxManager1.AjaxSettings.AddAjaxSetting(MyButton, MyLabel)
End Sub 
````

>tip You can use the `RadAjaxManager.GetCurrent(Page)` method to reference the RadAjaxManager in the `Page_Load` of the user control and add AjaxSettings there as well.

On the user control code-behind:

````C#
protected void Button1_Click(object sender, System.EventArgs e)
{
    Label1.Text = DateTime.Now.ToLongTimeString();
}
````
````VB
Protected Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
    Label1.Text = DateTime.Now
End Sub
````





## See Also

 * [Load User Controls]({%slug ajaxmanager/how-to/load-user-controls%})

 * [Add AjaxSettings Programmatically]({%slug ajaxmanager/how-to/add-ajaxsettings-programmatically%})

 * [User Controls](http://demos.telerik.com/aspnet-ajax/Ajax/Examples/Manager/UserControl/DefaultCS.aspx)
