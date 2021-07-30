---
title: How to read Telerik appSettings from an external file
description: How to read Telerik appSettings from an external file. Check it now!
type: how-to
page_title: How to read Telerik appSettings from an external file
slug: common-read-telerik-appsettings-from-an-external-file
res_type: kb
---


### HOW TO

Load the Telerik appSettings flags from an external file.

### DESCRIPTION

The UI for ASP.NET AJAX controls provide [a lot of switches and settings you can set from the appSettings section in the web.config]({%slug general-information/web-config-settings-overview %}#control-properties-you-can-set-from-the-webconfig. In some cases you may want to declutter the web.config file and read these settings from a separate file. This can even facilitate deployment and testing, especially if you also use your own flags in the appSettings section.

### SOLUTION

ASP.NET allows you to import sections of the web.config file from an external file that is under the same folder. To do this:

1. copy the `appSettings` section in your desired configuration file (e.g., in *~/App_Data/myAppSettings.config*)
1. remove the contents of the `appSettings` section
1. set the `configSource` attribute of the `appSettings` tag to point to the external file (*configSource="App_Data\myAppSettings.config"*). Note the backslash that denotes a physical path.

You can find attached a small example below. Just add the Telerik assemblies to the `~/bin` folder.

### SEE ALSO

- [MSDN: Using External Configuration Files](https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/connection-strings-and-configuration-files#using-external-configuration-files)
- [How to encrypt the Telerik appSettings keys]({%slug common-how-to-encrypt-the-telerik-appsettings-keys %})
- [Telerik Control Properties You Can Set From the web.config]({%slug general-information/web-config-settings-overview %}#control-properties-you-can-set-from-the-webconfig)


A sample project that demonstrates the approach can be found attached here:

[load-appsettings-from-external-file.zip](files/load-appsettings-from-external-file.zip)


