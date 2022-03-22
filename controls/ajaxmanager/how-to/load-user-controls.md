---
title: Load User Controls
page_title: Load User Controls
description: "Learn how to load user controls with Telerik UI for ASP.NET AJAX."
slug: ajaxmanager/how-to/load-user-controls
previous_url: ajax/how-to/load-user-controls, controls/ajaxmanager/how-to/load-user-controls
tags: telerik, asp, net, ajax, manager, how, to, load, user, controls
published: True
type: how-to
category: knowledge-base
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

How can I load user controls with Telerik UI for ASP.NET AJAX? 

## Solution

The dynamic loading of user controls follows the same logic as in normal postback applications. You can load `customUserControls` with AJAX requests in the demonstrated way below. For an online demo, refer to the [Loading User Controls](https://demos.telerik.com/aspnet-ajax/Ajax/Examples/Common/LoadingUserControls/DefaultCS.aspx) page.

1. Provide an appropriate container for the control, for example, `asp:Panel`.

1. Instantiate your user control in the `Page_Init` or `Page_Load` event and always re-create the last loaded user control.



    ````C#
UserControl MyControl = (UserControl)LoadControl(controlName);
LoadMyUserControl(CurrentControl, Panel1);
    ````
    ````VB
Dim MyControl As UserControl = Me.LoadControl(controlName)
Me.LoadMyUserControl(Me.CurrentControl, Panel1)
    ````


1. Assign a unique ID to the dynamically loaded user control.



    ````C#
string userControlID = controlName.Split('.')[0];
MyControl.ID = userControlID.Replace("/", "").Replace("~", "");
    ````
    ````VB
Dim userControlID As String = controlName.Split(".")(0)
MyControl.ID = userControlID.Replace("/", "").Replace("~", "")
	
    ````


1. Place the instance inside the controls collection of the container:

    ````VB
Parent.Controls.Add(MyControl)
	
    ````



The following example demonstrates how to implement the previous steps in a simple scenario.

````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>
<asp:Button ID="Button1" runat="server" Text="Load WebUserControl1.ascx" OnClick="Button1_Click" />
<asp:Button ID="Button2" runat="server" Text="Load WebUserControl2.ascx" OnClick="Button2_Click" />
<asp:Panel ID="Panel1" runat="server">
</asp:Panel>
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	<AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="Button1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="Panel1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	    <telerik:AjaxSetting AjaxControlID="Button2">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="Panel1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>
````



The following is the implementation in the code-behind:



````C#
protected void Page_Load(object sender, EventArgs e)
{
	if (this.CurrentControl != string.Empty)
	{
	    LoadMyUserControl(CurrentControl, Panel1);
	}
}
protected void Button1_Click(object sender, EventArgs e)
{
	this.LoadMyUserControl("~/WebUserControl1.ascx", Panel1);
}
protected void Button2_Click(object sender, EventArgs e)
{
	this.LoadMyUserControl("~/WebUserControl2.ascx", Panel1);
}
	
private string CurrentControl
{
	get
	{
	    return this.ViewState["CurrentControl"] == null ? string.Empty : (string)this.ViewState["CurrentControl"];
	}
	set
	{
	    this.ViewState["CurrentControl"] = value;
	}
}
	
private void LoadMyUserControl(string controlName, Control parent)
{
	parent.Controls.Clear();
	UserControl MyControl = (UserControl)LoadControl(controlName);
	string userControlID = controlName.Split('.')[0];
	MyControl.ID = userControlID.Replace("/", "").Replace("~", "");
	parent.Controls.Add(MyControl);
	this.CurrentControl = controlName;
}
	
````
````VB
	
Protected Sub Page_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Me.Load
	        If (Not Me.CurrentControl Is String.Empty) Then
	            Me.LoadMyUserControl(Me.CurrentControl, Panel1)
	        End If
End Sub
	
Protected Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs)
	        Me.LoadMyUserControl("~/WebUserControl1.ascx", Panel1)
End Sub
	
Protected Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs)
	        Me.LoadMyUserControl("~/WebUserControl2.ascx", Panel1)
 End Sub
	
Private Property CurrentControl() As String
	        Get
	            Return IIf(Me.ViewState("CurrentControl") Is Nothing, String.Empty, Me.ViewState("CurrentControl"))
	        End Get
	        Set(ByVal Value As String)
	            Me.ViewState("CurrentControl") = Value
	        End Set
End Property
	
Private Sub LoadMyUserControl(ByVal controlName As String, ByVal parent As Control)
	        parent.Controls.Clear()
	        Dim MyControl As UserControl = Me.LoadControl(controlName)
	        Dim userControlID As String = controlName.Split(".")(0)
	        MyControl.ID = userControlID.Replace("/", "").Replace("~", "")
	        parent.Controls.Add(MyControl)
	        Me.CurrentControl = controlName
End Sub
````




## See Also

 * [AJAX - Loading User Controls](https://demos.telerik.com/aspnet-ajax/Ajax/Examples/Common/LoadingUserControls/DefaultCS.aspx)
