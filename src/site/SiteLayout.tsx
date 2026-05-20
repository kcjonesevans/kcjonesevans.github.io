import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { Footer, Header, Nav } from './ui';
import { TweakRadio, TweaksPanel, TweakSection, TweakText, useTweaks } from './tweaks';

const TWEAK_DEFAULTS = {
  palette: 'linen',
  serif: 'modern',
  density: 'cozy',
  currentlyText: 'leading a multi-team platform modernization and designing UX for AI agent workflows'
};

export default function SiteLayout() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const body = document.body;

    body.classList.remove('tweak-warm-day', 'tweak-twilight', 'tweak-papercraft', 'tweak-linen-default');
    if (tweaks.palette === 'warm-day') body.classList.add('tweak-warm-day');
    else if (tweaks.palette === 'twilight') body.classList.add('tweak-twilight');
    else if (tweaks.palette === 'papercraft') body.classList.add('tweak-papercraft');

    body.classList.remove('tweak-serif-modern', 'tweak-serif-classic', 'tweak-serif-playful');
    body.classList.add(`tweak-serif-${tweaks.serif}`);

    body.classList.remove('tweak-density-cozy', 'tweak-density-airy', 'tweak-density-tight');
    body.classList.add(`tweak-density-${tweaks.density}`);
  }, [tweaks]);

  return (
    <div className="app">
      <Header />
      <Nav />
      <main className="site-main">
        <Outlet context={{ currentlyText: tweaks.currentlyText }} />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette" />
        <TweakRadio
          label="Tint"
          value={tweaks.palette}
          options={[
            { value: 'linen', label: 'Linen' },
            { value: 'warm-day', label: 'Warm day' },
            { value: 'twilight', label: 'Twilight' },
            { value: 'papercraft', label: 'Papercraft' }
          ]}
          onChange={(value) => setTweak('palette', value)}
        />
        <TweakSection label="Typography" />
        <TweakRadio
          label="Display font"
          value={tweaks.serif}
          options={[
            { value: 'modern', label: 'Fraunces' },
            { value: 'classic', label: 'PT Serif' },
            { value: 'playful', label: 'Caveat' }
          ]}
          onChange={(value) => setTweak('serif', value)}
        />
        <TweakSection label="Layout" />
        <TweakRadio
          label="Density"
          value={tweaks.density}
          options={[
            { value: 'tight', label: 'Tight' },
            { value: 'cozy', label: 'Cozy' },
            { value: 'airy', label: 'Airy' }
          ]}
          onChange={(value) => setTweak('density', value)}
        />
        <TweakSection label="Home" />
        <TweakText label="Currently message" value={tweaks.currentlyText} onChange={(value) => setTweak('currentlyText', value)} />
      </TweaksPanel>
    </div>
  );
}
