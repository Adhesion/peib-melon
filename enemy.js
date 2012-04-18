/*
 * enemy.js
 *
 * Defines an enemy.
 *
 * Author: Andrew Ford
 */

var Enemy = me.ObjectEntity.extend(
{
    init: function()
    {
        this.parent( x, y, settings );
        
        this.setVelocity( 4.0, 4.0 );
        this.setFriction( 0.45, 0.45 );
        this.gravity = 0.0;
    },
});
