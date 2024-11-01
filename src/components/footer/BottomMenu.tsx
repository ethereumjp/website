import { css } from "@emotion/react";
import Link from "next/link";
import { FC } from "react";

export const BottomMenu = () => {
  const wrapperStyle = css`
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  `;

  const NavLink: FC<{
    id: string;
    href: string;
    text: string;
    _new?: boolean;
  }> = ({ id, href, text, _new }) => {
    const listStyle = css`
        list-style-type: none;
        margin: 12px 0;
      `;
    const linkStyle = css`
        color: #646464;
        text-decoration: none;
        &:hover {
          opacity: 0.6;
        }
      `;

    return (
      <li css={listStyle}>
        <Link id={id} href={href} css={linkStyle}>
          {text} {_new ? <span css={css` color: #1C1CFF;`}>[NEW!]</span> : ""}
        </Link>
      </li>
    );
  };

  return (
    <div css={wrapperStyle}>
      <section id="use_ethereum">
        <h4>触ってみる</h4>
        <NavLink
          id="wallet"
          href="https://ethereum.org/ja/wallets/find-wallet/"
          text="ウォレットを用意"
        />
        <NavLink
          id="exchange"
          href="https://ethereum.org/ja/get-eth/"
          text="ETHを入手"
        />
      </section>

      <section id="learn_ethereum">
        <h4>理解する</h4>
        <NavLink
          id="whitepaper"
          href="https://ethereum.org/en/whitepaper/"
          text="Ethereum Whitepaper"
        />
      </section>

      <section id="develop_on_ethereum">
        <h4>開発する</h4>
        <NavLink
          id="documentation"
          href="https://ethereum.org/ja/developers/docs/"
          text="開発ドキュメント"
        />
      </section>

      <section id="ethereum_ecosystem">
        <h4>参加する</h4>
        <NavLink id="participate" href="/about/joinus/" text="メンバー募集" />

        <NavLink
          id="participate"
          href="https://ethereum.org/ja/community/get-involved/"
          text="いろんな関わり方"
        />
        <NavLink
          id="online"
          href="https://ethereum.org/ja/community/online/"
          text="オンラインコミュニティ"
        />
      </section>

      <section id="for_enterprise">
        <h4>事業者の方</h4>
        <NavLink id="contact" href="/contact" text="お問い合わせ" />
      </section>

      <section id="about_ethereum_jp">
        <h4>Ethereum Japanについて</h4>
        <NavLink id="about" href="/about" text="Ethereum Japanとは" />
        <NavLink
          id="discord"
          href="https://discord.gg/Tm5jU3DSCE"
          text="EJ Discord"
        />
      </section>
    </div>
  );
};
