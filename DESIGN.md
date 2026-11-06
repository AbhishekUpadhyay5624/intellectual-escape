# Escape: a full-screen reading space

## Direction

This revision replaces the article catalog with a feed interface. There are no hero cards, article thumbnails, boxed recommendations, or content grids. The feed uses one viewport per short, with native vertical scroll snapping. The empty state occupies a single screen and clearly says that there is no content yet.

All previous concepts and stories were removed from the source library. No new sample stories, concept explanations, or content previews were added.

## Typography and color

Outfit supplies the distinctive rounded display typography and wordmark. DM Sans supplies the reading and interface text. Both fonts are self-hosted through Fontsource. Manrope and the unused animation library were removed.

| Role           | Dark    | Light   |
| -------------- | ------- | ------- |
| Background     | #08090d | #f5f5f8 |
| Primary text   | #f2f2f6 | #191b26 |
| Secondary text | #a0a2b0 | #626575 |
| Muted text     | #828596 | #6b6e80 |
| Accent         | #b7c9ff | #415d9f |

Reading sizes: 18, 21, and 24 pixels. The interface uses plain navigation, sparse labels, and open space. The new orbit mark and SVG favicon share a simple two-loop form.

## 3D scene

A reflective knot is rendered with Three.js, not a flat cover image. Psychology uses a cool silver material; Stories introduces a slightly warmer silver. Topic and mood selection gently changes its orientation. Pause control and the ambient-motion preference both stop the animation; reduced-motion and document-visibility preferences are respected.

The scene is loaded separately, caps device pixel ratio at 1.5, and renders at most 30 frames per second. Geometries, material, environment texture, renderer, and WebGL context are released on unmount. A static CSS mark remains usable when WebGL is unavailable.

Official implementation references: [RoomEnvironment](https://threejs.org/docs/pages/RoomEnvironment.html), [MeshPhysicalMaterial](https://threejs.org/docs/pages/MeshPhysicalMaterial.html), and [WebGLRenderer](https://threejs.org/docs/pages/WebGLRenderer.html).

## Verification

- Production TypeScript and Vite build.
- Psychology and Stories navigation, and topic/mood selected states.
- Empty library, saved, search, and former-read states.
- Phone and desktop layouts, including narrow screens.
- Dark and light themes; reading-size and motion preferences after refresh.
- Live WebGL renderer and a single scene per feed.
- No card grid and no previous sample content in the rendered app.

With the library empty, the feed deliberately contains one empty screen. Multi-entry scrolling becomes available when content is supplied; it is not simulated with fake reads.
