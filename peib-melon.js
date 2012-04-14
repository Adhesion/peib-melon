/*
 * peib-melon.js
 *
 * Main file for Planet Earth Is Blue (alternate melon version)
 *
 * Author: Andrew Ford
 */

var gameResources = [
                    { name: "background1", type: "image", src: "data/background1.png" },
                    { name: "background2", type: "image", src: "data/background2.png" },
                    { name: "background3", type: "image", src: "data/background3.png" },
                    { name: "background4", type: "image", src: "data/background4.png" },
                    { name: "level1",      type: "tmx",   src: "data/level1.tmx" },
                    { name: "playership",  type: "image", src: "data/playership.png" },
                    ];

var jsApp =
{
    onload: function()
    {
        if ( !me.video.init( 'game', 640, 480 ) )
        {
            alert( "Sorry, it appears your browser does not support HTML5 canvas." );
            return;
        }
        
        me.audio.init( "mp3,ogg" );
        
        me.loader.onload = this.loaded.bind( this );
        
        me.loader.preload( gameResources );
        
        me.state.change( me.state.LOADING );
        alert( "loading?" );
    },
    
    loaded: function()
    {
        me.state.set( me.state.PLAY, new PlayScreen() );
        
        me.entityPool.add( "playerShip", PlayerShip );
        
        me.state.change( me.state.PLAY );
    }
};

var PlayScreen = me.ScreenObject.extend(
{
    onResetEvent: function()
    {
        // stuff to reset on state change
        me.levelDirector.loadLevel("level1");
    },

    onDestroyEvent: function()
    {
        
    }
});

window.onReady( function()
{
    alert( "fskjdfslkjf" );
    jsApp.onload();
});
