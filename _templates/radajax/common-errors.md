#known-errors

This help article describes common reasons for error messages and their solutions.

* **`SyntaxError`** (for IE) or **`Uncaught SyntaxError: Failed to execute 'insertRule' on 'CSSStyleSheet': Failed to parse the rule'`** (for Chrome), or **`SyntaxError: An invalid or illegal string was specified`** (for FireFox).

	This error is caused by having commented CSS rules (e.g., `/* .someClass { display: none; } */`) in the `<head>` of your page.

	RadAjax controls update the `<head>` of the page to let controls register stylesheets and scripts during an AJAX request and such commented rules cannot be parsed by the engine.

	There are two solutions:

	* Set the `EnablePageHeadUpdate` property of the RadAjax control to `false`.

	* Remove the commented CSS rule or move it to a separate stylesheet file.


* **Receiving `Sys.WebForms.PageRequestManagerParserErrorException`.** You may receive this error if you have used **RadAjaxPanel** and **RadAjaxManager** to AJAX-enable the same control at the same time. You can read more about the problem in the [Controls Wrapped in AjaxPanel and Added to AjaxManager Settings]({%slug ajaxmanager/troubleshooting/controls-wrapped-in-ajaxpanel-and-added-to-ajaxmanager-settings%}) help article.


* **The state information is invalid for this page and might be corrupted.** Firefox 1.5 and up uses in-memory caching for entire web pages, including their JavaScript states, for a single browser session. Going backward and forward between visited pages requires no page loading and the JavaScript states are preserved. This feature, referred to by some as bfcache (for "Back-Forward Cache"), makes page navigation very fast. This caching state is preserved until the user closes the browser.Please refer to the [Ajax, ViewState and Firefox]({%slug ajaxpanel/troubleshooting/firefox-specifics%}) help article for more information and a workaround.

* Dialog with the following error: **`Unexpected AJAX response was received from the server`**. This may be caused by one of the following reasons:

	* `Server.Transfer()`.
	* Custom HTTP handler.
	* Incorrect loading of an AJAX-enabled user control.

	**Verify that you don't get a server-side exception or any other undesired behavior, by setting the `EnableAJAX` property to `false`**.

	Most often people see this error when using the `Server.Transfer` method. Note that some controls may use this method internally (like the `asp:LoginView` control). In order to redirect to another page in an AJAX-enabled application, you should use the approaches mentioned in the [Redirecting to another page] ({%slug ajaxpanel/how-to/redirecting-to-another-page%}) help article. In most cases, `Response.Redirect` does the trick. You can also try using the `Redirect` method of the `RadAjax` control you use.

	Another reason you might see this error is because the application improperly loads user controls. The [Loading user controls]({%slug ajaxpanel/how-to/load-user-controls%}) help topic will help you fix the error in your code.

	Additionally, if the suggestions above do not help, you could disable AJAX as suggested in the error message. This will help you verify whether the error is related to using AJAX and if it is not, to fix any server-side errors if any are thrown.

#end