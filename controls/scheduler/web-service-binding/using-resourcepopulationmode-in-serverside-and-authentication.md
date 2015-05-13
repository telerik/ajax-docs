---
title: Using ResourcePopulationMode in ServerSide and Authentication
page_title: Using ResourcePopulationMode in ServerSide and Authentication | RadScheduler for ASP.NET AJAX Documentation
description: Using ResourcePopulationMode in ServerSide and Authentication
slug: scheduler/web-service-binding/using-resourcepopulationmode-in-serverside-and-authentication
tags: using,resourcepopulationmode,in,serverside,and,authentication
published: True
position: 6
---

# Using ResourcePopulationMode in ServerSide and Authentication



If you set **ResourcePopulationMode**="ServerSide" and use **authentication** as shown below:

````ASPNET
	
<telerik:radscheduler runat="server" id="RadScheduler1">       
   <WebServiceSettings Path="../SchedulerWebService.asmx" ResourcePopulationMode="ServerSide" />
</telerik:radscheduler> 
	
````



````XML
	
<system.web>
   <authentication mode="Forms">
	 <forms cookieless="UseCookies"
	   loginUrl="~/login.aspx"/>
   </authentication>
   <authorization>
	 <deny users="?"/>
	 <allow users="*"/>
   </authorization>
</system.web>     
	
````



you may experience the following error (or similar):

>caution  *The remote server returned an error: (401) Unauthorized.* 
>


The solution is to set the authentication cookie in **ResourcesPopulating**:





````C#
	     
using System.Net;
using System.Web;
using System.Web.Security;
//
protected void RadScheduler1_ResourcesPopulating(object sender, Telerik.Web.UI.ResourcesPopulatingEventArgs e)
{
   HttpCookie cookie = FormsAuthentication.GetAuthCookie(User.Identity.Name, false);
   string cookieHeader = string.Format("{0}={1}", cookie.Name, cookie.Value);
   e.Headers.Add(HttpRequestHeader.Cookie, cookieHeader);
} 
			
````
````VB.NET

Imports System.Web
Imports System.Net
Imports System.Web.Security
''
Protected Sub RadScheduler1_ResourcesPopulating(ByVal sender As Object, ByVal e As Telerik.Web.UI.ResourcesPopulatingEventArgs)
	Dim cookie As HttpCookie = FormsAuthentication.GetAuthCookie(User.Identity.Name, False)
	Dim cookieHeader As String = String.Format("{0}={1}", cookie.Name, cookie.Value)
	e.Headers.Add(HttpRequestHeader.Cookie, cookieHeader)
End Sub
	
````


Another scenario when the **"401: Unauthorized"** error may be seen is when **"Windows authentication"** is used and the **ResourcePopulationMode**="ServerSide". In this case you should declare the NetWork credentials in the **ResourcesPopulating** event as it is done below. This only other thing that have to be done is to turn the impersonation off of because of the Double Hop issue that may occur as is explained here:

````C#
	     
void RadScheduler1_ResourcesPopulating(object sender, ResourcesPopulatingEventArgs e) 
{ 
 	var a = new NetworkCredential(); 
	a.UserName = Page.User.Identity.Name; 
	a.Password = "******"; 
	e.Credentials = a; 
} 
			
````
````VB.NET
	
Private Sub RadScheduler1_ResourcesPopulating(sender As Object, e As ResourcesPopulatingEventArgs)

	Dim a = New NetworkCredential()
	a.UserName = Page.User.Identity.Name
	a.Password = "******"
	e.Credentials = a
End Sub
	
````

