---
title: Red Dot Shown and File Not Uploaded
description: This article explains why a red dot is shown next to every file during the upload process and provides solutions to resolve the issue.
type: troubleshooting
page_title: Red Dot Shown and File Not Uploaded - Troubleshooting | RadAsyncUpload for ASP.NET AJAX
slug: asyncupload-red-dot-shown-file-not-uploaded-troubleshooting
tags: red dot, file not uploaded, troubleshooting, RadAsyncUpload, ASP.NET AJAX
res_type: kb
---
# Environment
| Property | Value |
| --- | --- |
| Product | RadAsyncUpload for ASP.NET AJAX |
| Version | all |

# Description
I am experiencing an issue where a red dot is shown next to every file I attempt to upload, and the files are not being uploaded successfully.

# Solution
To resolve this issue, follow these steps:
- Check if you have write permission to your temporary folder. If you are hosting your application in IIS, make sure you have assigned additional permissions to the temporary folder. By default, the temporary upload folder is located at `~/App_Data/RadUploadTemp`. Ensure that the folder has full read and write permissions.
- Verify that the `Telerik.Web.UI.WebResource.axd` handler is registered in the `web.config` file. Open the `web.config` file and add the following code snippet within the `<system.web>` section:

```
<system.web>
	<httpHandlers>
  		<add path="Telerik.Web.UI.WebResource.axd" type="Telerik.Web.UI.WebResource" verb="*" validate="false"/>
	</httpHandlers>
</system.web>
```

- Also, ensure that the following code snippet is present within the `<system.webServer>` section:

```
<system.webServer>
	<handlers>
		  <remove name="Telerik_Web_UI_WebResource_axd"/>
		  <add name="Telerik_Web_UI_WebResource_axd" path="Telerik.Web.UI.WebResource.axd" type="Telerik.Web.UI.WebResource" verb="*" preCondition="integratedMode"/>
	</handlers>
</system.webServer>
```

>Note: Test if the `Telerik.Web.UI.WebResource.axd` handler is registered correctly by opening the following URL: `https://[your domain or IP name]/Telerik.web.ui.webresource.axd?type=rau`. If the output is `{"message" : "RadAsyncUpload handler is registered successfully, however, it may not be accessed directly."}`, then your handler is registered correctly.

If the issue persists, consider the following additional tips:
- The file upload will fail if the TemporaryUpload folder is not given enough permissions, even if the permissions of the TargetFolder are set properly. The default temporary upload folder is placed inside the App_data folder, so you have to give full read and write permissions to it as well: ~/App_Data/RadUploadTemp
- Set the `UseApplicationPoolImpersonation` property as explained in the [Application Pool Impersonation](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/troubleshooting/common-issues#application-pool-impersonation) article.
- Exclude the handler from Windows Authentication (NTLM) and Forms Authentication by adding the following code snippet within the `<location path="Telerik.Web.UI.WebResource.axd">` section in the web.config:

```xml
<location path="Telerik.Web.UI.WebResource.axd">
	<system.web>
		<authorization>
			<allow users="?" />
		</authorization>
	</system.web>
</location>
```

- Check if your application uses a valid SSL certificate, as RadAsyncUpload requires it.
- The red dot may be due to a large file upload. Configure the control and your app as explained at https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/functionality/uploading-large-files. 
- Review the network requests in the [Chrome DevTools](https://www.telerik.com/blogs/improve-your-debugging-skills-with-chrome-devtools#inspect-network-requests) or with a tool like Fiddler: https://www.telerik.com/blogs/improve-your-debugging-skills-with-chrome-devtools#inspect-network-requests. It is possible that some other network condition is breaking the requests (for example, a proxy changes or caches the requests while it should not). See what happens with the requests and whether the responses carry useful information (e.g., routing or authentication blocking the request).
- If your application is hosted in a web farm or web garden, follow the guidance provided in the [Web Farm and Load Balancing](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/troubleshooting/web-farm) article.
- For Azure WAF Firewall related issues, configure the Azure Application Gateway web application firewall (WAF) to allow the `WebResource.axd` and `Telerik.Web.UI.WebResource.axd` extensions. Refer to the following articles for more information:
  - [Customize web application firewall rules through the Azure portal](https://learn.microsoft.com/en-us/azure/web-application-firewall/ag/application-gateway-customize-waf-rules-portal)
  - [WAF is blocking ASP.NET website due to Scriptresource.axd](https://stackoverflow.com/questions/52205228/waf-is-blocking-asp-net-website-due-to-scriptresource-axd)
- [Cannot Upload Files From Google Drive on Android](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/troubleshooting/common-issues#cannot-upload-files-from-google-drive-on-android)
- 500 Internal Server Error The cryptographic operation has failed! - This is a common issue explained along with its solution in the [The cryptographic operation has failed! error after upgrade to R1 2020 or later](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/asyncupload-the-cryptographic-operation-has-failed-error-after-upgrade) article.
- Use the OnClienFileUploadError event to capture errors: https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/client-side-programming/onclientfileuploadfailed.
 
  
