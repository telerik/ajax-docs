---
title: Setting the web.config File
page_title: Setting the web.config File
description: "Configure the mandatory additions, set the control properties, and add optional configurations to the web.config file when working with Telerik UI for ASP.NET AJAX."
slug: general-information/web-config-settings-overview
tags: web.config, settings, overview, handlers, required
previous_url: general-information/web-config-settings-overview
published: True
position: 5
---

# Setting the web.config File

A Telerik-enabled website or web application requires you to add a number configurations as well as provides optional settings that you can implement.

* [Configure the mandatory additions to the `web.config` file](#configuring-mandatory-additions)

* [Control the properties you can set from the `web.config` file](#controlling-available-properties)

* [Add optional configurations in the `web.config` file](#adding-optional-configurations)

## Configuring Mandatory Additions

For the controls from the Telerik UI for ASP.NET AJAX suite to function, you have to register the needed HTTP handlers in the `web.config` file.

To add the HTTP handlers, use any of the following approaches:

* To add the handlers automatically, use the [Configuration and Creation Wizard]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/creation-and-configuration-wizard%}) from the [Telerik Visual Studio Extensions]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/overview%}).
* If the handlers that are needed by a control are not present, use the **Smart Tag** of the control to register them. Not all handlers are needed by individual controls, so the available list may vary.
* Copy the code from the following example and paste it into your `web.config` file.

When manually adding the HTTP handlers, note the following considerations:  

* For security purposes, you also have to add the `<appSettings>` keys listed in the example with strong, unique, randomized values of your own. You can [use the IIS MachineKey Validation Key generator to get them but make sure to avoid the `,IsolateApps` portion](images/generate-keys-iis.png). You can also [Encrypt the `appSettings` section](https://www.telerik.com/support/kb/aspnet-ajax/details/how-to-encrypt-the-telerik-appsettings-keys).
* As of R2 2017 SP1, the standard .NET methods are used for encryption. Nevertheless, you still have to set your own custom keys.
* As of R1 2020, the [`Telerik.Upload.AllowedCustomMetaDataTypes`](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security#allowedcustommetadatatypes) feature is enabled by default to improve the application security.

>important As of R1 2020, the MachineKey is automatically used for the `ConfigurationEncryptionKey`, `ConfigurationHashKey`, and `DialogParametersEncryptionKey` keys if they are not set explicitly. You will still need to set your own custom keys if you are using previous versions of the controls.

The following example demonstrates the mandatory `web.config` additions needed by the Telerik UI for ASP.NET AJAX suite.

````web.config
<configuration>
	<appSettings>
		<!-- Read more at: https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security -->
		<add key="Telerik.AsyncUpload.ConfigurationEncryptionKey" value="YOUR-FIRST-UNIQUE-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
		<add key="Telerik.Upload.ConfigurationHashKey" value="YOUR-SECOND-UNIQUE-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
    <add key="Telerik.Upload.AllowedCustomMetaDataTypes" value="Telerik.Web.UI.AsyncUploadConfiguration" />
		<!-- Read more at:   https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/functionality/dialogs/security -->
		 <add key="Telerik.Web.UI.DialogParametersEncryptionKey" value="YOUR-THIRD-UNIQUE-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
	</appSettings>
    <system.web>
        <!-- for IIS versions below 7 and Classic Pipeline mode -->
        <httpHandlers>
            <!-- This is the primary handler used to fetch most of the needed resources -->
            <add path="Telerik.Web.UI.WebResource.axd" type="Telerik.Web.UI.WebResource" verb="*" validate="false" />
            <!-- Only needed for RadSpell and RadEditor's spell checking -->
            <add path="Telerik.Web.UI.SpellCheckHandler.axd" type="Telerik.Web.UI.SpellCheckHandler" verb="*" validate="false" />
            <!-- Only needed for the dialogs of RadEditor and RadSpell -->
            <add path="Telerik.Web.UI.DialogHandler.aspx" type="Telerik.Web.UI.DialogHandler" verb="*" validate="false" />
            <!-- Only needed if RadAsyncUpload, RadProgressArea/RadProgressManager or the obsolete RadUpload are used -->
            <add path="Telerik.RadUploadProgressHandler.ashx" type="Telerik.Web.UI.RadUploadProgressHandler" verb="*" validate="false" />
            <!-- Only needed if the obsolete RadChart is used -->
            <add path="ChartImage.axd" type="Telerik.Web.UI.ChartHttpHandler" verb="*" validate="false" />
        </httpHandlers>
        <httpModules>
            <!-- Only needed if the obsolete RadUpload is used in the site -->
            <!--    <add name="RadUploadModule" type="Telerik.Web.UI.RadUploadHttpModule" /> -->
            <!-- Only needed if RadCompression is used in the site. IIS7+ offers built-in dynamic content compression -->
            <!--    <add name="RadCompression" type="Telerik.Web.UI.RadCompression" />  -->
        </httpModules>
    </system.web>

    <system.webServer>
        <!-- For IIS7+ and Integrated Pipeline mode -->
        <validation validateIntegratedModeConfiguration="false" />
        <modules runAllManagedModulesForAllRequests="true">
            <!-- Only needed if the obsolete RadUpload is used in the site -->
            <!--    <remove name="RadUploadModule" /> -->
            <!--    <add name="RadUploadModule" type="Telerik.Web.UI.RadUploadHttpModule" preCondition="integratedMode" /> -->
            <!-- Only needed if RadCompression is used in the site. IIS7+ offers built-in dynamic content compression -->
            <!--    <remove name="RadCompression" /> -->
            <!--    <add name="RadCompression" type="Telerik.Web.UI.RadCompression" preCondition="integratedMode" /> -->
        </modules>
        <handlers>
            <remove name="Telerik_Web_UI_WebResource_axd" />
            <remove name="Telerik_Web_UI_SpellCheckHandler_axd" />
            <remove name="Telerik_Web_UI_DialogHandler_aspx" />
            <remove name="Telerik_RadUploadProgressHandler_ashx" />
            <remove name="ChartImage_axd" />
            <!-- This is the primary handler used to fetch most of the needed resources -->
            <add name="Telerik_Web_UI_WebResource_axd" path="Telerik.Web.UI.WebResource.axd" type="Telerik.Web.UI.WebResource" verb="*" preCondition="integratedMode" />
            <!-- Only needed for RadSpell and RadEditor's spell checking -->
            <add name="Telerik_Web_UI_SpellCheckHandler_axd" path="Telerik.Web.UI.SpellCheckHandler.axd" type="Telerik.Web.UI.SpellCheckHandler" verb="*" preCondition="integratedMode" />
            <!-- Only needed for the dialogs of RadEditor and RadSpell -->
            <add name="Telerik_Web_UI_DialogHandler_aspx" path="Telerik.Web.UI.DialogHandler.aspx" type="Telerik.Web.UI.DialogHandler" verb="*" preCondition="integratedMode" />
            <!-- Only needed if RadAsyncUpload, RadProgressArea/RadProgressManager or the obsolete RadUpload are used -->
            <add name="Telerik_RadUploadProgressHandler_ashx" path="Telerik.RadUploadProgressHandler.ashx" type="Telerik.Web.UI.RadUploadProgressHandler" verb="*" preCondition="integratedMode" />
            <!-- Only needed if the obsolete RadChart control is used -->
            <add name="ChartImage_axd" path="ChartImage.axd" type="Telerik.Web.UI.ChartHttpHandler" verb="*" preCondition="integratedMode" />
        </handlers>
    </system.webServer>
</configuration>
````

If you are using some form of routing, ensure that the handlers above are excluded (ignored) from routing to avoid breaking the requests the controls need to operate properly.

To make the `querystring` parameters of the Telerik WebResource request unreadable for a third party that inspects the network traffic, encrypt them. Also, encryption will hide the `Telerik.Web.UI` version in the markup by setting the `EnableHandlerEncryption` key in the `web.config` `appSettings` section. For more information, refer to the [Encrypt Telerik WebResource Querystring](https://docs.telerik.com/devtools/aspnet-ajax/controls/scriptmanager/encrypt-telerik-webresource-querystring) article.

If your project references the Telerik assemblies from the **GAC**, you will need to register these handlers with the fully qualified assembly name by adding the assembly information to the type attribute.

The following example demonstrates how to register an HTTP handler that uses a fully qualified assembly name.

````XML
<add name="Telerik_Web_UI_WebResource_axd" path="Telerik.Web.UI.WebResource.axd"
   type="Telerik.Web.UI.WebResource, Telerik.Web.UI, Culture=neutral, Version=2014.3.1209.45, PublicKeyToken=121fae78165ba3d4"
   verb="*" preCondition="integratedMode" />
````

In the example above, you will need to change the `Version` property to the specific version you are using and the same assembly is to be used with all handlers.

If you deploy the project on a **WebFarm**/**WebGarden**, you need to change the `Telerik.Web.UI.WebResource.axd` type. For more information about deploying a solution that uses Telerik controls on a WebFarm or WebGarden, refer to the [How to integrate RadControls for ASP.NET AJAX in a WebFarm or WebGarden scenario](https://www.telerik.com/blogs/integrate-radcontrols-for-asp.net-ajax-in-a-webfarm-or-webgarden) blog post.

The following example demonstrates how to add the `Telerik.Web.UI.WebResource.axd` handler type for **WebFarm/WebGarden** deployment.

````XML
<system.web>
    <httpHandlers>
        <add path="Telerik.Web.UI.WebResource.axd" type="Telerik.Web.UI.WebResourceSession" verb="*" validate="false" />
    </httpHandlers>
</system.web>

<system.webServer>
    <handlers>
        <add name="Telerik_Web_UI_WebResource_axd" path="Telerik.Web.UI.WebResource.axd" type="Telerik.Web.UI.WebResourceSession" verb="*" preCondition="integratedMode" />
    </handlers>
</system.webServer>
````

You can globally register the `controls` assembly and the `tagPrefix` in the `web.config` file. In this way, you can use the controls in all pages and user controls of the project without adding an explicit `Register` directive to each of them. This addition is not mandatory, but can be very helpful.

````XML
<pages>
 <controls>
   <add tagPrefix="telerik" namespace="Telerik.Web.UI" assembly="Telerik.Web.UI" />
 </controls>
</pages>
````

## Controlling Available Properties

You can also set various control properties from the `web.config` file for an application-wide effect. These include the [scripts CDN]({%slug scriptmanager/cdn-support/overview%}), [skins CDN]({%slug stylesheetmanager/cdn-support/overview%}), [render mode]({%slug controls/render-modes%}), [skin]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/skin-registration%}), and so on. Such keys are added under the `<appSettings>` section of the `web.config`.

The following example demonstrates how to configure site-wide settings in the `web.config` file.

````XML
<configuration>
    <appSettings>
        <add key="Telerik.Skin" value="Black" />
    </appSettings>
</configuration>
````

You can [encrypt the `appSettings` section of the `web.config` file](https://www.telerik.com/support/kb/aspnet-ajax/details/how-to-encrypt-the-telerik-appsettings-keys) and also [use a separate configuration file for the `appSettings`](https://www.telerik.com/support/kb/aspnet-ajax/details/how-to-read-telerik-appsettings-from-an-external-file) to declutter the `web.config`.

You can add any of the following available `appSettings` keys for the Telerik UI for ASP.NET AJAX controls in a similar fashion.

|Available appSettings Keys|Specifics
|:--|:--
|`BindGridInvisibleColumns`|When set to `true`, all columns in a Grid, which have the `Visible` property set to `false`, will bind their data. For more information, refer to the [Breaking change: Hidden column cell text is not persisted in ViewState](https://www.telerik.com/forums/breaking-change-hidden-column-cell-text-is-not-persisted-in-viewstate) forum thread.
|`CSApiKey`|The key provided by `https://www.appgate.com/`. Required for using the [Accessibility Compliance Check Editor Dialog]({%slug editor/accessibility-and-internationalization/creating-accessible-content/compliance-check-dialog%}).
|`KeepOriginalOrderOfScriptDescriptorsDuringAjax`|When set to `true`, the original order of the controls statements that participate in the partial page rendering will be preserved if a `RadAjaxManager` or `RadAjaxPanel` is used. Otherwise, the order will be reversed. For more information, refer to the [Tips and tricks for ajaxifying specific controls]({%slug ajaxmanager/troubleshooting/tips-and-tricks-for-ajaxifying-specific-controls%}) article.
|`Telerik.AsyncUpload.ConfigurationEncryptionKey`|Enables you to set a custom encryption key which the AsyncUpload will use for sending its configuration to the client. For more information, refer to the [AsyncUpload Security]({%slug asyncupload-security %}) article.
|`Telerik.AsyncUpload.TemporaryFolder`|Enables you to set the temporary folder which the AsyncUpload will use on an application level. For more information, refer to the [AsyncUpload Overview]({%slug asyncupload/overview%}) article.
|`Telerik.EnableEmbeddedBaseStylesheet`|Lets you disable the embedded base stylesheets for all Telerik controls in the application by setting it to `false`. The [How Skins Work]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/how-skins-work%}) article explains what the base stylesheet is. For more information on disabling the embedded resources, refer to the [Disabling Embedded Resources]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%}) article.
|`Telerik.EnableEmbeddedScripts`|Lets you disable the embedded scripts for all Telerik controls in the application by setting it to `false`. For more information, refer to the [Disabling Embedded Resources]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%}) article.
|`Telerik.EnableEmbeddedSkins`|Lets you disable the embedded skin-specific stylesheets for all Telerik controls in the application by setting it to `false`. The [How Skins Work]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/how-skins-work%}) article explains what the skin-specific stylesheet is. For more information, refer to the [Disabling Embedded Resources]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%}) article.
|`Telerik.ScriptManager.EnableEmbeddedjQuery`|Lets you disable the embedded jQuery that comes with the Telerik controls by setting it to `false`. For more information, refer to the [Disabling the Embedded jQuery]({%slug scriptmanager/disabling-the-embedded-jquery%}) article.
|`Telerik.ScriptManager.EnableHandlerEncryption`|Lets you enable the Telerik WebResource request `querystring` encryption as well as hides the `Telerik.Web.UI <!-- 20xx.x.xxx.xx -->` version in the rendered output. For more information, refer to the [Encrypt Telerik WebResource Querystring]({%slug scriptmanager/encrypt-telerik-webresource-querystring%}) article.
|`Telerik.ScriptManager.TelerikCdn`|Lets you globally enable the scripts CDN support in the ScriptManager for the application by setting it to `true`. For more information, refer to the [Scripts CDN Overview]({%slug scriptmanager/cdn-support/overview%}) article.
|`Telerik.ScriptManager.TelerikCdn.BaseSecureUrl`|Lets you configure the base secure (HTTPS) URL of the scripts CDN for the entire application. For more information, refer to the [Custom CDN Provider]({%slug scriptmanager/cdn-support/custom-cdn-provider%}) article.
|`Telerik.ScriptManager.TelerikCdn.BaseUrl`|Lets you configure the base URL of the scripts CDN for the entire application. For more information, refer to the [Custom CDN Provider]({%slug scriptmanager/cdn-support/custom-cdn-provider%}) article.
|`Telerik.ScriptManager.TelerikCdn.CombinedScript`|Lets you configure whether to use one combined resource files (scripts) or let each control request its scripts separately. For more information, refer to the [Scripts CDN Overview]({%slug scriptmanager/cdn-support/combined-request-for-telerik-controls%}) article.
|`Telerik.StyleSheetManager.TelerikCdn`|Lets you globally enable the skins (CSS and images) CDN support in the StyleSheetManager for the application by setting it to `true`. For more information,refer to the [Styles CDN Overview]({%slug stylesheetmanager/cdn-support/overview%}) article.
|`Telerik.StyleSheetManager.TelerikCdn.BaseSecureUrl`|Lets you configure the base secure (HTTPS) URL of the skins (CSS and images) CDN for the entire application. For more information, refer to the [Styles CDN Overview]({%slug stylesheetmanager/cdn-support/overview%}) article.
|`Telerik.StyleSheetManager.TelerikCdn.BaseUrl`|Lets you configure the base URL of the skins (CSS and images) CDN for the entire application. For more information, refer to the [Styles CDN Overview]({%slug stylesheetmanager/cdn-support/overview%}) article.
|`Telerik.StyleSheetManager.TelerikCdn.CombinedResource`|Lets you configure whether to use one combined resource files (styles) or let each control request its styles separately. For more information, refer to the [Styles CDN Overview]({%slug stylesheetmanager/cdn-support/combined-request-for-telerik-controls%}) article.
|`Telerik.Skin`|Lets you choose the skin for all Telerik controls in the application by setting it to the desired string value. For more information, refer to the [Skin Registration]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/skin-registration%}) article.
|`Telerik.Upload.AllowedCustomMetaDataTypes`|Enables you to whitelist custom file uploads metadata. For more information, refer to the [AsyncUpload Security - Custom Metadata]({%slug asyncupload-security%}#custom-metadata) article.
|`Telerik.Upload.ConfigurationHashKey`|Lets you set an additional encryption key which the AsyncUpload and CloudUpload will use for sending their configuration to the client. For more information, refer to the [AsyncUpload Security]({%slug asyncupload-security %}) article.
|`Telerik.Web.CaptchaImageStorageProviderTypeName`|Lets you set the Captcha custom caching provider for the entire application. For more information, refer to the [Caching Provider]({%slug captcha/functionality/caching-provider%}) article.
|`Telerik.Web.CaptchaDenyAudioHandler`|Lets you disable requests to the built-in audio handler of Captcha. For more information, refer to the [Performance Optimization by Disabling Audio Handler]({%slug captcha/troubleshooting/optimize-application-performance-disable-audio%}) article.
|`Telerik.Web.DisableAsyncUploadHandler`|Lets you disable requests to the built-in file upload handler of AsyncUpload. For more information, refer to the [AsyncUpload Security]({%slug asyncupload-security%}) article.
|`Telerik.Web.DisableCloudUploadHandler`|Lets you disable requests to the built-in file upload handler of CloudUpload. For more information, refer to the [CloudUpload Security]({%slug cloudupload-security%}) article.
|`Telerik.Web.SkinsAssembly`|To load skins from an external assembly, you need to register its name with this key. For more information, refer to the [How to Load Skins from External Assemblies]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/how-to-load-skins-from-external-assemblies%}) and the [SkinManager]({%slug controls/radskinmanager%}) articles.
|`Telerik.Web.UI.DialogParametersEncryptionKey`|Lets you set a static key that the Editor will use when de-serializing its dialog parameters. By default, this key is randomly generated each time the application recycles. For more information, refer to the [Cannot De-serialize Dialog Parameters. Invalid character in a Base-64 string]({%slug editor/troubleshooting/cannot-deserialize-dialog-parameters.-invalid-character-in-a-base-64-string.%}) article.
|`Telerik.Web.UI.ScriptFolder`|A folder in the project that hosts the external scripts combined by the ScriptManager through the `Telerik.Web.UI.WebResource.axd` handler. For more information, refer to the [Combining External Scripts]({%slug scriptmanager/combining-external-scripts%}) article.
|`Telerik.Web.UI.ScriptFolders`|A semicolon-separated list of folders in the project that host the external scripts combined by the ScriptManager through the `Telerik.Web.UI.WebResource.axd` handler. For more information, refer to the [Combining External Scripts]({%slug scriptmanager/combining-external-scripts%}) article.
|`Telerik.Web.UI.StyleSheetFolder`|A folder in the project that hosts the external stylesheets combined by the StyleSheetManager and SkinManager. This key must be set in order for these controls to work with custom skins. For more information, refer to the [SkinManager]({%slug controls/radskinmanager%}) and [Serving external style sheets]({%slug stylesheetmanager/serving-external-style-sheets%}) articles.
|`Telerik.Web.UI.StyleSheetFolders`|A semicolon-separated list of folders in the project that hosts the external stylesheets combined by the StyleSheetManager and SkinManager. This key must be set in order for these controls to work with custom skins. For more information, refer to the [SkinManager]({%slug controls/radskinmanager%}) and [Serving external style sheets]({%slug stylesheetmanager/serving-external-style-sheets%}) articles.
|`UseGridNativeEditorsInMobileMode`|Lets you disable the native browser editors and use the Telerik editors for the Grid in the mobile render mode by setting it to `false`. For more information, refer to the [Data Editing on Mobile Devices]({%slug grid/mobile-support/mobile-rendering/data-editing%}) article.

The following example demonstrates how to set all of the available `appSettings` keys for the Telerik controls.

````XML
<configuration>
    <appSettings>
        <add key="BindGridInvisibleColumns" value="true" />
        <add key="CSApiKey" value="abcdefghjiklmnopqrstuvwxyz1234567890" />
        <add key="KeepOriginalOrderOfScriptDescriptorsDuringAjax" value="true" />
		<add key="Telerik.AsyncUpload.ConfigurationEncryptionKey" value="YOUR-FIRST-UNIQUE-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
		<add key="Telerik.Upload.ConfigurationHashKey" value="YOUR-SECOND-UNIQUE-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
    <add key="Telerik.Upload.AllowedCustomMetaDataTypes" value="Telerik.Web.UI.AsyncUploadConfiguration" />
        <add key="Telerik.AsyncUpload.TemporaryFolder" value="~/tempUploads" />
        <add key="Telerik.EnableEmbeddedBaseStylesheet" value="true" />
        <add key="Telerik.EnableEmbeddedScripts" value="true" />
        <add key="Telerik.EnableEmbeddedSkins" value="true" />
        <add key="Telerik.ScriptManager.EnableEmbeddedjQuery" value="true" />
        <add key="Telerik.ScriptManager.TelerikCdn" value="disabled" />
        <add key="Telerik.ScriptManager.TelerikCdn.BaseSecureUrl" value="https://my.favorite.cdn" />
        <add key="Telerik.ScriptManager.TelerikCdn.BaseUrl" value="http://my.favorite.cdn" />
        <add key="Telerik.ScriptManager.TelerikCdn.CombinedScript" value="disabled" />
        <add key="Telerik.StyleSheetManager.TelerikCdn" value="disabled" />
        <add key="Telerik.StyleSheetManager.TelerikCdn.BaseSecureUrl" value="https://my.favorite.cdn" />
        <add key="Telerik.StyleSheetManager.TelerikCdn.BaseUrl" value="http://my.favorite.cdn" />
        <add key="Telerik.StyleSheetManager.TelerikCdn.CombinedResource" value="disabled" />
        <add key="Telerik.Skin" value="Default" />
        <add key="Telerik.Web.CaptchaImageStorageProviderTypeName" value="MyCustomCaptchaStorageProvider" />
        <add key="Telerik.Web.CaptchaDenyAudioHandler" value="true" />
		<add key="Telerik.Web.DisableAsyncUploadHandler" value="true"/>
		<add key="Telerik.Web.DisableCloudUploadHandler" value="true"/>
        <add key="Telerik.Web.SkinsAssembly" value="MyCustomSkinsAssembly" />
        <add key="Telerik.Web.UI.DialogParametersEncryptionKey" value="YOUR-THIRD-UNIQUE-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
        <add key="Telerik.Web.UI.ScriptFolder" value="~/MyScripts/" />
        <add key="Telerik.Web.UI.ScriptFolders" value="~/MyScripts/; ~/MoreScripts/" />
        <add key="Telerik.Web.UI.StyleSheetFolder" value="~/App_Themes/" />
        <add key="Telerik.Web.UI.StyleSheetFolders" value="~/App_Themes/; ~/MyStyleSheets/" />
        <add key="UseGridNativeEditorsInMobileMode" value="true" />
    </appSettings>
</configuration>
````

## Adding Optional Configurations

Telerik UI for ASP.NET AJAX enables you to configure optional control-specific settings in the `web.config` file. You can also [encrypt a section in the `web.config`](https://www.telerik.com/support/kb/aspnet-ajax/details/how-to-encrypt-the-telerik-appsettings-keys).

### Scheduler

The Scheduler is designed to be used with providers that are configured in a custom section of the `web.config` file. The custom section requires a handler that is included in the `Telerik.Web.UI` assembly.

The following example demonstrates how to configure a custom section.

````XML
<configSections>
  <sectionGroup name="telerik.web.ui">
    <section name="radScheduler"
             type="Telerik.Web.UI.RadSchedulerConfigurationSection,
                 Telerik.Web.UI, PublicKeyToken=121fae78165ba3d4"
             allowDefinition="MachineToApplication" />
  </sectionGroup>
</configSections>
````


The following example demonstrates how to declare the provider.

````XML
<telerik.web.ui>
  <radScheduler defaultAppointmentProvider="Integrated">
    <appointmentProviders>
      <add name="XmlSchedulerProvider1"
           type="Telerik.Web.UI.XmlSchedulerProvider"
           fileName="~/App_Data/Appointments.xml"
           persistChanges="true"/>
    </appointmentProviders>
  </radScheduler>
</telerik.web.ui>
````

### MediaPlayer

The following example demonstrates how to add the MediaPlayer MIME settings to the `web.config` file.

````XML
<system.webServer>
  <staticContent>
    <mimeMap fileExtension=".mp3" mimeType="audio/mpeg" />
    <mimeMap fileExtension=".ogg" mimeType="audio/ogg" />
    <mimeMap fileExtension=".wav" mimeType="audio/wav" />
  </staticContent>
</system.webServer>
````

### Compression

Apart from enabling the [Compression]({%slug controls/radcompression%}), you can also configure its features.

The following example demonstrates how to enable the Compression for regular postbacks.


````XML
<configSections>

  <sectionGroup name="telerik.web.ui">
    <section name="radCompression" type="Telerik.Web.UI.RadCompressionConfigurationSection, Telerik.Web.UI, PublicKeyToken=121fae78165ba3d4" allowDefinition="MachineToApplication" requirePermission="false"/>
  </sectionGroup>

</configSections>
<telerik.web.ui>
  <radCompression enablePostbackCompression="true"/>
</telerik.web.ui>
````

Due to the fact that the `RadCompression` module takes advantage of the ASP.NET `SessionPageStatePersister`, you may need to fine-tune its settings.

* `ControlState`&mdash;By default, the `SessionPageStatePersister` doesn't add the `ControlState` to the `Session` so you may need to add it manually. The following example demonstrates how to set the control state in `Session`.


  ````XML
<system.web>
  <browserCaps>
    <case>
      RequiresControlStateInSession=true
    </case>
  </browserCaps>
</system.web>
````

* `Page history`&mdash;In applications where you have a lot of popup windows, it is important to increase the amount of the pages that are persisted in the `Session`. The default value of the history size is `9`. The following example demonstrates how to configure the amount of pages that are persisted in `Session`.


  ````XML
<system.web>
  <sessionPageState historySize="15" />
</system.web>
````


### CloudUpload

The following example demonstrates how to configure the CloudUpload provider settings.

````XML
<telerik.web.ui>
  <radCloudUpload>
    <storageProviders>
      <!-- Amazon S3 provider -->
      <add name="Amazon" type="Telerik.Web.UI.AmazonS3Provider" accessKey="" secretKey="" bucketName="" uncommitedFilesExpirationPeriod="2" />
      <!-- Azure Blob provider -->
      <add name="Azure" type="Telerik.Web.UI.AzureProvider" accountKey="" accountName="" blobContainer="" subFolderStructure="" ensureContainer="true" uncommitedFilesExpirationPeriod="2" defaultEndpointsProtocol="https" />
      <!-- Telerik Backend services provider -->
      <add name="Everlive" type="Telerik.Web.UI.EverliveProvider" AppKey="" uncommitedFilesExpirationPeriod="2"/>
    </storageProviders>
  </radCloudUpload>
</telerik.web.ui>
````

### AsyncUpload and Upload

You can set the maximum size that us allowed for upload.

The following example demonstrates how to allow uploads of files up to 100MB and upload periods up to one hour (IIS6).

````XML
<configuration>  
  <system.web>
    <httpRuntime maxRequestLength="102400" executionTimeout="3600" />   
  </system.web>
</configuration>
````

The following example demonstrates the settings for IIS7:

````XML
<system.webServer>
  <security>
    <requestFiltering>
      <requestLimits maxAllowedContentLength="1024000000" />
    </requestFiltering>
  </security>
</system.webServer>
````

## See Also

* [First Steps with MSI]({% slug introduction/installation/installing-the-telerik-controls-from-msi-file%})
* [First Steps with ZIP]({% slug introduction/installation/installing-the-telerik-controls-from-zip-file %})
* [First Steps with NuGet]({% slug introduction/installation/installing-the-telerik-controls-from-a-nuget-package %})
* [Getting Started with Telerik UI for ASP.NET AJAX (Video Tutorials)](https://learn.telerik.com/learn/course/external/view/elearning/5/telerik-ui-for-aspnet-ajax)
