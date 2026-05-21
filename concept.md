# Errata

## The name

*Errata* is the formal term for a list of errors in a published work — a page at the back of a book where the author quietly acknowledges what slipped through. Here, the errors are not typos. They are words: words that arrived with great confidence and said nothing. The errata is the honest accounting.

## The premise

Dean Hachamovitch invented the red squiggly underline — the universal signal that something may be wrong. It was designed as a servant to words: it flags, defers, waits. In Errata, we flip that relationship.

**The squiggle is the real thing. The word is just where it lives.**

## What it is

A single-page webapp. No build step, no package manager. Open it and it works. Hosted on GitHub Pages.

A field of tech jargon floats on screen — words like *agentic*, *pivot*, *founder mode*, *democratize*, *slop*. Each word carries a living red squiggle underline, breathing with its own rhythm. The squiggles are hand-drawn in character, organic, warm — the most alive element on an otherwise corporate surface.

The jargon is restless. The squiggles are trying to tell us something.

## The corpus

`tech_jargon_snarky.csv` — a curated list of words and phrases with type (noun/verb/adjective/phrase) and a snark-annotated honest definition. The corpus is a living document; future collaborators add rows. The CSV structure is the API:

- **word/phrase** — what floats on screen
- **type** — subtly influences squiggle character (verbs more kinetic, nouns more stubborn, phrases more sprawling)
- **definition** — the honest translation, revealed on tap

## Interaction

Phone-first. Touch-first. Portrait orientation. 8–10 words visible at once — room to move.

**Tap a word:** The squiggle animates urgently, as if it's been trying to flag you all along. Ghost text appears briefly beneath the word — the honest translation. *"Learnings"* → *"things that happened to us."* The squiggle settles back, unsatisfied that you noticed but didn't care.

**Fling a word:** Swipe it across the screen. It flies; the squiggle trails behind it like a tail. It bounces off edges.

**Collision:** When two words meet, something happens. Options, left open for the project to discover:
- They merge into compound jargon (*"leverage-synergize"*)
- Their squiggles briefly escape and the naked words are left exposed
- A small confession floats up between them (*"we have no idea what either of us means"*)

**Shake the phone:** All words scatter. Squiggles go briefly wild. The universal gesture for *I cannot believe this jargon.*

**Drift:** New words drift in slowly from the edges as old ones are spent. Words that have been collided enough eventually gray out and drift off screen — their squiggle flat, the word discredited.

## The empty screen

When the last word fades, orphaned squiggles drift alone for a moment — then they find each other, converging into a brief writhing red knot at the center of the screen. A sharp clearing sound. Silence. Two seconds of nothing. Then new words drift in. New day. New meeting. Same jargon.

## Audio

Audio is essential — not decorative. The sonic world:

- **Ambient baseline:** A faint corporate murmur, slightly atonal. The sound of a place where jargon thrives.
- **Squiggle tones:** Each word hums faintly at its squiggle's rhythm. Aggregate density shapes the ambient chord — a crowded screen is vaguely anxious; a sparse one, quieter and cleaner.
- **Tap (translation reveal):** A small dry "ahem." Someone clearing their throat to say something true.
- **Fling/collision:** A dissonant clunk — two confident nothings meeting. Compound jargon births a brief triumphant sting, slightly too pleased with itself.
- **Shake:** Brief chaos, then settling.
- **Word fade:** A small deflating tone. The squiggle sighs out.
- **Empty screen reset:** A crumple or whomp, then silence, then the ambient tone reassembles as words return.

## Aesthetic

Not warm wood like the wunderkammer. Something colder: a Word document gone slightly wrong. Pale cream or slightly yellowed surface — like a memo that's been left in the sun. Words in a confident, slightly-too-large corporate sans-serif. 

The squiggles are the counterpoint: hand-drawn, pencil-sketch in character, organic curves with weight variation. They're the oldest thing on screen and the most honest.

Color of squiggles may drift by age: fresh jargon (*"agentic"*) is vivid, almost angry red. Old jargon (*"synergy"*, coined 1957) has faded to a dusty rose. The squiggle remembers even when the word doesn't.

## What this leaves open

This first turn establishes aesthetic, corpus, and core interaction. It deliberately does not answer:

- Whether squiggles have *relationships* across words — interference, sympathy, resonance (the Quadrivium seam)
- Whether the honest translations accumulate into something — a document, a letter, a resignation
- Whether Dean's other domains enter: medicine, civic life, mathematics, law — each has its own jargon, each deserves its own squiggle
- Whether the squiggle is sometimes *wrong* — flags a genuine word, and you have to decide
- Whether words can be typed in — and immediately assessed
- What lives at the edges of the screen when it's almost empty
- Whether the project eventually turns the red squiggle back on its inventor, in affection

These are seams, not gaps. Invitations.

---

## Collaboration context

This is a creative collaboration between two people who worked together at Microsoft on web browsers and Windows: **rmauceri** and **deanhach** (Dean Hachamovitch).

They are building in the tradition of rmauceri's earlier collaborations: the wunderkammer (a mechanical puppet theater) and Quadrivium (a spatial audio playground) — projects that are part art, part discovery, part conversation conducted in code. Neither collaborator knows exactly what any project will become. They take turns. The work finds its shape in the making.

**Dean Hachamovitch** is the inventor of the red squiggly underline for spell-check in Microsoft Word — one of the most universally recognized UI elements ever made. He holds a mathematics degree from Harvard. He is the mayor of Clydehill, WA. His interests span software, UX, written communication, AI, technology, local politics, medicine, and ideas broadly. He is a precise thinker who believes *writing is thinking* — a conviction that should be evident in how this project handles language.

**rmauceri** has built generative, layered, reactive systems: the wunderkammer's procedural play system and reactive audience; Quadrivium's spatial audio engine. He has a bias toward audio as the element that makes an experience immersive rather than merely visual. He is drawn to architectural rendering and systems that feel *alive*.

**Creative principles:**
- Favor the surprising and original over the polished and expected
- Leave creative seams — don't over-engineer or close off directions the other collaborator might pull on
- The tone is playful on the surface, serious craft underneath
- Both collaborators are technically strong — code can be clever and expressive
- Writing is thinking: concept.md exists before index.html

**Project lineage:** sibling to the wunderkammer and Quadrivium. Different DNA: colder surface, warmer subversion. Where the wunderkammer celebrated theater and the quadrivium celebrated geometry, Errata celebrates the gap between what we say and what we mean — and the small red line that has always known the difference.
