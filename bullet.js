/*
 * bullet.js
 *
 * Defines a bullet.
 *
 * Author: Andrew Ford
 */

var Bullet = me.ObjectEntity.extend(
{
    init: function( x, y, v, damage )
    {
        // doesn't make sense to set settings in tiled since these are
        // obviously dynamic, so set here
        // player/enemy will instantiate & add to me.game on fire
        var settings = new Object();
        settings.image = "bullet";
        settings.spritewidth = 16;
        
        this.parent( x, y, settings );
        
        this.damage = damage;
        
        this.vel = v;
        this.setFriction( 0.0, 0.0 );
        this.gravity = 0.0;
        
        this.counter = 0;
        this.counterMax = 25;
    },
       
    update: function()
    {
        this.updateMovement();        
        
        // check collision
        
        this.counter++;
        if ( this.counter > this.counterMax )
        {
            me.game.remove( this ).defer();
        }
        
        return this.parent( this );
    }
});
