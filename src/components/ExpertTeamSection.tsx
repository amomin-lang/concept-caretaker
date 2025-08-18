import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
    credentials: "",
    certification: "CPA",
    image: "/team/team-bernetta.png",
  },
  {
    id: 5,
    name: "Denise Hall",
    credentials: "",
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
                  className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mx-auto border-4 border-primary shadow-lg"
                />
                {member.certification && (
                  <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2">
                    {(member.name === "Adeel Momin" || member.name === "Choon Ng" || member.name === "Zoran Sarabaca" || member.name === "Bernetta Lee" || member.name === "Denise Hall" || member.name === "Fred Fardeman") ? (
                      <a href={
                        member.name === "Adeel Momin" ? "https://www.linkedin.com/in/adeelmomin" : 
                        member.name === "Choon Ng" ? "https://au.linkedin.com/in/choonng" :
                        member.name === "Zoran Sarabaca" ? "https://au.linkedin.com/in/zoran-sarabaca-bba2a38" :
                        member.name === "Bernetta Lee" ? "https://au.linkedin.com/in/bsylee" :
                        member.name === "Denise Hall" ? "https://au.linkedin.com/in/denisehall" :
                        "https://au.linkedin.com/in/fred-fardeau-b4496251"
                      } target="_blank" rel="noopener noreferrer">
                        <img 
                          src="/lovable-uploads/91d0d7ff-b4d4-4f8c-89fb-a30d3f58cbea.png" 
                          alt="LinkedIn" 
                          className="w-8 h-8 object-contain hover:opacity-80 transition-opacity"
                        />
                      </a>
                    ) : (
                      <img 
                        src="/lovable-uploads/91d0d7ff-b4d4-4f8c-89fb-a30d3f58cbea.png" 
                        alt="LinkedIn" 
                        className="w-8 h-8 object-contain"
                      />
                    )}
                  </div>
                )}
              </div>
              <h3 className="font-bold text-sm text-foreground">{member.name}</h3>
              <p className="text-xs text-muted-foreground">{member.credentials}</p>
              {member.certification && (
                <p className={`text-xs ${member.name === "Denise Hall" ? "text-black" : "text-primary font-semibold"}`}>
                  {member.certification}
                </p>
              )}
              {member.additional && (
                <p className={`text-xs ${member.name === "Denise Hall" ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                  {member.additional}
                </p>
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