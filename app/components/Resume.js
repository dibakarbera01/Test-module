      
import { 
  CoreLayoutItem, 
  BlankLayout, 
  CoreClasses,  
  CoreBox,
  CoreH4,
  CoreH6,
  CoreLink,
  CoreTableContainer,
  CoreTableCell,
  CoreTableRow,
  CoreTable,
  CoreTableHead,
  CoreTableBody
} from "@wrappid/core";

import ModuleClasses from "../styles/ModuleClasses";
export default function Resume() {
  return (
    <>
      <CoreLayoutItem id={BlankLayout.PLACEHOLDER.CONTENT} styleClasses={[CoreClasses.MARGIN.M3]}>

        <CoreBox styleClasses={[CoreClasses.PADDING.P1, ModuleClasses.TEST_WRAPPID_STYLE_CLASS]}>
          
          <CoreH4 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.BG.BG_GREY_400, CoreClasses.COLOR.TEXT_INFO_DARK]}> Resume  </CoreH4>

          <CoreH4 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.BG.BG_GREY_400, CoreClasses.COLOR.TEXT_INFO_DARK]}> Dibakar Bera  </CoreH4>
  
        </CoreBox>

        <CoreBox styleClasses={[CoreClasses.SHADOW.LARGE, CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_AROUND, CoreClasses.MARGIN.M2]}>

          <CoreBox>
            <CoreH6>
              Email:
              <CoreLink href="dibakarbera01@gmail.com">
                dibakarbera01@gmail.com
              </CoreLink>
            </CoreH6>

          </CoreBox>

          <CoreBox>
            <CoreH6>+91-7602978967</CoreH6>

          </CoreBox>

          <CoreBox>
            <CoreLink styleClasses={[CoreClasses.TEXT.TEXT_CENTER]} href="https://www.linkedin.com/in/dibakar-bera-1b85231b5" ><CoreH6>Linklden</CoreH6></CoreLink>

          </CoreBox>

          <CoreBox>
            <CoreLink styleClasses={[CoreClasses.TEXT.TEXT_CENTER]} href="https://dibakarbera.pages.dev/" ><CoreH6>Portfolio</CoreH6></CoreLink>

          </CoreBox>

          <CoreBox>
            <CoreLink styleClasses={[CoreClasses.TEXT.TEXT_CENTER]} href="https://github.com/dibakarbera01" ><CoreH6>Github</CoreH6></CoreLink>

          </CoreBox>
        </CoreBox>
       
        <CoreBox>
          <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.BORDER.BORDER_ROUNDED_5, CoreClasses.BG.BG_INFO_LIGHT, CoreClasses.MARGIN.M2]}>
            ABOUT
          </CoreH6>
        </CoreBox>

        <CoreBox
          styleClasses={[CoreClasses.DEV_BORDER.BORDER_SECONDARY_LIGHT, CoreClasses.MARGIN.M3, CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_AROUND]}
        >
          <CoreBox>
            <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.SHADOW.NORMAL, CoreClasses.MARGIN.M1, CoreClasses.BORDER.BORDER_ROUNDED]}>
            Full-stack developer specializing in accessible, visually appealing web applications. Certified in Core Java, MongoDB Node.js Developer Path and skilled in SDLC methodologies. Emphasizing strong communication, problem-solving, and teamwork for effective project delivery.My passion for development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.
            </CoreH6>
          </CoreBox>

          <CoreBox>
            <img
              src="https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.webp?b=1&s=170667a&w=0&k=20&c=9cS9Dj2jKbJGqfI0X0U-jZNURFc-foLzDm1Ls-Q_fgo="
              height={"170px"}
              width={"260px"}
            />
          </CoreBox>
        </CoreBox>

        <CoreH6 /* styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.SHADOW.NORMAL, CoreClasses.MARGIN.M1, CoreClasses.BORDER.BORDER_ROUNDED]} */>
          {/*  Full-stack developer specializing in accessible, visually appealing web applications. Certified in MongoDB Node.js Developer Path. Skilled in SDLC methodologies, emphasizing strong communication, problem-solving, and teamwork for effective project delivery. */}
        </CoreH6>  

        <CoreBox>
          <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.BORDER.BORDER_ROUNDED_5, CoreClasses.BG.BG_INFO_LIGHT, CoreClasses.MARGIN.M2]}>
            Education
          </CoreH6>
        </CoreBox>

        <CoreTableContainer >
          <CoreTable
            styleClasses={[CoreClasses.WIDTH.MIN_W_50]}
            aria-label="simple table"
          >
            <CoreTableHead styleClasses={[CoreClasses.MARGIN.M1]}>
              <CoreTableRow>
                <CoreTableCell>EXAMINATION NAME</CoreTableCell>

                <CoreTableCell align="right">YEAR OF PASSING</CoreTableCell>

                <CoreTableCell align="right">
                  YOARD/UNIVERSITY&nbsp;
                </CoreTableCell>

                <CoreTableCell align="right">PERCENTAGE&nbsp;</CoreTableCell>
              </CoreTableRow>
            </CoreTableHead>

            <CoreTableBody>
              <CoreTableRow>
                <CoreTableCell component="th" scope="row">
                  SECONDARY [MADHYAMIK]
                </CoreTableCell>

                <CoreTableCell align="right"> 2018</CoreTableCell>

                <CoreTableCell align="right"> W.B.B.S.E</CoreTableCell>

                <CoreTableCell align="right">83.5%</CoreTableCell>
              </CoreTableRow>

              <CoreTableRow>
                <CoreTableCell component="th" scope="row">
                  HIGHER SECONDARY
                </CoreTableCell>

                <CoreTableCell align="right"> 2020</CoreTableCell>

                <CoreTableCell align="right">W.B.C.H.S.E</CoreTableCell>

                <CoreTableCell align="right">78.8%</CoreTableCell>
              </CoreTableRow>

              <CoreTableRow>
                <CoreTableCell component="th" scope="row">
                  B.Tech ECE
                </CoreTableCell>

                <CoreTableCell align="right"> 2024</CoreTableCell>

                <CoreTableCell align="right">HIT, Haldia</CoreTableCell>

                <CoreTableCell align="right">80.3%</CoreTableCell>
              </CoreTableRow>
            </CoreTableBody>
          </CoreTable>
        </CoreTableContainer>

        <CoreBox>
          <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.BORDER.BORDER_ROUNDED_5, CoreClasses.BG.BG_INFO_LIGHT, CoreClasses.MARGIN.M2]}>
            Skills
          </CoreH6>
        </CoreBox>

        <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_AROUND, CoreClasses.MARGIN.M3]}>
          <CoreBox>
            <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_CENTER]}>Languages
            </CoreH6>

            <CoreBox styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.BG.BG_DOT_GRID_1]}>
              <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_LIGHTER]}>Java</CoreH6>

              <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_LIGHTER]}>
                JavaScript
              </CoreH6>

              <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_LIGHTER]}>
                HTML
              </CoreH6>

              <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_LIGHTER]}>CSS</CoreH6>
            </CoreBox>

          </CoreBox>

          <CoreBox>
            <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_CENTER]} >Frameworks</CoreH6>

            <CoreBox styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.BG.BG_DOT_GRID_1]}>
              <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_LIGHTER]}>Next.js</CoreH6>

              <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_LIGHTER]}>Express</CoreH6>

              <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_LIGHTER]}>Tailwind CSS</CoreH6>

              <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_LIGHTER]}> Node</CoreH6>
            </CoreBox>

          </CoreBox>

          <CoreBox>
            <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_CENTER]} >Libraries / Databases</CoreH6>

            <CoreBox styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.BG.BG_DOT_GRID_1]}>
              <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_LIGHTER]} >React</CoreH6>

              <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_LIGHTER]} >Redux </CoreH6>

              <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_LIGHTER]} >Material-UI</CoreH6>

              <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_LIGHTER]} >MongoDB</CoreH6>

              <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_LIGHTER]} > Relational Database(MySQL)</CoreH6>
            </CoreBox>

          </CoreBox>

          <CoreBox>
            <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_CENTER]} >Frameworks</CoreH6>

            <CoreBox styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.BG.BG_DOT_GRID_1]}>
              <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_LIGHTER]} >Next.js</CoreH6>

              <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_LIGHTER]} >Express</CoreH6>

              <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_LIGHTER]} >Tailwind CSS</CoreH6>

              <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_LIGHTER]} > Node</CoreH6>
            </CoreBox>

          </CoreBox>

          <CoreBox>
            <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_CENTER]} >Soft Skills</CoreH6>

            <CoreBox styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.BG.BG_DOT_GRID_1]}>
              <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_LIGHTER]}>Leadership</CoreH6>

              <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_LIGHTER]}> Event Management</CoreH6>

              <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_LIGHTER]}>Writing</CoreH6>

              <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_LIGHTER]}>Public Speaking</CoreH6>

              <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_LIGHTER]}>Time Managemen</CoreH6>
            </CoreBox>

          </CoreBox>
        </CoreBox>

        <CoreBox>
          <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.BORDER.BORDER_ROUNDED_5, CoreClasses.BG.BG_INFO_LIGHT, CoreClasses.MARGIN.M2]}>
          Professional Certifications
          </CoreH6>
        </CoreBox>

        <CoreBox styleClasses={[CoreClasses.SHADOW.LARGE, CoreClasses.COLOR.TEXT_WARNING_DARK, CoreClasses.BG.BG_DOT_GRID_1, CoreClasses.BORDER.BORDER_ROUNDED_5]}>
          <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_CENTER]}> Google Analytics Certification - Google (01/2024 - 01/2025)

          </CoreH6>

          <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_CENTER]}> MongoDB Node.js Developer Path - MongoDB (01/2024)
          </CoreH6>

          <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_CENTER]}> Core Java Specialization - Coursera (07/2023)</CoreH6>
        </CoreBox>

        <CoreBox>
          <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.BORDER.BORDER_ROUNDED_5, CoreClasses.BG.BG_INFO_LIGHT, CoreClasses.MARGIN.M2]}>
          Projects
          </CoreH6>
        </CoreBox>
      
        <CoreBox styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.BORDER.BORDER_ROUNDED, CoreClasses.SHADOW.NORMAL]}>
          <CoreH6 styleClasses={[]}>• Freelance Project : Technologies: Next.js , Tailwind CSS, Node.js,Express.js :--- 
            <CoreLink href="https://cosmicpestsolutions.com/">
                        Live   Link
            </CoreLink>
          </CoreH6>

          <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_LIGHT]}>
          Developed a responsive website using Next.js, hosted via Cloudflare on a Hostinger domain. Architected a scalable blogging site with static-site generation, hosting over 50 blogs. Implemented SEO strategies for enhanced traffic and ensured optimal performance across devices.
          </CoreH6>

        </CoreBox>

        <CoreBox styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.BORDER.BORDER_ROUNDED, CoreClasses.SHADOW.NORMAL, CoreClasses.BG.BG_GREY_300]}>
          <CoreH6 styleClasses={[]}>• Freelance Project : Technologies: Next.js , Tailwind CSS, Node.js,Express.js :--- 
            <CoreLink href="https://cosmicpestsolutions.com/">
                        Live   Link
            </CoreLink>
          </CoreH6>

          <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_LIGHT]}>
          Developed a responsive website using Next.js, hosted via Cloudflare on a Hostinger domain. Architected a scalable blogging site with static-site generation, hosting over 50 blogs. Implemented SEO strategies for enhanced traffic and ensured optimal performance across devices.
          </CoreH6>

        </CoreBox>

        <CoreBox styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.BORDER.BORDER_ROUNDED, CoreClasses.SHADOW.NORMAL]}>
          <CoreH6 styleClasses={[]}>• Freelance Project : Technologies: Next.js , Tailwind CSS, Node.js,Express.js :--- 
            <CoreLink href="https://cosmicpestsolutions.com/">
                        Live   Link
            </CoreLink>
          </CoreH6>

          <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_LIGHT]}>
          Developed a responsive website using Next.js, hosted via Cloudflare on a Hostinger domain. Architected a scalable blogging site with static-site generation, hosting over 50 blogs. Implemented SEO strategies for enhanced traffic and ensured optimal performance across devices.
          </CoreH6>

        </CoreBox>

        <CoreBox>
          <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.BORDER.BORDER_ROUNDED_5, CoreClasses.BG.BG_INFO_LIGHT, CoreClasses.MARGIN.M2]}>
          Extracurricular & Achievements
          </CoreH6>
        </CoreBox>

        <CoreBox styleClasses={[CoreClasses.SHADOW.LARGE, CoreClasses.COLOR.TEXT_WARNING_DARK, CoreClasses.BG.BG_DOT_GRID_1, CoreClasses.BORDER.BORDER_ROUNDED_5]}>
          <CoreH6 > • Participated in various hackathons, demonstrating collaboration, ideation, and rapid prototyping skills.

          </CoreH6>

          <CoreH6 > • Certified Front End Engineer From Mangtas.
          </CoreH6>

          <CoreH6 > • Created and designed the magazine for the ECE department as a graphics designer for the Iartefacts college club.</CoreH6>
        </CoreBox>
        
      </CoreLayoutItem>
      
    </>
  );
}
