import type { ContentItem, CategoryMeta, MockUser } from '@/types';

export const contentItems: ContentItem[] = [
  {
    id: 'man-always-available',
    type: 'story',
    title: 'The Man Who Was Always Available',
    subtitle: 'He was everyone\'s first call. Until the day he needed someone.',
    description: 'He was everyone\'s first call. Until the day he needed someone.',
    category: 'Human Nature',
    readingTime: '2 min',
    readingTimeSeconds: 120,
    featured: true,
    editorsPick: true,
    thoughtProvoking: true,
    coverGradient: 'linear-gradient(135deg, #0d0d14 0%, #1a1428 50%, #0d0d14 100%)',
    coverEmoji: '🌙',
    tags: ['availability', 'loneliness', 'connection', 'human nature'],
    relatedIds: ['things-we-never-say', 'spotlight-effect', 'last-conversation'],
    afterthought: 'Have you ever been so available to everyone else that you forgot to be available to yourself?',
    publishedAt: '2024-11-01',
    body: `<p>Marcus kept his phone on the nightstand, volume at full, screen facing up. Even at 2 a.m. Even on the night his daughter was born. He told himself it was just who he was — dependable, present, there.</p>

<p>His friends called him first. His colleagues called him first. His neighbours, his distant cousins, the woman three floors down who could never remember her WiFi password — they all called Marcus first. And Marcus always answered. He answered because it felt good to be needed. Because somewhere in the answering was a version of himself he recognised and approved of.</p>

<p>He kept a mental list, though he never wrote it down. Sarah — called in a panic about the job interview. Called Marcus. The couple next door — their cat had gone missing at midnight. Called Marcus. His old university roommate, now living in Amsterdam — called at 7 a.m. on a Tuesday just to talk because he was lonely and knew Marcus would pick up.</p>

<p>The night Marcus's father died, he sat alone in the hospital corridor for four hours. His fingers moved over his contact list three times. He stopped each time before the call connected. He had no language for this — asking. It wasn't that people wouldn't come. He simply didn't know how to be on the other side of the phone call. He had spent so long being the person who answered that he had forgotten he was also a person who sometimes needed someone to pick up.</p>

<p>The corridor stayed empty. Outside, the city went on. His phone, for the first time in years, stayed silent. And Marcus sat with the strange, clarifying loneliness of a man who had given everything and never once thought to keep something for himself.</p>`,
  },
  {
    id: 'spotlight-effect',
    type: 'concept',
    title: 'The Spotlight Effect',
    subtitle: 'Why you think everyone notices your mistakes.',
    description: 'Why you think everyone notices your mistakes — and why they almost never do.',
    category: 'Psychology',
    readingTime: '45 sec',
    readingTimeSeconds: 45,
    editorsPick: true,
    coverGradient: 'linear-gradient(135deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%)',
    coverEmoji: '🔦',
    tags: ['self-consciousness', 'perception', 'social anxiety', 'psychology'],
    relatedIds: ['man-always-available', 'ship-of-theseus', 'things-we-never-say'],
    afterthought: 'Have you ever avoided something you wanted because you were afraid of being judged?',
    publishedAt: '2024-10-28',
    body: `<p>You spill coffee on your shirt before an important meeting. For the rest of the day, you are acutely aware of the stain. You assume everyone who looks at you notices it, thinks about it, perhaps even judges you for it. You feel a low hum of embarrassment all day long.</p>

<p>They didn't notice. Almost certainly, they didn't. This is the Spotlight Effect — the persistent, deeply human tendency to believe we are under far more scrutiny than we actually are. Psychologists Thomas Gilovich and Kenneth Savitsky named it in 2000 after a simple experiment: they asked people to walk into a room wearing an embarrassing T-shirt. Subjects estimated that about half the room noticed. The real number? Closer to twenty percent.</p>

<p>The reason is a cognitive quirk called anchoring. You experience your own life from the inside — your mistakes feel enormous to you because they are enormous to you. But everyone else is the centre of their own world too. They are anchored to their own anxieties, their own mental chatter, their own version of the coffee stain. They simply do not have the bandwidth to watch you as closely as you watch yourself.</p>

<blockquote>The audience in your head is almost always larger than the audience in the room.</blockquote>

<p>Understanding the Spotlight Effect doesn't make it disappear. But it does offer something quietly useful: a small permission to take up space. To try things. To fail in public without the catastrophe your mind has pre-written. Most people are too busy managing their own spotlight to notice yours.</p>`,
  },
  {
    id: 'unopened-letter',
    type: 'story',
    title: 'The Unopened Letter',
    subtitle: 'Some things are never said. Some things are never forgotten.',
    description: 'Some things are never said. Some things are never forgotten.',
    category: 'Short Stories',
    readingTime: '2 min',
    readingTimeSeconds: 110,
    thoughtProvoking: true,
    coverGradient: 'linear-gradient(135deg, #1a0f0a 0%, #2d1e14 50%, #1a0f0a 100%)',
    coverEmoji: '✉️',
    tags: ['regret', 'love', 'silence', 'grief'],
    relatedIds: ['things-we-never-say', 'man-always-available', 'last-conversation'],
    afterthought: 'Is there something you have been meaning to say to someone — and have been waiting for the right moment?',
    publishedAt: '2024-10-15',
    body: `<p>When Elena's grandmother died, she left behind, among the usual objects of a long life, a drawer she had never opened in front of anyone. Inside: forty-three letters, each one sealed. Each one addressed to someone in her life. And each one, clearly, never sent.</p>

<p>Elena recognised the handwriting immediately — her grandmother's careful, slanting cursive, the kind they don't teach anymore. The envelopes were old but intact, some yellowed at the edges, others still holding that faint dusty smell of a room kept closed too long.</p>

<p>There was one for her grandfather, who had died before Elena was born. One for a woman Elena had never heard of — just a first name, Anna, and a city she had never visited. There was one addressed to her mother. And at the very back of the drawer, tucked beneath the others as if it had been placed there deliberately, one addressed to Elena herself.</p>

<p>She held them all for a long time. She didn't open any of them. She thought she understood what they were — the conversations her grandmother had spent a lifetime composing and never found the courage to have. The apologies, the declarations, the clarifications that all felt urgent and then felt too late and then, one day, became something else entirely: objects.</p>

<p>Elena put the letters back in the drawer. She kept the drawer. She carried it with her when she moved. Sometimes she thinks about what her grandmother was trying to say. More often, she thinks about what she herself hasn't said yet, and whether she is building a drawer of her own.</p>`,
  },
  {
    id: 'ship-of-theseus',
    type: 'concept',
    title: 'The Ship of Theseus',
    subtitle: 'If everything about you changes, are you still the same person?',
    description: 'If every plank is replaced, is it still the same ship? And what does that mean for you?',
    category: 'Philosophy',
    readingTime: '1 min',
    readingTimeSeconds: 65,
    editorsPick: true,
    thoughtProvoking: true,
    coverGradient: 'linear-gradient(135deg, #0a1a14 0%, #0f2820 50%, #0a1a14 100%)',
    coverEmoji: '⚓',
    tags: ['identity', 'change', 'self', 'philosophy of mind'],
    relatedIds: ['spotlight-effect', 'man-never-said-no', 'life-lived-monday'],
    afterthought: 'Which part of you has stayed constant through all the changes?',
    publishedAt: '2024-10-10',
    body: `<p>The ancient Athenians preserved the ship that Theseus sailed on his legendary voyage for centuries. As the wood rotted, they replaced each plank. As the sails wore thin, they replaced those too. Eventually, there was not a single original piece of material left in the vessel. And yet, the city called it the Ship of Theseus.</p>

<p>The philosopher Heraclitus had already noticed the problem: you cannot step into the same river twice, because new water is always flowing. Thomas Hobbes pushed the puzzle further — if someone collected all the original planks and rebuilt the original ship, which one would be the real Ship of Theseus?</p>

<p>The question isn't really about ships. It's about you. Your body replaces most of its cells over a period of years. Your beliefs, your values, your personality — these shift gradually and sometimes dramatically over a lifetime. The person you were at seventeen holds your name but perhaps not your convictions, your taste, or your fears. Are you still that person? Are you continuous with them, or is there a subtler kind of replacement happening?</p>

<blockquote>Identity might be less like a thing we possess and more like a story we tell — with an unreliable narrator.</blockquote>

<p>There is no clean philosophical resolution to this. But the puzzle leaves behind something genuinely useful: a loosening of the grip you might have on a fixed idea of who you are. If identity is more fluid than we imagine, then change isn't a betrayal of the self. It might just be what the self actually is.</p>`,
  },
  {
    id: 'man-never-said-no',
    type: 'story',
    title: 'The Man Who Never Said No',
    subtitle: 'He agreed to everything. And slowly disappeared.',
    description: 'He agreed to everything. And slowly, quietly, he disappeared.',
    category: 'Short Stories',
    readingTime: '2 min',
    readingTimeSeconds: 130,
    coverGradient: 'linear-gradient(135deg, #140f0a 0%, #261e14 50%, #140f0a 100%)',
    coverEmoji: '🌿',
    tags: ['boundaries', 'identity', 'people-pleasing', 'self-loss'],
    relatedIds: ['man-always-available', 'things-we-never-say', 'spotlight-effect'],
    afterthought: 'What is one thing you have agreed to that you should have questioned?',
    publishedAt: '2024-10-05',
    body: `<p>His name was David, and he had a gift. The gift was this: he could read a room faster than anyone alive, and in every room, he became whatever the room needed him to be. Enthusiastic when enthusiasm was called for. Calm when others were spiralling. Funny, serious, supportive, agreeable — always agreeable — in whatever measure the moment required.</p>

<p>People loved David for this. He was described, repeatedly, as "easy to be around." His friends thought of him as reliable. His colleagues found him pleasant. His family considered him uncomplicated. And all of this was true. He was easy. He was reliable. He was pleasant. He was uncomplicated.</p>

<p>What nobody saw was the accumulation. Every small yes that wasn't quite a yes. Every preference he swallowed. Every opinion he softened into something agreeable before it reached his mouth. Every project he took on that bored him, every plan he endorsed that he found hollow, every relationship he maintained out of a habit of accommodation rather than genuine feeling.</p>

<p>At thirty-eight, David sat in his apartment one evening trying to remember the last time he had wanted something — specifically, clearly, without first calculating how it would land with the people around him. He could not remember. The wanting had been so consistently rerouted that it had, eventually, stopped arriving. He wasn't depressed, exactly. He was something harder to name: absent. Present in the room, absent in himself.</p>

<p>He ordered pizza that night — his actual choice, not the choice he thought someone nearby might prefer. It was, he noticed, a small and slightly absurd act of recovery. He sat with it. It was a beginning.</p>`,
  },
  {
    id: 'last-conversation',
    type: 'story',
    title: 'The Last Conversation',
    subtitle: 'They talked for three hours. Neither said what they meant.',
    description: 'They talked for three hours. Neither said what they meant.',
    category: 'Short Stories',
    readingTime: '2 min',
    readingTimeSeconds: 115,
    thoughtProvoking: true,
    coverGradient: 'linear-gradient(135deg, #0a0f1a 0%, #121828 50%, #0a0f1a 100%)',
    coverEmoji: '🌧️',
    tags: ['communication', 'relationships', 'loss', 'regret'],
    relatedIds: ['unopened-letter', 'things-we-never-say', 'man-always-available'],
    afterthought: 'Is there a conversation you have been postponing that matters more than you admit?',
    publishedAt: '2024-09-20',
    body: `<p>The last time Priya and her mother sat in the same room, they talked about the weather in a city neither of them lived in anymore. They talked about a television show one of them had seen and the other hadn't. They talked about a mutual acquaintance's daughter who had recently married. They sat across from each other for three hours in a kitchen that smelled of cardamom and old wood, and they were extraordinarily careful.</p>

<p>What they did not talk about was the year of silence that had preceded this meeting. The argument — if you could call it that — had been less an event and more an erosion. Things unsaid that accumulated weight. Decisions made without consultation. A feeling, on both sides, of not being quite seen. The silence had grown between them slowly, the way water damage spreads behind walls.</p>

<p>At the door, her mother held Priya's face in both hands and said, "You look tired." It was the most direct thing either of them had said all day. What it meant — what both of them knew it meant — was: I see you. I'm sorry. I miss you. Come back.</p>

<p>Priya drove home and sat in the car outside her building for twenty minutes. She thought about calling. She thought about what she would say if she did. She rehearsed three different versions of a sentence that started with "I know we don't talk about this, but—"</p>

<p>She went inside. She made tea. She put the sentence away for another day. It is still there, waiting.</p>`,
  },
  {
    id: 'stranger-who-remembered',
    type: 'story',
    title: 'The Stranger Who Remembered',
    subtitle: 'He had forgotten who he was. She hadn\'t.',
    description: 'He had forgotten who he was. She hadn\'t forgotten a thing.',
    category: 'Short Stories',
    readingTime: '2 min',
    readingTimeSeconds: 105,
    coverGradient: 'linear-gradient(135deg, #0f140a 0%, #1e2814 50%, #0f140a 100%)',
    coverEmoji: '🌱',
    tags: ['memory', 'identity', 'kindness', 'connection'],
    relatedIds: ['ship-of-theseus', 'unopened-letter', 'life-lived-monday'],
    afterthought: 'Who do you know who sees you more clearly than you see yourself?',
    publishedAt: '2024-09-10',
    body: `<p>James had been in the city for eleven months when he ran into a woman at the market who called him by a name he used to go by. Not his legal name — a name that belonged to a different chapter, a version of him that felt distant now, like reading a letter written by a stranger who happened to know all your secrets.</p>

<p>She was someone he had known briefly, years ago, in a different city, in a different life. They had been in the same writing group for about a semester. He had forgotten her entirely. She, apparently, had not forgotten him at all.</p>

<p>"You wrote that piece about your grandfather's hands," she said, as if they had just seen each other last week. "I still think about it. I think about it whenever I look at old photographs."</p>

<p>James stood there in the vegetable aisle with a bag of onions and tried to remember the piece. He couldn't. He remembered writing a lot during that period — urgently, compulsively, as if the words would hold something in place that was threatening to dissolve. But the specific piece, the grandfather, the hands — it was gone from him.</p>

<p>She carried it, though. She had carried it for years, across cities and seasons and lives. It sat in her somewhere — that thing he had made and then lost — still doing whatever it had always done. He walked home slowly, thinking about the strange afterlife of things you create and release. About how you never quite know what you leave behind in people. About how sometimes the person you were is preserved most clearly not in yourself, but in someone you've almost completely forgotten.</p>`,
  },
  {
    id: 'life-lived-monday',
    type: 'story',
    title: 'A Life Lived on Monday',
    subtitle: 'He was always preparing to begin.',
    description: 'He was always preparing to begin. He was always waiting for Monday.',
    category: 'Short Stories',
    readingTime: '2 min',
    readingTimeSeconds: 125,
    thoughtProvoking: true,
    coverGradient: 'linear-gradient(135deg, #1a1014 0%, #2d1e24 50%, #1a1014 100%)',
    coverEmoji: '🗓️',
    tags: ['procrastination', 'time', 'regret', 'living'],
    relatedIds: ['ship-of-theseus', 'man-never-said-no', 'things-we-never-say'],
    afterthought: 'What have you been saving for Monday that you could begin today?',
    publishedAt: '2024-09-01',
    body: `<p>The novel would begin on Monday. The diet would begin on Monday. The early mornings, the Spanish lessons, the call to his estranged brother, the letters he meant to write, the apology he had been composing in his head since 2019 — all of it would begin on Monday.</p>

<p>Tom was forty-four. He had been beginning things on Monday since he was nineteen. The intervals between Mondays had filled up — with work, with reasonable busyness, with the particular kind of exhaustion that isn't tiredness but is something closer to drift. His weekdays were full. His weekends were rest. And Monday was always just far enough away to remain a horizon.</p>

<p>The interesting thing was that Tom didn't consider himself a procrastinator. He considered himself a man with standards. He wanted to do things properly, completely, with energy and attention. Monday, he had decided somewhere along the way, was the day he would have all three.</p>

<p>When his daughter was born, he noticed that she had no concept of Monday. She wanted things when she wanted them. She was hungry now. She was curious now. She reached for things now, with a total absence of scheduling, with no apparent interest in beginning anything at the right moment.</p>

<p>He watched her reach for a cup she couldn't hold yet and knock it over, and try again. He thought about the novel. He thought about the Spanish. He thought about his brother's number, still saved in his phone under "James (call him)." He picked up the phone. He didn't wait for Monday. He had, he was slowly realising, already spent too many Mondays waiting for himself to be ready.</p>`,
  },
  {
    id: 'things-we-never-say',
    type: 'story',
    title: 'The Things We Never Say',
    subtitle: 'The longest distances are between people in the same room.',
    description: 'The longest distances are not between cities. They are between people in the same room.',
    category: 'Relationships',
    readingTime: '2 min',
    readingTimeSeconds: 118,
    thoughtProvoking: true,
    coverGradient: 'linear-gradient(135deg, #14100a 0%, #281e14 50%, #14100a 100%)',
    coverEmoji: '🕯️',
    tags: ['silence', 'relationships', 'communication', 'intimacy'],
    relatedIds: ['last-conversation', 'unopened-letter', 'man-always-available'],
    afterthought: 'What is one thing you have been meaning to say to someone close to you — and what are you waiting for?',
    publishedAt: '2024-08-25',
    body: `<p>The couple had been together for sixteen years. In sixteen years, they had said perhaps everything that was easy to say and had, by now, developed an elaborate and largely unconscious system for not saying anything that wasn't. They were not unhappy. They were careful with each other. There is a version of love that looks like consideration and functions like silence.</p>

<p>She had not told him that she missed who they were at the beginning — not because she wanted to go back, but because there was something about that version of them she wanted him to know still existed somewhere in her. He had not told her that he was often frightened. Not of anything specific. Just frightened, the way some people carry a low background hum of dread that never completely resolves.</p>

<p>They had stopped telling each other these things not out of indifference but out of a kind of accumulated restraint — a belief, unexamined, that some things were too fragile to put into words. That saying them would change them. That the distance between thought and speech contained a protection they were not willing to give up.</p>

<p>What neither of them fully understood was that the other person was doing the same thing. That they were both standing at the edge of the same conversation, waiting for the other to begin. And that every year of not beginning made the beginning feel more impossible.</p>

<p>Some evenings they sat on the same sofa and watched the same screen and were, in every measurable way, together. And the things they hadn't said accumulated quietly around them — not like debris, but like furniture they had both agreed, without speaking, to rearrange around.</p>`,
  },
  {
    id: 'cognitive-dissonance',
    type: 'concept',
    title: 'Cognitive Dissonance',
    subtitle: 'Why we work so hard to believe our own contradictions.',
    description: 'The mental discomfort of holding two opposing beliefs — and the elaborate ways we resolve it.',
    category: 'Psychology',
    readingTime: '1 min',
    readingTimeSeconds: 70,
    editorsPick: true,
    coverGradient: 'linear-gradient(135deg, #0a1428 0%, #0f1e3c 50%, #0a1428 100%)',
    coverEmoji: '🧩',
    tags: ['psychology', 'belief', 'rationalization', 'self-deception'],
    relatedIds: ['spotlight-effect', 'sunk-cost', 'dunning-kruger'],
    afterthought: 'What belief do you hold that you suspect might be protecting you from something uncomfortable?',
    publishedAt: '2024-08-15',
    body: `<p>In 1957, Leon Festinger published a theory that would become one of psychology's most influential ideas. He called it cognitive dissonance — the mental discomfort that arises when a person holds two contradictory beliefs simultaneously, or when their actions conflict with their beliefs.</p>

<p>The feeling is real and uncomfortable, like a low-grade psychological toothache. And the remarkable thing — the thing that makes this theory so useful for understanding human behaviour — is what people do to make it stop.</p>

<p>They rarely change their behaviour. Instead, they change how they think about it. The smoker who knows smoking is harmful doesn't typically quit. They find reasons to discount the risk. They point to elderly smokers they know. They tell themselves the pleasure outweighs the cost. They construct, carefully and often unconsciously, a narrative that makes the contradiction livable.</p>

<blockquote>We are not primarily rational creatures who sometimes feel things. We are feeling creatures who sometimes rationalise.</blockquote>

<p>Cognitive dissonance operates everywhere. In politics, in relationships, in self-image. The moment you notice you are working unusually hard to justify something, that effort itself is a signal worth examining. The elaborate story you are building — about why you are right, why the choice was wise, why the other person is worse — may be less about the truth and more about managing the discomfort of a truth you haven't quite faced yet.</p>`,
  },
  {
    id: 'sunk-cost',
    type: 'concept',
    title: 'The Sunk Cost Fallacy',
    subtitle: 'Why we stay too long in the wrong rooms.',
    description: 'The painful human habit of continuing something bad because we\'ve already invested in it.',
    category: 'Psychology',
    readingTime: '1 min',
    readingTimeSeconds: 60,
    coverGradient: 'linear-gradient(135deg, #1a0a14 0%, #2d1428 50%, #1a0a14 100%)',
    coverEmoji: '⏳',
    tags: ['decision-making', 'loss aversion', 'economics', 'psychology'],
    relatedIds: ['cognitive-dissonance', 'spotlight-effect', 'dunning-kruger'],
    afterthought: 'What are you continuing not because it is good, but because stopping would mean admitting the cost?',
    publishedAt: '2024-08-05',
    body: `<p>You are twenty minutes into a film you hate. You are thinking about leaving — but you bought the ticket. You have already sat through twenty minutes. You decide to stay.</p>

<p>This is the sunk cost fallacy in its most benign form. In its more serious forms, it keeps people in relationships that have stopped working, careers that have stopped fitting, and cities they have long outgrown — all because they have already invested so much that leaving feels like a greater loss than staying.</p>

<p>Economists call it "sunk cost" because the money (or time, or effort) is already spent — it cannot be recovered regardless of what you do next. The rational choice, therefore, is to evaluate the future entirely on its own merits. What will make tomorrow better? Not: what did yesterday cost?</p>

<p>But rationality is a relatively thin layer over a deep substrate of feeling. And the feeling of loss is extraordinarily powerful. Research by Daniel Kahneman and Amos Tversky showed that losses feel roughly twice as painful as equivalent gains feel pleasant. We are, structurally, more motivated to avoid losing something we have than to gain something we want.</p>

<blockquote>The best time to leave a bad situation is not when the cost has been minimised. It is now — before the cost grows further.</blockquote>

<p>Recognising the fallacy doesn't make it easy to escape. But it offers a useful reframe: the question is never "how much have I given this?" The question is always "is this worth giving more?"</p>`,
  },
  {
    id: 'dunning-kruger',
    type: 'concept',
    title: 'The Dunning-Kruger Effect',
    subtitle: 'Why the least skilled are often the most confident.',
    description: 'The counterintuitive psychology of confidence and competence.',
    category: 'Psychology',
    readingTime: '1 min',
    readingTimeSeconds: 55,
    coverGradient: 'linear-gradient(135deg, #101a0a 0%, #182814 50%, #101a0a 100%)',
    coverEmoji: '🧠',
    tags: ['confidence', 'metacognition', 'expertise', 'psychology'],
    relatedIds: ['cognitive-dissonance', 'spotlight-effect', 'stoicism-daily'],
    afterthought: 'In which area of your life might you be more confident than your knowledge warrants?',
    publishedAt: '2024-07-20',
    body: `<p>In 1999, David Dunning and Justin Kruger published a paper that has since become a cornerstone of popular psychology. Their study showed something counterintuitive: people who performed poorly on tests of logic, grammar, and humour consistently overestimated their own performance. The less they knew, the more confident they were.</p>

<p>The explanation lies in a painful paradox: the skills required to be good at something are often the same skills required to know when you're bad at it. If you lack expertise in a domain, you also lack the tools to evaluate your own gaps. You don't know what you don't know — and from the inside, that ignorance feels like knowledge.</p>

<p>The flip side is equally interesting. Genuine experts tend to underestimate their competence. They are so acutely aware of the complexity of their field, so attuned to the gaps in their own understanding, that they often assume others find it equally manageable.</p>

<blockquote>The valley of false confidence comes before the mountain of actual knowledge. Most people stop at the valley and mistake it for a peak.</blockquote>

<p>The antidote is not self-doubt — it is intellectual humility. Remaining genuinely curious about what you might be missing. Seeking feedback from people who have no incentive to flatter you. Building a practice of asking: not "am I right?" but "what would change my mind?"</p>`,
  },
  {
    id: 'stoicism-daily',
    type: 'concept',
    title: 'Memento Mori',
    subtitle: 'The Stoic practice of remembering you will die.',
    description: 'The ancient practice of contemplating mortality — not to depress, but to clarify.',
    category: 'Philosophy',
    readingTime: '1 min',
    readingTimeSeconds: 65,
    thoughtProvoking: true,
    editorsPick: true,
    coverGradient: 'linear-gradient(135deg, #0f0f0a 0%, #1e1e14 50%, #0f0f0a 100%)',
    coverEmoji: '🕰️',
    tags: ['stoicism', 'mortality', 'presence', 'philosophy'],
    relatedIds: ['ship-of-theseus', 'dunning-kruger', 'paradox-of-choice'],
    afterthought: 'If you knew you had one year left, what would you stop doing? What would you start?',
    publishedAt: '2024-07-10',
    body: `<p>The Roman Emperor Marcus Aurelius kept a note to himself that read, in essence: you are mortal. He wrote it not to despair but to focus. The Stoics called this practice Memento Mori — remember that you will die. And they considered it not morbid but clarifying.</p>

<p>The logic is elegant. If your time is finite — and it is — then everything you spend time on is a choice about what matters most. The Stoics used the awareness of mortality as a filter. When facing a decision, they would ask: does this matter in light of the whole of a life? Does this frustration, this small humiliation, this afternoon's anxious planning — does any of it survive contact with the larger fact of finitude?</p>

<p>Steve Jobs, who had read the Stoics, said in his Stanford commencement address: "Remembering that I'll be dead soon is the most important tool I've ever encountered to help me make the big choices in life." He was not speaking from despair. He was speaking from clarity.</p>

<blockquote>The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time. — Mark Twain</blockquote>

<p>Memento Mori is not a practice of sadness. It is a practice of attention. It asks you to live as if the present moment is not a waiting room for real life to begin. Because it isn't. This — the unremarkable Tuesday, the ordinary coffee, the face of the person across the table — this is the life. This is what there is.</p>`,
  },
  {
    id: 'paradox-of-choice',
    type: 'concept',
    title: 'The Paradox of Choice',
    subtitle: 'Why more options make us less happy.',
    description: 'Having unlimited options sounds ideal. It turns out to be quietly exhausting.',
    category: 'Psychology',
    readingTime: '1 min',
    readingTimeSeconds: 60,
    coverGradient: 'linear-gradient(135deg, #0a1428 0%, #14203c 50%, #0a1428 100%)',
    coverEmoji: '🌀',
    tags: ['decision fatigue', 'choice', 'happiness', 'psychology'],
    relatedIds: ['sunk-cost', 'dunning-kruger', 'cognitive-dissonance'],
    afterthought: 'Where in your life might having fewer options actually make you happier?',
    publishedAt: '2024-06-28',
    body: `<p>In 2000, psychologist Barry Schwartz walked into a jeans shop and was asked what kind he wanted. He listed a few preferences. The salesperson offered him slim fit, easy fit, relaxed fit, baggy, extra baggy, button fly, zip fly, stonewashed, acid-washed, in every waist and length combination. He left with jeans. He also left feeling worse than when he arrived.</p>

<p>This became the foundation of his landmark book, "The Paradox of Choice." His central argument: beyond a certain point, more choice is not liberating — it is paralysing. It increases decision fatigue, creates anxiety about making the wrong choice, and primes us for regret even when our choice is good.</p>

<p>When you have one option, you either take it or you don't. When you have fifty options and you choose one, you are inevitably aware of the forty-nine you didn't choose. You wonder whether one of them would have been better. This is the opportunity cost made vivid and constant. We call it FOMO. The Stoics called it desire. Either way, it is exhausting.</p>

<blockquote>The secret to happiness is low expectations. — Barry Schwartz</blockquote>

<p>Schwartz's recommendation was deliberately counterintuitive: embrace constraints. Become, in his taxonomy, a "satisficer" rather than a "maximiser" — someone who aims for good enough rather than the optimal. The maximiser gets better outcomes on paper and feels worse about them. The satisficer finds sufficiency and, with it, something that looks a great deal like contentment.</p>`,
  },
  {
    id: 'impermanence',
    type: 'concept',
    title: 'The Beauty of Impermanence',
    subtitle: 'What Japanese philosophy teaches us about letting go.',
    description: 'Mono no aware — the Japanese concept of finding beauty in what does not last.',
    category: 'Philosophy',
    readingTime: '1 min',
    readingTimeSeconds: 65,
    coverGradient: 'linear-gradient(135deg, #1a0a0a 0%, #2d1414 50%, #1a0a0a 100%)',
    coverEmoji: '🌸',
    tags: ['impermanence', 'wabi-sabi', 'Japanese philosophy', 'beauty'],
    relatedIds: ['stoicism-daily', 'ship-of-theseus', 'memento-mori'],
    afterthought: 'What in your life have you been struggling to hold onto that might be more beautiful if you let go?',
    publishedAt: '2024-06-15',
    body: `<p>In Japan, the annual viewing of cherry blossoms — hanami — is a national event of genuine cultural significance. People plan trips around it. They sit beneath the flowering trees for hours, eating and talking and watching the petals fall. What is striking is not just the beauty of the blossoms, but the deliberate awareness that they will be gone within days.</p>

<p>The Japanese concept that captures this is mono no aware — often translated as "the pathos of things" or "an empathy toward things." It describes a bittersweet sensitivity to impermanence. The blossoms are beautiful. The blossoms will fall. These two facts are not in tension — they are inseparable. The falling is part of what makes the blooming matter.</p>

<p>Related to this is wabi-sabi — the aesthetic of imperfection and transience. Where Western aesthetics often prize symmetry, permanence, and flawlessness, wabi-sabi finds value in the cracked bowl, the asymmetric pot, the garden that shows its age. These imperfections are not defects. They are where life has left its mark.</p>

<blockquote>In the West, we build things to last. In Japan, the most sacred shrine at Ise is rebuilt every twenty years — identically — so that the act of building is never lost.</blockquote>

<p>What these ideas offer, taken together, is a reorientation of value. If nothing lasts, then permanence is not the measure of worth. What matters is presence — the quality of attention brought to the thing while it exists. The cherry blossoms teach this every spring. They are very patient teachers.</p>`,
  },
  {
    id: 'attachment-theory',
    type: 'concept',
    title: 'Attachment Theory',
    subtitle: 'How the first relationships you had still shape the ones you have now.',
    description: 'The patterns formed in earliest childhood quietly govern how we love as adults.',
    category: 'Relationships',
    readingTime: '2 min',
    readingTimeSeconds: 90,
    editorsPick: true,
    coverGradient: 'linear-gradient(135deg, #0a1428 0%, #0f2040 50%, #0a1428 100%)',
    coverEmoji: '🫂',
    tags: ['attachment', 'childhood', 'relationships', 'psychology'],
    relatedIds: ['things-we-never-say', 'last-conversation', 'cognitive-dissonance'],
    afterthought: 'Which pattern from your early relationships do you recognise most clearly in your adult life?',
    publishedAt: '2024-06-01',
    body: `<p>John Bowlby was a British psychoanalyst who spent his career watching children. What he noticed, in the 1950s and 60s, was something that seems obvious in retrospect but was, at the time, genuinely revelatory: children form specific emotional bonds with their caregivers, and when those bonds are disrupted, children suffer in predictable and lasting ways.</p>

<p>He called this attachment theory. His colleague Mary Ainsworth later developed a famous experiment — the Strange Situation — in which young children were briefly separated from their mothers in an unfamiliar room. The way they responded revealed patterns. Some children were secure — distressed by the separation, easily comforted on reunion. Others were anxious-ambivalent — inconsolable, difficult to settle even when the parent returned. Others were avoidant — appearing not to care at all, suppressing the distress inward.</p>

<p>What made this research genuinely consequential was what came next: the discovery that these early patterns tend to persist. Children who develop secure attachment typically grow into adults who find closeness relatively natural, who can tolerate temporary distance in relationships without catastrophising. The anxious-ambivalent child often becomes the adult who needs constant reassurance and fears abandonment. The avoidant child becomes the adult who values independence to the point of emotional unavailability.</p>

<blockquote>We don't fall in love. We fall into the attachment patterns we learned before we had words for them.</blockquote>

<p>None of this is deterministic. Attachment styles can shift with therapy, with self-awareness, with relationships that offer a corrective experience. But the first step, as with most things in human psychology, is recognition. The pattern has a name. It is not you — it is something you learned. And things that are learned can, with patience, be relearned.</p>`,
  },
  {
    id: 'flow-state',
    type: 'concept',
    title: 'Flow State',
    subtitle: 'The psychology of being completely absorbed in what you do.',
    description: 'What happens in the brain when time disappears and everything else falls away.',
    category: 'Science',
    readingTime: '1 min',
    readingTimeSeconds: 70,
    coverGradient: 'linear-gradient(135deg, #0a1a0a 0%, #142814 50%, #0a1a0a 100%)',
    coverEmoji: '🌊',
    tags: ['flow', 'focus', 'creativity', 'neuroscience'],
    relatedIds: ['paradox-of-choice', 'dunning-kruger', 'stoicism-daily'],
    afterthought: 'When did you last lose track of time completely? What were you doing?',
    publishedAt: '2024-05-20',
    body: `<p>Mihaly Csikszentmihalyi spent decades studying happiness and arrived at a counterintuitive conclusion: people are happiest not when they are relaxing, but when they are deeply engaged in a challenging task that stretches their abilities. He called this state flow — and described it as a feeling of complete absorption, effortless concentration, and time distortion.</p>

<p>Athletes call it "being in the zone." Musicians call it being "inside the music." Writers describe it as the moment the story starts to write itself. In every case, the experience is remarkably consistent: a sense of control without effort, a disappearance of self-consciousness, a feeling that the activity and the actor have merged into something unified.</p>

<p>Neurologically, flow involves a process called transient hypofrontality — a temporary decrease in activity in the prefrontal cortex, the part of the brain associated with self-monitoring, planning, and self-criticism. When this quietens, the inner critic quietens with it. The gap between intention and execution collapses. This is why things done in flow often come out better than things done with anxious deliberation.</p>

<blockquote>The best moments usually occur when a person's body or mind is stretched to its limits in a voluntary effort to accomplish something difficult and worthwhile.</blockquote>

<p>Flow requires a specific balance: a task that is neither too easy (which produces boredom) nor too hard (which produces anxiety). It requires clear goals and immediate feedback. And it requires, above all, undivided attention — which is precisely what modern life is most systematically designed to destroy.</p>`,
  },
];

export const categories: CategoryMeta[] = [
  { name: 'Psychology', emoji: '🧠', description: 'How the mind works', count: 6, gradient: 'linear-gradient(135deg, #0a1428, #0f1e3c)' },
  { name: 'Human Nature', emoji: '🫀', description: 'What we share', count: 2, gradient: 'linear-gradient(135deg, #1a0d14, #2d1428)' },
  { name: 'Philosophy', emoji: '⚗️', description: 'The big questions', count: 3, gradient: 'linear-gradient(135deg, #0a1a0a, #142814)' },
  { name: 'Short Stories', emoji: '📖', description: 'Fiction that lingers', count: 5, gradient: 'linear-gradient(135deg, #1a0f0a, #2d1e14)' },
  { name: 'Relationships', emoji: '🫂', description: 'How we connect', count: 2, gradient: 'linear-gradient(135deg, #0f140a, #1e2814)' },
  { name: 'Books & Ideas', emoji: '📚', description: 'Ideas worth keeping', count: 2, gradient: 'linear-gradient(135deg, #14100a, #281e14)' },
  { name: 'Science', emoji: '🔬', description: 'Understanding the world', count: 1, gradient: 'linear-gradient(135deg, #0a1a14, #0f2820)' },
  { name: 'Life & Existence', emoji: '🌿', description: 'Being alive', count: 2, gradient: 'linear-gradient(135deg, #0f0f0a, #1e1e14)' },
];

export const trendingTopics = [
  'Identity', 'Solitude', 'Regret', 'Memory', 'Connection',
  'Silence', 'Mortality', 'Belonging', 'Time', 'Loss',
  'Self-deception', 'Courage', 'Impermanence'
];

export const mockUser: MockUser = {
  id: 'user-1',
  name: 'Abhishek',
  initials: 'A',
  bio: 'Reading slowly. Thinking carefully.',
  readingStreak: 7,
  totalRead: 23,
  savedCount: 4,
  favCategories: ['Psychology', 'Philosophy', 'Short Stories'],
  recentlyReadIds: ['man-always-available', 'spotlight-effect', 'ship-of-theseus', 'unopened-letter'],
  joinedDate: '2024-09-01',
  readingGoal: 5,
};

export const thoughtOfTheDay =
  'Perhaps the most interesting thing about people is how much of their lives happens silently, inside their heads.';

export function getContentById(id: string): ContentItem | undefined {
  return contentItems.find((item) => item.id === id);
}

export function getRelatedContent(item: ContentItem): ContentItem[] {
  return item.relatedIds
    .map((id) => contentItems.find((c) => c.id === id))
    .filter((c): c is ContentItem => !!c)
    .slice(0, 3);
}

export function getRandomContent(): ContentItem {
  return contentItems[Math.floor(Math.random() * contentItems.length)];
}

export function searchContent(query: string, category?: string): ContentItem[] {
  const q = query.toLowerCase().trim();
  return contentItems.filter((item) => {
    const matchesQuery =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.tags.some((t) => t.toLowerCase().includes(q)) ||
      item.category.toLowerCase().includes(q);
    const matchesCategory = !category || category === 'All' || item.category === category;
    return matchesQuery && matchesCategory;
  });
}

export function getStoriesByTheme(theme: string): ContentItem[] {
  const themeMap: Record<string, string[]> = {
    'Latest': contentItems.filter(i => i.type === 'story').slice(0, 4).map(i => i.id),
    'Most Thought-Provoking': contentItems.filter(i => i.thoughtProvoking).map(i => i.id),
    'Human Relationships': ['things-we-never-say', 'last-conversation', 'man-always-available', 'attachment-theory'],
    'Loneliness & Belonging': ['man-always-available', 'man-never-said-no', 'stranger-who-remembered'],
    'Regret & Nostalgia': ['life-lived-monday', 'unopened-letter', 'last-conversation'],
    'Unexpected Endings': ['stranger-who-remembered', 'man-never-said-no', 'life-lived-monday'],
  };
  const ids = themeMap[theme] || [];
  return ids.map(id => contentItems.find(c => c.id === id)).filter((c): c is ContentItem => !!c);
}
