---
title: Preserve the Content in RadEditor when Using Back Button
page_title:  Preserve the Content in RadEditor when Using Back Button | RadEditor for ASP.NET AJAX Documentation
description:  You can learn here possible solutions to preserve content when user has navigated to a page with RadEditor by using the browser's back button.
slug: editor/how-to/preserve-content-on-back-button
tags: back, history, forward, previous, browser, content, preserve, hidden, textarea, form
published: True
position: 11
---

# Preserve the Content in RadEditor when Using Back Button

**RadEditor UI for ASP.NET AJAX** looses its content when user navigates out of the page and comes back by using the **Back** button of the browser. Browsers automatically preserve the content in such scenario only for form elements like `<textarea>`, `<input/>` and so on. **RadEditor**, however, is an editable DOM element that the browser does not consider as a form element field so to preserve its contents automatically. 

Possible solutions: 

* For **Chrome** and **Firefox**: You can use the `window.onbeforeunload` event in order to detect that user navigates out of the page and save the content of **RadEditor** in its own hidden `<textarea>`.

	>caption Example 1: Solution with `window.onbeforeunload` event.


		<telerik:RadEditor runat="server" ID="RadEditor" RenderMode="Lightweight"></telerik:RadEditor>

		<a href="http://www.telerik.com/">Navigate to www.telerik.com</a>

		<script>
			window.onbeforeunload = function (ev) {
				$find("<%= RadEditor.ClientID %>").saveContent();
			};
		</script>


* For all browsers: IE cannot preserve the content during `window.onbeforeunload` and you can either save the content in the `<textarea>` while text is being typed in, or by using a `setTimeout` to not affect the performance of your page.

	>caption Example 2: Solution with `onkeyup` event.


		<telerik:RadEditor runat="server" ID="RadEditor" RenderMode="Lightweight" OnClientLoad="OnClientLoad"></telerik:RadEditor>

		<a href="http://www.telerik.com/">Navigate to www.telerik.com</a>

		<script>
			function OnClientLoad(editor, args) {
				editor.attachEventHandler("onkeyup", function (e) {
					editor.saveContent();
				});
			}
		</script>


	>caption Example 3: Solution with `setInterval` approach.


		<telerik:RadEditor runat="server" ID="RadEditor" RenderMode="Lightweight" OnClientLoad="OnClientLoad"></telerik:RadEditor>

		<a href="http://www.telerik.com/">Navigate to www.telerik.com</a>

		<script>
			function OnClientLoad(editor, args) {
				setInterval(function () {
					editor.saveContent();
				}, 5000);
			}
		</script>


