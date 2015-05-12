---
title: Client-Side WCF Service Binding
page_title: Client-Side WCF Service Binding | RadXmlHttpPanel for ASP.NET AJAX Documentation
description: Client-Side WCF Service Binding
slug: xmlhttppanel/getting-started/client-side-wcf-service-binding
tags: client-side,wcf,service,binding
published: True
position: 4
---

# Client-Side WCF Service Binding





A WCF Service can be used to handle the data request of the RadXmlHttpPanel. The **WcfRequestMethod**, **WcfMethodPath** and the **WcfMethodName** properties should be set and the RadXmlHttpPanel automatically retrieves and loads the data. Similarly as in the Client Callback the client state is not affected. 

A WCF Service requires a couple of extra files to set up, but it is an efficient approach, as no data, other than the Value string, is sent over from the client to the server.

The following steps describe how to configure RadXmlHttpPanel so that it can use a WCF service to update its content:

1. In the properties pane for the RadXmlHttpPanel component, set the WcfRequestMethod, WcfMethodPath and the WcfMethodName properties to identify the Web service:

	* **WcfRequestMethod** - Gets or sets the request method for WCF Service used to populate content GET, POST, PUT, DELETE.
	
	* **WcfServicePath** - Gets or sets a string value that indicates the virtual path of the WCF Service used by the RadXmlHttpPanel.
	
	* **WcfServiceMethod** - Gets or sets a string value that indicates the WCF Service method used by the RadXmlHttpPanel.

1. Setting the Value property of the panel depends on the WcfRequestMethod property. In both cases country is the name of the parameter in the WcfRequestMethod method:

	* If WcfRequestMethod = "POST" the Value property should be set to "{"country": "value"}" or '{"country":"value"}'.
	
	* If WcfRequestMethod = "GET" the Value property should be set to "country=value".

	__ASP.NET__

	    <telerik:RadXmlHttpPanel runat="server" ID="XmlHttpPanelWCF"
		    Value="{&quot;country&quot;:&quot;Argentina&quot;}"
		    WcfServicePath="XmlHttpPanelWcfService.svc"
		    WcfServiceMethod="GetCustomersByCountry"
		    WcfRequestMethod="POST">
	    </telerik:RadXmlHttpPanel>




1. Define the Contracts of the WCF Service in an interface



	__C#__
	
	    [ServiceContract]
	    public interface IXmlHttpPanelWcfService
	    {
	        [OperationContract]
	        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped, ResponseFormat = WebMessageFormat.Json)]
	        string GetCustomersByCountry(string country);
	    }
	

	__VB__
	
	    <ServiceContract()> _
	    Public Interface IXmlHttpPanelWcfService
	        <OperationContract()> _
	        <WebInvoke(Method:="POST", BodyStyle:=WebMessageBodyStyle.Wrapped, ResponseFormat:=WebMessageFormat.Json)> _
	        Function GetCustomersByCountry(ByVal country As String) As String
	    End Interface
	



1. Implement the contract in the WCF Service class:



	__C#__
	
		[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
		public class XmlHttpPanelWcfService : IXmlHttpPanelWcfService
		{
		    public string GetCustomersByCountry(string country)
		    {
		        return "The content of XmlHttpPanel";
		    }
		}
	

	__VB__
	
		<AspNetCompatibilityRequirements(RequirementsMode:=AspNetCompatibilityRequirementsMode.Allowed)> _
		Public Class XmlHttpPanelWcfService
		    Implements IXmlHttpPanelWcfService
		    Public Function GetCustomersByCountry(ByVal country As String) As String
		        Return "The content of XmlHttpPanel"
		    End Function
		End Class
	


1. Define the configuration in web.config:

	__XML__

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




1. Optionally, set the OnClientResponseEnding property to a client-side event handler that handles the response of the WCF Service.

	__JavaScript__

	        function OnClientResponseEnding (sender, args)
	        {
		        //The actual result data is in the [WcfServiceMethod]Result property of the content object.
		        var data = args.get_content().GetCustomersByCountryResult,
		        args.set_cancel(true);
	        } 




1. Optionally, set the OnClientResponseEnded and OnClientResponseError properties to client-side event handlers that respond when the WVF Service has successfully updated the panel’s content or when the WCF Service has generated an error while trying to service the item request, respectively.

	__JavaScript__

	        function OnClientResponseEnded (sender, args)
	        {
	            //...
	        }
	
	        //Fired when the request for the items fails.
	        function OnClientResponseError (sender, args)
	        {
	            // Disable the notifing error alert.
	            args.set_cancelErrorAlert(true);
	            //...
	        }



