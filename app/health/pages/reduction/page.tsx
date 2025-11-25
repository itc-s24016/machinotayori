import styles from "../../page.module.css";

export default function Page() {
    return (
        <main className={styles.container}>
            <article className={styles.post}>
                <h1 className={styles.heading}>介護保険料の減額・免除について</h1>
                <p>介護保険料は、介護保険制度を維持するために必要な大切な財源です。</p>
                <p>しかし、災害や収入減少など特別な事情がある場合、申請により保険料の減額や免除を受けられる場合があります。</p>
                <p>減免には申請期限があります。</p>
                <p>災害・収監を除き、<strong>減免事由が発生した年度の納期限の7日前まで</strong>に申請が必要です。</p>
                <p>該当する可能性がある方は早めにご相談ください。</p>
                <br /><br />

                <section>
                    <h2 className={styles.bold}>減額・免除が認められるケース</h2>

                    <ul>
                        <li><strong>（1）災害による損害</strong><br />
                            家屋や家財が災害で損害を受けた場合。
                        </li>

                        <li><strong>（2）生計維持者の死亡・長期入院</strong><br />
                            主な収入を得ていた家族が死亡または長期間入院し、収入が大きく減った場合。
                        </li>

                        <li><strong>（3）生計維持者の失業・事業廃止</strong><br />
                            給与の喪失や事業の休廃止により収入が著しく減少した場合。
                        </li>

                        <li><strong>（4）農作物被害による収入減少</strong><br />
                            台風・干ばつなどの災害により農作物が不作となり、収入が大幅に減少した場合。
                        </li>
                    </ul>

                    <p>※（1）〜（4）は、<strong>世帯の所得状況</strong>と<strong>損害・収入減の程度（前年より30%以上の減少）</strong>に応じて減免割合が変わります。</p>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>法律に基づく免除</h2>
                    <ul>
                        <li><strong>（5）収監期間中の保険料免除</strong><br />
                            刑務所等に収監された期間の保険料が免除されます（介護保険法第63条）。
                        </li>
                    </ul>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>所得状況による減額</h2>
                    <ul>
                        <li><strong>（6）所得が生活保護基準に満たない場合</strong><br />
                            本人が第2・第3段階の保険料額で、世帯収入が生活保護基準相当額以下の場合、<strong>第1段階相当額まで減額</strong>されます。
                        </li>
                    </ul>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>その他の特例</h2>
                    <ul>
                        <li><strong>（7）債務返済のための居住用資産の売却</strong><br />
                            返済後の所得額で保険料を再計算し、差額が減額されます。
                        </li>

                        <li><strong>（8）破産宣告を受けた場合</strong><br />
                            当該年度の保険料が<strong>第1段階相当</strong>まで減額されます。
                        </li>
                    </ul>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>申請方法</h2>
                    <p>減免を希望される場合は、以下の書類を添えて町役場福祉課へ申請してください。</p>
                    <br></br>
                    <ul>
                        <li>介護保険料減免申請書</li>
                        <li>理由を証明できる書類（罹災証明・離職票・収入証明など）</li>
                        <li>本人確認書類</li>
                    </ul>
                    <br></br>
                    <p>事由によって必要書類が異なりますので、事前にお問い合わせください。</p>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>注意事項</h2>
                    <p>減免は<strong>必ず申請が必要</strong>です。</p>
                    <p>条件に該当しても、自動的には適用されません。</p>
                    <p>また、申請期限を過ぎると受付できませんのでご注意ください。</p>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>お問い合わせ先</h2>
                    <p><a href={""} className={styles.link}>町役場福祉課</a>:098-xxx-xxxx</p>
                    <p>制度に関する相談は、町役場福祉課または地域包括支援センターへお問い合わせください。</p>
                </section>

            </article>
        </main>
    );
}
