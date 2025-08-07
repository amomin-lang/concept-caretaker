// import teamChoon from "@/assets/team-choon.jpg";        
// import teamAdeel from "@/assets/team-adeel.jpg";
// import teamZoran from "@/assets/team-zoran.jpg";
// import teamBernetta from "@/assets/team-bernetta.jpg";
// import teamDenise from "@/assets/team-denise.jpg";
// import teamFred from "@/assets/team-fred.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Choon Ng",
    credentials: "B.E, MBus",
    certification: "AIBB RBV",
    image: "/team/team-choon.png",
  },
  {
    id: 2,
    name: "Adeel Momin",
    credentials: "M.Com, MBA",
    certification: "AIBB RBV",
    image: "/team/team-adeel.png",
  },
  {
    id: 3,
    name: "Zoran Sarabaca",
    credentials: "Principal",
    certification: "AIBB RBV",
    image: "/team/team-zoran.png",
  },
  {
    id: 4,
    name: "Bernetta Lee",
    credentials: "CPA",
    certification: "",
    image: "/team/team-bernetta.png",
  },
  {
    id: 5,
    name: "Denise",
    credentials: "B.Train & Dev",
    certification: "M.Entrep & Innov",
    additional: "CBV (AAVI)",
    image: "/team/team-denise.png",
  },
  {
    id: 6,
    name: "Fred Fardeman",
    credentials: "M.Bus.Mgt.",
    certification: "AIBB RBV",
    image: "/team/team-fred.png",
  },
];

export const ExpertTeamSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Team of Certified Expert Valuers
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <div className="relative mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mx-auto border-4 border-primary/20"
                />
                {member.certification && (
                  <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-2">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <span className="text-xs text-primary font-bold">✓</span>
                    </div>
                  </div>
                )}
              </div>
              <h3 className="font-bold text-sm text-foreground">{member.name}</h3>
              <p className="text-xs text-muted-foreground">{member.credentials}</p>
              {member.certification && (
                <p className="text-xs text-primary font-semibold">{member.certification}</p>
              )}
              {member.additional && (
                <p className="text-xs text-muted-foreground">{member.additional}</p>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl mx-auto">
            With over <span className="font-bold text-primary">500 valuations completed</span> across Australia, 
            our team of certified experts combines real-world business sales experience with academic precision. 
            Trusted by lawyers, accountants, and business owners alike, our valuations are tailored, 
            court-tested, and grounded in current market data – giving you clarity, confidence, 
            and results you can rely on.
          </p>
        </div>
      </div>
    </section>
  );
};