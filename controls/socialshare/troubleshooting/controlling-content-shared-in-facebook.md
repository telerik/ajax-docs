---
title: Controlling Content Shared in Facebook
page_title: Controlling Content Shared in Facebook - RadSocialShare
description: Check our Web Forms article about Controlling Content Shared in Facebook.
slug: socialshare/troubleshooting/controlling-content-shared-in-facebook
tags: controlling,content,shared,in,facebook
published: True
position: 1
---

# Controlling Content Shared in Facebook




When configuring your page to work with different social networks the developer may sometimes wish to control the exact content (or preview) that will be shared. To a certain extent this is possible through the **RadSocialShare** as it offers options to control the URL and the title of the post (see [this article]({%slug socialshare/functionality/controlling-posts%}) for more details).

This is not always sufficient, however. For example, Facebook crawls the page and by default shares the page title property, the first text found in the body of the page and prepares a list with the images it finds. There is no way for the **RadSocialShare** to influence this, as this is a separate request from the Facebook servers. There is, however, a way to explicitly set the title, images and text for your page by using the [Open Graph Protocol](http://ogp.me/) that Facebook support.

This approach consists of several meta tags in the head of the page in which you can set title, text, URL for the images, etc. More information on the way Facebook implements and reads these tags is available in their [online documentation](http://developers.facebook.com/docs/) and more precisely on [this page](http://developers.facebook.com/docs/opengraph/).

A point of interest can be the fact that after a certain number of likes are accumulated changes to the picture and title become more difficult and may require an admin reset. This is also explained in the above page in the Editing Meta Tags section. The useful tool for resetting the page is called Lint and can be accessed [here](http://developers.facebook.com/tools/lint). It also provides detailed information the crawler receives and can be helpful in making the page readabale by the Facebook bots.

Yet another peculiarity is that Facebook cache images for a certain URL. How this works, how long and how large the cache is is controlled by them and the only way to influence it is by resetting the page through the Lint tool.

Even more hints about troubleshooting problems with the predefined content can be found in [Anson Alexander's blog post](http://ansonalex.com/troubleshooting/fix-articles-linked-on-facebook-dont-display-thumbnails-images/) on the matter. For example - using static images instead ot handlers that download from a database (a workaround for this can be [using a static page to serve the image](http://forums.asp.net/t/1127267.aspx/1) so that the URL does not change), avoiding PNG images, using safe filenames, etc.

# See Also

 * [Controlling the content that will be in the preview of the post via the OpenGraph protocol](http://ogp.me/)

 * [Facebook online documentation](http://developers.facebook.com/docs/)

 * [OpenGraph in Facebook](http://developers.facebook.com/docs/opengraph/)

 * [Anson Alexander's blog - Fix- Articles Linked on Facebook Don't Display Thumbnails / Images](http://ansonalex.com/troubleshooting/fix-articles-linked-on-facebook-dont-display-thumbnails-images/)

 * [Facebook Lint tool - debugging and resetting content](http://developers.facebook.com/tools/lint)
