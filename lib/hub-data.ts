// ---------------------------------------------------------------------------
// EDIT THIS FILE to update the hub. All page content is driven from here.
// Replace placeholder text, add timeline entries, documents, and people.
// ---------------------------------------------------------------------------

export const SITE = {
  name: "Salem Brick Trials",
  title: "Salem Brick Trials",
  subtitle:
    "A public archive of documents and information surrounding the Bricks & Minifigs situation covered throughout Reckless Ben’s investigative documentary series.",
  // The full Proton Drive folder containing every source document.
  driveUrl: "https://drive.proton.me/urls/7S5XSPWJF4#rQxnVZe5sUVc",
  lastUpdated: "May 2026",
}

export const SUMMARY = {
  heading: "Background & Summary",
  paragraphs: [
    "In November 2023, collector Bryan Mansell consigned a large Star Wars LEGO collection — valued by his family at up to roughly $200,000 — to the Bricks & Minifigs resale store in Keizer, Oregon, which was then operated by franchisees Chrystal and Benjamin Gorman. The arrangement was intended to sell the collection on consignment through the store.",
    "In November 2024, the franchisor, BAM Franchising, Inc. (Bricks & Minifigs corporate), terminated the Gormans' franchise agreement and took over the Keizer location amid claims of unpaid obligations. Mansell alleges his consigned collection was not returned when the store changed hands. Corporate has stated the consignment was an unauthorized private arrangement that violated franchise policy and that it possesses only a small fraction of the disputed items.",
    "The dispute drew wider public attention after YouTuber Ben Schneider (Reckless Ben) documented it in a video series. The matter has since become the subject of civil litigation and an active investigation involving Keizer police and the Marion County District Attorney's office. This page collects publicly relevant documentation in one place so reviewers can access primary sources directly.",
  ],
  disclaimer:
    "We and the entire community do not support or condone harassing, attacking, or threatening anyone — including your local Bricks & Minifigs store or their employees. This only does more harm than good.",
}

export type TimelineEntry = {
  date: string
  title: string
  description: string
  link?: string
}

export const TIMELINE: TimelineEntry[] = [
  {
    date: "November 2023",
    title: "Star Wars LEGO collection consigned",
    description:
      "Bryan Mansell consigns a large Star Wars LEGO collection — valued by his family at up to roughly $200,000 — to the Bricks & Minifigs store in Keizer, Oregon, then operated by franchisees Chrystal and Benjamin Gorman.",
  },
  {
    date: "November 2024",
    title: "Franchise terminated and store taken over",
    description:
      "BAM Franchising, Inc. (Bricks & Minifigs corporate) terminates the Gormans' franchise agreement and takes over the Keizer location amid claims of unpaid obligations.",
  },
  {
    date: "After takeover (late 2024)",
    title: "Collection not returned",
    description:
      "Mansell alleges his consigned collection was not returned when the store changed hands. Corporate maintains the consignment was unauthorized, prohibited by franchise policy, and that it holds only a small fraction of the disputed items.",
  },
  {
    date: "2025",
    title: "Public attention and investigations",
    description:
      "YouTuber Ben Schneider (Reckless Ben) documents the dispute in a video series, drawing wider attention. The matter becomes the subject of civil litigation and an active investigation involving Keizer police and the Marion County District Attorney's office.",
  },
  {
    date: "2026",
    title: "A document (from February 28, 2025) is made public where LEGO Responds",
    description:
      `"Bricks and Minifigs isn't affiliated with the LEGO Group in any ways, which means we aren't able to dictate their action nor have we any control over what they have or will do."`,
    link: "https://salembricktrials.com/documents/Item2_ExhibitA_LegoEmail.pdf"
  },
]

export type DocItem = {
  entity: string
  title: string
  date: string
  description: string
  // Link directly to the file if you have a per-file URL, otherwise leave the
  // main folder link and people can find it inside the Drive.
  url: string
  type?: string
}

export type DocCategory = {
  category: string
  items: DocItem[]
}

const DRIVE = "https://drive.proton.me/urls/7S5XSPWJF4#rQxnVZe5sUVc"

export const DOCUMENTS: DocCategory[] = [
  // {
  //   category: "American Fork Police Incident Reports",
  //   items: [
  //     {
  //       entity: "American Fork Police Department",
  //       title: "Document name here",
  //       date: "May 2026",
  //       description: "Short description of what this document is.",
  //       url: DRIVE,
  //       type: "PDF",
  //     },
  //     {
  //       entity: "American Fork Police Department",
  //       title: "Another document",
  //       date: "May 2026",
  //       description: "Short description of what this document is.",
  //       url: DRIVE,
  //       type: "Document",
  //     },
  //   ],
  // },
  {
    category: "Court Cases",
    items: [
      {
        entity: "Law, Gorman v. BAM Corporate",
        title: "",
        date: "March 27, 2026",
        description: "The Brick's and Minifigs store owners who consigned Bryan's LEGO set file a lawsuit against Bricks's and Minfigs Corporate, who took over their store.",
        url: "https://drive.google.com/drive/folders/1_sAi_zCG74ha9Dx7c6BG2mSglbZeFKR4?usp=drive_link",
        type: "Folder",
      },
      {
        entity: "BAM Corporate v. Ben Schneider (Reckles Ben), Bryan Mansell ",
        title: "",
        date: "May 27, 2026",
        description: "BAM Franchising (Bricks and Minifigs) sue YouTuber Ben Schneider (Reckless Ben), Bryan Mansell, and others, accusing them of coordinating a harassment and extortion campaign against the company and its franchise owners in connection with a disputed $200,000+ Star Wars LEGO collection that the Mansells consigned to an Oregon store.",
        url: "https://drive.google.com/drive/folders/1v6BdA0v6fzpLgS773_EXkVJ1XmlD2kqy?usp=drive_link",
        type: "Folder",
      },
    ],
  },
  {
    category: "UCC Filings",
    items: [
      {
        entity: "BAM Franchising, Inc.",
        title: "",
        date: "March 27, 2026",
        description: "Detailed records where they are listed as a debtor.",
        url: "https://drive.google.com/file/d/1LKs4tetOSjRIohlDBYqgG0XD9IQ5skSS/view?usp=drive_link",
        type: "PDF",
      },
      {
        entity: "Legally Mine LLC",
        title: "",
        date: "May 27, 2026",
        description: "Detailed records where they are listed as a debtor.",
        url: "https://drive.google.com/file/d/1I3cTaGBAJ-weKXB5-Yu0TbQrhFTmq7jr/view?usp=drive_link",
        type: "PDF",
      },
    ],
  },
  {
    category: "Written PR & Press Statements",
    items: [
      {
        entity: "Bricks & Minifigs Corporate",
        title: "A Note to Our Community about the Bricks & Minifigs® Salem, OR Store",
        date: "May 21, 2026",
        description: "",
        url: "https://bricksandminifigs.com/blog/blog/2026/05/21/salem-oregon-bricks-and-minifigs-store-situation/",
        type: "Blog Post",
      },
      {
        entity: "Bricks & Minifigs Corporate",
        title: "Response to Customer Inquiries Regarding Bricks & Minifigs Salem, Oregon: Clarity and Resolution of an Isolated and Former Franchisee’s Private Civil Dispute",
        date: "May 28, 2026",
        description: "",
        url: "https://bricksandminifigs.com/blog/blog/2026/05/28/bricks-minifigs-salem-oregon-clarity-and-resolution/",
        type: "Blog Post",
      },
      {
          entity: "Bricks & Minifigs Corporate",
        title: "Leaked Internal Email to Franchisees",
        date: "",
        description: "",
        url: "https://drive.google.com/file/d/1FjGBKiH6GpP1E1DZgE8Av5emv98yJf4B/view?usp=drive_link",
        type: "PDF",
      }
    ],
  },
  {
    category: "Warrants",
    items: [
      {
        entity: "AFFIDAVIT FOR & COPY OF SEARCH WARRANT",
        title: "A copy of the affidavit and search warrant that led to the SWAT team storming and searching Reckless Ben's AirBNB. This incident also led to the arrest of Ben and his team.",
        date: "March 11, 2026",
        description: "",
        url: "https://drive.google.com/file/d/1mD4ycq7JrSnURFgnAqt76YNf6mF614p4/view?usp=sharing",
        type: "PDF",
      },
    ],
  },
]

export type Person = {
  name: string
  role: string
  description: string
  // Optional photo. Put image files in /public (e.g. "/people/ben.jpg") and
  // reference the path here. Leave undefined to show initials fallback.
  image?: string
}

export const PEOPLE: Person[] = [
  {
    name: "Ben Schneider (Reckless Ben)",
    role: "YouTuber / documenter",
    description:
      "Content creator who documented the dispute in a viral video series and publicly pressured Bricks & Minifigs over the consigned collection. His coverage brought wider attention to the situation.",
    image: "/people/ben.jpg",
  },
  {
    name: "Bryan Mansell",
    role: "Collection owner / consignor",
    description:
      "Owner (along with his father) of the Star Wars LEGO collection, reportedly valued by the family at up to $200,000, that was consigned to the Bricks & Minifigs store in Keizer, Oregon, in 2023.",
  },
  {
    name: "Chrystal Law-Gorman & Benjamin Gorman",
    role: "Former store owners (SALEM)",
    description:
      "Former franchisees who operated the Bricks & Minifigs Keizer location and accepted the consignment. Their franchise agreement was later terminated by corporate.",
  },
  {
    name: "Ammon McNeff",
    role: "CEO, BAM Franchising, Inc.",
    description:
      "Chief executive officer of BAM Franchising, Inc., the parent company of Bricks & Minifigs, since 2018. Corporate maintains the consignment was an unauthorized private deal that violated franchise policy.",
    image: "/people/ammon.jpg",
  },
  {
    name: "Baker Bricks LLC",
    role: "Subsequent store operator",
    description:
      "Third party identified as acquiring the Keizer store location after the corporate takeover and transition of the franchise.",
  },
  {
    name: "Bricks & Minifigs (BAM Franchising, Inc.)",
    role: "Business / franchisor",
    description:
      "LEGO resale franchise founded in 2009. Corporate terminated the Keizer franchise agreement in 2024 and took over the store; the consigned collection remained on-site, leading to civil litigation and a police investigation.",
  },
]

export type LinkItem = {
  title: string
  description: string
  url: string
  cta: string
}

export const LINKS: LinkItem[] = [
  {
    title: "Help Bryan Recover His Stolen LEGO Collection",
    description: "Support the GoFundMe campaign to help Bryan recover his LEGO collection.",
    url: "https://www.gofundme.com/f/help-bryan-recover-his-lego-collection",
    cta: "GoFundMe",
  },
  {
    title: "Support Reckless Ben's Videos and Efforts",
    description: "Back Reckless Ben on Patreon to support his ongoing videos and efforts.",
    url: "https://www.patreon.com/RecklessBen",
    cta: "Patreon",
  },
  {
    title: "Reddit",
    description: "Come chat and view realtime updates on /r/RecklessBen.",
    url: "https://www.reddit.com/r/RecklessBen",
    cta: "Reddit",
  },
]

export type VideoItem = {
  title: string
  description: string
  date: string
  url: string
  youtubeId?: string
  tag: string
}

export type VideoSection = {
  heading: string
  videos: VideoItem[]
}

export const VIDEO_SECTIONS: VideoSection[] = [
  {
    heading: "Reckless Ben Documentary Series",
    videos: [
      {
        title: "Part 1 - I tracked down the thief who stole $200,000 of LEGO",
        date: "May 21, 2026",
        description:
          "Ben investigates a massive Lego Star Wars collection theft linked to a corporate toy store chain. After the original owners were forced out of their business, the collection remained under dispute, prompting a quest to confront the company and its representatives to recover the lost property.",
        url: "https://www.youtube.com/watch?v=wscQpkcwgNU",
        youtubeId: "wscQpkcwgNU",
        tag: "Primary video",
      },
      {
        title: "Part 2 - Bricks and Minifigs responded to my video",
        date: "May 30, 2026",
        description:
          "Ben attempts to serve legal papers to the owners of Bricks and Minifigs to recover a stolen Star Wars Lego collection. After navigating repeated confrontations with local law enforcement, the effort to secure the collection results in unexpected legal complications.",
        url: "https://www.youtube.com/watch?v=cxZPfj8AlmY",
        youtubeId: "cxZPfj8AlmY",
        tag: "Primary video",
      },
    ],
  },
  {
    heading: "Reckless Ben Segments",
    videos: [
      {
        title: "Response to PR Statement",
        date: "May 23, 2026",
        description:
          "Ben discusses a public statement issued by Bricks and Minifigs regarding a consignment dispute at their former Salem location. By examining the official response against documented evidence and past interactions, this breakdown evaluates the company's claims and the ongoing conflict over inventory ownership.",
        url: "https://www.youtube.com/watch?v=bWg2bnAqW6k",
        youtubeId: "bWg2bnAqW6k",
        tag: "Reckless Ben",
      },
       {
        title: "Response to Leaked BAM Franchise Email",
        date: "May 28, 2026",
        description:
          "Ben reviews a leaked corporate document detailing how a franchise network plans to manage public fallout and legal strategy following a documentary release. The footage outlines recommended internal communication guidelines, crisis management tactics, and the company's intended response to ongoing online criticism regarding a consignment dispute.",
        url: "https://www.youtube.com/watch?v=nny2ojTqW3A",
        youtubeId: "nny2ojTqW3A",
        tag: "Reckless Ben",
      },
      {
        title: "Reckless Ben - H3 Podcast Appearance",
        date: "May 29, 2026",
        description:
          "Ben appears on the H3 Podcast to discuss his investigation.",
        url: "https://www.youtube.com/live/IdII08PDlUE?si=ku5ChxTtqP5tlBS4&t=3859",
        youtubeId: "IdII08PDlUE",
        tag: "H3 Podcast",
      },
    ],
  },
  {
    heading: "YouTube Creator Responses & Coverage",
    videos: [
      {
        title: "LEGO Scandal Situation is Actually Crazy",
        date: "May 26, 2026",
        description:
          "Charlie's coverage of Part 1 of Reckless Ben's Series",
        url: "https://www.youtube.com/watch?v=0c60CnipRUY",
        youtubeId: "0c60CnipRUY",
        tag: "MoistCr1TiKaL",
      },
      {
        title: "LEGO Scandal Company Response is Horrible",
        date: "May 26, 2026",
        description:
          "",
        url: "https://www.youtube.com/watch?v=7-0a0i89Llc",
        youtubeId: "7-0a0i89Llc",
        tag: "MoistCr1TiKaL",
      },
        {
        title: "LEGO Scandal Keeps Getting Crazier",
        date: "May 28, 2026",
        description:
          "",
        url: "https://www.youtube.com/watch?v=oMUHGBaF04E",
        youtubeId: "oMUHGBaF04E",
        tag: "MoistCr1TiKaL",
      },
      {
        title: "LEGO Scandal is Getting Extremely Dangerous and Scary",
        date: "May 30, 2026",
        description:
          "Charlie's coverage of Part 2 of Reckless Ben's Series. Charlie details the escalating situation surrounding Reckless Ben's investigation into a Lego consignment dispute. The account follows the legal challenges encountered while attempting to serve court papers, alongside accounts of recurring interactions with local law enforcement and allegations of systemic interference aimed at suppressing the ongoing inquiry.",
        url: "https://www.youtube.com/watch?v=EuAhIBpanhQ",
        youtubeId: "EuAhIBpanhQ",
        tag: "MoistCr1TiKaL",
      },
      {
        title: "Attorney Leonard French Weighs In",
        date: "May 25, 2026",
        description:
          "Legal expert Leonard French analyzes the complex property dispute involving a massive Star Wars Lego collection seized by a retail franchise. The discussion examines consignment law, the Uniform Commercial Code, and the potential criminal implications of corporate actions when a family's assets disappear following a store takeover.",
        url: "https://www.youtube.com/watch?v=14ktgvoH4Mc",
        youtubeId: "14ktgvoH4Mc",
        tag: "Lawful Masses",
      }
    ],
  },
  {
    heading: "Police Body Cam Footage",
    videos: [],
  },
  {
    heading: "Interviews & Livestreams",
    videos: [
      {
        title: "Former Bricks & Minifigs Owner goes on ACOB",
        date: "May 28, 2026",
        description:
          "",
        url: "https://www.youtube.com/live/K-lc6XWV3ms?si=d1qtbzVXLfTqAbti&t=32",
        youtubeId: "K-lc6XWV3ms",
        tag: "ACOB",
      },
       {
        title: "Brick's and Minifigs COO goes on ACOB",
        date: "May 28, 2026",
        description:
          "Bricks and Minifigs Corporate COO - Matthew McNeff",
        url: "https://www.youtube.com/live/K-lc6XWV3ms?si=PKKxN2yLfrx23okB&t=5892",
        youtubeId: "K-lc6XWV3ms",
        tag: "ACOB",
      },
      {
        title: "Brick's and Minifigs CEO goes on ACOB",
        date: "May 28, 2026",
        description:
          "Bricks and Minifigs Corporate CEO - Ammon McNeff",
        url: "https://www.youtube.com/live/9dmR3Flk49k?si=n1yOHr17PzZr_2jD&t=59",
        youtubeId: "9dmR3Flk49k",
        tag: "ACOB",
      }
    ],
  },
   {
    heading: "Press Statements",
    videos: [
      {
        title: "Bricks and Minifigs/Benjamin Schneider Media Release",
        date: "May 29, 2026",
        description:
          "",
        url: "https://www.youtube.com/watch?v=IcVmSQpIPRY",
        youtubeId: "IcVmSQpIPRY",
        tag: "American Fork PD",
      }
    ],
  },
]

export const CONTACT = {
  heading: "Submit Information or Get in Touch",
  description:
    "If you have additional documentation, corrections, or context to share, you can reach out using the details below.",
  // Replace with your real contact email or remove if not needed.
  email: "contact@salembricktrials.com",
}
