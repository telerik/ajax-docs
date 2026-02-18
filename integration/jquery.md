---
title: jQuery
page_title: jQuery integration
description: Explore how to integrate Telerik AJAX controls into ASP.NET MVC applications for enhanced functionality.
slug: integration/jquery
previous_url: integration/jquery/what-is-jquery, integration/jquery/using-jquery, integration/jquery/jquery-intellisense, integration/jquery/how-to-use-a-jquery-plugin
tags: overview
published: True
---

# jQuery integration with Telerik UI for ASP.NET AJAX

This help article describes the integration of jQuery with Telerik® UI for ASP.NET AJAX library and its security.

## Embedded jQuery

Telerik® UI for ASP.NET AJAX library is shipped with **custom jQuery 1.12.4** embedded in the Assembly and it is automatically loaded by UI components (e.g. `RadAvatar`, `RadButton`, `RadComboBox`, etc..).

>note The embedded jQuery in Telerik library contains fixes for the known vulnerabilities (see [Embedded jQuery Security](#embedded-jquery-security)) and is secure. In case, however, you prefer to use a newer version, feel free to include your own following the instructions from [Including external jQuery](#including-external-jquery) section.

Once loaded, the jQuery instance will be available in the globals, e.g. `window.jQuery` and `window.$`.

>caption Example

```ASP.NET
<script>
  // jQuery alias in Globals
  $(document).ready(function () { /* your code */ });

  jQuery(document).ready(function () { /* your code */ });
</script>
```

In Telerik versions before 2026 Q1 jQuery is available in the `$telerik` namespace.

>caption Example 

```ASP.NET
<script>
  $telerik.$(document).ready(function () { /* your code */ });
  
  // You can also create an alias referencing the jQuery from $telerik namespace
  var $ = window.jQuery = window.$ = $telerik.$;
  // then use it like this
  $(document).ready(function () { /* your code */ });
  jQuery(document).ready(function () { /* your code */ });
</script>
```

You can also load jQuery without the need to add Telerik UI components on the page by referencing the required scripts.

>caption Example

````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server" EnableEmbeddedjQuery="false">
    <Scripts>
        <%-- Dependency for jQuery --%>
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
        <%-- Embedded jQuery 1.12.4 --%>
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQuery.js" />
    </Scripts>
</telerik:RadScriptManager>
````

### Embedded jQuery Security

The embedded jQuery comes with backport fixes for the known vulnerabilities. 

Vulnerabilities fixed in the custom jQuery 1.12.4 embedded in the Telerik.Web.UI assembly:

| Vulnerability | Description | Telerik UI for ASP.NET AJAX Version |
| --- | --- | --- |
| [CVE-2020-11022](https://www.cvedetails.com/cve/CVE-2020-11022) <br> [CVE-2020-11023](https://www.cvedetails.com/cve/CVE-2020-11023) | Potential XSS vulnerability in jQuery before 3.5.0 | Fixed in **R2 2020** |
| [CVE-2019-11358](https://www.cvedetails.com/cve/CVE-2019-11358) | jQuery before 3.4.0 Object.prototype Pollution via extend(true) in Drupal, Backdrop CMS, and Others | Fixed in **R1 2019** |
| [CVE-2015-9251](https://www.cvedetails.com/cve/CVE-2015-9251) | jQuery before 3.0.0 Cross-domain Ajax Request XSS Vulnerability via Missing dataType Option | Fixed in **R1 2019** |

You can find more information in the following KB article on the matter: [Vulnerabilities of jQuery versions embedded and fixed in UI for ASP.NET AJAX](https://www.telerik.com/support/kb/aspnet-ajax/details/vulnerabilities-of-jquery-versions-embedded-in-ui-for-asp.net-ajax).


### Embedded jQuery Version History in Telerik library

| Telerik® UI for ASP.NET AJAX Version | jQuery Version | Remarks |
| --- | --- | --- |
| R1 2019 - present | 1.12.4 | Uses a modified jQuery version 1.12.4 that **includes security vulnerability backport fixes**. Find more info in the [Embedded jQuery Security](#embedded-jquery-security) section. |
| R2 2018 SP1 - R3 2018 |  1.12.4 | Downgraded from **3.3.1** due to incompatibilities with the MS AJAX framework and its __doPostBack() method - [see more](https://www.telerik.com/forums/known-issues-and-important-changes#4411795) |
| R2 2018 |  3.3.1. | It has [known issues](https://www.telerik.com/forums/known-issues-and-important-changes#4411795) and we recommend using R2 2018 SP1. |
| Q3 2014 - R1 2018 |  1.11.1 | |
| Q1 2013 SP1 - Q2 2014 SP1 |  1.9.1 | |
| Q1 2012 SP1 - Q1 2013 |  1.7.2 | |
| Q3 2011 SP1 <br> Q1 2012 |  1.7.1 | |
| Q2 2011 SP1 <br> Q3 2011 |  1.6.4 | |
| Q2 2011 |  1.6.2 | |
| Q1 2011 SP1 <br> SP2 |  1.5.2 | |
| Q1 2011 |  1.5.1 | |
| Q3 2010 SP1 <br> Q3 2010 SP2 |  1.4.4 | |
| Q3 2010 |  1.4.3 | |
| Q1 2010 <br> Q2 2010 |  1.4.2 | |
| Q1 2009 <br> Q2 2009 |  1.3.2 | |

## Including External jQuery

>caution jQuery 4.0.0 removed a few APIs Telerik components rely on, this version will not work.

>important For Telerik versions before 2026 Q1, please follow the instructions from the [Include external jQuery for Telerik prior to version 2026 Q1]({%slug common-include-external-jquery-prior-2026-q1%}) article.

To include an external jQuery, you will need to:

- Use the `telerik:RadScriptManager` (will not work with standard `asp:ScriptManager`)
- Disable the Embedded jQuery through the `EnableEmbeddedjQuery` property.
- Provide the URL or path of the external jQuery through the `ExternaljQueryUrl` property.
  - `https://code.jquery.com/jquery-3.7.1.min.js` - Web/CDN hosted URL (also check [External jQuery Security](#external-jquery-security))
  - `~/Scripts/jquery-3.7.1.min.js` - Path to the file in your project

>caption Example

````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server"
  EnableEmbeddedjQuery="false"
  ExternaljQueryUrl="https://code.jquery.com/jquery-3.7.1.min.js">
</telerik:RadScriptManager>
````

You can also set these options in the web.config file to apply the changes glboally rather than per page in your app.

````web.config
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <appSettings>
    <add key="Telerik.ScriptManager.EnableEmbeddedjQuery" value="false"/>
    <add key="Telerik.ScriptManager.ExternaljQueryUrl" value="https://code.jquery.com/jquery-3.7.1.min.js"/>
  </appSettings>
</configuration>
````

>important For each Telerik version, there is a minimum required jQuery that can be used (see [Embedded jQuery Version History in Telerik library](#embedded-jquery-version-history-in-telerik-library)). Please ensure that the jQuery version is greater than or equal to the required version.

### External jQuery Security

Starting from 2026 Q1, the external jQuery script you specify is handled by a Telerik Handler to ensure the correct load order and initialization of the script. The handler adds a layer of security by only allowing jQuery scripts from from Trusted sources.

By default the following CDN sources are allowed:

- `code.jquery.com`
- `ajax.googleapis.com`
- `cdnjs.cloudflare.com`
- `cdn.jsdelivr.net`
- `ajax.aspnetcdn.com`

If the jQuery library you would like to link is hosted on a different site, you can extend the Trusted CDN hosts by setting the `Telerik.ExternaljQuery.TrustedHosts` key in the web.config `<appSettings>`.

>caption Example

````web.config
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <appSettings>
    <!-- You can specify multiple hosts separated by comma -->
    <add key="Telerik.ExternaljQuery.TrustedHosts" value="intranet.mycompany.corp, another.location.org"/>
  </appSettings>
</configuration>
````

