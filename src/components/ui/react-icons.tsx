import { FaJava } from "react-icons/fa";
import {
  SiAmazonaws,
  SiCypress,
  SiDigitalocean,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiGithub,
  SiJavascript,
  SiJest,
  SiJunit5,
  SiLinkedin,
  SiMicrosoftazure,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPlaywright,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSpring,
  SiTwitch,
  SiTypescript,
  SiVercel,
  SiYoutube,
  SiVitest,
} from "react-icons/si";

interface ReactIconProps {
  name: string;
}

export default function ReactIcon({ name }: ReactIconProps) {
  switch (name) {
    case "github":
      return <SiGithub />;
    case "linkedin":
      return <SiLinkedin />;
    case "twitch":
      return <SiTwitch />;
    case "aws":
      return <SiAmazonaws />;
    case "azure":
      return <SiMicrosoftazure />;
    case "cypress":
      return <SiCypress />;
    case "digitalocean":
      return <SiDigitalocean />;
    case "docker":
      return <SiDocker />;
    case "express":
      return <SiExpress />;
    case "nest":
      return <SiNestjs />;
    case "java":
      return <FaJava />;
    case "junit":
      return <SiJunit5 />;
    case "javascript":
      return <SiJavascript />;
    case "jest":
      return <SiJest />;
    case "mongodb":
      return <SiMongodb />;
    case "next":
      return <SiNextdotjs />;
    case "node":
      return <SiNodedotjs />;
    case "playwright":
      return <SiPlaywright />;
    case "postgresql":
      return <SiPostgresql />;
    case "prisma":
      return <SiPrisma />;
    case "python":
      return <SiPython />;
    case "fastapi":
      return <SiFastapi />;
    case "flask":
      return <SiFlask />;
    case "react":
      return <SiReact />;
    case "spring":
      return <SiSpring />;
    case "typescript":
      return <SiTypescript />;
    case "vercel":
      return <SiVercel />;
      case "youtube":
        return <SiYoutube />;
    case "vitest":
      return <SiVitest />;
    default:
      return null;
  }
}
