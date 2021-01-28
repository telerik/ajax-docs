---
title: Item is null or not an object error Thrown When Using LoD with WCF service
page_title: Item is null or not an object error Thrown When Using LoD with WCF service - RadComboBox
description: Check our Web Forms article about Item is null or not an object error Thrown When Using LoD with WCF service.
slug: combobox/troubleshooting/item-is-null-or-not-an-object-error-thrown-when-using-lod-with-wcf-service
tags: item,is,null,or,not,an,object,error,thrown,when,using,lod,with,wcf,service
published: True
position: 13
---

# Item is null or not an object error Thrown When Using LoD with WCF service



## Problem

When the RadComboBox is using WCF service to load items on demand the following error could occur - **Microsoft JScript runtime error: 'Items' is null or not an object**. This issue is reproduced only when the following set of condition are valid: the Project/WebSite is using .NET framework 4.0, the browser is Internet Explorer, the RadCompression module is enabled and the service method does not return results. This is a problem with the .NET framework itself which we have already logged in MS Connect and its status could be tracked here: [WCF Compression Issue](https://connect.microsoft.com/VisualStudio/feedback/details/597491/wcf-json-calls-do-not-set-correct-content-length-header-when-passed-through-compression-filter-in-iis-non-managed-pool)

## Solution

A solution to this problem would be to either remove the [RadCompression]({%slug controls/radcompression%}) module or to exclude the requests to the WCF service handler from the scope of the RadCompression module. In order to implement the second solution the following lines of code should be added to the web config file:

````ASPNET
<configuration>
  .............
  <configSections>
	<sectionGroup name="telerik.web.ui">
	  <section name="radCompression" type="Telerik.Web.UI.RadCompressionConfigurationSection, Telerik.Web.UI, PublicKeyToken=121fae78165ba3d4" allowDefinition="MachineToApplication" requirePermission="false"/>
	</sectionGroup>
  </configSections>
  <telerik.web.ui>
	<radCompression>
	  <excludeHandlers>
		<add handlerPath="Service.svc" matchExact="false"/>
	  </excludeHandlers>
	</radCompression>
  </telerik.web.ui>
  ............
````



The **handlerPath** is relative to the root of the application and if the service is placed inside a specific folder, it should be also included in the path. The **matchExact** attribute determines whether the rule will be forced for the specified path only or globally for the entire web site/web application project

# See Also

 * [Loading Items from WCF Service]({%slug combobox/load-on-demand/loading-items-from-wcf-service%})

 * [Loading Items from WCF Service Demo](https://demos.telerik.com/aspnet-ajax/combobox/examples/loadondemand/wcf/defaultcs.aspx)
