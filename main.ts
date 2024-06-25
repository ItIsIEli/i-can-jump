namespace SpriteKind {
    export const FootBall = SpriteKind.create()
    export const SkateBoard = SpriteKind.create()
    export const ball = SpriteKind.create()
    export const bAt = SpriteKind.create()
    export const Oil = SpriteKind.create()
    export const OILBLOB = SpriteKind.create()
    export const pizza = SpriteKind.create()
    export const bubbles = SpriteKind.create()
    export const thing = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.OILBLOB, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (mySprite.y < otherSprite.y) {
        info.changeScoreBy(5)
    } else {
        info.changeLifeBy(-2)
    }
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bubbles, function (sprite, otherSprite) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(122, 13))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    info.changeLifeBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FootBall, function (sprite, otherSprite) {
    info.changeScoreBy(2)
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Oil, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    Oil_BLOB = sprites.create(img`
        . . f f f f f f f f . . . . . . 
        . f f f d f f d f f f . . . . . 
        . f f f b d f b d f f f f . . . 
        . . f f f f f f f f f f . . . . 
        . f f f f f . f f f f f f f . . 
        . . f f f f f f f f . f f f f . 
        . . f f f d d b f f f f f f f f 
        . f f f f d f f f f f f f f f f 
        . f f f f f f f f f f f f f f f 
        . . f f f f f f f f f f f f f f 
        . f f f f f f f . f f f f f . f 
        . f f f f f f f f f f f f . . f 
        . f f f f . f f f f f f f f . . 
        . . . . f f f f f f . f f f . . 
        . . . . . . f f f f . f f f . . 
        . . . . . . f f f . . f f . . . 
        `, SpriteKind.OILBLOB)
    Oil_BLOB.setPosition(mySprite.x + 60, mySprite.y + -60)
    Oil_BLOB.follow(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bAt, function (sprite, otherSprite) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(81, 10))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.SkateBoard, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    Unsharpenedpencil = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f f f f f f f f f f f f f f f 
        3 3 b 5 5 5 5 5 5 5 5 5 d d d d 
        3 3 b 5 5 5 5 5 5 5 5 5 5 d d d 
        3 3 b 5 5 5 5 5 5 5 5 5 5 d d d 
        f f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    Unsharpenedpencil,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f f f f f f f f f f f f f f f 
        3 3 b 5 5 5 5 5 5 5 5 5 d d d d 
        3 3 b 5 5 5 5 5 5 5 5 5 5 d d d 
        3 3 b 5 5 5 5 5 5 5 5 5 5 d d d 
        f f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    Unsharpenedpencil.setPosition(mySprite.x + 60, mySprite.y + -60)
    Unsharpenedpencil.follow(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(81, 10))
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.thing, function (sprite, otherSprite) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(128, 10))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ball, function (sprite, otherSprite) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(41, 12))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (mySprite.y < otherSprite.y) {
        info.changeScoreBy(5)
    } else {
        info.changeLifeBy(-1)
    }
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
let Unsharpenedpencil: Sprite = null
let Oil_BLOB: Sprite = null
let thingy: Sprite = null
let bubbles: Sprite = null
let pizza: Sprite = null
let OIL: Sprite = null
let BAT: Sprite = null
let BALL: Sprite = null
let Skate_Board: Sprite = null
let Foot_Ball: Sprite = null
let mySprite: Sprite = null
info.setLife(6)
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
for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
    BALL = sprites.create(assets.tile`myTile4`, SpriteKind.ball)
    tiles.placeOnTile(BALL, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
    BAT = sprites.create(img`
        . . . . . . . . . . . f f f . . 
        . . . . . . . . . . f f d f f . 
        . . . . . . . . . f f d d d f f 
        . . . . . . . . . f d d d d d f 
        . . . . . . . . f d d d d d f f 
        . . . . . . . f d d d d d f f . 
        . . . . . . f d d d d d f f . . 
        . . . . . . f d d d d f . . . . 
        . . . . . f b d d d f . . . . . 
        . . . . f b b d f f . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b f f . . . . . . . . . 
        . f f f f . . . . . . . . . . . 
        f e f f . . . . . . . . . . . . 
        f e e f . . . . . . . . . . . . 
        . f f . . . . . . . . . . . . . 
        `, SpriteKind.bAt)
    tiles.placeOnTile(BAT, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
    OIL = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f . . f f f f . . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f . f f . 
        . . . f f f f f f f f f . . f f 
        . . . f 1 1 1 f 1 f 1 f f . f f 
        . . . f 1 f 1 f f f 1 f f . f f 
        . . . f 1 f 1 f 1 f 1 f f f f . 
        . . . f 1 1 1 f 1 f 1 f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f f f f f f . . . . 
        `, SpriteKind.Oil)
    tiles.placeOnTile(OIL, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile12`)) {
    pizza = sprites.create(img`
        . . . . . f f . . . . . . . . . 
        . . . . f e e f . . . . . . . . 
        . . . f e e f f . . . . . . . . 
        . . f e e f 5 2 f . . . . . . . 
        . f e e f 5 5 2 f . . . . . . . 
        . f e f 5 2 2 5 5 f . . . . . . 
        . . f f 5 2 2 5 5 5 f . . . . . 
        . . . . f f 5 5 2 2 5 f . . . . 
        . . . . . . f 5 2 2 5 f . . . . 
        . . . . . . . f 5 5 5 2 f . . . 
        . . . . . . . . f f 5 2 f . . . 
        . . . . . . . . . . f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.pizza)
    tiles.placeOnTile(pizza, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(sprites.builtin.forestTiles0)) {
    bubbles = sprites.create(img`
        . . . . . . . . . f f f f f . . 
        . f f f f f . . f 9 9 9 9 9 f . 
        f 9 9 9 9 9 f . f 9 9 9 9 9 f . 
        f 9 9 9 9 9 f . f 9 9 9 9 9 f . 
        f 9 9 f f f f f f 9 9 9 9 9 f . 
        f 9 9 f 9 9 f f f 9 9 9 9 9 f . 
        f 9 9 f 9 9 f f f f f f f f . . 
        . f f f f f 9 f 9 9 9 9 9 f . . 
        f f f f f f f f f f 9 9 9 f . . 
        f 9 9 9 f f 9 f 9 f 9 9 9 f . . 
        f 9 9 9 f f 9 f f f 9 9 9 f . . 
        f 9 9 9 f f f f f 9 9 9 9 f . . 
        f f f f f f f 9 f 9 9 f f f f f 
        f f f 9 9 f f f f 9 9 f 9 f 9 f 
        f 9 f 9 9 9 f f f f f f f f 9 f 
        f f f 9 9 9 9 9 9 9 9 f 9 9 9 f 
        `, SpriteKind.bubbles)
    tiles.placeOnTile(bubbles, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile11`)) {
    thingy = sprites.create(img`
        3 . . . . . . . . . . . . . . . 
        . 3 . . . . . . . . . . . . . . 
        . . 3 . . 6 . . . . . . . . . . 
        . . . 3 . . 6 . d . . 5 . . . . 
        e . . . 3 . 6 d . . 5 . . . . . 
        . e . . . 3 6 . . . 5 . . . . . 
        . . e e 1 d 6 . . 5 . a a a a . 
        . . . . a a a 6 a a a 1 . . . . 
        a a a a . e . 6 5 . . . 1 1 1 . 
        . . d . . . e 6 3 . . . . . . . 
        . d . . . . 5 6 e 3 . . . . . . 
        . . . . . . 5 . 6 e 3 . . . . . 
        . . . . . . . . 6 . e e . . . . 
        . . . . . . . . 6 . . . e . . . 
        . . . . . . . . 6 . . . . e . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.thing)
    tiles.placeOnTile(thingy, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
