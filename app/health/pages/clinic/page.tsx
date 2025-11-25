import styles from "../../page.module.css";

export default function Page() {
    return (
        <main className={styles.container}>
            <article className={styles.post}>
                <h1 className={styles.heading}>夜間・休日の救急外来について</h1>
                <p>夜間や休日に初期救急医療を提供する休日夜間急患センターは設置されておらず、在宅当番医制も実施されていません。</p>
                <p>そのため、入院を要する救急医療は、救急病院が対応しています。</p>
                <br /><br />

                <section>
                    <h2 className={styles.bold}>町立病院について</h2>
                    <p>町立病院は昭和xx年x月に設立され、独立採算で運営されています。</p>
                    <p>病院は地方独立行政法人として、市とは別法人格を有しています。</p>
                    <ul>
                        <li>所在地：〒xxx-xxxx 〇〇県〇〇町 ▢▢ x-xx-x</li>
                        <li>代表電話：098-xxx-xxxx</li>
                        <li>救急センター直通：098-xxx-xxxx</li>
                    </ul>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>交通アクセス</h2>
                    <p><strong>駐車場：</strong>無料駐車場を完備。</p>
                    <p>　　　　外来通院者は第一駐車場、それ以外のお客様は第二駐車場を利用してください。</p>
                    <p><strong>バス：</strong>最寄バス停：「〇〇町立病院前」</p>
                    <p>詳細は各ホームページで確認してください。</p>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>病院建替えに伴う歩行経路の変更</h2>
                    <p>バス停やモノレール駅、駐車場から新病院棟までの徒歩経路が変更されています。</p>
                    <p>詳細は病院ホームページをご確認ください。</p>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>救急外来の利用について</h2>
                    <p>〇〇町立病院救急センターは、患者自らの来院でも受け入れています。</p>
                    <p>ただし医師数や感染症流行状況によって診療制限があります。</p>
                    <p>受診を検討される場合は、必ず病院ホームページや新聞の「救急当直医」欄、電話により当日の受診可否をご確認ください。</p>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>時間外選定療養費について</h2>
                    <p>一般外来診療日の16時～翌朝8時や休診日に救急センターを受診する場合、診療費とは別に時間外選定療養費を負担する必要があります。</p>
                    <p>ただし入院や労災、交通事故、紹介状持参等の場合は対象外です。</p>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>一般外来</h2>
                    <ul>
                        <li>診療日：月～金（休診日除く）</li>
                        <li>受付時間：8時～16時</li>
                        <li>診療時間：8時45分～17時</li>
                        <li>休診日：土日祝日、年末年始</li>
                    </ul>
                    <p>予約や紹介状が必要な場合がありますので、詳細は病院ホームページで確認してください。</p>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>町内の救急病院一覧</h2>
                    <p>〇〇町内には〇〇町立病院以外にも2か所の指定救急病院があります。</p>
                    <p>夜間・休日の受診可否は各病院ごとに異なりますので、事前に確認してください。</p>
                    <ul>
                        <li><a href={""} className={styles.link}>▢▢第一病院</a>（民間）電話：098-xxx-xxxx</li>
                        <li><a href={""} className={styles.link}>▢▢メディカルセンター</a>（民間）電話：098-xxx-xxxx</li>

                    </ul>
                </section>
                <br />

                <section>
                    <h2 className={styles.bold}>お問い合わせ</h2>
                    <p><a href={""} className={styles.link}>保健総務課</a>: 098-xxx-xxxx</p>
                    <p>掲載している医療機関の診療状況は各ホームページで確認してください。</p>
                </section>
                <br /><br /><br />
            </article>
        </main>
    );
}
