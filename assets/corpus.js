// ================================================================
// === ERRATA CORPUS ===
// The canonical list of jargon under suspicion.
// To add words: append an entry to this array.
// Fields:
//   word       — the floating word (string)
//   type       — noun / verb / adjective / phrase
//   definition — the honest translation, shown on tap
// ================================================================

const CORPUS = [
  { word: "agentic",          type: "adjective", definition: "What we call AI when it does stuff on its own and we're too excited to ask if we should let it." },
  { word: "vibe-coding",      type: "phrase",    definition: "Programming technique where you describe what you want to an AI, cross your fingers, and ship it without reading the output." },
  { word: "context window",   type: "noun",      definition: "The AI's short-term memory, which you will absolutely exceed right when things were getting good." },
  { word: "hallucinate",      type: "verb",      definition: "What an AI does when it confidently tells you Abraham Lincoln invented the internet. It's not lying. It's expressing." },
  { word: "prompt engineer",  type: "noun",      definition: "A person whose entire job is talking to a chatbot correctly. Yes, this is on their LinkedIn." },
  { word: "ship",             type: "verb",      definition: "To release software before it's ready, ideally on a Friday afternoon, ideally before a holiday weekend." },
  { word: "10x",              type: "adjective", definition: "A mythological multiplier applied to developers who write twice as much code as everyone else and call the cleanup 'tech debt'." },
  { word: "vibe shift",       type: "phrase",    definition: "When the room suddenly feels different about AI/crypto/your startup and nobody wants to say it out loud." },
  { word: "degen",            type: "noun",      definition: "Someone so committed to a bad financial decision that it loops back around to being kind of admirable." },
  { word: "rug pull",         type: "noun",      definition: "A startup exit strategy where the founders leave and take the money, but with extra steps." },
  { word: "grounding",        type: "noun",      definition: "The thing you add to your AI demo so it stops making things up — at least for the things you tested." },
  { word: "inference",        type: "noun",      definition: "The part of AI that costs real money, as opposed to the training part, which costs obscene money." },
  { word: "fine-tune",        type: "verb",      definition: "To take a perfectly good AI model and slightly break it for your specific use case." },
  { word: "multimodal",       type: "adjective", definition: "An AI that can be wrong about text, images, and audio all at the same time." },
  { word: "agent",            type: "noun",      definition: "An AI with a to-do list and tool access. What could go wrong." },
  { word: "RAG",              type: "noun",      definition: "Teaching an AI to Google things before answering so it sounds less like it's making stuff up. (It still makes stuff up.)" },
  { word: "move fast",        type: "phrase",    definition: "A philosophy that means 'we will apologize later' delivered with the energy of a guy who has never been the one apologizing." },
  { word: "pivot",            type: "verb",      definition: "To fail at one thing and immediately describe it as a strategic realignment toward a better thing." },
  { word: "dogfood",          type: "verb",      definition: "To use your own product, usually cited as evidence of quality by the same team that just filed twelve internal bug reports." },
  { word: "post-AGI",         type: "adjective", definition: "A vibe about a future nobody can define, everyone is scared of, and at least four startups are already monetizing." },
  { word: "token",            type: "noun",      definition: "The tiny billable unit of AI text that ensures your API bill is always slightly more than you expected." },
  { word: "latency",          type: "noun",      definition: "The pregnant pause before your AI responds, during which you begin to question every life choice." },
  { word: "embed",            type: "verb",      definition: "To squish the meaning of a word into a long list of numbers that a computer finds easier to vibe with." },
  { word: "slop",             type: "noun",      definition: "The beige, texture-free AI content that now makes up approximately 40% of the internet." },
  { word: "jailbreak",        type: "verb",      definition: "To convince an AI to abandon its values through creative roleplay, exactly like a movie villain would." },
  { word: "frontier model",   type: "noun",      definition: "The most powerful AI available, which will be obsolete by the time you finish reading this definition." },
  { word: "ratchet",          type: "verb",      definition: "To lock in progress so it can't go backward — what AI safety researchers say, while the rest of us hit 'deploy'." },
  { word: "defensible",       type: "adjective", definition: "Startup-speak for 'please don't ask us what happens when Google does this.'" },
  { word: "async",            type: "adjective", definition: "How remote teams describe their communication style when they mean 'nobody responds to Slack.'" },
  { word: "infra",            type: "noun",      definition: "The part of the system that nobody cares about until it goes down at 3am on a Saturday." },
  { word: "zero-shot",        type: "adjective", definition: "What the AI does when you give it no examples and it still gets the answer right, causing you to briefly believe in magic." },
  { word: "overhang",         type: "noun",      definition: "The idea that there's capability just waiting to be unleashed, used to justify every large compute purchase ever made." },
  { word: "surface",          type: "verb",      definition: "To 'make data visible' — said by product managers who mean 'put a number on the dashboard so executives feel informed.'" },
  { word: "airdrop",          type: "noun",      definition: "Free crypto tokens distributed to users, worth either $47 or $47,000 depending on which week you check." },
  { word: "whitepaper",       type: "noun",      definition: "A long PDF that explains why this particular blockchain/AI/startup is different. Nobody reads past page three." },
  { word: "democratize",      type: "verb",      definition: "To make powerful technology available to everyone, pending your credit card number and agreement to our terms of service." },
  { word: "moat",             type: "noun",      definition: "The thing your startup claims to have and VCs pretend to believe until a better-funded competitor shows up." },
  { word: "scale",            type: "verb",      definition: "To grow so fast that all your old problems become new, more expensive problems." },
  { word: "unbundle",         type: "verb",      definition: "To chop up one working product into twelve smaller products, each with their own pricing page." },
  { word: "founder mode",     type: "phrase",    definition: "A management philosophy that means the CEO is in every meeting, which everyone agrees is great except the people in the meetings." },
  { word: "hyperscaler",      type: "noun",      definition: "AWS, Azure, or GCP — the three landlords of the internet to whom all startups eventually pay rent." },
  { word: "deprecate",        type: "verb",      definition: "To kill a feature while technically leaving it alive for 18 months so it's your users' fault when it breaks." },
  { word: "steelman",         type: "verb",      definition: "To argue the strongest version of your opponent's point before dismantling it, which sounds fair until you notice the dismantling part." },
  { word: "hardcoded",        type: "adjective", definition: "A value written directly into the source code by someone who was 'just testing' and then left the company." },
  { word: "orchestration",    type: "noun",      definition: "Getting multiple AI agents to cooperate, which is exactly as chaotic as getting multiple humans to cooperate." },
  { word: "prompt injection", type: "noun",      definition: "When someone tricks your AI assistant into ignoring you by hiding instructions in a webpage it was told to summarize." },
  { word: "metatransparency", type: "noun",      definition: "When an AI company publishes rules for how their AI can be used so they can say they were transparent about it." },
  { word: "distillation",     type: "noun",      definition: "Training a small, cheap model to act like a big, expensive model — the AI equivalent of a knockoff handbag." },
  { word: "cold start",       type: "noun",      definition: "The awkward phase where your product has no users because it needs users to be useful. A real chicken-and-egg situation, but make it startup." },
  { word: "vibe check",       type: "phrase",    definition: "An informal meeting that could have been a Slack message, used to decide if a team 'feels right' before doing any actual evaluation." },
];
