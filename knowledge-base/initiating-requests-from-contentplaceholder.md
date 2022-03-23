---
title: Initiate Requests from One ContentPlaceHolder and Load or Update Controls in Another
page_title: Initiate Requests from One ContentPlaceHolder and Load or Update Controls in Another
description: "Learn how to initiate requests from one ContentPlaceHolder and load or update controls in anther with Telerik UI for ASP.NET AJAX."
slug: ajaxmanager/how-to/initiating-requests-from-contentplaceholder
previous_url: ajax/radajaxmanager/how-to/initiating-requests-from-contentplaceholder, controls/ajaxmanager/how-to/initiating-requests-from-contentplaceholder
tags: telerik, asp, net, ajax, manager, how, to, initiate, requests, from, one, contentplaceholder, and, load, update, controls, in, another
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

How can I initiate requests from one `ContentPlaceHolder` and load or update controls in anther with Telerik UI for ASP.NET AJAX? 

## Solution

The AjaxManager can handle all `MasterPage` and `WebUserControls` scenarios regardless of the complexity of the application. 

The following example demonstrates how to load the `WebUserControls` in the contents of the `MasterPage` by the AjaxManager. Note the event bubbling approach which the demo uses because of the dynamic loading of a user control from an action in another loaded user control. The button `click` event is bubbled from the user control to the content page where the first user control is loaded on each page load. Then, the demo determines whether to perform loading of the second user control depending on the command from the bubbled event of the button.

````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" />
<asp:ContentPlaceHolder ID="ContentPlaceHolder1" runat="server" />
<asp:Panel ID="Panel1" runat="server">
    <asp:ContentPlaceHolder ID="ContentPlaceHolder2" runat="server" />
</asp:Panel>
````

This `MasterPage` doesn't contain anything in its code-behind.

A standard content ASPX page:

````ASP.NET
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server" />
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="Server" />
````

The key content page code-behind:

````C#
private Control Content(string id)
{
    return Page.Master.FindControl(id);
}
protected void Page_Load(object sender, System.EventArgs e)
{
    //Load
    Content("ContentPlaceHolder1").Controls.Add(LoadControl("~/Page1.ascx"));
    Content("ContentPlaceHolder1").Controls[1].ID = "UserControl1";
    //Get loaded user control's buttons
    Button AjaxButtonLoad = (Button)Content("ContentPlaceHolder1").FindControl("UserControl1").FindControl("btnLoad");
    Button AjaxButtonClear = (Button)Content("ContentPlaceHolder1").FindControl("UserControl1").FindControl("btnClear");
    //Get the manager and the panel from the MasterPage
    RadAjaxManager AjaxManager = RadAjaxManager.GetCurrent(Page);
    Panel MyPanel = (Panel)Content("Panel1");
    //Add the necessary AJAX settings - buttons update the panel in order to load the second user control there
    AjaxManager.AjaxSettings.AddAjaxSetting(AjaxButtonLoad, MyPanel, null);
    AjaxManager.AjaxSettings.AddAjaxSetting(AjaxButtonClear, MyPanel, null);
}
protected override bool OnBubbleEvent(object source, System.EventArgs args)
{
    CommandEventArgs commandArgs = args as CommandEventArgs;
    //determine whether to load the user control depending on bubbled button command
    if (commandArgs != null)
    {
        if (commandArgs.CommandName == "Load")
        {
            Content("ContentPlaceHolder2").Controls.Add(LoadControl("~/Page2.ascx"));
            Content("ContentPlaceHolder2").Controls[1].ID = "UserControl2";
        }
        else if (commandArgs.CommandName == "Clear")
        {
            //do nothing. the control won't be loaded anyway
        }
    }
    return base.OnBubbleEvent(source, args);
}
````
````VB
Private Function Content(ByVal id As String) As Control
    Return Page.Master.FindControl(id)
End Function

Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
    'Load
    Content("ContentPlaceHolder1").Controls.Add(LoadControl("~/Page1.ascx"))
    Content("ContentPlaceHolder1").Controls(1).ID = "UserControl1"

    'Get loaded user control's buttons
    Dim AjaxButtonLoad As Button = CType(Content("ContentPlaceHolder1").FindControl("UserControl1").FindControl("btnLoad"), Button)
    Dim AjaxButtonClear As Button = CType(Content("ContentPlaceHolder1").FindControl("UserControl1").FindControl("btnClear"), Button)

    'Get the manager and the panel from the MasterPage
    Dim AjaxManager As RadAjaxManager = RadAjaxManager.GetCurrent(Page)
    Dim MyPanel As Panel = CType(Content("Panel1"), Panel)

    'Add the necessary AJAX settings - buttons update the panel in order to load the second user control there
    AjaxManager.AjaxSettings.AddAjaxSetting(AjaxButtonLoad, MyPanel, Nothing)
    AjaxManager.AjaxSettings.AddAjaxSetting(AjaxButtonClear, MyPanel, Nothing)
End Sub

Protected Overrides Function OnBubbleEvent(ByVal source As Object, ByVal args As System.EventArgs) As Boolean
    Dim commandArgs As CommandEventArgs = TryCast(args, CommandEventArgs)

    'determine whether to load the user control depending on bubbled button command
    If commandArgs IsNot Nothing Then
        If commandArgs.CommandName = "Load" Then
            Content("ContentPlaceHolder2").Controls.Add(LoadControl("~/Page2.ascx"))
            Content("ContentPlaceHolder2").Controls(1).ID = "UserControl2"
        ElseIf commandArgs.CommandName = "Clear" Then
            'do nothing. the control won't be loaded anyway
        End If
    End If

    Return MyBase.OnBubbleEvent(source, args)
End Function
````

First **WebUserControl's** code, which is loaded on each page load:

````ASP.NET
<asp:Button ID="btnLoad" runat="server" Text="Load" CommandName="Load" />
<asp:Button ID="btnClear" runat="server" Text="Clear" CommandName="Clear" />
````

**Code-behind**:

````C#
public event EventHandler BtnClick;
protected void Button1_Click(object sender, System.EventArgs e)
{
    if (BtnClick != null)
    {
        BtnClick(sender, e);
    }
}
````
````VB
Public Event BtnClick As EventHandler

Protected Sub Button1_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnLoad.Click
    RaiseEvent BtnClick(sender, e)
End Sub
````

The second `WebUserControl` page is loaded when the **Load** button in the first `WebUserControl` is clicked. It shows some text in the ASPX and has nothing in its code-behind.

````ASP.NET
UserControl2
````


