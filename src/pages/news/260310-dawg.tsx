// import ContactForm from '@/components/forms/ContactForm';
import Layout from "@/components/layouts/base";
import { mq } from "@/themes/settings/breakpoints";
import { css } from "@emotion/react";
import type { NextPage } from "next";


const Release: NextPage = () => {
  const articleWrapperStyle = css`
    margin-left: auto;
    margin-right: auto;
    padding-top: 2rem;

    ${mq.laptop} {
      width: 75%;
    }
    
    p {
      line-height: 2rem;
    }
  `;

  return (
    <Layout pageTitle="News">
      <h1>Digital Assets Working Group（DAWG）を設立</h1>
      <h2>日本企業によるオンチェーン活用の実務フレームワーク整備へ</h2>
      <div css={articleWrapperStyle}>
        <p>
          一般社団法人Ethereum Japan（以下、EJ）は、日本企業によるオンチェーン技術の実務活用を促進するため、
          「Digital Assets Working Group（以下、DAWG）」を設立しました。
          本WGでは、株式トークン化を含むRWA（Real World Assets）やステーブルコインの活用を視野に入れ、
          日本企業がブロックチェーンおよびDeFi（分散型金融）を実務に導入する際の課題整理と実装フレームワークの研究を行います。
        </p>
        <p>
          近年、世界の金融機関やテクノロジー企業の間で、Ethereumを基盤とした資産のトークン化やオンチェーン金融の取り組みが急速に拡大しています。
          BlackRock、JPMorgan、Fidelity等の大手金融機関は、株式、マネー・マーケット・ファンド、預金などの金融資産を
          <a href="https://x.com/ethereum/status/2013313143728992700" target="_blank" rel="noreferrer">Ethereum上でトークン化する取り組み</a>を進めており、
          2026年2月時点でEthereum上でトークン化された資産は約150億ドル規模に達し、市場全体の
          <a href="https://app.rwa.xyz/networks" target="_blank" rel="noreferrer">60％以上を占め</a>ています。
        </p>
        <p>
          こうした世界的な動きと並行して、日本国内でもデジタル資産を活用した金融モデルの検討が進んでいます。
          2026年2月には、野村ホールディングスおよび大和証券グループ本社が三菱UFJ銀行、三井住友銀行、みずほ銀行と連携し、
          ステーブルコインを用いた株式・債券取引の実証実験を進める<a href="https://www.nikkei.com/article/DGXZQOUB131Z90T10C26A2000000/" target="_blank" rel="noreferrer">計画</a>が報じられました。
          またSBIホールディングスは、株式や債券、不動産などの資産をブロックチェーン上で売買可能な<a href="https://www.nikkei.com/article/DGXZQOUB211NA0R20C25A8000000/" target="_blank" rel="noreferrer">新たな市場の構築</a>を発表しています。
        </p>
        <p>
          資産のトークン化は既に技術的には可能な段階にあり、重要なのは、企業がデジタル資産を実務として扱うためのワークフローや基準を整備することだと我々は考えています。
          一方で、日本企業がオンチェーン経済に参入する際には、リスク管理、会計、監査、インフラ選定など、
          実務レベルでの判断基準やワークフローが十分に整理されていないという課題があります。
        </p>
        <p>
          DAWGでは、こうした企業実務の観点から課題を整理し、公共性のある判断基準および実装フレームワークの提示を目指します。
          日本企業がオンチェーン経済に参加する際の不確実性を下げ、企業がオンチェーン金融やデジタル資産を実務レベルで活用できる環境整備に取り組んで参ります。
        </p>
        <p>
          今後、オンラインおよびオフラインでの有識者議論や国内企業へのヒアリングを実施し、
          2026年6月には日本企業によるEthereum活用における課題整理と今後の方向性をまとめたレポートを公開する予定です。
        </p>
        <p>
          また、2026年9月に開催されるETHTokyo'26、及び同年11月に開催されるDevconにおいて本WGの進捗を報告し、国際的な議論との接続を図ります。
        </p>

        <h3>Digital Assets Working Group（DAWG）について</h3>
        <p>
          DAWGは、日本企業がブロックチェーンおよびDeFiを実務で活用する際に直面する課題を研究整理し、
          公共性のある判断基準および実装フレームワークを提示することを目的としたワーキンググループです。
          RWA（Real World Assets）やStablecoinを中心としたデジタル資産の活用を主たるテーマに、
          日本企業の実務観点からDeFiを始めとするEthereumエコシステムを利活用するためのインフラ要件や運用プロセスを整理します。
        </p>
        <p>
          現時点でのWG参画企業一覧:{" "}
          <a href="https://rikyu.io/" target="_blank" rel="noreferrer">株式会社RIKYU</a>、
          <a href="https://pglab.io/" target="_blank" rel="noreferrer">株式会社PGL</a>、
          <a href="https://fracton.ventures/" target="_blank" rel="noreferrer">Fracton Ventures株式会社</a>、
          <a href="https://www.mynawallet.jp/" target="_blank" rel="noreferrer">マイナウォレット株式会社</a>、
          <a href="https://gluefi.com/" target="_blank" rel="noreferrer">Gluefi株式会社</a>、
          <a href="https://www.aainc.co.jp/" target="_blank" rel="noreferrer">アライドアーキテクツ株式会社</a>
        </p>
        <p>本WGの事務局は、アライドアーキテクツ株式会社が務めます。</p>
      </div>
    </Layout>
  );
};

export default Release;
