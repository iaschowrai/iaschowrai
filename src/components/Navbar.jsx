import logo from "../assets/images/IAlogo.png";
import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  // Google Drive direct download link
  // const resumeLink = "https://drive.google.com/uc?export=download&id=11RLU4pwwndmhGiUaUK4Z6OB1rOiV7zni";
  const resumeLink = "https://drive.google.com/file/d/1tSAcFdtyroZGuCCoavDmrjpxb7XoXC-5/view?usp=sharing";

  return (
    <nav className="mb-20 flex item-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="https://www.iaschowrai.com">
          <img className="mx-2 w-10" src={logo} alt="logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <span className="flex flex-wrap gap-2 font-thin tracking-tight text-sm">
          Download Resume -&gt;
        </span>
        <a
          href={resumeLink}
          download
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Resume"
          title="Download Resume"
          className="text-cyan-400 hover:text-cyan-600 transition-colors"
        >
          <FaDownload />
        </a>
        <a
          href="https://www.linkedin.com/in/irshadahmeds/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          title="LinkedIn Profile"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/iaschowrai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github Profile"
          title="Github Profile"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
