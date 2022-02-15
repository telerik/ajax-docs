---
title: Compression
page_title: Compression
description: "Learn more about the Telerik UI for ASP.NET AJAX Compression module and the ways for compression it provides."
slug: controls/radcompression
previous_url: controls/radcompression
CTAControlName: RadCompression
tags: radcompression
published: True
position: 2
---

# Compression

>The Telerik UI for ASP.NET AJAX Compression module is now deprecated. It is recommended that you use the IIS 7 or later dynamic content compression feature. If you are still concerned about the response size, consider storing the ViewState on the server instead of using the default hidden field.

The Compression module was initially designed for solving issues when AJAX requests to dynamic content, such as ASPX pages and WebResource requests, were not compressed by IIS.

This article explains what the Compression feature is and contains the following sections:

- [Compression Overview](#compression-overview)
- [Enabling Compression](#enabling-compression)
- [ViewState compression](#viewstate-compression)
- [Compression and SessionPageState](#compression-and-sessionpagestate)
- [Enabling compression for regular postbacks](#enabling-compression-for-regular-postbacks)
- [Known issues](#known-issues)
- [Benefits](#benefits)
- [Optimization tip summary](#optimization-tip-summary)

{% if site.has_cta_panels == true %}
{% include cta-panel-overview.html %}
{% endif %}

## Compression Overview

Simply put, the Telerik UI for ASP.NET AJAX Compression is an HttpModule that is shipped with the suite and is designed to automatically compress your AJAX and Web Service responses. Compression intercepts the bits that your server is sending back to a browser (or Silverlight-client, for that matter) and compress them. Once the compressed bits reach the browser, standard browser technology takes over and decompresses the response, so your application can work with it normally.

The compression process is completely transparent to your client-side code (JavaScript or Silverlight) and your server-side code. It reduces the number of bits that are sent over the wire (from your server to your client) and thus improves your page performance by reducing the time to last byte (TTLB).

The Compression feature is designed based on other HTTPcompression tools, such as the built-in HTTP Compression in IIS7 and later versions. By adding the Compression to your project, you start compressing your AJAX and Web Service responses.

Compression automatically detects and compresses requests that expect the following content response types (as found in the HTTP request's `ContentType` or `AcceptsTypes` headers):

* `application/x-www-form-urlencoded`

* `application/json`

* `application/xml`

* `application/atom+xml`

Generally, these types reflect the content types returned by AJAX Web Services, ADO.NET Data Services, and AJAX UpdatePanel responses, though there certainly are other scenarios that return these content types (such as a typical RSS feed).

If a browser supports compression (most modern browsers do) and the Compression feature	is enabled, all content of this type will be compressed. The one exception is IE6, which does not support this compression well, so the Compression will automatically ignore requests coming fromIE6 clients.

## Enabling Compression

To enable Compression, add an `HttpModule` registration to the `web.config` file of the site. Specifically, you need the following implementation:

````web.config
<httpModules>
    ...
    <!-- Add this line exactly as is - the name value is important -->
    <add name="RadCompression" type="Telerik.Web.UI.RadCompression" />
</httpModules>
<!-- If you're using IIS7, then add this, too-->
<system.webServer>
 <modules>
   ...
   <add name="RadCompression" type="Telerik.Web.UI.RadCompression" />
 </modules>
...     
</system.webServer>		
````

By default, the Compression module will compress AJAX requests only (with the content type headers specified above). However, you can enable compression for regular postbacks as well setting the `enablePostbackCompression` property to `true`, which is `false` by default. You also have the option to disable the compression for particular pages if necessary by using the `RadCompressionSettings` attribute of the page in question:

````C#     
[Telerik.Web.UI.RadCompressionSettings(HttpCompression = Telerik.Web.UI.CompressionType.None)]  
public partial class Default_Cs : System.Web.UI.Page
{
    ...
}
````
````VB
<Telerik.Web.UI.RadCompressionSettings(HttpCompression:=Telerik.Web.UI.CompressionType.None)> _
Partial Public Class _Default
    Inherits System.Web.UI.Page
    '...
End Class
````

Another aspect of the Compression model allows you to exclude particular request handlers through the `web.configconfiguration` settings of the module. Note that the `matchExact` attribute determines whether the rule will be forced for the specified path only or globally for the entire web site or web application project

When you are using IIS dynamic compression, enabling the Compression feature is not required as this will result in doubling the compression of the response.


````web.config
<configSections>
....................
<sectionGroup name="telerik.web.ui">
      <section name="radCompression" type="Telerik.Web.UI.RadCompressionConfigurationSection, Telerik.Web.UI, PublicKeyToken=121fae78165ba3d4" allowDefinition="MachineToApplication" requirePermission="false"/>
</sectionGroup>
....................
</configSections>
<telerik.web.ui>  
    <radCompression>   
        <excludeHandlers>
            <!--This will match only the defaultcs.aspx file inside a grid folder in web site root-->
            <add handlerPath="grid/defaultcs.aspx" matchExact="true"/>
            <!--This will match every defaultvb.aspx file regardless of its location in the web site-->
            <add handlerPath="defaultvb.aspx" matchExact="false"/>  
            <!--This will match the handlers of all pages which reside in the MyFolder sub-folder of the web site-->  
            <add handlerPath="MyFolder/" matchExact="false"/>
        </excludeHandlers>
    </radCompression> 	
</telerik.web.ui>
````

## ViewState Compression

When you enable the Compression module, you get the entire response compressed including the ViewState.

However, you can turn on only the ViewState compression and store it either in a hidden field or in the `Session` to pass and retrieve it from there on form submits without compressing the rest of the response. For this purpose, you can use additional page adapters which override the default page adapter for the ViewState storage.

To enable the ViewState compression, register these Compression `controlAdapters` by using the `BrowserFile.browser` file in the `App_Browsers` folder of your project.

The following example demonstrates how to register a hidden field which will be used as a container for the compressed page ViewState.

````ASP.NET
<browsers>  
 <browser refID="Default">   
   <controlAdapters>  
     <adapter controlType="System.Web.UI.Page" adapterType="Telerik.Web.UI.RadHiddenFieldPageStateCompression" />  
   </controlAdapters>  
 </browser>  
</browsers>   			
````

To use this adapter, you do not need to enable the Compression module through the `web.config` file as described above. You can use `RadHiddenFieldPageStateCompression`  separately from the Compression module in cases where only the ViewState compression is needed. Using both at the same time can result in compressing the ViewState twice.

The following example demonstrates how to store the compressed ViewState in the `Session`. In this case, enabling the Compression module at the same time is fine because when the compressed ViewState is saved in `Session`, it is not included in the response and the Compression module will not compress it.

````ASP.NET
<browsers>  
 <browser refID="Default">   
   <controlAdapters>  
     <adapter controlType="System.Web.UI.Page" adapterType="Telerik.Web.UI.RadSessionPageStateCompression" />  
   </controlAdapters>  
 </browser>  
</browsers>
````

## Compression and SessionPageState

Due to the fact that the Compression module takes advantage of the ASP.NET `SessionPageStatePersister`, in some scenarios you may need to fine-tune its settings:

* `ControlState`&mdash;By default, the `SessionPageStatePersister` doesn't add the `ControlState` to the `Session` so you may need to add it manually.

    **ASP.NET**

        <system.web>
            <browserCaps>
                <case>
                    RequiresControlStateInSession=true
                </case>
            </browserCaps>
        </system.web>


* `Page history`&mdash;In applications where you have a lot of popup windows, it is important to increase the	amount of the pages that are persisted in the `Session`. The default value of the history size is `9`. Note that when the IIS dynamic compression is enabled, the ViewState will be automatically compressed even if the Compression module is not enabled.

    **web.config**

        <system.web>   
        <sessionPageState historySize="15" />
        </system.web>


## Enabling Compression for Regular Postbacks

You can enable the postback compression by setting the `enablePostbackCompression` property of the Compression module to `true` (the default value is `false`).

The following example demonstrates how to do this at the application level. Note that setting the same attribute at page level will override the `web.config` settings because it will be treated with higher priority.

````web.config
<configSections>
....................
<sectionGroup name="telerik.web.ui">
      <section name="radCompression" type="Telerik.Web.UI.RadCompressionConfigurationSection, Telerik.Web.UI, PublicKeyToken=121fae78165ba3d4" allowDefinition="MachineToApplication" requirePermission="false"/>
</sectionGroup>
....................
</configSections>
<telerik.web.ui>  
   <radCompression enablePostbackCompression="true"/>
</telerik.web.ui> 		
````

## Known Issues

Tis section lists some of the common known issues you might encounter when using the Compression module.

1. **Problem** When Compression is enabled and you are using .NET 4.0 or .NET 4.5, event handlers might not be raised in a default document in the Integrated Mode of IIS 7 and later versions.

  **Solution** This problem is caused by a breaking change in .NET 4.0 described [here](https://www.asp.net/learn/whitepapers/aspnet4/breaking-changes#0.1__Toc256770154). To work around the issue, set `preCondition="managedHandler"` for the Compression module. You may also need to remove the `runAllManagedModulesForAllRequests` setting from your `web.config` if you have it, or, alternatively, set it to `false`.

1. **Problem** Controls bound to WCF services do not work in classic AppPool scenarios with Windows authentication enabled.

  **Solution** Try removing the Compression from the HttpModules section of the `web.config`. On some machines the Compression module halts the WCF responses effectively breaking the pages that consume the services.

1. **Problem** The control state cannot be loaded properly after a postback. This can happen if the ViewState is stored in the session and popup windows cause a number of postbacks, which causes the session history to be lost for the main page.

  **Solution** Disable the Compression module and use the IIS dynamic content compression. Alternatively, you can store the ViewState in the hidden field only. Yet another option is to increase the history cache but this will consume system resources and will only delay the issue.

## Benefits

For more information about using page adapters, refer to the results from eight unique tests made by evangelist Todd Anglin in the [following blog post](https://blogs.telerik.com/toddanglin/posts/09-01-28/Optimization-Tips-RadCompression-Module.aspx) and in [this blog post](https://blogs.telerik.com/toddanglin/posts/09-02-27/Optimization-Tip-RadCompression-for-ViewState.aspx).

## Optimization Tip Summary

The impact the usage of the Compression module has on your site depends on the location of your users. If you have a site that is deployed over the web where latency and connection speeds are unpredictable, reducing the bytes you send over the wire is	an easy way to improve your site performance. And since the Compression can literally be implemented with a single change to your	`config` file, you do not have much to lose. Therefore, using the Compression is an easy way to reduce the bytes sent over the wire for XHR operations.

Note that the Compression approach is now deprecated in favor of the IIS dynamic content compression that solves the same problem at the server level.
