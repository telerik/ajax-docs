---
title: Use Telerik AJAX in Medium Trust
page_title: Use Telerik AJAX in Medium Trust
description: "Learn how to use Telerik UI for ASP.NET AJAX in medium trust."
slug: ajaxmanager/how-to/using-radajax-in-medium-trust
previous_url: ajax/how-to/using-radajax-in-medium-trust, controls/ajaxmanager/how-to/using-radajax-in-medium-trust
tags: telerik, asp, net, ajax, manager, how, to, use, in, medium, trust
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

How can I use Telerik UI for ASP.NET AJAX in Medium Trust? 

## Solution


When your application is running in Medium Trust and you want to use Telerik AJAX on your pages, you need to use any of the following approaches to make Telerik AJAX work properly. Note that in all cases when the application is running in Medium Trust, you can have only one Telerik AJAX control in the whole page hierarchy. Therefore, in complex Master/Content Page applications, it is recommended that you use a single AjaxManager on the Master page which will handle all available Ajax scenarios. This limitation is due to the fact that in Medium Trust the reflection permissions are not granted.


* Inherit your page from the `RadAjaxPage` as shown below:


		````C#
			  
		public partial class MyPage: System.We.UI.Page {}
		//should be changed to:
		public partial class MyPage: Telerik.Web.UI.RadAjaxPage {}
						
		````
		````VB
		Partial Public Class MyPage
			Inherits System.We.UI.Page
		End Class
		'should be changed to:
		Partial Public Class MyPage
			Inherits Telerik.Web.UI.RadAjaxPage
		End Class
		````


* Set the `RestoreOriginalDelegate` property of the Telerik AJAX control to `false`:

		````ASP.NET
		<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" RestoreOriginalRenderDelegate="false">
		</telerik:RadAjaxManager>
			
		Or
			
		<telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server" RestoreOriginalRenderDelegate="false">
		</telerik:RadAjaxPanel>
		````



* Implement the `IRadAjaxPage` interface:



		````C#
		public class MyPage : System.Web.UI.Page, Telerik.Web.UI.IRadAjaxPage
		{
			private System.Web.UI.RenderMethod _onRenderDelegate;
			#region IRadAjaxPage Members
			public void AttachOnRender(System.Web.UI.RenderMethod renderMethod)
			{
			    _onRenderDelegate = renderMethod;
			}
		````
		````VB
		Public Class MyPage
			Inherits System.Web.UI.Page
			Implements Telerik.Web.UI.IRadAjaxPage
			Private _onRenderDelegate As System.Web.UI.RenderMethod
			
			Public Sub AttachOnRender(ByVal renderMethod As System.Web.UI.RenderMethod)
			    _onRenderDelegate = renderMethod
			End Sub
			
			Protected Overloads Overrides Sub Render(ByVal writer As System.Web.UI.HtmlTextWriter)
			    If Not _onRenderDelegate Is Nothing Then
			        _onRenderDelegate(writer, Me)
			    End If
			    MyBase.Render(writer)
			End Sub
		End Class
		````


