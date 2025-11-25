import styles from "../../page.module.css";

export default function Page() {
    return (
        <main className={styles.container}>
            <article className={styles.post}>
                <h1 className={styles.heading}>介護保険について</h1>
                <p>介護保険は、高齢者やその家族が必要な介護サービスを安心して利用できるように整備された制度です。</p>
                <br /><br />

                <section>
                    <h2 className={styles.bold}>介護保険の概要</h2>
                    <p>介護保険は40歳以上の方が加入し、介護が必要となった際にサービスを利用できる仕組みです。</p>
                    <ul>
                        <li>対象：65歳以上、または40歳〜64歳の特定疾病の方</li>
                        <li>申請：要介護認定の申請が必要</li>
                        <li>負担割合：所得等に応じて1〜3割</li>
                    </ul>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>要介護認定の申請について</h2>
                    <p>介護サービスを利用するには「要介護認定」を受ける必要があります。以下の場所で申請できます。</p>
                    <ul>
                        <li>町役場福祉課（窓口）</li>
                        <li>地域包括支援センター</li>
                        <li>代理申請（家族・ケアマネジャー等）も可能</li>
                    </ul>
                    <p>申請後、訪問調査および主治医意見書をもとに認定がおこなわれます。</p>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>利用できる主なサービス</h2>
                    <ul>
                        <li>訪問介護（ホームヘルプ）</li>
                        <li>デイサービス（通所介護）</li>
                        <li>ショートステイ</li>
                        <li>福祉用具レンタル・購入</li>
                        <li>住宅改修費の支給</li>
                        <li>施設入所サービス</li>
                    </ul>
                    <p>詳しい内容は担当ケアマネジャー、または地域包括支援センターまでお問い合わせください。</p>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>ケアプラン作成について</h2>
                    <p>介護サービスを組み合わせる計画（ケアプラン）は、ケアマネジャーが無料で作成します。</p>
                    <p>要支援1・2の方は地域包括支援センターが担当します。</p>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>介護保険料と各種補助制度</h2>
                    <p>介護保険料は所得に応じて段階的に設定されています。滞納すると給付制限がかかる場合があります。</p>
                    <p>以下の費用助成・軽減制度があります。</p>
                    <ul>
                        <li>高額介護サービス費の支給</li>
                        <li>低所得者向け負担軽減</li>
                        <li>施設利用者の食費・居住費軽減制度</li>
                    </ul>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>在宅介護支援</h2>
                    <p>自宅で介護を行う家庭へのサポートも充実しています。</p>
                    <ul>
                        <li>家族介護者支援（相談窓口）</li>
                        <li>認知症サポート（初期集中支援チーム）</li>
                        <li>福祉用具や住宅改修の利用相談</li>
                    </ul>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>減額・免除</h2>
                    <p>こちらの記事より閲覧してください</p>
                    <p><a href={"/health/pages/reduction"} className={styles.link}>介護保険料の減額・免除について</a></p>
                </section>
                <br></br>

                <section>
                    <h2 className={styles.bold}>申請窓口・相談先</h2>
                    <p>介護保険に関する申請・質問は以下で受け付けています。</p>
                    <ul>
                        <li>町役場 福祉課：098-xxx-xxxx</li>
                        <li>地域包括支援センター：098-xxx-xxxx</li>
                        <li>介護保険担当メール：xxxx@town.xx.jp</li>
                    </ul>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>よくある問い合わせ</h2>
                    <ul>
                        <li>更新申請は有効期限の60日前から可能です。</li>
                        <li>サービス内容を変更する場合はケアマネジャーへ相談してください。</li>
                        <li>介護保険証を紛失した場合は再発行手続きが必要です。</li>
                    </ul>
                </section>
                <br />

                <section>
                    <p className={styles.bold}>お問い合わせ先</p>
                    <p><a href={""} className={styles.link}>介護課</a>: 098-xxx-xxxx</p>
                    <p>気になる点があれば早めに相談し、必要なサービスを適切に利用してください。</p>
                </section>
            </article>
        </main>
    );
}
