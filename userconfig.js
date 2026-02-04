// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Itumbiara",
    scale: "C",
  },
  clock: {
    format: "h:i",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "media",
          links: [
            {
              name: "twitch",
              url: "https://www.twitch.tv/",
              icon: "brand-twitch",
              icon_color: palette.mauve,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "crunchyroll",
              url: "https://www.crunchyroll.com/discover",
              icon: "cake-roll",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "reddit",
          links: [
            {
              name: "r/lsf",
              url: "www.reddit.com/r/LivestreamFail/",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "r/all",
              url: "https://www.reddit.com/r/all/",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "r/movies+tv",
              url: "https://www.reddit.com/r/movies+television/",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "r/horror",
              url: "https://www.reddit.com/r/horror/",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "r/ff",
              url: "https://www.reddit.com/r/foundfootage/",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "r/futebol",
              url: "https://www.reddit.com/r/futebol/",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "utilities",
          links: [
            {
              name: "ge",
              url: "https://ge.globo.com/",
              icon: "play-football",
              icon_color: palette.green,
            },
            {
              name: "g1",
              url: "https://g1.globo.com/",
              icon: "news",
              icon_color: palette.red,
            },
            {
              name: "blackscreen",
              url: "https://blackscreen.app/",
              icon: "device-desktop",
              icon_color: palette.lavender,
            },
            {
              name: "trakt.tv",
              url: "https://trakt.tv/dashboard",
              icon: "checks",
              icon_color: palette.pink,
            },
            {
              name: "metacritic",
              url: "https://www.metacritic.com/",
              icon: "letter-m-small",
              icon_color: palette.yellow,
            },
            {
              name: "rottentomatoes",
              url: "https://www.rottentomatoes.com/",
              icon: "letter-r-small",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "neptune",
              url: "https://ui.neptune.ai",
              icon: "circle-triangle",
              icon_color: palette.peach,
            },
            {
              name: "wakatime",
              url: "https://wakatime.com",
              icon: "24-hours",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "dou",
              url: "https://dou.ua",
              icon: "brand-prisma",
              icon_color: palette.green,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "uber research",
              url: "https://eng.uber.com/category/articles",
              icon: "brand-uber",
              icon_color: palette.red,
            },
            {
              name: "google research",
              url: "https://blog.research.google",
              icon: "hexagon-letter-g",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "telegram",
              url: "https://web.telegram.org",
              icon: "brand-telegram",
              icon_color: palette.green,
            },
            {
              name: "facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.peach,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "IGN",
              url: "https://www.ign.com/account/playlist/library",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.red,
            },
            {
              name: "nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "patreon",
              url: "https://www.patreon.com",
              icon: "brand-patreon",
              icon_color: palette.red,
            },
            {
              name: "kyivstar",
              url: "https://tv.kyivstar.ua",
              icon: "star-filled",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
