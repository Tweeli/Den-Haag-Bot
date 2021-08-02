const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.lineReply("> 1. Wat is uw roblox naam? \n> 2. Wat is uw discord naam? \n> 3. Hoe oud ben je? \n> 4. Wat is uw motivatie voor staff? \n> 5. Hoe Vaak bent u online? *(cijfer 1 tot 10)* \n> 6. Wat wilt u verbeteren? \n> 7. Wat zijn uw + punten? \n> 8. Wat zijn uw - Punten? \n> 9. Wat doet u als u ziet dat een staff scheld/mensen kickt uit het niets? \n> 10. Wat doet u als er een ruzie is tussen 2 mensen of meer? \n> 11. Wat doet u als een Lid niet helemaal lekker in zijn vel zit? \n> 12. Wat doet u als een Lid in een verkeerde channel praat?  \n> 13. Wat doe je als iemand met  erge ziektes scheld? \n> 14. Wat doe je als iemand je training verstoord of van een ander? \n> 15. Wat doe je als je vriend een regel overtreedt? \n> 16. Kan je goed werken in een team verband? \n> 17. Wat is AA? \n> 18. Wat doe je als een HR aan AA doet? \n> 19. Wat doe je als een HC aan AA doet? \n> 20. Wat vind u belangrijk? \n> 21. Zijn er nog dingen die wij moeten weten? *(als u het niet wilt zeg dan: jullie hoeven het niet te weten)* \n> 22: Hoe ziet uw training eruit? *(minimaal 50 woorden)* \n> 23. Waarom moeten we u aannemen? \n> 24. Noem een willekeurig begrip op en wat het betekent? *(van uw dienst)* \n> 25. Wat is de functie van uw dienst? \n> 26. Maak een leuke afsluiting.");

}

module.exports.help = {
    name: "solli-vragen",
    aliases: ["soli-vragen"]
}