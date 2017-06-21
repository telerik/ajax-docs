---
title: web.config Settings Overview
page_title: web.config Settings Overview | UI for ASP.NET AJAX Documentation
description: web.config Settings Overview
slug: general-information/web-config-settings-overview
tags: web.config,settings,overview,handlers,required
published: True
position: 2
---

# web.config Settings Overview

This article explains the entries a Telerik-enabled Web Site or Web Application has. There are several mandatory additions, and a number of optional configuration settings: 


* [Mandatory Additions to the web.config](#mandatory-additions-to-the-webconfig)

* [Control properties you can set from the web.config](#control-properties-you-can-set-from-the-webconfig)

* [Optional configurations in the web.config](#optional-configurations-in-the-webconfig)



## Mandatory Additions to the web.config

For the controls from the Telerik UI for ASP.NET AJAX suite to function, **the needed HTTP handlers must be registered in the web.config** (**Example 1**).


There are several ways to add the HTTP handlers:

* Use the [Configuration and Creation Wizard]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/creation-and-configuration-wizard%}) from the [Telerik Visual Studio Extensions]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/overview%}) can add them automatically.
* The **Smart Tag** of each control will let you register the handlers it needs if they are not present. Not all handlers are needed by each control, so the available list may vary. 
* You can simply use the following code snippet (**Example 1**) and paste it into your web.config.


>important For security purposes, you **must** also add the `<appSettings>` keys listed in **Example 1**, with strong randomized values of your own. You can use the IIS MachineKey generator to get them.
>
>As of R2 2017 SP1, standard .NET methods are used for encryption. Nevertheless, you should still set your own custom keys. 

>caption **Example 1**: The mandatory web.config additions needed by the Telerik UI for ASP.NET AJAX suite.

````web.config
<configuration>
	<appSettings>
		<!-- Read more at: http://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security -->
		<add key="Telerik.AsyncUpload.ConfigurationEncryptionKey" value="YOUR-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
		<add key="Telerik.Upload.ConfigurationHashKey" value="YOUR-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
		<!-- Read more at:   http://docs.telerik.com/devtools/aspnet-ajax/controls/editor/functionality/dialogs/security -->
		 <add key="Telerik.Web.UI.DialogParametersEncryptionKey" value="YOUR-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
	</appSettings>
    <system.web>
        <!-- for IIS versions below 7 and Classic Pipeline mode -->
        <httpHandlers>
            <!-- This is the primary handler used to fetch most of the needed resources -->
            <add path="Telerik.Web.UI.WebResource.axd" type="Telerik.Web.UI.WebResource" verb="*" validate="false" />
            <!-- Only needed for RadSpell and RadEditor's spell checking -->
            <add path="Telerik.Web.UI.SpellCheckHandler.axd" type="Telerik.Web.UI.SpellCheckHandler" verb="*" validate="false" />
            <!-- Only needed for controls that have complex dialogs like RadEditor, RadImageEditor -->
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
            <!-- Only needed for controls that have complex dialogs like RadEditor, RadImageEditor -->
            <add name="Telerik_Web_UI_DialogHandler_aspx" path="Telerik.Web.UI.DialogHandler.aspx" type="Telerik.Web.UI.DialogHandler" verb="*" preCondition="integratedMode" />
            <!-- Only needed if RadAsyncUpload, RadProgressArea/RadProgressManager or the obsolete RadUpload are used -->
            <add name="Telerik_RadUploadProgressHandler_ashx" path="Telerik.RadUploadProgressHandler.ashx" type="Telerik.Web.UI.RadUploadProgressHandler" verb="*" preCondition="integratedMode" />
            <!-- Only needed if the obsolete RadChart control is used -->
            <add name="ChartImage_axd" path="ChartImage.axd" type="Telerik.Web.UI.ChartHttpHandler" verb="*" preCondition="integratedMode" />
        </handlers>
    </system.webServer>
</configuration>
````

>note In case your project references the Telerik assemblies from the **GAC**, you will need to register these handlers by using the fully qualified assembly name by adding the assembly information to the type attribute (**Example 2**). 
>
>If you deploy the project on a **WebFarm**/**WebGarden**, you need to change the Telerik.Web.UI.WebResource.axd type (**Example 3**). You can read more about deploying a solution that uses Telerik controls on a WebFarm or WebGarden in the [How to integrate RadControls for ASP.NET AJAX in a WebFarm or WebGarden scenario](http://www.telerik.com/blogs/integrate-radcontrols-for-asp.net-ajax-in-a-webfarm-or-webgarden) blog post.
>
>If you are using some form of routing, ensure that the handlers above are excluded (ignored) from routing to avoid breaking the requests the controls need to operate properly.


**Example 2**: An HTTP handler registration that uses a fully qualified assembly name.

````XML
<add name="Telerik_Web_UI_WebResource_axd" path="Telerik.Web.UI.WebResource.axd" type="Telerik.Web.UI.WebResource, Telerik.Web.UI, Culture=neutral, Version=2014.3.1209.45, PublicKeyToken=121fae78165ba3d4" verb="*" preCondition="integratedMode" />
````

where you will need to change the Version property to the concrete version you are using and the same assembly is to be used with all handlers. 

**Example 3**: The **Telerik.Web.UI.WebResource.axd** handler type for **WebFarm/WebGarden** deployment.

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

>tip You can register the Telerik controls assembly and tag prefix globally in the web.config, so you can use the controls in all the pages/user controls in the project without adding an explicit Register directive to each of them. This addition is not mandatory, but can be very helpful.

````XML
<pages>
 <controls>
   <add tagPrefix="telerik" namespace="Telerik.Web.UI" assembly="Telerik.Web.UI" />
 </controls>
</pages>
````


## Control Properties You Can Set From the web.config

There are various control properties that you can set from the web.config for an application-wide effect. This includes [scripts CDN]({%slug scriptmanager/cdn-support/overview%}), [skins CDN]({%slug stylesheetmanager/cdn-support/overview%}), [render mode]({%slug controls/render-modes%}), [skin]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/skin-registration%}), etc. 

 Such keys are added under the `<appSettings>` section in the web.config like shown in **Example 4**. 

**Example 4**: A site-wide setting added in the web.config.

````XML
<configuration>
    <appSettings>
        <add key="Telerik.Skin" value="Black" />
    </appSettings>
</configuration>
````

You can add any of the keys below in a similar fashion. 

Here follows a list with all the available appSettings keys for the Telerik UI for ASP.NET AJAX controls:

* **BindGridInvisibleColumns**—when set to true, all columns in a RadGrid which have the Visible property to false will bind their data. You can read more about its use case in the [Breaking change: Hidden column cell text is not persisted in ViewState](http://www.telerik.com/forums/breaking-change-hidden-column-cell-text-is-not-persisted-in-viewstate) forum thread. 

* **CSApiKey**—the key provided by _http://www.hisoftware.com/_ . Required for using the [Accessibility Compliance Check RadEditor Dialog]({%slug editor/accessibility-and-internationalization/creating-accessible-content/compliance-check-dialog%}) . 

* **KeepOriginalOrderOfScriptDescriptorsDuringAjax**—when set to true, the original order of the  statements of the controls that participate in the partial page rendering will be preserved in case RadAjaxManager or RadAjaxPanel is used. Otherwise, the order will be reversed. You can read more about this in the [Tips and tricks for ajaxifying specific controls]({%slug ajaxmanager/troubleshooting/tips-and-tricks-for-ajaxifying-specific-controls%}) help article. 

* **Telerik.AsyncUpload.ConfigurationEncryptionKey**—lets you set a custom encryption key RadAsyncUpload will use for sending its configuration to the client. Read more in the [RadAsyncUpload Security]({%slug asyncupload-security %}) help article. 

* **Telerik.AsyncUpload.TemporaryFolder**—lets you set the temporary folder RadAsyncUpload uses on an application level. You can read more about this feature in the [RadAsyncUpload Overview]({%slug asyncupload/overview%}) help article. 

* **Telerik.EnableEmbeddedBaseStylesheet**—lets you disable the embedded base stylesheets for all Telerik controls in the application by setting it to false. The [How Skins Work]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/how-skins-work%}) article explains what the base stylesheet is. You can read more about disabling the embedded resources in the [Disabling Embedded Resources]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%}) article. 

* **Telerik.EnableEmbeddedScripts**—lets you disable the embedded scripts for all Telerik controls in the application by setting it to false. You can read more about disabling the embedded resources in the [Disabling Embedded Resources]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%}) article. 

* **Telerik.EnableEmbeddedSkins**—lets you disable the embedded skin-specific stylesheets for all Telerik controls in the application by setting it to false. The [How Skins Work]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/how-skins-work%}) article explains what the skin-specific stylesheet is. You can read more about disabling the embedded resources in the [Disabling Embedded Resources]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%}) article. 

* **Telerik.ScriptManager.EnableEmbeddedjQuery**—lets you disable the embedded jQuery that comes with the Telerik controls by setting it to false. You can read more about this feature in the [Disabling the Embedded jQuery]({%slug scriptmanager/disabling-the-embedded-jquery%}) article. 

* **Telerik.ScriptManager.EnableHandlerEncryption**—lets you enable the Telerik WebResource request querystring encryption. You can read more about this feature in the [Encrypt Telerik WebResource Querystring]({%slug scriptmanager/encrypt-telerik-webresource-querystring%}) article. 

* **Telerik.ScriptManager.TelerikCdn**—lets you enable the scripts CDN support in RadScriptManager globally for the application by setting it to true. You can read more about this feature in the [Scripts CDN Overview]({%slug scriptmanager/cdn-support/overview%}) article. 

* **Telerik.ScriptManager.TelerikCdn.BaseSecureUrl**—lets you configure the base secure (HTTPS) URL of the scripts CDN for the entire application. You can read more about this feature in the [Custom CDN Provider]({%slug scriptmanager/cdn-support/custom-cdn-provider%}) article. 

* **Telerik.ScriptManager.TelerikCdn.BaseUrl**—lets you configure the base URL of the scripts CDN for the entire application. You can read more about this feature in the [Custom CDN Provider]({%slug scriptmanager/cdn-support/custom-cdn-provider%}) article. 

* **Telerik.ScriptManager.TelerikCdn.CombinedScript**—lets you configure whether to use one combined resource files (scripts) or let each control request its scripts separately. You can read more about this feature in the [Scripts CDN Overview]({%slug scriptmanager/cdn-support/combined-request-for-telerik-controls%}) article. 

* **Telerik.StyleSheetManager.TelerikCdn**—lets you enable the skins (css and images) CDN support in RadStyleSheetManager globally for the application by setting it to true. You can read more about this feature in the [Styles CDN Overview]({%slug stylesheetmanager/cdn-support/overview%}) article. 

* **Telerik.StyleSheetManager.TelerikCdn.BaseSecureUrl**—lets you configure the base secure (HTTPS) URL of the skins (css and images) CDN for the entire application. You can read more about this feature in the [Styles CDN Overview]({%slug stylesheetmanager/cdn-support/overview%}) article. 

* **Telerik.StyleSheetManager.TelerikCdn.BaseUrl**—lets you configure the base URL of the skins (css and images) CDN for the entire application. You can read more about this feature in the [Styles CDN Overview]({%slug stylesheetmanager/cdn-support/overview%}) article. 

* **Telerik.StyleSheetManager.TelerikCdn.CombinedResource**—lets you configure whether to use one combined resource files (styles) or let each control request its styles separately. You can read more about this feature in the [Styles CDN Overview]({%slug stylesheetmanager/cdn-support/combined-request-for-telerik-controls%}) article. 

* **Telerik.Skin**—lets you choose the skin for all Telerik controls in the application by setting it to the desired string value. You can read more about using skins in the [Skin Registration]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/skin-registration%}) article. 

* **Telerik.Upload.ConfigurationHashKey**—lets you set an additional encryption key RadAsyncUpload and RadCloudUpload will use for sending its configuration to the client. Read more in the [RadAsyncUpload Security]({%slug asyncupload-security %}) help article. 

* **Telerik.Web.CaptchaImageStorageProviderTypeName**—lets you set the RadCaptcha custom caching provider for the entire application. You can read more about using custom providers for RadCaptcha in the [Caching Provider]({%slug captcha/functionality/caching-provider%}) article. 

* **Telerik.Web.CaptchaDenyAudioHandler**—lets you to disable requests to the built-in audio handler of **RadCaptcha**. Further details are available in [Performance Optimization by Disabling Audio Handler]({%slug captcha/troubleshooting/optimize-application-performance-disable-audio%}) article.

* **Telerik.Web.SkinsAssembly**—in order to load skins from an external assembly, you need to register its name via this key. You can read more about using external skins assemblies in the [How to Load Skins from External Assemblies]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/how-to-load-skins-from-external-assemblies%}) article and you may also find useful the [RadSkinManager]({%slug controls/radskinmanager%}) control. 

* **Telerik.Web.UI.DialogParametersEncryptionKey**—lets you set a static key that RadEditor will use when deserializing its dialog parameters. By default, this key is randomly generated each time the application recycles. You can read more about its use in the [Cannot Deserialize Dialog Parameters. Invalid character in a Base-64 string]({%slug editor/troubleshooting/cannot-deserialize-dialog-parameters.-invalid-character-in-a-base-64-string.%}) troubleshooting article. 

* **Telerik.Web.UI.ScriptFolder**—a folder in the project that hosts the external scripts combined by RadScriptManager through the Telerik.Web.UI.WebResource.axd handler. You can read more about this feature in the [Combining External Scripts]({%slug scriptmanager/combining-external-scripts%}) article. 

* **Telerik.Web.UI.ScriptFolders**—a semicolon-separated list of folders in the project that host the external scripts combined by RadScriptManager through the Telerik.Web.UI.WebResource.axd handler. You can read more about this feature in the [Combining External Scripts]({%slug scriptmanager/combining-external-scripts%}) article. 

* **Telerik.Web.UI.StyleSheetFolder**—a folder in the project that hosts the external stylesheets combined by RadStyleSheetManager and RadSkinManager. This key must be set in order for these controls to work with custom skins. You can read more about the feature in the [RadSkinManager]({%slug controls/radskinmanager%}) and [Serving external style sheets]({%slug stylesheetmanager/serving-external-style-sheets%}) articles. 

* **Telerik.Web.UI.StyleSheetFolders**—a semicolon-separated list of folders in the project that hosts the external stylesheets combined by RadStyleSheetManager and RadSkinManager. This key must be set in order for these controls to work with custom skins. You can read more about the feature in the [RadSkinManager]({%slug controls/radskinmanager%}) and [Serving external style sheets]({%slug stylesheetmanager/serving-external-style-sheets%}) articles. 

* **UseGridNativeEditorsInMobileMode**—lets you disable the native browser editors and use the Telerik editors for a RadGrid in Mobile RenderMode by setting it to false. You can read more about this feature in the [Data Editing on Mobile Devices]({%slug grid/mobile-support/mobile-rendering/data-editing%}) article. 


**Example 5**: A sample that shows how you can set all of the available appSettings keys for the Telerik controls.

````XML
<configuration>
    <appSettings>
        <add key="BindGridInvisibleColumns" value="true" />
        <add key="CSApiKey" value="abcdefghjiklmnopqrstuvwxyz1234567890" />
        <add key="KeepOriginalOrderOfScriptDescriptorsDuringAjax" value="true" />
		<add key="Telerik.AsyncUpload.ConfigurationEncryptionKey" value="YOUR-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
		<add key="Telerik.Upload.ConfigurationHashKey" value="YOUR-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
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
        <add key="Telerik.Web.SkinsAssembly" value="MyCustomSkinsAssembly" />
        <add key="Telerik.Web.UI.DialogParametersEncryptionKey" value="YOUR-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
        <add key="Telerik.Web.UI.ScriptFolder" value="~/MyScripts/" />
        <add key="Telerik.Web.UI.ScriptFolders" value="~/MyScripts/; ~/MoreScripts/" />
        <add key="Telerik.Web.UI.StyleSheetFolder" value="~/App_Themes/" />
        <add key="Telerik.Web.UI.StyleSheetFolders" value="~/App_Themes/; ~/MyStyleSheets/" />
        <add key="UseGridNativeEditorsInMobileMode" value="true" />
    </appSettings>
</configuration>
````


## Optional Configurations in the web.config

This section lists optional control-specific settings that you can configure in the web.config:

### RadScheduler

You can set the RadScheduler data provider in the web.config file as shown in **Example 6** and **7**. 

**RadScheduler** is designed to be used with providers configured in a custom section of the web.config file. The custom section requires a handler that is included in the Telerik.Web.UI assembly. 

**Example 6**: How to configure a custom section:


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


**Example 7**: How to declare the provider:

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

### RadMediaPlayer

You can add RadMediaPlayer MIME settings to the web.config file: 

**Example 8**: Adding the respective MIME settings:

````XML
<system.webServer>
  <staticContent>
    <mimeMap fileExtension=".mp3" mimeType="audio/mpeg" />
    <mimeMap fileExtension=".ogg" mimeType="audio/ogg" />
    <mimeMap fileExtension=".wav" mimeType="audio/wav" />
  </staticContent>
</system.webServer>
````

### RadCompression

Apart from enabling [RadCompression]({%slug controls/radcompression%}), you can also configure its features:

#### RadCompression and full postbacks
	
**Example 9**: Enable the RadCompression for regular postbacks:
		
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


#### RadCompression and SessionPageState

Due to the fact that the **RadCompression**  module takes advantage of the **ASP.NET's SessionPageStatePersister**, there are some scenarios where you may need to fine-tune its settings:

* **ControlState** - by default, the **SessionPageStatePersister** doesn't add the **ControlState** to the **Session** so you may need to add it manually:

	**Example 11**: Set the control state in Session:
	
````XML
<system.web>
  <browserCaps>
    <case>
      RequiresControlStateInSession=true
    </case>
  </browserCaps>
</system.web>
````


* **Page history** - in applications where you have a lot of popup windows, it is important to increase the amount of the pages that are persisted in the **Session**. The default value of the history size is 9. 

**Example 12**: Configure the amount of pages that are persisted in Session:

````XML
<system.web>
  <sessionPageState historySize="15" />
</system.web>
````


### RadCloudUpload

You can configure the different storage providers in the web.config:

**Example 13**: Configure the RadCloudUpload provider settings:

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

### RadAsyncUpload and RadUpload

You can configure what is the maximum allowed file upload size:

**Example 14**: Allow uploads of files up to 100MB and upload periods up to 1 hour (IIS6):

````XML
<configuration>  
  <system.web>
    <httpRuntime maxRequestLength="102400" executionTimeout="3600" />   
  </system.web>
</configuration>
````


**Example 15**: Settings for IIS7:

````XML
<system.webServer> 
  <security>
    <requestFiltering>
      <requestLimits maxAllowedContentLength="1024000000" />
    </requestFiltering>
  </security>
</system.webServer>
````

