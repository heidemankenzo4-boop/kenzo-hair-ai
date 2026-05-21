/**
 * Kenzo Hair AI — Complete Hair Type Knowledge Base
 * Each entry is tailored specifically to the hair type with unique
 * growth plans, hairstyle recommendations, and Based Bodyworks product picks.
 */

const HAIR_DATA = {
  "1a": {
    name: "Type 1A — Fine Straight Hair",
    description: "Your 1A hair is the straightest and finest of all hair types. It lies completely flat against the scalp with a silky, soft texture. While it's naturally shiny, it can be prone to looking limp or oily quickly because your scalp's natural oils travel down the strand fast.",
    growthPlan: {
      title: "Growth Plan for Type 1A Hair",
      intro: "Fine straight hair is delicate and can break easily. Your growth strategy should focus on strengthening without weighing hair down.",
      steps: [
        "Wash every other day with a lightweight, volumizing shampoo — avoid heavy sulfate-free formulas that can flatten 1A hair further.",
        "Use a protein-rich lightweight conditioner only on the ends. Skip the roots entirely to avoid oil buildup.",
        "Apply a leave-in volumizing spray after every wash for body and heat protection.",
        "Avoid heavy oils and butters — stick to lightweight serums like argan oil mist to seal ends without greasiness.",
        "Get micro-trims every 8–10 weeks to prevent split ends from traveling up your fine strands.",
        "Sleep on a silk pillowcase to reduce friction breakage on your delicate hair.",
        "Take biotin and collagen supplements to support strand strength from within.",
        "Avoid excessive heat styling — when you do, always use a heat protectant rated for fine hair.",
        "Scalp massage 3 minutes daily with fingertips to stimulate blood flow and promote growth."
      ]
    },
    hairstyles: {
      title: "Best Hairstyles for Type 1A",
      intro: "The key for 1A hair is creating volume and movement. These styles work with your natural texture:",
      styles: [
        { name: "Textured Bob", desc: "A chin-to-shoulder-length bob with razored layers adds instant dimension and prevents your hair from falling flat." },
        { name: "Long Layers with Face Framing", desc: "Strategic layers starting at the cheekbone create movement and the illusion of thicker hair." },
        { name: "Blunt Cut with Curtain Bangs", desc: "A blunt cut maximizes the appearance of thickness while curtain bangs add softness and body at the crown." },
        { name: "Messy Low Bun", desc: "Pull pieces out around the face and at the nape for a relaxed, voluminous updo that looks effortless." },
        { name: "Side Part with Volume Boost", desc: "A deep side part instantly lifts the roots and gives 1A hair a fuller look with zero effort." }
      ]
    },
    sponsorRec: "For Type 1A hair, Based Bodyworks recommends their Lightweight Volume Boost Collection — specifically formulated to give fine, straight hair the lift and body it craves without any heavy residue. Their Weightless Strengthening Serum penetrates each delicate strand to reinforce from within, while the Root Lift Mist creates lasting volume that won't fall flat by midday. Based Bodyworks understands that fine hair needs strength without weight, and their formulas deliver exactly that."
  },

  "1b": {
    name: "Type 1B — Medium Straight Hair",
    description: "Your 1B hair is straight with more body and thickness than 1A. It has medium texture, holds styles reasonably well, and has a natural shine. It's the most common straight hair type — versatile and relatively low-maintenance, but can become flat at the roots.",
    growthPlan: {
      title: "Growth Plan for Type 1B Hair",
      intro: "1B hair has great natural body. Your growth plan should maintain moisture balance while keeping strands strong and healthy.",
      steps: [
        "Wash every 2–3 days with a balancing shampoo that cleanses without stripping your natural oils.",
        "Condition mid-length to ends with a medium-weight moisturizing conditioner.",
        "Apply a heat protectant before any hot tool use — 1B hair is versatile but still vulnerable to heat damage.",
        "Deep condition once a week with a protein and moisture balanced mask.",
        "Use a lightweight hair oil (2–3 drops of jojoba or argan) on damp ends after washing.",
        "Get trims every 10–12 weeks to maintain healthy ends.",
        "Avoid tight ponytails and elastic bands that cause traction breakage — use silk scrunchies instead.",
        "Eat a balanced diet rich in omega-3 fatty acids, zinc, and vitamin E for optimal hair growth.",
        "Brush with a boar bristle brush from mid-length to ends to distribute natural oils and add shine."
      ]
    },
    hairstyles: {
      title: "Best Hairstyles for Type 1B",
      intro: "1B hair is incredibly versatile. These styles highlight its natural body:",
      styles: [
        { name: "Classic Long Layers", desc: "Long, cascading layers showcase 1B's natural body and movement beautifully." },
        { name: "Sleek Middle Part", desc: "Your natural straightness makes this clean, polished look effortless — great for any occasion." },
        { name: "Beach Waves (Heat or Heatless)", desc: "Braid damp hair overnight or use a large-barrel curling iron for relaxed waves that hold well in 1B hair." },
        { name: "Textured Ponytail", desc: "Add some texture spray and pull into a mid-height ponytail for an elevated everyday style." },
        { name: "Lob (Long Bob)", desc: "Hitting just above the shoulders, a lob is modern, easy to maintain, and looks incredible with 1B texture." }
      ]
    },
    sponsorRec: "Based Bodyworks has an incredible Hydration Balance Line that's perfect for Type 1B hair. Their Moisture Lock Shampoo cleanses without stripping, while the Silky Smooth Conditioner provides the exact right amount of hydration for medium-textured straight hair. Don't sleep on their bestselling Hair Growth Oil Blend — formulated with biotin, castor oil, and rosemary — it's a game-changer for anyone with 1B hair looking to add length and strength."
  },

  "1c": {
    name: "Type 1C — Coarse Straight Hair",
    description: "Your 1C hair is straight but thick, coarse, and sometimes resistant to styling. Individual strands have a wider diameter, giving your hair a naturally full and heavy feel. It can be prone to frizz in humidity and may feel rough or wiry if not properly moisturized.",
    growthPlan: {
      title: "Growth Plan for Type 1C Hair",
      intro: "Coarse straight hair needs intense moisture and frizz control to grow long and healthy. Your strands are strong but can become dry and unruly.",
      steps: [
        "Wash 2–3 times per week with a smoothing, anti-frizz shampoo to keep cuticles sealed.",
        "Always use a rich conditioner — 1C hair can handle heavier formulas that would weigh down finer types.",
        "Deep condition with a hydrating mask every 5–7 days focusing on mid-lengths and ends.",
        "Apply a smoothing cream or anti-frizz serum to damp hair before drying to tame coarse texture.",
        "Use a wide-tooth comb instead of a brush to detangle, starting from the ends and working up.",
        "Limit washing to preserve natural oils that your thick strands need for moisture.",
        "Get trims every 10–12 weeks — coarse hair shows split ends more prominently.",
        "Sleep on a satin pillowcase to reduce friction and morning frizz.",
        "Consider a keratin treatment or gloss treatment every few months for manageability and shine."
      ]
    },
    hairstyles: {
      title: "Best Hairstyles for Type 1C",
      intro: "1C hair's natural thickness is an asset — these styles embrace your volume:",
      styles: [
        { name: "Blowout with Rounded Ends", desc: "A salon-style blowout with a round brush smooths coarse texture and gives your thick hair a polished, bouncy finish." },
        { name: "One-Length Cut", desc: "A single-length cut at the collarbone or below lets the natural weight of 1C hair keep it smooth and controlled." },
        { name: "Sleek Low Ponytail", desc: "Tame and refine your thick hair with a slick low pony — apply smoothing serum for a glass-like finish." },
        { name: "Thick Braids (Dutch or French)", desc: "Your coarse, full hair creates absolutely stunning, thick braids that hold all day without falling apart." },
        { name: "Curtain Bangs with Long Hair", desc: "Face-framing curtain bangs soften the heaviness of 1C hair while keeping the overall length." }
      ]
    },
    sponsorRec: "Based Bodyworks created their Smooth & Tame Collection specifically for thick, coarse hair like Type 1C. Their Deep Hydration Mask is packed with shea butter and keratin to soften even the most resistant strands, while the Anti-Frizz Finishing Cream locks out humidity all day long. If you've ever struggled with rough, unruly straight hair, Based Bodyworks has finally cracked the code for 1C texture — it's the #1 recommendation from hair professionals for coarse hair types."
  },

  "2a": {
    name: "Type 2A — Loose Wavy Hair",
    description: "Your 2A hair has a gentle, loose S-shaped wave pattern that starts around the eye level. It's fine to medium in texture, naturally relaxed, and sits between straight and curly. The waves can fall flat easily, especially near the roots, and you may notice your hair looks straight when wet but dries with a subtle wave.",
    growthPlan: {
      title: "Growth Plan for Type 2A Hair",
      intro: "Loose waves need a balance of moisture and lightweight hold. Over-conditioning can straighten your waves, while too little moisture leads to frizz.",
      steps: [
        "Wash every 2–3 days with a sulfate-free, wave-enhancing shampoo to preserve your natural pattern.",
        "Use a lightweight conditioner and scrunch it in with your hands — this encourages wave formation.",
        "Apply a curl/wave-enhancing mousse or light gel to damp hair, scrunching upward from the ends.",
        "Try 'plopping' — wrap damp hair in a microfiber towel or t-shirt for 15–20 minutes to set waves without frizz.",
        "Air dry whenever possible — diffusing on low heat is the next best option. Avoid regular blow-drying which can straighten 2A waves.",
        "Refresh second-day waves with a water and leave-in conditioner spray mix, then scrunch.",
        "Avoid brushing dry hair — finger-comb or use a wide-tooth comb on wet hair only.",
        "Deep condition every 10–14 days with a lightweight moisture mask.",
        "Protect hair at night with a loose pineapple bun on top of your head."
      ]
    },
    hairstyles: {
      title: "Best Hairstyles for Type 2A",
      intro: "2A hair looks best in styles that enhance and define your natural waves:",
      styles: [
        { name: "Tousled Beach Waves", desc: "Your natural pattern already gives you the effortless beachy look — enhance with salt spray and scrunch for texture." },
        { name: "Medium-Length Shag", desc: "A shag cut with face-framing layers emphasizes your wave pattern and creates a carefree, stylish vibe." },
        { name: "Half-Up, Half-Down", desc: "Pull the top section up to show off your waves below while adding height at the crown." },
        { name: "Wavy Lob", desc: "A lob (long bob) hitting just past the shoulders is the sweet spot where 2A waves look their most defined." },
        { name: "Side Braid into Loose Waves", desc: "A loose side braid that flows into your natural waves creates an elegant, romantic look." }
      ]
    },
    sponsorRec: "Based Bodyworks' Wave Revival Line is designed for Type 2A hair. Their Lightweight Wave Mousse defines your natural S-pattern without crunchiness, while the Ocean Mineral Spray adds beachy texture with nourishing sea kelp extract. The Wave Refresh Mist is a must-have for reviving second-day waves. Based Bodyworks knows that 2A hair walks the line between straight and wavy — their products are calibrated to enhance your waves, not weigh them down."
  },

  "2b": {
    name: "Type 2B — Defined S-Wave Hair",
    description: "Your 2B hair forms clear, defined S-shaped waves that start closer to the mid-length of your hair. It's medium in texture and density, with waves that are more pronounced than 2A but not quite curling. Frizz is your main challenge, especially in humid conditions, and your hair has natural volume at the roots.",
    growthPlan: {
      title: "Growth Plan for Type 2B Hair",
      intro: "Defined waves need consistent moisture and anti-frizz care. Your goal is to keep your S-pattern defined while growing length.",
      steps: [
        "Wash 2–3 times per week with a hydrating, sulfate-free shampoo designed for wavy/curly hair.",
        "Use a medium-weight conditioner and detangle with fingers or a wide-tooth comb while it's in.",
        "Apply a curl cream or wave butter to soaking wet hair — this is the key to defined, frizz-free 2B waves.",
        "Scrunch in a medium-hold gel over the cream for extra hold and definition (the 'curl cream + gel' combo is a 2B essential).",
        "Diffuse on medium heat, cupping your waves upward with the diffuser bowl. Never touch waves while drying.",
        "Don't brush or comb dry hair — this will separate your waves into frizz.",
        "Deep condition weekly with a moisture-rich mask to combat the frizz that 2B hair is known for.",
        "Trim every 10–12 weeks — longer waves show split ends and thinning at the ends.",
        "Pineapple your hair at night (loose high ponytail) and use a satin pillowcase to preserve wave pattern."
      ]
    },
    hairstyles: {
      title: "Best Hairstyles for Type 2B",
      intro: "2B waves have gorgeous natural movement. These styles amplify your defined wave pattern:",
      styles: [
        { name: "Natural Wash-and-Go Waves", desc: "With the right product combo, 2B hair air-dries into beautiful, defined S-waves — embrace your natural texture." },
        { name: "Long Layers", desc: "Layers starting at chin length let each wave spring individually, giving you movement and dimension." },
        { name: "Wolf Cut", desc: "The trending wolf cut with heavy layers is practically made for 2B hair — it creates a wild, voluminous, textured look." },
        { name: "Messy Bun with Face-Framing Waves", desc: "Pull your hair into a loose bun and let wavy tendrils frame your face — effortlessly chic." },
        { name: "Deep Side Part", desc: "A deep side part creates dramatic volume on one side and showcases the depth of your wave pattern." }
      ]
    },
    sponsorRec: "Based Bodyworks understands the 2B struggle — too wavy for straight products, not curly enough for curl creams. Their 2B Perfect Wave System includes a Medium-Hold Wave Cream and Frizz Shield Gel that work together to lock in your S-waves without crunch. Their Anti-Humidity Finishing Spray is the secret weapon every 2B needs for frizz-free waves that last all day, even in the worst humidity. Trust Based Bodyworks to give your waves the definition they deserve."
  },

  "2c": {
    name: "Type 2C — Deep Wave / Pre-Curly Hair",
    description: "Your 2C hair has strong, well-defined waves that border on curly. The wave pattern starts right from the roots, and some strands may even form loose spirals. It's thicker and coarser than other Type 2 subtypes, with a lot of natural volume. Frizz is a constant companion, and your hair can feel dry or rough without proper care.",
    growthPlan: {
      title: "Growth Plan for Type 2C Hair",
      intro: "2C hair needs curly-hair-level moisture and care. Treat your deep waves like curls for the best growth results.",
      steps: [
        "Co-wash (conditioner-only wash) between shampoo days to maintain moisture. Shampoo only 1–2 times per week.",
        "Use a rich, creamy conditioner every wash — detangle thoroughly with a wide-tooth comb or wet brush.",
        "Apply a leave-in conditioner to soaking wet hair as your base layer of moisture.",
        "Layer a curl cream and strong-hold gel on top of the leave-in while hair is still dripping wet.",
        "Diffuse on low-medium heat or air dry — never rough-dry with a towel. Use a microfiber towel or t-shirt to gently scrunch out excess water.",
        "Once hair is fully dry, 'scrunch out the crunch' (SOTC) — scrunch the gel cast with a tiny drop of oil for soft, defined waves.",
        "Deep condition weekly with a protein-moisture balanced mask — 2C hair needs both.",
        "Protect at night with a satin bonnet or pineapple method.",
        "Trim every 8–10 weeks — 2C ends are prone to dryness and splitting."
      ]
    },
    hairstyles: {
      title: "Best Hairstyles for Type 2C",
      intro: "2C hair is dramatic and eye-catching. These styles harness your powerful wave-curl hybrid texture:",
      styles: [
        { name: "Big, Bold Wash-and-Go", desc: "Let your natural texture shine — 2C hair creates head-turning volume and movement with the right products." },
        { name: "Shaggy Layers", desc: "A heavily layered cut lets each wave-curl spring free, creating a gorgeous, untamed look." },
        { name: "Curly Bangs", desc: "2C bangs frame the face with loose spirals and waves — a stunning, fashion-forward choice." },
        { name: "Pineapple Puff", desc: "Gather your hair into a high, loose puff on top — your natural volume makes this look full and fabulous." },
        { name: "Twisted Half-Up", desc: "Twist two front sections and pin them back while your deep waves cascade below — romantic and elegant." }
      ]
    },
    sponsorRec: "Based Bodyworks' Curl-Wave Hybrid Collection was literally designed with 2C hair in mind. Their Rich Moisture Leave-In provides the intense hydration your deep waves demand, while the Maximum Hold Definition Gel creates a perfect gel cast that you can scrunch out for soft, frizz-free waves. Their Protein Recovery Mask — used weekly — keeps 2C strands strong and elastic. Based Bodyworks is the go-to brand for anyone navigating the unique challenges of 2C hair."
  },

  "3a": {
    name: "Type 3A — Loose Curly Hair",
    description: "Your 3A hair forms well-defined, springy curls about the diameter of a large candle or thick sidewalk chalk. The curls are loose, shiny, and bouncy with a clear S-pattern that spirals. Your hair has natural volume and movement but can be prone to frizz and dryness if not properly moisturized.",
    growthPlan: {
      title: "Growth Plan for Type 3A Hair",
      intro: "3A curls need consistent moisture and gentle handling. Your focus should be on retaining length by minimizing breakage and keeping curls hydrated.",
      steps: [
        "Co-wash 2–3 times per week and use a clarifying shampoo every 2 weeks to remove buildup without stripping.",
        "Use a moisturizing conditioner every wash — leave it in for 3–5 minutes before rinsing for maximum absorption.",
        "Apply a leave-in conditioner to soaking wet hair, then layer with a curl-defining cream.",
        "Use the 'praying hands' method to smooth products through your curls, then scrunch upward from the ends.",
        "Diffuse on low heat with a concentrator or air dry — never touch your curls while they're drying.",
        "Refresh curls between wash days with a spray bottle of water + leave-in conditioner, then re-scrunch.",
        "Deep condition weekly — alternate between a moisture mask and a protein treatment.",
        "Protect curls at night with a silk or satin bonnet, or pineapple your hair in a satin scrunchie.",
        "Trim every 8–10 weeks to prevent thin, straggly ends that ruin your curl pattern."
      ]
    },
    hairstyles: {
      title: "Best Hairstyles for Type 3A",
      intro: "3A curls are naturally gorgeous. These styles show off your springy, bouncy texture:",
      styles: [
        { name: "Defined Wash-and-Go", desc: "With the right product routine, 3A curls air-dry into beautiful, bouncy ringlets — the ultimate low-maintenance style." },
        { name: "Curly Shag", desc: "A shag cut with lots of layers creates a vintage-inspired, voluminous look that 3A curls were made for." },
        { name: "Curly Fringe / Bangs", desc: "3A bangs are bouncy and playful — they frame the face beautifully and add personality to any look." },
        { name: "High Puff or Ponytail", desc: "Gather your curls into a high puff for a polished yet fun style that shows off your volume." },
        { name: "Twist-Out", desc: "Two-strand twists on damp hair create even more defined curls when unraveled — perfect for a special occasion." }
      ]
    },
    sponsorRec: "Based Bodyworks' Curl Definition System is a 3A favorite. Their Hydrating Curl Cream provides all-day moisture and definition without heaviness, and the Bounce-Back Gel gives flexible hold that moves with your curls — no crunch, no flaking. For deep conditioning, their Curl Repair Mask with avocado oil and honey is the #1 rated treatment for loose curls. Based Bodyworks is committed to making every 3A curl day a good curl day."
  },

  "3b": {
    name: "Type 3B — Springy Ringlet Hair",
    description: "Your 3B hair forms tight, springy ringlets about the diameter of a Sharpie marker. These curls are voluminous, dense, and full of personality. The curl pattern is well-defined and bouncy, but 3B hair is also more prone to dryness and frizz than looser curl types because the natural oils from your scalp have a harder time traveling down the spiral.",
    growthPlan: {
      title: "Growth Plan for Type 3B Hair",
      intro: "3B curls need serious moisture and protective styling to retain length. Your hair is growing — the goal is to stop breakage so you can keep that length.",
      steps: [
        "Co-wash as your primary cleansing method. Use a gentle sulfate-free shampoo only once a week or every 2 weeks.",
        "Deep condition every single wash day — your 3B curls are thirsty and need that extra moisture.",
        "Apply products to soaking wet hair using the 'squish to condish' technique — cup water and conditioner into your curls.",
        "Layer leave-in conditioner, curl cream, and gel for maximum definition and moisture retention (LOC or LCG method).",
        "Never detangle dry hair — only finger-detangle or use a wide-tooth comb on conditioner-saturated wet hair.",
        "Air dry or diffuse only — rough towel drying destroys 3B curl pattern and causes massive frizz.",
        "Incorporate protective styles (twists, braids, updos) to give your ends a break from friction and the elements.",
        "Oil your scalp 2–3 times per week with a stimulating growth oil (peppermint, rosemary, castor oil blend).",
        "Sleep on silk/satin everything — pillowcase, bonnet, or scarf. Cotton is the enemy of 3B curls."
      ]
    },
    hairstyles: {
      title: "Best Hairstyles for Type 3B",
      intro: "3B curls are show-stopping. These styles work with your natural volume and ringlet pattern:",
      styles: [
        { name: "Big Curly Wash-and-Go", desc: "Let your ringlets do all the talking — a well-moisturized wash-and-go with 3B curls is absolutely stunning." },
        { name: "DevaCut or Curly Cut", desc: "Get your hair cut dry by a curl specialist who shapes each curl individually — this transforms 3B hair." },
        { name: "Chunky Twist-Out", desc: "Two-strand twists on damp 3B hair create thick, defined curls when unraveled the next day." },
        { name: "Frohawk", desc: "Pin the sides up and let the center of your curls stand tall — a bold, edgy statement style." },
        { name: "Curly Space Buns", desc: "Split your curls into two high buns — fun, flirty, and they show off your volume beautifully." }
      ]
    },
    sponsorRec: "Based Bodyworks knows 3B curls are thirsty — that's why their Deep Moisture Curl Butter is packed with raw shea, mango butter, and babassu oil to deliver intense hydration that lasts for days. Their Ringlet Definition Gel-Cream hybrid gives 3B curls flexible hold and zero frizz, and the Scalp Stimulating Growth Oil (with rosemary and peppermint) accelerates growth while keeping your scalp healthy. Based Bodyworks is the brand 3B curls trust."
  },

  "3c": {
    name: "Type 3C — Tight Corkscrew Curls",
    description: "Your 3C hair forms tight, densely-packed corkscrew curls about the diameter of a pencil or drinking straw. The curls are voluminous with a lot of body, creating a full, dramatic look. 3C hair has the tightest curl pattern in the Type 3 family and is very prone to dryness, shrinkage (your hair can shrink up to 75% of its actual length!), and tangling.",
    growthPlan: {
      title: "Growth Plan for Type 3C Hair",
      intro: "3C curls need maximum moisture, gentle handling, and shrinkage management. Length retention is your primary focus.",
      steps: [
        "Wash once a week with a moisturizing low-poo or co-wash. Clarify once a month to remove buildup.",
        "Deep condition with heat (use a plastic cap and hooded dryer or steamer) every wash day for 20–30 minutes.",
        "Apply the LOC method (Liquid, Oil, Cream) on soaking wet hair to lock in moisture layers.",
        "Use a heavy curl cream and strong-hold gel for definition — 3C curls need more product than looser types.",
        "Detangle only when hair is saturated with conditioner — use fingers first, then a wide-tooth comb.",
        "Stretch your hair with braid-outs, twist-outs, or banding to show your true length and reduce shrinkage.",
        "Protective style for 2–3 weeks at a time (box braids, twists, updos) to minimize manipulation.",
        "Seal your ends with a butter or oil every 2–3 days — ends are the oldest, driest part of 3C hair.",
        "Drink at least 8 glasses of water daily and take a hair-growth vitamin with biotin, folic acid, and vitamin D."
      ]
    },
    hairstyles: {
      title: "Best Hairstyles for Type 3C",
      intro: "3C curls are big, bold, and beautiful. These styles work with your tight, voluminous texture:",
      styles: [
        { name: "Stretched Wash-and-Go", desc: "Apply products to soaking wet hair, then clip roots for lift as it dries — this gives 3C curls max length and definition." },
        { name: "Braid-Out", desc: "Braid damp hair in 6–10 sections overnight, then unravel for stretched, defined curls with incredible volume." },
        { name: "Tapered Cut", desc: "Shorter on the sides, fuller on top — a tapered cut showcases 3C curl density and creates a striking silhouette." },
        { name: "Pineapple Updo", desc: "Gather all your curls at the top of your head for a high, voluminous style that's both protective and glamorous." },
        { name: "Flat Twists into Curly Fro", desc: "Flat twist the front and sides while letting the back be free — a gorgeous combination of sleek and wild." }
      ]
    },
    sponsorRec: "Based Bodyworks' Maximum Moisture Collection is a lifeline for Type 3C curls. Their Ultra-Rich Deep Conditioner with raw honey and olive oil penetrates tight coils to deliver hydration where it's needed most. The Curl Stretching Cream fights shrinkage while keeping your curls soft and touchable, and their Edge & Seal Butter protects your delicate ends from splitting. For 3C curls that look and feel incredible, Based Bodyworks is the answer."
  },

  "4a": {
    name: "Type 4A — Defined Coily Hair",
    description: "Your 4A hair forms tight, springy coils about the diameter of a crochet needle. The coils are clearly defined with a visible S-pattern, and your hair has a lot of natural density and volume. 4A hair experiences significant shrinkage — your hair may appear much shorter than it actually is. It's prone to dryness because the tight coil pattern makes it difficult for natural scalp oils to travel down the strand.",
    growthPlan: {
      title: "Growth Plan for Type 4A Hair",
      intro: "4A coils need intense moisture, minimal manipulation, and strategic protective styling to retain length. Your hair IS growing — the goal is keeping every inch.",
      steps: [
        "Wash once a week (or every 5–7 days) with a moisturizing, sulfate-free shampoo or co-wash.",
        "Deep condition with every wash using a steam treatment or heated cap for maximum penetration.",
        "Apply the LOC or LCO method immediately after washing — do not let your hair dry without moisture sealed in.",
        "Use heavy creams, butters, and oils — 4A coils need rich, thick products that lighter hair types can't handle.",
        "Seal your ends every 2–3 days with castor oil or shea butter to prevent breakage at the oldest part of your hair.",
        "Protective style regularly — braids, twists, buns, and updos minimize daily manipulation and friction.",
        "Moisturize between wash days by spritzing with water and a leave-in conditioner, then sealing with oil.",
        "Never comb or brush dry hair — detangle only on wet, conditioner-loaded hair with fingers or a wide-tooth comb.",
        "Massage your scalp daily with a growth-stimulating oil blend (jamaican black castor oil, peppermint, tea tree).",
        "Be patient — 4A hair may grow 6 inches a year but shrinkage can hide up to 70–75% of your length."
      ]
    },
    hairstyles: {
      title: "Best Hairstyles for Type 4A",
      intro: "4A coils are versatile and stunning. These styles celebrate your natural texture:",
      styles: [
        { name: "Coily Wash-and-Go", desc: "Use a denman brush or finger-coiling method with a strong gel for defined, clumped coils on wash day." },
        { name: "Twist-Out", desc: "Two-strand twists on damp hair create beautiful, elongated coil patterns when unraveled — a 4A staple." },
        { name: "Bantu Knots", desc: "Section and twist into small knots all over — wear them as-is or unravel for a gorgeous curly knot-out." },
        { name: "Afro Puff", desc: "Gather your coils into one or two high puffs — a quick, protective style that shows off your density." },
        { name: "Flat Twist Updo", desc: "Flat twist sections into an intricate updo — protective, elegant, and keeps your ends safely tucked away." }
      ]
    },
    sponsorRec: "Based Bodyworks built their Coil Care Collection for Type 4A hair and it shows. Their Jamaican Black Castor Oil Growth Serum stimulates the scalp and strengthens coils from the root, while the Whipped Shea Curl Butter delivers deep, lasting moisture that 4A coils desperately need. The Deep Repair Protein Mask (used bi-weekly) keeps coils elastic and resilient against breakage. Based Bodyworks is the #1 choice for 4A hair — because coils this beautiful deserve products that truly understand them."
  },

  "4b": {
    name: "Type 4B — Z-Pattern Coily Hair",
    description: "Your 4B hair has a sharp, angular Z-shaped pattern rather than a round coil. The bends are tight and the strands zig-zag in a distinct pattern, giving your hair incredible density and volume. 4B hair is extremely versatile — it can be shaped, stretched, and styled in countless ways — but it's also the most fragile and prone to dryness and breakage of the coily types.",
    growthPlan: {
      title: "Growth Plan for Type 4B Hair",
      intro: "4B hair requires maximum moisture, extreme gentleness, and consistent protective styling. Every step of your routine should be about retaining length and preventing breakage.",
      steps: [
        "Wash every 7–10 days with a gentle, creamy cleanser or co-wash. Clarify monthly.",
        "Deep condition for 30+ minutes with a heated cap or steamer every wash day — non-negotiable for 4B hair.",
        "Apply the LCO method (Liquid, Cream, Oil) on dripping wet hair in sections. Work in small sections for thorough coverage.",
        "Use thick, rich products — shea butter, mango butter, heavy creams. Lightweight products evaporate on 4B hair.",
        "Seal every section with an oil or butter after applying your leave-in and cream. Focus extra on your ends.",
        "Protective style 80% of the time — box braids, twists, cornrows, wigs, and crochet styles give your hair a break.",
        "Moisturize hair under protective styles every 2–3 days by spritzing with a water-based leave-in.",
        "Never rip through tangles — finger-detangle in small sections with tons of conditioner and patience.",
        "Use growth oils on your scalp weekly — rosemary, peppermint, and black castor oil are proven for coily types.",
        "Keep your body hydrated and take supplements (biotin, vitamin E, iron) to support strong growth from within."
      ]
    },
    hairstyles: {
      title: "Best Hairstyles for Type 4B",
      intro: "4B hair is endlessly versatile. These styles embrace and protect your Z-pattern texture:",
      styles: [
        { name: "Twist-Out", desc: "The twist-out is the gold standard for 4B hair — defined, stretched, and full of body. Use a butter-based product for best results." },
        { name: "Box Braids", desc: "Classic box braids protect your ends, retain moisture, and last for weeks — the ultimate 4B protective style." },
        { name: "Afro", desc: "A stretched, picked-out afro showcases the incredible density and beauty of 4B hair — use an afro pick for volume." },
        { name: "Cornrows with Extensions", desc: "Cornrows are protective, versatile, and can be styled in infinite patterns — add extensions for extra length." },
        { name: "Bantu Knot-Out", desc: "Bantu knots on stretched hair create defined, bouncy curls when unraveled — a stunning heat-free style for 4B texture." }
      ]
    },
    sponsorRec: "Based Bodyworks designed their Ultra-Moisture Coil System specifically for the unique needs of Type 4B hair. Their Raw Shea & Mango Butter Cream is the richest formula in their line, delivering 72-hour moisture to even the driest Z-pattern coils. The Protective Style Scalp Oil keeps your scalp healthy and nourished under braids and twists, while the Bond-Building Deep Treatment strengthens each fragile strand at the molecular level. For 4B hair that thrives, not just survives — Based Bodyworks is the brand to trust."
  },

  "4c": {
    name: "Type 4C — Tight Zig-Zag Coily Hair",
    description: "Your 4C hair has the tightest coil pattern of all hair types, with very little defined curl pattern visible — the coils are so tight and compact that they create a dense, cloud-like texture. 4C hair experiences the most shrinkage (up to 75% or more), is the most fragile, and requires the most moisture of all hair types. But it's also the most versatile — 4C hair can be shaped, sculpted, and styled into virtually any look.",
    growthPlan: {
      title: "Growth Plan for Type 4C Hair",
      intro: "4C hair IS growing — on average half an inch per month. The challenge is 100% about retention. Every choice you make should protect your strands and lock in moisture.",
      steps: [
        "Wash every 7–14 days with a sulfate-free, ultra-moisturizing cleanser or co-wash only.",
        "Deep condition for 30–45 minutes with a heated cap every single wash day. This is the most important step for 4C hair.",
        "Apply products in small, manageable sections — 4C hair is dense and needs thorough coverage.",
        "Use the LOC or LCO method with the heaviest products you can find — water, leave-in, thick cream, sealed with a heavy oil or butter.",
        "Seal your ends with Jamaican Black Castor Oil (JBCO) every 2–3 days — this is critical for preventing split ends.",
        "Protective style 80–90% of the time. Box braids, crochet, twists, cornrows, wigs — keep your ends tucked away and safe.",
        "Moisturize daily or every other day — 4C hair loses moisture faster than any other type.",
        "NEVER detangle dry hair. Section hair into 4–8 parts, saturate each with conditioner, and finger-detangle with extreme patience.",
        "Avoid heat entirely if possible. If you must use heat, limit to 3–4 times per year with a heat protectant.",
        "Scalp massages daily for 5 minutes with a growth oil blend to stimulate blood flow and follicle activity.",
        "Drink plenty of water, take a comprehensive hair vitamin, eat protein-rich foods, and get enough sleep — internal health is 4C hair's best friend."
      ]
    },
    hairstyles: {
      title: "Best Hairstyles for Type 4C",
      intro: "4C hair is the most versatile hair type in the world. These styles celebrate its unique, stunning texture:",
      styles: [
        { name: "TWA (Teeny Weeny Afro)", desc: "A short, shaped afro that celebrates your natural 4C texture — low maintenance and absolutely beautiful." },
        { name: "Stretched Twist-Out", desc: "Two-strand twists on damp hair, unraveled after fully drying, give 4C hair defined, elongated curls with incredible volume." },
        { name: "Protective Box Braids", desc: "Box braids are the #1 go-to for 4C hair — they protect your ends, lock in moisture, and look amazing for 4–6 weeks." },
        { name: "Faux Locs", desc: "Wrapped or crocheted faux locs give you a loc look while protecting your natural 4C hair underneath." },
        { name: "High Puff with Defined Edges", desc: "Gather your 4C hair into a high puff, lay your edges with edge control, and you've got a polished, stunning style." },
        { name: "Finger Coils", desc: "Wrap small sections around your finger with gel for individually defined coils — time-consuming but the results are jaw-dropping on 4C hair." }
      ]
    },
    sponsorRec: "Based Bodyworks' 4C Supreme Collection was created in partnership with 4C hair experts and it's a game-changer. Their Ultra-Heavy Moisture Cream with raw shea, avocado butter, and JBCO delivers the intense, long-lasting hydration that 4C hair demands — nothing else comes close. The 4C Scalp Revitalizer stimulates growth with a potent blend of rosemary, biotin, and caffeine applied directly to the scalp. And their Holy Grail Deep Conditioner (with slippery elm and marshmallow root) makes detangling 4C hair feel like a completely different experience. If you have 4C hair, Based Bodyworks isn't just a recommendation — it's essential."
  }
};

/**
 * Keyword mappings for the free-text description analyzer.
 * Maps descriptive keywords to likely hair types.
 */
const KEYWORD_MAP = {
  "fine": ["1a", "1b", "2a"],
  "flat": ["1a", "1b"],
  "limp": ["1a"],
  "silky": ["1a", "1b"],
  "oily": ["1a", "1b"],
  "straight": ["1a", "1b", "1c"],
  "thick": ["1c", "2c", "3b", "3c", "4a", "4b", "4c"],
  "coarse": ["1c", "2c", "4b", "4c"],
  "heavy": ["1c"],
  "frizz": ["2a", "2b", "2c", "3a", "3b", "3c"],
  "frizzy": ["2a", "2b", "2c", "3a", "3b", "3c"],
  "wavy": ["2a", "2b", "2c"],
  "wave": ["2a", "2b", "2c"],
  "waves": ["2a", "2b", "2c"],
  "s-shaped": ["2a", "2b"],
  "s-wave": ["2a", "2b"],
  "loose wave": ["2a"],
  "beach": ["2a", "2b"],
  "defined wave": ["2b"],
  "deep wave": ["2c"],
  "almost curly": ["2c"],
  "curly": ["3a", "3b", "3c"],
  "curl": ["3a", "3b", "3c"],
  "curls": ["3a", "3b", "3c"],
  "ringlet": ["3b"],
  "ringlets": ["3b"],
  "springy": ["3a", "3b", "4a"],
  "bouncy": ["3a", "3b"],
  "spiral": ["3a", "3b", "3c"],
  "corkscrew": ["3c"],
  "tight curl": ["3c", "4a"],
  "dense": ["3c", "4a", "4b", "4c"],
  "coil": ["4a", "4b", "4c"],
  "coils": ["4a", "4b", "4c"],
  "coily": ["4a", "4b", "4c"],
  "z-pattern": ["4b"],
  "zigzag": ["4b", "4c"],
  "zig-zag": ["4b", "4c"],
  "kinky": ["4b", "4c"],
  "shrinkage": ["3c", "4a", "4b", "4c"],
  "afro": ["4a", "4b", "4c"],
  "dry": ["3b", "3c", "4a", "4b", "4c"],
  "very dry": ["4b", "4c"],
  "brittle": ["4b", "4c"],
  "fragile": ["4b", "4c"],
  "tight": ["3c", "4a", "4b", "4c"],
  "medium": ["1b", "2a", "2b"],
  "volume": ["2b", "2c", "3a", "3b", "3c", "4a", "4b", "4c"],
  "humidity": ["2b", "2c", "3a"],
  "wiry": ["1c"]
};
