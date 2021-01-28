---
title: The cryptographic operation has failed! error after upgrade to R1 2020 or later
description: The cryptographic operation has failed! error in RadAsyncUpload after upgrade Telerik to version R1 2020(2020.1.114) or later.
type: troubleshooting
page_title: The cryptographic operation has failed error - RadAsyncUpload
slug: asyncupload-the-cryptographic-operation-has-failed-error-after-upgrade
position: 
tags: cryptographic, operation, failed, upgrade, error, cryptographic operation has failed, The cryptographic operation has failed!
ticketid: 1452927
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2020.1.114</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadAsyncUpload for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

In R1 2020, the custom metadata classes(upload configurations) whitelisting is enabled by default - [Whitelist custom metadata types](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security#allowedcustommetadatatypes). If your application uses such configurations, you will need to add them to the `Telerik.Upload.AllowedCustomMetaDataTypes` key in the web.config. 

You need to add the fully qualified name of the class, otherwise you will get a `The cryptographic operation has failed!` error when attempting an upload.

````web.config
<appSettings>
    <add key="Telerik.Upload.AllowedCustomMetaDataTypes" value="SomeNameSpace.SampleAsyncUploadConfiguration;SomeOtherNameSpace.OtherAsyncUploadConfiguration" />
</appSettings>
````

### Other reasons for the error

If adding the `AllowedCustomMetaDataTypes` key or not using custom configuration files do not fix the error, please ensure you have set the necessary encryption keys:

* [ConfigurationEncryptionKey](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security#configurationencryptionkey)
* [ConfigurationHashKey](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security#configurationhashkey)
* [Telerik.Web.UI.DialogParametersEncryptionKey](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/functionality/dialogs/security#dialogparametersencryptionkey), if using RadEditor dialogs

## Solution

The solution is to add all the custom configuration classes to the `Telerik.Upload.AllowedCustomMetaDataTypes` key separated by a semicolon `;`. To find out the fully qualified names, you can use the following approach that lists the items in a label. 

````ASP.NET
<asp:Label Text="Label1" ID="Label1" runat="server" />
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    Label1.Text = typeof(MySampleAsyncUploadConfiguration).AssemblyQualifiedName.Split(',')[0];
}
````

For convenience, you can download the `AsyncUploadGetCustomMetaDataTypes` sample project implementing the suggested approach from the link below. To make it runnable, place the `Telerik.Web.UI.dll` assembly in the bin folder of the project.

* [AsyncUploadGetCustomMetaDataTypes.zip](files/AsyncUploadGetCustomMetaDataTypes.zip).

In the project you will find two pages with two different custom handlers. As you can see, the custom handler that does not have custom configuration, does not need to have anything added to the `Telerik.Upload.AllowedCustomMetaDataTypes` key.


## See Also

* [AsyncUpload Security](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security) article
* [AsyncUpload - Custom Http Handler](https://demos.telerik.com/aspnet-ajax/asyncupload/examples/imageuploader/defaultcs.aspx) online demo
* [How to Create a Custom Handler for RadAsyncUpload](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/how-to/how-to-extend-the-radasyncupload-handler) article
* [RadEditor Security](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/functionality/dialogs/security) article

