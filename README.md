# Escape

A quiet, full-screen app for short psychology reads and stories. The content library is intentionally empty: all previous sample concepts and stories were removed in this redesign.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:5173. Use `npm run build` for the production build and `npm run preview` to serve it.

## Interface

- Two primary sections: Psychology and Stories.
- One viewport per short, using native vertical scroll snapping and keyboard navigation.
- Plain topic and mood controls, without cards or article grids.
- A live Three.js sculpture for the empty feed. Motion can be paused and respects the device's reduced-motion preference.
- Outfit display typography and DM Sans reading typography, both self-hosted.
- Ink black, soft white, silver, and a restrained ice-blue accent. Light and device themes remain available in Settings.
- Reading sizes of 18, 21, and 24 pixels.
- Search, Saved, and Settings use open layouts without enclosing cards.

## Content

`src/data/mockData.ts` exports an empty `contentItems` array. `extraStories.ts` is also empty. Old content IDs, sample passages, covers, featured cards, category grids, and sample statistics have been removed. The random-content API safely returns `undefined` for an empty library.

The feed renderer is in `src/components/SectionPage.tsx`; when content is added later, each item occupies one full screen. There are no replacement sample reads or artificial feed entries.

## Rendering

The 3D scene lives in `src/components/Atmosphere.tsx` and loads separately from the interface. It uses a studio environment, a reflective physical material, capped pixel density, and a maximum of 30 rendered frames per second. It stops animating when hidden or paused, disposes its resources on navigation, and has a static visual fallback.

See [DESIGN.md](DESIGN.md) for the design direction and verification notes.
