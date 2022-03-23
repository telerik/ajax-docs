#known-errors

This article lists the common error messages which may occur when working with Telerik UI for ASP.NET AJAX, and their causes and solutions.

* The `SyntaxError` in Internet Explorer, `Uncaught SyntaxError: Failed to execute 'insertRule' on 'CSSStyleSheet': Failed to parse the rule'` in Chrome, or `SyntaxError: An invalid or illegal string was specified` in FireFox occur.

	The cause for this error is the commented CSS rules in the `<head>` of your page, for example, `/* .someClass { display: none; } */`.

	The AjaxManager and Ajaxpanel update the `<head>` of the page to enable controls to register stylesheets and scripts during an AJAX request. Such commented rules cannot be parsed by the engine.

	To solve this issue, use any of the following approaches:

	* Set the `EnablePageHeadUpdate` property of the Ajax control to `false`.

	* Remove the commented CSS rule or move it to a separate stylesheet file.

	* Place the styles settings in external CSS files.


* `Sys.WebForms.PageRequestManagerParserErrorException` occurs.

	A possible cause for this error is the usage of the AjaxPanel and AjaxManager to AJAX-enable the same control at the same time. For more information on the issue, refer to the article on [using controls wrapped in an AjaxPanel and added to the AjaxManager settings]({%slug ajaxmanager/troubleshooting/controls-wrapped-in-ajaxpanel-and-added-to-ajaxmanager-settings%}).


* `The state information is invalid for this page and might be corrupted` error occurs. 

	Firefox version 1.5 and later use in-memory caching for entire web pages, including their JavaScript states, for a single browser session. Going backward and forward between visited pages requires no page loading and the JavaScript states are preserved. This feature, referred to by some as bfcache (for "Back-Forward Cache"), makes page navigation very fast. The caching state is preserved until the user closes the browser. For more information and a workaround, refer to the article on [using Ajax, ViewState, and Firefox]({%slug ajaxpanel/troubleshooting/firefox-specifics%}).

* `Unexpected AJAX response was received from the server` error occurs in a dialog. 

	The possible causes for this issue may be any of the following:

	* Using `Server.Transfer()`&mdash;Some controls may use this method internally, for example, the `asp:LoginView` control. To redirect to another page in an AJAX-enabled application, use the approaches from the article on [redirecting to another page]({%slug ajaxpanel/how-to/redirecting-to-another-page%}). To solve this issue, utilize `Response.Redirect`. You can also try using the `Redirect` method of the Ajax control you use.

	* Using a custom HTTP handler
	
	* Incorrect loading of an AJAX-enabled user control. To solve the issue, refer to the article on [loading user controls]({%slug ajaxpanel/how-to/load-user-controls%}).

	If the suggested solutions do not fix the issue, disable AJAX as suggested in the error message. Verify that you don't get a server-side exception or any other undesired behavior by setting the `EnableAJAX` property to `false`. This approach will help you verify whether the error is related to using AJAX and, if not, to fix any server-side errors if any are thrown.

#end