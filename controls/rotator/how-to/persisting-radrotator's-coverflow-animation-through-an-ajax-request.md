---
title: Persisting RadRotator's CoverFlow Animation Through an AJAX Request
page_title: Persisting RadRotator's CoverFlow Animation Through an AJAX Request | UI for ASP.NET AJAX Documentation
description: Persisting RadRotator's CoverFlow Animation Through an AJAX Request
slug: rotator/how-to/persisting-radrotator's-coverflow-animation-through-an-ajax-request
tags: persisting,radrotator's,coverflow,animation,through,an,ajax,request
published: True
position: 0
---

# Persisting RadRotator's CoverFlow Animation Through an AJAX Request



## 

In some scenarios you may need to Ajaxify the RadRotator control on your page.	Please keep in mind that if you have set the rotator control in __CoverFlow__ mode (__RotatorType=”CoverFlow”__),	the script that configures its animation options should be registered from the code-behind in order to persist the animation through the Ajax request.

The following example demonstrates how to set the animation options if a RadRotator in __CoverFlow__ mode is placed in an UpdatePanel control.

````ASPNET
		<asp:UpdatePanel ID="UpdatePanel1" runat="server">
			<ContentTemplate>
				<telerik:RadRotator ID="RadRotator1" runat="server" RotatorType="CoverFlow" ScrollDirection="Left,Right"
					Height="233px" ItemHeight="113px" Width="490px" ItemWidth="150px">
					<ItemTemplate>
						<img src="........" alt="" />
					</ItemTemplate>
				</telerik:RadRotator>
				<asp:Button ID="Button1" Text="Send Request" runat="server" />
			</ContentTemplate>
		</asp:UpdatePanel>
````





````C#
		protected void Page_Load(object sender, EventArgs e)
		{
			string script = "var animationOptions = {" +
			 "minScale: 0.8," +
			 "yO: 60," +
			 "xR: -30," +
			 "xItemSpacing: 50," +
			 "matrix: { m11: 1, m12: 0, m21: -0.1, m22: 1 }," +
			 "reflectionHeight: 0.5," +
			 "reflectionOpacity: 1" +
			"};" +
			"Telerik.Web.UI.RadRotatorAnimation.set_scrollAnimationOptions('" + RadRotator1.ClientID + "', animationOptions);";
	
			ScriptManager.RegisterStartupScript(this, this.GetType(), "registerCoverFlowAnimation", script, true);
		}
````
````VB
		Protected Sub Page_Load(sender As Object, e As System.EventArgs) Handles Me.Load
			Dim script As String = "var animationOptions = {" +
			 "minScale: 0.8," +
			 "yO: 60," +
			 "xR: -30," +
			 "xItemSpacing: 50," +
			 "matrix: { m11: 1, m12: 0, m21: -0.1, m22: 1 }," +
			 "reflectionHeight: 0.5," +
			 "reflectionOpacity: 1" +
			"};" +
			"Telerik.Web.UI.RadRotatorAnimation.set_scrollAnimationOptions(""" + RadRotator1.ClientID + """, animationOptions);"
	
			ScriptManager.RegisterStartupScript(Me, Me.[GetType](), "registerCoverFlowAnimation", script, True)
		End Sub
````

