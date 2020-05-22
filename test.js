import jsonic from "jsonic"

let json = ` {"recipes": [
	{
        id: "studydehoris1",
        label: "Read De Horis, vol 1",
        actionId: "study",
        requirements: {dehoris1: 1},
        effects: {dehoris1: -1,fragmentmoth:1,erudition:1},
		startdescription: "This volume deals mostly with the Hours of the Wood: the Moth, the Black-Flax, the Ring-Yew, among others.",
        description: "'The Glory is a question, and the Moth always answers Yes. The Black-Flax's answer is No, and that is always its answer.'",
        warmup: 60,
        craftable: true
    },
		{
        id: "studydehoris2",
        label: "Read De Horis, vol 2",
        actionId: "study",
        requirements: {dehoris2: 1},
        effects: {dehoris2: -1,fragmentedge:1,erudition:1},
		startdescription: "This volume deals mostly with the Lionsmith, the Tribune of Scars, and their enmity.",
        description: "'The Lionsmith makes monsters to defeat the Tribune; but the scars of the Tribune are each a weapon.'",
        warmup: 60,
        craftable: true
    },
	{
        id: "studytravellingatnight1",
        label: "Read this volume of Travelling at Night",
        actionId: "study",
        requirements: {travellingatnight1: 1},
        effects: {travellingatnight1: -1, fragmentmoth:1,erudition:1},
		startdescription: "'The Wood lies outside the walls of the Mansus. As any student of Histories knows, the Mansus has no walls.'",
        description: "Illopoly describes how he came to make repeated visits to a dream-Wood via what he calls silver dreams. 'Trying to think your way to the Wood,' he explains, 'is like thinking your way to being in love. But I did find a Secret that helped.'",
        warmup: 60,
        craftable: true
    },
		{
        id: "studytravellingatnight2",
        label: "Read this volume of Travelling at Night",
        actionId: "study",
        requirements: {travellingatnight2: 1},
        effects: {travellingatnight2: -1, fragmentwinter:1,erudition:1},
		startdescription: "There is an extensive discussion of the similarities between Illopoly's own dreams and those of the Emperor Elagabalus, who Illopoly regards as a dupe or avatar of the Sun-in-Rags. 'The White is west of the world,' Illopoly remarks, 'and Winter does not wait forever.'",
		   description: "'Elagabalus found his way to the White Door at last, thankfully. Speech can't pass the White Door, and honestly, Elagabalus never had anything very interesting to say. I tried to follow in his footsteps, but I never learnt enough of the White. I suppose I'm thankful for that, too. But here's what I do know...'",
        warmup: 60,
        craftable: true
    },
			{
        id: "studytravellingatnight3",
        label: "Read this volume of Travelling at Night",
        actionId: "study",
        requirements: {travellingatnight3: 1},
        effects: {travellingatnight3: -1, fragmentforge:1,erudition:1},
		startdescription: "Illopoly's disquisitions on fire and the Unburnt God are interrupted by passages of distractingly erotic poetry addressed to 'Baldomera'.'",
        description: "'To reach the Stag Door, I believe that all you really need is to want something enough. But I've never wanted anything that much, except of course Baldomera, and I'm very much afraid that the knot in the story is this: what Baldomera wants is the Stag Door. But here's something I learnt in Persia. Perhaps it'll teach you what <i>you</i> want.'",
        warmup: 60,
        craftable: true
    },
		{
        id: "studysixlettersonnecessity",
        label: "Read the Six Letters on Necessity",
        actionId: "study",
        requirements: {sixlettersonnecessity: 1},
        effects: {sixlettersonnecessity: -1,fragmentforge:1,erudition:1},
		startdescription: "Coseley's tone is urgent - as if he suspected he might have little time left.",
        description: "'Even the Sunne can be divided, though it require the Forge of Dayes for its division.'",
        warmup: 60,
        craftable: true
    },
		{
        id: "studylocksmithsdream1",
        label: "Read this volume of the Locksmith's Dream",
        actionId: "study",
        requirements: {locksmithsdream1: 1},
        effects: {locksmithsdream1: -1,fragmentlantern:1,erudition:1},
		startdescription: "The parallels in mystic dreams experienced by carpenters, masons and other artisans, and what they purport to reveal about the architecture of the world. Sometimes mordant, sometimes funny. No-one has ever explained why Galmier devoted herself to this quixotic exploration of artisan's dreams.",
        description: "'Time and again we hear of the Wood, which rises from the world's foundation. All trees reach for light. What does the Wood reach for? Is there a difference between light and Light? I think the key to dreams of the Wood might be one of these - the one that isn't exactly real.'",
        warmup: 60,
        craftable: true
    },
	{
	        id: "studylocksmithsdream2",
        label: "Read this volume of the Locksmith's Dream",
        actionId: "study",
        requirements: {locksmithsdream2: 1},
        effects: {locksmithsdream2: -1,fragmentknock:1,erudition:1},
		startdescription: "In this volume, Galmier records fewer dreams, and explicates more of her own elaborate theories. 'We see this again and again: what is below can't escape what is above.'",
        description: "'The finest artisans all dream of the White Door in the end. I'm no artisan, only a scholar. I think there's a Secret that all these artisans know, but I think that Secret is only half the story.'",
        warmup: 60,
        craftable: true
    },
		{
	        id: "studylocksmithsdream3",
        label: "Read this volume of the Locksmith's Dream",
        actionId: "study",
        requirements: {locksmithsdream3: 1},
        effects: {locksmithsdream3: -1,fragmentmothb:1,glimmering:1},
		startdescription: "In this volume, notoriously, Galmier's prose begins to disintegrate, and it is not clear which dreams are in fact her own.",
        description: "'The woman in the sand-coloured robe has told me: the stairways of the Mansus go ever up. Death is down. The Mother of Ants guards both directions with each of her heads, and so the passage must always be through a wound. I think the White Door might be a wound. That's one reason the Dead sometimes pass it. I think I have the other half of the Secret now, and I hope my reader can put both halves together.'",
        warmup: 60,
        craftable: true
    },
			{
	        id: "studylocksmithsdream4",
        label: "Read this volume of the Locksmith's Dream",
        actionId: "study",
        requirements: {locksmithsdream4: 1},
        effects: {locksmithsdream4:-1,fragmentmothc:1,fragmentlanternc:1,fascination:1},
		startdescription: "'Janus is the Gatekeeper, the twin-god, the god that wounds, the presager of changes, the sun, the moon. So we identify him with the Watchman, the Twins, with the Mother, with the Forge, with the Meniscate and the Madrugad. He cannot be all these. Can he? The <i>flamines</i> knew the Church, knew the Dry Land, knew Elagabalus. Is he then synthesis? Or is he something else? In Gallaecia they called him Ianus Lamius, but the Obliviates are notorious for their slanders.'",
        description: "'Janus has, they say, not one face but two. To which I reply: why only one? Why only two? Hersault and Coseley - according to Thomas Love Denman - once agreed that Janus was 'all the gods and none'. But later, Hersault insisted he was 'all the gods', and Coseley favoured simply 'none'. Denman was a sinister dilettante, but this rings true of them both.'",
        warmup: 60,
        craftable: true
    },
		{
        id: "studyorchidtransfigurations1",
        label: "Read this volume of the Orchid Transfigurations",
        actionId: "study",
        requirements: {orchidtransfigurations1: 1},
        effects: {orchidtransfigurations1: -1,fragmentgrail:1,glimmering:1},
		startdescription: "The illustrations are certainly striking. They flush the skin and glow beneath the eyelids after the book is closed.",
        description: "'We must devour to be devoured. We cannot be undevoured, as we cannot be unborn.'",
        warmup: 60,
        craftable: true
    },
				{id: "studyorchidtransfigurations2",
	label: "Read this volume of the Orchid Transfigurations",
	actionId: "study",
	requirements: {orchidtransfigurations2:1},
	effects: {orchidtransfigurations2:-1,fragmentgrailb:1},
	startdescription: "Fludd, or pseudo-Fludd, suggests alignments between the alchemical tradition of rubedo and the older Grail traditions, through the Pine-Knight's quest for the Cinnabar Cup.",
	description: "'Seek the Cup in the birthing-bed,' the Pine-Knight is told. The Midwife at the birthing-bed, to his amazement, is the Mountain-Mother. In a fit of awe, he both gelds and flays himself. The Vigilant Storm bursts joyfully from the remains.'",
	warmup: 60,
	craftable: true
	},
			{id: "studyorchidtransfigurations3",
	label: "Read this volume of the Orchid Transfigurations",
	actionId: "study",
	requirements: {orchidtransfigurations3:1},
	effects: {orchidtransfigurations3:-1,fragmentheart:1},
	startdescription: "A long dialogue between the Mountain-Mother and the Vigilant Storm describes the ways in which both mountains and storms end, and the protections they use against those ends.",
	description: "'But we must use the knife,' said the Lion-Throned One, 'the noose, the flame, the Waking Word, against those who have passed the Three-Valved Door. And so none may pass: that is our Law, and the Law of the Sun.'",
	warmup: 60,
	craftable: true
	},
	{id: "studyhumoursofagentleman",
	label: "Peruse Savage's 'Humours of a Gentleman'",
	actionId: "study",
	requirements: {humoursofagentleman:1},
	effects: {humoursofagentleman:-1,fragmentlantern:1},
	startdescription: "By the end of the first act, Maevelin has revealed a secret door in the walls of the House to Leo, and Corvino has taken to consuming Worms.",
	description: "The play is scabrous and occasionally hilarious. The characters are contrary and capricious. Many of the more resonant lines might well be formulae of power, disguised in plain sight.",
	warmup: 60,
	craftable: true
	},
		{id: "studyvictoryofcrowns",
	label: "Study the 'Victory of Crowns', by 'Arun'",
	actionId: "study",
	requirements: {victoryofcrowns:1},
	effects: {victoryofcrowns:-1,fragmentedge:1},
	startdescription: "The assassins are, according to 'Arun', the agents of a power called the Coronel, a 'soldier of the Secret Masters'. The accounts go all the way back to Roman times.",
	description: " Arun's scholarship is dubious, but he (she?) writes pithily. Incidents of sudden and violent death are interspersed with aphorisms: 'Hours don't dream. Long try not to.'",
	warmup: 60,
	craftable: true
	},
		{id: "studyintroductiontohistories",
	label: "Study Hersault's 'Introduction to Histories'",
	actionId: "study",
	requirements: {introductiontohistories:1},
	effects: {introductiontohistories:-1,fragmentsecrethistories:1},
	startdescription: "The prologue warns at length of the iniquities of one Julian Coseley, a former colleague who Hersault now describes darkly as 'a Worm of Worms'. It seems Coseley advised Hersault early in the writing of the book, but Hersault later became suspicious.",
	description: "Hersault identifies Blood, Silver, Design and the Worms as the central axes of each of the Histories, and claims that the so-called Second History is the true one. ",
	warmup: 60,
	craftable: true
	},
		{id: "studytreatiseonunderplaces",
	label: "Study Hersault's Treatise on Underplaces",
	actionId: "study",
	requirements: {treatiseonunderplaces:1},
	effects: {treatiseonunderplaces:-1,fragmentknockb:1},
	startdescription: "'The walls of the Mansus,' Hersault begins, 'are the size of starlight.' Many of his directions are equally unhelpful, but common relationships do emerge.",
	description: "A picaresque account of a journey through nightmare, interspersed with what might be partial rites. 'On the eighteenth Ascent is the bud. On the thirty-sixth Ascent, the blossom.'",
	warmup: 60,
	craftable: true
	},
		{id: "studyonthewhite",
	label: "Study 'On the White'",
	actionId: "study",
	requirements: {onthewhite:1},
	effects: {onthewhite:-1,fragmentwinter:1},
	startdescription: "On closer investigation, the work seems be a theory of aesthetics, or perhaps a set of warnings about the dangers of painting.",
	description: "Husher writes distractedly of his hatred of colours and his yearning for death. He hints at a Great Work he has envisaged, or begun, where the 'palest of paintings' will enthral the world. He returns again and again to certain compelling phrases which he claims are the 'secret words of Winter'.",
	warmup: 60,
	craftable: true
	},
		{id: "studywaroftheroadscensored",
	label: "Study a censored edition of 'The War of the Roads, 1450-1580'",
	actionId: "study",
	requirements: {waroftheroadscensored:1},
	effects: {waroftheroadscensored:-1,fragmentsecrethistoriesb:1},
	startdescription: "'In this past, a score or more of Longs were made. They brokered peace with the Forge of Days, long enough to set England on a path of early conquest and eventual destruction. The Forge itself devoured the greatest among them.'",
	description: "The royalty of England, according to Willis-Ford, became the Sovereigns of the Leashed Flame, destroying or transforming their enemies, conquering Europe, establishing grand cathedrals to St Spark. The alliance with the Forge begins to take its toll. The last few chapters are missing entirely.",
	warmup: 60,
	craftable: true
	},
		{id: "studyqueensoftherivers",
	label: "Study 'The Queens of the Rivers'",
	actionId: "study",
	requirements: {queensoftherivers:1},
	effects: {queensoftherivers:-1,fragmentsecrethistories:1},
	startdescription: "The Queen of the Vistula is poisoned. The Queen of the Dnieper chokes on a fish-hook. The Queen of the Tagus is burnt alive...",
	description: "The culprit, it transpires, is the audience. The surviving Queens are directed to execute whatever audience members do not escape. A surprisingly lucid epilogue suggests that the correspondence of river-names with historical events does provide clues to secret histories behind our own.",
	warmup: 60,
	craftable: true
	},
		{id: "studyapolloandmarsyas",
	label: "Study 'Apollo and Marsyas'",
	actionId: "study",
	requirements: {apolloandmarsyas:1},
	effects: {apolloandmarsyas:-1,fragmentheart:1},
	startdescription: "In the original myth, Marsyas lost a musical contest and was flayed by Apollo, who later regretted it. In this version, Marsyas' skin has a further history...",
	description: "The Skin of Marsyas gives oracles, and is later smuggled to Phrygia, where the priestesses of Cybele use it for a drumhead. At the opera's climax, the pounding of the drum drives would-be violators of the priestess to suicidal madness. The opera ends with a wistful hymn from the youngest priestess on the beauty of mountain pines.",
	warmup: 60,
	craftable: true
	},
		{id: "studyskeletonsongs",
	label: "Study the Skeleton Songs",
	actionId: "study",
	requirements: {skeletonsongs:1},
	effects: {skeletonsongs:-1,fragmentgrail:1},
	startdescription: "In Arabella's introduction, she explains that the book was to be illustrated, but that the Suppression Bureau would not permit it. She hints that the illustrations still exist somewhere. The book is dedicated to 'Sir Parsival of the Red Cup'.",
	description: "The Twenty-Six Delightful Fruits; the Seven Chastisements; the Nine Gardens; the Four Regrets.",
	warmup: 60,
	craftable: true
	},
		{id: "studyburningofunburntgod",
	label: "Study Tasmane's 'The Burning of the Unburnt God'",
	actionId: "study",
	requirements: {burningofunburntgod:1},
	effects: {burningofunburntgod:-1,fragmentforgeb:1,ritetoolconsumefollower:1},
	startdescription: "Tasmane hypothesises a pre-Zoroastrian fire deity, whose rites were the rites of smiths.",
	description: "Tasmane ultimately concludes, with apparent reluctance, that the deity was a goddess. He suggests that its gender may have been the cause of its suppression. The rites described are often eerie, sometimes grisly.",
	warmup: 60,
	craftable: true
	},
		{id: "studydebellismurorum",
	label: "Study 'De Bellis Murorum', by 'Solipsistos'",
	actionId: "study",
	requirements: {debellismurorum:1},
	effects: {debellismurorum:-1,fragmentedgeb:1},
	startdescription: "The poem elliptically describes a war between beasts, weather phenomena, and arcane concepts. It's quite specific about their tactics.",
	description: "'The Two-One joined, and the Horned distinguished. Consequently, blood.'",
	warmup: 60,
	craftable: true
	},
		{id: "studyonwhatiscontainedbysilver",
	label: "Read Poemander's 'On What is Contained by Silver'",
	actionId: "study",
	requirements: {onwhatiscontainedbysilver:1},
	effects: {onwhatiscontainedbysilver:-1,fragmentlanternb:1,ritetoolfollowerconsumelore:1},
	startdescription: "A dire bestiary of the horrors to be found in mirrors. This is a recent edition of a third century text by 'Poemander'.",
	description: "'The virgins/maidens of the mirror favour orchids. The [behindlings?] favour the rhododendron. Cut flowers of either nature should not be placed before polished bronze.' An appendix contains a rite which might be used to summon some of these entities, although the details of its use are not made clear.",
	warmup: 60,
	craftable: true
	},
			{id: "studytruecompleteasclepian",
	label: "Read Grese's 'A True and Complete Accounting of the Asclepian Mysteries of the Roots of the House'",
	actionId: "study",
	requirements: {truecompleteasclepian:1},
	effects: {truecompleteasclepian:-1,fragmentheartb:1,ritetoolconsumeinfluence:1},
	startdescription: "This is very obviously not an antique text. At the very least, it has been badly mutilated. But it contains substantial intriguing material: especially, a persuasive comparison of the House without Walls, without doors to the human body, with its many portals.",
	description: "'The direction of Death is down,' the book explains. 'The Peacock Door has been considered a rent, or an abrasion, but in some respects is more like a mouth - if not a more treasured point of entry.' Discussions of the Doors include a rite which may conjure creatures through those doors, although key incantations are missing.",
	warmup: 60,
	craftable: true
	},
				{id: "studywainscothistories",
	label: "Read Gore's 'Wainscot Histories'",
	actionId: "study",
	requirements: {wainscothistories:1},
	effects: {wainscothistories:-1,fragmentsecrethistoriesb:1},
	startdescription: "Gore does not mention the Mansus directly, but constant coy metaphorical references to 'Ascending the Staircase of Years', to 'the Doors of Sleep', and to 'the Blue Light of Dawn' suggest he had commerce with the unseen world.",
	description: "'It was common in that time to speak of the Division of the Sun; by which Contemporaries understood, the irruption of Barbarian Forces, and of their uncouth Gods.'",
	warmup: 60,
	craftable: true
	},
					{id: "studygeminiad",
	label: "Read the Geminiad",
	actionId: "study",
	requirements: {geminiad:1},
	effects: {geminiad:-1,geminiadread:1,fragmentgraild:1,fragmentheartd:1,fragmentmothd:1,riteinfluenceconsumeingredient:1},
	startdescription: "These pages outline the nature, and the doctrines, of an Hour that demands the union of what is at rest, an Hour that is sought at the water's edge and beneath the moon: the Witch-and-Sister. The language is knotty, poetic, wilful. It'll take some untangling.",
	description: "The Geminiad reminds us that the Witch-and-Sister has been known to manifest as the Sister-and-Witch - and that this face may heal, while the other face is always hungry. It implies connections between the Witch-and-Sister and the Hours of the Wood - especially the secret-keeper called the Velvet - but it is ambiguous on whether the Witch-and-Sister is a Wood-hour proper. And it speaks at length about the sadness of the two-who-are-one, the sadness that remains from their time as flesh.",
	warmup: 90,
	craftable: true
	},
	
	
	
	
					 {
        id: "studychioneatabydos",
            label: "Read 'Chione at Abydos'",
            actionId:"study",
            requirements:{chioneatabydos:1},
effects:{chioneatabydos:-1,fragmentwinterb:1},
warmup:60,
startdescription:"The entity called 'Chione' arrives in a blizzard and demands the city gates are barred. As Abydos falls under her spell, the dead return, but do not speak...",
            description:"For eight years the city is a place of slow death, frosty ecstasy and silent beauty, but in the ninth year a Conspiracy of Shouts is mounted against the quiet that Chione demands. The conspirators open the city gates, and a scarred man comes to drag Chione out by the hair. Summer returns, but the conspirators die of remorse.",
craftable: true
        },
								 {
        id: "studyirreproachabletraditionssocietynobleendeavour",
            label: "Read 'The Irreproachable Traditions of the Society of the Noble Endeavour'",
            actionId:"study",
            requirements:{irreproachabletraditionssocietynobleendeavour:1},
effects:{irreproachabletraditionssocietynobleendeavour:-1,fragmentforgeb:1},
warmup:60,
startdescription:"Their 'Endeavour' was no less noble - a furious arcane conflagration which would refine them into something more than human.  But such transformations are rare, and they often ended, less nobly, in ashes.",
            description:"Partridge claims to have identified consistent features among those who ascended. All of them had passed the Stag Door, and were accounted Know. All of them spoke the Callidate Invocation, or a greater rite, at the start of their ascension. And all of them were rich.",
craftable: true
        },						 {
        id: "studyroseofnuriel",
            label: "Read 'The Rose of Nuriel'",
            actionId:"study",
            requirements:{roseofnuriel:1},
effects:{roseofnuriel:-1,fragmentgrailb:1,fragmentknockb:1},
warmup:60,
startdescription:"St Tryphon, Nuriel explains, performed secret miracles in the name of 'She who Bleeds and Bears' and 'She who Opens'. Thus St Tryphon opened the way to the House of the Sun; thus St Tryphon underwent the Great Birth, an ascension to immortality.",
            description:"St Tryphon began his ascension by passing the 'Horned Door'. He continued it by learning the 'Invocation Thiatic' - which Nuriel does not here record, on account of its extreme holiness. And, Nuriel explains grimly, to achieve the Seven Marks of the Great Birth, St Tryphon consumed 'both those whose soul had left them, and even those in whom the soul remained.'",
craftable: true
        },						 {
        id: "studyroseofhypatia",
            label: "Read 'The Rose of Hypatia'",
            actionId:"study",
            requirements:{roseofhypatia:1},
effects:{roseofhypatia:-1,fragmentheartb:1,fragmentmothb:1},
warmup:60,
startdescription:"St Nympha is described as 'not born, but cultivated'. The sentience that became the saint, 'Hypatia' indicates, inhabited a sinner's corpse in order to enable that sinner's redemption.",
            description:"'Not all the Dead enter the Mansus by the Winter Door. Not all the Dead enter the Mansus at all.'",
craftable: true
        },						 {
        id: "studyroseofwaznei",
            label: "Read 'The Rose of Waznei'",
            actionId:"study",
            requirements:{roseofwaznei:1},
effects:{roseofwaznei:-1,fragmentlanternb:1,fragmentedgeb:1},
warmup:60,
startdescription:"The offshoot favoured by Waznei - 'the True Sisterhood' - followed St Respicius in pursuing ascension in the name of the Door-in-the-Eye, the merciless Hour of light. St Respicius failed, perhaps because the larger Sisterhood tracked him down and ritually strangled him, but Waznei outlines steps for those who hope to succeed.",
            description:"'Seek in dreams; seek the Mansus. The Third Mark can be achieved only when one has passed the Stag Door. One must pass the Wood. One must rise to the White Door. The Stag Door awaits the light-bearer, in the sight of Ghirbi.'",
craftable: true
        },						 {
        id: "studysunsetpassages",
            label: "Read 'Sunset Passages'",
            actionId:"study",
            requirements:{sunsetpassages:1},
effects:{sunsetpassages:-1,fragmentwinterb:1},
warmup:60,
startdescription:"The Church revered the Sun-in-Splendour before it was divided -but even while it was still whole, its later selves were recognised as its Names. The Madrugad, of course, presided over death and the passage into the House.",
            description:"The White Ceremony was spoken to honour the Madrugad, at funerals held in the chilly space before dawn. The text cautions that all blades should remain sheathed while the Ceremony is spoken, 'lest the corpse be not quiet.'",
craftable: true
        },						 {
        id: "studygospelzacchaeus",
            label: "Read 'The Gospel of Zacchaeus'",
            actionId:"study",
            requirements:{gospelzacchaeus:1},
effects:{gospelzacchaeus:-1,fragmentknockc:1,ritefollowerconsumeingredient:1},
warmup:60,
startdescription:"'Seven were the wounds of His body, seven the doors of the House. Seven the lesser aspects of the Hours, and Knock the aspect above all, for the Mother of Ants is the Mother of Salvation.'",
            description:"The book includes a description of a Rite which can be used to raise a corpse to half-life, 'in memory of He who bled for the Wood'. It requires a corpse and sufficient power - the author suggests an invocation of Winter-lore, and an assistant touched by the powers of the Wood.",
craftable: true
        },						 {
        id: "studymatthiasamethystloss",
            label: "Read 'On Matthias and the Amethyst Imago: Loss'",
            actionId:"study",
            requirements:{matthiasamethystloss:1},
effects:{matthiasamethystloss:-1,fragmentmothc:1,ritetoolconsumeinfluence:1},
warmup:60,
startdescription:"'The laws of the House forbade Matthias to love. The customs of the Wood forbade the Imago to remain. So he conjured her a final time, when she had uncovered the Shears of Alakapura; and she suffered him to cut the wings from her back, so that she might remain; and he suffered her to cut the parts which hold man's seed, to keep them from the Detestable Act. This was love in all its blood and joy. We have cast out Matthias from the House.'",
            description:"'The Rite of the Map's Edge was given to us by the Vagabond. It is the rite that Matthias used to summon the Amethyst Imago, but like many summoning rites, it could be used to conjure almost any entity - given the appropriate tool, and the appropriate influence. Use it gently, in memory of the Name and the Long who suffered these agonies that they might be joined.'",
craftable: true
        },						 {
        id: "studymatthiasamethysttransformation",
            label: "Read 'On Matthias and the Amethyst Imago: Transformation'",
            actionId:"study",
            requirements:{matthiasamethysttransformation:1},
effects:{matthiasamethysttransformation:-1,fragmentforgec:1},
warmup:60,
startdescription:"'We cast Matthias out, and we pronounced a curse upon the Amethyst Imago, but we watched them in dreams. We saw them pledge themselves to the Forge, to change themselves and ascend anew. Into the fire they fly.'",
            description:"This is the first of the practices that the Imago and Matthias used, to begin their ascent to power. They have risen beyond our sight, but their flames may yet burn in the Malleary.'",
craftable: true
        },						 {
        id: "studymatthiasamethystpursuit",
            label: "Read 'On Matthias and the Amethyst Imago: Pursuit'",
            actionId:"study",
            requirements:{matthiasamethystpursuit:1},
effects:{matthiasamethystpursuit:-1,fragmentgrailc:1},
warmup:60,
startdescription:"'Matthias defied us to hunt the Names of the Moth in the Wood, to populate his pinned collection. The Amethyst Imago had dallied with the Witch-and-Sister, but she'd returned to the Wood to plead the Moth's pardon. The Moth, as a whim or a penance, sent her out to lure the Long to a slough of nightmares.'",
            description:"'Matthias loved the Imago. (Did he? Can Long love, or has that organ of their soul dessicated beyond repair?) The Imago loved Matthias. (Did she? Or did she only enact a whim?) He pursued her through the Wood, but at the last she turned aside from the nightmare-slough, and they lay together where the Bounds grow bright. So they learnt the Grail's pleasures, and this is the lore they won.'",
craftable: true
        },						 {
        id: "studyfranklinbancroftdiaries",
            label: "Read 'Lord Franklin Bancroft: Diaries, 1750-1790'",
            actionId:"study",
            requirements:{franklinbancroftdiaries:1},
effects:{franklinbancroftdiaries:-1,fragmentlanternc:1},
warmup:60,
startdescription:"Bancroft seems to have been a talented adept, but devoted his energies to frustratingly whimsical projects: arranging 'grape-fetching races' between Mansus-spirits, teaching Percussigants to juggle, and conjuring storms of imaginary blossoms for the rose-witch Ayrshire, who resolutely refused ever to couple with him. Bancroft spends twenty pages bemoaning this last.",
            description:"The Mantra here recorded is a high and exacting magic which can be used to pledge one's spirit to the Watchman, beginning an ascent to the House. Bancroft boasts of his ability to recite it when in his cups. He also had it set to music for a performance with fireworks at Vauxhall Gardens.",
craftable: true
        },						 {
        id: "studyindignitiesobliviate",
            label: "Read 'Those Indignities Perpetrated By the Deceitful Fraternity of Obliviates'",
            actionId:"study",
            requirements:{indignitiesobliviate:1},
effects:{indignitiesobliviate:-1,fragmentwinterc:1,ritetoolfollowerconsumelore:1},
warmup:60,
startdescription:"'FIFTY-EIGHT. That they did claim inheritance of the traditions of the House of Lethe, but that they have DISREGARDED both its most sacred and its most beautiful ceremonies where they are not found CONVENIENT. FIFTY-NINE...'",
            description:"'Now I share the Rite that the Order used to summon a Caligine spirit. In CLEAR DEFIANCE of the Lethean tradition they did not offer Knock-Lore with a Winter Initiate and a Malleus Imperative, BUT RATHER Winter-Lore with a Knock Initiate and the Malleus!! It is not to be borne -'",
craftable: true
        },						 {
        id: "studyfurioustantra",
            label: "Read 'The Furious Tantra'",
            actionId:"study",
            requirements:{furioustantra:1},
effects:{furioustantra:-1,fragmentedgec:1,ritefollowerconsumetool:1},
warmup:60,
startdescription:"This tantra describes the uses and dangers of anger. It cautions that anger does not always survive transformations.",
            description:"'A full moon appears, creatures are reborn and even a lizard should not be slain, for it could be you.'",
craftable: true
        },						 {
        id: "studydevouredtantra",
            label: "Read 'The Devoured Tantra'",
            actionId:"study",
            requirements:{devouredtantra:1},
effects:{devouredtantra:-1,fragmentgrailc:1},
warmup:60,
startdescription:"The Devoured Tantra warns of the uses and dangers of appetite, but devotes an entire passage to the 'star-limbed hunger-bringers', who it describes with obvious affection.",
            description:"'A million blazing fires in the belly engulf what has been swallowed by the multiform mouths.'",
craftable: true
        },						 {
        id: "studyceaselesstantra",
            label: "Read 'The Ceaseless Tantra'",
            actionId:"study",
            requirements:{ceaselesstantra:1},
effects:{ceaselesstantra:-1,fragmentheartc:1},
warmup:60,
startdescription:"The Ceaseless Tantra is devoted mostly to warnings about the lively creatures called Percussigants, but concludes with a chant which can be used to summon them. It observes that Percussigants can be taught any dance, but they prefer only one.",
            description:"'That which does not cease, is not ceased.'",
craftable: true
        },						 {
        id: "studyknownunknowntantra",
            label: "Read 'The Known-Unknown Tantra'",
            actionId:"study",
            requirements:{knownunknowntantra:1},
effects:{knownunknowntantra:-1,fragmentlanternc:1},
warmup:60,
startdescription:"The Known-Unknown Tantra describes a journey to the White Door of the Mansus, beyond which speech ceases. It describes a mantra which can be used, at the right place and time, to achieve that door.",
            description:"'The light of a lantern can only ever reveal the space between the forest shadows.'",
craftable: true
        },						 {
        id: "studyencirclingtantra",
            label: "Read 'The Encircling Tantra'",
            actionId:"study",
            requirements:{encirclingtantra:1},
effects:{encirclingtantra:-1,fragmentknockc:1},
warmup:60,
startdescription:"The Encircling Tantra speaks of the Serpent Gate, that hungry portal sometimes known as the Spider's Door, which is sacred to the Mother of Ants, through which the Great Hooded Princes pass. ",
            description:"The tantra includes an invocation but cautions, helpfully, that the invocation is of insufficient power to reach the Serpent Gate from the Hunter's Gate. 'A road which has no destination is itself a destination,' it adds helpfully.",
craftable: true
        },						 {
        id: "studyshavenlocktantra",
            label: "Read 'The Shaven Lock Tantra'/ 'The One Who Has Shaven His Hair'",
            actionId:"study",
            requirements:{shavenlocktantra:1},
effects:{shavenlocktantra:-1,fragmentmothc:1},
warmup:60,
startdescription:"The Tantra speaks glowingly of those who are prepared to abandon their old self to seek a new and higher self. It warns that once the change has truly begun - 'past the Third Mark' - a return to the old self is dangerous and painful.",
            description:"'Whisper your secrets into the earth, burn them in fire, scatter them in the sea. Still they will cling to your hair,' the Tantra cautions. It provides an occult riddle that it claims is sometimes the answer to the Riddle of the Hunter's Gate.",
craftable: true
        },						 {
        id: "studytantraworms",
            label: "Read 'The Tantra of Worms'",
            actionId:"study",
            requirements:{tantraworms:1},
effects:{tantraworms:-1,fragmentwinterc:1},
warmup:60,
startdescription:"The Tantra explains various less than practical countermeasures against the Worms, the 'Serpents Which Are Not Serpents'. Moth and Winter are closest to them, and so understand their weaknesses, but both have their own perils. The Lionsmith crushes them, but that's not recommended for mortals.",
            description:"The Worms have always been eager to inhabit us. Here are the practices which make us inhospitable to them.' There are diagrams. The diagrams are not good to look upon, and none of the practices they depict would allow the subject to survive.",
craftable: true
        },
		{
        id: "studybookofcentipede",
            label: "Read 'The Book of the Centipede'",
            actionId:"study",
            requirements:{bookofcentipede:1},
effects:{bookofcentipede:-1,fragmentsecrethistoriesc:1},
warmup:60,
startdescription:"'The Centipede always found her way into the dark places. When she was punished for it, she reacted badly, in the Mansus as in Miah.'",
            description:"'The River runs through the sands out of myth and into legend. The Painted River runs the other way. One is barred to the Centipede now, but she finds ways back in, sometimes.'",
craftable: true
        },
		{
        id: "studyaccountkanishkspidersdoor",
            label: "Read 'The Account of Kanishk at the Spider's Door'",
            actionId:"study",
            requirements:{accountkanishkspidersdoor:1},
effects:{accountkanishkspidersdoor:-1,fragmentedgec:1},
warmup:60,
startdescription:"Kanishk sought to become a Name. In pursuit of that end, he made Lok Kahuli the vessel of his appetites, promising Lok that they would ascend together. At the Spider's Door, he betrayed his lover...",
            description:"The Chiliarch listened to the betrayal, and then forced Kanishk into his service. The Chiliarch cannot be denied. Lok Kahuli remained to write this work, and to describe the outer magics of struggle and contest.",
craftable: true
        },
		{
        id: "studystumm",
            label: "Watch 'STUMM'",
            actionId:"study",
            requirements:{stumm:1,funds:1},
effects:{stumm:-1,fragmentwinterc:1,dread:1,ritefollowerconsumeinfluence:1,funds:-1},
warmup:60,
startdescription:"The film rattles through the projector, glows silently on the wall. It is the story of a foolish student of forbidden sciences, who recruits a dancer to entice the Dead back into the world through a flaw in its skin. It's a fiction, but here on a title card is laid out the Operation of the Declining Sun...",
            description:"The Rite is depicted in chilling detail. Here is the flaw in the world, an Influence shimmering in luminous paint. Here is the dancer establishing an irresistible rhythm. Here the scholar recites the Operation; and now the misty dead whirls through the flaw to consume him! The film closes on the dancer's watchful eyes. Had she intended it all from the start?",
craftable: true
        },
		{
        id: "studyvinzantinscriptions",
            label: "Read 'The Vinzant Inscriptions'",
            actionId:"study",
            requirements:{vinzantinscriptions:1},
effects:{vinzantinscriptions:-1,fragmentforgec:1},
warmup:60,
startdescription:"Long ago, the Sisterhood of the Knot recounted, the Forge loved the Hour called the Sun-in-Splendour. The Red Grail long anticipated their union, and the Grail-priestesses prophesied it...",
            description:"The remainder of the text consists of gloating remarks by the Grail-priestesses of the Shaping that will come, interpolated with warnings and laments from those of the Sisterhood who serve the Ring-Yew and especially the Horned Axe. Nevertheless, an invocation to the Forge is included as part of an attempt to urge it onwards.",
craftable: true
        },
		{
        id: "studylarquebinecodex",
            label: "Read 'The Larquebine Codex'",
            actionId:"study",
            requirements:{larquebinecodex:1},
effects:{larquebinecodex:-1,fragmentheartc:1},
warmup:60,
startdescription:"The Sister-and-Witch came from the West, where they were born in two wombs, one a princess, one a monster. Nevertheless they loved each other from birth, and met in secret 'to seek union'.",
            description:"When the great drought came, the kings of that land tried to sacrifice the princess and the witch, so they sailed across the Sea. When despair took them, they flung themselves into the drowning waters... and so found the Painted River, where they entered the Mansus through the offices of the Red Grail. Nevertheless, the Codex ends with a condemnation of the Grail.",
craftable: true
        },
		{
        id: "studyagainstsisterhoodknot",
            label: "Read 'Against the Sisterhood of the Knot and the Foulness of their Depraved Customs'",
            actionId:"study",
            requirements:{againstsisterhoodknot:1},
effects:{againstsisterhoodknot:-1,fragmentsecrethistoriesd:1},
warmup:60,
startdescription:"Hieronymus claims that the powers served by the Sisterhood of the Knot made an arrangement: the Thunderskin loved the Yew, and the Grail destroyed him, as restitution for the destruction of the Axe's loved ones. Hieronymus' writing becomes incoherent with rage at this point.",
            description:"Hieronymus recovers his composure, eventually, to describe how the Thunderskin entered the Mansus through the Peacock Door. This, Hieronymus insists, is 'abomination upon abomination: but then that most abominable of Doors has always been an abomination.'",
craftable: true
        },
		{
        id: "studymorphycodex",
            label: "Read 'The Morphy Codex'",
            actionId:"study",
            requirements:{morphycodex:1},
effects:{morphycodex:-1,fragmentsecrethistoriesd:1},
warmup:60,
startdescription:"The writer credits the Red Grail, the Ring-Yew and the Horned-Axe - the powers the Sisterhood reveres - with agreeing a final treaty between the Hours of the House and the Hours they'd displaced: the Thunderskin loved the Yew, and the Grail destroyed him, as restitution for the slaying of the Horned-Axe's sisters and brothers.",
            description:"The Thunderskin entered the Mansus through the Peacock Door, 'a privilege never given to the Witch-and-Sister: but then their merit was much less'. The writer admits that entry through the Peacock Door is unseemly, but insists that under the circumstances, there was no other way.",
craftable: true
        },
		{
        id: "studyleoninetantra",
            label: "Read 'The Leonine Tantra'",
            actionId:"study",
            requirements:{leoninetantra:1},
effects:{leoninetantra:-1,fragmentedged:1},
warmup:60,
startdescription:"The Tantra describes, elliptically, the Great Hooded Princes and the multitudinous ways in which they influenced wars against foreign invaders of the Land of the Great River, 'although in a sense they were also invaders'.",
            description:"'Lions can be created, not as children are created, nor as words are created, but as weapons are created. The Great Hooded Princes learnt to create lions from their spyings on the affairs of the Hours, and not all lions now serve the Golden General.'",
craftable: true
        },
		{
        id: "studyincandescenttantra",
            label: "Read 'The Incandescent Tantra'",
            actionId:"study",
            requirements:{incandescenttantra:1},
effects:{incandescenttantra:-1,fragmentforged:1},
warmup:60,
startdescription:"Dialogues with an entity called the Crucible Prince. The Prince warns about the appetites of his mistress, the Burning Queen, and the peril of the naked desire she shares with the Sun, but professes his loyalty nevertheless.",
            description:"'A rite which changes is necessarily a rite which destroys. But a great change requires a destruction of savage extent.'",
craftable: true
        },
		{
        id: "studythirstingtantra",
            label: "Read 'The Thirsting Tantra'",
            actionId:"study",
            requirements:{thirstingtantra:1},
effects:{thirstingtantra:-1,fragmentgraild:1,ritetoolconsumeingredient:1},
warmup:60,
startdescription:"A disquisition on the many varieties of thirst, their uses and their effects.",
            description:"The tantra describes how the satisfaction of thirsts may allow a mortal to rise into the service of the Thirsting Power, but warns of the consequences of rejecting those rarer thirsts for common ones. 'A man who thirsts, O Mighty One, whose mind clings to actions in this world, will return to this world of action from that other place.'",
craftable: true
        },
		{
        id: "studyflayedtantra",
            label: "Read 'The Flayed Tantra'",
            actionId:"study",
            requirements:{flayedtantra:1},
effects:{flayedtantra:-1,fragmentheartd:1},
warmup:60,
startdescription:"'Peel' was numbered among the Great Hooded Princes, but it breaks with its brethren and followed the Thunderskin in the endless dance.",
            description:"Once Peel had peeled itself, it had the ink it needed to write the Tantra. It had to face the wrath of its fellows. Here is the invocation it used to fend them off.",
craftable: true
        },
		{
        id: "studywatchfultantra",
            label: "Read 'The Watchful Tantra'",
            actionId:"study",
            requirements:{watchfultantra:1},
effects:{watchfultantra:-1,fragmentlanternd:1,ritetoolfollowerconsumelore:1},
warmup:60,
startdescription:"The Tantra describes processes of occult illumination, including a formula which may show the way from the 'Hunter's Gate' to the 'Serpent Gate' - which in the West is usually called the Spider's Door.",
            description:"'The Sun passes through the House at the appointed time. Since the Sun's division, the time has become uncertain.'",
craftable: true
        },
		{
        id: "studytwinserpenttantra",
            label: "Read 'The Twin-Serpent Tantra'",
            actionId:"study",
            requirements:{twinserpenttantra:1},
effects:{twinserpenttantra:-1,fragmentknockd:1,ritefollowerconsumeingredient:1},
warmup:60,
startdescription:"The Tantra describes the Great Hooded Princes - a dynasty of princes of unclear origin - engaging in prayers, sacrifices and poetry in honour of the Key-Serpent, the Crossroads-Twins and the Mirror-Queen. 'Nagi encircles; Nagi arises from wounds; Nagi spares those who are already harmed.'",
            description:"The Great Hooded Princes are described as having 'escaped from the history of their death to a history where they yet live'. The text claims that there are now one hundred and eight of them, but - in one of many instances of twinnedness - before they crossed from their death chronicle, there were only fifty-four.",
craftable: true
        },
		{
        id: "studyfirecircletantra",
            label: "Read 'The Fire-Circle Tantra'",
            actionId:"study",
            requirements:{firecircletantra:1},
effects:{firecircletantra:-1,fragmentmothd:1},
warmup:60,
startdescription:"Herein the Great Hooded Princes are shown beseeching the Wood to rise and devour an invading Timurid army. The 'Dapple-King', the 'Honey-Tree' and the 'Sea-Twins' all deny their request, until they enlist the help of a burrowing secret-keeper...",
            description:"Armed with blackmail material from the 'burrowing secret-keeper', the Great Hooded Princes petition the powers of the Wood for a second time, and are successful. One quarter of the Timurid army is devoured by bees, one quarter drowns themselves, and one quarter 'disrobe themselves until nothing remains.'",
craftable: true
        },
		{
        id: "studyasthesunhiscourse",
            label: "Read 'As The Sun His Course'",
            actionId:"study",
            requirements:{asthesunhiscourse:1},
effects:{asthesunhiscourse:-1,fragmentedged:1,ritefollowerconsumetool:1},
warmup:60,
startdescription:"Alexander meets at Issus with Darius, King of Kings, for three days and three nights. On the first day, the two men trade threats; on the second, promises; on the third, secrets. Darius tells Alexander something so shattering that he retires to his tent to consider 'matters of strength and matters of mastery'.",
            description:"At dawn on the fourth day, Alexander announces: 'the Sun has his course, upon which he returns; and so do I'. He returns to Macedonia, executing two of his captains when they dispute his decision. He brings with him the 'names of a blind God', and a 'rite of sacred betrayal': for, Joel opines, without betrayal there would be an end to war.",
craftable: true
        },
		{
        id: "studyconcursumdiaries",
            label: "Read 'The Concursum Diaries'",
            actionId:"study",
            requirements:{concursumdiaries:1},
effects:{concursumdiaries:-1,fragmentlanternd:1},
warmup:60,
startdescription:"'There are map-legends, there are maps of legends, and there are legends of maps. Aspects of the Mansus subsist in all of these, in much the same way that you find water in a swamp and in a cup and in the sky.'",
            description:"Westergren describes a series of expeditions into the Mansus. He focuses on the details of the experience - the colours, the vistas, the textures - rather than the practicalities. He does warn that the Mansus changes each year, although he assures the reader that the Doors have been the same. 'Doors may close, but they never disappear. At least not while there have been mortals in the Mansus. We're like mice.'",
craftable: true
        },
		{
        id: "studyironbook",
            label: "Read 'The Iron Book'",
            actionId:"study",
            requirements:{ironbook:1},
effects:{ironbook:-1,fragmentforged:1},
warmup:60,
startdescription:"Members of the Ordo took an oath, the Iron Chain, that required them to remain hidden from the world. This manual includes presumably long-obsolete addresses and pass-phrases that could have been used to find the Ordo's contact in the town of Iria.",
            description:"The final part of the manual describes the punishments for Ordo members who break their oath of secrecy. This includes an invocation used to summon the spirit called King Crucible as an agent of vengeance. Yivni cautions that this must be a last resort when the oathbreaker would otherwise go unpunished: summoning King Crucible might draw the personal attention of the Forge of Days.",
craftable: true
        },
		{
        id: "studysilverbook",
            label: "Read 'The Silver Book'",
            actionId:"study",
            requirements:{silverbook:1},
effects:{silverbook:-1,fragmentknockd:1},
warmup:60,
startdescription:"Members of the Ordo took an oath, the Silver Chain, that forbade men to lie with woman, or women with men: 'for what may come is not always the Crime of the Sky, yet that is a furious danger.' It was apparently permissible for men to lie with men, and women with women - in fact, Burzghash suggests that should be encouraged, to distract from other temptations.",
            description:"The manual prescribes potential countermeasures to protect those who might be tempted to go against the oath: masks, disfigurement, severe poetic disciplines. Those who do break it are to be punished with death, although there are lesser punishments prescribed for various acts that don't involve actual coitus. An invocation is included which was used to incorporate these punishments into summoning rites.",
craftable: true
        },
		{
        id: "studyivorybook",
            label: "Read 'The Ivory Book'",
            actionId:"study",
            requirements:{ivorybook:1},
effects:{ivorybook:-1,fragmentwinterd:1,ritefollowerconsumeinfluence:1},
warmup:60,
startdescription:"Members of the Ordo took an oath, the Ivory Chain, not to have commerce with the Hours. Followed literally, this would be almost impossible for an adept, so the manual contains numerous clarifications, exceptions and processes of indulgence.",
            description:"Kurenai describes the Order's burial rites, which include spells to ensure - in theory - that the souls of dead Long are not given to the Hours. The Hour called the Ivory Dove, who memorialises and commemorates, is to be invoked, in secret, in these rites, 'for with that Hour we have made an understanding'.",
craftable: true
        },
		{
        id: "studyworlddoesnotweep",
            label: "Read 'The World Does Not Weep'",
            actionId:"study",
            requirements:{worlddoesnotweep:1},
effects:{worlddoesnotweep:-1,fragmentwinterd:1,riteinfluenceconsumefollower:1},
warmup:60,
startdescription:"The unknown adept who wrote this proclaims: the world forgets, but the Ivory Dove does not. The text contains a number of prescriptions for ensuring that certain acts are remembered, including a rite which requires a sacrifice in a particularly monstrous mode...",
            description:"The Hours tried to bury the memory of what happened to the Wheel, the Flint, the Tide, and the Seven-Coiled, but the Dove won't permit it. Nor will he permit what happened to the First Egg to be forgotten, although it is perhaps the one thing that the Watchman might ever forgive...",
craftable: true
        },
		{
        id: "studydeedsofthescarredcaptain",
            label: "Read 'The Deeds of the Scarred Captain'",
            actionId:"study",
            requirements:{deedsofthescarredcaptain:1},
effects:{deedsofthescarredcaptain:-1,fragmentedged:1},
warmup:60,
startdescription:"An account of the founding of Mycenae by a 'Scarred Captain' who first slew seven monsters to make the land safe.",
            description:"As the Captain destroys each monster, a flood of blood rises higher, until at last a priestess drowns and is reborn as a serpent-goddess. She blesses the Captain, and he departs for the 'House above the Forest', leaving Mycenae to reign supreme after the flood of blood subsides.",
craftable: true
        },
		{
        id: "studybookofdissolution",
            label: "Read 'The Book of Dissolution'",
            actionId:"study",
            requirements:{bookofdissolution:1},
effects:{bookofdissolution:-1,fragmentforgee:1,ritetoolconsumefollower:1},
warmup:60,
startdescription:"The Book consists mostly of prayers to the Unburnt God, the Forge of Days which consumes and transforms. It suggests the Forge's power arises partly from its nature, and partly from its tools.",
            description:"The Book describes an earlier House of the Sun, whose doors and ways were different. It praises the Forge of Days for opening the ways into the house, and for transforming that which was to that which is, despite the screams of stone...",
craftable: true
        },
		{
        id: "studycatalogueofunchartedpleasures",
            label: "Read 'A Catalogue of Uncharted Pleasures'",
            actionId:"study",
            requirements:{catalogueofunchartedpleasures:1},
effects:{catalogueofunchartedpleasures:-1,fragmentgraile:1},
warmup:60,
startdescription:"'Some pleasures,' the Formulae Voluptuous attest, 'are so intense they can corrupt the laws of the physical world'. This text catalogues some of those instances.",
            description:"Birth occurs at the conjunction of pleasure and torment. So the first Forbidden Acts of the Forge birthed sparks of delight which took root in the Glory or in Nowhere: who can say? So the seeds of the Flowermaker were planted, though for long years he was nothing but an unfulfilled ache.",
craftable: true
        },
		{
        id: "studythosewhodonotsleep",
            label: "Read 'Those Who Do Not Sleep'",
            actionId:"study",
            requirements:{thosewhodonotsleep:1},
effects:{thosewhodonotsleep:-1,fragmenthearte:1,ritetoolconsumeingredient:1},
warmup:60,
startdescription:"'The Sister-and-Witch were born in two wombs, one poor one rich, across the sea. The Sister was stronger in the aspect of Heart, and so their survival was assured; the Witch was stronger in the aspect of Grail, and so they were not satisfied...'",
            description:"'When the Sister and Witch came from the West, the Red Grail permitted their ascension, but then grew jealous of their power. It lured a great musician into the ranks of its Names, and caused him to be reborn from blood as a Heart-hour, so that the Grail might maintain dominion there also. But its victory is not assured.'",
craftable: true
        },
		{
        id: "studytheskythesoul",
            label: "Read 'The Sky, the Soul'",
            actionId:"study",
            requirements:{theskythesoul:1},
effects:{theskythesoul:-1,fragmentlanterne:1,fascination:1},
warmup:60,
startdescription:"Kalle's verses are brief, obscure, and often dominated by images of violence. 'A star is a pin-prick, but the Sun is a wound.'",
            description:"'It's always possible to be deader,' Kalle states. 'The Watchman goes before; none but seven may go after.' 'Yet surely we are born to the Glory as the sparks fly upwards.'",
craftable: true
        },
		{
        id: "studyonthematterandthedeedsofserpents",
            label: "Read 'On the Matter and the Deeds of Serpents'",
            actionId:"study",
            requirements:{onthematterandthedeedsofserpents:1},
effects:{onthematterandthedeedsofserpents:-1,fragmentknocke:1,dread:1},
warmup:60,
startdescription:"The serpent-folk called the Great Hooded Princes came to know the order called the House of Lethe, and warred across the miles with them. They made an alliance with the Mother of Ants, 'whose children they had been'...",
            description:"The text describes how the Great Hooded Princes escaped (or will escape) from the Fifth History, where they had died (or were doomed to die). They engaged in a secret conquest of 'the land of the Great River', called India in some histories, and have ensured that all other conquests of that land are false conquests.",
craftable: true
        },
		{
        id: "studyserenityofblackwood",
            label: "Read 'The Serenity of the Black Wood'",
            actionId:"study",
            requirements:{serenityofblackwood:1},
effects:{serenityofblackwood:-1,fragmentmothe:1,fascination:1},
warmup:60,
startdescription:"The 'Proverbial Footloose' gathers travellers in a wood, and leads them through, but abandons them part-way. They find themselves beset by 'glorious monsters'.",
            description:"The travellers discover they can survive if they close their eyes (they adopt a closed eye as their sign) and that they can go unnoticed if they drink from the clear cold streams. They never forget 'that proverbial footloose, the Centipede', but they never forgive her either.",
craftable: true
        },
		{
        id: "studybookofthrones",
            label: "Read 'The Book of Thrones'",
            actionId:"study",
            requirements:{bookofthrones:1},
effects:{bookofthrones:-1,fragmentsecrethistoriese:1,fragmentedgee:1},
warmup:60,
startdescription:"In 'the first and greatest history', a subject of the Shadowless Empire of Persia travels to the West, to the kingdom of the Perseids. There he becomes a protégé of the tutelary Perseid deity, the Scarred Man who lives in the dark. He returns after seven years to put his skills at the service of the Shadowless Empire, becoming their Golden General...        ",
            description:"After many years of peace, the heirs of the Perseids move against the King of Kings and the Shadowless Empire. The Golden General will not take arms against the blood of his mentor, until the King of Kings whispers 'a great secret of betrayal' in his ear. He breaks his sword, forswears his oath to both the Empire and the Scarred Man, and enters 'the Temple behind the World', leaving his life behind.",
craftable: true
        },{
        id: "studysecondglory",
            label: "Read 'A Second Glory'",
            actionId:"study",
            requirements:{secondglory:1},
effects:{secondglory:-1,fragmentwintere:1,dread:1,riteinfluenceconsumefollower:1},
warmup:60,
startdescription:"Juceh engages in an apologia for the destruction of the Hours: they were old, they were cowardly, they were vile, their time had passed, and it was the shining destiny of humankind to seize the House through glorious battle.",
            description:"Juceh recounts how the Hour called Seven-Coils was slain in battle by the Colonel, how the Grail devoured the Hour called Tide, and how the Egg Unhatching 'fled like a coward'. He's quite vituperative about the Egg Unhatching. He warns darkly against its return.",
craftable: true
        },
		{
        id: "studybookoftrueblood",
            label: "Read 'Book of True Blood'",
            actionId:"study",
            requirements:{bookoftrueblood:1},
effects:{bookoftrueblood:-1,fragmentedgee:1,dread:1},
warmup:60,
startdescription:"The Legion's Legate answered directly to the Hour called the Tribune of Scars, and was promised immortality if he died in battle...",
            description:"In the final part, Cassius confesses to being a former Legate. He recounts his terror of the Tribune, and divulges the secret lore of the Golden General, the champion of the Shadowless Empire, the enemy of the Tribune, in the hope that the Tribune will some day be undone.",
craftable: true
        },
		{
        id: "studyburningwoman",
            label: "Read 'The Burning Woman'",
            actionId:"study",
            requirements:{burningwoman:1},
effects:{burningwoman:-1,fragmentforgee:1,fascination:1},
warmup:60,
startdescription:"The play describes a pilgrimage of smiths and adepts following the trail of the Burning Woman, who has appeared in all their dreams and given each a Wound and a Word.",
            description:"The smiths and adepts give up on finding the Burning Woman, and resolve to build their own kingdom, 'where our strength will be sufficient to shatter the world.'",
craftable: true
        },
		{
        id: "studytwentysixenticementsseventorments",
            label: "Read 'Twenty-Six Enticements, Seven Torments'",
            actionId:"study",
            requirements:{twentysixenticementsseventorments:1},
effects:{twentysixenticementsseventorments:-1,fragmentgraile:1,dread:1},
warmup:60,
startdescription:"'The Enticements of the Grail outnumber its Torments, but its Torments are its final nature. Birth is the First Torment, and Thirst the Seventh'.",
            description:"Through the enumeration of the Grail's enticements and torments winds the sorrowful history of the Witches of the Dry Land: the ordeal of birth from two wombs, their struggle from and supplication of the Grail, the yearning for union which drives them all.",
craftable: true
        },
		
		{
        id: "studyhistoryofshadowlesskings",
            label: "Read 'A True and Accurate History of the Shadowless Kings'",
            actionId:"study",
            requirements:{historyofshadowlesskings:1},
effects:{historyofshadowlesskings:-1,fragmentsecrethistoriese:1,fragmenthearte:1},
warmup:60,
startdescription:" 'The first and greatest history' is described herein. The Persian Empire - 'the sons of Achaemenes', 'the Shadowless Kings', 'the most Glorious Empire' - survives the assaults of Alexander the Great and flourishes as late as the fifth century. ",
            description:"After the fall of Rome, the Shadowless Empire takes Byzantium under its wing, and moves East against the Land of the Great River. Isaac begins to recount the invasion struggling against 'the unskinned armies of the hooded serpents', but ends abruptly with a series of incantations that he claims allowed the Shadowless Empire to persist.",
craftable: true
        },

				{
        id: "studyhighmysterieschurchsolar",
            label: "Read 'The High Mysteries of the Innermost Chamber of our Church Solar'",
            actionId:"study",
            requirements:{highmysterieschurchsolar:1},
effects:{highmysterieschurchsolar:-1,fragmentlanterne:1,fascination:1},
warmup:60,
startdescription:"The Church chiefly worshipped the Sun-in-Splendour, the original undivided sun; but this text also includes the devotions of its aspects as the chilly winter dawn and the departing sunset, as well as the Meniscate, the Sun's 'night-self'. Priests of the Church were all male, but rites are also included which allowed women to cross ceremonially to manhood.",
            description:"The Church's highest rites were performed in the Concursum, the chamber at the Mansus' heart where the Hours were known to pass. These rites include salutations to non-solar Hours: the Grail, the Ring-Yew, the Horned Axe and the Thunderskin.",
craftable: true
        },

				{
        id: "studymedusaslament",
            label: "Read 'Medusa's Lament'",
            actionId:"study",
            requirements:{medusaslament:1},
effects:{medusaslament:-1,fragmentknocke:1,dread:1},
warmup:60,
startdescription:"The first part of the poem describes the ambush of the Seven-Coils by a warrior 'scarred all over by the traitor gods, scarred even unto his eyes, so that the sight of the great coils would not destroy him'.",
            description:"The battle rages on until the Seven-Coils drowns in its own blood, at which point the narrative turns mystical and allusive. A seven-titled goddess arises from the foam of its blood: she is an armoured queen, a serpent-daughter, a key, a healer, a murderess, an oracle, but her seventh title is not to be revealed.",
craftable: true
        },

				{
        id: "studybookofmasks",
            label: "Read 'The Book of Masks'",
            actionId:"study",
            requirements:{bookofmasks:1},
effects:{bookofmasks:-1,fragmentmothe:1},
warmup:60,
startdescription:"The Mask of the Laughingthrush, says Athena Vana, had a great friendship with the Sun-in-Splendour, the highmost Hour of the Mansus (now divided and departed). The Mask of the Sight-Thief painted the river in the Mansus. The Mask of the Vagabond was forbidden the Mansus, not for what she had done, but for what would occur...",
            description:"The Mask of the Centipede recalled her birth-place, Miah, which had punished her for creeping into the temple precinct. This Mask cursed Miah to drink only dust and to be remembered only by the wind - 'for not beneath any Mask does she forgive, and the Centipede's hunger is not to be forgotten.'",
craftable: true
        },

				{
        id: "studyinthemountainsasupontheplain",
            label: "Read 'In The Mountains As Upon The Plain There May Not Be A Path Where None Has Passed'",
            actionId:"study",
            requirements:{inthemountainsasupontheplain:1},
effects:{inthemountainsasupontheplain:-1,fragmentsecrethistoriese:1,fragmentmothe:1},
warmup:60,
startdescription:"Ninegala tells a number of lively stories about riddling ogres and wars between mountain tribes, but turns sombre in the tale of the Empty-Handed Hunter: a lover of the Grail who sought to match her appetites and join her as an Hour, but in the end rent and devoured himself, giving his name to the mountains he had once roamed.",
            description:"Ninegala claims that the Hours who sometimes manifest as birds - the Laughingthrush, the Ivory Dove, the Beachcrow and the Witch-and-Sister - meet at a secret location on a mountaintop to exchange gossip unheard by their peers. Now and then a mortal overhears them. The mortal is always obliterated, and the meeting-place always changed.",
craftable: true
        },

				{
        id: "studymemoryofgods",
            label: "Read 'In Memory of Gods'",
            actionId:"study",
            requirements:{memoryofgods:1},
effects:{memoryofgods:-1,fragmentwintere:1,dread:1},
warmup:60,
startdescription:"The Barrowchild singles out the Scarred Tribune, the Red Grail, the Forge and the Moth for especial condemnation as murderers of the first gods. 'We live in the shadow of their crime', she writes, 'and we must evade it or repeat it.'",
            description:"The Barrowchild describes how the Grail drained the Hour called Tide, how the Moth 'usurped the Wheel from within', stealing its skin, and how the Forge first eclipsed then shattered Flint. 'Perhaps these are glories,' she observes, 'but then it cannot be that Glory is merciful.'",
craftable: true
        },

				{
        id: "studysevenfoldslayingsevencoiled",
            label: "Read 'The Sevenfold Slaying of the Seven-Coiled'",
            actionId:"study",
            requirements:{sevenfoldslayingsevencoiled:1},
effects:{sevenfoldslayingsevencoiled:-1,fragmentedgef:1,dread:1},
warmup:60,
startdescription:"There are twelve verses. In the first, an ascendant Hour identified as the Scarred One enumerates his justifications for destroying the Seven-Coiled: its appetites, its growth, its enmity to humanity. In the second, a priestess puts out his eyes and scars his skin to protect him against the Seven-Coiled's magics. In each of the next seven verses, he destroys one aspect of the Seven-Coiled...",
            description:"In the tenth verse, the Scarred One bathes his priestess-patron in the blood of the Seven-Coiled, to lend her power. In the eleventh, they assault the 'temple behind the world', entering it by force. In the twelfth, they swear a tripartite oath to protect their ancestors, their descendants, and themselves.",
craftable: true
        },

				{
        id: "studybighuff",
            label: "Read 'My Deeds, My Powers, My Achievements and the Injustices Perpetrated Against Me'",
            actionId:"study",
            requirements:{bighuff:1},
effects:{bighuff:-1,fragmentforgef:1},
warmup:60,
startdescription:"Hokobald boasts of his royal descent, and insists that the magics of the Forge are more effective when practised by those of noble blood.",
            description:"Pocsind complains of his condemnation by the Ordo Limiae. He acknowledges that he has 'undergone alterations' after the 'consummation of that particular delight', but insists that these changes are both elegant and inevitable. 'Who is the fire, and who the fuel?' he asks rhetorically.",
craftable: true
        },

				{
        id: "studydreamconspiracyskies",
            label: "Read 'The Dream of the Conspiracy of the Lower Skies'",
            actionId:"study",
            requirements:{dreamconspiracyskies:1},
effects:{dreamconspiracyskies:-1,fragmentgrailf:1,fascination:1},
warmup:60,
startdescription:"Damaon insists that the Hours, far more than mortals, are subject to their passions - to hatred, and even to love. 'The seasons of famine and plenty, the turn of the Earth, the transformations of the furnace - all these are only the results of the enactment of the lesser passions of the Hours.'",
            description:"Damaon suggests that the Hours have constrained their rivalry to avoid a war within the House of the Sun. He identifies the 'Fear of the Crime of the Sky' as the reason that Hours do not satisfy other passions. He speculates on the horrifying possibility of Hours turned alukite. 'What then would they devour?'",
craftable: true
        },

				{
        id: "studybookwhitecat",
            label: "Read 'The Book of the White Cat'",
            actionId:"study",
            requirements:{bookwhitecat:1},
effects:{bookwhitecat:-1,fragmentheartf:1},
warmup:60,
startdescription:"The aviform Hours - the Crow, the Laughingthrush, the Dove, and the twin Kites - have been known to meet in the mountains north of Gordion, at a place called the Roost, to exchange gossip. Penelope indicates that mortals who hear their words directly are obliterated, but claims that her cat goes unnoticed and returns to her with rumours from the Hours' meetings.",
            description:"The stories that Penelope claims as Hour-gossip are fragmentary and confusing: accounts of contests where Hope and Dread and the Shadowless Empire are used as game-pieces, agendas of ruin and remembrance from no known history. The most interesting element is the protective incantation she records at the end of the book, after she worries that the Hours might in fact learn of her spying.",
craftable: true
        },

				{
        id: "studyfocusamber",
            label: "Read 'The Focus of Amber'",
            actionId:"study",
            requirements:{focusamber:1},
effects:{focusamber:-1,fragmentlanternf:1,fascination:1},
warmup:60,
startdescription:"Omar claims that the Hour called Watchman is both a god-who-was-flesh - an Hour who was mortal - and also a god-from-Light - an Hour who descended from the Glory - but adds, finally, that the Watchman's origin is triple, and that 'in essence, he is Amber.'",
            description:"The Watchman, according to Omar, was once another Hour entirely, who ascended into the Glory to escape efforts by other Hours to send him to Nowhere. It may be that Omar's sense of persecution creeps into the narrative at this point: certainly it grows less coherent, and the last part is devoted to attempts to prove that eyes, eggs and the Sun are all in some sense conjunct.",
craftable: true
        },

				{
        id: "studysongscarapacecross",
            label: "Read 'The Songs of the Carapace Cross'",
            actionId:"study",
            requirements:{songscarapacecross:1},
effects:{songscarapacecross:-1,fragmentknockf:1,dread:1},
warmup:60,
startdescription:"Xi describes the rites of the gods-who-were-stone, the first Hours, as practiced before the existence of human civilisation by the 'Carapace Cross'. He claims a final survivor of the Cross shared the information with him.",
            description:"The rites are largely obsolete now. Few have been observed, in the last thousand years at least, to have any effect at all. Nevertheless, Xi identifies at least one invocation of particular power. He warns that it should be used with caution, lest the gods-who-were-stone might find their way back from Nowhere.",
craftable: true
        },
						{
        id: "studyoriginsofhours",
            label: "Read 'The Origins of Hours'",
            actionId:"study",
            requirements:{originsofhours:1},
effects:{originsofhours:-1,fragmentmothf:1,dread:1},
warmup:60,
startdescription:"Soham's writings veer from poetry to confession. He identifies gods from flesh (those who were mortal), from blood (those who arose from sacrifice), from Light (entry from the Glory) and from stone (those who arose before his knowledge.) He insists that the Moth was the first god-who-was-blood, but later contradicts himself and claims it was the Red Grail.",
            description:"'The Mansus was different before the first god came from Light, but never doubt it existed, even then.'",
craftable: true
        },
						{
        id: "studywherehasshegone",
            label: "Read 'Where Has She Gone?'",
            actionId:"study",
            requirements:{wherehasshegone:1},
effects:{wherehasshegone:-1,fragmentsecrethistoriesf:1},
warmup:60,
startdescription:"The Vagabond is recorded to have travelled not only the Mansus and the Wood, not only all nine continents, but also places forbidden to other Hours...",
            description:"From Hour-gossip and invisible lore, Speeth deduces that the Vagabond has visited Nowhere, but that she will not return. He also asserts that she has yet to visit the Glory, but that inevitably, this must be her goal.",
craftable: true
        },
						{
        id: "studybookextinguishedheart",
            label: "Read 'The Book of the Extinguished Heart'",
            actionId:"study",
            requirements:{bookextinguishedheart:1},
effects:{bookextinguishedheart:-1,fragmentwinterf:1,dread:1,riteconsumetoolingredientfollowerinfluence:1},
warmup:60,
startdescription:"Lazali indicates that the Sun will be divided in the Malleary, by the Forge of Days, armed with the love in her heart.",
            description:"'Love will not be the cause of the Sun's death, but rather envy. Envy will not be the cause of the Sun's death, but rather thirst. Thirst shall not be the cause of his death, but curiosity. Curiosity shall not be his end; rather will it be love.'",
craftable: true
        },
						{
        id: "studyhowendwillbegin",
            label: "Read 'How the End will Begin'",
            actionId:"study",
            requirements:{howendwillbegin:1},
effects:{howendwillbegin:-1,fragmentedgeg:1,dread:1},
warmup:60,
startdescription:"In the foretold war, the Children of the Leashed Flame march on the cities of the Continent, but the 'Enactors of Solar Law' and the 'Triple Sisterhood' join forces to hold them back... at tremendous cost.",
            description:"'In that battle between the Imperishable Legions and the Leashed Flame, the Legions will perish and the Flame will be unleashed.'",
craftable: true
        },
						{
        id: "studymanneralchemistspared",
            label: "Read 'The Manner in which the Alchemist was Spared'",
            actionId:"study",
            requirements:{manneralchemistspared:1},
effects:{manneralchemistspared:-1,fragmentforgeg:1,fascination:1},
warmup:60,
startdescription:"In the days of the Carapace Cross, when humanity lived in the dark and ate on its knees, humans could enter the Mansus like vermin. One learnt the arts of Flint, the arts of shaping and remaking...",
            description:"'Through the Black, the Yellow, the Red, the Unwise Mortal ascended to the shadow of the Egg Unhatching, and remained in his service. He may be there to this day.'",
craftable: true
        },
						{
        id: "studyfivecreations",
            label: "Read 'Five Creations'",
            actionId:"study",
            requirements:{fivecreations:1},
effects:{fivecreations:-1,fragmentgrailg:1,dread:1},
warmup:60,
startdescription:"'THE CARAPACE ORIGIN: we were born from shell, like the children of the wasp from the spider. THE GLORIOUS ORIGIN: our life-motes descended from Light. THE ORIGIN BEFOULED: we were found naked and smeared with muck in the roots of the Wood...'",
            description:"Shohei's preferred theories are that we are the children of apes who walked upright, although his tone here is satirical; or that we consumed not only our parents, 'which is not the Crime of the Sky', but also our origin, so that we came from Nowhere.",
craftable: true
        },
						{
        id: "studycommandspreservationallexists",
            label: "Read 'Commandments For the Preservation of All That Exists'",
            actionId:"study",
            requirements:{commandspreservationallexists:1},
effects:{commandspreservationallexists:-1,fragmentheartg:1},
warmup:60,
startdescription:"Elie describes powerful protective incantations to be used in a variety of circumstances.",
            description:"'It is essential that these Protections be completed every fourth year, to defend against the entry of the Worms and against the avidity of the Wave and the Wound.' In the current History at least, there is no indication that these Protections have been performed regularly for at least the last thousand years.",
craftable: true
        },
						{
        id: "studytimedivision",
            label: "Read 'The Time of Division'",
            actionId:"study",
            requirements:{timedivision:1},
effects:{timedivision:-1,fragmentlanterng:1,fascination:1,dread:1,riteconsumetoolingredientfollowerinfluence:1},
warmup:60,
startdescription:"The Sun will be divided that it might not sire children. Still its children shall be Four in number and its children shall be Seven in number and its children shall also be Numberless. The Numberless shall open the way for the Seven, and the Seven shall consume the Four...'",
            description:"Amira prophesies four great wars before the Second Dawn, when the Sun-in-Splendour shall rise again. She cautions: 'Sunrise is blood, and I foretell now that the Sun shall rise from blood, yet not the colour of the blood, nor the hour of Night.' She includes a rite that she speculates will be necessary for the Second Dawn.",
craftable: true
        },
						{
        id: "studymanualdeparture",
            label: "Read 'A Manual for Departure'",
            actionId:"study",
            requirements:{manualdeparture:1},
effects:{manualdeparture:-1,fragmentknockg:1,dread:1},
warmup:60,
startdescription:"No, these doors shouldn't be recorded, but if we had only recorded things before we'd had to leave the Fifth History, we would be in a much better state. So here I am writing it down, and if you don't like it you can sanction me.'",
            description:"The 'Manual for Departure' lists a number of strategies - occult, martial and political - for quick escapes. Many are irrelevant, obsolete or enigmatic, but the Manual does include a number of powerful techniques for opening portals.",
craftable: true
        },
						{
        id: "studybirdsong",
            label: "Read 'Birdsong'",
            actionId:"study",
            requirements:{birdsong:1},
effects:{birdsong:-1,fragmentmothg:1,fascination:1,dread:1},
warmup:60,
startdescription:"INAAM: Has not the Beach-Crow shared his treasures? GARKIE: Not the rarest. He takes those things most precious, which he claims found, not stolen.",
            description:"The Beach-Crow, Kapigiginlupir suggests, is not only a thief, but also a spy and even a voyeur. He has hidden the memory of secret couplings among the Hours and their Names in the corners of the House, as treasures to gloat over. There is particularly fevered speculation on a liaison between the Ring-Yew, that fervent Hour of the Wood, and the Mare-in-the-Tree, who sometimes has been the Witch's Sister.",
craftable: true
        },
						{
        id: "studyvoyagesfo",
            label: "Read 'The Voyages of Ferninshun of Oreol'",
            actionId:"study",
            requirements:{voyagesfo:1},
effects:{voyagesfo:-1,fragmentsecrethistoriesg:1},
warmup:60,
startdescription:"Ferninshun clearly visited the Mansus, sailing the length of the Painted River. He also claims to have traversed a sea of finest sand, to have dared the blazing waves of the Sun's surface, and to have descended to an underworld ocean lit by lamps of black nephrite...",
            description:"Ferninshun's final voyage is to retirement on a peaceful island across an evening sea, where he identifies a spring whose waters will keep him safe. 'I will be forgotten,' he declares, 'and this work my only trace.'",
craftable: true
        },
						{
        id: "studyscarsky",
            label: "Read 'The Scar in the Sky'",
            actionId:"study",
            requirements:{scarsky:1},
effects:{scarsky:-1,fragmentwinterg:1,dread:1,riteconsumetoolingredientfollowerinfluence:1},
warmup:60,
startdescription:"Each page of this book contains one word only, but as each page is turned, a knowledge creeps in.",
            description:"The final page is crowded. Each reader of the book records the same word. Now it is my turn.",
craftable: true
        },
							{
        id: "studykitlingripe",
            label: "Read 'Kitling Ripe and the Moldywarp's Grave (and Other Stories)'",
            actionId:"study",
            requirements:{kitlingripe:1},
effects:{kitlingripe:-1,fragmentmothb:1,glimmering:1},
warmup:60,
startdescription:"The protagonist, a speechless cat-thing called Kitling Ripe, performs a series of elaborate rites to rescue members of her extended family, culminating in the resurrection of her 'other grandmother', Moldywarp.",
            description:"'When the Snake-Witch killed the stag, Kitling snatched one of its eyes. When the Dry-Witch killed the sow, Kitling stole a cup of its blood. Then she took them to the place Moldywarp lay buried, and she shook out her hair, and she began to dance...'",
craftable: true
        },
								{
        id: "studyraptintheking",
            label: "Read 'Rapt in the King'",
            actionId:"study",
            requirements:{raptintheking:1},
effects:{raptintheking:-1,fragmentheartc:1,vitality:1},
warmup:60,
startdescription:"The dances draw from the traditions of the Mysteries, of the cults of Isis and of Cybele, but include both symbolic and literal flayings, and the human heart is always central in the rites. The author punctuates his accounts with queasily sensuous descriptions of his own interrupted feasts.",
            description:"'At these greater Feasts a Black Pig is always crowned as King before its Slaying. On this Occasion, its Heart was weighed in the Balance against a Knot of Feathers, and its Skin became a Cape for the Officiant. Its Flesh was left for the Crows, but I must confess my Interest was not in its Carcass but in the Perfumed Flesh of the Milliner laid fresh in the Earth.'",
craftable: true
        },
									{
        id: "studyvienneseconundra",
            label: "Read 'The Viennese Conundra'",
            actionId:"study",
            requirements:{vienneseconundra:1},
effects:{vienneseconundra:-1,fragmentmothc:1,glimmering:1},
warmup:60,
startdescription:"'When the individual K. attends the meetings, black dogs are sacrificed and quartered. When the individual M. is in attendance, black mares are found with their throats slashed. I propose that these sacrifices are not necessary, but that our Ligeian friends may consider them 'fitting'. Herewith diagrams of the mutilations -'",
            description:"'Medusa's Riddle, then, I choose to render as 'What is Not Seen?' There is another riddle, one I have heard rendered as 'What may be Lost?' I will delineate some historic attempts to answer it- these are in themselves, in some sense, sacrifices - '",
craftable: true
        },


	

		{
        id: "studytextbooklatin",
        label: "Improve my Latin",
        actionId: "study",
        requirements: {textbooklatin: 1},
        effects: {textbooklatin: -1,scholarlatin:1},
		startdescription: "I recall a certain amount from my school-days, but I need to brush up.",
        description: "The doors of the palace of memory are opened.",
        warmup: 60,
        craftable: true
    },
			{
        id: "studytextbookgreek",
        label: "Improve my Greek",
        actionId: "study",
        requirements: {textbookgreek: 1},
        effects: {textbookgreek: -1,scholargreek:1},
		startdescription: "Of course I have a little Greek already. But I'll need more than a little.",
        description: "A determined and distinctive tongue. But I have the measure of it.",
        warmup: 60,
        craftable: true
    },
				{
        id: "studytextbookaramaic",
        label: "Improve my Aramaic",
        actionId: "study",
        requirements: {textbookaramaic: 1},
        effects: {textbookaramaic: -1,scholararamaic:1},
		startdescription: "There is, of course, no single 'Aramaic', but I will learn what I can.",
        description: "I have achieved a basic understanding.",
        warmup: 60,
        craftable: true
    },
	
				{
        id: "studytextbooksanskrit",
        label: "Improve my Sanskrit",
        actionId: "study",
        requirements: {textbooksanskrit: 1},
        effects: {textbooksanskrit: -1,scholarsanskrit:1},
		startdescription: "The name has been translated as 'the refined language'.",
        description: "So many words, such little time. I will keep my reference works close at hand.",
        warmup: 60,
        craftable: true
    },
	
				{
        id: "studytextbookfucine",
        label: "Develop an understanding of the long-dead Fucine language",
        actionId: "study",
        requirements: {textbookfucine: 1},
        effects: {textbookfucine: -1,scholarfucine:1},
		startdescription: "It has something in common with Latin and something else in common with the scratchings of maddened rats.",
        description: "In places it overlaps with languages I know. In other places... well, I can see why they call it 'the tongue of witches'. But I can understand it well enough, now.",
        warmup: 60,
        craftable: true
    },
	
	
					{
        id: "studytextbookphrygian",
        label: "Learn basic Phrygian",
        actionId: "study",
        requirements: {textbookphrygian: 1},
        effects: {textbookphrygian: -1,scholarphrygian:1},
		startdescription: "Phrygian, the language of Midas, of Tecmessa, of the priests of Cybele.",
        description: "Something about this language stirs the blood. Perhaps it is fortunate that none now remembers its lost sounds.",
        warmup: 60,
        craftable: true
    },
	
					{
        id: "studytextbookmandaic",
        label: "Learn something of the Deep Mandaic",
        actionId: "study",
        requirements: {textbookmandaic: 1},
        effects: {textbookmandaic: -1,scholarmandaic:1},
		startdescription: "Mandaic is the language of a Gnostic sect in the remotest part of Persia. Deep Mandaic remains the language of a sect within that sect, but once it was spoken by adepts.",
        description: "This tongue has just enough in common with Aramaic to make my studies possible; but not to make them easy.",
        warmup: 60,
        craftable: true
    },
	
	
					{
        id: "studytextbookvak",
        label: "Acquire some knowledge of Vak",
        actionId: "study",
        requirements: {textbookvak: 1},
        effects: {textbookvak: -1,scholarvak:1},
		startdescription: "Do the Hours speak? If they do, this may be the language they use.",
        description: "It has been said that one does not learn Vak, so much as come to know her. Well, now she and I are a little better acquainted.",
        warmup: 60,
        craftable: true
    },
	
	
	
		{
        id: "studytextbookreason",
        label: "Improve my Reason",
        actionId: "study",
        requirements: {textbookreason: 1},
        effects: {textbookreason:-1,eruditionplus:1},
		startdescription: "Exercise for the intellect.",
        description: "Possibilities - ",
        warmup: 60,
        craftable: true,
    },
{
        id: "studytextbookpassion",
        label: "Read Poetry",
        actionId: "study",
        requirements: {textbookpassion: 1},
        effects: {textbookpassion: -1,glimmeringplus:1},
		startdescription: "I'll stoke the fires of my imagination.",
        description: "Glimpses -",
        warmup: 60,
        craftable: true
    },
]
}
`

if (json.endsWith(";"))
  json = json.slice(0, -1);
json = json.replace(/(?<!")\btrue\w+/g, `"$&"`);
json = json.replace(/\s+/g, ' ');
// console.log(json);

// console.log(jsonic(json));

console.log(JSON.stringify(jsonic(json)));
