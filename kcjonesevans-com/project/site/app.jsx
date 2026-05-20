// App — hash router + Tweaks integration.
const { useState: useStateA, useEffect: useEffectA } = React;

const ROUTES = {
  '/':        () => 'Home',
  '/about':   () => 'About',
  '/work':    () => 'Work',
  '/blog':    () => 'Blog',
  '/resume':  () => 'Resume',
  '/contact': () => 'Contact',
};

function pathFromHash() {
  const h = window.location.hash.replace(/^#/, '') || '/';
  return ROUTES[h] ? h : '/';
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "linen",
  "serif": "modern",
  "density": "cozy",
  "currentlyText": "leading a multi-team platform modernization and designing UX for AI agent workflows"
}/*EDITMODE-END*/;

function App() {
  const [path, setPath] = useStateA(pathFromHash());
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffectA(() => {
    const onHash = () => {
      setPath(pathFromHash());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const onNav = (p) => {
    if (!ROUTES[p]) p = '/';
    if (window.location.hash !== '#' + p) {
      window.location.hash = '#' + p;
    } else {
      window.scrollTo({ top: 0 });
    }
    setPath(p);
  };

  // Reflect tweaks on body class
  useEffectA(() => {
    const b = document.body;
    b.classList.remove('tweak-warm-day','tweak-twilight','tweak-papercraft','tweak-linen-default');
    if (t.palette === 'warm-day') b.classList.add('tweak-warm-day');
    else if (t.palette === 'twilight') b.classList.add('tweak-twilight');
    else if (t.palette === 'papercraft') b.classList.add('tweak-papercraft');

    b.classList.remove('tweak-serif-modern','tweak-serif-classic','tweak-serif-playful');
    b.classList.add('tweak-serif-' + t.serif);

    b.classList.remove('tweak-density-cozy','tweak-density-airy','tweak-density-tight');
    b.classList.add('tweak-density-' + t.density);
  }, [t.palette, t.serif, t.density]);

  let Screen = Home;
  if (path === '/about')   Screen = About;
  if (path === '/work')    Screen = Work;
  if (path === '/blog')    Screen = Blog;
  if (path === '/resume')  Screen = Resume;
  if (path === '/contact') Screen = Contact;

  return (
    <div className="app">
      <Header onNav={onNav} />
      <Nav current={path} onNav={onNav} />
      <main className="site-main">
        <Screen onNav={onNav} currentlyText={t.currentlyText} />
      </main>
      <Footer onNav={onNav} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette" />
        <TweakRadio
          label="Tint"
          value={t.palette}
          options={[
            { value: 'linen',      label: 'Linen' },
            { value: 'warm-day',   label: 'Warm day' },
            { value: 'twilight',   label: 'Twilight' },
            { value: 'papercraft', label: 'Papercraft' },
          ]}
          onChange={(v) => setTweak('palette', v)}
        />
        <TweakSection label="Typography" />
        <TweakRadio
          label="Display font"
          value={t.serif}
          options={[
            { value: 'modern',  label: 'Fraunces' },
            { value: 'classic', label: 'PT Serif' },
            { value: 'playful', label: 'Caveat' },
          ]}
          onChange={(v) => setTweak('serif', v)}
        />
        <TweakSection label="Layout" />
        <TweakRadio
          label="Density"
          value={t.density}
          options={[
            { value: 'tight', label: 'Tight' },
            { value: 'cozy',  label: 'Cozy' },
            { value: 'airy',  label: 'Airy' },
          ]}
          onChange={(v) => setTweak('density', v)}
        />
        <TweakSection label="Home" />
        <TweakText
          label="'Currently' message"
          value={t.currentlyText}
          onChange={(v) => setTweak('currentlyText', v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
