import { LegalScreen } from "../../components/LegalScreen";
import { CONTACT_EMAIL, LEGAL_VERSION } from "../../lib/account";

export default function TermsOfService() {
  return (
    <LegalScreen
      title="Terms of Service"
      updated={LEGAL_VERSION}
      bulgarianUrl="https://wathub.app/terms-bg.html"
      intro={"By creating an account or using WATHub, you agree to these terms. Please read them."}
      sections={[
        {
          heading: "Who runs WATHub",
          body: "WATHub is run by Victor Dimitrov, an individual based in Bulgaria. Correspondence address: bl. 208, entr. A, Suhata Reka, 1505 Sofia, Bulgaria. Phone: +359 885 885 087. You can contact us at " + CONTACT_EMAIL + ", in English or Bulgarian. This email address is also our single point of contact for members and for authorities under the EU Digital Services Act.",
        },
        {
          heading: "Independent app",
          body: "WATHub is an independent community app made by students, for students. It is not affiliated with, endorsed by, or connected to the U.S. Department of State, any J-1 sponsor organization, agency or employer. Information shared by members is not official advice: always check important questions about your visa, program or job with your sponsor.",
        },
        {
          heading: "A free service",
          body: "WATHub is free. There are no payments, subscriptions or ads in the app.",
        },
        {
          heading: "Who can use WATHub",
          body: "You must be 18 or older. If we learn that someone is under 18, we will delete their account. You are responsible for your account and for keeping your password safe. One person, one account.",
        },
        {
          heading: "Community rules: zero tolerance",
          body: "WATHub has zero tolerance for objectionable content or abusive users. You must not post or send:\n• harassment, bullying, threats or hate speech\n• sexual, violent or otherwise offensive content\n• scams, fake job offers, fake housing or requests for money\n• spam or advertising\n• anything illegal, or other people's private information\nYou must not pretend to be someone else, including an employer, sponsor or WATHub itself. Our Community Guidelines explain these rules in more detail and are part of these terms.",
        },
        {
          heading: "Reporting illegal or harmful content",
          body: "In the app, you can report any post, comment, message, event, trip or profile (tap ⋯), and block any user.\n\nAnyone, even without an account, can report illegal content by emailing " + CONTACT_EMAIL + ". Please include: where it is (a link, screenshot or clear description), why you believe it is illegal, your name and email address, and a statement that you believe in good faith that your report is accurate and complete. (You don't have to give your name if the report is about child sexual abuse material.)\n\nWe confirm that we received your report, and we tell you what we decided. If you are in danger, contact the police first (911 in the US, 112 in the EU).",
        },
        {
          heading: "How we moderate",
          body: "• Automatic tools: a word filter stops some offensive words before they are posted (you see a message and can change your text), and limits stop spam, for example too many posts in a short time. These tools never remove published content and never suspend accounts on their own.\n• People: every report is reviewed by a person. We decide based on these terms, our Community Guidelines and the law.\n• What we can do: remove content; remove a profile photo or bio; suspend or permanently ban an account. We choose based on how serious the problem is, whether it has happened before, and the risk to other members. Serious cases, such as threats, scams, sexual content or anything that puts someone in danger, can lead to an immediate permanent ban.\n• Crimes: if we learn about something that suggests a threat to someone's life or safety, we will inform the police or other competent authorities.",
        },
        {
          heading: "If we act on your content or account",
          body: "If we remove your content or suspend your account, we email you a statement of reasons: what we did, why, which rule it broke, whether it was decided by a person, and how to appeal. We skip this only when the law or someone's safety prevents it.\n\nTo appeal, reply to that email or write to " + CONTACT_EMAIL + " within 6 months. A person will look at the decision again and reply to you, and we will undo it if we got it wrong. You can also go to court at any time.",
        },
        {
          heading: "Your content",
          body: "You own what you post. By posting, you allow WATHub to store, copy and show it to other members inside the app, only for running the app. This permission ends when you or we delete the content (except for backups, which expire, and copies we must keep because of a report, as described in the Privacy Policy). You are responsible for what you post, and you can delete it at any time.",
        },
        {
          heading: "Ratings and reviews",
          body: "Members can rate and review the cities, employers and positions of their past seasons. Reviews must be honest and based on your own, first-hand experience. Don't name, describe or attack individual people (such as managers or coworkers), don't share private information, and don't post anything you know is false or misleading.\nEvery rating and review is the personal opinion of the member who wrote it, not the opinion of WATHub. The member who posts a review is solely responsible for its content. WATHub does not check, verify or endorse reviews and is not responsible for their accuracy.\nWe may show ratings and reviews to other members, as averages or as individual reviews, and we may remove any review that breaks these terms or that we receive a valid complaint about. Employers can never pay to change or remove reviews.",
        },
        {
          heading: "Events, trips and meeting people",
          body: "Events and trips are organized by members, not by WATHub. The same goes for travelling with people you find through flight routes. We don't check them and we're not responsible for them. Be careful when meeting people you met online: meet in public places, tell a friend where you are going, and never send money to people you don't know.",
        },
        {
          heading: "Finance tools are not advice",
          body: "The finance features help you keep track of your own money. Calculations, alerts and tax information (for example about Social Security and Medicare) are general information, not tax, legal or financial advice. Check with your employer, your sponsor or a tax professional before acting on them.",
        },
        {
          heading: "No guarantees",
          body: "WATHub is provided \"as is\". We work to keep it running and accurate, but we can't promise it will always be available or free of mistakes. To the extent the law allows, WATHub is not liable for losses caused by using the app or by other members, including their posts and reviews.\nNothing in these terms limits liability that cannot be limited by law, such as for death or personal injury caused by negligence, for fraud, or for harm caused intentionally or by gross negligence.",
        },
        {
          heading: "Ending your account",
          body: "You can delete your account at any time in Profile → Delete account. What is deleted is explained in the Privacy Policy. We may suspend or delete accounts that break these terms, as described above.",
        },
        {
          heading: "Our name and logo",
          body: "The WATHub name, logo and app design belong to WATHub. Don't use them in a way that suggests you are WATHub or work with us, for example a page, group or account called WATHub. Your own content stays yours.",
        },
        {
          heading: "Law and disputes",
          body: "These terms are governed by the law of Bulgaria. If you live in another EU country, you also keep the protections your country's consumer law gives you, and you can bring a claim in the courts where you live. If something goes wrong, please contact us first so we can try to solve it together.",
        },
        {
          heading: "Changes",
          body: "We may update these terms. We will update the date at the top. If the changes are important, we will tell you in the app at least 15 days before they take effect, unless a change is needed sooner because of the law or for safety. If you don't agree, you can delete your account.",
        },
        {
          heading: "Contact",
          body: "Questions or safety concerns? Email us at " + CONTACT_EMAIL + ".",
        },
      ]}
    />
  );
}
