/*
 * playership.js
 *
 * Main file for Planet Earth Is Blue (alternate melon version)
 *
 * Author: Andrew Ford
 */

var PlayerShip = me.ObjectEntity.extend(
{
    init: function( x, y, settings )
    {
        this.parent( x, y, settings );
        
        this.setVelocity( 4.0, 4.0 );
        this.setFriction( 0.4, 0.4 );
        this.gravity = 0.0;
        
        this.bulletCooldown = 10;
        this.bulletCooldownCounter = 0;
        
        me.game.viewport.follow( this.pos, me.game.viewport.AXIS.BOTH );
        
        me.input.bindKey( me.input.KEY.LEFT, "left" );
        me.input.bindKey( me.input.KEY.RIGHT, "right" );
        me.input.bindKey( me.input.KEY.UP, "up" );
        me.input.bindKey( me.input.KEY.DOWN, "down" );
        me.input.bindKey( me.input.KEY.X, "shoot" );
        me.input.bindKey( me.input.KEY.CTRL, "bomb" );
    },
    
    update: function()
    {
        this.vel.y = -2.0;
        
        if ( me.input.isKeyPressed( "left" ) )
        {
            this.vel.x -= this.accel.x;
        }
        else if ( me.input.isKeyPressed( "right" ) )
        {
            this.vel.x += this.accel.x;
        }
        if ( me.input.isKeyPressed( "up" ) )
        {
            this.vel.y -= this.accel.y;
        }
        else if ( me.input.isKeyPressed( "down" ) )
        {
            this.vel.y += this.accel.y;
        }
        
        this.updateMovement();
        
        if ( me.input.isKeyPressed( "shoot" ) && this.bulletCooldownCounter == 0 )
        {
            var v = new me.Vector2d( 0.0, -7.5 );
            var bullet = new Bullet( this.pos.x + 8, this.pos.y - 16, v, 1.0 );
            me.game.add( bullet, 5 );
            me.game.sort();
            this.bulletCooldownCounter = this.bulletCooldown;
        }
        
        if ( this.bulletCooldownCounter > 0 )
        {
            this.bulletCooldownCounter--;
        }
        
        if ( this.vel.x != 0 || this.vel.y != 0 )
        {
            this.parent( this );
        }
        return true;
    }
});
