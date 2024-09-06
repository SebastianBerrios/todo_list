import github from "../assets/github.svg";
import youtube from "../assets/youtube.svg";
import instagram from "../assets/instagram.svg";
import tiktok from "../assets/tiktok.svg";
import discord from "../assets/discord.svg";

export default function SocialMedia() {
  return (
    <div className="flex gap-2 justify-center pt-2">
      <a
        target="_blank"
        rel="noopener noreferrer"
        role="link"
        href="https://github.com/SebastianBerrios"
      >
        <img src={github} alt="github" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        role="link"
        href="https://www.youtube.com/@electrocodee"
      >
        <img src={youtube} alt="youtube" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        role="link"
        href="https://www.instagram.com/electrocodee/"
      >
        <img src={instagram} alt="instagram" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        role="link"
        href="https://www.tiktok.com/@electrocodee"
      >
        <img src={tiktok} alt="tiktok" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        role="link"
        href="https://www.discord.gg/4mj2bemRkr"
      >
        <img src={discord} alt="discord" />
      </a>
    </div>
  );
}
