namespace SpriteKind {
    export const FootBall = SpriteKind.create()
    export const SkateBoard = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(false)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FootBall, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.SkateBoard, function (sprite, otherSprite) {
    Unsharpenedpencil = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f f f f f f f f f f f f f f f 
        3 3 b 5 5 5 5 5 5 5 5 5 d d d f 
        3 3 b 5 5 5 5 5 5 5 5 5 5 d d d 
        3 3 b 5 5 5 5 5 5 5 5 5 5 d d d 
        f f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
})
let Unsharpenedpencil: Sprite = null
let Skate_Board: Sprite = null
let Foot_Ball: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    . . . . f f f f f f f . . . . . 
    . . . . . . f 2 f . . . . . . . 
    . . . . . . f 2 f . . . . . . . 
    . . . . . . f 2 f . . . . . . . 
    . . . . . . f 2 f . . . . . . . 
    . . . . . . f 2 f . . . . . . . 
    . . . . . . f 2 f . . . . . . . 
    . . . . . . f 2 f . . . . . . . 
    . . . . . . f 2 f . . . . . . . 
    . . . . . . f 2 f . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
tiles.setCurrentTilemap(tilemap`level2`)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 300
for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
    Foot_Ball = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . f f f d d d f f . . . . 
        . . f f d d d e e e e e f f . . 
        . f e e e e e e e e e e e e f . 
        f e e e e e e e e e e e e e e f 
        . f e e e e e e e e e e e e f . 
        . . f f e e e e e e e e f f . . 
        . . . . f f f e e e f f . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.FootBall)
    animation.runImageAnimation(
    Foot_Ball,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . f f f d d d f f . . . . 
        . . f f d d d e e e e e f f . . 
        . f e e e e e e e e e e e e f . 
        f e e e e e e e e e e e e e e f 
        . f e e e e e e e e e e e e f . 
        . . f f e e e e e e e e f f . . 
        . . . . f f f e e e f f . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . f f f e e e f f . . . . 
        . . f f e e e d d d d d f f . . 
        . f d d d d d e e e e e e e f . 
        f e e e e e e e e e e e e e e f 
        . f e e e e e e e e e e e e f . 
        . . f f e e e e e e e e f f . . 
        . . . . f f f e e e f f . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . f f f e e e f f . . . . 
        . . f f e e e e e e e e f f . . 
        . f e e e e e e e e e e e e f . 
        f d d d d d d d d d d d d d d f 
        . f e e e e e e e e e e e e f . 
        . . f f e e e e e e e e f f . . 
        . . . . f f f e e e f f . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . f f f e e e f f . . . . 
        . . f f e e e e e e e e f f . . 
        . f e e e e e e e e e e e e f . 
        f e e e e e e e e e e e e e e f 
        . f d d d d d e e e e e e e f . 
        . . f f e e e d d d d d f f . . 
        . . . . f f f e e e f f . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . f f f e e e f f . . . . 
        . . f f e e e e e e e e f f . . 
        . f e e e e e e e e e e e e f . 
        f e e e e e e e e e e e e e e f 
        . f e e e e e e e e e e e e f . 
        . . f f d d d e e e e e f f . . 
        . . . . f f f d d d f f . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . f f f e e e f f . . . . 
        . . f f e e e e e e e e f f . . 
        . f e e e e e e e e e e e e f . 
        f e e e e e e e e e e e e e e f 
        . f e e e e e e e e e e e e f . 
        . . f f e e e e e e e e f f . . 
        . . . . f f f e e e f f . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . f f f e e e f f . . . . 
        . . f f e e e e e e e e f f . . 
        . f e e e e e e e e e e e e f . 
        f e e e e e e e e e e e e e e f 
        . f e e e e e e e e e e e e f . 
        . . f f e e e e e e e e f f . . 
        . . . . f f f e e e f f . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    tiles.placeOnTile(Foot_Ball, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
    Skate_Board = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f . . . . . . . . . . . . f . 
        . f f . . . . . . . . . . f f . 
        . e f f f f f f f f f f f f e . 
        . . e b b e e e e e e b b e . . 
        . . . b b . . . . . . b b . . . 
        `, SpriteKind.SkateBoard)
    tiles.placeOnTile(Skate_Board, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
