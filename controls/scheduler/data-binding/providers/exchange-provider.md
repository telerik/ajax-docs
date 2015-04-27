---
title: Exchange Provider
page_title: Exchange Provider | RadScheduler for ASP.NET AJAX Documentation
description: Exchange Provider
slug: scheduler/data-binding/providers/exchange-provider
tags: exchange,provider
published: True
position: 5
---

# Exchange Provider



## 

The provider model supported by RadScheduler can be used for synchronization with multitude of data sources. The provider uses Exchange Web Services over HTTP/HTTPS as means to communicate with the Exchange server.

**Distribution**

The Exchange provider is distributed as web site project in our [RadScheduler SDK](https://github.com/telerik/aspnet-sdk/tree/master/Scheduler) and the source code of the provider is located in the App_Code folder.

**Usage**

>note Please be aware that Reminders functionality is not supported when Exchange provider is used.
>


You are able to instantiate the provider through code. This allows you to provide different server URL and credentials, for example, depending on the current user.

For example:

````C#
	
	    protected void Page_Init(object sender, EventArgs e)
	    {
	        ExchangeSchedulerProvider provider =
	            new ExchangeSchedulerProvider(@"https://yourURL.com/EWS/Exchange.asmx", "username", "password", "domain", "CalendarName");
	
	        // Alternatively, you can pass in existing credentials (NetworkCredential object):
	        // new ExchangeSchedulerProvider("https://dc1.litwareinc.com/EWS/Exchange.asmx", credentials);
	        RadScheduler1.Provider = provider;
	    }  
	
````



You can configure the provider entirely declaratively. First you need to add the following configuration section to your web.config file:

````XML
	
	<configuration>
	   <configSections>
	       <sectionGroup name="telerik.web.ui">
	           <section name="radScheduler"
	type="Telerik.Web.UI.RadSchedulerConfigurationSection, Telerik.Web.UI, PublicKeyToken=121fae78165ba3d4"
	allowDefinition="MachineToApplication" requirePermission="false"/>
	       </sectionGroup>
	   </configSections>
	</configuration> 
	
````



Then add the provider section itself. Be sure to specify the correct server URL, username, password and domain:

````XML
	
	<configuration>
	   <telerik.web.ui>
	       <radScheduler defaultAppointmentProvider="Integrated">
	           <appointmentProviders>
	               <add  name="ExchangeSchedulerProvider" type="Telerik.Web.Examples.Scheduler.ExchangeSchedulerProvider"
	serverUrl="https://dc1.litwareinc.com/EWS/Exchange.asmx"
	username="wl" password="pass@word1" domain="litwareinc" />
	           </appointmentProviders>
	       </radScheduler>
	   </telerik.web.ui>
	</configuration> 
	
````



The provider is now set up and will be shared by all RadScheduler instances that are configured to use it. This is done by setting the ProviderName:

````ASPNET
	
	<telerik:RadScheduler runat="server" ID="RadScheduler1"
	ProviderName="ExchangeSchedulerProvider">
	</telerik:RadScheduler>  
	
````



**Reference**

* The Exchange provider uses proxies generated using the wsdl tool. Complete description of the wsdl tool can be found here: [http://msdn.microsoft.com/en-us/library/7h3ystb6(VS.71).aspx](http://msdn.microsoft.com/en-us/library/7h3ystb6(VS.71).aspx).

* Information about using Exchange Web Services can be found on MSDN: [http://msdn.microsoft.com/en-us/library/bb204119(EXCHG.80).aspx](http://msdn.microsoft.com/en-us/library/bb204119(EXCHG.80).aspx).

**Recommended reading:**

* “Inside Microsoft® Exchange Server 2007 Web Services”, David Sterling, Ben Spain, Michael Mainer, Mark Taylor, Huw Upshall; Microsoft Press, ISBN: 0735623929
