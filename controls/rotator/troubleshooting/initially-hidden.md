---
title: Initially Hidden Rotator Does Not Show
page_title: Initially Hidden Rotator Does Not Show - RadRotator
description: Check our Web Forms article about show initially hidden rotator with JavaScript or CSS.
slug: rotator/troubleshooting/initially-hidden
tags: initially,hidden,show,css,javascript,collapsed
published: True
position: 0
---

# Initially Hidden Rotator Does Not Show

An initially hidden rotator that you show with CSS (e.g., `@media` query and a browser resize—**Example 2**) does not show up and still stays collapsed, or does not change its items.

This happens because the initial state of the element was hidden and the control cannot calculate the animations.

To fix this, call the `repaint` [client-side method]({%slug  rotator/client-side-programming/overview%}) after you show it. **Example 1** shows a basic JavaScript function you can use.

>caption Example 1: How to repaint all rotator instances on a page when needed

````JavaScript
function repaintRotator() {
	$telerik.$(".RadRotator").each(function (index, elem) {//get all rotators
		//check if it is visible before repainting + defensive checks to ensure errors are not thrown
		if (elem && elem.control && $telerik.$(elem).is(":visible") && elem.control.repaint) {
			elem.control.repaint();
		}
	});
}
````


>caption Example 2: Increasing the size of the browser causes the rotator not to be shown, so you should repaint it

````ASP.NET
<telerik:RadPageLayout runat="server" ID="ContentPageLayout">
	<Rows>
		<telerik:LayoutRow>
			<Columns>
				<telerik:LayoutColumn HiddenMd="true" HiddenSm="true" HiddenXs="true" Span="8">
					<telerik:RadRotator RenderMode="Lightweight" ID="RadRotator1" runat="server" RotatorType="AutomaticAdvance" ScrollDuration="500" FrameDuration="100" ItemWidth="655px" ItemHeight="320px" Width="655px" Height="320px" ScrollDirection="Left">
						<Items>
							<telerik:RadRotatorItem>
								<ItemTemplate>
									first item
								</ItemTemplate>
							</telerik:RadRotatorItem>
							<telerik:RadRotatorItem>
								<ItemTemplate>
									second item
								</ItemTemplate>
							</telerik:RadRotatorItem>
						</Items>
					</telerik:RadRotator>
				</telerik:LayoutColumn>
				<telerik:LayoutColumn HiddenMd="false" HiddenSm="false" HiddenXs="false" Span="4">
					start your browser small and maximize it
				</telerik:LayoutColumn>
			</Columns>
		</telerik:LayoutRow>
	</Rows>
</telerik:RadPageLayout>
<script>
	function repaintRotator() {
		$telerik.$(".RadRotator").each(function (index, elem) {//get all rotators
			//check if it is visible before repainting + defensive checks to ensure errors are not thrown
			if (elem && elem.control && $telerik.$(elem).is(":visible") && elem.control.repaint) {
				elem.control.repaint();
			}
		});
	}

	var TO = false;

	$telerik.$(window).resize(function () {
		if (TO !== false)
			clearTimeout(TO);
		TO = setTimeout(repaintRotator, 200); //200 is time in milliseconds
	});
</script>
````

