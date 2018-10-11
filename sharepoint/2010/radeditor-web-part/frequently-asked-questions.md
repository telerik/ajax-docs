---
title: Frequently Asked Questions
page_title: Frequently Asked Questions | UI for ASP.NET AJAX Documentation
description: Frequently Asked Questions
slug: sharepoint/2010/radeditor-web-part/frequently-asked-questions
tags: frequently,asked,questions
published: True
position: 8
---

# Frequently Asked Questions





## RadEditor is not Available for All Sites

Q: We have multiple web applications on our development server. I have installed the RadEditor and activated the feature for one site. But when I edit a list item on a different site it seems that the RadEditor is not available there. Is this a bug?

A: This is default behavior. The scope of the RadEditor features has been changed to Site level. This means that you have to activate the feature for each site where you wish to use our editor. Alternatively, you can change the scope of the features and activate them for the whole site collection. See the following page for more details - [Change RadEditor Features Scope]({%slug sharepoint/2010/radeditor-web-part/configuration/change-the-radeditor-features-scope%})

## UNIX and Linux Support

Q: Will RadEditor provide support for Linux and Unix users or is it just for PC and Mac?

A: Telerik RadEditor for SharePoint 2010 fully supports Firefox and Mozilla browsers. This means that a user who is running one of these browsers on a Unix/Linux/BSD platform, will be able to take advantage of the rich text editing capabilities of RadEditor. Since those browsers are multi platform, it does not matter whether you are accessing the SharePoint 2010 site from Windows/Mac OS X/Linux. The editor will work on all of those operating systems.

## Is the RadEditor Available for Wiki Content?

Wiki content in SharePoint 2010 is represented as a list. This means that if you activate the RadEditor for list items in the Wiki site, you will be able to use it to edit the content of the Wiki pages. See [Using RadEditor in WCM Scenario]({%slug sharepoint/2010/radeditor-web-part/installation-and-deployment/web-content-management-scenario%}) for more information

## Docked Toolbar in WCM Scenario

Q: Is there any way to get the ToolbarMode to use Default mode (docked) rather than ShowOnFocus?

A: The original idea of the editor is to keep the user experience as close as possible to that of the default rich-text editor. As a result RadEditor from SharePoint 2010 was implemented with the same ShowOnFocus toolbar mode. If you want to change it, you will need to modify the editor's configuration file (see [Set Properties Via Config File]({%slug sharepoint/2010/radeditor-web-part/configuration/set-properties-via-config-file%})).

## Get the UID of a SharePoint Web with RadEditor for SharePoint 2010

We have provided an easy way for you to get the UID of a Web, using the RadEditor for SharePoint 2010. First you need to open the SharePoint Web Application's Web.config file and add a new application setting. The Web.config file is located by default at **`C:\Inetpub\wwwroot\wss\VirtualDirectories\(port)\web.config`**, where **`(port)`** is the port of the web application - for example *`C:\Inetpub\wwwroot\wss\VirtualDirectories\80\web.config`*.

The new application setting must be called **RadEditorSaveGuids**. The value can be any string you want. For example:

````XML
<appsettings>
    <add key="RadEditorSaveGuids" value="1" />
</appsettings>
````

Save the Web.config file and open the site in your browser. Finally, navigate to the site with RadEditor and open it for editing:

![](images/SP_WbPart4_thumb.png)

After that, open the `RadControls\Editor\` folder and you should see a file, called `guids.config`. This file will contain the URL of the page you just opened, along with the Web UID and a timestamp. For example:

In the above example the file **`\Program Files\Common Files\Microsoft Shared\web server extensions\wpresources\RadEditorSharePoint\6.x.x.0__1f131a624888eeed\Resources\guids.config`** will contain

`/Pages/Default.aspx7/6/2010 10:00:58 AM - GUID: {a63cff5e-cdf5-48d0-898d-f9a24d299f06}`

In this case the UID for the site is *`{a63cff5e-cdf5-48d0-898d-f9a24d299f06}`*.

>tip: Remember to remove the **RadEditorSaveGuids** application setting when you no longer need it (i.e., after you find the UID you want).

## Size of Editing Area in WCM Scenario

You can control the size (width/height) of the RadEditor content fields in WCM scenario using the DisplayHeight and DisplayWidth properties of the RadHtmlField control.
