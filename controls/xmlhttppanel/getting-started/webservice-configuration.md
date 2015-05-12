---
title: WebService Configuration
page_title: WebService Configuration | RadXmlHttpPanel for ASP.NET AJAX Documentation
description: WebService Configuration
slug: xmlhttppanel/getting-started/webservice-configuration
tags: webservice,configuration
published: True
position: 3
---

# WebService Configuration



This article explains how to configure a WebService to work with RadXmlHttpPanel:

1. Add XmlHttpPanel and set **EnableClientScriptEvaluation** to **true**.

1. Right click on the WebSite to **Add New Item** and in the window opened choose "Web Service". Make sure the check-box "Place code in separate file" is checked.

1. Open the newly created "Web Service" class in the App_Code folder of your application.

1. Uncomment the [System.Web.Script.Services.ScriptService] just above the class to enable the Web Service to be called from the XmlHttpPanel.

1. Create a method that returns a string and accepts a single parameter of type object. Mark the method as [WebMethod] i.e.

	__C#__

		[WebMethod]
		public string GetHTML(object context)
		{
			return "Content updated by XmlHttpPanel using WebService at: " + DateTime.Now.ToString();
		}

	__VB__

		<WebMethod> _
		Public Function GetHTML(context As Object) As String
			Return "Content updated by XmlHttpPanel using WebService at: " + DateTime.Now.ToString()
		End Function


The string returned from this method is the actual HTML content that will be pasted within the XmlHttpPanel.

1. Set the **WebMethodPath** property to the “Web Service” (usually the .asmx file), and the **WebMethodName** to the method that will be called by the XmlHttpPanel (i.e. GetHTML).

1. Create an `<input/>` that will call the `set_value()` method of the XmlHttpPanel. Here is how the page with the XMLHttpPanel and the WebService code-behind file should look when accomplishing the steps above:

	__ASP.NET__

	    <asp:ScriptManager ID="ScriptManager1" runat="server">
	    </asp:ScriptManager>
	    <telerik:RadXmlHttpPanel runat="server" ID="RadXmlHttpPanel1" EnableClientScriptEvaluation="true"
	        WebMethodPath="WebService.asmx" WebMethodName="GetHTML">
	    </telerik:RadXmlHttpPanel>
	    <br />
	    <br />
	    <br />
	    <input type="button" value="Set Value" onclick="SetValue();return false;" />
	    <script type="text/javascript">
	        function SetValue()
	        {
	            var panel = $find("<%=RadXmlHttpPanel1.ClientID %>");
	            var array = [];
	            array[0] = "string0";
	            array[1] = "string1";
	            //you can pass any kind of object to the GetHTML method
	            //right now we will pass an array
	            panel.set_value(array);
	        }
	    </script>




	__C#__

		using System;
		using System.Collections.Generic;
		using System.Linq;
		using System.Web;
		using System.Web.Services;
		
		/// <summary>
		/// Summary description for WebService
		/// </summary>
		[WebService(Namespace = "http://tempuri.org/")]
		[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
		// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line.
		[System.Web.Script.Services.ScriptService]
		public class WebService : System.Web.Services.WebService
		{
			public WebService()
			{
				//Uncomment the following line if using designed components
				//InitializeComponent();
			}
		
			[WebMethod]
			public string GetHTML(object context)
			{
				Dictionary<string, object> dictiionary = context as Dictionary<string, object>;
		
				//The value passed to the XmlHttpPanel can be of type object
				object value = dictiionary["Value"];
				string value1 = ((object[])(value))[0].ToString();
				string value2 = ((object[])(value))[1].ToString();
				return "Content updated by XmlHttpPanel using WebService at: "
					+ DateTime.Now.ToString()
					+ "<br/>These are the passed values to the XmlHttpPanel: <strong>" + value1 + " </strong> and  <strong>" + value2 + " </strong>";
			}
		}



	__VB__

		Imports System.Collections.Generic
		Imports System.Linq
		Imports System.Web
		Imports System.Web.Services
		
		''' <summary>
		''' Summary description for WebService
		''' </summary>
		' To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line.
		<WebService([Namespace] := "http://tempuri.org/")> _
		<WebServiceBinding(ConformsTo := WsiProfiles.BasicProfile1_1)> _
		<System.Web.Script.Services.ScriptService> _
		Public Class WebService
			Inherits System.Web.Services.WebService
					'Uncomment the following line if using designed components
					'InitializeComponent();
			Public Sub New()
			End Sub
		
			<WebMethod> _
			Public Function GetHTML(context As Object) As String
				Dim dictiionary As Dictionary(Of String, Object) = TryCast(context, Dictionary(Of String, Object))
		
				'The value passed to the XmlHttpPanel can be of type object
				Dim value As Object = dictiionary("Value")
				Dim value1 As String = DirectCast(value, Object())(0).ToString()
				Dim value2 As String = DirectCast(value, Object())(1).ToString()
				Return (Convert.ToString((Convert.ToString("Content updated by XmlHttpPanel using WebService at: " + DateTime.Now.ToString() + "<br/>These are the passed values to the XmlHttpPanel: <strong>") & value1) + " </strong> and  <strong>") & value2) + " </strong>"
			End Function
		End Class