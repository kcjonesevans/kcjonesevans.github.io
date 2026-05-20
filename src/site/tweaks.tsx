import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';

const TWEAK_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;overflow-y:auto;overflow-x:hidden;min-height:0}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}
  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}
  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2}
  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}
`;

type TweakValues = Record<string, string>;

export function useTweaks(defaults: TweakValues) {
  const [values, setValues] = useState(defaults);

  const setTweak = useCallback((key: string, value: string) => {
    const edits = { [key]: value };
    setValues((prev) => ({ ...prev, ...edits }));
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
    window.dispatchEvent(new CustomEvent('tweakchange', { detail: edits }));
  }, []);

  return [values, setTweak] as const;
}

export function TweaksPanel({ title = 'Tweaks', children }: { title?: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const dragRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef({ x: 16, y: 16 });
  const pad = 16;

  const clampToViewport = useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const maxRight = Math.max(pad, window.innerWidth - panel.offsetWidth - pad);
    const maxBottom = Math.max(pad, window.innerHeight - panel.offsetHeight - pad);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(pad, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(pad, offsetRef.current.y))
    };
    panel.style.right = `${offsetRef.current.x}px`;
    panel.style.bottom = `${offsetRef.current.y}px`;
  }, []);

  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      const type = (e.data as { type?: string })?.type;
      if (type === '__activate_edit_mode') setOpen(true);
      if (type === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  useEffect(() => {
    if (!open) return;
    clampToViewport();
    window.addEventListener('resize', clampToViewport);
    return () => window.removeEventListener('resize', clampToViewport);
  }, [open, clampToViewport]);

  const onDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    const panel = dragRef.current;
    if (!panel) return;

    const bounds = panel.getBoundingClientRect();
    const startX = e.clientX;
    const startY = e.clientY;
    const startRight = window.innerWidth - bounds.right;
    const startBottom = window.innerHeight - bounds.bottom;

    const onMove = (ev: MouseEvent) => {
      offsetRef.current = {
        x: startRight - (ev.clientX - startX),
        y: startBottom - (ev.clientY - startY)
      };
      clampToViewport();
    };

    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*');
  };

  if (!open) return null;

  return (
    <>
      <style>{TWEAK_STYLE}</style>
      <div ref={dragRef} className="twk-panel" style={{ right: offsetRef.current.x, bottom: offsetRef.current.y }}>
        <div className="twk-hd" onMouseDown={onDragStart}>
          <b>{title}</b>
          <button className="twk-x" aria-label="Close tweaks" onMouseDown={(e) => e.stopPropagation()} onClick={dismiss}>
            x
          </button>
        </div>
        <div className="twk-body">{children}</div>
      </div>
    </>
  );
}

export function TweakSection({ label }: { label: string }) {
  return <div className="twk-sect">{label}</div>;
}

export function TweakRadio({
  label,
  value,
  options,
  onChange
}: {
  label: string;
  value: string;
  options: Array<{ value: string; label: string }>;
  onChange: (value: string) => void;
}) {
  const idx = Math.max(0, options.findIndex((o) => o.value === value));
  const count = options.length;

  return (
    <div className="twk-row">
      <div className="twk-lbl">
        <span>{label}</span>
      </div>
      <div className="twk-seg">
        <div className="twk-seg-thumb" style={{ left: `calc(2px + ${idx} * (100% - 4px) / ${count})`, width: `calc((100% - 4px) / ${count})` }} />
        {options.map((option) => (
          <button key={option.value} type="button" role="radio" aria-checked={option.value === value} onClick={() => onChange(option.value)}>
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function TweakText({
  label,
  value,
  onChange
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="twk-row">
      <div className="twk-lbl">
        <span>{label}</span>
      </div>
      <input className="twk-field" type="text" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
