---
title: Update the UpdatePanels of the Initiator Only
page_title: Update the UpdatePanels of the Initiator Only
description: "Learn how to update the UpdatePanels of the initiator only in Telerik UI for ASP.NET AJAX."
slug: ajaxmanager/how-to/update-initiator's-updatepanels-only
previous_url: ajax/radajaxmanager/how-to/update-initiator's-updatepanels-only, controls/ajaxmanager/how-to/update-initiator's-updatepanels-only
tags: telerik, asp, net, ajax, manager, how, to, update, updatepanels, of, initiator, only
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

In the current implementation of the AjaxManager, if two ASP Panels are added as updated controls to two different initiators, for example, both ASP Panels will be updated on any Ajax request no matter of the initiator.

The example below demonstrates that even though no settings define that the first panel has to update the second one, the `Label2` that is nested in the second ASP Panel will also be updated on the Button1 `click` event:

````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" DefaultLoadingPanelID="RadAjaxLoadingPanel1"
	        runat="server">
	<AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="Panel1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="Panel1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	    <telerik:AjaxSetting AjaxControlID="Panel2">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="Panel2" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>
<div>
<asp:Panel ID="Panel1" runat="server">
<asp:Button ID="Button1" runat="server" Text="Update the first Panel" OnClick="Button1_Click" />
<asp:Label ID="Label1" runat="server" Text="Label1">
</asp:Label>
</asp:Panel>
<br />
<asp:Panel ID="Panel2" runat="server">
<asp:Button ID="Button2" runat="server" Text="Update the second Panel" OnClick="Button2_Click" />
<asp:Label ID="Label2" runat="server" Text="Label2">
</asp:Label>
</asp:Panel>
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" Skin="Default">
</telerik:RadAjaxLoadingPanel>
</div>
````





````C#
public partial class Default : System.Web.UI.Page 
{
	    protected void Button1_Click(object sender, EventArgs e)
	    {
	        Label1.Text = DateTime.Now.ToString();
	        Label2.Text = DateTime.Now.ToString();
	    }
}
````
````VB
Partial Class _Default
Inherits System.Web.UI.Page
Protected Sub Button1_Click(sender As Object, e As EventArgs)
	Label1.Text = DateTime.Now.ToString()
	Label2.Text = DateTime.Now.ToString()
End Sub
	
End Class
````



Since the Q2 2012 SP2 release, the AjaxManager provides a new `UpdateInitiatorPanelsOnly` property which is set to `false` by default. By setting its value to `true`, only the containers added as `UpdatedControls` for a specific initiator will be conditionally updated. By using the markup in the example, only `Label1` will be conditionally updated.

````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" UpdateInitiatorPanelsOnly="true" DefaultLoadingPanelID="RadAjaxLoadingPanel1"
	runat="server">
	<AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="Panel1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="Panel1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	    <telerik:AjaxSetting AjaxControlID="Panel2">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="Panel2" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>
<div>
<asp:Panel ID="Panel3" runat="server">
<asp:Button ID="Button3" runat="server" Text="Update the first Panel" OnClick="Button1_Click" />
<asp:Label ID="Label3" runat="server" Text="Label1">
</asp:Label>
</asp:Panel>
<br />
<asp:Panel ID="Panel4" runat="server">
<asp:Button ID="Button4" runat="server" Text="Update the second Panel" OnClick="Button2_Click" />
<asp:Label ID="Label4" runat="server" Text="Label2">
</asp:Label>
</asp:Panel>
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel2" runat="server" Skin="Default">
</telerik:RadAjaxLoadingPanel>
</div>
````




