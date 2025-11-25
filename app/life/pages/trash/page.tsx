import styles from "../../page.module.css";

export default function Page() {
    return (
        <main className={styles.container}>
            <article className={styles.post}>
                <h1 className={styles.heading}>ゴミ出しについて</h1>
                <p>家庭系ごみの分別と正しい出し方についてご案内します。</p>
                <p>以下のルールを守り、地域の環境美化にご協力ください。</p>
                <br /><br />

                <section>
                    <h2 className={styles.bold}>家庭系ごみの5種類分別</h2>
                    <p>ごみは下記の5種類に分別してください。</p>
                    <br></br>
                    <ul>
                        <li>もやすごみ</li>
                        <li>もやさないごみ</li>
                        <li>有害・危険ごみ、乾電池</li>
                        <li>資源化物（缶・びん・ペットボトル・紙・布・草・木）</li>
                        <li>粗大ごみ、スプリング入り製品</li>
                    </ul>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>ごみの出し方3原則</h2>
                    <ol>
                        <li><strong>きまったごみ：</strong>分別して決められた方法で出す</li>
                        <li><strong>きまった日時：</strong>指定日の夜明けから朝8:30までに出す</li>
                        <li><strong>きまった場所：</strong>決められた場所に出す。他の場所には出さない</li>
                    </ol>
                    <br></br>
                    <p>※民間の一般廃棄物収集運搬許可業者による収集世帯は、収集日時が市の収集とは異なります。</p>
                    <p>　管理会社や契約業者にお問い合わせください。</p>
                    <p>※戸建への引っ越しなどで初めてごみを出される場合は、クリーン推進課までお申し込みください。</p>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>チラシ・パンフレット</h2>
                    <ul>
                        <li className={styles.link}>家庭ごみの正しい分け方・出し方</li>
                        <li>※地域別収集曜日一覧は裏面に掲載</li>
                        <li className={styles.link}>家庭用ごみ分別の手引き</li>
                        <li className={styles.link}>許可業者収集世帯用家庭ごみの正しい分け方・出し方</li>
                    </ul>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>その他の注意事項</h2>
                    <ul>
                        <li>家電4品目（テレビ、エアコン、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機）</li>
                        <li>フロンを使用した業務用製品</li>
                        <li>小型家電・パソコンの処分について</li>
                        <li>市では収集できないごみ</li>
                        <li>充電式電池・ボタン電池</li>
                    </ul>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>問い合わせ先</h2>
                    <p><a href={"#"} className={styles.link}>クリーン推進課</a>: 098-889-3567</p>
                </section>
                <br /><br /><br />
            </article>
        </main>
    );
}
