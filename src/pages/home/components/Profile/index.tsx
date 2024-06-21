import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/Victtor-777.png" />

      <ProfileDetails>
        <header>
          <h1>Victtor Guilherme</h1>

          <ExternalLink
            text="Github"
            target="_blank"
            href="https://github.com/Victtor-777"
          />
        </header>
        <p>
          Engenheiro de Software dedicado ao aprendizado constante. Atualmente,
          mergulhando nos estudos de TypeScript, Next.js e Node.js.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            Victtor-777
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Freelancer
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            123 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  );
}
