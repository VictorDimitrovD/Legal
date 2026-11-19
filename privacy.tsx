import { LegalScreen } from "../../components/LegalScreen";
import { CONTACT_EMAIL, LEGAL_VERSION } from "../../lib/account";

export default function PrivacyPolicy() {
  return (
    <LegalScreen
      title="Privacy Policy"
      updated={LEGAL_VERSION}
      bulgarianUrl="https://wathub.app/privacy-bg.html"
      intro={"WATHub is a community app for J-1 Work and Travel participants. This policy explains what information we collect, who can see it, how long we keep it, and how you can delete it."}
      sections={[
        {
          heading: "Who is responsible for your data",
          body: "WATHub is run by Victor Dimitrov, an individual based in Bulgaria. He is responsible for your personal data (the \"data controller\"). You can contact him about anything in this policy at " + CONTACT_EMAIL + ", by phone at +359 885 885 087, or by post at: Victor Dimitrov, bl. 208, entr. A, Suhata Reka, 1505 Sofia, Bulgaria. We have not appointed a Data Protection Officer, because the law does not require one for a service like WATHub.",
        },
        {
          heading: "Information you give us",
          body: "• Account: your email address and password (passwords are stored encrypted by our login provider; we never see them). If you sign in with Apple or Google, we receive the name and email address you choose to share (Apple lets you hide your real email).\n• Profile: name, profile photo (optional), home country, current city and state, first or returning season, previous seasons (year, place, employer, position, industry, housing), bio and interests.\n• Content: posts, questions, comments, votes, events, trips and messages.\n• Finance tools: jobs, shifts, tips, paychecks and expenses you choose to log.\n• Ratings: your ratings and reviews of the cities and jobs of your past seasons.\n• Flight route: if you choose to add it, your departure date and the airports on your way to the US. We never ask for your airline, flight number, times or booking details.\n• Safety: reports you send and people you block.\n• Agreement: that you confirmed you are 18 or older and accepted these policies, which version, and when.",
        },
        {
          heading: "Information from your phone and our systems",
          body: "• Notifications: if you allow notifications, we store a notification token for your phone (an anonymous address that lets us deliver notifications to it) and your notification settings. You can turn notifications off at any time in the app or in your phone's settings.\n• Camera and photos: only used when you choose to take or pick a profile photo. We only upload the photo you choose.\n• Crash reports: if the app crashes or hits an error, a technical report (for example device model, iOS version, app version and what went wrong) is sent to our error-tracking service so we can fix it. It does not include your messages, posts or password.\n• Safety records: to stop spam, we briefly record when you post or send things (not what you wrote). To avoid sending the same notification many times, we briefly record which notifications were sent.\n• Bot check: when you sign up, sign in or reset your password with email, a security check uses technical information about your device and connection (such as your IP address) to tell people from bots.\nWe do not track your location, and we do not use advertising or tracking tools. This app and our website do not use advertising or tracking cookies.",
        },
        {
          heading: "Who can see what",
          body: "• Other signed-in members can see your profile (including your photo), posts, comments, events, trips and which events or trips you joined. Profile photos are stored as files with a long, hard-to-guess web address so the app can show them quickly; anyone who has that exact address could open the photo, but the addresses are only shown inside the app.\n• Messages can only be seen by the people in that chat. When you join a group chat, you can't see what was written before you joined.\n• Ratings and reviews: for now, only you can see them. We plan to show them to other members later, as averages and as individual reviews linked to the city, employer, position and year, without your name or photo.\n• Employer names you enter may be suggested to other members when they type an employer, so everyone uses the same spelling.\n• Employer search: signed-in members can search an employer and see which WATHub members listed a season there (name, home country, year and position), so they can ask about it. Next to your name there is an \"Ask\" button that sends you a message request, unless you turn off \"Let students ask me about my seasons\" in Settings → Privacy. You can always decline or block a request.\n• Flight route: only shown if you turn on \"Show my route to others\". Then signed-in members who look for students flying around a date and airport (for example, to find people on the same flight) can see your name, home country, city, whether it is your first or a returning season, departure date and airports. If you hide your city in the app, it is not shown here either. You can hide or delete your route at any time.\n• Your finance data (jobs, shifts, tips, paychecks, expenses) is private. Only you can see it.\n• Reports and blocks are private. The person you report or block is not told. Our moderators can see reports so they can review them.\n• If you block someone, they can no longer message you, join your events or trips, or send you friend requests, and they can no longer see your posts, comments, events, trips, seasons or messages. You no longer see their messages in group chats. They can still see your name and photo, for example in a group chat you are both in.",
        },
        {
          heading: "How we use your information",
          body: "We use it only to run WATHub: to show your profile and content to other members, deliver messages, send the notifications you allow, calculate your finance summaries, keep the community safe, and send you emails about your account (such as verification codes, a welcome email, and emails about reports and moderation decisions). We do not sell your information, we do not show ads, and we do not use your information to train AI models.\nWe don't make decisions about you based only on automated processing. The word filter only stops a post before it is published; it never removes content or suspends anyone. Every moderation decision is made by a person.",
        },
        {
          heading: "Why we are allowed to use your information",
          body: "Under data protection law (such as the EU's GDPR), we need a legal reason for each use of your information:\n• To provide the app you signed up for (contract): your account, profile, posts, messages, events, trips, ratings, flight matching, finance tools and account emails.\n• Your consent: for optional things, such as notifications, your profile photo and showing your flight route to others. You can withdraw your consent at any time in the app, without affecting what happened before.\n• Our legitimate interests: to keep the community and your account safe (reports, blocking, moderation, spam limits, the bot check) and to find and fix errors (crash reports). You can object to this; email us and we will look at your situation.\n• Legal obligations: for example, explaining our moderation decisions under the EU Digital Services Act, answering valid requests from authorities, and keeping records the law requires.",
        },
        {
          heading: "Service providers",
          body: "These providers process data only on our instructions, to run the service for us:\n• Supabase: database, photos and sign-in. Stored in the European Union (Paris, France).\n• Brevo: account emails. Based in the EU (France).\n• Sentry: crash reports. Processed in the EU (Germany).\n• Expo: delivering notifications, together with Apple. Expo is based in the United States.\n• Cloudflare (Turnstile): the bot check on sign-up, sign-in and password reset. Not used for advertising. Cloudflare is based in the United States.\nIf you choose to sign in with Apple or Google, they handle that sign-in under their own privacy policies.\nWhen a provider processes data outside the EU (for example in the United States), we rely on the safeguards the law requires, such as the EU-U.S. Data Privacy Framework or the European Commission's Standard Contractual Clauses.",
        },
        {
          heading: "How long we keep your information",
          body: "• Your account, profile, content and finance data: while your account exists. When you delete something, it is removed right away.\n• Backups: our hosting provider keeps encrypted backups for a limited time (usually up to 30 days); deleted information disappears from them when they expire.\n• Reports: a short quote of reported content is kept while the report is handled and for 12 months after, so we can deal with appeals and repeated abuse. Then the quote is deleted automatically.\n• Records of moderation emails we send (what was decided and why): 12 months, for appeals, or until you delete your account. Then deleted automatically.\n• Spam-limit records: up to 3 days. Notification records: up to 4 days.\n• Crash reports: deleted automatically by our error-tracking service, at the latest after 90 days.\n• Your 18+ and policy confirmation: while your account exists.\nWhen you delete your account (Profile → Delete account), we permanently delete your profile, photo, posts, comments, messages, events, trips, ratings, flight route, finance data, notification token and confirmation records. Only quotes of reported content (see above), and backups until they expire, may remain for the periods listed.",
        },
        {
          heading: "Your rights",
          body: "You can see and edit your profile in the app, and delete your account at any time in Profile → Delete account. You also have the right to:\n• get a copy of your information, including in a format you can take elsewhere\n• correct information that is wrong\n• have your information deleted\n• restrict or object to how we use it\n• withdraw your consent at any time\nTo use any of these rights, email " + CONTACT_EMAIL + ". We will reply within one month. If your account was suspended, you can still use these rights by email.\nIf you think we handle your data unlawfully, you can complain to the Bulgarian Commission for Personal Data Protection (2 Prof. Tsvetan Lazarov Blvd., 1592 Sofia, Bulgaria; phone +359 2 915 3518; www.cpdp.bg) or to the data protection authority where you live.",
        },
        {
          heading: "Do you have to give us your data?",
          body: "To create an account and use WATHub, we need your email address (or your Apple or Google sign-in), your name and your confirmation that you are 18 or older; without them we can't provide the app. Everything else, such as your photo, bio, seasons, finance entries, flight route and notifications, is optional, and you can leave it out or delete it at any time.",
        },
        {
          heading: "How we protect your data",
          body: "• All connections between the app and our servers are encrypted (HTTPS/TLS), and data is stored encrypted by our hosting provider.\n• Database rules make sure each person can only see what they are allowed to see (for example, only their own finance data and only chats they are in). We test these rules regularly with automated attack checks.\n• Your login is stored in your iPhone's secure Keychain; logins expire automatically and are renewed securely.\n• Only the operator of WATHub has admin access, and the accounts that manage our servers are protected by two-factor authentication. Passwords are never visible to us.\n• Spam limits, a bot check and moderation help protect accounts and the community.\nNo system is perfectly secure. If a personal data breach happens that is likely to put your rights at risk, we will report it to the Commission for Personal Data Protection within 72 hours where the law requires, and tell affected users without undue delay when the risk is high.",
        },
        {
          heading: "Age",
          body: "WATHub is only for people aged 18 or older. We do not knowingly collect information from anyone under 18. If we learn that someone under 18 has an account, we delete it.",
        },
        {
          heading: "Changes",
          body: "If we change this policy, we will update the date at the top. If the changes are important, we will tell you in the app before they take effect.",
        },
        {
          heading: "Contact",
          body: "Questions about your privacy? Email us at " + CONTACT_EMAIL + ".",
        },
      ]}
    />
  );
}
