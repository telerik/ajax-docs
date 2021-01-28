---
title: Preserve the Content in RadEditor when Using Back Button
page_title: Preserve the Content in RadEditor when Using Back Button - RadEditor
description: Check our Web Forms article about You can learn here possible solutions to preserve content when user has navigated to a page with RadEditor by using the browser's back button.
slug: editor/how-to/preserve-content-on-back-button
tags: back, history, forward, previous, browser, content, preserve, hidden, textarea, form
published: True
position: 11
---

# Preserve the Content in RadEditor when Using Back Button

**RadEditor for ASP.NET AJAX** loses its content when the user navigates out of the page and comes back by using the **Back** button of the browser. 

Browsers automatically preserve the content in such scenarios only for form elements like `<textarea>`, `<input/>` and so on. Because **RadEditor** is an editable DOM element that the browser does not consider a form element field, the browswer does not preserve its contents automatically. 

**Possible solutions**:

* For **Chrome** and **Firefox**: You can use the `window.onbeforeunload` event in order to detect that the user is trying to navigate out of the page and save the content of **RadEditor** in its own hidden `<textarea>`.

	>caption Example 1: Solution with `window.onbeforeunload` event.


		<telerik:RadEditor runat="server" ID="RadEditor1" RenderMode="Lightweight"></telerik:RadEditor>

		<a href="https://www.telerik.com/">Navigate to www.telerik.com</a>

		<script>
			window.onbeforeunload = function (ev) {
				$find("<%= RadEditor1.ClientID %>").saveContent();
			};
		</script>


* For all browsers: IE cannot preserve the content during `window.onbeforeunload`. So you can either save the content in the `<textarea>` while text is being typed in or you can use `setInterval` to not affect the performance of your page.

	>caption Example 2: Solution with `onkeyup` event.


		<telerik:RadEditor runat="server" ID="RadEditor1" RenderMode="Lightweight" OnClientLoad="OnClientLoad"></telerik:RadEditor>

		<a href="https://www.telerik.com/">Navigate to www.telerik.com</a>

		<script>
			function OnClientLoad(editor, args) {
				editor.attachEventHandler("onkeyup", function (e) {
					editor.saveContent();
				});
			}
		</script>


	>caption Example 3: Solution with `setInterval` approach.


		<telerik:RadEditor runat="server" ID="RadEditor1" RenderMode="Lightweight" OnClientLoad="OnClientLoad"></telerik:RadEditor>

		<a href="https://www.telerik.com/">Navigate to www.telerik.com</a>

		<script>
			function OnClientLoad(editor, args) {
				setInterval(function () {
					editor.saveContent();
				}, 5000);
			}
		</script>


