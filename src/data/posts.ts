export interface Post {
  slug: string;
  title: string;
  date: string;
  author: string;
  categories: string[];
  tags: string[];
  image: string;
  content: string;
  gallery?: string[];
}

export const posts: Post[] = [
  {
    slug: "the-dance-of-the-hummingbird",
    title: "The Dance of the Hummingbird",
    date: "February 22, 2023",
    author: "Falcon",
    categories: ["Artificial Intelligence", "Poetry"],
    tags: [],
    image: "/images/hummingbird.jpg",
    content: `In gardens lush with blossoms bright,
Amidst the nectar's sweet delight,
A tiny bird with wings so quick,
Comes flitting by, a humming stick.

Its beak so long, its feathers bright,
A jewel-like flash within my sight,
A whirring sound, so fast it flies,
A moment's beauty for my eyes.

With speed and grace, it hovers near,
A dance of life, so free, so clear,
Its wings a blur, a hummingbird,
A treasure in the garden heard.

With sweetest nectar in its beak,
A moment's pause, a sip, a treat,
Then off it goes, a flash of green,
A moment's beauty, yet unseen.

Oh hummingbird, with wings so light,
A symbol of life's sheer delight,
A reminder to slow down and see,
The beauty in life's harmony.`,
  },
  {
    slug: "these-are-my-shadows",
    title: "These are My Shadows",
    date: "November 26, 2021",
    author: "Falcon",
    categories: ["Lists", "The Old Days"],
    tags: ["abandonment", "authentic", "healing", "mission", "shadow", "soul"],
    image: "/images/shadows.jpeg",
    content: `**Mission**—I create a safe world through self care and service

**Shadow mission**—I create a lonely world through avoidance, procrastination and walling off.

### KEY
1) shadow
2) this is what typically triggers me
3) this is how I am safe with others
4) this is what I have learned about myself from that shadow
5) this is how I lead from this self understanding

---

**Shadow 1: Irrelevance**

1) I am a man that doesn't matter to other people.
2) People don't return my calls or texts, they don't reach out to me, I am not chosen.
3) People give me attention, time, and material gifts. Or, I get to a place where I don't need those from others.
4) I see that the line above 'People give me attention, time, and material gifts,' is what my mom gave me (and sometimes did not give me). I will want to continue to give these things to myself.
5) I will not base my self esteem on the actions of others. I will love all men, offer my gifts, freely, in the best way I know how, and not expect anything in return. I will nurture and soothe 15 year old Stuart.

---

**Shadow 2: Defectiveness**

1) I am a man that is defective, broken, dirty and not wanted.
2) I am ignored or shunned. Not included.
3) People ask me how I am, show interest, give praise, touch me, invite me to come along. Or, I get to a place where I don't need those from others.
4) I don't want anyone to feel this way. I want to give interest and kindness to all souls regardless of who they appear to be. Each person was an innocent child at one time.
5) I listen closely. I bring that person into my mind and then into my body. I ask open ended questions.

---

**Shadow 3: Weak Boundaries**

1) I am a man with poor boundaries, and a weak 'NO' that allows people into my life who will take advantage of me, disregard me, and step on my feet.
2) Roommates don't follow agreements. 'Friends' don't respond to me. People take advantage of me, sometimes with my permission.
3) I get back what I give. Or, I get to a place where I don't need that from others.
4) Because I am poor at relationship with myself and others, I am desperate for friends, I will people please, and stay in relationship with others who do not give back what I am willing to give. I want to be liked. I want attention and praise.
5) I create clear agreements. I communicate clearly. I say what the impacts on me are. I use a strong 'NO.'

---

**Shadow 4: Immaturity and Inadequacy**

1) I am a man that is behind in life, immature, shallow, not present, not well spoken, and with few assets.
2) People talk about their assets, children, extended families or houses. A person speaks eloquently, with depth, nuance and presence.
3) I celebrate and hold my unique path. I serve in ways that my unique experience allows.
4) As a coping mechanism I have chosen to wall off and go it alone in life. Not depend on others. And, I am a survivor. I think outside of the box.
5) I do my best. I recognize and nurture those who are like me. I bring fresh insight from my unique experience.

---

**Shadow 5: Vindictiveness**

1) I am a man that holds grudges and retaliates
2) People who cross me, insult me or disregard me.
3) I remember what is mine, and especially, what is not mine.
4) I don't like to be in conflict. I create unnecessary suffering for myself. It is a younger aspect of me that is triggered. I can be a bully.
5) I catch and discharge unwanted energies. I remember that people have suffered and might get triggered by me. I remain calm.`,
  },
  {
    slug: "block-warrior",
    title: "Block Warrior",
    date: "November 22, 2021",
    author: "Falcon",
    categories: ["Cock & Bull", "Poetry", "Smash the Predator Class"],
    tags: [],
    image: "/images/block-warrior.jpg",
    content: `I am a voyager
into the air
Perched on these edges
precisely aware

Timelessly dancing
moving with grace
Nothing enters
my mind in this place

I'm a block warrior
clever and brave
Buying the dip
is what I crave

This is my ethic
just be a joiner
Counter the FUD
and hug a no coiner

Not a schilling
bear trap bag holder
Patiently waiting
to place my buy order

I'm a block warrior
determined to rise
From terra firma
into the skies

Oh DAO partner
I have to admit
You are a degen
and a good fit

Together we venture
into the sky
Bonded forever
you are my guy

I'm a block warrior
moving in tune
Floating timelessly
up to the moon`,
  },
  {
    slug: "traits-and-unique-gifts-skills-values-and-goals",
    title: "Traits and unique gifts, skills, values and goals",
    date: "October 22, 2021",
    author: "Falcon",
    categories: ["Cock & Bull", "Lists"],
    tags: ["boundaries", "healing", "trust", "values"],
    image: "/images/traits.jpg",
    content: `I notice everything, there is no detail that I miss. I have a deep intuition about people. I am sensitive to those who are suffering. I am methodical rather than sprint-focused. I value consistency over perfection.

I have strong organizational and problem-solving abilities with capacity for complex thinking. I bring visual creativity and wordcraft skills. I am committed to authentic self-expression and radical honesty. I prefer solo pursuits over team environments. I have a deep connection to nature and the outdoors.

I am interested in spirituality and psychedelics as healing tools. My values are centered on justice, mentorship, and human connection. I reject capitalist achievement paradigms.

I am working on my collaboration skills, and how to better show up in relationship. I am healing from addictions and avoidance while maintaining pride in my identity and origins.`,
  },
  {
    slug: "the-pelican-king",
    title: "The Pelican King",
    date: "September 29, 2021",
    author: "Falcon",
    categories: ["Poetry", "Stories"],
    tags: ["authentic", "healing", "hero's journey", "inner child", "men's work"],
    image: "/images/pelican-king.jpg",
    content: `Anger, risk, bullying, I felt a medieval mask
An executioner in a red robe, discarding souls
With mercy, and without hesitation, I grant the pardon
Little Stuart

Ben and Ann discard, Armelia reminds me of hell
The hero sustains the pardon, and protects the triumvirate
He steps into adulthood, and takes an honored place on the altar
Stuart the Younger

Mexico, a one thousand mile drive, dog at side
A restructuring of the brain, a journey to perfect oneness
A king arrives home, with food, and gifts, and blessings for all
The Pelican King`,
  },
  {
    slug: "this-is-how-i-want-to-be-remembered",
    title: "This is How I Want to Be Remembered\u2026",
    date: "January 30, 2021",
    author: "Falcon",
    categories: ["The Old Days"],
    tags: ["adventure", "connection", "gratitude"],
    image: "/images/annapurna.jpg",
    content: `Annapurna Circuit to Annapurna Basecamp ~ March, 2013

Happy and Growing Hair

A 26 day solo trek through the Himalayas. And yes, I invented the selfie back in 2008.`,
    gallery: [
      "P3060750", "P3060844", "P3080858", "P3080864", "P3080876", "P3080888", "P3080900",
      "P3090933", "P3090944", "P3090949", "P3100969", "P3101002", "P3101011", "P3111106",
      "P3111111", "P3111150", "P3121226", "P3121257", "P3131336", "P3131347", "P3151430",
      "P3151480", "P3151495", "P3161527", "P3161554", "P3161579", "P3171591", "P3171602",
      "P3171613", "P3171614", "P3171630", "P3171660", "P3181730", "P3181776", "P3191793",
      "P3191813", "P3191820", "P3201923", "P3201924", "P3201985", "P3232047", "P3242085",
      "P3242095", "P3242109", "P3242171", "P3252219", "P3272279", "P3272284", "P3282308",
      "P3282336", "P3292375", "P3292378", "P3292392", "P3292440", "P3302486", "P3302500",
      "P3302508", "P3302509", "P3302514", "P3312533", "P3312539", "P3312545",
    ],
  },
  {
    slug: "rock-warrior",
    title: "Rock Warrior",
    date: "December 3, 2020",
    author: "Falcon",
    categories: ["Poetry"],
    tags: [],
    image: "/images/rock-warrior.png",
    content: `I am a voyager
into the air
Perched on these edges
precisely aware

Timelessly dancing
moving with grace
Nothing enters
my mind in this place

I'm a rock warrior
clever and brave
Leading more pitches
is what I crave

This is my ethic
honor the mother
Landing home safe
thank you I offer

Not a spraying
ego sport climber
Adventure trad pitches
higher and higher

I'm a rock warrior
determined to rise
From terra firma
into the skys

Oh dear partner
I have to admit
You are a dirtbag
and a good fit

Together we venture
into the sky
Bonded forever
you are my guy

I'm a rock warrior
moving with grace
Floating timelessly
up into space`,
  },
  {
    slug: "feelings-ive-had-things-that-i-know",
    title: "Feelings I've Had. Things That I Know.",
    date: "July 29, 2020",
    author: "Falcon",
    categories: ["Poetry", "Tales"],
    tags: ["boundaries", "brothers", "dogs", "elderhood", "xavier"],
    image: "/images/feelings.png",
    content: `Face tingling I open the gate.

Stoned Granite stumbles onto the grass.

The virtues of gardening are spoken.

The dog takes a big shit, finally.

Devious influence, 'you shoulds.'

Granite attempts play but wobbles over.

The phone rings, 'its my ex-wife,' don't answer!

Kind 'hellos' boil over in minutes.

The dome is set, impenetrable.

"Load up Granite', we drive away.

Brother, I love you, you matter to me!

Xavier Rudd sings Home, and we cry.

'I recognize my health [3 bars]

Things that I have been dealt [3 bars]

Places that I have roamed, Feelings I've had. Things that I know. [1 bar]

Home\u2026'`,
  },
  {
    slug: "gentle-rain-rinses-hope",
    title: "Gentle Rain Rinses Hope",
    date: "July 29, 2020",
    author: "Falcon",
    categories: ["Poetry"],
    tags: ["authentic", "breath", "brothers", "death", "hope", "soul", "youth"],
    image: "/images/gentle-rain.jpg",
    content: `Will there be a happy ending?

I always thought there would,

but now I'm not so sure.

I felt invincible for so many years,

scoffed at naysayers and critics,

convinced that nobody was needed.

Then one day my past caught me,

the masks could no longer shield me,

and sadness became my companion.

I thought often of dying, not worthy,

and how it would end for me,

aging I felt left behind.

Numbed, the troops march on,

blues, and gentle rain rinses hope,

clear, fresh air, breathe in.

I tell the story of who I am,

imperfect, with my whole heart,

I am enough and this is me.

Birthplace of innovation, creativity. and change,

curing the swampland of the soul,

this vulnerability just might work.

Hope so!`,
  },
  {
    slug: "the-morning-list",
    title: "The Morning List",
    date: "May 30, 2020",
    author: "Falcon",
    categories: ["Poetry"],
    tags: ["brothers", "connection", "food", "gratitude", "nature"],
    image: "/images/morning-list.jpg",
    content: `Wily weimaraners

Sacred 'shrooms

Manly men

Gifted girls

Wild woods

Hopeless hope

Tender tears

Breaking rules

Awesome invites

Spicy pizza

Ridiculous humans

Hiding nothing

Seeking surrender

Toddlin' toddlers

Ponderosa pines

Pretty pecs

Continuous curiosity

Brothers bonding

Poetic prose

Now that I've finished

my list in this way

I am ready to go

about my day`,
  },
  {
    slug: "the-well",
    title: "The well",
    date: "May 24, 2020",
    author: "Falcon",
    categories: ["Poetry", "Yarns"],
    tags: ["community", "connection", "healing", "love", "trust"],
    image: "/images/the-well.jpg",
    content: `A round well with little Buddhas on the walls

A reservoir with pure water, still and at peace

Dimly lit, I am welcomed and invited to stay

Inside the walls expand around me, safety

Calm, I bathe in the lukewarm waters

My tears flow, and the well begins to fill

I see clearly, stories melt away, serenity

Forgiveness and love spilling outward

I will return to cleanse in these waters

Please come inside with me`,
  },
  {
    slug: "can-i-trust-you",
    title: "Can I trust you?",
    date: "May 24, 2020",
    author: "Falcon",
    categories: ["Poetry"],
    tags: ["abandonment", "being gay", "food", "fun", "growth", "men", "trust"],
    image: "/images/trust.jpg",
    content: `Dear friend, I am here, can you see me?

Are you a man who has done his work?

Can I trust you?

My heart is tender and can hardly bear

to be left again

Are you a solid man? Will you show me

who you are?

Or will you trick me and lie to me

then discard me?

Whoever you are I cannot change you

I will see you

I will arrive neutral and unafraid

you won't affect me

I will stand tall, proud, grounded

offering compassion

You may not like this version of me

and you will leave

But if you can see me and lean in

we can join in friendship`,
  },
  {
    slug: "point-of-historical-significance",
    title: "Point of historical significance",
    date: "May 24, 2020",
    author: "Falcon",
    categories: ["Stories", "Tales"],
    tags: ["activism", "boulder", "climbing", "flatirons", "no fracking"],
    image: "/images/flatiron.jpg",
    content: `**DO NOT FRACK OPEN SPACE**

On Wednesday, October 18th, 2017 the largest banner to ever to be displayed on Boulder's iconic third flatiron was unfurled at 8:50am by local environmental activists/climbers.

The banner measured 9 feet by 150 feet, constructed from Tyvek home wrap material. The message read: "DO NOT FRACK OPEN SPACE." The six-foot letters were painted in black acrylic paint.

Three experienced climbers carried the banner via the South Chimney route. They used cams and ropes for anchoring, with no damage done to natural features. Nine-foot dowels were wrapped and sewn to each end. Four retired climbing ropes were used and donated by a local climber.

**Action Timeline:**
- 6:00 AM: Group departed Gregory Canyon Trailhead
- 7:30 AM: Climbers ascended South Chimney
- 8:30 AM: Media notified
- 8:50 AM: Banner unfurled
- Within 15 minutes: Banner secured and drone captured aerial footage

The protest aimed to raise awareness that permits for hydraulic fracking have already been submitted for many acres of Boulder County's Open Space. The activists opposed the Boulder County Commissioners' refusal to pass protective measures banning fracking.

All goals were achieved. Media coverage followed, and the group departed without incident or confrontation with authorities.`,
  },
  {
    slug: "granite",
    title: "Granite",
    date: "May 19, 2020",
    author: "Falcon",
    categories: ["Poetry"],
    tags: ["best friend", "dogs", "loyalty", "weimaraner"],
    image: "/images/granite.png",
    content: `Granite is a silver weimaraner

and to my best friend I toast

He is faithful, loyal and courageous

These traits I value the most

How lucky am I, good 'ol boy, best friend

Keeping watch, he warms my feet

D4 he climbs, a graceful, dyno leap

Here boy! Have a scratch, have a treat`,
  },
  {
    slug: "how-to-create-a-media-storm",
    title: "How to create a media storm",
    date: "May 2, 2020",
    author: "Falcon",
    categories: ["Audio", "Smash the Predator Class"],
    tags: ["ben pearlman", "boulder", "fracking", "oil and gas", "open space"],
    image: "/images/media-storm.jpg",
    content: `**KGNU Interview on Morning Magazine with Maeve Conran**

On November 7th, 2017 David Paul, a member of the Boulder County Protectors, while engaging in peaceful protest, was issued a summons for trespassing (5-4-3) by the City of Boulder police.

The event was the 20th anniversary of Boulder County Open Space. David Paul projected a "Ban Fracking" message onto the Boulder County Courthouse during the celebration.

Boulder County Attorney Ben Pearlman authorized the charge. Paul retained attorneys David Lane and Andrew McNulty to contest the citation, citing First Amendment and Colorado Constitutional Article II, Section 10 violations.

The legal challenge framed the protest as protected political speech rather than criminal trespass.`,
  },
];
