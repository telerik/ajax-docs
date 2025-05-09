---
title: Encrypt Telerik WebResource Querystring
page_title: Encrypt Telerik WebResource Querystring - RadScriptManager
description: Check our Web Forms article about Encrypt Telerik WebResource Querystring.
slug: scriptmanager/encrypt-telerik-webresource-querystring
tags: encrypt,telerik,webresource,request,querystring
published: True
position: 7
---

# Encrypt Telerik WebResource Querystring

@[template](/_templates/common/encrypt-combined-handler.md#encrypt-handler-template)

Here is the whole web.config file:

````XML
<?xml version="1.0"?>
<configuration>
  <appSettings>
    <add key="Telerik.ScriptManager.EnableHandlerEncryption" value="true"/>
    <add key="Telerik.Skin" value="Bootstrap" />
    <add key="Telerik.ScriptManager.TelerikCdn" value="Disabled" />
    <add key="Telerik.StyleSheetManager.TelerikCdn" value="Disabled" />
    <add key="Telerik.Web.UI.RenderMode" value="lightweight" />
  </appSettings>
  <system.web>
    <compilation debug="false" targetFramework="4.8.1" />
    <httpRuntime targetFramework="4.8.1" maxRequestLength="204800" executionTimeout="36000" maxQueryStringLength="4096"/>
    <pages>
      <controls>
        <add tagPrefix="telerik" namespace="Telerik.Web.UI" assembly="Telerik.Web.UI" />
      </controls>
    </pages>
    <httpHandlers>
      <add path="Telerik.Web.UI.SpellCheckHandler.axd" type="Telerik.Web.UI.SpellCheckHandler" verb="*" validate="false" />
      <add path="Telerik.Web.UI.DialogHandler.aspx" type="Telerik.Web.UI.DialogHandler" verb="*" validate="false" />
      <add path="Telerik.RadUploadProgressHandler.ashx" type="Telerik.Web.UI.RadUploadProgressHandler" verb="*" validate="false" />
      <add path="Telerik.Web.UI.WebResource.axd" type="Telerik.Web.UI.WebResource" verb="*" validate="false" />
    </httpHandlers>
  </system.web>

  <system.webServer>
    <security>
      <requestFiltering>
        <requestLimits maxAllowedContentLength="209715200" maxQueryString="4096" maxUrl="4096" />
      </requestFiltering>
    </security>
    <validation validateIntegratedModeConfiguration="false" />
    <handlers>
      <remove name="Telerik_Web_UI_SpellCheckHandler_axd" />
      <add name="Telerik_Web_UI_SpellCheckHandler_axd" path="Telerik.Web.UI.SpellCheckHandler.axd" type="Telerik.Web.UI.SpellCheckHandler" verb="*" preCondition="integratedMode" />
      <remove name="Telerik_Web_UI_DialogHandler_aspx" />
      <add name="Telerik_Web_UI_DialogHandler_aspx" path="Telerik.Web.UI.DialogHandler.aspx" type="Telerik.Web.UI.DialogHandler" verb="*" preCondition="integratedMode" />
      <remove name="Telerik_RadUploadProgressHandler_ashx" />
      <add name="Telerik_RadUploadProgressHandler_ashx" path="Telerik.RadUploadProgressHandler.ashx" type="Telerik.Web.UI.RadUploadProgressHandler" verb="*" preCondition="integratedMode" />
      <remove name="Telerik_Web_UI_WebResource_axd" />
      <add name="Telerik_Web_UI_WebResource_axd" path="Telerik.Web.UI.WebResource.axd" type="Telerik.Web.UI.WebResource" verb="*" preCondition="integratedMode" />
    </handlers>
  </system.webServer>
</configuration>
````

You can find more information in the [Security article](https://docs.telerik.com/devtools/aspnet-ajax/getting-started/work-with-controls/security) and [Setting the web.config File](https://docs.telerik.com/devtools/aspnet-ajax/getting-started/installation/web-config-settings-overview#configuring-mandatory-additions) articles.
 
   
