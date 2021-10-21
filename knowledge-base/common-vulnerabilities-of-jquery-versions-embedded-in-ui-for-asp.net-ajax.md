---
title: Vulnerabilities of jQuery versions embedded in UI for ASP.NET AJAX
description: Vulnerabilities of jQuery versions embedded in UI for ASP.NET AJAX. Check it now!
type: how-to
page_title: Vulnerabilities of jQuery versions embedded in UI for ASP.NET AJAX
slug: common-vulnerabilities-of-jquery-versions-embedded-in-ui-for-asp.net-ajax
res_type: kb
---


### PROBLEM

jQuery versions 1.11.1 and 1.12.4, which are embedded in various versions Telerik UI for ASP.NET AJAX, have the [Cross-site Scripting (XSS)](https://snyk.io/vuln/npm:jquery:20150627) and [Prototype Pollution](https://snyk.io/vuln/SNYK-JS-JQUERY-174006) vulnerabilities:

- [jquery@1.11.1](https://snyk.io/test/npm/jquery/1.11.1)
- [jquery@1.12.4](https://snyk.io/test/npm/jquery/1.12.4)


These vulnerabilities may be reported by static code scan tools as coming from the Telerik UI for ASP.NET AJAX suite or Telerik.Web.UI.WebResource handler.

**DESCRIPTION**

These reported vulnerabilities in jQuery 1.11.1 and 1.12.4 - in most cases this is considered a false positive or an application logic flaw and the jQuery team gave in to peer pressure when implementing a fix. You can read more of the discussion here: [Inadequate/dangerous jQuery behavior for 3rd party text/javascript responses](https://github.com/jquery/jquery/issues/2432).

A potential attack requires the following:

- The end user to perform a badly formed AJAX request without a data type. Your application code should not do that anyway.
- The response to be malicious. Your application should not be doing that either.
- For CORS requests - the end user must request data from a third party site manually (via the dev toolbar) and that data must attack the end user. Such a request should not be a part of the application code and if the user did that themselves, you cannot stop them. If the user is already compromised and third party code already executes in their browser, then the attacker can easily include the needed jQuery version even if your site brings jQuery 3 already.
- The jQuery variable must be widely known like window.$. Ours is in window.$telerik.$ so a generic attack would hardly know where to look for it. If the attacker is that specific, they could easily include jQuery 1.11.1 themselves, as part of the attack, instead of looking for ways to exploit the existing page.


Thus, your application in itself should not be exposed to a threat. Your end users should not be exposed via your application as well, yet fully protecting them is not possible from a developer perspective.  
  
 In general, static security scans should be reviewed in context. More often than not, issues they report are false positives and have their justifications. In this instance, the application code must be vulnerable, or the end user must already be compromised, in order for an attack to take place. The former is in the domain of the application developer, the latter is out of the developer's area of influence. Such an attack could/would occur regardless of the jQuery version present in our assembly.

### SOLUTION

#### Option 1. Upgrade to the latest version of Telerik UI for ASP.NET AJAX.

The following three fixes were backported to the Telerik jQuery. The code for these backports was provided by the jQuery team.

- [Backport](https://github.com/jquery/jquery/issues/2432#issuecomment-403761229) for [Cross-site Scripting (XSS)](https://snyk.io/vuln/npm:jquery:20150627) released in [UI for ASP.NET AJAX R1 2019 (version 2019.1.115)](https://www.telerik.com/support/whats-new/aspnet-ajax/release-history/ui-for-asp-net-ajax-r1-2019-%28version-2019-1-115%29)
- [Backport](https://github.com/DanielRuf/snyk-js-jquery-174006?files=1) for [Prototype Pollution](https://snyk.io/vuln/SNYK-JS-JQUERY-174006) released in [UI for ASP.NET AJAX R2 2019 (version 2019.2.514)](https://www.telerik.com/support/whats-new/aspnet-ajax/release-history/ui-for-asp-net-ajax-r2-2019-%28version-2019-2-514%29)
- [Backport](https://github.com/jquery/jquery/commit/1d61fd9407e6fbe82fe55cb0b938307aa0791f77) for [Cross-site scripting (XSS) vulnerability in jQuery.htmlPrefilter fixed in jQuery 3.5](https://blog.jquery.com/2020/04/10/jquery-3-5-0-released/) - fixed from R2 2020 (version 2020.2.512)


#### Option 2. Include external jQuery

You can include external jQuery with another version of your choice. Instructions for that are described in the [Using jQuery](https://docs.telerik.com/devtools/aspnet-ajax/general-information/using-jquery/using-jquery) and [Disabling the Embedded jQuery](https://docs.telerik.com/devtools/aspnet-ajax/controls/scriptmanager/disabling-the-embedded-jquery) articles. When you disable the jQuery embedded in the Telerik.Web.UI assembly, you must provide your own version. Note that static code scans may still detect the existence of the Telerik jQuery in our assembly and still produce a false positive warning, even though it is not loaded on the web pages.  
  
 You can find more information on the matter in the following articles: [Embedded jQuery Security](https://docs.telerik.com/devtools/aspnet-ajax/general-information/using-jquery/using-jquery#embedded-jquery-security) and [jQuery Version History in Telerik UI Controls](https://docs.telerik.com/devtools/aspnet-ajax/general-information/using-jquery/using-jquery#jquery-version-history-in-telerik-ui-controls).


 