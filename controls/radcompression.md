---
title: Compression
page_title: RadCompression
description: Check our Web Forms article about RadCompression.
slug: controls/radcompression
tags: radcompression
published: True
position: 8
CTAControlName: RadCompression
---

# RadCompression


>important RadCompression is deprecated. We advise that you consider using the dynamic content compression feature IIS 7 and later provide.
>
>RadCompression was designed to solve the problem where AJAX requests to dynamic content like aspx pages, and WebResource requests, were not compressed by IIS. This is no longer relevant since IIS 7 and later tackle this problem.
>
> If you are still concerned about the response size, you can consider storing the ViewState on the server instead of using the default hidden field.


This article explains what is RadCompression and contains the following sections:


- [RadCompression](#radcompression)
    - [What is RadCompression?](#what-is-radcompression)
    - [How is RadCompression enabled?](#how-is-radcompression-enabled)
    - [ViewState compression](#viewstate-compression)
    - [RadCompression and SessionPageState](#radcompression-and-sessionpagestate)
    - [How to enable compression for regular postbacks?](#how-to-enable-compression-for-regular-postbacks)
    - [Known issues](#known-issues)
    - [What is the benefit?](#what-is-the-benefit)
    - [Optimization tip summary](#optimization-tip-summary)

{% if site.has_cta_panels == true %}
{% include cta-panel-overview.html %}
{% endif %}

## What is RadCompression?

Simply put, RadCompression is an HttpModule that is shipped with the Telerik® UI for ASP.NET AJAX and is designed to *automatically* compress your AJAX and Web Service responses. In other words, RadCompression will intercept the bits that your server is sending back to a browser (or Silverlight-client, for that matter) and compress them. Once the compressed bits reach the browser, standard browser technology takes over and decompresses the response, so your application can work with it normally. The compression process is completely transparent to your client-side code (JavaScript or Silverlight) and your server-side code. It simply reduces the number of bits that are sent over the wire (from your server to your client) and thus -in theory - improves your page performance by reducing the TTLB (time to last byte).



RadCompression is designed based on other HTTPcompression tools, such as the built-in **HTTP Compression** in IIS7 and higher versions. By adding RadCompression to your project, you start compressing your **AJAX** and **Web Service** responses.

**RadCompression**	will automatically detect and compress requests that expect these content response types	(as found in the HTTP request's "**ContentType**" header or "**AcceptsTypes**" header):

* application/x-www-form-urlencoded

* application/json

* application/xml

* application/atom+xml

These types generally reflect the content types returned by AJAX Web Services, ADO.NET Data Services, and AJAX UpdatePanel responses, though there certainly are other scenarios that return these content types (such as a typical RSS feed). If a browser supports compression (most modern browsers do) and RadCompression	is enabled, all content of this type will be compressed. The one exception is IE6, which does not support this compression well, so RadCompression will automatically ignore requests coming fromIE6 clients.

## How is RadCompression enabled?

Enabling RadCompression could not be easier. It is a simple matter of adding a HttpModule registration to the site's web.config. Specifically, you need the following:

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



By default the RadCompression module will compress AJAX requests only (with the content type headers specified above), however you can enable compression for regular postbacks as well setting the *enablePostbackCompression* property to true (its default value is false, see web.config section below).You also have the option to disable the compression for particular pages if necessary. To do that use the *RadCompressionSettings* attribute of the page in question:



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


Another aspect of the RadCompression model allows you to exclude particular request handlers through the RadCompression web.configconfiguration settings. Here is an example how this can be done 
>note 
>the *matchExact* attribute which determines whether the rule will be forced for the specified path only or globally for the entire web site/web application project):

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



>note When using **IIS dynamic compression** enabling RadCompression is not required as this will result in double compression of the response.
>


## ViewState compression

When you enable the RadCompression module, you get the entire response compressed *including the ViewState*. However, you also have the option to turn on only ViewState compression and store it either in a hidden field, or in the Session (to pass and retrieve it from there on form submits), without compressing the rest of the response. For this purpose you can use additional page adapters which override the default page adapter for viewstate storage. To enable viewstate compression you can register these RadCompression controlAdapters using *BrowserFile.browser* file in *App_Browsers* folder of your web site/project. Here is how to register a hidden field which will be used as a container for the compressed page viewstate:

````ASP.NET
<browsers>  
 <browser refID="Default">   
   <controlAdapters>  
     <adapter controlType="System.Web.UI.Page" adapterType="Telerik.Web.UI.RadHiddenFieldPageStateCompression" />  
   </controlAdapters>  
 </browser>  
</browsers>   			
````



To use this adapter you *do not need to enable RadCompression module* through the web.config file as described above.**RadHiddenFieldPageStateCompression** might be used separately from the RadCompression module in cases where only viewstate compression is needed.Using both at the same time could result in compressing the ViewState twice.

You can also store the compressed ViewState in the Session:

````ASP.NET
<browsers>  
 <browser refID="Default">   
   <controlAdapters>  
     <adapter controlType="System.Web.UI.Page" adapterType="Telerik.Web.UI.RadSessionPageStateCompression" />  
   </controlAdapters>  
 </browser>  
</browsers>
````



In this case enabling RadCompression at the same time would be fine, as when the compressed ViewState is saved in Session, it is not included in the response, so the RadCompression module does not compress it.

## RadCompression and SessionPageState

Due to the fact that **RadCompression** module takes advantage of theASP.NET's **SessionPageStatePersister** there are some scenarios where you may need to fine-tune its settings:

* **ControlState** - by default, the **SessionPageStatePersister** doesn't add the **ControlState** to the **Session** so you may need to add it manually:

    **ASP.NET**

        <system.web>
            <browserCaps>
                <case>
                    RequiresControlStateInSession=true
                </case>
            </browserCaps>
        </system.web> 


* **Page history** - in applications where you have a lot of popup windows, it is important to increase the	amount of the pages that are persisted in the **Session**. The default value of the history size is 9.

    **web.config**

        <system.web>   
        <sessionPageState historySize="15" />
        </system.web> 


>note When IIS **dynamic compression** is enabled the **ViewState** will be automatically compressed even if the **RadCompression** module is not enabled.
>


## How to enable compression for regular postbacks?

You can enable the postback compression by setting the *enablePostbackCompression* property of theRadCompression module to true (the default value is *false*). This can be done at application level in the following manner:

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



>note Note that setting the same attribute at page level will override the web.config settings because it will be treated with higher priority.
>


## Known issues

Here are some of the known issues you can face when using RadCompression.

**1.** *Problem:* When RadCompression is enabled and you are using **.NET 4.0 or .NET 4.5**, event handlers might not be raised in a default document in IIS 7 and higher versions **Integrated Mode.**

*Solution:* This problem is caused by a breaking change in .NET 4.0 described [here](https://www.asp.net/learn/whitepapers/aspnet4/breaking-changes#0.1__Toc256770154). To workaround it one can set **preCondition="managedHandler"** for the RadCompression module. You may also need to remove the **runAllManagedModulesForAllRequests** setting from your web.config if you have it (or set it to false).

**2.** *Problem:* RadControls bound to a WCF services do not work In Classic AppPool scenarios with Windows authentication enabled.

*Solution:* Try removing RadCompression from the HttpModules section of the web.config. We have found out that on some machines RadCompression halts the WCF responses, effectively breaking the pages that consume the services.

**3.** - *Problem:* Control state cannot be loaded properly after a postback. This can happen if the ViewState is stored in the session and popup windows cause a number of postbacks. This causes the session history to be lost for the main page (see the sessionPageState section above).

*Solution:* Disable RadCompression and use the IIS dynamic content compression. Alternatively, you can store the ViewState in the hidden field only. The third option is to increase the history cache but this will consume system resources and will only delay the issue.

## What is the benefit?

You can see the results from eight unique tests made by our evangelist Todd Anglin in the [following blog post](https://blogs.telerik.com/toddanglin/posts/09-01-28/Optimization-Tips-RadCompression-Module.aspx) and in[this blog post](https://blogs.telerik.com/toddanglin/posts/09-02-27/Optimization-Tip-RadCompression-for-ViewState.aspx) concerning the usage of page adapters.

## Optimization tip summary

When it comes to RadCompression, the impact it has on your site just depends on where your users are located. If you have a site that is deployed over the web where latency and connection speeds are unpredictable, reducing the bytes you send over the wire is	an easy way to improve your site's performance. And since RadCompression can literally be implemented with a single change to your	config file, you really do not have much to lose. In a quick word:

**RadCompression is an easy way to reduce the bytes sent over the wire for XHR operations.**

>tip RadCompression is deprecated in favor of the IIS dynamic content compression that solves the same problem at the server level.
