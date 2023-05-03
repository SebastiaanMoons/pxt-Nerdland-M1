//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmosEN {
    let order = 0;
    let lastPlaced = 0;

    //% block="startingPosition"
    export function startingPosition() {
        agent.teleport(world(87, 72, -28), EAST);
        player.execute("scoreboard players set @a woolDetected 0");
    }

    //% block="go to next level"
    export function goToNextLevel() {
        player.execute("execute @a[scores={progress=10..,ex1_lvl=1..6,ex1_move=0,woolDetected=0}] ~ ~ ~ execute @e[type=agent] ~ ~ ~ detect ~ ~-1 ~ gold_block 1 scoreboard players set @a ex1_move 1");
    }

    //% block="buildTop"
    export function buildTop() {
        if (lastPlaced === 3) {
            lastPlaced++;
            player.execute(
                "function exercises/parts/top"
            )
            order++;
            loops.pause(4000);
        } else {
            player.execute(
                'titleraw @a title {"rawtext":[{"translate":"title.subtitle.not.correct"}]}'
            )
        }

    }

    //% block="buildWarehouse"
    export function buildStorage() {
        if (lastPlaced === 0) {
            lastPlaced++;
            player.execute(
                "function exercises/parts/storage"
            )
            order++;
            loops.pause(4000);
        } else {
            player.execute(
                'titleraw @a title {"rawtext":[{"translate":"title.subtitle.not.correct"}]}'
            )
        }
    }

    //% block="buildLivingRoom"
    export function buildLivingRoom() {
        if (lastPlaced === 1) {
            lastPlaced++;
            player.execute(
                "function exercises/parts/living_room"
            )
            order++;
            loops.pause(4000);
        } else {
            player.execute(
                'titleraw @a title {"rawtext":[{"translate":"title.subtitle.not.correct"}]}'
            )
        }
    }

    //% block="buildDiningRoom"
    export function buildDiningRoom() {
        if (lastPlaced === 2) {
            lastPlaced++;
            player.execute(
                "function exercises/parts/dining_room"
            )
            order++;
            loops.pause(4000);
        } else {
            player.execute(
                'titleraw @a title {"rawtext":[{"text":"title.subtitle.not.correct","color":"red"}]}'
            )
        }
    }

    //% block="startBuilding"
    export function startBuild() {
        order = 0
        lastPlaced = 0
        player.execute(
            "function exercises/exercise2/reset"
        )
    }


}