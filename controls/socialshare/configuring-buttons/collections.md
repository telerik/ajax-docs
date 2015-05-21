---
title: Collections
page_title: Collections | RadSocialShare for ASP.NET AJAX Documentation
description: Collections
slug: socialshare/configuring-buttons/collections
tags: collections
published: True
position: 2
---

# Collections



**RadSocialShare** offers two inner tags that are used to declare the list of buttons that are shown to the user. These are the **MainButtons** and **CompactButtons** collections. They both contain the **`<telerik:RadSocialButton />`** items which are the actual buttons.

````ASP.NET
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



The buttons which are declared in the **MainButtons** collection are always visible on the page and are on the main bar of the **RadSocialShare**.

The buttons from the **CompactButtons** collection are shown in a **RadWindow** which also provides a search box to filter the available buttons by their name. In order to trigger the popup you need the **`<telerik:RadCompactButton />`** in the **MainButtons** collection.

>tip If **CompactButtons** collection is left empty all the **Styled Buttons** that are *not* in the **MainButtons** collection will be automatically populated in the popup.
>


The **<telerik:RadCompactButton />** in the **MainButtos collection** opens the popup centered and sized to that it fits the contents (the available buttons).It also has the properties from the [Styled Buttons]({%slug socialshare/configuring-buttons/styled%}) so that you can choose a different position and size.

There is another option to show the **CompactButtons collection** - by declaring a **<telerik:RadSocialButton />** whose **SocialNetType** property is set to **CompactButton**. In that case the popup takes the dimensions and position set for the rest of the social network popups and does not autosize to fit the contents.

See [this help article]({%slug socialshare/getting-started/structure%}) for more information on the structure of the **RadSocialShare**.

# See Also

 * [RadSocialShare structure]({%slug socialshare/getting-started/structure%})

 * [Styled Buttons]({%slug socialshare/configuring-buttons/styled%})

 * [Standard Buttons]({%slug socialshare/configuring-buttons/standard%})
