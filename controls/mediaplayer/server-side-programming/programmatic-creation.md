---
title: Programmatic Creation
page_title: Programmatic Creation | RadMediaPlayer for ASP.NET AJAX Documentation
description: Programmatic Creation
slug: mediaplayer/server-side-programming/programmatic-creation
tags: programmatic,creation
published: True
position: 1
---

# Programmatic Creation



## 

In some scenarios it is required to create the **RadMediaPlayer** control programmatically. Depending on some user interaction or selection, you can even build up the Playlist anew. The following example demonstrates a generic dynamic creation and configuration of the player and adds it to the main Controls collection. You can add it to a PlaceHolder or similar container control instead.



````C#
	    protected void Page_Init(object sender, EventArgs e)
	    {
	        BuildPlayer();
	    }
	    private void BuildPlayer()
	    {
	        RadMediaPlayer player = new RadMediaPlayer()
	            {
	                ID = "RadMediaPlayer1",
	                Height = Unit.Pixel(360),
	                Width = Unit.Pixel(640),
	                Skin = "Metro",
	                AutoPlay = true,
	                Title = "Video 1",
	                Poster = "~/VideoPosters/poster1.jpg",
	                Source = "~/Video/video1.mp4"
	            };
	
	        player.Load += (s, a) =>
	        {
	            player.TitleBar.ShareButton.Visible = false;
	            player.ToolBar.HDButton.Visible = false;
	        };
	
	        Form.Controls.Add(player);
	    }
````
````VB
	    Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
	        BuildPlayer()
	    End Sub
	    Private Sub BuildPlayer()
	        Dim player As New RadMediaPlayer() With {
	            .ID = "RadMediaPlayer1",
	            .Height = Unit.Pixel(360),
	            .Width = Unit.Pixel(640),
	            .Skin = "Metro",
	            .AutoPlay = True,
	            .Title = "Video 1",
	            .Poster = "~/VideoPosters/poster1.jpg",
	            .Source = "~/Video/video1.mp4"
	        }
	
	        AddHandler player.Load, Sub()
	                                    player.TitleBar.ShareButton.Visible = False
	                                    player.ToolBar.HDButton.Visible = False
	                                End Sub
	
	        Form.Controls.Add(player)
	    End Sub
````


For creating the Playlist feature dynamicallyand to examine a bit more advanced scenario, you can check the [Programmatic Creation Code-Library](http://www.telerik.com/support/code-library/programmatic-creation-and-configuration-of-the-media-player-control).

# See Also

 * [Overview]({%slug mediaplayer/overview%})

 * [Video Gallery Demo](http://demos.telerik.com/aspnet-ajax/media-player/examples/applicationscenarios/video-gallery/defaultcs.aspx)

 * [Getting Started]({%slug mediaplayer/getting-started%})
