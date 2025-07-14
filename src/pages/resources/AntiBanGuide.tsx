import { ResourcePromo } from '../../components/ResourcePromo';
import { ReactComponent as DiscordIcon } from '../../assets/icons/Discord Icon.svg';
import { ReactComponent as TelegramIcon } from '../../assets/icons/Telegram Icon.svg';
import styles from './AntiBanGuide.module.css';

export default function AntiBanGuide() {
  return (
    <main className={styles.container}>
      <div className={styles.columns}>
        <article className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.section}>Resources</span>
            <span className={styles.separator}>/</span>
            <span className={styles.subtitle}>Anti-ban Guide</span>
          </h1>

          <h2 className={styles.heading}>Automated Bans</h2>
          <p className={styles.paragraph}>
            Automated bans are overseen by Vanguard, the anti-cheat system used
            across various shooting games. While Vanguard primarily focuses on
            identifying unauthorized third-party software that offers unfair
            advantages, it also continuously monitors player statistics for any
            anomalies. For instance, players who consistently achieve
            extraordinarily high kill-death ratios, accumulate excessive kill
            counts, or maintain long win streaks without any losses may prompt
            an automated review.
          </p>
          <hr className={styles.divider} />

          <h2 className={styles.heading}>Manual Bans</h2>
          <p className={styles.paragraph}>
            In contrast, manual bans are issued by game developers’ personnel
            after a thorough investigation. These bans typically arise from
            player-submitted reports that highlight suspicious behavior, such as
            unnatural aiming precision or exploitative actions. The staff
            reviews gameplay evidence and assesses the context of these reports,
            often taking action when an account receives multiple reports.
            Unlike automated bans, manual bans depend on human judgment to
            confirm violations of the terms of service. Through our extensive
            testing, we found that manual bans and suspensions usually occur at
            higher competitive levels.
          </p>
          <hr className={styles.divider} />

          <h2 className={styles.heading}>
            Things You Can Do to Prevent Account Bans, Suspensions, or
            Restrictions
          </h2>
          <ul className={styles.list}>
            <li>Never get more than 4 wins in a row</li>
            <li>Never get more than 30 kills in a single game</li>
            <li>Don’t repeatedly queue with the same players</li>
            <li>Try to never get MVP</li>
            <li>
              Reduce the chance of getting reported by playing legit—even if
              that means sometimes dying on purpose and otherwise playing
              normally without helper software
            </li>
          </ul>

          <p className={styles.note}>
            This is a general guide only. For precise, game-specific anti-ban
            tips, head over to our Discord community and explore guides for all
            our supported games.
          </p>
        </article>

        <div className={styles.promos}>
          <ResourcePromo
            icon={<DiscordIcon />}
            title="Having Trouble?"
            description="If you encounter problems with our software — leave a ticket on our Discord server and we will help you."
            buttonText="Join Our Discord Server"
            buttonUrl="https://discord.gg/ZDBDDYqJ5y"
            buttonIcon={<DiscordIcon />}
          />

          <ResourcePromo
            icon={<TelegramIcon />}
            title="We also have Telegram"
            description="If you encounter problems with our software — leave a ticket on our Discord server and we will help you."
            buttonText="Join Our Telegram Group"
            buttonUrl="https://t.me/+FgcJNzKZVIk2NTQy"
            buttonIcon={<TelegramIcon />}
          />
        </div>
      </div>
    </main>
  );
}
