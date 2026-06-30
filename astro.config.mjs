// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mermaid from "astro-mermaid";

// https://astro.build/config
export default defineConfig({
  site: "https://BezerkRevived.github.io",
  base: "/bezerk-docs",
  integrations: [
    mermaid({
      theme: "forest",
      autoTheme: true,
    }),
    starlight({
      title: "Bezerk Documentation",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/BezerkRevived/bezerk-docs",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/MVEsDC2UXy",
        },
      ],
      sidebar: [
        {
          label: "Library & Archives",
          items: [{ label: "Client Installers", slug: "library/installers" }],
        },
        {
          label: "The Netshow",
          collapsed: true,
          items: [
            { label: "Overview", slug: "games/netshow" },
            { label: "Game Bots", slug: "games/netshow/game-bots" },
            {
              label: "Extracting Content",
              slug: "games/netshow/extracting-content",
            },
            { label: "How-to's", slug: "games/netshow/how-tos" },
            { label: "FAQ", slug: "games/netshow/faq" },
          ],
        },
        {
          label: "Acrophobia",
          collapsed: true,
          items: [
            { label: "Overview", slug: "games/acrophobia" },
            { label: "Game Bots", slug: "games/acrophobia/game-bots" },
            {
              label: "Extracting Content",
              slug: "games/acrophobia/extracting-content",
            },
            { label: "How-to's", slug: "games/acrophobia/how-tos" },
            { label: "FAQ", slug: "games/acrophobia/faq" },
          ],
        },
        {
          label: "Cosmic Consensus",
          collapsed: true,
          items: [
            { label: "Overview", slug: "games/cosmic-consensus" },
            { label: "Game Bots", slug: "games/cosmic-consensus/game-bots" },
            {
              label: "Extracting Content",
              slug: "games/cosmic-consensus/extracting-content",
            },
            { label: "How-to's", slug: "games/cosmic-consensus/how-tos" },
            { label: "FAQ", slug: "games/cosmic-consensus/faq" },
          ],
        },
        {
          label: "Get The Picture",
          collapsed: true,
          items: [
            { label: "Overview", slug: "games/get-the-picture" },
            { label: "Game Bots", slug: "games/get-the-picture/game-bots" },
            {
              label: "Extracting Content",
              slug: "games/get-the-picture/extracting-content",
            },
            { label: "How-to's", slug: "games/get-the-picture/how-tos" },
            { label: "FAQ", slug: "games/get-the-picture/faq" },
          ],
        },
      ],
    }),
  ],
});
