import styles from "../../page.module.css";

export default function Page() {
    return (
        <main className={styles.container}>
            <article className={styles.post}>
                <h1 className={styles.heading}>空き地・空き家の管理について</h1>
                <p>空き地や空き家は適切な管理を行うことで、地域環境の維持やトラブル防止につながります。</p>
                <p>以下の点にご注意ください。</p>
                <br /><br />

                <section>
                    <h2 className={styles.bold}>管理方法と日常の注意点</h2>
                    <p>空き地・空き家は定期的に巡回し、雑草の除去や倒木・破損物の確認を行ってください。</p>
                    <p>また、窓や扉の施錠状態を確認し、不審者の侵入を防ぐことが重要です。</p>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>申請と維持費補助</h2>
                    <p>空き家や空き地の管理に関して、自治体では維持費補助制度があります。</p>
                    <p>補助金や助成金を受ける場合は、必要書類をそろえたうえで、自治体の窓口に提出してください。</p>
                    <p>申請書類の内容例：</p>
                    <ul>
                        <li>管理計画書</li>
                        <li>固定資産税の納付証明書</li>
                        <li>所有者確認書類（登記事項証明書等）</li>
                    </ul>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>メンテナンスと安全管理</h2>
                    <p>屋根や外壁の破損、雨漏り、害獣の侵入などがないか定期的に点検してください。</p>
                    <p>長期間放置すると劣化が進み、補助金対象外になる場合があります。</p>
                    <p>特に倒木や庭木の枝が隣接道路や歩道に危険を及ぼさないよう注意してください。</p>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>不動産業者との連携</h2>
                    <p>空き家の管理や売却、賃貸の相談は不動産業者と連携すると効率的です。</p>
                    <p>管理委託契約を結ぶことで、日常点検や清掃を依頼できます。</p>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>継承権や所有権の注意点</h2>
                    <p>相続などで空き家・空き地を引き継ぐ場合、登記情報を確認し、権利関係を明確にしてください。</p>
                    <p>権利関係が不明確だと管理や売却に支障が出る場合があります。</p>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>不審者の警戒</h2>
                    <p>無人の建物は犯罪や不法投棄の対象になりやすいため、夜間の巡回や防犯カメラ設置、近隣住民との情報共有を推奨します。</p>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>建物の取り壊し</h2>
                    <p>建物を取り壊す場合は、解体許可や届出が必要です。</p>
                    <p>解体業者との契約のほか、近隣への告知も行ってください。</p>
                    <p>補助金制度を利用できる場合がありますので、事前に自治体に相談してください。</p>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>申請書類の案内</h2>
                    <p>主な申請書類と問い合わせ先：</p>
                    <ul>
                        <li>空き家管理補助金申請書：<a href={""} className={styles.link}>空き家・空き地管理窓口</a></li>
                        <li>解体許可申請書：<a href={""} className={styles.link}>建築指導課</a></li>
                        <li>管理計画書：自治体ホームページまたは窓口で入手可能</li>
                    </ul>
                    <br></br>

                    <p className={styles.bold}>お問い合わせ先</p>
                    <p><a href={"#"} className={styles.link}>空き家・空き地管理窓口</a>: 098-xxx-xxxx</p>
                </section>
                <br /><br /><br />
            </article>
        </main>
    );
}
