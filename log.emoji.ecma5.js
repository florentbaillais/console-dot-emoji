/**
 *  log.emoji — Custom Console Logging with Emoji and CSS styles
 *
 *  forked from https://github.com/ines/console-dot-emoji by ines
 *  add CSS styles
 *  add support to chained objects logging eg console.log('some text', myobject, this)
 *  change console.* to log.*
 *
 *  MIT licensed
 *
 */

var log = {};
// Define your custom commands and emoji
var commands = [
    [ "unicorn", "🦄", "background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) ); background-image: gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) ); color:transparent; -webkit-background-clip: text; background-clip: text;"],
    [ "beer", "🍺"],
    [ "info", "💡", "color: #bada55; background-color: #222"],
    [ "success", "✔️", "color: darkgreen"],
    [ "warn", "💩", "color: orange"],
    [ "error", "️❌", "color: darkred"]
];

(function() {
    // Create custom log.* commands
    commands.forEach(function(command) {
        log[command[0]] = function() {
            // Get arguments as an array
            var args = [...arguments];
            // Log to the console with emoji and style
            console.log(command[1] + " %c" + args[0], command[2] || "color: black", ...args.splice(1, args.length - 1));
        }
    });
})();

// Log to the console!
log.unicorn("It's so magical to have unicorns here!",["this", "is", "an", "array"]);
log.beer("Cheers!");
log.info("I think this is it");
log.success("You did it!!");
log.warn("You should take care...");
log.error("Oh f*ck!");
