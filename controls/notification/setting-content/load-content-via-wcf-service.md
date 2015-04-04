---
title: Load Content Via WCF Service
page_title: Load Content Via WCF Service | UI for ASP.NET AJAX Documentation
description: Load Content Via WCF Service
slug: notification/setting-content/load-content-via-wcf-service
tags: load,content,via,wcf,service
published: True
position: 3
---

# Load Content Via WCF Service



## Load Content Via WCF Service

RadNotification can be configured to perform a WCF Service ajax call to update its content, which in general leads to an improved performance. In order to enable this, you should set the WcfRequestMethod, WcfMethodPath and the WcfMethodName properties of the control.

The following steps describe how to configure RadXmlHttpPanel so that it can use a WCF service to update its:

1. In the properties pane for the RadXmlHttpPanelcomponent, set the WcfRequestMethod, WcfMethodPath and the WcfMethodName properties to identify the Web service:

* __WcfRequestMethod__ - Gets or sets the request method for WCF Service used to populate content GET, POST, PUT, DELETE.

* __WcfServicePath__ - Gets or sets a string value that indicates the virtual path of the WCF Service used by the RadXmlHttpPanel.

* __WcfServiceMethod__ - Gets or sets a string value that indicates the WCF Service method used by the RadXmlHttpPanel.

1. Setting the Value property of RadNotification depends on the WcfRequestMethod property value. In both cases CustomerID is the name of the parameter in the Wcf Service method.In both cases country is the name of the parameter in the WcfRequestMethod method :

* If WcfRequestMethod = “POST” the Value property should be set to '{"CustomerID":"value"}'.

* If WcfRequestMethod = “GET” the Value property should be set to 'CustomerID=value'.

````ASPNET
	    <telerik:RadNotification ID="RadNotification1" runat="server" LoadContentOn="EveryShow"
			WcfRequestMethod="POST"
			WcfServicePath="XmlHttpPanelWcfService.svc"
			WcfServiceMethod="GetCustomerByID"
	    </telerik:RadNotification>
````



1. Define the Contracts of the WCF Service in an interface:



````C#
	    [ServiceContract]
	    public interface IXmlHttpPanelWcfService
	    {
		    [OperationContract]
		    [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
		    ResponseFormat = WebMessageFormat.Json)]
		    string GetCustomerByID(string CustomerID);
	    }
````
````VB
	
	    <ServiceContract()> _
	    Public Interface IXmlHttpPanelWcfService
	        <OperationContract()> _
	        <WebInvoke(Method:="POST", BodyStyle:=WebMessageBodyStyle.Wrapped, ResponseFormat:=WebMessageFormat.Json)> _
	        Function GetCustomerByID(ByVal CustomerID As String) As String
	    End Interface
	
````


1. Implement the contract in the WCF Service class:



````C#
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
	public class XmlHttpPanelWcfService : IXmlHttpPanelWcfService
	{
	    public string GetCustomerByID(string CustomerID)
	    {
	        return "The content of the notification";
	    }
	}
````
````VB
	
	<AspNetCompatibilityRequirements(RequirementsMode:=AspNetCompatibilityRequirementsMode.Allowed)> _
	Public Class XmlHttpPanelWcfService
	    Implements IXmlHttpPanelWcfService
	    Public Function GetCustomersByCountry(ByVal country As String) As String
	        Return "The content of XmlHttpPanel"
	    End Function
	End Class
	
````


1. Define the configuration in web.config:

````XML
	<configuration>
	    <system.serviceModel>
	        <behaviors>
	            <serviceBehaviors>
	                <behavior name="XmlHttpPanelWcfBehavior">
	                    <serviceMetadata httpGetEnabled="true" />
	                    <serviceDebug includeExceptionDetailInFaults="true" />
	                </behavior>
	            </serviceBehaviors>
	            <endpointBehaviors>
	                <behavior name="XmlHttpPanelWcfBehavior">
	                    <webHttp />
	                </behavior>
	            </endpointBehaviors>
	        </behaviors>
	        <services>
	            <service behaviorConfiguration="XmlHttpPanelWcfBehavior" name="XmlHttpPanelWcfService">
	                <endpoint address="" binding="webHttpBinding" contract="IXmlHttpPanelWcfService" behaviorConfiguration="XmlHttpPanelWcfBehavior"/>
	            </service>
	        </services>
	    </system.serviceModel>
	</configuration>
````



1. Optionally, set the OnClientUpdating property to a client-side event handler that handles the response of the WCF Service.

````JavaScript
	        function OnClientUpdating (sender, args)
	        {
		        //The actual result data is in the [WcfServiceMethod]Result property of the content object.
		        var data = args.get_content().GetCustomersByCountryResult,
		        args.set_cancel(true);
	        } 
````



1. Optionally, set the OnClientUpdated and OnClientUpdateError properties to client-side event handlers that respond when the WVF Service has successfully updated the panel’s content or when the WCF Service has generated an error while trying to service the item request, respectively.

````JavaScript
	        function OnClientUpdated (sender, args)
	        {
	            //...
	        }
	
	        //Fired when the request for the items fails.
	        function OnClientUpdateError (sender, args)
	        {
	            // Disable the notifing error alert.
	            args.set_cancelErrorAlert(true);
	            //...
	        }
````


