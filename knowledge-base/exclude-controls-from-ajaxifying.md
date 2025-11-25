---
title: Exclude Controls from Ajaxifying 
page_title: Exclude Controls from Ajaxifying 
description: "Learn how to exclude controls from ajaxifying in Telerik UI for ASP.NET AJAX."
slug: ajaxmanager/how-to/exclude-controls-from-ajaxifying
previous_url: ajax/how-to/exclude-controls-from-ajaxifying, controls/ajaxmanager/how-to/exclude-controls-from-ajaxifying
tags: telerik, asp, net, ajax, manager, exclude, controls, from, ajaxifying
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

How can I exclude a control from being AJAX-enabled in the AjaxManager? 

## Solution

By default, the AjaxManager AJAX-enables all controls placed inside. To exclude a control from this logic, use any of the following approaches:

* [(Available as of Q1 2016) Use the `PostBackControls` property](#using-the-postbackcontrols-property).

* [Use the `RegisterPostBackControl` method of the ScriptManager](#using-the-registerpostbackcontrol-method).

* [Disable AJAX with the `OnRequestStart` event in the AjaxPanel and AjaxManager](#disabling-ajax-with-the-onrequeststart-event).

* [Cancel the AJAX request on the `InitializeRequest` event](#cancelling-the-ajax-request-on-the-initializerequest-event).

* [Manually add the `Postback` function](#adding-the-postback-function-manually)

* [Dynamically exclude loaded controls](#excluding-loaded-controls-dynamically)


## Using the PostBackControls Property

As of the Q1 2016 release, a new `PostBackControls` property is exposed for the AjaxManager and AjaxPanel controls. `PostBackControls` accepts a collection of control IDs which will automatically make those controls postback triggers.

````ASP.NET
 <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
 </telerik:RadScriptManager>
 <telerik:RadAjaxPanel ID="RadAjaxPanel1"  PostBackControls="Button2,Button3" runat="server">
	 <asp:Button runat="server" ID="Button1" Text="Ajax" OnClick="Button_Click" />
	 <asp:Button runat="server" ID="Button2" Text="Postback" OnClick="Button_Click" />
     <asp:Button runat="server" ID="Button3" Text="Postback" OnClick="Button_Click" />
	 <asp:Label ID="Label1" runat="server"></asp:Label>
 /telerik:RadAjaxPanel>
````


## Using the RegisterPostBackControl Method

The following example demonstrates how to use the `RegisterPostBackControl` method of the ScriptManager. Note that this approach is not applicable when the page is AJAX-enabled with the AjaxManager.


````ASP.NET
 <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
 </telerik:RadScriptManager>
 <telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server">
	 <asp:Button runat="server" ID="Button1" Text="Ajax" OnClick="Button_Click" />
	 <asp:Button runat="server" ID="Button2" Text="Postback" OnClick="Button_Click" />
	 <asp:Label ID="Label1" runat="server"></asp:Label>
 /telerik:RadAjaxPanel>
````



````C#

protected void Page_Load(object sender, EventArgs e)
	{
	     RadScriptManager1.RegisterPostBackControl(Button2);
	}
protected void Button_Click(object sender, EventArgs e)
	{
	    Label1.Text = DateTime.Now.ToLongTimeString();
	}
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	RadScriptManager1.RegisterPostBackControl(Button2)
End Sub
Protected Sub Button_Click(ByVal sender As Object, ByVal e As EventArgs)
	Label1.Text = DateTime.Now.ToLongTimeString()
End Sub

````


## Disabling AJAX with the OnRequestStart Event

To determine the AJAX initiator and disable AJAX for the current request, use the `OnRequestStart` [client-side event]({%slug ajaxmanager/client-side-programming/events/requeststart%}) handler. The event is fired on each request so on the next request, the same check will be performed. A similar implementation is often used when [exporting from an AJAX-enabled Grid](https://www.telerik.com/products/aspnet-ajax/documentation/controls/grid/how-to/exporting/export-from-ajaxified-grid).

>note All controls that are added in the `UpdatedControls` collection of the AjaxManager AJAX settings will perform a callback instead of a postback. To exclude them from ajaxifying, use the previous approach.


## Cancelling the AJAX Request on the InitializeRequest Event

This approach is suitable for cancelling the AJAX request in a wide range of scenarios. Unlike the `OnRequestStart` event, the `InitializeRequest` event will be triggered for both Telerik AjaxManager and AjaxPanel controls, and the ASP.NET UpdatePanel AJAX controls.

The following example demonstrates how to add your custom logic by using the instance of the `PageRequestManager`. Note that you have to replace the `CONTROL_ID` string with the actual name of the control that triggers the AJAX request.

````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server" />
<script type="text/javascript">
	Sys.WebForms.PageRequestManager.getInstance().add_initializeRequest(initRequest);
	function initRequest(sender, args)
	{
		if (args.get_postBackElement().id.indexOf("CONTROL_ID") != -1)
		{
			args.set_cancel(true);  //stop async request
			sender._form["**EVENTTARGET"].value = args.get_postBackElement().id.replace(/\_/g, "$");
			sender._form["**EVENTARGUMENT"].value = "";
			sender._form.submit();
			return;
		}
	}
</script>
````


## Adding the Postback Function Manually

1. Implement the `realPostBack` function into your `aspx` or `ascx` file.

1. Add a custom `OnClick` attribute to the control, in this case, the Button.

````ASP.NET
<telerik:RadCodeBlock ID="codeblock1" runat="server">
<script type="text/javascript">
	function realPostBack(eventTarget, eventArgument)
	{
	    find("<%= RadAjaxPanel1.ClientID %>").**doPostBack(eventTarget, eventArgument);
	}
</script>
</telerik:RadCodeBlock>
<asp:Button ID="Button1" runat="server" Text="Button" />
<asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>
<telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server">
	<asp:LinkButton ID="LinkButton1" runat="server" Text="PostBack"></asp:LinkButton>
	<asp:LinkButton ID="LinkButton2" runat="server" Text="Ajax"></asp:LinkButton>
</telerik:RadAjaxPanel>
````


The following example demonstrates the code-behind (the `Page_Load` event handler).


````C#
protected void Page_Load(object sender, EventArgs e)
	{
	    if (!Page.IsPostBack)
	    {
	            LinkButton1.Attributes.Add("onclick", string.Format("realPostBack(\"{0}\", \"\"); return false;", LinkButton1.UniqueID));
	    }
	}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
	If Not Page.IsPostBack Then
	    LinkButton1.Attributes.Add("onclick", String.Format("realPostBack('{0}', ''); return false;", LinkButton1.UniqueID))
	End If
End Sub
````


If you do not have a control that registers the `doPostBack` function on the page, you have to add the following line in the `Page_Load` as well:



````C#

this.Page.ClientScript.GetPostBackEventReference(this, "");

````
````VB
Me.Page.ClientScript.GetPostBackEventReference(Me, "")
````


This will come in handy when you want a single control to perform the postback for your scenario or if you want to upload files from a control in the AjaxPanel.

## Excluding Loaded Controls Dynamically

If you are loading the user control dynamically, the `if (!Page.IsPostBack)` code in the `Page_Load` event handler of the previous example will never be executed. You can check for the attached `OnClick` event instead of the `IsPostBack`.


````C#

protected void Page_Load(object sender, EventArgs e)
	{
	    bool isOnClickAttached = false;
	    IEnumerator keys = this.CheckBox1.Attributes.Keys.GetEnumerator();
	    while (keys.MoveNext())
	    {
	        if (keys.Current.Equals("onClick"))
	        {
	            isOnClickAttached = true;
	             break;
	         }
	    }
	    if (!isOnClickAttached)
	        this.CheckBox1.Attributes.Add("onClick", string.Format("realPostBack(\"{0}\", \"\"); return false;", this.CheckBox1.UniqueID));
	}

````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	        Dim isOnClickAttached As Boolean = False
	        Dim keys As IEnumerator = Me.CheckBox1.Attributes.Keys.GetEnumerator
	        While keys.MoveNext
	            If keys.Current.Equals("onClick") Then
	                isOnClickAttached = True
	                'TODO: Warning!!! break;If
	            End If
	        End While
	        If Not isOnClickAttached Then
	            Me.CheckBox1.Attributes.Add("onClick", String.Format("realPostBack(\""{0}\"", \""\""); return false;", Me.CheckBox1.UniqueID))
	        End If
End Sub
````

