---
title: Use Material Skin Without Active Internet Connection
description: Use Material Skin Without Active Internet Connection. Check it now!
type: how-to
page_title: Use Material Skin Without Active Internet Connection - Telerik UI for ASP.NET AJAX - KB
slug: common-use-material-skin-without-active-internet-connection
res_type: kb
---



### HOW TO

Use the Material skin without an active Internet connection.

### DESCRIPTION

The Material skin requires an active Internet connection in order to download the Roboto font. If the client does not have access to the cloud, the page may load slowly while the browser waits for the request to time out. You may also get errors in the console similar to **net::ERR\_NAME\_RESOLUTION\_FAILED** for the fonts.gstatic.com domain requests.

The guidelines Google provide for using their fonts indicate that these fonts are to be requested from their cloud. This is the first and foremost reason why such requests are needed, and why we have [documented this information](https://docs.telerik.com/devtools/aspnet-ajax/general-information/controlling-visual-appearance/fonts#skins-with-predefined-font-family).

The second reason is the several variations of this font are extremely large and will, effectively, double the Telerik assembly size, should we bring them with our controls. This is not an acceptable solution for the many clients, especially those working in a SharePoint environment. Another downside to this is that such a resource copy is likely to lag behind updates Google implement.

### SOLUTION

There is a way to override the way we load the Roboto font in order to reference local files. Here are two approaches that acheive this behavior:

#### Override With Code Snippet

You can use only the code snippet below and put it in your own site stylesheet in order to override the font we use. In this case you will still have the requests to the cloud, but they will not break the skin appearance. This may be an acceptable solution in some cases and it is easier to implement and maintain.

````CSS
@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto'),
        local('Roboto-Regular'),
        url(/path/to/Roboto-Regular.woff) format('woff'),
        url(/path/to/Roboto-Regular.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
}
@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: local('Roboto Medium'),
        local('Roboto-Medium'),
        url(/path/to/Roboto-Medium.woff) format('woff'),
        url(/path/to/Roboto-Medium.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
}
````

#### Create a Local CDN

The second approach is to create a local CDN where you will make the changes to the file itself, and will avoid loading custom snippets on your page.

1. Implement a local CDN on your server so your users can access it without an active Internet connection: [https://docs.telerik.com/devtools/aspnet-ajax/controls/scriptmanager/cdn-support/custom-cdn-provider](http://docs.telerik.com/devtools/aspnet-ajax/controls/scriptmanager/cdn-support/custom-cdn-provider). You can use only the Skins folder to work with the stylesheets alone, modifying scripts or hosting them on a custom CDN is not necessary.
2. Setup your `RadStyleSheetManager` to use that CDN instead of the cloud as described in the article above.
3. Find the Material skin file and replace the references to the Roboto font with the code from the approach above **Override With Code Snippet**. Ensure your local copies of the fonts are in the same CDN folder and can be resolved.  

    >note  You can find our references in the **Skins\ajax\<your version here>\Common\fonticons.css** file. The ajaxz folder contains the same files pre-zipped, so which one you use depends on your deployment scenario.  

4. Ensure that this change will be persisted when you upgrade our controls and the relevant CDN files.


**Note**: With this approach you will need to ensure the correct font variation is available. You can use the following site as a starting point: [https://fonts.google.com/specimen/Roboto](https://fonts.google.com/specimen/Roboto). When you click the `Select This Font` in the top right-hand side you will get a popup with links that contain the appropriate code and URLs for your browser, depending on the fonts it supports (for example .woff, .ttf, .eot). This is where you will need to tweak your setup.

  
  
### Prevent the references to fonts.gstatic.com

If the [Content Security Policy is enabled in IIS](https://docs.telerik.com/devtools/aspnet-ajax/general-information/troubleshooting/content-security-policy), you may experience calls to `https://fonts.gstatic.com`. The presence of the *font-src 'self'* section causes Chrome to evaluate all fonts on the page and this will also trigger requests to the Google cloud for the Roboto font, even if it is not used by the page (i.e., the Material skin is not used).   

You can find more details on the topic in the documentation: [UI for ASP.NET AJAX and CSP](https://docs.telerik.com/devtools/aspnet-ajax/general-information/troubleshooting/content-security-policy#ui-for-aspnet-ajax-and-csp).


## See Also

* [UI for ASP.NET AJAX and CSP](https://docs.telerik.com/devtools/aspnet-ajax/general-information/troubleshooting/content-security-policy#ui-for-aspnet-ajax-and-csp)
* [Content Security Policy is enabled in IIS](https://docs.telerik.com/devtools/aspnet-ajax/general-information/troubleshooting/content-security-policy)
* [Custom CDN Provider](https://docs.telerik.com/devtools/aspnet-ajax/controls/scriptmanager/cdn-support/custom-cdn-provider)

