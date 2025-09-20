import { useRef, useEffect } from 'react';
import { Icon, IconName } from '../components/Icon';
import LoaderVL from '../assets/images/loader-VL.webp';
import LoaderSL from '../assets/images/loader-SL.webp';
import LoaderRB from '../assets/images/loader-RB.webp';
import LoaderTF from '../assets/images/loader-TF.webp';
import LoaderCS from '../assets/images/loader-CS.webp';
import LoaderGI from '../assets/images/loader-GI.webp';
import gsap from 'gsap';
import './Status.css';

type StatusType = 'up-to-date' | 'in-maintenance' | 'soon';

interface Loader {
  name: string;
  icon: string;
  status: StatusType;
  lastDetection: string;
  releaseDate: string;
}

const statusConfig: Record<
  StatusType,
  { icon: IconName; label: string; className: string }
> = {
  'up-to-date': {
    icon: 'upToDate',
    label: 'Up-to-date',
    className: 'status-up-to-date',
  },
  'in-maintenance': {
    icon: 'maintance',
    label: 'In maintenance',
    className: 'status-in-maintenance',
  },
  soon: {
    icon: 'clock',
    label: 'Soon',
    className: 'status-soon',
  },
};

const loaders: Loader[] = [
  {
    name: 'Valorant',
    icon: LoaderVL,
    status: 'soon',
    lastDetection: 'Never',
    releaseDate: '28 May 2025',
  },
  {
    name: 'SCP: Secret Lab',
    icon: LoaderSL,
    status: 'soon',
    lastDetection: 'Never',
    releaseDate: '28 May 2025',
  },
  {
    name: 'Roblox',
    icon: LoaderRB,
    status: 'soon',
    lastDetection: '29 May 2025',
    releaseDate: '28 May 2025',
  },
  {
    name: 'The Finals',
    icon: LoaderTF,
    status: 'soon',
    lastDetection: '-----',
    releaseDate: '-- -- ----',
  },
  {
    name: 'Counter Strike 2',
    icon: LoaderCS,
    status: 'soon',
    lastDetection: '-----',
    releaseDate: '-- -- ----',
  },
  {
    name: 'Genshin Impact',
    icon: LoaderGI,
    status: 'soon',
    lastDetection: '-----',
    releaseDate: '-- -- ----',
  },
];

export default function Status() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const q = self.selector!;
      const tl = gsap.timeline({
        defaults: { duration: 0.5, ease: 'power1.out' },
      });

      tl.fromTo(mainRef.current, { autoAlpha: 0 }, { autoAlpha: 1 });

      tl.fromTo(
        q('h1'),
        { y: -20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1 },
        '-=0.3',
      );

      tl.fromTo(
        q('.status-table tbody tr'),
        { x: 50, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, stagger: 0.1 },
        '-=0.4',
      );

      tl.fromTo(
        q('.status-pill'),
        { scale: 0.8, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, stagger: 0.1 },
        '-=0.5',
      );
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={mainRef}
      id="status">
      <div className="status-container">
        <h1>Status</h1>
        <div className="status-table-wrapper">
          <table className="status-table">
            <thead>
              <tr>
                <th>
                  <Icon
                    name="products"
                    className="header-icon"
                  />{' '}
                  Loader
                </th>
                <th>
                  <Icon
                    name="activity"
                    className="header-icon"
                  />{' '}
                  Status
                </th>
                <th>
                  <Icon
                    name="eyeOff"
                    className="header-icon"
                  />{' '}
                  Last Detection
                </th>
                <th>
                  <Icon
                    name="flag"
                    className="header-icon"
                  />{' '}
                  Release Date
                </th>
              </tr>
            </thead>
            <tbody>
              {loaders.map((l) => {
                const cfg = statusConfig[l.status];
                return (
                  <tr key={l.name}>
                    <td className="loader-cell">
                      <img
                        src={l.icon}
                        alt={l.name}
                        className="loader-icon"
                      />
                      {l.name}
                    </td>
                    <td>
                      <span className={`status-pill ${cfg.className}`}>
                        <Icon name={cfg.icon} /> {cfg.label}
                      </span>
                    </td>
                    <td>{l.lastDetection}</td>
                    <td>{l.releaseDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
