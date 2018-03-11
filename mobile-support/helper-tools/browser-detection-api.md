---
title: Browser Detection API
page_title: Browser Detection API | UI for ASP.NET AJAX Documentation
description: Browser Detection API offered by Telerik UI for ASP.NET AJAX
slug: mobile-support/helper-tools/browser-detection-api
tags: mobile,support,browser,detection,api
published: True
position: 0
---

# Browser Detection API

To facilitate client-side development with the controls in the Telerik UI suite, Telerik provides a set of static client-side JavaScript objects under the global **Telerik** namespace that you can use for browser detection. Where possible, feature detection is used, and in other places the user agent string is parsed.

You can find the lits of flags below.

The **Telerik** global object is loaded into the window object whenever you add a UI control from the Telerik.Web.UI namespace to the page. Alternatively, if you do not use any Telerik control, but have referenced the assembly Telerik.Web.UI.dll you can manually reference the needed JavaScript resource file:

````ASP.NET
<asp:ScriptManager runat="server" ID="ScriptManager1">
    <Scripts>
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
    </Scripts>
</asp:ScriptManager>
````

The **Telerik** object provides the following set of static properties for browser detection:

>caption Platform detection under the `Telerik.Web.Platform` object:

* `Telerik.Web.Platform.android` - returns `true` if the browser is on an **Android** device.

* `Telerik.Web.Platform.ios` - returns `true` if the browser is on an **iOS** device.

* `Telerik.Web.Platform.ipad` - returns `true` if the browser is on an **iPad**.

* `Telerik.Web.Platform.iphone` - returns `true` if the browser is on an **iPhone**.

* `Telerik.Web.Platform.linux` - returns `true` if the browser is on a **Linux** device.

* `Telerik.Web.Platform.mac` - returns `true` if the browser is on a **Mac**.

* `Telerik.Web.Platform.windows` - returns `true` if the browser is on a **Windows** device.

* `Telerik.Web.Platform.windowsphone` - returns `true` if the browser is on a **Windows Phone** device.


>caption Browser detection under the `Telerik.Web.Browser` object:

* `Telerik.Web.Browser.chrome` - returns `true` if  the browser is **Chrome**.

* `Telerik.Web.Browser.documentMode` - returns the **document mode** of the browser (IE only).

* `Telerik.Web.Browser.edge` - returns `true` if  the browser is **Edge**.

* `Telerik.Web.Browser.edgemobile` - returns `true` if  the browser is **Edge Mobile**.

* `Telerik.Web.Browser.ff` - returns `true` if  the browser is **Firefox**.

* `Telerik.Web.Browser.fullVersion` - returns the **full version number** of the browser.

* `Telerik.Web.Browser.ie` - returns `true` if  the browser is **Internet Explorer**.

* `Telerik.Web.Browser.iemobile` - returns `true` if  the browser is **IE Mobile**.

* `Telerik.Web.Browser.opera` - returns `true` if  the browser is **Opera**.

* `Telerik.Web.Browser.operaMini` - returns `true` if  the browser is **Opera Mini**.

* `Telerik.Web.Browser.operaPresto` - returns `true` if  the browser is **Opera Presto** (version < 12).

* `Telerik.Web.Browser.quirksMode` - returns `true` if IE is in **Quirks Mode**.

* `Telerik.Web.Browser.safari` - returns `true` if  the browser is **Safari**.

* `Telerik.Web.Browser.scrollBarWidth` - returns the withs of the browser scrollbars in pixels.

* `Telerik.Web.Browser.standardsMode` - returns `true` if the browser is running in **standards mode**.

* `Telerik.Web.Browser.version` - returns the **short version number** of the browser.

* `Telerik.Web.Browser.webkit` - returns `true` if  the browser is **WebKit-based**.



>caption Feature detection under the `Telerik.Web.BrowserFeatures` object:

* `Telerik.Web.BrowserFeatures.canvas` - returns `true` if the browser supports the `<canvas>` object.

* `Telerik.Web.BrowserFeatures.input` - returns an array of boolean flags that indicate whether the browser supports the following **input features**:
	* `autocomplete`
	* `autofocus`
	* `list`
	* `max`
	* `min`
	* `multiple`
	* `pattern`
	* `placeholder`
	* `required`
	* `step`
* `Telerik.Web.BrowserFeatures.inputTypes` - returns an array of boolean flags that indicate whether the browser supports the following **input types**:
	* `color`
	* `date`
	* `datetime`
	* `datetime-local`
	* `email`
	* `month`
	* `number`
	* `range`
	* `search`
	* `tel`
	* `time`
	* `url`
	* `week`
* `Telerik.Web.BrowserFeatures.msPointerEvents` - returns `true` if the browser supports the **MS pointer events**.

* `Telerik.Web.BrowserFeatures.pointerEvents` - returns `true` if the browser supports the **standard pointer events**.

* `Telerik.Web.BrowserFeatures.propertychange` - returns `true` if the browser supports the **propertychange notifier**.

* `Telerik.Web.BrowserFeatures.touchAndMouseEvents` - returns `true` if the browser supports **both touch and mouse events (i.e., it is a mixed device)**.

* `Telerik.Web.BrowserFeatures.touchEvents` - returns `true` if the browser supports **touch events**. **This usually indicates a mobile device**.



## See Also

* [Telerik Static Client Library]({%slug controls/telerik-static-client-library%})
