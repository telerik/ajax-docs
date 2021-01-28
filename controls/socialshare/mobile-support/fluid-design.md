---
title: Fluid Design
page_title: Fluid Design - RadSocialShare
description: Check our Web Forms article about Fluid Design.
slug: socialshare/mobile-support/fluid-design
tags: fluid,design,social share
published: True
position: 3
---

# Elastic Design


This article explains the **fluid design capabilities RadSocialShare offers**. 

@[template](/_templates/common/render-mode.md#resp-design-desc "slug-el: socialshare/mobile-support/elastic-design, slug-fl: no")


>caption Figure 1: RadSocialShare with dimensions set to 100% that occupies its entire parent element

![social-share-fluid-design](images/social-share-fluid-design.png)


You can set the **Width** and **Height** properties of the **RadSocialShare** in **percent**. This lets it resize together with its parent element.



>caption **Example 1**: A RadSocialShare that resizes with the parent element.

```CSS
html, body, form
{
	height: 100%;
	margin: 0;
	padding: 0;
}
<div style="width: 70%; height: 20%;">
	<telerik:RadSocialShare  RenderMode="Lightweight" runat="server" ID="RadSocialShare1" Width="100%" Height="100%">
		<MainButtons>
			<telerik:RadSocialButton SocialNetType="Blogger" />
			<telerik:RadSocialButton SocialNetType="ShareOnTwitter" ToolTip="Tweet this" />
			<telerik:RadSocialButton SocialNetType="Delicious" ToolTip="Share on Delicious" />
			<telerik:RadSocialButton SocialNetType="MySpace" ToolTip="Share on MySpace" />
			<telerik:RadSocialButton SocialNetType="Tumblr" ToolTip="Share on Tumblr" />
			<telerik:RadSocialButton SocialNetType="ShareOnTwitter" ToolTip="Tweet this" />
			<telerik:RadSocialButton SocialNetType="GoogleBookmarks" ToolTip="Share on GoogleBookmarks" />
			<telerik:RadCompactButton />
		</MainButtons>
	</telerik:RadSocialShare>
</div>
````



# See Also


 * [Render Modes]({%slug socialshare/mobile-support/render-modes%})

 * [Elastic Design]({%slug socialshare/mobile-support/elastic-design%})


