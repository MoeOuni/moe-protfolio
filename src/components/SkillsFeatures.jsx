import SkillCard from "./SkillCard";

const SkillsFeatures = () => {
  return (
    <div className="bg-light">
      <div className="container px-4 py-5" id="hanging-icons">
        <h2 className="pb-2 border-bottom">What I&apos;m Good At 🔧</h2>
        <div className="container row g-4 py-5 row-cols-1 row-cols-lg-3 justify-content-evenly">
          <SkillCard
            image={
              "https://res.cloudinary.com/dk1dqqqof/image/upload/v1688996381/5847f5c3cef1014c0b5e489d_zf6fyr.png"
            }
            name="HTML"
          />
          <SkillCard
            image={
              "https://res.cloudinary.com/dk1dqqqof/image/upload/v1688996382/62b2221b038aad4d3ed7ca30_otpaac.png"
            }
            name="CSS"
          />
          <SkillCard
            image={
              "https://res.cloudinary.com/dk1dqqqof/image/upload/v1698782306/tu2rl8mliu5pmrqtiee6.png"
            }
            name="Sass"
          />
          <SkillCard
            image={
              "https://res.cloudinary.com/dk1dqqqof/image/upload/v1688996381/613b64fe30e8530004ba3a03_miaapd.png"
            }
            name="JavaScript"
          />
          <SkillCard
            image={
              "https://res.cloudinary.com/dk1dqqqof/image/upload/v1698782306/h3j4zpgr3xwto9pmglie.png"
            }
            name="React"
          />
          <SkillCard
            image={
              "https://res.cloudinary.com/dk1dqqqof/image/upload/v1688997472/pngwing.com_4_lhokn1.png"
            }
            name="NodeJS"
          />
          <SkillCard
            image={
              "https://res.cloudinary.com/dk1dqqqof/image/upload/v1688997509/pngwing.com_5_hnydpc.png"
            }
            name="MongoDB"
          />
          <SkillCard
            image={
              "https://res.cloudinary.com/dk1dqqqof/image/upload/v1698782306/iderpy5gusscubzkmb4u.png"
            }
            name="MySQL"
          />
          <SkillCard
            image={
              "https://res.cloudinary.com/dk1dqqqof/image/upload/v1698782306/q0xmrx3zfstdtgcz6hfi.png"
            }
            name="PostgeSQL"
          />
          <SkillCard
            image={
              "https://res.cloudinary.com/dk1dqqqof/image/upload/v1688997354/pngwing.com_2_gvvjaq.png"
            }
            name="ExpressJs"
          />
          <SkillCard
            image={
              "https://res.cloudinary.com/dk1dqqqof/image/upload/v1688997355/pngwing.com_3_r2abx2.png"
            }
            name="Docker"
          />
          <SkillCard
            image={
              "https://res.cloudinary.com/dk1dqqqof/image/upload/v1698782381/oso7y1bijnwfs6jicmty.svg"
            }
            name="Socket.io"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsFeatures;
