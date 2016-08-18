---
title: Common Issues
page_title: Common Issues | RadAsyncUpload for ASP.NET AJAX Documentation
description: Common Issues
slug: asyncupload/troubleshooting/common-issues
tags: common,issues
published: True
position: 0
previous_url: controls/asyncupload/troubleshooting/overview
---

# Common Issues

This help article lists the most common issues one can face when using the **RadAsyncUpload** control and offers possible solutions for them.


##  Missing Handler Registration

One of the most common cause for failures is a missing or incorrect **Telerik.Web.UI.WebResource.axd** handler registration.

Detailed information on how to register the handler can be found here: [Web Resources Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/web-resources-troubleshooting%})

You can quickly check if the handler is registered by accessing it directly: `http://<site root>/Telerik.Web.UI.WebResource.axd` This request should succeed and return a blank page.

## RadAsyncUpload's Flash module and Windows or Forms Authentication

If Flash module is used (out of the four supported RadAsyncUpload upload modules) the RadAsyncUpload handler must be excluded from Windows Authentication (NTLM) and Forms Authentication, since the Flash module will not authenticate in either mode.	


````XML
<location path="Telerik.Web.UI.WebResource.axd">   
    <system.web>       
        <authorization>
            <allow users="*" />       
        </authorization>   
    </system.web>
</location> 
````

Anonymous Authentication must be enabled in IIS. If AA is disabled, the RadAsyncUpload Flash module should not be used. It can be disabled by inserting this script right before the control definition on the page:


````ASP.NET
<script type="text/javascript">
    Telerik.Web.UI.RadAsyncUpload.Modules.Flash.isAvailable = function () { return false; }
</script> 
````

## Uploading Files Over Secure Connections (HTTPS)

Make sure you're using a valid SSL certificate. If the server uses a self-signed certificate add it as a trusted certificate to your browser.

## Application Pool Impersonation

The **UseApplicationPoolImpersonation** property is implemented in Q3.2012. If set to **true** and a user does not have permission to the **Temporary/TargetFolder** the control can impersonate the Application Pool Identity upon saving the file and this way allow an easier permission configuration. For example when a user is trying to upload a file and have no write permissions RadAsyncUpload impersonates them form the ones that are set to the Application Pool itself. **UseApplicationPoolImpersonation** is working only if the **identity(impersonate="true" property)** in the system.web section of the web.config is set. 

## Using EnableHandlerDetection Property

The **EnableHandlerDetection** propery is available since Q3.2013. By default it is set to **true** and will cause an error to be thrown if the Telerik Web Resource handler (Telerik.Web.UI.WebResource.axd) is not registered in the web.config. If for some reason you need to use the RadAsyncUpload without the handler you can set the property to **false**.

## IE10 Browser does not Support Upload of 0 Bytes Size File.

IE10 browser uploading of zero byte files in not possible currently when using FileApi upload module and that is why RadAsyncUpload will throw an exception in the OnClientFileUploadFailed event with error message: "IE10 browser does not support upload of 0 bytes size file." You can handle it and inform the user about this browser limitation.


## See Also
