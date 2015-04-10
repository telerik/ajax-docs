---
title: Using RadAjax in Medium Trust
page_title: Using RadAjax in Medium Trust | UI for ASP.NET AJAX Documentation
description: Using RadAjax in Medium Trust
slug: ajax/how-to/using-radajax-in-medium-trust
tags: using,radajax,in,medium,trust
published: True
position: 12
---

# Using RadAjax in Medium Trust



## 

When your application is running in Medium trust and you want to use RadAjax on your pages, you need to use one of the following approaches in order to make RadAjax work properly:

1. Inherit your page from __RadAjaxPage__ as shown below:



````C#
	  
	    public partial class MyPage: System.We.UI.Page {}
	    //should be changed to:
	    public partial class MyPage: Telerik.Web.UI.RadAjaxPage {}
				
````
````VB.NET
	    Partial Public Class MyPage
	        Inherits System.We.UI.Page
	    End Class
	    'should be changed to:
	    Partial Public Class MyPage
	        Inherits Telerik.Web.UI.RadAjaxPage
	    End Class
````


1. Set the __RestoreOriginalDelegate__ property of the RadAjax control to __false__:

````ASPNET
	    <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" RestoreOriginalRenderDelegate="false">
	    </telerik:RadAjaxManager>
	
	    Or
	
	    <telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server" RestoreOriginalRenderDelegate="false">
	    </telerik:RadAjaxPanel>
````



1. Implement the __IRadAjaxPage__ interface:



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
````VB.NET
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


Note that in all cases when the application is running in Medium trust you could have only one RadAjax control in the whole page hierarchy. Therefore in complex Master/Content Page applications we suggest using single RadAjaxManager on the Master page which could handle all available Ajax scenarios. The mentioned limitation is due to the fact that in Medium Trust the reflection permissions are not granted.
