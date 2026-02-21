// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Itumbiara",
    scale: "C",
  },
  crypto: {
    currency: "USD",
    coin: "BTC",
    refreshIn: 1800,
  },
  clock: {
    format: "h:i",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://reddit.com",
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
              icon: "letter-c",
              icon_color: palette.peach,
            },
            {
              name: "trakt.tv",
              url: "https://trakt.tv/dashboard",
              icon: "checks",
              icon_color: palette.pink,
            },
          ],
        },
        {
          name: "reddit",
          links: [
            {
              name: "r/lsf",
              url: "https://www.reddit.com/r/LivestreamFail/",
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
              name: "metacritic",
              url: "https://www.metacritic.com/",
              icon: "letter-m",
              icon_color: palette.yellow,
            },
            {
              name: "rottentomatoes",
              url: "https://www.rottentomatoes.com/",
              icon: "letter-r",
              icon_color: palette.red,
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
              name: "twitter",
              url: "https://x.com/home",
              icon: "brand-twitter",
              icon_color: palette.blue,
            },
            {
              name: "instagram",
              url: "https://www.instagram.com/",
              icon: "brand-instagram",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "r/poe2",
              url: "https://www.reddit.com/r/PathOfExile2/",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "r/classicwow",
              url: "https://www.reddit.com/r/classicwow/",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "warcraftlogs",
              url: "https://fresh.warcraftlogs.com/",
              icon: "swords",
              icon_color: palette.text,
            },
          ],
        },
        {
          name: "shopping",
          links: [
            {
              name: "amazon",
              url: "https://www.amazon.com.br/",
              icon: "brand-amazon",
              icon_color: palette.peach,
            },
            {
              name: "mercadolivre",
              url: "https://www.mercadolivre.com.br/",
              icon: "letter-m",
              icon_color: palette.yellow,
            },
            {
              name: "aliexpress",
              url: "https://pt.aliexpress.com/",
              icon: "letter-a",
              icon_color: palette.peach,
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
