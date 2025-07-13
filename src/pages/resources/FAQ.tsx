import FAQSection, { FAQItem } from '../../components/FAQSection';
import { ResourcePromo } from '../../components/ResourcePromo';
import { ReactComponent as DiscordIcon } from '../../assets/icons/Discord Icon.svg';
import { ReactComponent as TelegramIcon } from '../../assets/icons/Telegram Icon.svg';
import styles from './AntiBanGuide.module.css';

const faqs: FAQItem[] = [
  {
    question: 'How safe is it to use DarkVoid’s products?',
    answer: (
      <p className="txt-desc">
        We strive to ensure that our software is as safe as possible and conduct
        thorough tests and improvements on a regular basis. In our extensive
        testing, we have never encountered any automatic bans triggered by
        anti-cheat systems, and we guarantee 100% that you will not be
        automatically banned as a direct result of using our software. However,
        the use of such software inherently carries a certain level of risk for
        manual bans due to in-game reports, and we cannot guarantee complete
        protection against those. Game developers may still choose to enforce
        their Terms of Service and impose manual penalties. Therefore, we
        recommend that you exercise caution and always use our products
        responsibly.
      </p>
    ),
    initialOpen: true,
  },
  {
    question: 'Have doubts about our safety and security?',
    answer: (
      <p className="txt-desc">
        This is a very frequent and common concern, and we completely understand
        it, as we clearly state that all of our software are 100% undetected and
        safe to use, you shouldn't be worried about safety when using any of our
        software. However we know that for many peoples our stated facts are not
        always enough, so incase you still have doubts which is totally normal,
        we recommend you to join our discord community where you can check our
        "reviews" text channel to see other customers reviews of our products.
        Thus you can also ask other customers about it, and interact with the
        whole community of darkvoid, and this way you will get an unbiased
        answer. We know that even this is not enough for some but unfortunately
        there is no other ways for us to further prove our safety.
      </p>
    ),
  },
  {
    question: 'Which payment methods do you accept?',
    answer: (
      <p className="txt-desc">
        We accept payments from both international and Russian credit cards. To
        ensure authenticity and quality, we do not support resellers, and our
        official products can only be purchased directly through this website.
        As payments are fully automated, you will receive your license key and a
        download link to the software via email immediately after completing
        your purchase, allowing you to start using the product right away. It’s
        also very important to note that all of our purchase links are for
        one-time purchases, not recurring subscription-based plans.
      </p>
    ),
  },
  {
    question: 'Where can I get help if I face software issues?',
    answer: (
      <p className="txt-desc">
        We offer help to all our customers through our official Discord server.
        There, you can request HWID resets for free, receive support from our
        team, create tickets for custom reasons, and interact with other users.
      </p>
    ),
  },
  {
    question: 'What is the goal of DarkVoid?',
    answer: (
      <p className="txt-desc">
        Our goal is to deliver the most cost-effective and secure cheating
        solutions. We focus on providing straightforward and minimalistic
        products, such as ESP-only cheats, designed to avoid detection and
        ensure a zero-ban risk. By keeping prices low and reliability high, we
        aim to offer you and other users a simple, safe, and budget-friendly
        experience, which we have never seen done before in our competition.
      </p>
    ),
  },
];

export default function FAQ() {
  return (
    <main className={styles.container}>
      <div className={styles.columns}>
        <article className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.section}>Resources</span>
            <span className={styles.separator}>/</span>
            <span className={styles.subtitle}>Anti-ban Guide</span>
          </h1>
          <p className="txt-desc">
            Welcome to Darkvoid’s FAQ. Here you’ll find detailed answers to the
            questions we hear most—everything from safety and feature overviews
            to payment methods and license extensions. This section is designed
            to give you clear, concise information so you can get the most out
            of your Darkvoid experience. If you don’t see what you’re looking
            for, our support channels are just a click away.
          </p>
          <FAQSection items={faqs} />
        </article>
        <div className={styles.promos}>
          <ResourcePromo
            icon={<DiscordIcon />}
            title="Having Trouble?"
            description="If you encounter problems with our software — leave a ticket on our Discord server and we will help you."
            buttonText="Join Our Discord Server"
            buttonUrl="https://discord.gg/darkvoid"
            buttonIcon={<DiscordIcon />}
          />

          <ResourcePromo
            icon={<TelegramIcon />}
            title="We also have Telegram"
            description="If you encounter problems with our software — leave a ticket on our Discord server and we will help you."
            buttonText="Join Our Telegram Group"
            buttonUrl="https://t.me/darkvoid"
            buttonIcon={<TelegramIcon />}
          />
        </div>
      </div>
    </main>
  );
}
