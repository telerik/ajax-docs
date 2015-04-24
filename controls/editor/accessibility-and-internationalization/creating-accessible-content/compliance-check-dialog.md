---
title: Compliance Check Dialog
page_title: Compliance Check Dialog | RadEditor for ASP.NET AJAX Documentation
description: Compliance Check Dialog
slug: editor/accessibility-and-internationalization/creating-accessible-content/compliance-check-dialog
tags: compliance,check,dialog
published: True
position: 6
---

# Compliance Check Dialog



## 



Starting from Q3 2010, RadEditor for ASP.NET AJAX offers a new Compliance Check Dialog (CSDialog) to verify the editor content. The compliance check dialog is developed by [HiSoftware](http://www.hisoftware.com/) and integrates with their [Compliance Sheriff](http://www.hisoftware.com/products/compliancesheriff.htm) product. The [Accessible Editor](http://demos.telerik.com/aspnet-ajax/editor/examples/accessibleeditor/defaultcs.aspx) demo page shows the RadEditor control with the compliance check tool (the green check mark in the editor toolbar).



Here are the steps to enable the Compliance Check Dialog in your application:

1. Add the button named CSDialog to the toolbar of RadEditor. You can see how to add a button in this article: [Adding Standard Buttons]({%slug editor/functionality/toolbars/buttons/add-standard-buttons%}).

1. Put the following CSDialog web service declaration in the Web.config file between the <configuration> tags:

````XML
	    <system.servicemodel>
	        <bindings>
	         <customBinding>
	          <binding name="wsHttpEndpointBasic">
	           <textMessageEncoding maxReadPoolSize="64" maxWritePoolSize="16"
	           messageVersion="Soap12" writeEncoding="utf-8">
	            <readerQuotas maxDepth="32" maxStringContentLength="8192" maxArrayLength="16384"
	            maxBytesPerRead="4096" maxNameTableCharCount="16384" />
	           </textMessageEncoding>
	          </binding>
	         </customBinding>
	         <wsHttpBinding>
	          <binding name="wsHttpEndpointBasic1" closeTimeout="00:01:00"
	          openTimeout="00:01:00" receiveTimeout="00:10:00" sendTimeout="00:01:00"
	          bypassProxyOnLocal="false" transactionFlow="false" hostNameComparisonMode="StrongWildcard"
	          maxBufferPoolSize="524288" maxReceivedMessageSize="524288" messageEncoding="Text"
	          textEncoding="utf-8" useDefaultWebProxy="true" allowCookies="false">
	           <readerQuotas maxDepth="32" maxStringContentLength="524288" maxArrayLength="16384"
	           maxBytesPerRead="4096" maxNameTableCharCount="16384" />
	           <reliableSession ordered="true" inactivityTimeout="00:10:00"
	           enabled="false" />
	           <security mode="None" />
	          </binding>
	         </wsHttpBinding>
	        </bindings>
	        <client>
	         <endpoint binding="customBinding" bindingConfiguration="wsHttpEndpointBasic"
	         contract="BasicServiceReference.Basic" name="wsHttpEndpointBasic" />
	         <endpoint address=http://api.hisoftware.com/Service.svc binding="wsHttpBinding"
	         bindingConfiguration="wsHttpEndpointBasic1" contract="BasicServiceReference.Basic"
	         name="wsHttpEndpointBasic1">
	         </endpoint>
	        </client>
	    </system.servicemodel>
````

To unlock the dialog, contact [HiSoftware](http://www.hisoftware.com/) for a CSApiKey key and register it in the appSetting web.config section as shown below:

````XML
	    <appSettings>
	     <add key="CSApiKey" value="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"/>
	    </appSettings> 
````


