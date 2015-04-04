---
title: Update Initiator's UpdatePanels only
page_title: Update Initiator's UpdatePanels only | UI for ASP.NET AJAX Documentation
description: Update Initiator's UpdatePanels only
slug: ajax/radajaxmanager/how-to/update-initiator's-updatepanels-only
tags: update,initiator's,updatepanels,only
published: True
position: 8
---

# Update Initiator's UpdatePanels only



In the current implementation of RadAjaxManager in case two asp Panels for example are added as updated controls to two different initiators the both asp Panels will be updated on any Ajax request no matter of the initiator.

## 

In the example below no matter that there is no setting in which the first panel updates the second one, on Button1 click event the Label2 nested in the second asp Panel will also be updated:

````ASPNET
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



>tabbedCode

````C#
	public partial class Default : System.Web.UI.Page 
	{
	    protected void Button1_Click(object sender, EventArgs e)
	    {
	        Label1.Text = DateTime.Now.ToString();
	        Label2.Text = DateTime.Now.ToString();
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
>end

## 

Since __Q2 2012 SP2__ release a new property __UpdateInitiatorPanelsOnly__ is added to the RadAjaxManager. By setting its value to “true” (its default value is “false”) only the containers added as UpdatedControls for a specific initiator will be conditionally updated.

````ASPNET
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



By using the markup above only Label1 will be conditionally updated.
