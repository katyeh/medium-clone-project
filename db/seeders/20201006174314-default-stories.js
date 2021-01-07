'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        "Stories",
        [
          {
            title: "The Reading Rainbow",
            body: "The Reading Rainbow is about a child who dreams of reading his favorite books on a colorful rainbow. One day, he is on a walk and discovers a magical world as he wanders through the rainbow. As his mother looks for him, he travels through this magical land and meets many friends on the way. The Reading Rainbow was impossible to put down. The Reading Rainbow was excellent, a real page-turner. I was blown away by the author’s ability to write such phenomenal scenes. I'll be thinking about The Reading Rainbow for a long time to come. I would recommend The Reading Rainbow to anyone. Read The Reading Rainbow! I promise, you’ll be hooked. I won't spoil anything, but my favorite part was when the rainbow taught the boy a true life lesson about always being creative. This story was so original and beautifully written.",
            subtitle: "Ever wondered where reading would take you?",
            userId: 1,
            imageUrl:
              "https://images.unsplash.com/photo-1530519362533-b36020711133?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "The Sorcerer\'s Stone",
            body: "The Sorcerer\'s Stone is about a boy name Harry Potter who learns that he is a wizard and receives and invitation to join Hogwarts, the best school of Witchcraft in the world. I wish I could read Harry Potter And The Sorcerers Stone again for the first time. It kept me spell bound, and I was compelled to keep reading. I am blown away by the author\’s ability to write such phenomenal scenes. Read it! I promise, you\’ll be hooked.",
            subtitle: "Everyone has to read this.",
            userId: 3,
            imageUrl:
              "https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Where the Crawdads Sing",
            body: "This is one of the most moving, caring, emotional novels I have ever read. I read this book only because I had met Delia and have read her wildlife books she wrote with husband Mark Owens. After starting the book this was all I could think about for days. Kya\'s life become part of mine and the characters ceased to live on the page... they were alive with me and I was in the marsh, feeling every feather - the air, creatures and the plants. Jumpin' became a trusted friend and so many moments touched my very soul. I should not have been surprised as Delia has a great style in her wildlife books that I love to read. But a novel like this is not my normal read. Maybe I need to now reconsider what I choose as this book stopped me cold and made me rethink a lot that happened in my life. Delia touched the human soul with her behavioral descriptions. She is not only a respected wildlife scientist, she is a human behaviorist and understands more about the human condition that just about anyone else I know. This is a tremendous treasure of a book and I\'m sure it\'s staying in my read again list for a long time. Highly recommend the book.",
            subtitle: "Such an exciting storyline...",
            userId: 1,
            imageUrl:
              "https://images.unsplash.com/photo-1560747570-846e8dbe919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Never Let a Unicorn Meet A Reindeer!",
            subtitle: "Horse With a Horn",
            body: "What a perfect book to be released just in time for Christmas. It perfectly compliments the other unicorn books by the author and the illustrations are extremely eye catching. The story line and plot was fabulous, because even as I was reading the story, I thought I knew what the ending would most likely be - but the little twist made it even so much more appealing - love the unexpected part. But I won\'t give it away, as you need to experience it for yourself. This will definitely be a great stocking filler for Christmas. Young unicorn fans will love this story! Find out what happens when a young girl asks for one of Santa’s reindeer to visit her in the middle of summer for her birthday. Kiki the reindeer meets the girl’s unicorn (against Santa’s advice), and the 2 creatures get very competitive with each other. When Santa needs extra help on Christmas Eve, however, maybe a magical unicorn is just who he needs to help out. A fun story with cool illustrations.",
            userId: 4,
            imageUrl:
              "https://images.unsplash.com/photo-1527422265102-22027ee90fcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "The Light Ages",
            subtitle: "The Surprising Story of Medieval Science",
            body: 'Falk\’s book seeks to put to rest forever the dismal imagery of the “Dark Ages” by describing the life and times of John of Westwyk, an English monk who lived from about 1350 to 1400, as northern Europe’s medieval period was drawing to a close. John was devoted to astronomy, and by following his own mental odyssey we learn in this book how to tell the time of year from the stars, what mechanism lay at the heart of the great astronomical clock at the monastery of St. Albans, how to operate an astrolabe and why the earliest sunset of the year comes several days before the winter solstice.',
            userId: 3,
            imageUrl:
              "https://images.unsplash.com/photo-1546177461-79dfec0b0928?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "The Stand - Another Stephen King Novel",
            body: 'M-O-O-N. That spells “Damn, what a great book!” I knew King had it in him, I am a fan of his brilliant 1977 haunted house thriller The Shining, but I did not expect this. The best post apocalyptic novel ever? Maybe, that is a broad category teaming with great work from talented writers, but King’s The Stand is an epic, genre defining work. My friend Michael has a profile statement, something to the effect of finding our next 5 star rating. I like that sentiment, and am excited by the opportunity that our next favorite book is out there waiting to be read; a new best friend of an author to whom we’ve yet to be introduced. Here’s mine. I’m late to the party, just reading this for the first time in 2015. I think I was always a little intimidated by the length. It’s a beast, and I was a glutton for punishment reading the 1990 extended version, weighing in at a heavyweight 1153 pages. But it’s a runaway train, grabbing the reader up and taking him or her where Stephen King wants to take you. Yes, it’s a book about a devastating plague, but also so, so much more. King weaves in an allegory about the viruses amongst us. There is also the spiritual quality of the book, King shows how we are sinners in the hands of an angry God, and that dreamers will survive – and survivors can still dream. I could not help making a comparison with the Left Behind series, and associating Flagg to Nicholai Carpathia – though King’s characterization is far more complex and well rounded, and like Milton’s Satan, the most interesting character here is the villain. This makes me appreciate his The Gunslinger series and I want to search out Flagg and read more about him. This is also an American epic and in its context an American eulogy. King shows us the good the bad and the ugly of what we are and what we can be. An observant reader will see references to Ursula K. LeGuin (word for world is woods), to Jim Morison, Edgar Allan Poe, Woody Guthrie, and hell even Rod McKuen. I know Mr. King and have enjoyed many of his works and I have now been amazed by his finest.',
            subtitle: "Boom.",
            userId: 1,
            imageUrl:
              "https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMzk2fQ&auto=format&fit=crop&w=1350&q=80",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Books All People Should Know About",
            subtitle: "If you want to be transported to another place and time",
            body: 'Are you suddenly feeling the tightening coil of mortality? Great. If you’re now wondering where you should start, we’ve got you covered. Here are 100 books to read before you die. To start off 1984 by George Orwell has always been one of my favorites. Set in 1984, Winston Smith must overcome a frightening enemy: an omniscient government with an agenda. This is the book that became a standard-bearer for dystopian fiction and introduced Big Brother into our everyday vocabulary. Perhaps the mightiest of George Orwell’s works. Adventures of Huckleberry Finn by Mark Twain A young boy and a slave in 19th-century Louisiana must find their way home — with only the Mississippi River for a guide. This slender book by Mark Twain’s is so well-regarded that it’s said by many to be The Great American Novel. Lastly, The Alchemist. Written in only two weeks, The Alchemist has sold more than two million copies worldwide — and the magical story of Santiago’s journey to the pyramids of Egypt continues to enchant readers worldwide. A dreamy triumph.',
            userId: 2,
            imageUrl:
              "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=620&q=80",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Animal Farm",
            body: `This book is set in a future when animals are much cleverer than now. And because of their cleverness, the pigs started a revolution against the humans. Pigs could speak fluently in English unlike the other animals, and that gave them the power to be leaders. But, the story that follows only happened a few years after that...
            Their first leader, Old Major, was kind and fair who knew animals should be equal. But when Napoleon became the leader it was very unpleasant. He made a rule that allowed the pigs to have better food and that forced all of the other animals to work crazily hard every day and night. That wasn’t enough, Napoleon wanted more power.
            He decided to kill his brother, Snowball, so that he would be the only leader. Snowball was admired because he came up with a clever idea to build windmill. Snowball was also popular because of his role in the revolution. He and Boxer (a hardworking horse) were the bravest. So this selfish pig, Napoleon, destroyed what the animals built (the windmill) and blamed Snowball who escaped the farm. Then Napoleon made the animals work harder and harder, making the animals very weak and even die. If any of the animals were clever like Napoleon, he would just order an execution to get rid of them.
            animal
            My favourite character is Boxer the horse, who would work the hardest of the animals but never give up no matter how much it hurt, or how old he gets. He never complained to Napoleon, instead saying, “Napoleon is always right”. This book made me think of another newer book, Mockingjay (Part Two of The Hunger Games films) because President Snow is like the humans and President Alma Coin is like Napoleon. President Alma Coin defeats President Snow, but then becomes corrupt and maybe worse.`,
            subtitle: "Just.Read.It.",
            userId: 2,
            imageUrl:
              "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "The Art of Being Normal by Lisa Williamson",
            subtitle: "By turns almost unremittingly poignant, caustically honest and very, very funny",
            body: `By turns almost unremittingly poignant, caustically honest and very, very funny, The Art of Being Normal, is, as you might expect, the antithesis of what it says on the tin. I have often heard it said that a book made someone “laugh out loud” and thought this only existed in book reviews, but Lisa Williamson’s intelligent, thought-stoking novel genuinely had me softly chuckling on more than one occasion.
            Two outsiders – David, a transgender teenager on the cusp of puberty - and Leo, isolated from his classmates at the prestigious Eden Park secondary school by class and a reputation for violence, find their stories mesh in unexpected and transformative ways.
            Voguishly, the entire novel is written in the present tense. Often, this technique is used to create a sense of pace and urgency, but given how much of the novel is about pauses – hesitancy in romantic or sexual relationships; David’s dilemma in coming out to his parents; the frequent stalls and misjudged attempts at friendliness between Leo and David themselves – this method seemed oddly inappropriate to me. There is a dream-like, almost hallucinogenic passage late in the novel, when David and Leo are splashing about in a freezing sea at night, in which identities blur, when using the present tense seemed perfect. It would perhaps have stood out even more if the rest of the novel had not been written in this way.
            The Art of Being Normal
            The Art of Being Normal is chock-a-block full of plot twists which motor the novel along, keeping the pages turning. One in particular is not entirely unexpected if you have read any coming-of- age YA novel, but then again it relates to what is in all likelihood a universal human experience: losing faith in adults you have mythologised. However, the use of the first-person unreliable narrator also allows Lisa Williamson to conceal some major surprises.
            Some of the humour is crafted by tickling conventions – at times it almost feels David in particular is aware he is a character in a novel:
            Ever since we made the decision to come here, I’ve been envisioning a cinematic adventure full of self-discovery, bonding and life-defining moments, but so far Leo is failing to cooperate.
            In so many ways Lisa Williamson brings to life the humdrum existence of post-millennials, from casual references to Leo’s sister Amber’s dysfunctional relationship with food to the Eden Park pupils’ jokes about “pervy” adults, to David’s self-conscious relationship with his parents.
            In so many ways this is a refreshing book to read. David is a blunt, frank narrator: “I’m not gay. I’m just a straight girl stuck in a boy’s body”. The ease with which, ironically, Lisa Williamson writes about characters struggling with their sexuality is remarkable. I was also taken aback, though, by the matter-of-fact inclusion of class as another seeming-impervious barrier in teenage relationships. Somehow as readers we are used to the idea of racism, sexism and homophobia being explored through novels and literature, while Leo’s uneasy limbo, coming from a working-class background but going to a ‘posh school’, was not only poignant but startlingly new in my reading experience.
            Lisa Williamson: 'I have met so many young transgender people living happy, hopeful lives'
            Read more
            As in real life, there are ambiguities and will-they/won’t-they moments which Lisa Williamson does not neatly resolve. The reader leaves David and Leo not at the end of their stories, but the end of their beginnings. I thoroughly enjoyed sharing the slice Lisa Williamson has conjured into being.`,
            userId: 3,
            imageUrl:
              "https://images.unsplash.com/photo-1502078534399-8190479363f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "The Tree Climber’s Guide",
            subtitle: "This book shows you that there is such a thing as an urban paradise, just in the form of a tree top.",
            body: `Tree climbing is one of the activities that I’ve loved for as long as I can remember. So you can understand why I made a beeline for The Tree Climber’s Guide when I saw it on the shelf of a local bookshop.
            As soon as I picked this book up I was immersed. The evocative descriptions of the trees and climbs, added to the stunning illustrations, meant I found myself imagining the climbs in full detail, building up a wonderful picture.
            Reading this book inspired me to dash to the nearest tree and (attempt) to scale it. I don’t know how many times I have dipped into this book, and, inspired, leapt to my feet to find the nearest tree, only to be confronted by waterfalls of rain trickling from the branches.
            climber
            All of the author’s experiences in The Tree Climber’s Guide are, rather surprisingly, in London. Jack Cooke describes the smell and texture of the leaves and bark of the trees, and the astonishing view you get from them; how your perspective of the world is so different, and how people passing by just seem like players in a pantomime. By simply climbing a tree, you can escape the smoky grey bustle of city life, and find your very own world.
            This book shows you that there is such a thing as an urban paradise, just in the form of a tree top. And there are many tree tops that will gladly let you into a private utopia.
            The Tree Climber’s Guide does not tell you how to climb trees. It encourages the act of climbing trees, and it reflects on the climber’s own experiences. Jack Cooke especially encourages adults to climb trees, because he does not think tree climbing is just for children, and he wants all of us to ‘find our inner gibbon’.
            This descriptive, yet witty and informative book will appeal to older children and adults who love nature and the outdoors.`,
            userId: 2,
            imageUrl:
              "https://images.unsplash.com/photo-1513704519535-f5c81aa78d0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "The Bell Jar",
            subtitle: "Back in time.",
            body: `Working in New York one summer, Esther Greenwood is a young, intelligent women on the edge of greatness. Though the ambition she once had to achieve her dreams (the ones which won her the awards, the prizes, the grades) have faded into a distant memory and she’s barely drifting along.
            With the pressure of marriage and the passé New York night life, what will become of Esther Greenwood?
            The classic, semi-autobiographical (though, the more you learn about the novel and author, the more autobiographical it seems to become) novel by Sylvia Plath is 234 pages of pure brilliance. It gives us a meaningful insight into the thoughts of Plath and the complete isolation one can feel when in a city (though there are so many people, as they all seem to pass the person by completely). The book also shows an interesting, sadly relatable, idea of ambition; how the character started from nothing, had to work her whole life up until getting a scholarship to a college and finds herself in New York and then completely loses all of her drive, ambition and passion. She can’t write or properly read any more (things she once loved) and this is fed by how easy everything is for her; her grades meet all the requirements but don’t fill the emptiness that resonates within her.
            plath bell jar
            The novel also takes on the role of women in society (the expectations of them, ideas of what society tells us women should prioritise, such as marriage and children - all things the Esther seems to come to resent as the novel continues), along with a young woman’s exploration of her sexuality. Materialism is also a subject Plath addresses (the people around her, the gifts she receives) through the interesting idea of how the character Esther was so easily able to give it all up: the clothes, the lifestyle, and the money.
            The Bell Jar is not just a classic piece of fiction (though so out of the box for its time), but also a novel that will continue to resonate with people throughout time as it talks of problems and classic faults with human nature that will always persist. I give it 4.5 out of 5 for being able to so clearly represent not only women in society but the truth of mental illness.`,
            userId: 4,
            imageUrl:
              "https://images.unsplash.com/photo-1574627958512-8c12d94ec295?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Hansel and Gretel",
            subtitle: "Don't read this at night.",
            body: `Hansel and Gretel plays to our worst fears: being abandoned by those that should love and care for us most. It has dark and light at its heart. Two children are taken into the woods by their parents and left there to be slaughtered by wild animals. They leave a trail and find their way home only to be returned once more to the forest. As a child I found it one of the most worrying of all the fairy stories. One day I came home from school and found the front door open. My brother and I had seemingly been left all alone. Certain that no one was coming to look after us, I stood on a chair and, like Gretel, brought down all the jam from the cupboard and made us jam sandwiches. We ate them, then we ate all the cherries in a bowl. By the time someone arrived we had the most appalling tummy aches. For a long time I never wanted to hear the story again.`,
            userId: 3,
            imageUrl:
              "https://images.unsplash.com/photo-1523712900580-a5cc2e0112ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Sally Gardner's top 3 fairy tales",
            body: `"I have been long been fascinated by the history and psychology of fairy tales. When I suggested to my publisher that I write a story based on one, I had a wealth of material to choose from…"
            Sally Gardner won the Carnegie medal and the Costa children's books award with her novel for teens, Maggot Moon. Her lates book, Tinder, inspired by a classic Hans Christian Andersen fairy tale features a young soldier, a captive princess, witches, wolves and Death.
            1. Beauty and the Beast
            This is a favourite fairy tale of mine. The classic text, which was first published in London in 1756, comes from Madame Leprince de Beaumount. It is a story that has fired the imagination of many writers including Angela Carter, who wrote Mr and Mrs Beast, and it inspired Jean Cocteau's film La Belle et la Bete. Perhaps it is the most intellectually satisfying of all the stories because it's to do with love in its truest form, about seeing through perceived ugliness to the goodness of the heart underneath. The heroine has to change in order to discover that love isn't all about superficial looks.
            2. The Tinderbox
            One of the first fairy tales Hans Christian Andersen wrote, it was published in Copenhagen on 8 May 1835 when Andersen was 29. Of all his stories, it was this one that obsessed me as a child because of the dogs. The idea of any hound being large enough to have eyes the size of plates, or cartwheels or millstones I found more truly terrifying than any dragon.
            In this profound story a witch is standing by the side of the road near an oak tree when she sees a soldier. She asks him what he has to show for all his years fighting. The soldier replies that he has nothing. Yet even when the witch has given him the means to make himself rich beyond his wildest dreams in return for bringing her the tinderbox, he is incapable of showing gratitude. Instead he chops her head off before setting out to find a town where he might spend his money. In many tellings of this story the soldier's deeds have been sanitised to make them more acceptable to a younger audience.
            When I started to write Tinder I felt that the Tinderbox had all the ingredients I needed to question the nature of war today and the damage done to so many young men. For my research I was privileged to be able to talk to officers who had served in Afghanistan and Iraq and their accounts, combined with those of child soldiers, made me realise that this story had a lot to say today's readers.
            3. Bluebeard
            The mental image of a blue beard mesmerised me when I was small. I wondered what colour blue this man's beard could possibly be. If it was bright blue why didn't his prospective fathers-in-law dissuade their daughters from marrying him?
            Bluebeard is seductive not because of his blue beard but because of his immense fortune. Each bride he takes is left alone with the keys to his castle shortly after their marriage. She is permitted to look in every room she fancies apart from one.
            On one level it is a story about curiosity and seemingly has very little magic in it except for one supernatural key that bleeds the moment the forbidden door is opened. No amount of washing will wipe the blood away.
            The original Bluebeard is thought to be based on Gilles de Rais (1404 -1440). He was extraordinarily rich and fought alongside Joan of Arc at Orleans. His lifestyle was ruinously extravagant and finally he resorted to black magic in the hope of restoring his fortune. In 1440 he was accused of heresy, and 140 murders. Whether Bluebeard was Gilles de Rais or another Breton, Comorre the Cursed, matters little. They sparked a story that goes to the heart of us.`,
            subtitle: "Top 1... top 2... top 3...",
            userId: 4,
            imageUrl:
              "https://images.unsplash.com/photo-1521824243451-25d32715584a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Chasing the Stars",
            body: `Upon his death the playwright Ben Johnson declared that his friend, William Shakespeare, was not “of an age, but for all time”, a phrase which was inscribed in the First Folio of the Bard’s works. You need look no further than Michael Fassbender’s PTSD-plagued Macbeth; Russel T Davies’ recent joyous and subversive retelling of A Midsummer Night’s Dream; The Lion King or 10 Things I Hate About You to garner a sense of the playwright from Stratford-upon-Avon’s longevity. On the 400th anniversary of Shakespeare’s death, Malorie Blackman has published Chasing the Stars.
            This is, first and foremost, an epic love story, set against that most epic of backdrops, outer space. Malorie Blackman populates this with worlds such as ‘Barros 5’, ‘Mendela Prime’ and stranger entities including the ‘Zandari ion storm’, which would not be out of place a long time ago and in a certain galaxy far, far away. A reference on the very first page – “Pressing a make-believe switch to activate my imaginary lightsabre” (apparently in the year ‘AD 2164’, when spaceships can tunnel vast intergalactic distances through ‘wormholes’, the Star Wars franchise is still a going concern) – introduces a whole host of sly nods and winks. There is even a ‘Resistance’, fighting an apparently doomed struggle against a powerful ‘Authority’, which is largely played out in the story’s background. You get the sense Malorie Blackman enjoyed smuggling these in; as a reader I certainly enjoyed being on the look-out for them.
            As the novel opens Vee and her brother, Aidan, are the only survivors after an incurable virus wreaked havoc on their Earth research vessel, leaving their parents dead. They are trying to reach Earth, their grandparents, the familiar, when Vee as acting captain makes a split-second decision to rescue human settlers who are being hounded out of Barros 5 by the terrifying, xenophobic, Mazon.
            Chasing the Stars by Malorie Blackman
            Initially, it seems as though the Mazon will be a generic, uniformly ruthless alien race, but a much more nuanced picture is gradually teased out (Malorie Blackman couldn’t even leave the Daleks unremittingly evil in her 2013 Doctor Who short story, so perhaps this isn’t too surprising). The consequences of this split-second decision, as well as a number of other haunting, past and future decisions, all of which are subject (what human decisions aren’t?) to pressure, emotion and prejudices, unravel over the course of the novel.
            Vee meets and falls in love almost instantaneously with Nathan, one of the survivors from Barros 5. Chasing the Stars is told entirely from the first person perspective (which can, inevitably, undermine moments of high tension, as it is being told in the past tense) which shuttles rapidly back and forth between Vee and Nathan. The rapidity of the shift in perspectives gives the novel an unrelenting pace – even in the tenderest moments between the young lovers, it is hard to forget the atmosphere of threats surrounding them – and allows Malorie Blackman to deploy dramatic irony to maximum effect, as Vee and Nathan desperately try to second-guess each other’s innermost feelings, hopes and suspicions, to which the reader gains instant access.
            The essential storyline derives from Othello; anyone familiar with at least a hazy outline of the play’s plot knows Vee and Nathan’s love story will be rocky, to say the least. The invisible barrier dividing Vee and Nathan, given less limelight than in Noughts and Crosses, is that Nathan is a “drone”, an under-caste of menial workers whom the Authority deploys to do the most physically and emotionally degrading work (robots being comparatively expensive to manufacture). Inequality remains a pertinent theme, but in this novel Malorie Blackman sharpens the focus on the ‘undeserving poor’ and the desperate rather than race. One cannot escape ‘drone’ status without desperately scrabbling enough ‘credits’ – a Sisyphean task.
            This gives Chasing the Stars a timely resonance. I found it hard to read the passages where the Mazon indiscriminately fire on the settlers – men, women, children, doctors – without thinking of harrowing images from the Syrian civil war. Malorie Blackman does her utmost to keep this current, moral crisis in the uppermost of the reader’s mind, repeatedly referring to the survivors as “refugees” (which is of course what they are). At a time when the very word refugee has all too often become something disturbing, this simple, accurate use of the noun can feel (sadly) shocking and provocative. I was reminded of the way John Steinbeck repeats the phrase “the migrant people” in The Grapes of Wrath so that what starts as an accurate term descends into the fear and loathing-drenched phrase used by people who are terrified by what the migrants represent. Chasing the Stars poses a number of moral dilemmas for Vee which make human and manageable the vast questions echoing in the minds of Europe’s leaders, but also its citizens and civil society right, now. The reaction of Aidan, Vee’s brother, also suggests that a fear of refugees can be due to prejudice but also a sense of alienation for which someone is not entirely responsible. Chasing the Stars offers no easy solutions.
            The loss of humanity is a theme pervading the novel. When Nathan first introduces himself as a drone, Vee dismisses it as a joke: ‘They’re just sub-intellect labourers doing all the…work that’s too filthy or hazardous for normal people to do’. Later, another character appeals to Vee’s ‘love of literature and films and music and art, all the things that separate us from beasts and drones’.
            The theme is also developed in more unexpected, yet still poignant, ways. From the beginning of the novel, when there is an unexpected, disorientating, shift in time, the plot of Chasing the Stars never leaves the reader feeling entirely secure. Both Vee and Nathan are unreliable first-person narrators who withhold crucial information, allowing the reader to share other characters’ sense of shock when revelations break through. Like some of the deep ethical, intellectual and even metaphysical questions posed by the novel (intelligent science-fiction fits cosily into the adrenaline-doused battle sequences and emergency ship manoeuvres) these twists occasionally seem to come too late in the novel to unleash their full impact. Furthermore, the ‘mystery’ element can seem somewhat bolted on, and its resolution is a tad obvious if you know the story of Othello.
            Nevertheless, this is a thoughtful, entertaining novel built around a heartrending love story. (Its more ‘soppy’ moments are always humorously undercut by Nathan and Vee’s own awareness of the cheesiness of their relationship – hinted at by the title itself.) There is a sense of timelessness about it, but a searing relevance for 2016. The novel does make demands of the reader, and the questions it poses return to nag. The very casualness with which Malorie Blackman introduces a multi-racial crew of characters and same-sex relationships is refreshing and offers hope they do not have to be tackled in ‘issues’ novels – surely a sign of progress in itself. Chasing the Stars does deliver a conclusion which is both satisfying in terms of the plot and emotionally; it feels like a proper ending, although I’m sure if Malorie Blackman wanted to return to this universe she’s left herself plenty of scope to do so.`,
            subtitle: "What an astounding story!",
            userId: 13,
            imageUrl:
              "https://images.unsplash.com/photo-1516207822918-7b0323255ed5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Top 10 books about the unknowable",
            body: `Early in every writer’s apprenticeship we’re likely to encounter the advice to “write what you know”. It’s a cliche, but like most, one with a kernel of truth, nodding as it does to the authority implicit in author and reminding us of our contract with readers; they give us their attention in return for some command, on our part, over our subject. One limitation of “write what you know”, however, is the tendency to interpret what we know narrowly as what we’ve experienced, rather than what we’ve learned or researched. But a little further along in our writing education, we’re liable to encounter a refinement of the advice, that “we write to know”, reflecting every writer’s intuition that writing is a mode of thinking, of inquiry, and that we often recognise we’ve finished revising a story when we finally understand it or know it. If “write what you know” implies we begin from knowledge, and “write to know” suggests we write towards it, my protagonist (and I) are glimpsing a third mode of writing in which we address the unknowable. Chekhov’s dictum – “The role of the artist is to ask questions, not answer them” – might apply here, but sometimes that role goes further, to include the asking of unanswerable questions and the dramatization of the state of uncertainty that results. This might seem to break that contract with the reader noted above, but such works rather that frustrating readers might seek to offer them some company or even solace in facing uncertainty in their own lives (something, of course, which has seemed ever more urgent and widespread in the last year).
            Here then are 10 books that each in their various ways face the unknown, less to dispel mystery than to accept it. The kind of books both I (and my character) cherish.
            1. 10:04 by Ben Lerner
            Already a classic of the new mode of autofiction, Lerner’s by turns playful and mournful novel filters the many uncertainties of its protagonist (his health, his prospective fatherhood, the future), through the uncertainties of the form. The fact that the book’s protagonist is a writer who shares the same name as his author alerts us to the possibility that this might be fact or fiction and ensures that the flickering uncertainties of the character’s life ramify for the reader.
            2. The Friend by Sigrid Nunez
            Another book that seems to hover in the uncertain space between memoir and fiction. In this case the formal uncertainty reflects on, most obviously, the unknowability of a friend’s suicide, but also more subtly on the status of the friendship itself and the essential unknowability of even those we love – whether human or animal (in the form of a great dane called Apollo).
            3. Trust Exercise by Susan Choi
            Less auto- than meta-fiction, perhaps, Choi offers competing versions of a teenage trauma to reflect on the uncertainties of storytelling, of memory, and the gaps between competing points of view in a charged #MeToo context.`,
            subtitle: "I was lucky finding this book.",
            userId: 13,
            imageUrl:
              "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "In the Land of the Cyclops",
            body: `A lengthy review here of Michel Houellebecq’s novel Submission opens with a plodding explanation of why Knausgaard has never before read the author, and labours on under the presumption that we are as interested in the underqualified reviewer as we are in his subject. He’s better on Madame Bovary, and on much surer footing in a long essay on his compatriot Knut Hamsun’s “dirty modernism”. A piece about reading Kierkegaard in Beirut also begins with an admission that Knausgaard is a newcomer to the Danish philosopher (presumably a commissioning editor liked the symmetrical headline possibilities – Knausgaard on Kierkegaard). He has little to say on Kierkegaard’s thoughts that can’t easily be found elsewhere – and none of it is as lively as an excruciating anecdote about his reading a passage from My Struggle in which he slashes his face to impress a woman to a war-shocked Middle Eastern festival audience.
            It’s a reminder that My Struggle’s best episodes worked on the level of scandal and salaciousness – a several-thousand-page slab of Nordic reality TV in gossipy, oversharing prose. Knausgaard can be engaging on art and photography (subjects include Cindy Sherman, Anselm Kiefer, Francesca Woodman), but as a novelist turned philosopher-critic, he often reads as an Aristotelian particularist trying to be a universalising Plato. Whenever he looks up from the concrete, sensuous and personal, he drifts into watery abstraction. His essays are wide ranging in the sense that they tend to cover too much ground. One, Idiots of the Cosmos, skips between identity politics, War and Peace, Pascal’s horror of the infinite, the northern lights and much else besides, but none of it really sticks. With no recollected or imagined world (of childhood, adolescence, manhood) to earth his perceptions, his thoughts spool out, untethered and inconsequential. At his worst, Knausgaard the essayist is a monological bore.
            Karl Ove Knausgaard: ‘Writing is a way of getting rid of shame’
            An exception is the pugnacious title piece. It reads like an allegory of cancel culture, until you realise he’s talking about Sweden. Knausgaard’s adopted home seems to be at the vanguard of punitive, curtain-twitching philistinism. With wary indignation he details how the national press have slandered him as a paedophile, a misogynist and a Nazi, and compared him to Anders Breivik. “So what was my crime? I wrote a novel.” He rehearses commonsensical positions that now require defending even beyond priggish Scandinavia: art should convey the messily actual and not just the ideal; fictive description does not entail the act of condoning, and so on. Clearly, this stuff really rankles: in Home and Away he also tore into the intolerance and self-righteousness of Swedish liberals (it was the feminist youth leagues who were having a go at him in that instance). The Knausgaard diehard will appreciate the reminiscences of childhood journeys and youthful misadventures, even if some of these are recycled. He retells a prophetic dream that was central to Some Rain Must Fall, the darkly riveting fifth volume in My Struggle, as well as the shattering event the dream augured: a malicious false rape accusation. But here we discern the core weakness of In the Land of the Cyclops: the first time round, Knausgaard locked us inside the breathless first-person cockpit of his autofiction; here, the dream and the horror it prophesied are bookends to lengthy, under-controlled and largely bloodless musings on literature, schizophrenia, Dante, Tycho Brahe and the Icelandic sagas. “I hate myself,” Knausgaard announces unbidden in a diaristic piece titled At the Bottom of the Universe. I never hated him, but I did find myself hoping he’d take a hint and let me usher him out of the door, so I could collapse into my armchair, knackered.`,
            subtitle: "With a few exceptions, the acclaimed Norwegian novelist’s musings on literature, philosophy and the cosmos too often drift into abstraction.",
            userId: 13,
            imageUrl:
              "https://images.unsplash.com/photo-1584342093353-c87c366a9ba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Stories', null, {});
  }
};
