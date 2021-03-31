---
title: How to encrypt the Telerik appSettings keys
description: Find out how to encrypt the Telerik settings in the web.config.
type: how-to
page_title: How to encrypt the Telerik appSettings keys
slug: common-how-to-encrypt-the-telerik-appsettings-keys
res_type: kb
---

## Description

In some cases you may want to avoid storing information in plain text to improve security. While most of the settings the UI for ASP.NET AJAX controls use are flags, some contain keys or folder paths. To minimize the risk of this data being used without authorization (e.g., by someone who has file access to a shared server), you may want to encrypt the relevant web.config sections.

## Solution

ASP.NET provides the aspnet_regiis tool that allows you to encrypt portions of the web.config, among other things. This process is transparent to the ConfigurationManager claas that the Telerik controls use to fetch the appSettings flags they use.

To encrypt the appSettings section, follow these steps:

 1. Open the Visual Studio Command Prompt. You may need to do this as an Administrator, depending on the machine setup and particular permissions.

 1. Run the following command:

 ````
 aspnet_regiis -pef appSettings "d:\TelerikWebApp1\TelerikWebApp1" -prov "DataProtectionConfigurationProvider"
 ````
 
 where you must replace the sample path with the actual path to the folder containing the web.config file

To decrypt the appSettings section, follow these steps:

 1. Open the Visual Studio Command Prompt. You may need to do this as an Administrator, depending on the machine setup and particular permissions.

 1. Run the following command:

 ````
 aspnet_regiis -pdf appSettings "d:\TelerikWebApp1\TelerikWebApp1"
 ````
 where you must replace the sample path with the actual path to the folder containing the web.config file


## Important Notes

There are a few things you need to keep in mind if you decide to use this:

 * The default encryption is done with the MachineKey. This means that you must encrypt data only on the machine that will consume it. If you encrypt the web.config before deployment the actual server may not be able to read it.

 * Telerik  cannot guarantee the full transparency of this encryption process. We use the ConfigurationManager class to obtain settings from the web.config and if you start see errors or settings not being applied, you may need to remove the encryption.

 * There are many different switches that the aspnet_regiis tool provides, including different syntax for the commands shown above. In our tests they seemed to behave differently on different machines and you may need to review the Microsoft documentation on the tool if you encounter issue (link is available below).

## Expected Results

Here is an example of what you can expect to change in the web.config:

Before:

````
<appSettings>
    <add key="Telerik.Skin" value="Black" />
    <add key="Telerik.ScriptManager.TelerikCdn" value="Disabled" />
    <add key="Telerik.StyleSheetManager.TelerikCdn" value="Disabled" />
    <add key="Telerik.Web.UI.RenderMode" value="lightweight" />
    <add key="Telerik.Web.UI.DialogParametersEncryptionKey" value="YOUR-UNIQUE-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP" />
</appSettings>
````

After:

````
<appSettings configProtectionProvider="DataProtectionConfigurationProvider">
    <EncryptedData>
        <CipherData>
            <CipherValue>AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAt7qilu/CHE6sZnEIuCfShQQAAAACAAAAAAAQZgAAAAEAACAAAADS+iPSr34LAqLLpZcwDquQRbnPVSkMi4/KYji2rAdMOAAAAAAOgAAAAAIAACAAAAClAuC3rESD0qU2qoS4/0pAN8jB7hBiF5MQ0okcnAjtLEADAAAtZZgC5AmyZi9zJJYh2J3mk5W7g8F+agIBhqwpQpVVtCbicXXL83YgsZtiqc0+dgGygJuJvMiEthqCNSYJAv+fxrRGDP1LFGqNA3wrVNFxowqVklBn0c5pXXlorSJG6V0zGx7U4JOLONflNm9kb2QyIBxxbCXR6ZIWkO795l7oz8hBKaC90Sq6LnRNTDcOcZtljpmbExKqezJr7dUJz2Pu4ZxlKtZPTPJ7OOjGxFCpULOwQMkh0Zth44aXzsm3jf1KpD29myEAZuYLnzmf56Hoao8qWSgGy7NTA5WN1XYzs5vu1UnM3O/xBle+93UTeTFsFXgZ1BU1U5sxgOxFN0IsTm75IKxlrn0z+k9mav/lwpIl2q+hk7k80O7/jIiULBJBQzd8v3+os1wnh2m7p5wBr414QN8E8fb+r2zEn+HU4KWPL4WhzYfKiRMSHBo+4jjVOo+eChboGY1IE7/AfbRN7vpC4ySJzTbX957zCCYgKR/CsSK3uevTjObSwdgbC648h0Z9EqJNBFdcGy+weDZsYHy2kY4ndFQC41Cz7KrynZE+/XjdkXFnYSiW3RBlyIiJwsw2utvcDtbMucM1UhNXdjgz+eSV8AmqmZ9Bi+a/eaHHhipdA5iRBtLlJZGUwx1D1g0+38Wj4lo6FEyXOxZ2dxcu9H67qrRd9gP1tsjl+AWDQNmhuJyHDiBfRX6Gdw9JrVuxhNUpwW7CdFTL/LYwuG6GvNJg/k9uM1AJuqRUl0xpxg8Yn9DUtAu6wnlPQKoYxJ80aEMV9lRNkgkWQlD0MCNEEHqd07iJ67IvQbCrPvCeNjraG+0o23GQMVBoTq5z8C2mYc7hYJQ9oTEff4v7/gjtTlIHd8zgAc+dUkGGun2VLO7yMfnexJF5KhH3aGw90NMO7SNzsbwdR2NWEfEvcAs7M8xE+IT67TdUdGnI/eocEsmzUvUXfqxE78azTDWofI9Z8UrhcDKR6BespFGVZB4zL0/dT4AEb5NV/tAmmlQ0GApL5QOS6po2wQLACFrWuGqyKauEnZGUX2stx2F9s1sup0zsTAkfAWGp/HbVbOWSukVlygDjdz+NLcXddLYLkRNPNqWokJuCyvKMuv/yQAAAAB82Yu8dG4omzbg/oCy4kWywwhoR9tKvA/m3WbVtRoMsQMRx9I8Fp2ZDzD3eTdhqGZRP7Xa1tjoaUmqDYi5G6Vg=</CipherValue>
        </CipherData>
    </EncryptedData>
</appSettings>
````


## See Also

* [CodeProject: Encrypting ASP.NET Application Settings](https://www.codeproject.com/Articles/599416/Encrypting-ASP-NET-Application-Settings)

* [Telerik web.config settings overview]({%slug general-information/web-config-settings-overview%})

* [How to use a separate config file for Telerik appSettings](https://www.telerik.com/support/kb/aspnet-ajax/details/how-to-read-telerik-appsettings-from-an-external-file)

