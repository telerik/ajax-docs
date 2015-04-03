---
title: Collections
page_title: Collections | UI for ASP.NET AJAX Documentation
description: Collections
slug: socialshare/configuring-buttons/collections
tags: collections
published: True
position: 2
---

# Collections



## 

The __RadSocialShare__ offers two inner tags that are used to declare the list of buttons that are shown to the user. These are the __MainButtons__ and __CompactButtons__ collections. They both contain the__<telerik:RadSocialButton />__ items which are the actual buttons.

````ASPNET
	    <telerik:RadSocialShare runat="server" ID="RadSocialShare1" UrlToShare="http://www.telerik.com/products/aspnet-ajax.aspx">
	        <MainButtons>
	            <telerik:RadSocialButton SocialNetType="ShareOnFacebook" />
	            <telerik:RadSocialButton SocialNetType="ShareOnTwitter" />
	            <telerik:RadSocialButton SocialNetType="SendEmail" />
	            <telerik:RadCompactButton />
	        </MainButtons>
	        <CompactButtons>
	            <telerik:RadSocialButton SocialNetType="LinkedIn" />
	            <telerik:RadSocialButton SocialNetType="Delicious" />
	            <telerik:RadSocialButton SocialNetType="Digg" />
	        </CompactButtons>
	    </telerik:RadSocialShare>
````



The buttons which are declared in the __MainButtons__ collection are always visible on the page and are on the main bar of the__RadSocialShare__.

The buttons from the __CompactButtons__ collection are shown in a __RadWindow__ which also provides a search box to filter the available buttons by their name. In order to trigger the popup you need the __<telerik:RadCompactButton />__ in the __MainButtons__ collection.

>tip If __CompactButtons__ collection is left empty all the __Styled Buttons__ that are *not* in the __MainButtons__ collection will be automatically populated in the popup.
>


The __<telerik:RadCompactButton />__ in the __MainButtos collection__ opens the popup centered and sized to that it fits the contents (the available buttons).It also has the properties from the [Styled Buttons]({%slug socialshare/configuring-buttons/styled%}) so that you can choose a different position and size.

There is another option to show the __CompactButtons collection__ - by declaring a __<telerik:RadSocialButton />__whose __SocialNetType__ property is set to __CompactButton__. In that case the popup takes the dimensionsand position set for the rest of the social network popups and does not autosize to fit the contents.

See [this help article]({%slug socialshare/getting-started/structure%}) for more information on the structure of the __RadSocialShare__.

# See Also

 * [RadSocialShare structure]({%slug socialshare/getting-started/structure%})

 * [Styled Buttons]({%slug socialshare/configuring-buttons/styled%})

 * [Standard Buttons]({%slug socialshare/configuring-buttons/standard%})
