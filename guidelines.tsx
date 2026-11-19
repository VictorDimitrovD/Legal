import { LegalScreen } from "../../components/LegalScreen";
import { CONTACT_EMAIL, LEGAL_VERSION } from "../../lib/account";

export default function CommunityGuidelines() {
  return (
    <LegalScreen
      title="Community Guidelines"
      updated={LEGAL_VERSION}
      bulgarianUrl="https://wathub.app/guidelines-bg.html"
      intro={"WATHub is a place for J-1 Work and Travel students to help each other. These guidelines keep it friendly, honest and safe for everyone. They are part of our Terms of Service."}
      sections={[
        {
          heading: "Be kind and respectful",
          body: "Everyone here is far from home, often for the first time. Be patient and welcoming, especially with first-season students. No harassment, bullying, threats, insults or hate speech, including about someone's country, language, religion, gender or background.",
        },
        {
          heading: "Be honest",
          body: "Use your real name and real information. Don't pretend to be someone else, including an employer, sponsor, agency or WATHub itself. Share real experiences about jobs, housing and cities, good and bad, so others can make good decisions. When you rate a job or city, only rate places where you really worked, and keep it about the job, not about individual people.",
        },
        {
          heading: "Protect each other from scams",
          body: "Never post fake job offers, fake housing or anything that asks people to pay or send money. Never ask anyone for passwords, bank details, Social Security numbers or copies of documents like passports and DS-2019s. If something looks like a scam, report it. WATHub will never ask you for your password or money.",
        },
        {
          heading: "Keep it appropriate and legal",
          body: "No sexual content, nudity, graphic violence, or content about illegal drugs or weapons. Don't encourage others to break the law or the rules of their J-1 program.",
        },
        {
          heading: "Respect privacy",
          body: "Don't share other people's personal information, photos or private messages without their permission. What's said in a private chat stays there.",
        },
        {
          heading: "No spam or advertising",
          body: "Keep posts useful and on topic. Don't post the same thing again and again, and don't advertise products, services or other apps.",
        },
        {
          heading: "Events and trips",
          body: "Describe events and trips honestly: where, when, cost and what's included. If plans change, update or delete them. When meeting people, choose public places and tell a friend where you're going.",
        },
        {
          heading: "Travelling together",
          body: "Flight routes help you find students on the same flights. Get to know people in the chat first, and never share booking codes, tickets, passport details or copies of your documents with anyone.",
        },
        {
          heading: "Report and block",
          body: "If someone breaks these guidelines, tap ⋯ to report the post, comment, message, event, trip or profile. Reports are anonymous: the other person is not told who reported them. We email you when we have reviewed your report.\nYou can also block anyone. Blocked people aren't told. They can no longer message you, join your events or trips, send you friend requests, or see your posts, events, trips and messages, and you won't see their messages in group chats.\nNo account? Email " + CONTACT_EMAIL + " to report illegal content.\nIf you are in danger, contact the police first (911 in the US, 112 in the EU).",
        },
        {
          heading: "What happens if the rules are broken",
          body: "WATHub has zero tolerance for abusive behavior. Every report is reviewed by a person. Depending on how serious it is, whether it happened before, and the risk to others, we may remove content, suspend an account, or permanently ban someone. Serious cases can lead to an immediate ban, without a warning first.\nWhen we act, we email the person what we did, why, and how to appeal. Appeals go to " + CONTACT_EMAIL + " within 6 months, and a person looks at the decision again.",
        },
        {
          heading: "Ideas and questions",
          body: "Have an idea to make WATHub better, or a question about these guidelines? Email us at " + CONTACT_EMAIL + ". We read everything.",
        },
      ]}
    />
  );
}
