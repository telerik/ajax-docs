---
title: Non-negative number required. Parameter name - length from Telerik.Web.UI.Upload.RequestParser.GetFieldBytes
description: Non-negative number required. Parameter name - length from Telerik.Web.UI.Upload.RequestParser.GetFieldBytes - RadAsyncUpload. Check it now!
type: how-to
page_title: Non-negative number required. Parameter name - length from Telerik.Web.UI.Upload.RequestParser.GetFieldBytes
slug: asyncupload-non-negative-number-required-parameter-name-length-from-telerik-web-ui-upload-requestparser-getfieldbytes
res_type: kb
---


## PROBLEM

Sometimes a "Non-negative number required. Parameter name: length" error is thrown when the Obsolete RadUpload handlers are registered in the web.config file.

## DESCRIPTION

Some data loss prevention software might interfere with the proper work of the application even though the RadUpload is not used on the specific page where the error is observed.

The full stack trace of the error is similar to the following:


````ASP.NET
Server Error in '/' Application.
Non-negative number required.
Parameter name: length
Description: An unhandled exception occurred during the execution of the current web request. Please review the stack trace for more information about the error and where it originated in the code.

Exception Details: System.ArgumentOutOfRangeException: Non-negative number required.
Parameter name: length

Source Error:

An unhandled exception was generated during the execution of the current web request. Information regarding the origin and location of the exception can be identified using the exception stack trace below.


Stack Trace:

[ArgumentOutOfRangeException: Non-negative number required.
Parameter name: length]
   System.Array.CreateInstance(Type elementType, Int32 length) +2855364
   Telerik.Web.UI.Upload.RequestParser.GetFieldBytes(Byte[] chunk, Int32 fieldStartIndex, Int32 fieldBytesCount) +39
   Telerik.Web.UI.Upload.RequestParser.Parse(Byte[] chunk, Int32 validChunkBytes) +229
   Telerik.Web.UI.Upload.ProgressWorkerRequest.UpdateProgress(Byte[] buffer, Int32 validBytes, String caller) +30
   Telerik.Web.UI.Upload.ProgressWorkerRequest.GetPreloadedEntityBody() +39
   System.Web.HttpRequest.GetEntireRawContent() +388
   System.Web.HttpRequest.GetMultipartContent() +56
   System.Web.HttpRequest.FillInFormCollection() +222
   System.Web.HttpRequest.get_Form() +65
   System.Web.HttpRequest.get_HasForm() +3309630
   System.Web.UI.Page.GetCollectionBasedOnMethod(Boolean dontReturnNull) +45
   System.Web.UI.Page.DeterminePostBackMode() +65
   System.Web.UI.Page.ProcessRequestMain(Boolean includeStagesBeforeAsyncPoint, Boolean includeStagesAfterAsyncPoint) +133

Version Information: Microsoft .NET Framework Version:4.0.30319; ASP.NET Version:4.7.2110.0
````



## SOLUTION

The solution is to remove the RadUpload related registration in the web.config as suggested in [Mandatory Additions to the web.config](https://docs.telerik.com/devtools/aspnet-ajax/general-information/web-config-settings-overview#mandatory-additions-to-the-webconfig). The support of the RadUpload is discontinued as of Q2 2012 - [https://www.telerik.com/forums/important-support-for-radupload-is-discontinued](/forums/important-support-for-radupload-is-discontinued). That is why we strongly recommend replacing the Obsolete RadUpload control with the new RadAsyncUpload one.

````XML
<configuration>
    <appSettings>
        <!-- Read more at: http://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security -->
        <add key="Telerik.AsyncUpload.ConfigurationEncryptionKey" value="YOUR-FIRST-UNIQUE-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
        <add key="Telerik.Upload.ConfigurationHashKey" value="YOUR-SECOND-UNIQUE-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
        <!-- Read more at:   http://docs.telerik.com/devtools/aspnet-ajax/controls/editor/functionality/dialogs/security -->
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

 